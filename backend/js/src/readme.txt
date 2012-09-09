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

easy_install GitPython

python "C:\Alen\Devel\GitHub\password-manager\scripts\builder\main.py" install --ALL