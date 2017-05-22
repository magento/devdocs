---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Locate JavaScript components
menu_title: Locate JavaScript components
menu_order: 20
version: 2.0
github_link: javascript-dev-guide/javascript/js_logger.md
---

## Logger overview

The `Logger` class provides logging functionality for an application. It can be used to  display errors, warnings and debug messages.

**Constructor:** <Magento_Ui_module_dir>/view/base/web/js/lib/logger/logger.js. [See on GitHub]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/lib/logger/logger.js)


## Logger API

### `new Logger(outputHandler, entryFactory)`

**Parameters**  

- `outputHandler: LogOutputHandler`: An instance of `LogOutputHandler` used to display log entries.
- `entryFactory: LogEntryFactory`: A factory of the `LogEntry` instances.

### `setDisplayLevel(level)`
Sets the boundary entry level. The entries whose level is lower, than the specified one, are not passed to the output.

**Parameters**  
`level: number`: Minimum display level for an entry.

### `addDisplayCriteria(criteria)`
Adds a function that is used to define whether newly created entries should be passed to the output.

**Parameters**  
`criteria: Function`: A function that accepts instance of the `LogEntry` and returns a Boolean value.

### removeDisplayCriteria(criteria)
Removes the previously added display criteria.

**Parameters**  
`criteria: Function`: The display criteria to be removed.

### `error(message, [messageData])`
Creates a `LogEntry` with the `ERROR` level and passes it to the output, if it matches all current display criteria.

**Parameters**  
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

###` warn(message, [messageData])`
Creates a `LogEntry` with the `WARN` level and passes it to the output, if it matches all current display criteria.

**Parameters**  
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `info(message, [messageData])`
Creates a `LogEntry` with the `INFO` level and passes it to the output if it matches all current display criteria.

**Parameters**  
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `debug(message, [messageData])`
Creates a `LogEntry` with the `DEBUG` level and passes it to the output, if it matches all current display criteria.

**Parameters**  
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `getEntries([criteria])`
Returns all available log entries. It can additionally filter out the entries that don't match the provided criteria.

**Parameters**  
`criteria?: Function`: Optional function that accepts an instance of the `LogEntry` and implements the filter criteria by which the entries are added to the resulting array.

<p class="q">need clarification</p>

**Returns:** `Array<LogEntry>`: An array of `LogEntry`.

### `dump(criteria)`

**Parameters**  
`criteria?: Function`: Optional function that accepts an instance of `LogEntry` and implements the filter criteria by which entries are passed to the output handler.

## `LogEntry`
`LogEntry` is a class that holds the data of log operations, like `error`, `warn`,  `info` and so on.

**Constructor:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/entry.js`. [See on Github]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/lib/logger/entry.js) 

### new LogEntry(message, level, [data])

**Parameters**  
`message: string` - Entry's message.

`level: number` - Entry's level.

`data?: Object` - Additional data associated with the entry.

### Properties
- `message: string` - Entry's message.

- `timestamp: number` - Time when entry has been created.

- `level: number` - Entry's level.

- `levelName: string` - Name of the entry's level.

- `data?: Object` - Additional data associated with the entry.

## LogOutputHandler

Class responsible for the output of entries passed by the Logger.  Default implementation uses browser's `console` object and invokes methods that correspond to the `level` of an entry. For instance, entry with the `INFO` level will be displayed using the console's `info` method.

**Constructor:** Magento/Ui/view/base/web/js/lib/logger/console-output-handler.js

### new LogOutputHandler(formatter)

**Parameters**  
`formatter: LogFormatter` - Instance of the LogFormatter that will be used to create a display message for provided entries.

### show(entry)
Displays provided entry.

**Parameters**  
`entry: LogEntry` - Entry to be displayed.

### dump(entries)
Displays multiple entries at once.

**Parameters**  
`entries: Array<LogEntry>` - An array of LogEntry instances to be displayed.

## LogFormatter
The `LogFormatter` class is responsible for processing message of the provided entry and for preparing it's string representation that will be displayed by the `LogOutputHandler`. It additionally evaluates entry's message if it's described in the template form:
 ``` javascript
 {
     message: "Foo ${ $.property }",
     data: {
         property: "Bar"
    }
} // => "Foo Bar"
 ```

**Constructor:** Magento/Ui/view/base/web/js/lib/logger/formatter.js

### new LogFormatter([dateFormat], [template])

**Parameters**  
`dateFormat = "YYYY-MM-DD hh:mm:ss"` - Date format that will be applied to display the creation time of an entry.

`template = "[${ $.date }] [${ $.entry.levelName }] ${ $.message }` - Template used to create the resulting message of an entry.

### process(entry)
Creates a text representation of the provided entry. If default settings are used, the resulting string will look similar to this: `[2017-04-07 01:36:24] [DEBUG] Log message`.

**Parameters**  
`entry: LogEntry` - Instance of the LogEntry to be processed.

**Returns:** `string`

## levelsPool
Is a module which provides log levels and utility methods to work with them.

 A list of all available levels sorted by priority in the descending order:

 - `NONE` - used to block all log entries from being passed to the output.
 - `ERROR`
 - `WARN`
 - `INFO`
 - `DEBUG`
 - `ALL` - allows to display all log entries, unless any other display criteria is present.

**Path:** Magento/Ui/view/base/web/js/lib/logger/levels-pool.js

### getLevels()
Returns a list of available log levels.

**Returns:** `{[name: string]: number}`

### getNameByCode(code)

**Parameters**  
`code: string` - Level's identifier.

**Returns:** `number`

## messagePool

Implements a collection of pre-defined messages used by `consoleLogger`.

**Path:** Magento/Ui/view/base/web/js/lib/logger/message-pool.js

### getMessage(code)
Returns message that matches the provided code.

**Parameters**  
`code: string` - Message's identifier.

**Returns:** `string`

### addMessage(code, message)
Adds a new message to the pool.

**Parameters**  
`code: string` - Message's identifier.

`message: string` - Text of the message.

### hasMessage(code)
Tells whether message with provide code exists in the pool.

**Parameters**  
`code: string` - Message's identifier.

**Returns:** `boolean`

## consoleLogger
An instance of the `Logger` class that is configured to display messages in the browser's console with the default format. It additionally persists the last provided display level in the `localStorage` and allows to work with a list of pre-defined messages instead of passing their text directly:
``` javascript
    consoleLogger.setDisplayLevel(consoleLogger.levels.ALL);
    consoleLogger.messages.addMessage('VIRAL_MESSAGE', 'Hello World!');
    consoleLogger.info('VIRAL_MESSAGE');
    // console => [2017-04-07 01:36:24] [INFO] Hello World!
```

**Path:** Magento/Ui/view/base/web/js/lib/logger/console-logger.js

### Properties
 - `levels: {[name: string]: number}` - Reference to available log levels.
 - `messages: messagePool` - Reference to the `messagePool` that allows to work with a list of pre-defined messages.

### Usages in Magento
By default Magento uses "consoleLogger" to display logs in browser console.
The default level of logs that Magento displays in the console starts from the `WARN` level.

### The information which is logged in Magento
- `Templates loading:`
    - Logging when template starts being loaded.
    - Logging when template is loaded. (from cache or from server)
    - Logging error if template loading is failed.
- `UI Components loading:`
    - Logging when component starts being loaded.
    - Logging when component is loaded.
    - Logging error if component loading is failed.
- `Requests for UI Components dependencies:`
    - Logging when component sends request for dependencies.
    - Logging when component dependencies are successfully received.
    - Logging when component receiving is failed.
- `Requests for UI Components by scope binding:`
    - Logging when sends request for dependencies.
    - Logging when dependencies are successfully received.
    - Logging when receiving is failed.
