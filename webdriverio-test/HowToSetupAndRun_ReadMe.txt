All selenium version configuration
----------------------------------
J2SE 8 = 52,
J2SE 7 = 51,
J2SE 6.0 = 50,
J2SE 5.0 = 49,
JDK 1.4 = 48,
JDK 1.3 = 47,
JDK 1.2 = 46,
JDK 1.1 = 45

Java 8
------
$ curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar

Java 7
------
$ curl -O http://selenium-release.storage.googleapis.com/2.51/selenium-server-standalone-2.51.0.jar

How to run run server
---------------------
$ java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-x.x.x.jar


Run Command
-----------
$ node test.js


Run throught wdio command 
---------------------------
C:\DEV\Impact\WebDriverSmokeTest\webdriverio-test>"C:\Program Files (x86)\Java\jre1.8.0_111\bin\java" -jar -Dwebdriver.gecko.driver="C:\DEV\Impact\WebDriverSmokeTest\driver\geckodriver.exe"  selenium-server-standalone-3.0.1.jar

Run Test
--------
C:\Project> "node_modules/.bin/"wdio wdio.conf.js

Debug
-----
Use browser.debug() command

Mocha Debug use $ npm install -g node-inspector
Url - http://127.0.0.1:8080/debug?port=5858

Run your Mocha tests.
$ mocha [options] --debug-brk  

Go back to the browser. The --debug-brk tells the debugger to break on the first line of the first script. You're stopped inside of Mocha:
