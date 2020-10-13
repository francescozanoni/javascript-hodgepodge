/**
 * Client-side version.
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
  if (// Generic structure validation.
    /^ANSWER: [A-Z]$/.test(questionAsStringArray[questionAsStringArray.length - 1]) === true &&
    // Correct answer number validation.
    questionNumbers.indexOf(questionAsStringArray[questionAsStringArray.length - 1].substr(-1)) !== -1) {
    result[questionAsStringArray.length - 1][questionAsStringArray[questionAsStringArray.length - 1]] = true
  }

  return result
}

function validateAll () {
  document.getElementById('output').innerHTML = ''
  var input = this.value.trim()
  input = input.replace(/\r?\n/g, '\n')
  var questions = input.split('\n\n')
  for (var question of questions) {
    var result = validateOne(question)
    var isValid = result.filter(function (item) {
      return Object.values(item)[0] === true
    }).length === result.length
    for (var k = 0; k < result.length; k++) {
      if (isValid === true) {
        document.getElementById('output').innerHTML += ('<pre style="color: #228B22">' + Object.keys(result[k])[0] + '</pre>')
        continue
      }
      if (Object.values(result[k])[0] === true) {
        document.getElementById('output').innerHTML += ('<pre>' + Object.keys(result[k])[0] + '</pre>')
      } else {
        document.getElementById('output').innerHTML += ('<pre style="color:red; font-weight: bold">' + Object.keys(result[k])[0] + '</pre>')
      }
    }
    document.getElementById('output').innerHTML += '<br />'
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  var textArea = document.getElementById('input')
  textArea.onkeydown = validateAll
  textArea.onkeyup = validateAll
  textArea.onmousedown = validateAll
  textArea.onmousemove = validateAll
  textArea.onkeypress = validateAll
  textArea.onchange = validateAll
})
