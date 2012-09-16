::****** inspector *******

:: node --debug app.js

:: --debug-brk

:: node-inspector.cmd
:: http://127.0.0.1:8080/debug?port=5858

:: ***** supervisor *******
:: node-supervisor.cmd --watch .,modules,routes,views app.js

:: **** nodev *****

nodev --watch . --watch modules -w routes -w views 