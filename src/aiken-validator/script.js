/**
 * Client-side version.
 */

/**
 * @param {string} question e.g. 'What is the correct answer to this question?
 *                                A.Is it this one?
 *                                B. Maybe this answer?
 *                                C. Possibly this one?
 *                                D. Must be this one!
 *                                ANSWER: D'
 * @returns {array<object>} e.g. [
 *                                 { 'What is the correct answer to this question?': true },
 *                                 { 'A.Is it this one?': false },
 *                                 { 'B. Maybe this answer?': true },
 *                                 { 'C. Possibly this one?': true },
 *                                 { 'D. Must be this one!': true },
 *                                 { 'ANSWER: D': true }
 *                               ]
 */
function validateOne (question) {
  var result = []
  var questionNumberSeparator = ''
  var questionNumbers = []
  var questionAsStringArray = question.split('\n')
  for (var i = 0; i < questionAsStringArray.length; i++) {
    var o = {}
    o[questionAsStringArray[i]] = false
    result.push(o)
  }

  // Question generic validation.
  if (questionAsStringArray.length < 4) {
    return result
  }

  // Question header (actual question) validation.
  if (/^.[.\]] /.test(questionAsStringArray[0]) === false) {
    result[0][questionAsStringArray[0]] = true
  }

  // Question answers validation.
  for (var j = 1; j < questionAsStringArray.length - 1; j++) {
    var answer = questionAsStringArray[j]
    var answerNumber = answer.substr(0, 1)
    var answerNumberSeparator = answer.substr(1, 1)
    // Answer generic validation.
    if (/^[A-Z](.|\)) .+/.test(answer) === true) {
      result[j][answer] = true
    }
    if (questionNumberSeparator === '') {
      questionNumberSeparator = answerNumberSeparator
    }
    // Answer number separator validation: it must match all the others.
    if (answerNumberSeparator !== questionNumberSeparator) {
      result[j][answer] = false
      continue
    }
    // Answer number validation: it must unique.
    if (questionNumbers.indexOf(answerNumber) === -1) {
      questionNumbers.push(answerNumber)
    } else {
      result[j][answer] = false
    }
  }

  // Question footer validation.
  if (
    // Generic structure validation.
    /^ANSWER: [A-Z]$/.test(questionAsStringArray[questionAsStringArray.length - 1]) === true &&
    // Correct answer number validation.
    questionNumbers.indexOf(questionAsStringArray[questionAsStringArray.length - 1].substr(-1)) !== -1) {
    result[questionAsStringArray.length - 1][questionAsStringArray[questionAsStringArray.length - 1]] = true
  }

  return result
}

/**
 * Validate all questions.
 *
 * @param {HTMLTextAreaElement} inputElement - HTML element containing questions
 * @param {HTMLDivElement} outputElement - HTML element reporting question validity
 */
function validateAll (inputElement, outputElement) {
  var questions = inputElement.value.trim().replace(/\r?\n/g, '\n').split('\n\n')

  for (var question of questions) {
    var result = validateOne(question)

    var isQuestionValid = result.every(function (item) {
      return Object.values(item)[0] === true
    })

    for (var k = 0; k < result.length; k++) {
      var line = Object.keys(result[k])[0]
      var isLineValid = Object.values(result[k])[0]

      if (isQuestionValid === true) {
        outputElement.innerHTML += renderLineOfValidQuestion(line)
      } else if (isLineValid === true) {
        outputElement.innerHTML += renderValidLineOfInvalidQuestion(line)
      } else {
        outputElement.innerHTML += renderInvalidLineOfInvalidQuestion(line)
      }
    }

    outputElement.innerHTML += '<br />'
  }
}

/**
 * @param {string} line
 * @returns {string}
 */
function renderLineOfValidQuestion (line) {
  return '<pre style="color: #228B22">' + line + '</pre>'
}

/**
 * @param {string} line
 * @returns {string}
 */
function renderValidLineOfInvalidQuestion (line) {
  return '<pre>' + line + '</pre>'
}

/**
 * @param {string} line
 * @returns {string}
 */
function renderInvalidLineOfInvalidQuestion (line) {
  return '<pre style="color:red; font-weight: bold">' + line + '</pre>'
}
