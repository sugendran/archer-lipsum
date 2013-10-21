var lipsum = require('./index.js');
console.log('\n-- default');
console.log(lipsum());
console.log('\n-- 10 words');
console.log(lipsum('sterling', 10));
console.log('\n-- 3 paragraphs');
console.log(lipsum('sterling', 0, 3));
console.log('\n-- malory');
console.log(lipsum('malory', 0, 2));