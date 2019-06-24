# Asynchronous and deferred operations
Asynchronous operations are not something native to PHP but it still is possible to execute some heavy
operations simultaneously or delay them until they absolutely have to be finished.
 
To make writing asynchronous code easier Magento provides DeferredInterface to use
as the result of asynchronous operations to allow client code to work with such
operations as it would with usual values.
 
## DeferredInterface
_Magento\Framework\Async\DeferredInterface_ is rather simple:
```php
interface DeferredInterface
{
    /**
     * @return mixed Value.
     * @throws \Throwable
     */
    public function get();

    public function isDone(): bool;
}
```
When client code needs the result _get()_ method will be called to retrieve the result
and if it's possible to wait _isDone()_ can be used to see whether the wait is needed.
 
There are 2 types of asynchronous operations where _DeferredInterface_ can be used to describe the result:
* Asynchronous operations in progress, calling _get()_ would wait for them to finish and return their result
* Deferred operations, _get()_ would actually start an operation, wait for it to finish and return the result
 
Sometimes developers require more control over long asynchronous operations that's why
there is an extended deferred variant - Magento\Framework\Async\CancelableDeferredInterface:
```php
interface CancelableDeferredInterface extends DeferredInterface
{
    /**
     * @param bool $force Cancel operation even if it's already started.
     * @return void
     * @throws CancelingDeferredException When failed to cancel.
     */
    public function cancel(bool $force = false): void;

    /**
     * @return bool
     */
    public function isCancelled(): bool;
}
```
This interface is for operations that may take too long and can be canceled.
 
#### Client code
Now let's see how client code of an asynchronous operations would look like.
Assume _serviceA, serviceB and serviceC_ all execute asynchronous operations (like sending HTTP requests)
```php
public function aMethod() {
    //Started executing 1st operation
    $operationA = $serviceA->executeOp();
    //Executing 2nd operations at the same time
    $operationB = $serviceB->executeOp2();

    //We need to wait for 1st operation to start operation #3
    $serviceC->executeOp3($operationA->get());
    
    //We don't have to wait for operation #2, let client code wait for it if it needs the result
    //Operation number #3 is being executed simultaneously with operation #2
    return $operationB;
}
```
And no callback in sight!
 
With deferred client code can start multiple operations at the same time, wait for operations required to finish
and pass promise of a result to another method.
 
## Deferred proxy
When writing a module or an extension you may not want to burden other developers
with knowing that your method is performing an asynchronous operation and there is a way to hide it -
_Magento\Framework\Async\ProxyDeferredFactory_, With it's help you can return values that seem like regular objects
but are in fact deferred results.
 
Example:
```php
public function doARemoteCall(string $uniqueValue): CallResult
{
    //Async HTTP request, get() will return a CallResult instance.
    //Call is in progress.
    $deferredResult = $this->client->call($uniqueValue);
    
    //Returns CallResult instance that will call $deferredResult->get() when any of the object's methods is used.
    return $this->proxyDeferredFactory->createFor(CallResult::class, $deferredResult);
}

public function doCallsAndProcess(): Result
{
    //Both calls running simultaneously
    $call1 = $this->doARemoteCall('call1');
    $call2 = $this->doARemoteCall('call2');
    
    //Only when CallResult::getStuff() is called the $deferredResult->get() is called.
    return new Result([
        'call1' => $call1->getStuff(),
        'call2' => $call2->getStuff()
    ]);
}
```
 
## Using DeferredInterface for background operations
As mentioned above the 1st type of asynchronous operations are operations executing in a background.
DeferredInterface can be used here to give client code a promise of a not yet received
result and wait for it by calling the _get()_ method.
 
Take a look at the example - creating shipments for multiple products:
```php
class DeferredShipment implements DeferredInterface
{
    private $request;
    
    private $done = false;
    
    private $trackingNumber;
    
    public function __construct(AsyncRequest $request)
    {
        $this->request = $request;
    }
    
    public function isDone() : bool
    {
        return $this->done;
    }
    
    public function get()
    {
        if (!$this->trackingNumber) {
            $this->request->wait();
            $this->trackingNumber = json_decode($this->request->getBody(), true)['tracking'];
            
            $this->done = true;
        }
        
        return $this->trackingNumber;
    }
}

class Shipping
{
    ....
    
    public function ship(array $products): array
    {
        $shipments = [];
        //Shipping simultaneously
        foreach ($products as $product) {
            $shipments[] = new DeferredShipment(
                $this->client->sendAsync(['id' => $product->getId()])
            );
        }
        
        return $shipments;
    }
}

class ShipController
{
    ....
    
    public function execute(Request $request): Response
    {
        $shipments = $this->shipping->ship($this->producs->find($request->getParam('ids')));
        $trackingsNumbers = [];
        foreach ($shipments as $shipment) {
            $trackingsNumbers[] = $shipment->get();
        }
        
        return new Response(['trackings' => $trackingNumbers]);
    }
}
```
 
Here multiple shipment requests are being sent at the same time with their results
gathered later. If you don't want to write your own _DeferredInterface_ implementations processing
results of asynchronous calls you can use _CallbackDeferred_ to provide callbacks that will be used
when _get()_ is called.
 
## Using DeferredInterface for deferred operations
2nd type of asynchronous operations are operations that are being postponed and executed only when a result is
absolutely needed.
 
Let's see the next example:
 
Assume you are creating a repository for an entity, you have a method that returns a singular entity
by ID, you want to make a performance optimization for cases when multiple entities are requested
during the same request-response process so you wouldn't load each one separately.
 
```php
class EntityRepository
{
    private $requestedEntityIds = [];
    
    private $identityMap = [];

    ...
    
    /**
     * @return Entity[]
     */
    public function findMultiple(array $ids): array
    {
        .....
        
        //Adding found entities to the identity map be able to find them by ID.
        foreach ($found as $entity) {
            $this->identityMap[$entity->getId()] = $entity;
        }

        ....
    }
    
    public function find(string $id): Entity
    {
        //Adding this ID to the list of previously requested IDs.
        $this->requestedEntityIds[] = $id;
        
        //Returning deferred that will find all requested entities
        //and return the one with $id
        return $this->proxyDefferedFactory->createFor(
            Entity::class,
            new CallbackDeferred(
                function () use ($id) {
                    if (empty($this->identityMap[$id])) {
                        $this->findMultiple($this->requestedEntityIds);
                        $this->requestedEntityIds = [];
                    }
                    
                    return $this->identityMap[$id];
                }
            )
        );
    }
    
    ....
}

class EntitiesController
{
    ....
    
    public function execute(): Response
    {
        //No actual DB query issued
        $criteria1Id = $this->entityService->getEntityIdWithCriteria1();
        $criteria2Id = $this->entityService->getEntityIdWithCriteria2();
        $criteria1Entity = $this->entityRepo->find($criteria1Id);
        $criteria2Entity = $this->entityRepo->find($criteria2Id);
        
        //Querying the DB for both entities only when getStringValue() is called the 1st time.
        return new Response(
            [
                'criteria1' => $criteria1Entity->getStringValue(),
                'criteria2' => $criteria2Entity->getStringValue()
            ]
        );
    }
}
```
 
## Examples in Magento
Please see our asynchronous HTTP client _Magento\Framework\HTTP\AsyncClientInterface_
and _Magento\Shipping\Model\Shipping_ with various _Magento\Shipping\Model\Carrier\AbstractCarrierOnline_
implementations to see how DeferredInterface can be used to work with asynchronous code.
