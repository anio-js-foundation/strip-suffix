# @anio-js-foundation/strip-suffix

Remove the suffix of a string.

Throws error if string doesn't end with suffix:

```js
import stripSuffix from "@anio-js-foundation/strip-suffix"

console.log(stripSuffix("Hello, World", ", World")) // "Hello"
console.log(stripSuffix("Hello, World", "Test")) // Error
```
