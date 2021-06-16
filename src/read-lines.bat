@echo off

rem Example:
rem   tail.bat tree.html 10 19

set FILEPATH=%1
set /A FIRST=%2
set /A LAST=%3
set /A COUNTER=1

setlocal enabledelayedexpansion

rem @todo do not skip empty lines

for /F "tokens=* delims=" %%A in (%FILEPATH%) do (
  set /A COUNTER+=1
  if !COUNTER! GEQ %FIRST% if !COUNTER! LEQ %LAST% echo %%A
)

rem https://ss64.com/nt/if.html
rem https://www.rgagnon.com/gp/gp-batch-increment-a-counter.html
rem https://ss64.com/nt/for_f.html
