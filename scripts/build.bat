@echo off

::echo %CD%
::echo "%CD%\builder"
::python "%CD%\builder\main.py" install --ALL

:: if(%1)==() echo example build.bat install --ALL

python "%CD%\builder\main.py" %*