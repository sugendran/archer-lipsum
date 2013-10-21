Archer lipsum
=============


* installation *

``` sh
npm install 'archer-lipsum'
```

* usage *

``` js
var archer = require('archer-lipsum');

// archer is a function that has 3 params
// character: ['sterling' | 'malory']
// wordCount: number (ignored if there are paragraphs)
// paragraphCount: number

// print out 40ish words
console.log(archer('sterling', 40));

// print out 2 paragraphs
console.log(archer('sterling', 0, 2));
```


All these quotes are taken from the show and belong to the makers and writers
of Archer. I just made this for a bit of fun, so please don't sue me.

