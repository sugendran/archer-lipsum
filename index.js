var characters = {
  sterling: require('./characters/sterling.js'),
  malory: require('./characters/malory.js')
};

function countWords(phrase) {
  return phrase.split(' ').length;
}

function phraseFilter(phrase) {
  return countWords(phrase) < this;
}

function resultByWordCount(character, wordCount) {
  var remaining = wordCount;
  var phraselist = characters[character] || ['ERROR'];
  var result = [];
  while(remaining > 0) {
    var list = phraselist.filter(phraseFilter, remaining);
    if(list.length === 0) {
      break;
    }
    var r = Math.floor(Math.random() * list.length);
    var phrase = list[r];
    remaining -= countWords(phrase) + 1;
    result.push(phrase);
  }
  return result.join(' ');
}

function resultByParagraphs(character, paragraphs) {
  var result = [];
  for(var i=0; i<paragraphs; i++) {
    var r = 100 + ~~(Math.random() * 200);
    result.push(resultByWordCount(character, r));
  }
  return result.join('\n\n');
}

module.exports = function(character, wordCount, paragraphs) {
  if(paragraphs) {
    return resultByParagraphs(character, paragraphs);
  } else {
    return resultByWordCount(character || 'sterling', wordCount || 20);
  }
};