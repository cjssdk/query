Query string parser
===================

[![NPM version](https://img.shields.io/npm/v/stb-util-parse-query.svg?style=flat-square)](https://www.npmjs.com/package/stb-util-parse-query)
[![Dependencies Status](https://img.shields.io/david/stbsdk/util-parse-query.svg?style=flat-square)](https://david-dm.org/stbsdk/util-parse-query)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stb)


`stb-util-parse-query` is a module to parse query part of the location URL.


## Installation

```bash
npm install stb-util-parse-query
```


## Usage

Add to the scope:

```js
var parseQuery = require('stb-util-parse-query');
```

Parse some parameters:

```js
// gives {param: 'value', another_param: 'another_value'}
console.log(parseQuery('param=value&another_param=another_value'));
```

Parse current document query string:

```js
console.log(parseQuery(document.location.search.substring(1)));
```


## Debug mode

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.

In debug mode the util method is exposed to the global namespace as `window.utilParseQuery`.


## Contribution

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/util-parse-query/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License

`stb-util-parse-query` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
