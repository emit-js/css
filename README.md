# @emit-js/css

[emit](https://github.com/emit-js/emit#readme) css dom append

![css](css.gif)

## Install

```js
npm install @emit-js/emit @emit-js/css
```

## Setup

```js
const emit = require("@emit-js/emit")
require("@emit-js/css")(emit)
```

## Usage

```js
emit.css({ href: "/my.css" }) // append and return <link> element
```
