$.ajax({    
	//ajax request to a php page which serves a Json response containing Http headers attributes                                                                                                                                                                                            
    url: './example.php',
    contentType: 'application/x-www-form-urlencoded', 
    method: "POST",
    success: function(data){
    	response =  JSON.parse(data);
		var userAgentHttp = response.userAgentHttp;
		var languagesHttp = response.acceptLanguagesHttp;
		var acceptHttp = response.acceptHttp;
		var encodingHttp = response.encodingHttp;
		var connectionHttp = response.connectionHttp;


		//We initialize flash values with default values in the case the user doesn't have flash
		fontsFlash = [];
		platformFlash = "";
		widthFlash = 0;
		heightFlash = 0;
		languageFlash = "";

		//We get the plugins of the user using getPlugins function
		var plugins = getPlugins();

		//If the user has flash we try to get the real values of the flash attributes
		if((plugins.indexOf("flash") > -1) || (plugins.indexOf("Flash") > -1)){
			//We create a div for flash
			$("body").append('<div id="OSData"></div>');
			setTimeout(function(){
				try{
					fontsFlash = getFlashFonts();
					platformFlash = getFlashPlatform();
					widthFlash = getFlashWidth();
					heightFlash = getFlashHeight();
					languageFlash = getFlashLanguage();
				}catch(err){
					//if the user has flash but it is blocked by an extension
				}

				//We create a fingerprint
				fp = new Fingerprint(userAgentHttp, languagesHttp, acceptHttp, encodingHttp, connectionHttp, fontsFlash, platformFlash, widthFlash, heightFlash, languageFlash);
				
				//You can access to the different attributes if the fingerprint :
				$("body").append('<p>Screen width : '+fp.width+"px; <br/> User on firefox ? : "+fp.isFirefox()+"; <br/> User on Linux ? : "+fp.isLinux()+"; <br/> User OS : "+fp.os+"; <br/> User browser : "+fp.browser+";<br/>");
				
				//You can also use the library without using Fingerprint class

				//For example if you just want to check if the user has lied on its OS
				//check_os returns false is there is an inconsistency in the attributes we use to determine the OS
				var userLiedOs = !check_os(userAgentHttp, fontsFlash, platformFlash);
				$("body").append('<p>The user lied on its OS ? : '+userLiedOs);

				//if the user has lied you may want to know its real OS
				if(userLiedOs){
					//The function guess_os returns an object whose attributes are Windows, Linux, Safari, Windows Phone, iOS, Other, OS. For each attribute you have a score associated to this OS
					//The real OS is the attribute with the highest score and is stored in the attribute OS
					os = guess_os(userAgentHttp, fontsFlash, platformFlash);
					//Use os.OS to get the real OS
					$("body").append('<p>Its real OS is : '+os.OS);
				}

				//We can do the same thing using the fingerprint class
				var userLiedOs = fp.hasLiedOs;
				$("body").append('<p>The user lied on its OS ? (using Fingerprint class) : '+userLiedOs);
				if(userLiedOs){
					$("body").append('<p>Its real OS is (using Fingerprint class) : '+fp.os);
				}


			},600); //You can adjust the timeout. It is often necessary to wait for flash
		}else{ //If the user doesn't have flash
			fp = new Fingerprint(userAgentHttp, languagesHttp, acceptHttp, encodingHttp, connectionHttp, fontsFlash, platformFlash, widthFlash, heightFlash, languageFlash);
			$("body").append('<p>Screen width : '+fp.width+"px; <br/> User on firefox ? : "+fp.isFirefox()+"; <br/> User on Linux ? : "+fp.isLinux()+"; <br/> User OS : "+fp.os+"; <br/> User browser : "+fp.browser+";<br/>");

		}
    }
});


