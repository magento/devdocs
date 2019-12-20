---
group: javascript-developer-guide
subgroup: 1_Javascript
title: JavaScript Logger
menu_title: JavaScript Logger
menu_order: 20
---

## Logger overview

The `Logger` class provides logging functionality for an application. It can be used to  display errors, warnings and debug messages.

**Constructor:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/logger.js`. [See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/logger.js)

## Logger API

### `new Logger(outputHandler, entryFactory)`

**Parameters:**

-  `outputHandler: LogOutputHandler`: An instance of `LogOutputHandler` used to display log entries.
-  `entryFactory: LogEntryFactory`: A factory of the `LogEntry` instances.

### `setDisplayLevel(level)`
Sets the boundary entry level. The entries whose level is lower, than the specified one, are not passed to the output.

**Parameters:**
`level: number`: Minimum display level for an entry.

### `addDisplayCriteria(criteria)`
Adds a function that is used to define whether newly created entries should be passed to the output.

**Parameters:**
`criteria: Function`: A function that accepts instance of the `LogEntry` and returns a Boolean value.

### removeDisplayCriteria(criteria)

Removes the previously added display criteria.

**Parameters:**
`criteria: Function`: The display criteria to be removed.

### `error(message, [messageData])`
Creates a `LogEntry` with the `ERROR` level and passes it to the output, if it matches all current display criteria.

**Parameters:**
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `warn(message, [messageData])`
Creates a `LogEntry` with the `WARN` level and passes it to the output, if it matches all current display criteria.

**Parameters:**
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `info(message, [messageData])`
Creates a `LogEntry` with the `INFO` level and passes it to the output if it matches all current display criteria.

**Parameters:**
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `debug(message, [messageData])`
Creates a `LogEntry` with the `DEBUG` level and passes it to the output, if it matches all current display criteria.

**Parameters:**
`message: string`: Entry's message.

`messageData?: Object`: Optional data associated with the message.

**Returns:** `LogEntry`

### `getEntries([criteria])`
Returns all available log entries. It can additionally filter out the entries that don't match the provided criteria.

**Parameters:**
`criteria?: Function`: Optional function that accepts an instance of `LogEntry` and implements the filter criteria by which the entries are added to the resulting array.

**Returns:** `Array<LogEntry>`: An array of `LogEntry`.

### `dump(criteria)`

**Parameters:**
`criteria?: Function`: Optional function that accepts an instance of `LogEntry` and implements the filter criteria by which entries are passed to the output handler.

## `LogEntry`
`LogEntry` is a class that holds the data of log operations, like `error`, `warn`,  `info` and so on.

**Constructor:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/entry.js`. [See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/entry.js)

### new LogEntry(message, level, [data])

**Parameters:**

-  `message: string`: Entry's message.
-  `level: number`: Entry's level.
-  `data?: Object`: Additional data associated with the entry.

**Properties:**

-  `message: string`: Entry's message.

-  `timestamp: number`: The time of entry creation.

-  `level: number`: Entry's level.

-  `levelName: string`: Name of the entry's level.

-  `data?: Object`: Additional data associated with the entry.

## `LogOutputHandler`

The `LogOutputHandler` class responsible for the output of entries passed by `Logger`. Default implementation uses browser's `console` object and invokes methods that correspond to the `level` of an entry. For instance, entry with the `INFO` level will be displayed using the console's `info` method.

**Constructor:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/console-output-handler.js` ([See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/entry.js))

### new LogOutputHandler(formatter)

**Parameters:**
`formatter: LogFormatter`: An instance of `LogFormatter` that will be used to create a display message for the  provided entries.

### show(entry)

Displays the provided entry.

**Parameters:**
`entry: LogEntry`: The entry to be displayed.

### dump(entries)

Displays multiple entries at once.

**Parameters:**
`entries: Array<LogEntry>`: An array of the `LogEntry` instances to be displayed.

## LogFormatter

The `LogFormatter` class is responsible for processing the message of the provided entry and for preparing its string representation that will be displayed by `LogOutputHandler`. It also verifies if the entry's message is set in the template:

```javascript
 {
     message: "Foo ${ $.property }",
     data: {
         property: "Bar"
    }
} // => "Foo Bar"
```

**Constructor:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/formatter.js` ([See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/formatter.js))

### new LogFormatter([dateFormat], [template])

**Parameters:**

-  `dateFormat = "YYYY-MM-DD hh:mm:ss"`: Date format that is applied to display the entry creation time.
-  `template = "[${ $.date }] [${ $.entry.levelName }] ${ $.message }`: Template used to create the resulting message of an entry.

### `process(entry)`
Creates a text representation of the provided entry. If default settings are used, the resulting string looks like following: `[2017-04-07 01:36:24] [DEBUG] Log message`.

**Parameters:**
`entry: LogEntry`: An instance of `LogEntry` to be processed.

**Returns:** String

## `levelsPool`
`levelsPool` is a module that provides log levels and utility methods to work with them.

The following log levels are available (sorted by priority in the descending order):

-  `NONE` (used to block all log entries from being passed to the output)
-  `ERROR`
-  `WARN`
-  `INFO`
-  `DEBUG`
-  `ALL` (allows to display all log entries, unless any other display criteria is present)

**Path:** `Magento_Ui_module_dir>/view/base/web/js/lib/logger/levels-pool.js` ([See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/levels-pool.js))

### `getLevels()`
Returns a list of available log levels.

**Returns:** `{[name: string]: number}`

### `getNameByCode(code)`

**Parameters:**
`code: string`: Level's identifier.

**Returns:** Number

## `messagePool`

Implements a collection of predefined messages used by `consoleLogger`.

**Path:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/message-pool.js` ([See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/message-pool.js))

### `getMessage(code)`
Returns message that matches the provided code.

**Parameters:**
`code: string`: Message's identifier.

**Returns:** String

### `addMessage(code, message)`
Adds a new message to the pool.

**Parameters:**
`code: string`: Message's identifier.

`message: string`: Text of the message.

### `hasMessage(code)`
Checks whether a message with the provided code exists in the pool.

**Parameters:**
`code: string`: Message's identifier.

**Returns:** Boolean

## `consoleLogger`
An instance of the `Logger` class that is configured to display messages in the browser's console with the default format. It also stores the last provided display level in `localStorage` and allows to work with a list of predefined messages instead of passing their text directly:

```javascript
    consoleLogger.setDisplayLevel(consoleLogger.levels.ALL);
    consoleLogger.messages.addMessage('VIRAL_MESSAGE', 'Hello World!');
    consoleLogger.info('VIRAL_MESSAGE');
    // console => [2017-04-07 01:36:24] [INFO] Hello World!
```

**Path:** `<Magento_Ui_module_dir>/view/base/web/js/lib/logger/console-logger.js` ([See on GitHub]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/logger/console-logger.js))

### Properties

-  `levels: {[name: string]: number}`: Reference to the available log levels.
-  `messages: messagePool`: Reference to `messagePool` that allows working with a list of predefined messages.

### Usages in Magento

By default, Magento uses `consoleLogger` to display logs in browser console.

Example:

![node declaration autocomplete]({{ site.baseurl }}/common/images/js/logger_error.png)

The default level of logs that Magento displays in the console starts from the `WARN` level.

### Types of logged information

-  `Templates loading:`
   -  Logging when a template's loading starts.
   -  Logging when a template is loaded. (from cache or from server)
   -  Logging error if a template's loading failed.
-  `UI Components loading:`
   -  Logging when a component's loading starts.
   -  Logging when a component is loaded.
   -  Logging error if a component loading failed.
-  `Requests for UI Components dependencies:`
   -  Logging when a component sends request for dependencies.
   -  Logging when a component's dependencies are successfully received.
   -  Logging when a component's receiving is failed.
-  `Requests for UI Components by scope binding:`
   -  Logging when a component sends request for dependencies.
   -  Logging when dependencies are successfully received.
   -  Logging when dependencies receiving failed.
