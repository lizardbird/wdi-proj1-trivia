// Randomize content order
let randomContent = []

var createRandomList = function (list) {
  while (randomContent.length < 10) {
    var randomItem = list[Math.floor(Math.random() * list.length)]
    if (!(randomContent.includes(randomItem))) {
      randomContent.push(randomItem)
    }
  }
  // Good job creating a function to shuffle the array. However, because you are not removing
  // each item / index as it is selected, it is not very efficient. Check out this article
  // on shuffling an array in JS:
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
}
createRandomList(otterContent)

// Prepare Q & As for display
let currentQ = 0

var formatForDisplay = function () {
  if (currentQ < randomContent.length) {
    let q = randomContent[currentQ].question
    let exp = randomContent[currentQ].explain
    let {right, wrong} = randomContent[currentQ].answers
    // Thanks John for your help with concat!
    let randAns = wrong.concat(right).sort(() => {
      return 0.5 - Math.random()
    })
    // You could use your above sorting logic in createRandomList as well
    return {
      question: q,
      answers: randAns,
      explain: exp
    }
  }
}
