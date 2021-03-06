# rc-mask-input
---

React MaskInput Component
Just for format mobile numbers, bankcard numbers, credit card numbers...
Auto blank for those numbers, special for mobile devices, fix bugs when using different language input methods


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-mask-input.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-mask-input
[travis-image]: https://img.shields.io/travis/react-component/mask-input.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/mask-input
[coveralls-image]: https://img.shields.io/coveralls/react-component/mask-input.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/mask-input?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/mask-input.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/mask-input
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-mask-input.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-mask-input


## Screenshots

<img src="" width="288"/>


## Development

```
npm install
npm start
```

## Example

http://localhost:8021/examples/


online example: http://zealot09.github.io/rc-masked-input/


## install


[![rc-mask-input](https://nodei.co/npm/rc-mask-input.png)](https://npmjs.org/package/rc-mask-input)


## Usage

default is mobile format, split the mobile number like `15984382312` as `[3, 4, 4]` auto format to `159 8438 2312`

just define group attribute
```js
var MaskInput = require('rc-mask-input');
var React = require('react');
React.render(<MaskInput />, container);
```

bankcards? 622202xxxxxxxx format as the given group
```js
var MaskInput = require('rc-mask-input');
var React = require('react');
React.render(<MaskInput group={[4, 4, 4, 4, 3]} />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-mask-input is released under the MIT license.
