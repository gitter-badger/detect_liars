# Detect Liars
Detect Liars is a fingerprinting library developped in javascript. For better performances it must be used with a server side language to get information about the http headers sent by the client.

##Warning : This library is under development
With this library you can get the fingerprint of a user :
  - navigator properties
  - browser
  - OS
  - list of fonts
  - canvas
  - webGl
  - and many other things

The strength of this library is that we don't consider information sent by the users as reliable. We try to discover if there are inconsistencies. If it is the case, we try to discover the truth. To do that we use different technics like statistics on the fonts, plugins, screen dimensions etc ...

##Usage
First of all you need a server to get the information about the HTTP headers. It can be PHP, Java, Ruby, whatever you want. You also need to get information from flash using the following method in javascript : 

```javascript
fontsFlash = getFlashFonts();
platformFlash = getFlashPlatform();
widthFlash = getFlashWidth();
heightFlash = getFlashHeight();
languageFlash = getFlashLanguage();
```

If the user doesn't have flash activated juste initialize the variables with default values.
```javascript
fontsFlash = [];
platformFlash = "";
widthFlash = 0;
heightFlash = 0;
languageFlash = "";
```

Then you can construct your Fingerprint object : 
```javascript
fp = new Fingerprint(userAgentHttp, languagesHttp, acceptHttp, encodingHttp, connectionHttp, fontsFlash, platformFlash, widthFlash, heightFlash, languageFlash);
```
You can access to different attributes and methods : 
```javascript
fp.width; //get the width of the screen in px
fp.fonts; //get the fonts of the user using flash or javascript+css if flash is not avalaible
fp.isAndroid(); //Test if the user is on an Android device
fp.isChrome(); //Test if the user is on Chrome
fp.isMobileDevice(); //Test if the user is on a smartphone
fp.hasLiedOs; //Test if the user tried to lie on its OS
//And many other features ...
```
If you only want to know if a user has lied on its OS or on its screen resolution for example it is not necessary to create a fingerprint object. You can do it directly by using the functions check_os and check_resolution.

```javascript
check_os(userAgentHttp, fontsFlash, platformFlash); //Returns false if there is an inconsistency
check_resolution(widthFlash, heightFlash);//Returns false if there is an inconsistency
```
##List of functions
Coming soon ...

#Fingerprint Class

##List of attributes
Coming soon ...

##List of methods
Coming soon ...



