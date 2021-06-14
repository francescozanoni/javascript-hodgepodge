const { exec } = require('child_process')

const filePath = './tree.html'
const firstLineIndex = 10
const lastLineIndex = 19
const offset = firstLineIndex - 1
const limit = lastLineIndex - firstLineIndex + 1

// @todo add sed/powershell availability check

/**
 * @param {Error} error
 * @param {string|Buffer} stdout
 * @param {string|Buffer} stderr
 */
function callback (error, stdout, stderr) {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
}

if (process.platform.startsWith('win') === true) {
  exec(
    'Get-Content ' + filePath + ' | Select-Object -Skip ' + offset + ' -First ' + limit,
    { shell: 'powershell.exe' },
    callback
  )
} else {
  exec(
    'sed -n "' + firstLineIndex + ',' + lastLineIndex + '"p ' + filePath,
    callback
  )
}

// References:
// - https://stackabuse.com/executing-shell-commands-with-node-js/
// - https://stackoverflow.com/questions/10179114/execute-powershell-script-from-node-js
// - https://stackoverflow.com/questions/14759649/how-to-print-a-certain-line-of-a-file-with-powershell
// - https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-object

// Unused references:
// - https://github.com/npocmaka/batch.scripts/blob/master/fileUtils/tailHead.bat (Windows without PowerShell)
// - https://gist.github.com/jmptable/7a3aa580efffdef50fa9f0dd3d068d6f (cmd-exists.js)
