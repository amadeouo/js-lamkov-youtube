const getTypeOfSentence = (sentence) => sentence.slice(-1) === '?' ? 'question' : 'normal'

console.log(getTypeOfSentence('Что у вас здесь происходит?'));

const name = 'Misha'

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  while (initialNumber >= 1) {
    console.log(initialNumber)
    initialNumber = initialNumber - 1
  }
  console.log('finished!')
  // END
};

console.log(name.length);