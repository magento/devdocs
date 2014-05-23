# Writing Magento Test Framework (MTF) Tests

This page discusses advanced options for writing your own MTF tests. You don't need to do this to run tests already configured with the MTF as discussed in [Running the Magento Test Framework (MTF)](running.md).

This page discusses how to:

*	Specify the test context using fixtures
*	Apply the test context using handlers
*	Set the constraints and their sequence for your tests
*	Isolate the tests
*	Run UI-specific tests using page and block objects

MTF has several features to assist you with the preceding tasks:

*	Global configuration files (`Module\Test\etc\global`), which help to configure and generate various testing entities for a module, namely:
	*	`fixture.xml` to create fixture structure, repositories, and handlers
	*	`constraint.xml` to create constraints
	*	`page.xml` to create page objects
*	Generators (`utils\generate`), which generate fixtures, handlers, page objects, repositories, and constraints.
*	Data sets (`methodName.csv`), which help to avoid using nested data sets in fixtures as well as link the test data and behavior to constraints.

## Contents

TBD

## Working With Fixtures

Fixtures enable you to create the preconditions for your tests separately from the tests themselves. Fixtures serve to set the context or environment for a test.

To create a fixture class, you must specify its structure and values. Basically, creating a fixture includes the following steps:

1.	Define the structure for a fixture in fixture configuration (`.xml`) file.
2.	Run the generator to generate a fixture class with the defined structure.
3.	Define the values for a fixture.

### Defining the Structure for a Fixture

There are two ways to the create structure for a fixture:

*	Individually using `[fixtureName].xml` 
*	Globally using `fixture.xml` 

To use `[fixtureName].xml`, you must specify a fixture's details in `Module\Test\etc\global\fixture.xml`. A fixture based on `[fixtureName].xml` inherits the latter's name.

Creating `[fixtureName].xml` files for a module and entering the structure manually can be time-consuming. To facilitate this task, MTF gets the structure for fixtures from the database automatically using `Module\Test\etc\global\fixture.xml`. You need only list all the fixtures you need for a module in this file and specify the necessary parameters. 

<a href="https://gist.github.com/xcomSteveJohnson/fcd123106ec941c14852" target="_blank">Sample fixture.xml</a>

Following is a list of required parameters (depending on the fixture, additional parameters might be necessary):

*	Fixture name (`catalogProductSimple` in the preceding sample)
*	Module name for which a fixture is created (`Magento_Catalog` in the preceding sample)
*	`type` parameter, which can have a value of either `eav` or `flat` 
*	`entity_type`, which defines the type of an entity in the Magento code
*	`collection`, which specifies where the structure data is to be taken

After you list all necessary fixtures, run the generator as discussed in the next section. Individual configuration files (`[fixtureName].xml`) and fixture classes are generated automatically.

### Using the Fixture Generator

The fixture generator (`utils\generate\fixture`) creates the fixture class from fixture configuration file. If you specified the configurations for fixtures globally (that is, in `fixture.xml`), the generator creates an individual configuration file for each declared fixture along with corresponding fixture classes. 

The generator creates only one fixture class from each individual configuration file; that is, after a fixture is created, the generator ignores this fixture's configuration file. To change a fixture's structure, delete this fixture class, make the necessary changes in its configuration file, and run the generator.

**Tip**: If you generated fixture classes from `fixture.xml` and need to adjust the structure of a newly created fixture, delete the fixture class, make changes in fixture's individual configuration file, and run the generator again.

### Settings Values for a Fixture

This section discusses how to set values for a fixture. 

**Note**: You can skip this section if you're generating fixtures using `fixture.xml` because it uses the default data set.

You can set values for a fixture in any of the following ways:

*	Repository class when you need several data sets for your fixture, but these data sets are not numerous and more general.
*	Data set (`[methodname].csv`) when you need specific data for a fixture. Data from `[methodname].csv` takes precedence over the repository.

The repository class should share the name with a fixture its configuration file. The data from the repository class is passed by a constructor `InjectableFixture::getDataFromRepository()` to a fixture class. <a href="https://gist.github.com/xcomSteveJohnson/90fd36e7fa0f8042c12c" target="_blank">Sample</a>

### Using the Repository Generator

A repository can be generated automatically from `Module\Test\etc\global\fixture.xml`.

Run the repository regenerator (`utils\generate\repository`) from the command line. The resulting repository class contains the values available in the database.

### Using InjectableFixture

The `InjectableFixture` class ensures transferring data from application to MTF. All fixture classes in the MTF extend `InjectableFixture`.

The `InjectableFixture` class has the following methods:

*	`persist()`: Public method that passes a fixture's data to the tested system.
*	`getData()`: Public method that retrieves data from the fixture to an array.
*	`getDataFieldConfig()`: Public method that retrieves data field configurations.
*	`getDataConfig()`: Public method that retrieves data configurations.
*	`getDataFromRepository()`: Public method that retrieves the values from a repository class.
*	`getDataByPath()`: Protected method that retrieves data as chain of keys.
*	`getDataByKey()`: Protected method that retrieves data by its key.
*	`_applyPlaceholders()`: Protected method that applies a placeholder for each data element in a fixture.

## Transferring the Test Conditions by Handlers

After you specify the preconditions for a test, you must decide how these preconditions should be transferred for testing purposes. By using different types of handlers, you can specify the best way of transferring data from the fixtures.

In the MTF, there are two default types of handlers:

*	The curl handler passes the preconditions using direct HTTP calls to the server according to the headless principle.
*	The UI handler passes preconditions to the user interface using a web browser.

You can create other handlers if necessary. To make them available in the MTF, declare them in the object manager (`Mtf\ObjectManagerFactory`). <a href="https://gist.github.com/xcomSteveJohnson/ab70e51d80f5d40bab5b" target="_blank">Sample</a>

The latest handler in the list has the highest priority.

### Generating and Adjusting Handlers

Handlers are generated automatically based on data in `fixture.xml`. Run the generator (`utils\generate\handler`) from the command line.

Samples of handlers defined in the object manager are located in in the `Handler` subdirectories of corresponding modules. By default, the UI and curl handler classes contain only one method: `persist()`. You must implement this method according to your testing needs. 

## Defining Constraints for Tests

Creating the test scenarios is not enough to test your application. You must also define the results of these scenarios and check whether actual results match the predefined ones. In the MTF, the assert class is responsible for checking the actual test results against the predefined results. A test case can have several constraints, depending on test conditions and data.

<a href="https://gist.github.com/xcomSteveJohnson/1cfb4b012ad7ef6f1fab" target="_blank">Assert class example</a>

### Creating Constraints and Linking Them to Test Behavior and Data

Create constraints as follows:

1.	List all constraints for a module in `Module\Test\etc\global\constraints.xml`.
2.	Run the generator (`utils\generate\constraint`) from the command line.

After all constraints are ready, you must list them along with data and behavior that requires these constraints in the data set, `Module\TestCase\TestCaseClassName\[methodName].csv`. <a href="https://gist.github.com/xcomSteveJohnson/a25a556bd6d6cf2bea0b" target="_blank">Sample</a>

The sequence of the constraints should be logical. For example, if you test the scenario on creating a new product in the Magento Admin, first list the constraint for the `You saved the product` message and then for the product page. 

## Isolating the Test

When running your tests, you might need to return to a known state to verify the accuracy of the test results.

Isolation test management enables you to isolate a single test, test case, or test suite from other tests, so the tests, cases, and suites do not influence each other. Specially developed isolation scripts return the Magento instance to its initial state for a test, case, or suite.

An MTF isolation script is provided for Magento CE and EE. However, you can edit a script as necessary. <a href="https://gist.github.com/xcomSteveJohnson/f30d447d126f806f0a12" target="_blank">Sample</a>

### Isolation Strategies

You can specify when to return to a known state using the isolation strategies. Your isolation strategy can apply to any scope; that is, to a test, case, or suite. MTF provides the following isolation strategies:

*	`none`: Default strategy; implies that the isolation script should not be run either before or after any test, case, or suite.
*	`before`: Run the isolation script before a test, case, or suite.
*	`after`: Run the isolation script after a test, case, or suite.
*	`both`: Run the isolation script both before and after a test, case, or suite.

Specify your default isolation strategy in `isolation.yml`. To change the isolation strategy globally (that is, for all your tests, cases, and suites), change the `none` value to any other strategy type for corresponding scope.

Sample isolation configuration file:

```
reset_url_path: dev/tests/mtf/path_to_script/script.php
testSuite: none
testCase: none
test: none
```

You can specify the isolation strategy on the individual level for every test, case, or suite if necessary. To set a strategy for a test, case, or suite, specify `@isolation before`, `@isolation after`, or `@isolation both` annotation(s).

**Note**: A strategy specified on a scope level overwrites a strategy that is set globally.

### Specifying an Isolation Strategy for a Test Suite

Use the `@isolation` annotation at the test suite level to set the isolation strategy for a suite. In the following example, the isolation script runs before and after a suite. <a href="https://gist.github.com/xcomSteveJohnson/b9262cdff79c29e8901c" target="_blank">Sample</a>

### Specifying an Isolation Strategy for a Test Case

Use the `@isolation` annotation at the test case level to set the isolation strategy for a case. In the following example, the isolation script runs before a case. <a href="https://gist.github.com/xcomSteveJohnson/5a33048991cb01883da6" target="_blank">Sample</a>

### Specifying an Isolation Strategy for a Test

Use the `@isolation` annotation at the test level to set the isolation strategy for a test. In the following example, the isolation script runs after test2. <a href="https://gist.github.com/xcomSteveJohnson/2cc67af38cda9a7ee4d9" target="_blank">Sample</a>

### Specifying an Isolation Strategy for Every Test in a Test Case

Use the `@isolation` annotation at the case level to set an isolation strategy for every test in a case. In the following example, the isolation script runs before every test in a case. <a href="https://gist.github.com/xcomSteveJohnson/77aacf282788f1ee99a7" target="_blank">Sample</a>

### Specifying an Isolation Strategy for Every Test Case in a Suite

Use the `@isolation testCase` annotation at the suite level to set an isolation strategy for every case in a suite. In the following example, the isolation script runs before and after every case in a suite. <a href="https://gist.github.com/xcomSteveJohnson/15b877e33bf1865ed0bb" target="_blank">Sample</a>

### Specifying an Isolation Strategy for Every Test in a Suite

Use the `@isolation test` annotation at the suite level to set strategy for every test in a suite. In the following example, the isolation script runs before and after every test in a suite. <a href="https://gist.github.com/xcomSteveJohnson/e5c6a12c50f2a4a99fda" target="_blank">Sample</a>

### Specifying Different Isolation Strategies for Different Scopes in a Suite

Use the `@isolation test` and `@isolation testCase` annotations at the suite level to set the isolation strategy correspondingly for every test and every case in a suite. In the following example, the isolation script runs before and after every test in a suite and before every case in a suite. <a href="https://gist.github.com/xcomSteveJohnson/d72e76b19c7bb1b6995c" target="_blank">Sample</a>

When changing isolation strategies on the individual level, consider the following:

*	An isolation script is not executed twice in a row. For example, if you set the _before_ strategy for a test case and for the first test in this case, the isolation script runs just once, before a test case.
*	If you set the _after_ strategy for the last test in a suite, the isolation script does not execute because it is redundant.

## Using Page and Block Objects for UI-Specific Test

The MTF page object and block object patterns avoid unnecessary duplication of code and make tests easier to support. To create the pages for your tests, we recommend creating block objects first. After that you can create the page objects and assign the necessary blocks to them. 

You must create block objects manually but page objects can be generated automatically.

### Exploring a Block Object

The block object defines the business logic. The block object can contain other block objects provided this inclusion reflects Magento logic. For example, you can include the Widget block object into the Left Panel block object or Right Panel block object.

The block object also contains commands such as `submit` or `verify`. The only commands detached to a separate abstract block are `fill` and `verify`. 

The Form block object executes simple operation, such as filling in a field. To execute more complicated operations, such as fill in the product details by switching between different tabs, use the hierarchy of the Form block objects.

To define the correspondence between the fields in a block and data in a fixture, use the mapping tool. Mapping should be defined in `[blockName].xml`.

<a href="https://gist.github.com/xcomSteveJohnson/f3b1805036aedb7031d6" target="_blank">Sample block object</a>

### Exploring a Page Object

The page object contains the following main elements:

*	The URL of the target page, to execute the `open()` abstract method. The URL is formed based on `const MCA` parameter.
*	`const MCA` parameter, which identifies a page and is used by a generator of a page. The page object is named by its MCA.
*	The blocks with which the page object can work

The page object opens itself and returns its own blocks.

<a href="https://gist.github.com/xcomSteveJohnson/7aa95287667b09fa37d1" target="_blank">Sample page object</a>

### Creating a Page Object

To create a page object:

1.	List all pages you need in your global page configuration file (`Module\Test\etc\global\page.xml`). You must specify the name, MCA, area, and corresponding class for each page.
2.	Run the generator (`utils\generate\page`). The page class and individual configuration file (`[pageName].xml`) are generated for each page.

    **Note**: Page classes created at this point do not contain the necessary blocks. The individual page configuration file (`[pageName].xml`) contains the test blocks to facilitate entering the block object information.
	
3.	Specify the necessary blocks for each page in the individual configuration file (`[pageName].xml`).
4.	Delete the page classes created automatically at step 2 of this scenario.
5.	Run the generator (`utils\generate\page'). This creates the page classes containing the blocks you specified.


