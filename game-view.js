$(document).ready(function () {
// VARIABLES
  var mainDisplay = $('#main-display')
  var nextBtn = $('#next-question')
  var startBtn = $('#start-button')
  var endBtn = $('#end-button')
  var questionBox = $('#game-box')
  var gameInfo = $('#game-info')
  var ansBtn = $('.answer')
  var score = $('.score')
  var timerInfo = $('#timer')
  var lightBtn = $('#light')
  var darkBtn = $('#dark')
  var ans
  var rightCounter = 0
  var totalCounter = 0
  var hasClicked = false

// EVENT LISTENERS

// On Start, toggle game-info to hide and question-box to appear with first question
  startBtn.on('click', function () {
    questionBox.toggleClass('blank')
    gameInfo.toggleClass('blank')
    nextDisplay()
  })
  // Allow user to choose light or dark theme
  lightBtn.on('click', function () {
    $('body').addClass('light')
    $('body').removeClass('dark')
  })
  darkBtn.on('click', function () {
    $('body').addClass('dark')
    $('body').removeClass('light')
  })

// On Next Btn, advance to next question and answer set
  nextBtn.on('click', function () {
    currentQ += 1
    if (currentQ < 10) {
      nextDisplay()
    } else {
      $('#game-box').toggleClass('blank')
      $('.end-of-game').removeClass('blank')
    }
  })

// When answer button clicked, identify as selected
  ansBtn.on('click', function () {
    checkIsRight(this, currentQ)
    hasClicked = true
  })

// When you reach the end, allow user to start again
  endBtn.on('click', function () {
    window.location.reload()
  })

// When a user clicks on the small, medium, or large A, change the font size of the page
  // $(small).on('click', $('body').css('font-size', '14px'))
  // medium.on('click', $('body').css('font-size', '18px'))
  // large.on('click', $('body').css('font-size', '22px'))

  // FUNCTIONS
  // Function to advance to next question and answer set
  var nextDisplay = function () {
    resetTimer()
    mainDisplay.text(formatForDisplay().question)
    mainDisplay.removeClass('right wrong')
    ans = (formatForDisplay().answers)
    for (let i = 0; i < ansBtn.length; i++) {
      ansBtn.eq(i).text(ans[i])
      ansBtn.eq(i).removeClass('right wrong')
    }
    hasClicked = false
    totalCounter++
  }

// Function to check if answer is right
  var checkIsRight = function (amIRight, current) {
    if (count !== 0) {
      if (hasClicked === false) {
        if ($(amIRight).text() === randomContent[current].answers.right) {
          $(amIRight).addClass('right')
          mainDisplay.html(`CORRECT!<br/><br/> ${randomContent[current].explain}`)
          mainDisplay.removeClass('wrong')
          mainDisplay.addClass('right')
          rightCounter++
        } else {
          $(amIRight).addClass('wrong')
          mainDisplay.html(`Sorry, no!<br/><br/> ${randomContent[current].explain}`)
          displayRight(current)
        }
        score.html(`Score: <br> ${rightCounter}/${totalCounter}`)
      } else {
        alert('Nice try, but you have already answered.')
      }
    } else {
    }
  }
// Timer function

  var count = 15
  var counter // 1000 will  run it every 1 second
  var timer = function () {
    if (hasClicked === false) {
      count = count - 1
      // console.log(count);
      timerInfo.html(`Timer:<br> ${count} seconds`)
      if (count === 0) {
        revealRight(currentQ)
        clearInterval(counter)
        return
      }
    }
  }

  var resetTimer = function () {
    clearInterval(counter)
    count = 15
    counter = setInterval(timer, 1000)
  }

  var revealRight = function (current) {
    mainDisplay.html(`You ran out of time!<br/><br/> ${randomContent[current].explain}`)
    displayRight(current)
  }

  var displayRight = function (current) {
    mainDisplay.addClass('wrong')
    let correct = $('.answer').filter(function () {
      return $(this).text() === randomContent[current].answers.right
    })
    $(correct).addClass('right')
  }

// Do not delete these braces fool
}
)
