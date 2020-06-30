'use strict'

/**
 * Question header (actual question) validation.
 *
 * @param {string} header
 *
 * @returns {boolean}
 */
function isHeaderValid (header) {
  return /^.[.\]] /.test(header)
}

/**
 * Question footer (correct answer) validation.
 *
 * @param {string} footer
 * @param {array<string>} questionNumbers
 *
 * @returns {boolean}
 */
function isFooterValid (footer, questionNumbers) {
  return /^ANSWER: [A-Z]$/.test(footer) === true &&
    questionNumbers.indexOf(footer.substr(-1)) !== -1
}

/**
 * @param {string} question
 *
 * @returns {Array}
 */
function validateOne (question) {
  var output = []
  var questionNumberSeparator = ''
  var questionNumbers = []
  var questionAsStringArray = question.split('\n')
  for (var i = 0; i < questionAsStringArray.length; i++) {
    var o = {}
    o[questionAsStringArray[i]] = false
    output.push(o)
  }

  // Question generic validation.
  if (questionAsStringArray.length < 4) {
    return output
  }

  if (isHeaderValid(questionAsStringArray[0]) === false) {
    output[0][questionAsStringArray[0]] = true
  }

  // Question answers validation.
  for (var j = 1; j < questionAsStringArray.length - 1; j++) {
    var answer = questionAsStringArray[j]
    var answerNumber = answer.substr(0, 1)
    var answerNumberSeparator = answer.substr(1, 1)
    // Answer generic validation.
    if (/^[A-Z](.|\)) .+/.test(answer) === true) {
      output[j][answer] = true
    }
    if (questionNumberSeparator === '') {
      questionNumberSeparator = answerNumberSeparator
    }
    // Answer number separator validation: it must match all the others.
    if (answerNumberSeparator !== questionNumberSeparator) {
      output[j][answer] = false
      continue
    }
    // Answer number validation: it must unique.
    if (questionNumbers.indexOf(answerNumber) === -1) {
      questionNumbers.push(answerNumber)
    } else {
      output[j][answer] = false
    }
  }

  if (isFooterValid(questionAsStringArray[questionAsStringArray.length - 1], questionNumbers) === true) {
    output[questionAsStringArray.length - 1][questionAsStringArray[questionAsStringArray.length - 1]] = true
  }

  return output
}

module.exports = validateOne
