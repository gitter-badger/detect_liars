var languagesHttp = "fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4";
var language = navigator.language;
var languages = navigator.languages;
var userAgentHttp ="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.125 Safari/537.36";


function check_languages(language, languages, languagesHttp){

	//We check if navigator.language is equal to the first language of accept language http
	try{
		firstLanguageHttp = languagesHttp.substr(0,2);
		if(firstLanguageHttp != language){
			return false;
		}
	}catch(err){
		return false;
	}

	//We check if navigator.language is equal to the first language of navigator.languages
	try{
		firstLanguages = languages[0].substr(0,2);
		if(firstLanguages != language){
			return false;
		}
	}catch(err){
		console.log(err);
		return false;
	}

	//We check if navigator.languages is equal to accept languages Http
	var temp = languagesHttp;
	while((languagesHttpParsed = temp.replace(/;q=[0-9.]+/,"")) != temp){
		temp = languagesHttpParsed;
	}
	console.log(languagesHttpParsed);
	console.log(languages);
	if(languagesHttpParsed != languages){
		return false;
	}

	return true;
}


function check_dimensions(width, height, availWidth, availHeight){
	//Maybe add event ? and flash

	if(width < availWidth){
		return false;
	}

	if(height < availHeight){
		return false;
	}

	return true;
}

function check_os(userAgent, userAgentHttp, oscpu, platform){
	//add cpuClass from ie
	if(userAgent != userAgentHttp){
		return false;
	}
	
	//We extract the OS from the user agent
	if(userAgent.toLowerCase().indexOf("Win") >= 0){
		var os = "Windows";
	}else if(userAgent.toLowerCase().indexOf("Linux") >= 0){
		var os ="Linux";
	}else if(userAgent.toLowerCase().indexOf("Mac") >= 0){
		var os ="Mac";
	}else{
		var os = "Other";
	}

	//We compare oscpu with the os extracted from the ua
	if(oscpu != undefined){
		if(oscpu.toLowerCase().indexOf("Windows") >= 0 && os !=="Windows"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("Linux") >= 0 && os !=="Linux"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("Mac") >= 0 && os !=="Mac"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("Windows") == 0 && oscpu.toLowerCase().indexOf("Linux") == 0 && oscpu.toLowerCase().indexOf("Mac") >= 0 && os != "Other"){
			return false;
		}
	}

	//We compare platform with the os extracted from the ua
	if(platform.toLowerCase().indexOf("Windows") >= 0 && os !=="Windows"){
		return false;
	}else if(platform.toLowerCase().indexOf("Linux") >= 0 && os !=="Linux"){
		return false;
	}else if(platform.toLowerCase().indexOf("Mac") >= 0 && os !=="Mac"){
		return false;
	}else if(platform.toLowerCase().indexOf("Windows") == 0 && platform.toLowerCase().indexOf("Linux") == 0 && platform.toLowerCase().indexOf("Mac") >= 0 && os != "Other"){
		return false;
	}

	return true
}

function check_browser(userAgent, userAgentHttp, productSub){
	if(userAgent != userAgentHttp){
		return false;
	}

	//we extract the browser from the user agent (respect the order of test)
	if(userAgent.toLowerCase().indexOf("Firefox") >= 0){
		var browser = "Firefox";
	}else if(userAgent.toLowerCase().indexOf("Chrome") >= 0){
		var browser ="Chrome";
	}else if(userAgent.toLowerCase().indexOf("Safari") >= 0){
		var browser ="Safari";
	}else if(userAgent.toLowerCase().indexOf("Trident") >= 0){
		var browser = "Internet Explorer";
	}else if(userAgent.toLowerCase().indexOf("Opera") >= 0){
		var browser ="Opera";
	}else{
		var browser = "Other";
	}

	if(browser === "Chrome" && productSub != "20030107"){
		return false;
	}

	//Sort navigator prototype and compare it with those we know



}







console.log("check os : "+check_os(navigator.userAgent, userAgentHttp, navigator.oscpu, navigator.platform))
console.log("languages : "+check_languages(language, languages, languagesHttp));
console.log("dimensions : "+check_dimensions(screen.width, screen.height, screen.availWidth, screen.availHeight));
//check_languages(language, languages, languagesHttp);