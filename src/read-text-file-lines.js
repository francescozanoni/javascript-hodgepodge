const { exec } = require('child_process')

const filePath = '/path/to/text/file'
const firstLineIndex = '10'
const lastLineIndex = '19'

// @todo add sed/powershell availability check

exec(
  'sed -n "' + firstLineIndex + ',' + lastLineIndex + '"p ' + filePath,
  (error, stdout, stderr) => {
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
)

exec(
  'Get-Content ' + filePath + ' | Select-Object -First ' + firstLineIndex + ' -Last ' + lastLineIndex,
  { shell: 'powershell.exe' },
  (error, stdout, stderr) => {
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
)

// References:
// - https://stackabuse.com/executing-shell-commands-with-node-js/
// - https://stackoverflow.com/questions/10179114/execute-powershell-script-from-node-js
// - https://stackoverflow.com/questions/14759649/how-to-print-a-certain-line-of-a-file-with-powershell
