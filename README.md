is anagram
======
![Travis](https://travis-ci.org/bjarneo/is-anagram.svg?branch=master)

What is this?
------
This package will check if two words / strings are anagrams. https://en.wikipedia.org/wiki/Anagram

Installation
------
It's available on npm.
```
npm install --save is-anagram
```

Usage
------
```js
const isAnagram = require('is-anagram');

isAnagram('silent', 'listen')           // true
isAnagram('rail safety', 'fairy tales') // true
isAnagram('silent', 'lamb')             // false
isAnagram('silent', [])                 // false
```

Test
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT licensed. See LICENSE.
