/**
 * Validate one question.
 *
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
  const result = []
  let questionNumberSeparator = ''
  const questionNumbers = []
  const questionLines = question.split('\n')

  // Result structure is prepared.
  for (let i = 0; i < questionLines.length; i++) {
    const o = {}
    o[questionLines[i]] = false
    result.push(o)
  }

  // Question generic validation: at least two answers must be provided.
  if (questionLines.length < 4) {
    return result
  }

  // Question header (actual question) validation.
  if (/^.[.\]] /.test(questionLines[0]) === false) {
    result[0][questionLines[0]] = true
  }

  // Question answers validation.
  for (let j = 1; j < questionLines.length - 1; j++) {
    const answer = questionLines[j]
    const answerNumber = answer.substr(0, 1)
    const answerNumberSeparator = answer.substr(1, 1)
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
    if (questionNumbers.includes(answerNumber) === false) {
      questionNumbers.push(answerNumber)
    } else {
      result[j][answer] = false
    }
  }

  // Question footer validation.
  if (
    // Generic structure validation.
    /^ANSWER: [A-Z]$/.test(questionLines[questionLines.length - 1]) === true &&
    // Correct answer number validation.
    questionNumbers.includes(questionLines[questionLines.length - 1].substr(-1)) === true) {
    result[questionLines.length - 1][questionLines[questionLines.length - 1]] = true
  }

  return result
}

/**
 * Validate all questions.
 *
 * @param {HTMLTextAreaElement} inputElement - HTML element containing questions
 * @param {HTMLDivElement} outputElement - HTML element reporting questions validity
 */
function validateAll (inputElement, outputElement) {
  const questions = inputElement.value.trim().replace(/\r?\n/g, '\n').split('\n\n')

  for (const question of questions) {
    const questionValidity = validateOne(question)

    const isQuestionValid = questionValidity.every(function (item) {
      return Object.values(item)[0] === true
    })

    for (const lineValidity of questionValidity) {
      const line = Object.entries(lineValidity)[0][0]
      const isLineValid = Object.entries(lineValidity)[0][1]

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
