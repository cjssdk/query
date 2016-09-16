Query string handler
====================

[![Build Status](https://img.shields.io/travis/cjssdk/query.svg?style=flat-square)](https://travis-ci.org/cjssdk/query)
[![NPM version](https://img.shields.io/npm/v/cjs-query.svg?style=flat-square)](https://www.npmjs.com/package/cjs-query)
[![Dependencies Status](https://img.shields.io/david/cjssdk/query.svg?style=flat-square)](https://david-dm.org/cjssdk/query)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)


Module to parse query part of the location URL.


## Installation ##

```bash
npm install cjs-query
```


## Usage ##

Add to the scope:

```js
var query = require('cjs-query');
```

Parse some parameters:

```js
// gives {param: '5000', another_param: 'another_value'}
// note that the type of param value is string
console.log(query.parse('param=5000&another_param=another_value'));
```

Parse current document query string:

```js
console.log(query.parse(document.location.search.substring(1)));
```

Stringify query params:

```js
// gives 'param=128'
console.log(query.stringify({param: 128}));
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/cjssdk/query/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`cjs-query` is released under the [MIT License](license.md).
