/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    const sentenceInWords = sentence.split(" ");

    for (sentenceWord of sentenceInWords) {
        for (const dictionaryWord of dictionary) {
            if (sentenceWord.startsWith(dictionaryWord)) {
                if (sentenceWord.length > dictionaryWord.length) {
                    sentence = sentence.replace(sentenceWord, dictionaryWord);
                    break;
                }
            }
        }
    }

    return sentence;
};