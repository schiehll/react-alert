# svg-tag-names [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of known SVG tag-names.  Includes the elements from
[SVG 1.1][svg11], [SVG Tiny 1.2][svgtiny12], and [SVG 2][svg2].

The repo contains a script to crawl specs to include newly introduced
tag-names.

## Installation

[npm][]:

```bash
npm install svg-tag-names
```

## Usage

```javascript
var svgTagNames = require('svg-tag-names');

svgTagNames.length; //=> 100

console.log(svgTagNames.slice(0, 20));
```

Yields:

```js
[ 'a',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animate',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'animation',
  'audio',
  'canvas',
  'circle',
  'clipPath',
  'color-profile',
  'cursor',
  'defs',
  'desc',
  'discard',
  'ellipse',
  'feBlend' ]
```

## API

### `svgTagNames`

`Array.<string>` — List of case-sensitive tag-names.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/svg-tag-names.svg

[build-page]: https://travis-ci.org/wooorm/svg-tag-names

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/svg-tag-names.svg

[coverage-page]: https://codecov.io/github/wooorm/svg-tag-names?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[svg11]: https://www.w3.org/TR/SVG/eltindex.html

[svgtiny12]: https://www.w3.org/TR/SVGTiny12/elementTable.html

[svg2]: https://www.w3.org/TR/SVG2/eltindex.html
