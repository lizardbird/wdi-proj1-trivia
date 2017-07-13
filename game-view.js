$(document).ready(function () {

// VARIABLES
  var mainDisplay = $('#main-display')
  var nextBtn = $('#next-question')
  var startBtn = $('#start-button')
  var questionBox = $('#game-box')
  var gameInfo = $('#game-info')
  var ansBtn = $('.answer')
  var score = $('.score')
  var ans
  var rightCounter = 0
  var totalCounter = 0

// EVENT LISTENERS

// On Start, toggle game-info to hide and question-box to appear with first question
  startBtn.on('click', function () {
    questionBox.toggleClass('blank')
    gameInfo.toggleClass('blank')
    nextDisplay()
  })

// On Next Btn, advance to next question and answer set
  nextBtn.on('click', function () {
    currentQ += 1
    nextDisplay()
  })

// When answer button clicked, identify as selected
  ansBtn.on('click', function () {
    checkIsRight(this, currentQ)
  })
  // FUNCTIONS
  // Function to advance to next question and answer set
   var nextDisplay = function () {
     mainDisplay.text(formatForDisplay().question)
     mainDisplay.removeClass('right wrong')
     ans = (formatForDisplay().answers)
     for (let i = 0; i < ansBtn.length; i++) {
       ansBtn.eq(i).text(ans[i])
       ansBtn.eq(i).removeClass('right wrong')
     }
     totalCounter++
   }

// Function to check if answer is right
  var checkIsRight = function (amIRight, current) {
    if ($(amIRight).text() === randomContent[current].answers.right) {
      $(amIRight).addClass('right')
      mainDisplay.html(`CORRECT!<br/> ${randomContent[current].explain}`)
      mainDisplay.removeClass('wrong')
      mainDisplay.addClass('right')
      rightCounter ++
    } else {
      $(amIRight).addClass('wrong')
      mainDisplay.html(`Sorry, no!<br/> ${randomContent[current].explain}`)
      mainDisplay.addClass('wrong')
    }
    score.text(`${rightCounter}/${totalCounter}`)
  }

// Do not delete these braces fool
}
)
