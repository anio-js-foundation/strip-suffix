import stripSuffix from "./src/index.mjs"

console.log(stripSuffix("Hello, World", ", World")) // "Hello"
console.log(stripSuffix("Hello, World", "Test")) // Error
