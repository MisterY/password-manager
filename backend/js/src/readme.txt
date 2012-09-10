======================================
Running

Run during development, monitor file changes.
supervisor --watch '.,routes,views,modules' app
// --extensions 'node|js|jade'

To debug
node --debug app

To debug the initial module
node --debugg-brk app

======================================
Debugging

Debugging URL:
http://127.0.0.1:8080/debug?port=5858

App URL:
http://127.0.0.1:8000/

======================================
Deployment

Check scripts/builder directory.
The build script requires Easy Install Python package.
http://pypi.python.org/pypi/setuptools
Windows Path must include Python and Scripts directories (i.e. c:\Python27 and c:\Python27\Scripts).

Then install Git Python module.
easy_install GitPython

python "%CD%\builder\main.py" install --ALL

Deployed site contains subdirectories beta and gamma with index.html file inside.