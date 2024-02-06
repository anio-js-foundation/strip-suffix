# @anio-js-core-foundation/strip-suffix

Remove the suffix of a string.

Throws error if string doesn't start with suffix:

```js
import stripSuffix from "@anio-js-core-foundation/strip-suffix"

console.log(stripSuffix("Hello, World", "Hello, ")) // "World"
console.log(stripSuffix("Hello, World", "Test")) // Error
```
