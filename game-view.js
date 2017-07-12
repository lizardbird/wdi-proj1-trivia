$(document).ready(function () {
  var displayQ = $('#question')
  var nextBtn = $('#next-question')
  var startBtn = $('#start-button')
  var questionBox = $('#game-box')
  var gameInfo = $('#game-info')
  var displayAns = $('.answer')

  var ans

// On Start, toggle game-info to hide and question-box to appear with first question
  startBtn.on('click', function () {
    questionBox.toggleClass('blank')
    gameInfo.toggleClass('blank')
  })

  displayQ.text(formatForDisplay().question)
  for (let i = 0; i < displayAns.length; i++) {
    ans = (formatForDisplay().answers)[i]
    displayAns.eq(i).text(ans)
  }

  nextBtn.on('click', function () {
    currentQ += 1
    displayQ.text(formatForDisplay().question)
    for (let i = 0; i < displayAns.length; i++) {
      ans = (formatForDisplay().answers)[i]
      displayAns.eq(i).text(ans)
    }
  })

// Do not delete these braces fool
}
)
