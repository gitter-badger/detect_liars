var languagesHttp = "fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4";
var userAgentHttp ="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.125 Safari/537.36";

swfobject.embedSWF("OSData.swf", "OSData", "0", "0", "9.0.0");

var Detector = function() {
		    // a font will be compared against all the three default fonts.
		    // and if it doesn't match all 3 then that font is not available.
		    var baseFonts = ['monospace', 'sans-serif', 'serif'];

		    //we use m or w because these two characters take up the maximum width.
		    // And we use a LLi so that the same matching fonts can get separated
		    var testString = "mmmmmmmmmmlil";

		    //we test using 72px font size, we may use any size. I guess larger the better.
		    var testSize = '72px';

		    var h = document.getElementsByTagName("body")[0];

		    // create a SPAN in the document to get the width of the text we use to test
		    var s = document.createElement("span");
		    s.style.fontSize = testSize;
		    s.innerHTML = testString;
		    var defaultWidth = {};
		    var defaultHeight = {};
		    for (var index in baseFonts) {
		        //get the default width for the three base fonts
		        s.style.fontFamily = baseFonts[index];
		        h.appendChild(s);
		        defaultWidth[baseFonts[index]] = s.getBoundingClientRect().width; //width for the default font
		        defaultHeight[baseFonts[index]] = s.getBoundingClientRect().height; //height for the defualt font
		        
		        h.removeChild(s);
		    }

		    function detect(font) {
		        var detected = false;
		        for (var index in baseFonts) {
		            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
		            h.appendChild(s);
		            var matched = (s.getBoundingClientRect().width != defaultWidth[baseFonts[index]] || s.getBoundingClientRect().height != defaultHeight[baseFonts[index]]);
		            h.removeChild(s);
		            detected = detected || matched;
		        }
		        return detected;
		    }

		    this.detect = detect;
		};


function getFlashFonts(){
    var fl = document.getElementById("OSData");
    if(fl == null){
        return [];
    } else{
        fontsFlash = fl.getFonts();

        for(var i = 0; i < fontsFlash.length; i++){
        	fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
        }
    }
    return fontsFlash;
}

function getFlashWidth(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return 0;
    } else{
    	return fl.getResolution()[0];     
    }
}

function getFlashHeight(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return 0;
    } else{
    	return fl.getResolution()[1];     
    }
}

function getFlashLanguage(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return "";
    } else{
    	return fl.getLanguage();     
    }
}

function getFlashPlatform(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return "";
    } else{
    	return fl.getOS();     
    }
}



function check_languages(languagesHttp, languageFlash){
	language = navigator.language;
	languages = navigator.languages;

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

	if(languageFlash !== ""){
		if(languageFlash !== language){
			return false;
		}		
	}

	return true;
}

//Pass widthFlash = heightFlash = 0 if no flash
function check_dimensions(widthFlash, heightFlash){
	width = screen.width;
	height = screen.height;
	availWidth = screen.availWidth;
	availHeight = screen.availHeight;
	//Maybe add event ? 

	if(width < availWidth){
		return false;
	}

	if(height < availHeight){
		return false;
	}

	if(widthFlash != 0 && heightFlash !=0){
		if(height > 1.15*heightFlash || height < 0.85*heightFlash){
			return false;
		}

		if(width > 1.15*widthFlash || width < 0.85*widthFlash){
			return false;
		}
	}

	return true;
}

//If no fonts flash juste give an empty array
//If no flash platform pass an empty string ""
function check_os(userAgentHttp, fontsFlash, platformFlash){
	//Maybe problem with fonts/plugins as we consider android = Linux and iPhone = mac 
	userAgent = navigator.userAgent;
	oscpu = navigator.oscpu;
	platform = navigator.platform;

	//add cpuClass from ie
	if(userAgent != userAgentHttp){
		return false;
	}
	
	//We extract the OS from the user agent
	if(userAgent.toLowerCase().indexOf("win") >= 0){
		var os = "Windows";
	}else if(userAgent.toLowerCase().indexOf("linux") >= 0){
		var os ="Linux";
	}else if(userAgent.toLowerCase().indexOf("mac") >= 0){
		var os ="Mac";
	}else{
		var os = "Other";
	}
	console.log(os);
	//We compare oscpu with the os extracted from the ua
	if(oscpu != undefined){
		if(oscpu.toLowerCase().indexOf("windows") >= 0 && os !=="Windows"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("linux") >= 0 && os !=="Linux"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("mac") >= 0 && os !=="Mac"){
			return false;
		}else if(oscpu.toLowerCase().indexOf("windows") == 0 && oscpu.toLowerCase().indexOf("linux") == 0 && oscpu.toLowerCase().indexOf("mac") >= 0 && os != "other"){
			return false;
		}
	}

	//We compare platform with the os extracted from the ua
	if(platform.toLowerCase().indexOf("windows") >= 0 && os !=="Windows"){
		return false;
	}else if(platform.toLowerCase().indexOf("linux") >= 0 && os !=="Linux"){
		return false;
	}else if(platform.toLowerCase().indexOf("mac") >= 0 && os !=="Mac"){
		return false;
	}else if(platform.toLowerCase().indexOf("windows") == 0 && platform.toLowerCase().indexOf("linux") == 0 && platform.toLowerCase().indexOf("mac") >= 0 && os != "other"){
		return false;
	}

	//We compare flash platform with the os extracted from the ua
	if(platformFlash !==""){
		if(platformFlash.toLowerCase().indexOf("windows") >= 0 && os !=="Windows"){
			return false;
		}else if(platformFlash.toLowerCase().indexOf("linux") >= 0 && os !=="Linux"){
			return false;
		}else if(platformFlash.toLowerCase().indexOf("mac") >= 0 && os !=="Mac"){
			return false;
		}else if(platformFlash.toLowerCase().indexOf("windows") == 0 && platformFlash.toLowerCase().indexOf("linux") == 0 && platformFlash.toLowerCase().indexOf("mac") >= 0 && os != "other"){
			return false;
		}
	}


	//We check the plugins
	var listPLuginsWindows = ["microsoft office","adobe acrobat", "google update", "javatm platform se", "java deployment toolkit", "intel", "vlc web plugin", "nvidia", "google earth plugin"];
	//we don't use plugins for linux because there are not plugins which caracterize linux AND which are used by a wide majority of people
	var listPluginsMac = ["default browser helper", "java applet plug-in", "sharepoint browser plug-in", "adobe acrobat npapi plug-in version", "webex", "webkit built-in pdf", "flip", "iphotophotocast", "google earth plug-in","quickTime plug-in"];
	if(os === "Windows" || os === "Mac"){
		var testPlugins = false;
		for(var i =0; i < navigator.plugins.length; i++){
			if((os === "Windows" && listPLuginsWindows.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0) || (os === "Mac" && listPLuginsMac.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0)){
				testPlugins = true;
				break;
			}
		}
	}

	if(os === "Windows"){
		listFonts = ['jasmineupc', 'minion pro cond', 'bodoni mt', 'franklin gothic demi cond', 'lilyupc', 'showcard gothic', 'freestyle script', 'traditional arabic', 'microsoft jhenghei', 'nsimsun', 'roman', 'iskoola pota', 'eras medium itc', 'vani', 'cordia new', 'browallia new', 'tekton pro cond', 'poor richard', 'felix titling', 'agency fb', 'sakkal majalla', 'linux libertine g', 'khmer ui', 'times new roman cyr', 'ms outlook', 'segoe ui light', 'rage italic', 'segoe ui semilight', 'andalus', 'arabic typesetting', 'ms ui gothic', 'dotum', 'dokchampa', 'daunpenh', 'kokila', 'aharoni', 'ravie', 'euphemia', 'tw cen mt condensed extra bold', 'times new roman tur', 'harlow solid italic', 'nueva std cond', 'segoe ui symbol', 'lao ui', 'microsoft yahei ui', 'yu mincho', 'kartika', 'rockwell condensed', 'parchment', 'vivaldi', 'berlin sans fb', 'microsoft phagspa', 'tempus sans itc', 'microsoft yahei light', 'angsanaupc', 'eras bold itc', 'vrinda', 'viner hand itc', 'bodoni mt black', 'sitka display', 'yu gothic light', 'tw cen mt condensed', 'cordiaupc', 'gadugi', 'gisha', 'javanese text', 'arial tur', 'microsoft new tai lue', 'aparajita', 'microsoft jhenghei ui light', 'miriam', 'gulimche', 'irisupc', 'myanmar text', 'french script mt', 'angsana new', 'magneto', 'gill sans ultra bold condensed', 'arial greek', 'pristina', 'segoe ui', 'shonar bangla', 'franklin gothic heavy', 'estrangelo edessa', 'nirmala ui', 'informal roman', 'mv boli', 'utsaah', 'courier new cyr', 'old english text mt', 'arial baltic', 'blackadder itc', 'niagara engraved', 'broadway', 'sylfaen', 'kunstler script', 'sitka text', 'bodoni mt poster compressed', 'microsoft yahei ui light', 'raavi', 'goudy stout', 'courier new greek', 'times new roman baltic', 'fixedsys', 'courier new ce', 'kalinga', 'sitka heading', 'castellar', 'yu gothic', 'small fonts', 'maiandra gd', 'modern', 'leelawadee', 'arabic transparent', 'browalliaupc', 'microsoft jhenghei ui', 'kaiti', 'batangche', 'dotumche', 'microsoft uighur', 'eras demi itc', 'miriam fixed', 'snap itc', 'dilleniaupc', 'minion pro med', 'malgun gothic', 'gigi', 'lithos pro regular', 'rod', 'high tower text', 'levenim mt', 'meiryo ui', 'franklin gothic medium cond', 'chiller', 'jokerman', 'leelawadee ui semilight', 'dfkai-sb', 'bodoni mt condensed', 'segoe print', 'sitka banner', 'minion pro smbd', 'segoe script', 'elephant', 'courier new baltic', 'vladimir script', 'juice itc', 'algerian', 'segoe ui emoji', 'niagara solid', 'vijaya', 'myriad pro light', 'gungsuhche', 'tekton pro ext', 'gill sans mt condensed', 'eucrosiaupc', 'times new roman ce', 'tunga', 'arial ce', 'ocr a extended', 'mangal', 'franklin gothic demi', 'microsoft jhenghei light', 'courier new tur', 'ebrima', 'myriad pro cond', 'urdu typesetting', 'arial cyr', 'aldhabi', 'bradley hand itc', 'frankruehl', 'nyala', 'ms serif', 'kodchiangupc', 'terminal', 'sitka subheading', 'segoe ui semibold', 'yu mincho demibold', 'gautami', 'palace script mt', 'yu mincho light', 'freesiaupc', 'segoe ui black', 'simplified arabic', 'system', 'narkisim', 'nirmala ui semilight', 'californian fb', 'fangsong', 'latha', 'kristen itc', 'david', 'eras light itc', 'berlin sans fb demi', 'leelawadee ui', 'sitka small', 'gungsuh', 'centaur', 'ms sans serif', 'forte', 'microsoft yahei', 'times new roman greek', 'gill sans mt ext condensed bold', 'linux biolinum g', 'moolboran', 'shruti', 'simplified arabic fixed', 'script mt bold'];
	}else if(os === "Mac"){
		listFonts = ['helvetica', 'yuppy sc regular', 'arial hebrew scholar', 'calisto mt bold italic', 'xingkai sc light', 'apple sd gothic neo thin', 'yuanti sc bold', 'songti sc black', 'kannada mn bold', 'tw cen mt italic', 'century gothic bold italic', 'capitals', 'avenir next condensed ultra light italic', 'didot italic', 'copperplate', 'chalkboard bold', 'osaka-mono', 'athelas regular', 'arial hebrew scholar light', 'applegothic regular', 'apple ligothic medium', 'nanum myeongjo', 'verdana bold italic', 'helvetica cy', 'bradley hand bold', 'telugu mn bold', 'lucida sans typewriter bold oblique', 'kannada sangam mn', 'apple chancery', 'marion italic', 'system font heavy', 'snell roundhand black', 'avenir heavy', 'times new roman bold', 'helvetica cy plain', 'avenir next bold italic', 'seravek medium', 'gungseo', 'lucida sans typewriter oblique', 'apple braille outline 8 dot', 'lucida bright italic', 'kannada mn', 'stixintegralsd-regular', 'baoli sc regular', 'superclarendon black italic', 'gill sans semibold italic', 'adobe myungjo std', 'avenir next condensed', 'corbel bold italic', 'eurostile bold', 'news gothic mt', 'snell roundhand bold', 'wawati tc', 'hiragino mincho pron w6', 'hiragino mincho pron w3', 'malayalam sangam mn bold', 'itf devanagari bold', 'kannada sangam mn bold', 'sinhala sangam mn bold', 'decotype naskh', 'didot', 'apple sd gothic neo semibold', 'sukhumvit set text', 'damascus light', 'tamil mn', 'seravek extralight italic', 'zapf dingbats', 'palatino', 'baskerville semibold', 'bangla sangam mn', 'big caslon', 'hiragino kaku gothic std w8', 'system font medium p4', 'lucida fax regular', 'system font ultralight', 'stixgeneral-bolditalic', 'pt mono bold', 'luminari', 'skia light condensed', 'bodoni 72 oldstyle book', 'stixgeneral-regular', 'shree devanagari 714 bold', 'stixintegralsupsm-regular', 'sana regular', 'trebuchet ms italic', 'stixintegralsd-bold', 'athelas bold italic', 'iowan old style roman', 'nanum pen script', 'book antiqua bold italic', 'noteworthy', 'book antiqua bold', 'helvetica oblique', 'chalkboard se regular', 'bodoni 72 oldstyle', 'franklin gothic book italic', 'lisong pro', 'adobe song std', 'kufistandardgk regular', 'sukhumvit set medium', 'baghdad regular', 'stixsizetwosym-regular', 'stixsizethreesym-bold', 'yumincho demibold', 'futura condensed extrabold', 'didot bold', 'pt mono', 'stixsizeonesym-bold', 'skia black', 'arial hebrew scholar bold', 'kaiti tc bold', 'marker felt wide', 'stixgeneral-bold', 'wawati sc', 'tamil mn bold', 'times bold', 'palatino linotype bold italic', 'khmer mn bold', 'menlo regular', 'helvetica neue bold', 'rockwell bold italic', 'futura condensed medium', 'helvetica bold', 'lucida grande', 'book antiqua italic', 'libian sc', 'geeza pro bold', 'pt sans bold italic', 'gurmukhi mn bold', 'tw cen mt bold italic', 'apple braille pinpoint 6 dot', 'telugu sangam mn', 'trebuchet ms bold', 'diwan kufi', 'stheiti', 'geneva cy', 'corbel italic', 'avenir light oblique', 'khmer sangam mn', 'candara bold italic', 'courier new bold italic', 'athelas bold', 'apple sd gothic neo regular', 'calibri bold', 'kailasa', 'bangla sangam mn bold', 'avenir next bold', 'cambria italic', 'optima italic', 'menlo bold', 'euphemia ucas bold', 'superclarendon', 'mishafi gold', 'bradley hand', 'skia light', 'superclarendon regular', 'silom', 'yuanti sc', 'gurmukhi sangam mn', 'times', 'sinhala mn bold', 'damascus regular', 'eurostile', 'helvetica neue condensed bold', 'seravek italic', 'telugu sangam mn bold', 'xingkai sc bold', 'bookman old style bold italic', 'cochin bold', 'hiragino kaku gothic pro', 'heiti tc', 'kohinoor devanagari book', 'telugu mn', 'beirut', 'arial hebrew light', 'stixnonunicode-bold', 'seravek bold italic', 'songti tc light', 'yumincho', 'american typewriter light', 'gill sans', 'perpetua bold', 'weibei tc', 'optima regular', 'new peninim mt bold', 'pt sans narrow', 'diwan thuluth regular', 'big caslon medium', 'libian sc regular', 'nanumgothic extrabold', 'helvetica neue ultralight', 'stfangsong', 'al nile bold', 'heiti tc medium', 'itf devanagari light', 'devanagari mt bold', 'avenir oblique', 'lucida calligraphy italic', 'schoolhouse printed a', 'arial narrow bold', 'engravers mt bold', 'raanana', 'kaiti sc bold', 'hannotate sc bold', 'marion bold', 'avenir book', 'adobe ming std', 'handwriting - dakota', 'bodoni 72', 'avenir next demi bold italic', 'futura medium', 'hiragino maru gothic pro', 'mshtakan', 'myanmar mn', 'malayalam mn', 'athelas', 'wawati sc regular', 'pt sans', 'yumincho medium', 'hannotate tc', 'lucida fax italic', 'candara italic', 'stixsizetwosym-bold', 'chalkboard se', 'mishafi', 'lao mn bold', 'hoefler text ornaments', 'menlo bold italic', 'hiragino kaku gothic pron w6', 'hiragino kaku gothic pron w3', 'avenir next regular', 'hoefler text', 'lantinghei sc', 'avenir next condensed bold', 'blairmditc tt medium', 'songti sc light', 'gungseo regular', 'biaukai', 'courier new italic', 'superclarendon black', 'mshtakan boldoblique', 'kai', 'gill sans mt italic', 'helvetica bold oblique', 'hiragino kaku gothic pro w6', 'hiragino kaku gothic pro w3', 'chalkboard', 'lucida fax demibold italic', 'farah regular', 'marion regular', 'arial bold', 'superclarendon light italic', 'lantinghei tc', 'new peninim mt', 'stixvariants-regular', 'perpetua italic', 'din alternate', 'avenir next condensed demi bold italic', 'signpainter-housescript', 'optima bold italic', 'hannotate tc regular', 'avenir heavy oblique', 'pilgi', 'thonburi bold', 'helvetica neue condensed black', 'bell mt italic', 'noteworthy bold', 'devanagari sangam mn bold', 'al nile', 'bodoni 72 smallcaps book', 'mshtakan bold', 'skia light extended', 'songti sc', 'american typewriter bold', 'bodoni 72 book', 'kaiti sc', 'applemyungjo', 'avenir next heavy', 'songti sc bold', 'georgia bold', 'raanana bold', 'avenir next condensed italic', 'tw cen mt bold', 'lantinghei sc demibold', 'helvetica neue light', 'kai regular', 'lucida bright demibold italic', 'lucida grande bold', 'stixintegralsup-regular', 'abadi mt condensed light', 'lihei pro', 'chalkboard se light', 'gill sans light italic', 'gill sans ultrabold', 'helvetica light', 'kailasa regular', 'princetown let', 'futura medium italic', 'bangla mn bold', 'decotype naskh regular', 'sukhumvit set light', 'muna black', 'lucida fax demibold', 'bordeaux roman bold let plain', 'gill sans bold', 'lantinghei tc demibold', 'avenir next condensed medium italic', 'lucida bright demibold', 'kohinoor devanagari medium', 'georgia italic', 'lucida sans typewriter bold', 'bodoni ornaments', 'avenir next condensed regular', 'din alternate bold', 'apple sd gothic neo bold', 'avenir next demi bold', 'seravek extralight', 'palatino linotype italic', 'baskerville semibold italic', 'avenir next condensed demi bold', 'geeza pro', 'kaiti sc black', 'cochin bold italic', 'baoli sc', 'shree devanagari 714', 'bodoni 72 oldstyle book italic', 'arial italic', 'hiragino sans gb w3', 'hiragino sans gb w6', 'xingkai sc', 'phosphate', 'courier new bold', 'pilgi regular', 'oriya mn', 'avenir black oblique', 'iowan old style titling', 'weibei tc bold', 'nadeem regular', 'hannotate sc', 'baskerville', 'charter black', 'superclarendon bold italic', 'signpainter', 'century gothic italic', 'pcmyungjo regular', 'helvetica cy boldoblique', 'apple sd gothic neo ultralight', 'helvetica neue thin italic', 'avenir next condensed medium', 'stixintegralsupd-regular', 'hanzipen tc regular', 'superclarendon italic', 'lucida sans demibold roman', 'skia black condensed', 'news gothic mt bold', 'ayuthaya', 'marker felt', 'pt serif caption italic', 'avenir next condensed heavy', 'muna bold', 'savoye let plain', 'stixnonunicode-bolditalic', 'palatino bold', 'marker felt thin', 'courier oblique', 'verdana italic', 'lucida blackletter', 'avenir roman', 'constantia bold', 'baghdad', 'hiragino mincho pro w3', 'heiti sc', 'hiragino mincho pro w6', 'gill sans semibold', 'kohinoor devanagari light', 'sinhala mn', 'corbel bold', 'geeza pro regular', 'devanagari sangam mn', 'apple color emoji', 'krungthep', 'oriya mn bold', 'beirut regular', 'system font thin', 'kohinoor devanagari bold', 'apple sd gothic neo heavy', 'synchro let', 'bookman old style italic', 'helvetica neue light italic', 'al bayan', 'chalkboard se bold', 'weibei sc', 'stixsizefoursym-regular', 'al tarikh', 'stixgeneral-italic', 'mona lisa solid itc tt', 'cambria bold', 'brush script mt italic', 'apple ligothic', 'bodoni 72 oldstyle bold', 'itf devanagari medium', 'kaiti tc regular', 'headlinea regular', 'gujarati mt', 'myanmar sangam mn', 'iowan old style black', 'skia', 'al tarikh regular', 'avenir', 'kefa bold', 'helvetica neue ultralight italic', 'hannotate tc bold', 'charcoal cy', 'hiragino kaku gothic stdn', 'phosphate inline', 'hoefler text italic', 'myanmar mn bold', 'century gothic bold', 'geneva', 'apple braille outline 6 dot', 'braggadocio', 'trattatello', 'hanzipen sc', 'stixintegralssm-bold', 'stixintegralssm-regular', 'snell roundhand', 'times new roman bold italic', 'superclarendon light', 'palatino bold italic', '0', 'hiragino maru gothic pron', 'perpetua titling mt light', 'times italic', 'headlinea', 'consolas bold italic', 'nadeem', 'bookman old style bold', 'itf devanagari demi', 'apple lisung', 'arial narrow bold italic', 'apple sd gothic neo light', 'farisi', 'yuppy tc regular', 'avenir next medium', 'gurmukhi mn', 'gurmukhi mt', 'stsong', 'heiti tc light', 'monotype sorts', 'skia condensed', 'songti tc regular', 'yuppy tc', 'garamond italic', 'optima extrablack', 'yugothic medium', 'hanzipen tc bold', 'apple braille pinpoint 8 dot', 'charter', 'avenir next condensed bold italic', 'oriya sangam mn', 'gill sans bold italic', 'songti tc bold', 'seravek', 'nanumgothic bold', 'yugothic bold', 'gb18030 bitmap', 'helvetica cy bold', 'apple braille', 'noteworthy light', 'helvetica neue bold italic', 'applemyungjo regular', 'garamond bold', 'yugothic', 'pt sans caption bold', 'futura', 'tahoma negreta', 'goudy old style bold', 'desdemona', 'gill sans mt bold', 'system font regular', 'charter italic', 'seravek bold', 'al bayan bold', 'baskerville bold', 'american typewriter condensed bold', 'meiryo bold italic', 'nanum gothic', 'kokonor', 'avenir black', 'bodoni 72 smallcaps', 'system font light', 'lantinghei sc heavy', 'shree devanagari 714 italic', 'yuanti sc regular', 'pt serif caption', 'helvetica light oblique', 'avenir light', 'stixintegralsupd-bold', 'stixnonunicode-italic', 'mishafi gold regular', 'kohinoor devanagari demi', 'damascus medium', 'consolas bold', 'stixsizeonesym-regular', 'heiti sc light', 'times roman', 'constantia bold italic', 'tamil sangam mn bold', 'candara bold', 'avenir next ultra light', 'hiragino mincho pron', 'stixintegralsup-bold', 'lucida sans typewriter regular', 'diwan thuluth', 'oriya sangam mn bold', 'herculanum', 'baskerville bold italic', 'calibri italic', 'kaiti tc', 'seravek light', 'bodoni 72 book italic', 'al bayan plain', 'kefa regular', 'cochin', 'itf devanagari', 'system font medium italic p4', 'charter black italic', 'helvetica neue medium', 'american typewriter', 'gill sans light', 'trebuchet ms bold italic', 'lucida sans italic', 'avenir next italic', 'kozuka gothic pro', 'new peninim mt inclined', 'pt serif italic', 'sukhumvit set', 'hiragino kaku gothic pron', 'bell mt bold', 'lucida sans regular', 'lucida handwriting italic', 'consolas italic', 'marion', 'helvetica neue medium italic', 'lao mn', 'microsoft tai le bold', 'damascus bold', 'athelas italic', 'nanum brush script', 'seravek medium italic', 'sukhumvit set semi bold', 'charter roman', 'pt serif bold italic', 'gujarati sangam mn', 'kokonor regular', 'inaimathi', 'kozuka mincho pro', 'avenir next', 'hoefler text black italic', 'sathu', 'heiti sc medium', 'cracked', 'stixnonunicode-regular', 'din condensed bold', 'muna regular', 'rockwell bold', 'meiryo bold', 'savoye let', 'skia bold', 'hiragino kaku gothic stdn w8', 'gurmukhi sangam mn bold', 'hanzipen tc', 'abadi mt condensed extra bold', 'goudy old style italic', 'arial hebrew bold', 'times bold italic', 'damascus semi bold', 'stkaiti', 'helvetica neue thin', 'charter bold italic', 'iowan old style italic', 'muna', 'osaka', 'sukhumvit set thin', 'hiragino maru gothic pro w4', 'applegothic', 'apple sd gothic neo', 'system font italic', 'calisto mt bold', 'euphemia ucas italic', 'wawati tc regular', 'avenir next ultra light italic', 'cambria bold italic', 'hei', 'bangla mn', 'euphemia ucas', 'apple lisung light', 'hannotate sc regular', 'century schoolbook bold', 'pt sans bold', 'diwan kufi regular', 'kohinoor devanagari', 'american typewriter condensed', 'times new roman italic', 'din condensed', 'lithos pro', 'news gothic mt italic', 'optima bold', 'kaiti sc regular', 'hanzipen sc regular', 'pt sans italic', 'meiryo italic', 'menlo', 'stixsizethreesym-regular', 'hei regular', 'hiragino maru gothic pron w4', 'gujarati mt bold', 'perpetua titling mt bold', 'songti sc regular', 'pt sans narrow bold', 'iowan old style bold', 'tamil sangam mn', 'rosewood std', 'khmer mn', 'georgia bold italic', 'comic sans ms bold', 'avenir next condensed ultra light', 'monaco', 'nanummyeongjo extrabold', 'apple sd gothic neo medium', 'portagoitc tt', 'bodoni 72 bold', 'sukhumvit set bold', 'kefa', 'helvetica neue', 'waseem regular', 'avenir book oblique', 'damascus', 'schoolhouse cursive b', 'new peninim mt bold inclined', 'yuanti sc light', 'american typewriter condensed light', 'nanummyeongjo bold', '1', 'pt serif bold', 'lantinghei tc extralight', 'iowan old style bold italic', 'apple sd gothicneo extrabold', 'stixvariants-bold', 'waseem light', 'lao sangam mn', 'gill sans mt bold italic', 'itf devanagari book', 'arial bold italic', 'rockwell italic', 'stixsizefoursym-bold', 'helvetica neue italic', 'franklin gothic medium italic', 'stixsizefivesym-regular', 'yuppy sc', 'hiragino kaku gothic std', 'constantia italic', 'zapfino', 'palatino italic', 'hiragino mincho pro', 'farisi regular', 'phosphate solid', 'courier bold', 'century schoolbook bold italic', 'gujarati sangam mn bold', 'apple symbols', 'malayalam mn bold', 'menlo italic', 'kino mt', 'weibei sc bold', 'lucida sans demibold italic', 'songti tc', 'perpetua bold italic', 'devanagari mt', 'lantinghei sc extralight', 'copperplate light', 'thonburi light', 'sana', 'hoefler text black', 'avenir next condensed heavy italic', 'sinhala sangam mn', 'skia extended', 'seravek light italic', 'kufistandardgk', 'thonburi', 'system font bold italic', 'avenir next medium italic', 'palatino linotype bold', 'arial narrow italic', 'mshtakan oblique', 'mishafi regular', 'helvetica cy oblique', 'avenir next heavy italic', 'papyrus condensed', 'cochin italic', 'skia black extended', 'baskerville italic', 'iowan old style', 'chalkduster', 'waseem', 'farah', 'optima', 'hiragino sans gb', 'avenir medium', 'century schoolbook italic', 'iowan old style black italic', 'pt sans caption', 'avenir medium oblique', 'calibri bold italic', 'lantinghei tc heavy', 'system font bold', 'shree devanagari 714 bold italic', 'calisto mt italic', 'courier bold oblique', 'gill sans italic', 'corsiva hebrew bold', 'arial hebrew', 'malayalam sangam mn', 'copperplate bold', 'savoye let plain cc', 'stxihei', 'charter bold', 'pcmyungjo', 'skia regular', 'hanzipen sc bold', 'verdana bold', 'superclarendon bold', 'stixintegralsupsm-bold', 'corsiva hebrew'];
	}else if(os ==="Linux"){
		listFonts = ['khmer os', 'freesans', 'loma', 'utopia', 'bitstream charter', 'ubuntu light', 'gnu', 'cantarell', 'sawasdee', 'cmsy10', 'ubuntu', 'lohit bengali', 'tlwgmono', 'gargi', 'msbm10', 'nimbus mono l', 'droid sans thai', 'tlwgtypewriter', 'serif', 'monospace', 'utkal', 'kacstqurn', 'phetsarath ot', 'lklug', 'esint10', 'tlwg typist', 'mukti narrow', 'urw chancery l', 'purisa', 'ubuntu medium', 'waree', 'droid sans hebrew', 'umpush', 'kacstoffice', 'meera', 'droid serif', 'kacstdecorative', 'takaopgothic', 'wasy10', 'freemono', 'kacsttitlel', 'kacstpen', 'kacstdigital', 'tlwg typo', 'cmex10', 'saab', 'cmr10', 'dingbats', 'padauk', 'droid arabic naskh', 'kacstfarsi', 'mathjax', 'kacstnaskh', 'rsfs10', 'wenquanyi micro hei mono', 'urw gothic l', 'droid sans armenian', 'ubuntu condensed', 'century schoolbook l', 'courier 10 pitch', 'kacstart', 'droid sans japanese', 'mry', 'droid sans ethiopic', 'kacsttitle', 'msam10', 'rekha', 'lohit devanagari', 'eufm10', 'vemana2000', 'freeserif', 'nimbus roman no9 l', 'wenquanyi micro hei', 'kacstbook', 'nanumbarungothic', 'droid sans fallback', 'kacstposter', 'rachana', 'kacstscreen', 'urw palladio l', 'urw bookman l', 'lohit gujarati', 'padauk book', 'kacstletter', 'lohit punjabi', 'undotum', 'droid sans', 'tibetan machine uni', 'abyssinica sil', 'standard symbols l', 'droid sans georgian', 'mallige', 'droid sans mono', 'khmer os system', 'norasi', 'kedage', 'kinnari', 'garuda', 'cmmi10', 'nimbus sans l', 'sans', 'ubuntu mono', 'pothana2000', 'lohit tamil', 'kacstone'];
	}

	if(fontsFlash.length > 2 && os !=="Other"){
		var counter = 0;
		for(var i = 0; i < fontsFlash.length; i++){
			fontsFlash[i] = fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
			if(listFonts.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counter++;
			}
		}

		var pctFontsFlash = (counter/listFonts.length)*100;

		if((os ==="Windows" || os ==="Mac") && !testPlugins && pctFontsFlash < 35){
			return false;
		}else if(os ==="Linux" && pctFontsFlash < 30){
			return false;
		}

	}else if(fontsFlash.length <= 2 && os !=="Other"){ //If flash wasn't avalaible
		var results = [];
    	var d = new Detector();

    	if(os === "windows"){
    		listFonts = ["JasmineUPC", "Minion Pro Cond", "Bodoni MT", "Franklin Gothic Demi Cond", "LilyUPC", "Showcard Gothic", "Freestyle Script", "Traditional Arabic", "Microsoft JhengHei", "NSimSun", "Roman", "Iskoola Pota", "Eras Medium ITC", "Vani", "Cordia New", "Browallia New", "Tekton Pro Cond", "Poor Richard", "Felix Titling", "Agency FB", "Sakkal Majalla", "Linux Libertine G", "Khmer UI", "Times New Roman CYR", "MS Outlook", "Segoe UI Light", "Rage Italic", "Segoe UI Semilight", "Andalus", "Arabic Typesetting", "MS UI Gothic", "Dotum", "DokChampa", "DaunPenh", "Kokila", "Aharoni", "Ravie", "Euphemia", "Tw Cen MT Condensed Extra Bold", "Times New Roman TUR", "Harlow Solid Italic", "Nueva Std Cond", "Segoe UI Symbol", "Lao UI", "Microsoft YaHei UI", "Yu Mincho", "Kartika", "Rockwell Condensed", "Parchment", "Vivaldi", "Berlin Sans FB", "Microsoft PhagsPa", "Tempus Sans ITC", "Microsoft YaHei Light", "AngsanaUPC", "Eras Bold ITC", "Vrinda", "Viner Hand ITC", "Bodoni MT Black", "Sitka Display", "Yu Gothic Light", "Tw Cen MT Condensed", "CordiaUPC", "Gadugi", "Gisha", "Javanese Text", "Arial TUR", "Microsoft New Tai Lue", "Aparajita", "Microsoft JhengHei UI Light", "Miriam", "GulimChe", "IrisUPC", "Myanmar Text", "French Script MT", "Angsana New", "Magneto", "Gill Sans Ultra Bold Condensed", "Arial Greek", "Pristina", "Segoe UI", "Shonar Bangla", "Franklin Gothic Heavy", "Estrangelo Edessa", "Nirmala UI", "Informal Roman", "MV Boli", "Utsaah", "Courier New CYR", "Old English Text MT", "Arial Baltic", "Blackadder ITC", "Niagara Engraved", "Broadway", "Sylfaen", "Kunstler Script", "Sitka Text", "Bodoni MT Poster Compressed", "Microsoft YaHei UI Light", "Raavi", "Goudy Stout", "Courier New Greek", "Times New Roman Baltic", "Fixedsys", "Courier New CE", "Kalinga", "Sitka Heading", "Castellar", "Yu Gothic", "Small Fonts", "Maiandra GD", "Modern", "Leelawadee", "Arabic Transparent", "BrowalliaUPC", "Microsoft JhengHei UI", "KaiTi", "BatangChe", "DotumChe", "Microsoft Uighur", "Eras Demi ITC", "Miriam Fixed", "Snap ITC", "DilleniaUPC", "Minion Pro Med", "Malgun Gothic", "Gigi", "Lithos Pro Regular", "Rod", "High Tower Text", "Levenim MT", "Meiryo UI", "Franklin Gothic Medium Cond", "Chiller", "Jokerman", "Leelawadee UI Semilight", "DFKai-SB", "Bodoni MT Condensed", "Segoe Print", "Sitka Banner", "Minion Pro SmBd", "Segoe Script", "Elephant", "Courier New Baltic", "Vladimir Script", "Juice ITC", "Algerian", "Segoe UI Emoji", "Niagara Solid", "Vijaya", "Myriad Pro Light", "GungsuhChe", "Tekton Pro Ext", "Gill Sans MT Condensed", "EucrosiaUPC", "Times New Roman CE", "Tunga", "Arial CE", "OCR A Extended", "Mangal", "Franklin Gothic Demi", "Microsoft JhengHei Light", "Courier New TUR", "Ebrima", "Myriad Pro Cond", "Urdu Typesetting", "Arial CYR", "Aldhabi", "Bradley Hand ITC", "FrankRuehl", "Nyala", "MS Serif", "KodchiangUPC", "Terminal", "Sitka Subheading", "Segoe UI Semibold", "Yu Mincho Demibold", "Gautami", "Palace Script MT", "Yu Mincho Light", "FreesiaUPC", "Segoe UI Black", "Simplified Arabic", "System", "Narkisim", "Nirmala UI Semilight", "Californian FB", "FangSong", "Latha", "Kristen ITC", "David", "Eras Light ITC", "Berlin Sans FB Demi", "Leelawadee UI", "Sitka Small", "Gungsuh", "Centaur", "MS Sans Serif", "Forte", "Microsoft YaHei", "Times New Roman Greek", "Gill Sans MT Ext Condensed Bold", "Linux Biolinum G", "MoolBoran", "Shruti", "Simplified Arabic Fixed", "Script MT Bold"];
    	}else if(os === "Mac"){
    		listFonts = ["Helvetica", "Yuppy SC Regular", "Arial Hebrew Scholar", "Calisto MT Bold Italic", "Xingkai SC Light", "Apple SD Gothic Neo Thin", "Yuanti SC Bold", "Songti SC Black", "Kannada MN Bold", "Tw Cen MT Italic", "Century Gothic Bold Italic", "Capitals", "Avenir Next Condensed Ultra Light Italic", "Didot Italic", "Copperplate", "Chalkboard Bold", "Osaka-Mono", "Athelas Regular", "Arial Hebrew Scholar Light", "AppleGothic Regular", "Apple LiGothic Medium", "Nanum Myeongjo", "Verdana Bold Italic", "Helvetica CY", "Bradley Hand Bold", "Telugu MN Bold", "Lucida Sans Typewriter Bold Oblique", "Kannada Sangam MN", "Apple Chancery", "Marion Italic", "System Font Heavy", "Snell Roundhand Black", "Avenir Heavy", "Times New Roman Bold", "Helvetica CY Plain", "Avenir Next Bold Italic", "Seravek Medium", "GungSeo", "Lucida Sans Typewriter Oblique", "Apple Braille Outline 8 Dot", "Lucida Bright Italic", "Kannada MN", "STIXIntegralsD-Regular", "Baoli SC Regular", "Superclarendon Black Italic", "Gill Sans SemiBold Italic", "Adobe Myungjo Std", "Avenir Next Condensed", "Corbel Bold Italic", "Eurostile Bold", "News Gothic MT", "Snell Roundhand Bold", "Wawati TC", "Hiragino Mincho ProN W6", "Hiragino Mincho ProN W3", "Malayalam Sangam MN Bold", "ITF Devanagari Bold", "Kannada Sangam MN Bold", "Sinhala Sangam MN Bold", "DecoType Naskh", "Didot", "Apple SD Gothic Neo SemiBold", "Sukhumvit Set Text", "Damascus Light", "Tamil MN", "Seravek ExtraLight Italic", "Zapf Dingbats", "Palatino", "Baskerville SemiBold", "Bangla Sangam MN", "Big Caslon", "Hiragino Kaku Gothic Std W8", "System Font Medium P4", "Lucida Fax Regular", "System Font UltraLight", "STIXGeneral-BoldItalic", "PT Mono Bold", "Luminari", "Skia Light Condensed", "Bodoni 72 Oldstyle Book", "STIXGeneral-Regular", "Shree Devanagari 714 Bold", "STIXIntegralsUpSm-Regular", "Sana Regular", "Trebuchet MS Italic", "STIXIntegralsD-Bold", "Athelas Bold Italic", "Iowan Old Style Roman", "Nanum Pen Script", "Book Antiqua Bold Italic", "Noteworthy", "Book Antiqua Bold", "Helvetica Oblique", "Chalkboard SE Regular", "Bodoni 72 Oldstyle", "Franklin Gothic Book Italic", "LiSong Pro", "Adobe Song Std", "KufiStandardGK Regular", "Sukhumvit Set Medium", "Baghdad Regular", "STIXSizeTwoSym-Regular", "STIXSizeThreeSym-Bold", "YuMincho Demibold", "Futura Condensed ExtraBold", "Didot Bold", "PT Mono", "STIXSizeOneSym-Bold", "Skia Black", "Arial Hebrew Scholar Bold", "Kaiti TC Bold", "Marker Felt Wide", "STIXGeneral-Bold", "Wawati SC", "Tamil MN Bold", "Times Bold", "Palatino Linotype Bold Italic", "Khmer MN Bold", "Menlo Regular", "Helvetica Neue Bold", "Rockwell Bold Italic", "Futura Condensed Medium", "Helvetica Bold", "Lucida Grande", "Book Antiqua Italic", "Libian SC", "Geeza Pro Bold", "PT Sans Bold Italic", "Gurmukhi MN Bold", "Tw Cen MT Bold Italic", "Apple Braille Pinpoint 6 Dot", "Telugu Sangam MN", "Trebuchet MS Bold", "Diwan Kufi", "STHeiti", "Geneva CY", "Corbel Italic", "Avenir Light Oblique", "Khmer Sangam MN", "Candara Bold Italic", "Courier New Bold Italic", "Athelas Bold", "Apple SD Gothic Neo Regular", "Calibri Bold", "Kailasa", "Bangla Sangam MN Bold", "Avenir Next Bold", "Cambria Italic", "Optima Italic", "Menlo Bold", "Euphemia UCAS Bold", "Superclarendon", "Mishafi Gold", "Bradley Hand", "Skia Light", "Superclarendon Regular", "Silom", "Yuanti SC", "Gurmukhi Sangam MN", "Times", "Sinhala MN Bold", "Damascus Regular", "Eurostile", "Helvetica Neue Condensed Bold", "Seravek Italic", "Telugu Sangam MN Bold", "Xingkai SC Bold", "Bookman Old Style Bold Italic", "Cochin Bold", "Hiragino Kaku Gothic Pro", "Heiti TC", "Kohinoor Devanagari Book", "Telugu MN", "Beirut", "Arial Hebrew Light", "STIXNonUnicode-Bold", "Seravek Bold Italic", "Songti TC Light", "YuMincho", "American Typewriter Light", "Gill Sans", "Perpetua Bold", "Weibei TC", "Optima Regular", "New Peninim MT Bold", "PT Sans Narrow", "Diwan Thuluth Regular", "Big Caslon Medium", "Libian SC Regular", "NanumGothic ExtraBold", "Helvetica Neue UltraLight", "STFangsong", "Al Nile Bold", "Heiti TC Medium", "ITF Devanagari Light", "Devanagari MT Bold", "Avenir Oblique", "Lucida Calligraphy Italic", "SchoolHouse Printed A", "Arial Narrow Bold", "Engravers MT Bold", "Raanana", "Kaiti SC Bold", "Hannotate SC Bold", "Marion Bold", "Avenir Book", "Adobe Ming Std", "Handwriting - Dakota", "Bodoni 72", "Avenir Next Demi Bold Italic", "Futura Medium", "Hiragino Maru Gothic Pro", "Mshtakan", "Myanmar MN", "Malayalam MN", "Athelas", "Wawati SC Regular", "PT Sans", "YuMincho Medium", "Hannotate TC", "Lucida Fax Italic", "Candara Italic", "STIXSizeTwoSym-Bold", "Chalkboard SE", "Mishafi", "Lao MN Bold", "Hoefler Text Ornaments", "Menlo Bold Italic", "Hiragino Kaku Gothic ProN W6", "Hiragino Kaku Gothic ProN W3", "Avenir Next Regular", "Hoefler Text", "Lantinghei SC", "Avenir Next Condensed Bold", "BlairMdITC TT Medium", "Songti SC Light", "GungSeo Regular", "BiauKai", "Courier New Italic", "Superclarendon Black", "Mshtakan BoldOblique", "Kai", "Gill Sans MT Italic", "Helvetica Bold Oblique", "Hiragino Kaku Gothic Pro W6", "Hiragino Kaku Gothic Pro W3", "Chalkboard", "Lucida Fax Demibold Italic", "Farah Regular", "Marion Regular", "Arial Bold", "Superclarendon Light Italic", "Lantinghei TC", "New Peninim MT", "STIXVariants-Regular", "Perpetua Italic", "DIN Alternate", "Avenir Next Condensed Demi Bold Italic", "SignPainter-HouseScript", "Optima Bold Italic", "Hannotate TC Regular", "Avenir Heavy Oblique", "PilGi", "Thonburi Bold", "Helvetica Neue Condensed Black", "Bell MT Italic", "Noteworthy Bold", "Devanagari Sangam MN Bold", "Al Nile", "Bodoni 72 Smallcaps Book", "Mshtakan Bold", "Skia Light Extended", "Songti SC", "American Typewriter Bold", "Bodoni 72 Book", "Kaiti SC", "AppleMyungjo", "Avenir Next Heavy", "Songti SC Bold", "Georgia Bold", "Raanana Bold", "Avenir Next Condensed Italic", "Tw Cen MT Bold", "Lantinghei SC Demibold", "Helvetica Neue Light", "Kai Regular", "Lucida Bright Demibold Italic", "Lucida Grande Bold", "STIXIntegralsUp-Regular", "Abadi MT Condensed Light", "LiHei Pro", "Chalkboard SE Light", "Gill Sans Light Italic", "Gill Sans UltraBold", "Helvetica Light", "Kailasa Regular", "Princetown LET", "Futura Medium Italic", "Bangla MN Bold", "DecoType Naskh Regular", "Sukhumvit Set Light", "Muna Black", "Lucida Fax Demibold", "Bordeaux Roman Bold LET Plain", "Gill Sans Bold", "Lantinghei TC Demibold", "Avenir Next Condensed Medium Italic", "Lucida Bright Demibold", "Kohinoor Devanagari Medium", "Georgia Italic", "Lucida Sans Typewriter Bold", "Bodoni Ornaments", "Avenir Next Condensed Regular", "DIN Alternate Bold", "Apple SD Gothic Neo Bold", "Avenir Next Demi Bold", "Seravek ExtraLight", "Palatino Linotype Italic", "Baskerville SemiBold Italic", "Avenir Next Condensed Demi Bold", "Geeza Pro", "Kaiti SC Black", "Cochin Bold Italic", "Baoli SC", "Shree Devanagari 714", "Bodoni 72 Oldstyle Book Italic", "Arial Italic", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Xingkai SC", "Phosphate", "Courier New Bold", "PilGi Regular", "Oriya MN", "Avenir Black Oblique", "Iowan Old Style Titling", "Weibei TC Bold", "Nadeem Regular", "Hannotate SC", "Baskerville", "Charter Black", "Superclarendon Bold Italic", "SignPainter", "Century Gothic Italic", "PCMyungjo Regular", "Helvetica CY BoldOblique", "Apple SD Gothic Neo UltraLight", "Helvetica Neue Thin Italic", "Avenir Next Condensed Medium", "STIXIntegralsUpD-Regular", "HanziPen TC Regular", "Superclarendon Italic", "Lucida Sans Demibold Roman", "Skia Black Condensed", "News Gothic MT Bold", "Ayuthaya", "Marker Felt", "PT Serif Caption Italic", "Avenir Next Condensed Heavy", "Muna Bold", "Savoye LET Plain", "STIXNonUnicode-BoldItalic", "Palatino Bold", "Marker Felt Thin", "Courier Oblique", "Verdana Italic", "Lucida Blackletter", "Avenir Roman", "Constantia Bold", "Baghdad", "Hiragino Mincho Pro W3", "Heiti SC", "Hiragino Mincho Pro W6", "Gill Sans SemiBold", "Kohinoor Devanagari Light", "Sinhala MN", "Corbel Bold", "Geeza Pro Regular", "Devanagari Sangam MN", "Apple Color Emoji", "Krungthep", "Oriya MN Bold", "Beirut Regular", "System Font Thin", "Kohinoor Devanagari Bold", "Apple SD Gothic Neo Heavy", "Synchro LET", "Bookman Old Style Italic", "Helvetica Neue Light Italic", "Al Bayan", "Chalkboard SE Bold", "Weibei SC", "STIXSizeFourSym-Regular", "Al Tarikh", "STIXGeneral-Italic", "Mona Lisa Solid ITC TT", "Cambria Bold", "Brush Script MT Italic", "Apple LiGothic", "Bodoni 72 Oldstyle Bold", "ITF Devanagari Medium", "Kaiti TC Regular", "HeadLineA Regular", "Gujarati MT", "Myanmar Sangam MN", "Iowan Old Style Black", "Skia", "Al Tarikh Regular", "Avenir", "Kefa Bold", "Helvetica Neue UltraLight Italic", "Hannotate TC Bold", "Charcoal CY", "Hiragino Kaku Gothic StdN", "Phosphate Inline", "Hoefler Text Italic", "Myanmar MN Bold", "Century Gothic Bold", "Geneva", "Apple Braille Outline 6 Dot", "Braggadocio", "Trattatello", "HanziPen SC", "STIXIntegralsSm-Bold", "STIXIntegralsSm-Regular", "Snell Roundhand", "Times New Roman Bold Italic", "Superclarendon Light", "Palatino Bold Italic", "0", "Hiragino Maru Gothic ProN", "Perpetua Titling MT Light", "Times Italic", "HeadLineA", "Consolas Bold Italic", "Nadeem", "Bookman Old Style Bold", "ITF Devanagari Demi", "Apple LiSung", "Arial Narrow Bold Italic", "Apple SD Gothic Neo Light", "Farisi", "Yuppy TC Regular", "Avenir Next Medium", "Gurmukhi MN", "Gurmukhi MT", "STSong", "Heiti TC Light", "Monotype Sorts", "Skia Condensed", "Songti TC Regular", "Yuppy TC", "Garamond Italic", "Optima ExtraBlack", "YuGothic Medium", "HanziPen TC Bold", "Apple Braille Pinpoint 8 Dot", "Charter", "Avenir Next Condensed Bold Italic", "Oriya Sangam MN", "Gill Sans Bold Italic", "Songti TC Bold", "Seravek", "NanumGothic Bold", "YuGothic Bold", "GB18030 Bitmap", "Helvetica CY Bold", "Apple Braille", "Noteworthy Light", "Helvetica Neue Bold Italic", "AppleMyungjo Regular", "Garamond Bold", "YuGothic", "PT Sans Caption Bold", "Futura", "Tahoma Negreta", "Goudy Old Style Bold", "Desdemona", "Gill Sans MT Bold", "System Font Regular", "Charter Italic", "Seravek Bold", "Al Bayan Bold", "Baskerville Bold", "American Typewriter Condensed Bold", "Meiryo Bold Italic", "Nanum Gothic", "Kokonor", "Avenir Black", "Bodoni 72 Smallcaps", "System Font Light", "Lantinghei SC Heavy", "Shree Devanagari 714 Italic", "Yuanti SC Regular", "PT Serif Caption", "Helvetica Light Oblique", "Avenir Light", "STIXIntegralsUpD-Bold", "STIXNonUnicode-Italic", "Mishafi Gold Regular", "Kohinoor Devanagari Demi", "Damascus Medium", "Consolas Bold", "STIXSizeOneSym-Regular", "Heiti SC Light", "Times Roman", "Constantia Bold Italic", "Tamil Sangam MN Bold", "Candara Bold", "Avenir Next Ultra Light", "Hiragino Mincho ProN", "STIXIntegralsUp-Bold", "Lucida Sans Typewriter Regular", "Diwan Thuluth", "Oriya Sangam MN Bold", "Herculanum", "Baskerville Bold Italic", "Calibri Italic", "Kaiti TC", "Seravek Light", "Bodoni 72 Book Italic", "Al Bayan Plain", "Kefa Regular", "Cochin", "ITF Devanagari", "System Font Medium Italic P4", "Charter Black Italic", "Helvetica Neue Medium", "American Typewriter", "Gill Sans Light", "Trebuchet MS Bold Italic", "Lucida Sans Italic", "Avenir Next Italic", "Kozuka Gothic Pro", "New Peninim MT Inclined", "PT Serif Italic", "Sukhumvit Set", "Hiragino Kaku Gothic ProN", "Bell MT Bold", "Lucida Sans Regular", "Lucida Handwriting Italic", "Consolas Italic", "Marion", "Helvetica Neue Medium Italic", "Lao MN", "Microsoft Tai Le Bold", "Damascus Bold", "Athelas Italic", "Nanum Brush Script", "Seravek Medium Italic", "Sukhumvit Set Semi Bold", "Charter Roman", "PT Serif Bold Italic", "Gujarati Sangam MN", "Kokonor Regular", "InaiMathi", "Kozuka Mincho Pro", "Avenir Next", "Hoefler Text Black Italic", "Sathu", "Heiti SC Medium", "Cracked", "STIXNonUnicode-Regular", "DIN Condensed Bold", "Muna Regular", "Rockwell Bold", "Meiryo Bold", "Savoye LET", "Skia Bold", "Hiragino Kaku Gothic StdN W8", "Gurmukhi Sangam MN Bold", "HanziPen TC", "Abadi MT Condensed Extra Bold", "Goudy Old Style Italic", "Arial Hebrew Bold", "Times Bold Italic", "Damascus Semi Bold", "STKaiti", "Helvetica Neue Thin", "Charter Bold Italic", "Iowan Old Style Italic", "Muna", "Osaka", "Sukhumvit Set Thin", "Hiragino Maru Gothic Pro W4", "AppleGothic", "Apple SD Gothic Neo", "System Font Italic", "Calisto MT Bold", "Euphemia UCAS Italic", "Wawati TC Regular", "Avenir Next Ultra Light Italic", "Cambria Bold Italic", "Hei", "Bangla MN", "Euphemia UCAS", "Apple LiSung Light", "Hannotate SC Regular", "Century Schoolbook Bold", "PT Sans Bold", "Diwan Kufi Regular", "Kohinoor Devanagari", "American Typewriter Condensed", "Times New Roman Italic", "DIN Condensed", "Lithos Pro", "News Gothic MT Italic", "Optima Bold", "Kaiti SC Regular", "HanziPen SC Regular", "PT Sans Italic", "Meiryo Italic", "Menlo", "STIXSizeThreeSym-Regular", "Hei Regular", "Hiragino Maru Gothic ProN W4", "Gujarati MT Bold", "Perpetua Titling MT Bold", "Songti SC Regular", "PT Sans Narrow Bold", "Iowan Old Style Bold", "Tamil Sangam MN", "Rosewood Std", "Khmer MN", "Georgia Bold Italic", "Comic Sans MS Bold", "Avenir Next Condensed Ultra Light", "Monaco", "NanumMyeongjo ExtraBold", "Apple SD Gothic Neo Medium", "PortagoITC TT", "Bodoni 72 Bold", "Sukhumvit Set Bold", "Kefa", "Helvetica Neue", "Waseem Regular", "Avenir Book Oblique", "Damascus", "SchoolHouse Cursive B", "New Peninim MT Bold Inclined", "Yuanti SC Light", "American Typewriter Condensed Light", "NanumMyeongjo Bold", "1", "PT Serif Bold", "Lantinghei TC Extralight", "Iowan Old Style Bold Italic", "Apple SD GothicNeo ExtraBold", "STIXVariants-Bold", "Waseem Light", "Lao Sangam MN", "Gill Sans MT Bold Italic", "ITF Devanagari Book", "Arial Bold Italic", "Rockwell Italic", "STIXSizeFourSym-Bold", "Helvetica Neue Italic", "Franklin Gothic Medium Italic", "STIXSizeFiveSym-Regular", "Yuppy SC", "Hiragino Kaku Gothic Std", "Constantia Italic", "Zapfino", "Palatino Italic", "Hiragino Mincho Pro", "Farisi Regular", "Phosphate Solid", "Courier Bold", "Century Schoolbook Bold Italic", "Gujarati Sangam MN Bold", "Apple Symbols", "Malayalam MN Bold", "Menlo Italic", "Kino MT", "Weibei SC Bold", "Lucida Sans Demibold Italic", "Songti TC", "Perpetua Bold Italic", "Devanagari MT", "Lantinghei SC Extralight", "Copperplate Light", "Thonburi Light", "Sana", "Hoefler Text Black", "Avenir Next Condensed Heavy Italic", "Sinhala Sangam MN", "Skia Extended", "Seravek Light Italic", "KufiStandardGK", "Thonburi", "System Font Bold Italic", "Avenir Next Medium Italic", "Palatino Linotype Bold", "Arial Narrow Italic", "Mshtakan Oblique", "Mishafi Regular", "Helvetica CY Oblique", "Avenir Next Heavy Italic", "Papyrus Condensed", "Cochin Italic", "Skia Black Extended", "Baskerville Italic", "Iowan Old Style", "Chalkduster", "Waseem", "Farah", "Optima", "Hiragino Sans GB", "Avenir Medium", "Century Schoolbook Italic", "Iowan Old Style Black Italic", "PT Sans Caption", "Avenir Medium Oblique", "Calibri Bold Italic", "Lantinghei TC Heavy", "System Font Bold", "Shree Devanagari 714 Bold Italic", "Calisto MT Italic", "Courier Bold Oblique", "Gill Sans Italic", "Corsiva Hebrew Bold", "Arial Hebrew", "Malayalam Sangam MN", "Copperplate Bold", "Savoye LET Plain CC", "STXihei", "Charter Bold", "PCMyungjo", "Skia Regular", "HanziPen SC Bold", "Verdana Bold", "Superclarendon Bold", "STIXIntegralsUpSm-Bold", "Corsiva Hebrew"];
    	}else if(os === "Linux"){
    		listFonts = ["Khmer OS", "FreeSans", "Loma", "Utopia", "Bitstream Charter", "Ubuntu Light", "GNU", "Cantarell", "Sawasdee", "cmsy10", "Ubuntu", "Lohit Bengali", "TlwgMono", "gargi", "msbm10", "Nimbus Mono L", "Droid Sans Thai", "TlwgTypewriter", "Serif", "Monospace", "utkal", "KacstQurn", "Phetsarath OT", "LKLUG", "esint10", "Tlwg Typist", "Mukti Narrow", "URW Chancery L", "Purisa", "Ubuntu Medium", "Waree", "Droid Sans Hebrew", "Umpush", "KacstOffice", "Meera", "Droid Serif", "KacstDecorative", "TakaoPGothic", "wasy10", "FreeMono", "KacstTitleL", "KacstPen", "KacstDigital", "Tlwg Typo", "cmex10", "Saab", "cmr10", "Dingbats", "Padauk", "Droid Arabic Naskh", "KacstFarsi", "MathJax", "KacstNaskh", "rsfs10", "WenQuanYi Micro Hei Mono", "URW Gothic L", "Droid Sans Armenian", "Ubuntu Condensed", "Century Schoolbook L", "Courier 10 Pitch", "KacstArt", "Droid Sans Japanese", "mry", "Droid Sans Ethiopic", "KacstTitle", "msam10", "Rekha", "Lohit Devanagari", "eufm10", "Vemana2000", "FreeSerif", "Nimbus Roman No9 L", "WenQuanYi Micro Hei", "KacstBook", "NanumBarunGothic", "Droid Sans Fallback", "KacstPoster", "Rachana", "KacstScreen", "URW Palladio L", "URW Bookman L", "Lohit Gujarati", "Padauk Book", "KacstLetter", "Lohit Punjabi", "UnDotum", "Droid Sans", "Tibetan Machine Uni", "Abyssinica SIL", "Standard Symbols L", "Droid Sans Georgian", "Mallige", "Droid Sans Mono", "Khmer OS System", "Norasi", "Kedage", "Kinnari", "Garuda", "cmmi10", "Nimbus Sans L", "Sans", "Ubuntu Mono", "Pothana2000", "Lohit Tamil", "KacstOne"];
    	}

    	counter = 0;
    	for (i = 0; i < listFonts.length; i++) {
            var result = d.detect(listFonts[i]);
            if (result){
            	counter++;
            }          
        }

        var pctFontsNoFlash = (counter/listFonts.length)*100;
        console.log("test % fonts : "+pctFontsNoFlash);

        if((os ==="Windows" || os ==="Mac") && !testPlugins && pctFontsNoFlash < 30){
			return false;
		}else if(os ==="Linux" && pctFontsNoFlash < 25){
			return false;
		}
	}


	return true
}

function check_browser(userAgentHttp){
	userAgent = navigator.userAgent;
	productSub = navigator.productSub;
	if(userAgent != userAgentHttp){
		return false;
	}

	//we extract the browser from the user agent (respect the order of test)
	if(userAgent.toLowerCase().indexOf("firefox") >= 0){
		var browser = "Firefox";
	}else if(userAgent.toLowerCase().indexOf("chrome") >= 0){
		var browser ="Chrome";
	}else if(userAgent.toLowerCase().indexOf("safari") >= 0){
		var browser ="Safari";
	}else if(userAgent.toLowerCase().indexOf("trident") >= 0){
		var browser = "Internet Explorer";
	}else if(userAgent.toLowerCase().indexOf("opera") >= 0){
		var browser ="Opera";
	}else{
		var browser = "Other";
	}

	if(browser === "Chrome" && productSub != "20030107"){
		return false;
	}

	//Sort navigator prototype and compare it with the prototype of the browser we have extracted from the ua
	navObjectProp = [];
	for (var property in Object.getPrototypeOf(navigator)) {
		navObjectProp.push(property);
	}
	navObjectProp.sort();
	navObjectSorted = "";
	for(i=0; i<navObjectProp.length; i++){
		navObjectSorted += navObjectProp[i]+", ";
	}

	//Maybe problems with different version of browsers ?????? maybe do percentages ?
	var protoFirefox = "appCodeName, appName, appVersion, battery, buildID, cookieEnabled, doNotTrack, geolocation, getGamepads, javaEnabled, language, languages, mediaDevices, mimeTypes, mozGetUserMedia, onLine, oscpu, platform, plugins, product, productSub, registerContentHandler, registerProtocolHandler, requestMediaKeySystemAccess, sendBeacon, taintEnabled, userAgent, vendor, vendorSub, vibrate, ";
	var protoChrome = "appCodeName, appName, appVersion, cookieEnabled, doNotTrack, geolocation, getBattery, getGamepads, getStorageUpdates, hardwareConcurrency, javaEnabled, language, languages, maxTouchPoints, mimeTypes, onLine, permissions, platform, plugins, product, productSub, registerProtocolHandler, requestMIDIAccess, requestMediaKeySystemAccess, sendBeacon, serviceWorker, unregisterProtocolHandler, userAgent, vendor, vendorSub, vibrate, webkitGetUserMedia, webkitPersistentStorage, webkitTemporaryStorage, ";
	var protoIE = "appCodeName, appMinorVersion, appName, appVersion, browserLanguage, confirmSiteSpecificTrackingException, confirmWebWideTrackingException, cookieEnabled, cpuClass, geolocation, javaEnabled, language, maxTouchPoints, mimeTypes, msLaunchUri, msManipulationViewsEnabled, msMaxTouchPoints, msPointerEnabled, msSaveBlob, msSaveOrOpenBlob, onLine, platform, plugins, pointerEnabled, product, removeSiteSpecificTrackingException, removeWebWideTrackingException, storeSiteSpecificTrackingException, storeWebWideTrackingException, systemLanguage, taintEnabled, userAgent, userLanguage, vendor, webdriver, ";
	
	if(browser === "Firefox" && navObjectSorted !== protoFirefox){
		return false;
	}
	else if(browser === "Chrome" && navObjectSorted !== protoChrome){
		return false;
	}else if(browser ==="Internet Explorer" && navObjectSorted != protoIE){
		return false;
	}else if(browser ==="Other" && (navObjectSorted === protoFirefox || navObjectSorted === protoChrome || navObjectSorted === protoIE)){
		return false;
	}
	//Cases with opera etc ...

	/*
		var listPluginsChrome = ["chrome pdf viewer", "native client", "widevine content decryption module", "chrome remote desktop viewer"];
		//we don't use plugins for safari and firefox because there are not plugins which caracterize safari/firefox AND which are used by a wide majority of people
		var listPluginsIE = ["flash", "windowsmediaplayer", "silverlight", "adobereader", "java", "shockwave", "quicktime"]; //Not used for the moment

		if(browser === "Chrome" || browser ==="Internet Explorer"){
			var testPlugins = false;
			for(var i =0; i < navigator.plugins.length; i++){
				if((browser === "Chrome" && listPLuginsChrome.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0) || (browser === "Internet Explorer" && listPLuginsCHrome.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0)){
					testPlugins = true;
					break;
				}
			}
		}
	*/

	//We test if err.toSource is defined
	try{
		dsfsdf;
	}catch(err){
		try{
			var v = err.toSource();
			var errFirefox = true;
		}catch(errOferr){
			var errFirefox = false;
		}
	}

	//we test if document.namespace exist (for ie)
	if(document.namespace != undefined){
		var testNamespace = true;
	}else{
		var testNamespace = false;
	}

	if((browser ==="Firefox" && !errFirefox) || (browser === "Internet Explorer" && !testNamespace) || (browser === "Safari" && (errFirefox || !testNamespace)) || (browser === "Chrome" && (errFirefox || !testNamespace))) {
		return false;
	}


	return true;
}


function check_date(){
	var diff = 60*(new Date().getUTCHours() -new Date().getHours());

	if(diff != new Date().getTimezoneOffset()){
		return false;
	}

	return true;
}

//Guess the truth
//if no fonts flash give an empty array
//add flash platform
function guess_os(userAgentHttp, fontsFlash){
	appVersion = navigator.appVersion;
	userAgent = navigator.userAgent;
	platform = navigator.platform;
	oscpu = navigator.oscpu;

	//Test 1 with userAgentHttp
	if(userAgentHttp.toLowerCase().indexOf("win") >= 0){
		var osHttp = "Windows";
	}else if(userAgentHttp.toLowerCase().indexOf("linux") >= 0){
		var osHttp ="Linux";
	}else if(userAgentHttp.toLowerCase().indexOf("mac") >= 0){
		var osHttp ="Mac";
	}else{
		var osHttp = "Other";
	}

	//test 2 with navigator.userAgent
	if(userAgent.toLowerCase().indexOf("win") >= 0){
		var osUaNav = "Windows";
	}else if(userAgent.toLowerCase().indexOf("linux") >= 0){
		var osUaNav ="Linux";
	}else if(userAgent.toLowerCase().indexOf("mac") >= 0){
		var osUaNav ="Mac";
	}else{
		var osUaNav = "Other";
	}

	//test 3 with platform	
	if(platform.toLowerCase().indexOf("windows") >= 0){
		var osPlatform = "Windows";
	}else if(platform.toLowerCase().indexOf("linux") >= 0){
		var osPlatform = "Linux"
	}else if(platform.toLowerCase().indexOf("mac") >= 0){
		var osPlatform = "Mac";
	}else if(platform.toLowerCase().indexOf("windows") == 0 && platform.toLowerCase().indexOf("linux") == 0 && platform.toLowerCase().indexOf("mac") >= 0 && os != "other"){
		var osPlatform ="Other";
	}

	//We test with oscpu 
	//add the equivalent of oscpu for ie
	if(oscpu != undefined){
		if(oscpu.toLowerCase().indexOf("windows") >= 0){
			var osOscpu = "Windows";
		}else if(oscpu.toLowerCase().indexOf("linux") >= 0){
			var osOscpu = "Linux";
		}else if(oscpu.toLowerCase().indexOf("mac") >= 0){
			var osOscpu ="Mac";
		}else{
			var osOscpu ="Other";
		}
	}
	//We try to guess the os with the fonts flash
	if(fontsFlash.length  > 0){
		listFontsWindows = ['jasmineupc', 'minion pro cond', 'bodoni mt', 'franklin gothic demi cond', 'lilyupc', 'showcard gothic', 'freestyle script', 'traditional arabic', 'microsoft jhenghei', 'nsimsun', 'roman', 'iskoola pota', 'eras medium itc', 'vani', 'cordia new', 'browallia new', 'tekton pro cond', 'poor richard', 'felix titling', 'agency fb', 'sakkal majalla', 'linux libertine g', 'khmer ui', 'times new roman cyr', 'ms outlook', 'segoe ui light', 'rage italic', 'segoe ui semilight', 'andalus', 'arabic typesetting', 'ms ui gothic', 'dotum', 'dokchampa', 'daunpenh', 'kokila', 'aharoni', 'ravie', 'euphemia', 'tw cen mt condensed extra bold', 'times new roman tur', 'harlow solid italic', 'nueva std cond', 'segoe ui symbol', 'lao ui', 'microsoft yahei ui', 'yu mincho', 'kartika', 'rockwell condensed', 'parchment', 'vivaldi', 'berlin sans fb', 'microsoft phagspa', 'tempus sans itc', 'microsoft yahei light', 'angsanaupc', 'eras bold itc', 'vrinda', 'viner hand itc', 'bodoni mt black', 'sitka display', 'yu gothic light', 'tw cen mt condensed', 'cordiaupc', 'gadugi', 'gisha', 'javanese text', 'arial tur', 'microsoft new tai lue', 'aparajita', 'microsoft jhenghei ui light', 'miriam', 'gulimche', 'irisupc', 'myanmar text', 'french script mt', 'angsana new', 'magneto', 'gill sans ultra bold condensed', 'arial greek', 'pristina', 'segoe ui', 'shonar bangla', 'franklin gothic heavy', 'estrangelo edessa', 'nirmala ui', 'informal roman', 'mv boli', 'utsaah', 'courier new cyr', 'old english text mt', 'arial baltic', 'blackadder itc', 'niagara engraved', 'broadway', 'sylfaen', 'kunstler script', 'sitka text', 'bodoni mt poster compressed', 'microsoft yahei ui light', 'raavi', 'goudy stout', 'courier new greek', 'times new roman baltic', 'fixedsys', 'courier new ce', 'kalinga', 'sitka heading', 'castellar', 'yu gothic', 'small fonts', 'maiandra gd', 'modern', 'leelawadee', 'arabic transparent', 'browalliaupc', 'microsoft jhenghei ui', 'kaiti', 'batangche', 'dotumche', 'microsoft uighur', 'eras demi itc', 'miriam fixed', 'snap itc', 'dilleniaupc', 'minion pro med', 'malgun gothic', 'gigi', 'lithos pro regular', 'rod', 'high tower text', 'levenim mt', 'meiryo ui', 'franklin gothic medium cond', 'chiller', 'jokerman', 'leelawadee ui semilight', 'dfkai-sb', 'bodoni mt condensed', 'segoe print', 'sitka banner', 'minion pro smbd', 'segoe script', 'elephant', 'courier new baltic', 'vladimir script', 'juice itc', 'algerian', 'segoe ui emoji', 'niagara solid', 'vijaya', 'myriad pro light', 'gungsuhche', 'tekton pro ext', 'gill sans mt condensed', 'eucrosiaupc', 'times new roman ce', 'tunga', 'arial ce', 'ocr a extended', 'mangal', 'franklin gothic demi', 'microsoft jhenghei light', 'courier new tur', 'ebrima', 'myriad pro cond', 'urdu typesetting', 'arial cyr', 'aldhabi', 'bradley hand itc', 'frankruehl', 'nyala', 'ms serif', 'kodchiangupc', 'terminal', 'sitka subheading', 'segoe ui semibold', 'yu mincho demibold', 'gautami', 'palace script mt', 'yu mincho light', 'freesiaupc', 'segoe ui black', 'simplified arabic', 'system', 'narkisim', 'nirmala ui semilight', 'californian fb', 'fangsong', 'latha', 'kristen itc', 'david', 'eras light itc', 'berlin sans fb demi', 'leelawadee ui', 'sitka small', 'gungsuh', 'centaur', 'ms sans serif', 'forte', 'microsoft yahei', 'times new roman greek', 'gill sans mt ext condensed bold', 'linux biolinum g', 'moolboran', 'shruti', 'simplified arabic fixed', 'script mt bold'];
		listFontsMac = ['helvetica', 'yuppy sc regular', 'arial hebrew scholar', 'calisto mt bold italic', 'xingkai sc light', 'apple sd gothic neo thin', 'yuanti sc bold', 'songti sc black', 'kannada mn bold', 'tw cen mt italic', 'century gothic bold italic', 'capitals', 'avenir next condensed ultra light italic', 'didot italic', 'copperplate', 'chalkboard bold', 'osaka-mono', 'athelas regular', 'arial hebrew scholar light', 'applegothic regular', 'apple ligothic medium', 'nanum myeongjo', 'verdana bold italic', 'helvetica cy', 'bradley hand bold', 'telugu mn bold', 'lucida sans typewriter bold oblique', 'kannada sangam mn', 'apple chancery', 'marion italic', 'system font heavy', 'snell roundhand black', 'avenir heavy', 'times new roman bold', 'helvetica cy plain', 'avenir next bold italic', 'seravek medium', 'gungseo', 'lucida sans typewriter oblique', 'apple braille outline 8 dot', 'lucida bright italic', 'kannada mn', 'stixintegralsd-regular', 'baoli sc regular', 'superclarendon black italic', 'gill sans semibold italic', 'adobe myungjo std', 'avenir next condensed', 'corbel bold italic', 'eurostile bold', 'news gothic mt', 'snell roundhand bold', 'wawati tc', 'hiragino mincho pron w6', 'hiragino mincho pron w3', 'malayalam sangam mn bold', 'itf devanagari bold', 'kannada sangam mn bold', 'sinhala sangam mn bold', 'decotype naskh', 'didot', 'apple sd gothic neo semibold', 'sukhumvit set text', 'damascus light', 'tamil mn', 'seravek extralight italic', 'zapf dingbats', 'palatino', 'baskerville semibold', 'bangla sangam mn', 'big caslon', 'hiragino kaku gothic std w8', 'system font medium p4', 'lucida fax regular', 'system font ultralight', 'stixgeneral-bolditalic', 'pt mono bold', 'luminari', 'skia light condensed', 'bodoni 72 oldstyle book', 'stixgeneral-regular', 'shree devanagari 714 bold', 'stixintegralsupsm-regular', 'sana regular', 'trebuchet ms italic', 'stixintegralsd-bold', 'athelas bold italic', 'iowan old style roman', 'nanum pen script', 'book antiqua bold italic', 'noteworthy', 'book antiqua bold', 'helvetica oblique', 'chalkboard se regular', 'bodoni 72 oldstyle', 'franklin gothic book italic', 'lisong pro', 'adobe song std', 'kufistandardgk regular', 'sukhumvit set medium', 'baghdad regular', 'stixsizetwosym-regular', 'stixsizethreesym-bold', 'yumincho demibold', 'futura condensed extrabold', 'didot bold', 'pt mono', 'stixsizeonesym-bold', 'skia black', 'arial hebrew scholar bold', 'kaiti tc bold', 'marker felt wide', 'stixgeneral-bold', 'wawati sc', 'tamil mn bold', 'times bold', 'palatino linotype bold italic', 'khmer mn bold', 'menlo regular', 'helvetica neue bold', 'rockwell bold italic', 'futura condensed medium', 'helvetica bold', 'lucida grande', 'book antiqua italic', 'libian sc', 'geeza pro bold', 'pt sans bold italic', 'gurmukhi mn bold', 'tw cen mt bold italic', 'apple braille pinpoint 6 dot', 'telugu sangam mn', 'trebuchet ms bold', 'diwan kufi', 'stheiti', 'geneva cy', 'corbel italic', 'avenir light oblique', 'khmer sangam mn', 'candara bold italic', 'courier new bold italic', 'athelas bold', 'apple sd gothic neo regular', 'calibri bold', 'kailasa', 'bangla sangam mn bold', 'avenir next bold', 'cambria italic', 'optima italic', 'menlo bold', 'euphemia ucas bold', 'superclarendon', 'mishafi gold', 'bradley hand', 'skia light', 'superclarendon regular', 'silom', 'yuanti sc', 'gurmukhi sangam mn', 'times', 'sinhala mn bold', 'damascus regular', 'eurostile', 'helvetica neue condensed bold', 'seravek italic', 'telugu sangam mn bold', 'xingkai sc bold', 'bookman old style bold italic', 'cochin bold', 'hiragino kaku gothic pro', 'heiti tc', 'kohinoor devanagari book', 'telugu mn', 'beirut', 'arial hebrew light', 'stixnonunicode-bold', 'seravek bold italic', 'songti tc light', 'yumincho', 'american typewriter light', 'gill sans', 'perpetua bold', 'weibei tc', 'optima regular', 'new peninim mt bold', 'pt sans narrow', 'diwan thuluth regular', 'big caslon medium', 'libian sc regular', 'nanumgothic extrabold', 'helvetica neue ultralight', 'stfangsong', 'al nile bold', 'heiti tc medium', 'itf devanagari light', 'devanagari mt bold', 'avenir oblique', 'lucida calligraphy italic', 'schoolhouse printed a', 'arial narrow bold', 'engravers mt bold', 'raanana', 'kaiti sc bold', 'hannotate sc bold', 'marion bold', 'avenir book', 'adobe ming std', 'handwriting - dakota', 'bodoni 72', 'avenir next demi bold italic', 'futura medium', 'hiragino maru gothic pro', 'mshtakan', 'myanmar mn', 'malayalam mn', 'athelas', 'wawati sc regular', 'pt sans', 'yumincho medium', 'hannotate tc', 'lucida fax italic', 'candara italic', 'stixsizetwosym-bold', 'chalkboard se', 'mishafi', 'lao mn bold', 'hoefler text ornaments', 'menlo bold italic', 'hiragino kaku gothic pron w6', 'hiragino kaku gothic pron w3', 'avenir next regular', 'hoefler text', 'lantinghei sc', 'avenir next condensed bold', 'blairmditc tt medium', 'songti sc light', 'gungseo regular', 'biaukai', 'courier new italic', 'superclarendon black', 'mshtakan boldoblique', 'kai', 'gill sans mt italic', 'helvetica bold oblique', 'hiragino kaku gothic pro w6', 'hiragino kaku gothic pro w3', 'chalkboard', 'lucida fax demibold italic', 'farah regular', 'marion regular', 'arial bold', 'superclarendon light italic', 'lantinghei tc', 'new peninim mt', 'stixvariants-regular', 'perpetua italic', 'din alternate', 'avenir next condensed demi bold italic', 'signpainter-housescript', 'optima bold italic', 'hannotate tc regular', 'avenir heavy oblique', 'pilgi', 'thonburi bold', 'helvetica neue condensed black', 'bell mt italic', 'noteworthy bold', 'devanagari sangam mn bold', 'al nile', 'bodoni 72 smallcaps book', 'mshtakan bold', 'skia light extended', 'songti sc', 'american typewriter bold', 'bodoni 72 book', 'kaiti sc', 'applemyungjo', 'avenir next heavy', 'songti sc bold', 'georgia bold', 'raanana bold', 'avenir next condensed italic', 'tw cen mt bold', 'lantinghei sc demibold', 'helvetica neue light', 'kai regular', 'lucida bright demibold italic', 'lucida grande bold', 'stixintegralsup-regular', 'abadi mt condensed light', 'lihei pro', 'chalkboard se light', 'gill sans light italic', 'gill sans ultrabold', 'helvetica light', 'kailasa regular', 'princetown let', 'futura medium italic', 'bangla mn bold', 'decotype naskh regular', 'sukhumvit set light', 'muna black', 'lucida fax demibold', 'bordeaux roman bold let plain', 'gill sans bold', 'lantinghei tc demibold', 'avenir next condensed medium italic', 'lucida bright demibold', 'kohinoor devanagari medium', 'georgia italic', 'lucida sans typewriter bold', 'bodoni ornaments', 'avenir next condensed regular', 'din alternate bold', 'apple sd gothic neo bold', 'avenir next demi bold', 'seravek extralight', 'palatino linotype italic', 'baskerville semibold italic', 'avenir next condensed demi bold', 'geeza pro', 'kaiti sc black', 'cochin bold italic', 'baoli sc', 'shree devanagari 714', 'bodoni 72 oldstyle book italic', 'arial italic', 'hiragino sans gb w3', 'hiragino sans gb w6', 'xingkai sc', 'phosphate', 'courier new bold', 'pilgi regular', 'oriya mn', 'avenir black oblique', 'iowan old style titling', 'weibei tc bold', 'nadeem regular', 'hannotate sc', 'baskerville', 'charter black', 'superclarendon bold italic', 'signpainter', 'century gothic italic', 'pcmyungjo regular', 'helvetica cy boldoblique', 'apple sd gothic neo ultralight', 'helvetica neue thin italic', 'avenir next condensed medium', 'stixintegralsupd-regular', 'hanzipen tc regular', 'superclarendon italic', 'lucida sans demibold roman', 'skia black condensed', 'news gothic mt bold', 'ayuthaya', 'marker felt', 'pt serif caption italic', 'avenir next condensed heavy', 'muna bold', 'savoye let plain', 'stixnonunicode-bolditalic', 'palatino bold', 'marker felt thin', 'courier oblique', 'verdana italic', 'lucida blackletter', 'avenir roman', 'constantia bold', 'baghdad', 'hiragino mincho pro w3', 'heiti sc', 'hiragino mincho pro w6', 'gill sans semibold', 'kohinoor devanagari light', 'sinhala mn', 'corbel bold', 'geeza pro regular', 'devanagari sangam mn', 'apple color emoji', 'krungthep', 'oriya mn bold', 'beirut regular', 'system font thin', 'kohinoor devanagari bold', 'apple sd gothic neo heavy', 'synchro let', 'bookman old style italic', 'helvetica neue light italic', 'al bayan', 'chalkboard se bold', 'weibei sc', 'stixsizefoursym-regular', 'al tarikh', 'stixgeneral-italic', 'mona lisa solid itc tt', 'cambria bold', 'brush script mt italic', 'apple ligothic', 'bodoni 72 oldstyle bold', 'itf devanagari medium', 'kaiti tc regular', 'headlinea regular', 'gujarati mt', 'myanmar sangam mn', 'iowan old style black', 'skia', 'al tarikh regular', 'avenir', 'kefa bold', 'helvetica neue ultralight italic', 'hannotate tc bold', 'charcoal cy', 'hiragino kaku gothic stdn', 'phosphate inline', 'hoefler text italic', 'myanmar mn bold', 'century gothic bold', 'geneva', 'apple braille outline 6 dot', 'braggadocio', 'trattatello', 'hanzipen sc', 'stixintegralssm-bold', 'stixintegralssm-regular', 'snell roundhand', 'times new roman bold italic', 'superclarendon light', 'palatino bold italic', '0', 'hiragino maru gothic pron', 'perpetua titling mt light', 'times italic', 'headlinea', 'consolas bold italic', 'nadeem', 'bookman old style bold', 'itf devanagari demi', 'apple lisung', 'arial narrow bold italic', 'apple sd gothic neo light', 'farisi', 'yuppy tc regular', 'avenir next medium', 'gurmukhi mn', 'gurmukhi mt', 'stsong', 'heiti tc light', 'monotype sorts', 'skia condensed', 'songti tc regular', 'yuppy tc', 'garamond italic', 'optima extrablack', 'yugothic medium', 'hanzipen tc bold', 'apple braille pinpoint 8 dot', 'charter', 'avenir next condensed bold italic', 'oriya sangam mn', 'gill sans bold italic', 'songti tc bold', 'seravek', 'nanumgothic bold', 'yugothic bold', 'gb18030 bitmap', 'helvetica cy bold', 'apple braille', 'noteworthy light', 'helvetica neue bold italic', 'applemyungjo regular', 'garamond bold', 'yugothic', 'pt sans caption bold', 'futura', 'tahoma negreta', 'goudy old style bold', 'desdemona', 'gill sans mt bold', 'system font regular', 'charter italic', 'seravek bold', 'al bayan bold', 'baskerville bold', 'american typewriter condensed bold', 'meiryo bold italic', 'nanum gothic', 'kokonor', 'avenir black', 'bodoni 72 smallcaps', 'system font light', 'lantinghei sc heavy', 'shree devanagari 714 italic', 'yuanti sc regular', 'pt serif caption', 'helvetica light oblique', 'avenir light', 'stixintegralsupd-bold', 'stixnonunicode-italic', 'mishafi gold regular', 'kohinoor devanagari demi', 'damascus medium', 'consolas bold', 'stixsizeonesym-regular', 'heiti sc light', 'times roman', 'constantia bold italic', 'tamil sangam mn bold', 'candara bold', 'avenir next ultra light', 'hiragino mincho pron', 'stixintegralsup-bold', 'lucida sans typewriter regular', 'diwan thuluth', 'oriya sangam mn bold', 'herculanum', 'baskerville bold italic', 'calibri italic', 'kaiti tc', 'seravek light', 'bodoni 72 book italic', 'al bayan plain', 'kefa regular', 'cochin', 'itf devanagari', 'system font medium italic p4', 'charter black italic', 'helvetica neue medium', 'american typewriter', 'gill sans light', 'trebuchet ms bold italic', 'lucida sans italic', 'avenir next italic', 'kozuka gothic pro', 'new peninim mt inclined', 'pt serif italic', 'sukhumvit set', 'hiragino kaku gothic pron', 'bell mt bold', 'lucida sans regular', 'lucida handwriting italic', 'consolas italic', 'marion', 'helvetica neue medium italic', 'lao mn', 'microsoft tai le bold', 'damascus bold', 'athelas italic', 'nanum brush script', 'seravek medium italic', 'sukhumvit set semi bold', 'charter roman', 'pt serif bold italic', 'gujarati sangam mn', 'kokonor regular', 'inaimathi', 'kozuka mincho pro', 'avenir next', 'hoefler text black italic', 'sathu', 'heiti sc medium', 'cracked', 'stixnonunicode-regular', 'din condensed bold', 'muna regular', 'rockwell bold', 'meiryo bold', 'savoye let', 'skia bold', 'hiragino kaku gothic stdn w8', 'gurmukhi sangam mn bold', 'hanzipen tc', 'abadi mt condensed extra bold', 'goudy old style italic', 'arial hebrew bold', 'times bold italic', 'damascus semi bold', 'stkaiti', 'helvetica neue thin', 'charter bold italic', 'iowan old style italic', 'muna', 'osaka', 'sukhumvit set thin', 'hiragino maru gothic pro w4', 'applegothic', 'apple sd gothic neo', 'system font italic', 'calisto mt bold', 'euphemia ucas italic', 'wawati tc regular', 'avenir next ultra light italic', 'cambria bold italic', 'hei', 'bangla mn', 'euphemia ucas', 'apple lisung light', 'hannotate sc regular', 'century schoolbook bold', 'pt sans bold', 'diwan kufi regular', 'kohinoor devanagari', 'american typewriter condensed', 'times new roman italic', 'din condensed', 'lithos pro', 'news gothic mt italic', 'optima bold', 'kaiti sc regular', 'hanzipen sc regular', 'pt sans italic', 'meiryo italic', 'menlo', 'stixsizethreesym-regular', 'hei regular', 'hiragino maru gothic pron w4', 'gujarati mt bold', 'perpetua titling mt bold', 'songti sc regular', 'pt sans narrow bold', 'iowan old style bold', 'tamil sangam mn', 'rosewood std', 'khmer mn', 'georgia bold italic', 'comic sans ms bold', 'avenir next condensed ultra light', 'monaco', 'nanummyeongjo extrabold', 'apple sd gothic neo medium', 'portagoitc tt', 'bodoni 72 bold', 'sukhumvit set bold', 'kefa', 'helvetica neue', 'waseem regular', 'avenir book oblique', 'damascus', 'schoolhouse cursive b', 'new peninim mt bold inclined', 'yuanti sc light', 'american typewriter condensed light', 'nanummyeongjo bold', '1', 'pt serif bold', 'lantinghei tc extralight', 'iowan old style bold italic', 'apple sd gothicneo extrabold', 'stixvariants-bold', 'waseem light', 'lao sangam mn', 'gill sans mt bold italic', 'itf devanagari book', 'arial bold italic', 'rockwell italic', 'stixsizefoursym-bold', 'helvetica neue italic', 'franklin gothic medium italic', 'stixsizefivesym-regular', 'yuppy sc', 'hiragino kaku gothic std', 'constantia italic', 'zapfino', 'palatino italic', 'hiragino mincho pro', 'farisi regular', 'phosphate solid', 'courier bold', 'century schoolbook bold italic', 'gujarati sangam mn bold', 'apple symbols', 'malayalam mn bold', 'menlo italic', 'kino mt', 'weibei sc bold', 'lucida sans demibold italic', 'songti tc', 'perpetua bold italic', 'devanagari mt', 'lantinghei sc extralight', 'copperplate light', 'thonburi light', 'sana', 'hoefler text black', 'avenir next condensed heavy italic', 'sinhala sangam mn', 'skia extended', 'seravek light italic', 'kufistandardgk', 'thonburi', 'system font bold italic', 'avenir next medium italic', 'palatino linotype bold', 'arial narrow italic', 'mshtakan oblique', 'mishafi regular', 'helvetica cy oblique', 'avenir next heavy italic', 'papyrus condensed', 'cochin italic', 'skia black extended', 'baskerville italic', 'iowan old style', 'chalkduster', 'waseem', 'farah', 'optima', 'hiragino sans gb', 'avenir medium', 'century schoolbook italic', 'iowan old style black italic', 'pt sans caption', 'avenir medium oblique', 'calibri bold italic', 'lantinghei tc heavy', 'system font bold', 'shree devanagari 714 bold italic', 'calisto mt italic', 'courier bold oblique', 'gill sans italic', 'corsiva hebrew bold', 'arial hebrew', 'malayalam sangam mn', 'copperplate bold', 'savoye let plain cc', 'stxihei', 'charter bold', 'pcmyungjo', 'skia regular', 'hanzipen sc bold', 'verdana bold', 'superclarendon bold', 'stixintegralsupsm-bold', 'corsiva hebrew'];
		listFontsLinux = ['khmer os', 'freesans', 'loma', 'utopia', 'bitstream charter', 'ubuntu light', 'gnu', 'cantarell', 'sawasdee', 'cmsy10', 'ubuntu', 'lohit bengali', 'tlwgmono', 'gargi', 'msbm10', 'nimbus mono l', 'droid sans thai', 'tlwgtypewriter', 'serif', 'monospace', 'utkal', 'kacstqurn', 'phetsarath ot', 'lklug', 'esint10', 'tlwg typist', 'mukti narrow', 'urw chancery l', 'purisa', 'ubuntu medium', 'waree', 'droid sans hebrew', 'umpush', 'kacstoffice', 'meera', 'droid serif', 'kacstdecorative', 'takaopgothic', 'wasy10', 'freemono', 'kacsttitlel', 'kacstpen', 'kacstdigital', 'tlwg typo', 'cmex10', 'saab', 'cmr10', 'dingbats', 'padauk', 'droid arabic naskh', 'kacstfarsi', 'mathjax', 'kacstnaskh', 'rsfs10', 'wenquanyi micro hei mono', 'urw gothic l', 'droid sans armenian', 'ubuntu condensed', 'century schoolbook l', 'courier 10 pitch', 'kacstart', 'droid sans japanese', 'mry', 'droid sans ethiopic', 'kacsttitle', 'msam10', 'rekha', 'lohit devanagari', 'eufm10', 'vemana2000', 'freeserif', 'nimbus roman no9 l', 'wenquanyi micro hei', 'kacstbook', 'nanumbarungothic', 'droid sans fallback', 'kacstposter', 'rachana', 'kacstscreen', 'urw palladio l', 'urw bookman l', 'lohit gujarati', 'padauk book', 'kacstletter', 'lohit punjabi', 'undotum', 'droid sans', 'tibetan machine uni', 'abyssinica sil', 'standard symbols l', 'droid sans georgian', 'mallige', 'droid sans mono', 'khmer os system', 'norasi', 'kedage', 'kinnari', 'garuda', 'cmmi10', 'nimbus sans l', 'sans', 'ubuntu mono', 'pothana2000', 'lohit tamil', 'kacstone'];
	
		var counterWindows = 0;
		var counterMac = 0;
		var counterLinux =0;

		for(var i = 0; i < fontsFlash.length; i++){
			fontsFlash[i] = fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
			if(listFontsWindows.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counterWindows++;
			}else if(listFontsMac.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counterMac++;
			}else if(listFontsLinux.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counterLinux++;
			}
		}

		var percentageFontsFlashWindows = (counterWindows/listFontsWindows.length)*100;
		var percentageFontsFlashMac = (counterMac/listFontsMac.length)*100;
		var percentageFontsFlashLinux = (counterLinux/listFontsLinux.length)*100;

		if(percentageFontsFlashWindows > percentageFontsFlashLinux && percentageFontsFlashWindows > percentageFontsFlashMac && percentageFontsFlashWindows > 45){
			var osFontsFlash = "Windows";
		}else if(percentageFontsFlashMac > percentageFontsFlashLinux && percentageFontsFlashMac > percentageFontsFlashWindows && percentageFontsFlashMac > 45){
			var osFontsFlash = "Mac";
		}else if(percentageFontsFlashLinux > percentageFontsFlashWindows && percentageFontsFlashLinux > percentageFontsFlashMac && percentageFontsFlashLinux > 45){
			var osFontsFlash ="Linux";
		}else{
			var osFontsFlash = "Other"
		}

	}else{
		//We try to guess the os using css + javascript detection of fonts
    	listFontsWindows = ["JasmineUPC", "Minion Pro Cond", "Bodoni MT", "Franklin Gothic Demi Cond", "LilyUPC", "Showcard Gothic", "Freestyle Script", "Traditional Arabic", "Microsoft JhengHei", "NSimSun", "Roman", "Iskoola Pota", "Eras Medium ITC", "Vani", "Cordia New", "Browallia New", "Tekton Pro Cond", "Poor Richard", "Felix Titling", "Agency FB", "Sakkal Majalla", "Linux Libertine G", "Khmer UI", "Times New Roman CYR", "MS Outlook", "Segoe UI Light", "Rage Italic", "Segoe UI Semilight", "Andalus", "Arabic Typesetting", "MS UI Gothic", "Dotum", "DokChampa", "DaunPenh", "Kokila", "Aharoni", "Ravie", "Euphemia", "Tw Cen MT Condensed Extra Bold", "Times New Roman TUR", "Harlow Solid Italic", "Nueva Std Cond", "Segoe UI Symbol", "Lao UI", "Microsoft YaHei UI", "Yu Mincho", "Kartika", "Rockwell Condensed", "Parchment", "Vivaldi", "Berlin Sans FB", "Microsoft PhagsPa", "Tempus Sans ITC", "Microsoft YaHei Light", "AngsanaUPC", "Eras Bold ITC", "Vrinda", "Viner Hand ITC", "Bodoni MT Black", "Sitka Display", "Yu Gothic Light", "Tw Cen MT Condensed", "CordiaUPC", "Gadugi", "Gisha", "Javanese Text", "Arial TUR", "Microsoft New Tai Lue", "Aparajita", "Microsoft JhengHei UI Light", "Miriam", "GulimChe", "IrisUPC", "Myanmar Text", "French Script MT", "Angsana New", "Magneto", "Gill Sans Ultra Bold Condensed", "Arial Greek", "Pristina", "Segoe UI", "Shonar Bangla", "Franklin Gothic Heavy", "Estrangelo Edessa", "Nirmala UI", "Informal Roman", "MV Boli", "Utsaah", "Courier New CYR", "Old English Text MT", "Arial Baltic", "Blackadder ITC", "Niagara Engraved", "Broadway", "Sylfaen", "Kunstler Script", "Sitka Text", "Bodoni MT Poster Compressed", "Microsoft YaHei UI Light", "Raavi", "Goudy Stout", "Courier New Greek", "Times New Roman Baltic", "Fixedsys", "Courier New CE", "Kalinga", "Sitka Heading", "Castellar", "Yu Gothic", "Small Fonts", "Maiandra GD", "Modern", "Leelawadee", "Arabic Transparent", "BrowalliaUPC", "Microsoft JhengHei UI", "KaiTi", "BatangChe", "DotumChe", "Microsoft Uighur", "Eras Demi ITC", "Miriam Fixed", "Snap ITC", "DilleniaUPC", "Minion Pro Med", "Malgun Gothic", "Gigi", "Lithos Pro Regular", "Rod", "High Tower Text", "Levenim MT", "Meiryo UI", "Franklin Gothic Medium Cond", "Chiller", "Jokerman", "Leelawadee UI Semilight", "DFKai-SB", "Bodoni MT Condensed", "Segoe Print", "Sitka Banner", "Minion Pro SmBd", "Segoe Script", "Elephant", "Courier New Baltic", "Vladimir Script", "Juice ITC", "Algerian", "Segoe UI Emoji", "Niagara Solid", "Vijaya", "Myriad Pro Light", "GungsuhChe", "Tekton Pro Ext", "Gill Sans MT Condensed", "EucrosiaUPC", "Times New Roman CE", "Tunga", "Arial CE", "OCR A Extended", "Mangal", "Franklin Gothic Demi", "Microsoft JhengHei Light", "Courier New TUR", "Ebrima", "Myriad Pro Cond", "Urdu Typesetting", "Arial CYR", "Aldhabi", "Bradley Hand ITC", "FrankRuehl", "Nyala", "MS Serif", "KodchiangUPC", "Terminal", "Sitka Subheading", "Segoe UI Semibold", "Yu Mincho Demibold", "Gautami", "Palace Script MT", "Yu Mincho Light", "FreesiaUPC", "Segoe UI Black", "Simplified Arabic", "System", "Narkisim", "Nirmala UI Semilight", "Californian FB", "FangSong", "Latha", "Kristen ITC", "David", "Eras Light ITC", "Berlin Sans FB Demi", "Leelawadee UI", "Sitka Small", "Gungsuh", "Centaur", "MS Sans Serif", "Forte", "Microsoft YaHei", "Times New Roman Greek", "Gill Sans MT Ext Condensed Bold", "Linux Biolinum G", "MoolBoran", "Shruti", "Simplified Arabic Fixed", "Script MT Bold"];
    	listFontsMac = ["Helvetica", "Yuppy SC Regular", "Arial Hebrew Scholar", "Calisto MT Bold Italic", "Xingkai SC Light", "Apple SD Gothic Neo Thin", "Yuanti SC Bold", "Songti SC Black", "Kannada MN Bold", "Tw Cen MT Italic", "Century Gothic Bold Italic", "Capitals", "Avenir Next Condensed Ultra Light Italic", "Didot Italic", "Copperplate", "Chalkboard Bold", "Osaka-Mono", "Athelas Regular", "Arial Hebrew Scholar Light", "AppleGothic Regular", "Apple LiGothic Medium", "Nanum Myeongjo", "Verdana Bold Italic", "Helvetica CY", "Bradley Hand Bold", "Telugu MN Bold", "Lucida Sans Typewriter Bold Oblique", "Kannada Sangam MN", "Apple Chancery", "Marion Italic", "System Font Heavy", "Snell Roundhand Black", "Avenir Heavy", "Times New Roman Bold", "Helvetica CY Plain", "Avenir Next Bold Italic", "Seravek Medium", "GungSeo", "Lucida Sans Typewriter Oblique", "Apple Braille Outline 8 Dot", "Lucida Bright Italic", "Kannada MN", "STIXIntegralsD-Regular", "Baoli SC Regular", "Superclarendon Black Italic", "Gill Sans SemiBold Italic", "Adobe Myungjo Std", "Avenir Next Condensed", "Corbel Bold Italic", "Eurostile Bold", "News Gothic MT", "Snell Roundhand Bold", "Wawati TC", "Hiragino Mincho ProN W6", "Hiragino Mincho ProN W3", "Malayalam Sangam MN Bold", "ITF Devanagari Bold", "Kannada Sangam MN Bold", "Sinhala Sangam MN Bold", "DecoType Naskh", "Didot", "Apple SD Gothic Neo SemiBold", "Sukhumvit Set Text", "Damascus Light", "Tamil MN", "Seravek ExtraLight Italic", "Zapf Dingbats", "Palatino", "Baskerville SemiBold", "Bangla Sangam MN", "Big Caslon", "Hiragino Kaku Gothic Std W8", "System Font Medium P4", "Lucida Fax Regular", "System Font UltraLight", "STIXGeneral-BoldItalic", "PT Mono Bold", "Luminari", "Skia Light Condensed", "Bodoni 72 Oldstyle Book", "STIXGeneral-Regular", "Shree Devanagari 714 Bold", "STIXIntegralsUpSm-Regular", "Sana Regular", "Trebuchet MS Italic", "STIXIntegralsD-Bold", "Athelas Bold Italic", "Iowan Old Style Roman", "Nanum Pen Script", "Book Antiqua Bold Italic", "Noteworthy", "Book Antiqua Bold", "Helvetica Oblique", "Chalkboard SE Regular", "Bodoni 72 Oldstyle", "Franklin Gothic Book Italic", "LiSong Pro", "Adobe Song Std", "KufiStandardGK Regular", "Sukhumvit Set Medium", "Baghdad Regular", "STIXSizeTwoSym-Regular", "STIXSizeThreeSym-Bold", "YuMincho Demibold", "Futura Condensed ExtraBold", "Didot Bold", "PT Mono", "STIXSizeOneSym-Bold", "Skia Black", "Arial Hebrew Scholar Bold", "Kaiti TC Bold", "Marker Felt Wide", "STIXGeneral-Bold", "Wawati SC", "Tamil MN Bold", "Times Bold", "Palatino Linotype Bold Italic", "Khmer MN Bold", "Menlo Regular", "Helvetica Neue Bold", "Rockwell Bold Italic", "Futura Condensed Medium", "Helvetica Bold", "Lucida Grande", "Book Antiqua Italic", "Libian SC", "Geeza Pro Bold", "PT Sans Bold Italic", "Gurmukhi MN Bold", "Tw Cen MT Bold Italic", "Apple Braille Pinpoint 6 Dot", "Telugu Sangam MN", "Trebuchet MS Bold", "Diwan Kufi", "STHeiti", "Geneva CY", "Corbel Italic", "Avenir Light Oblique", "Khmer Sangam MN", "Candara Bold Italic", "Courier New Bold Italic", "Athelas Bold", "Apple SD Gothic Neo Regular", "Calibri Bold", "Kailasa", "Bangla Sangam MN Bold", "Avenir Next Bold", "Cambria Italic", "Optima Italic", "Menlo Bold", "Euphemia UCAS Bold", "Superclarendon", "Mishafi Gold", "Bradley Hand", "Skia Light", "Superclarendon Regular", "Silom", "Yuanti SC", "Gurmukhi Sangam MN", "Times", "Sinhala MN Bold", "Damascus Regular", "Eurostile", "Helvetica Neue Condensed Bold", "Seravek Italic", "Telugu Sangam MN Bold", "Xingkai SC Bold", "Bookman Old Style Bold Italic", "Cochin Bold", "Hiragino Kaku Gothic Pro", "Heiti TC", "Kohinoor Devanagari Book", "Telugu MN", "Beirut", "Arial Hebrew Light", "STIXNonUnicode-Bold", "Seravek Bold Italic", "Songti TC Light", "YuMincho", "American Typewriter Light", "Gill Sans", "Perpetua Bold", "Weibei TC", "Optima Regular", "New Peninim MT Bold", "PT Sans Narrow", "Diwan Thuluth Regular", "Big Caslon Medium", "Libian SC Regular", "NanumGothic ExtraBold", "Helvetica Neue UltraLight", "STFangsong", "Al Nile Bold", "Heiti TC Medium", "ITF Devanagari Light", "Devanagari MT Bold", "Avenir Oblique", "Lucida Calligraphy Italic", "SchoolHouse Printed A", "Arial Narrow Bold", "Engravers MT Bold", "Raanana", "Kaiti SC Bold", "Hannotate SC Bold", "Marion Bold", "Avenir Book", "Adobe Ming Std", "Handwriting - Dakota", "Bodoni 72", "Avenir Next Demi Bold Italic", "Futura Medium", "Hiragino Maru Gothic Pro", "Mshtakan", "Myanmar MN", "Malayalam MN", "Athelas", "Wawati SC Regular", "PT Sans", "YuMincho Medium", "Hannotate TC", "Lucida Fax Italic", "Candara Italic", "STIXSizeTwoSym-Bold", "Chalkboard SE", "Mishafi", "Lao MN Bold", "Hoefler Text Ornaments", "Menlo Bold Italic", "Hiragino Kaku Gothic ProN W6", "Hiragino Kaku Gothic ProN W3", "Avenir Next Regular", "Hoefler Text", "Lantinghei SC", "Avenir Next Condensed Bold", "BlairMdITC TT Medium", "Songti SC Light", "GungSeo Regular", "BiauKai", "Courier New Italic", "Superclarendon Black", "Mshtakan BoldOblique", "Kai", "Gill Sans MT Italic", "Helvetica Bold Oblique", "Hiragino Kaku Gothic Pro W6", "Hiragino Kaku Gothic Pro W3", "Chalkboard", "Lucida Fax Demibold Italic", "Farah Regular", "Marion Regular", "Arial Bold", "Superclarendon Light Italic", "Lantinghei TC", "New Peninim MT", "STIXVariants-Regular", "Perpetua Italic", "DIN Alternate", "Avenir Next Condensed Demi Bold Italic", "SignPainter-HouseScript", "Optima Bold Italic", "Hannotate TC Regular", "Avenir Heavy Oblique", "PilGi", "Thonburi Bold", "Helvetica Neue Condensed Black", "Bell MT Italic", "Noteworthy Bold", "Devanagari Sangam MN Bold", "Al Nile", "Bodoni 72 Smallcaps Book", "Mshtakan Bold", "Skia Light Extended", "Songti SC", "American Typewriter Bold", "Bodoni 72 Book", "Kaiti SC", "AppleMyungjo", "Avenir Next Heavy", "Songti SC Bold", "Georgia Bold", "Raanana Bold", "Avenir Next Condensed Italic", "Tw Cen MT Bold", "Lantinghei SC Demibold", "Helvetica Neue Light", "Kai Regular", "Lucida Bright Demibold Italic", "Lucida Grande Bold", "STIXIntegralsUp-Regular", "Abadi MT Condensed Light", "LiHei Pro", "Chalkboard SE Light", "Gill Sans Light Italic", "Gill Sans UltraBold", "Helvetica Light", "Kailasa Regular", "Princetown LET", "Futura Medium Italic", "Bangla MN Bold", "DecoType Naskh Regular", "Sukhumvit Set Light", "Muna Black", "Lucida Fax Demibold", "Bordeaux Roman Bold LET Plain", "Gill Sans Bold", "Lantinghei TC Demibold", "Avenir Next Condensed Medium Italic", "Lucida Bright Demibold", "Kohinoor Devanagari Medium", "Georgia Italic", "Lucida Sans Typewriter Bold", "Bodoni Ornaments", "Avenir Next Condensed Regular", "DIN Alternate Bold", "Apple SD Gothic Neo Bold", "Avenir Next Demi Bold", "Seravek ExtraLight", "Palatino Linotype Italic", "Baskerville SemiBold Italic", "Avenir Next Condensed Demi Bold", "Geeza Pro", "Kaiti SC Black", "Cochin Bold Italic", "Baoli SC", "Shree Devanagari 714", "Bodoni 72 Oldstyle Book Italic", "Arial Italic", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Xingkai SC", "Phosphate", "Courier New Bold", "PilGi Regular", "Oriya MN", "Avenir Black Oblique", "Iowan Old Style Titling", "Weibei TC Bold", "Nadeem Regular", "Hannotate SC", "Baskerville", "Charter Black", "Superclarendon Bold Italic", "SignPainter", "Century Gothic Italic", "PCMyungjo Regular", "Helvetica CY BoldOblique", "Apple SD Gothic Neo UltraLight", "Helvetica Neue Thin Italic", "Avenir Next Condensed Medium", "STIXIntegralsUpD-Regular", "HanziPen TC Regular", "Superclarendon Italic", "Lucida Sans Demibold Roman", "Skia Black Condensed", "News Gothic MT Bold", "Ayuthaya", "Marker Felt", "PT Serif Caption Italic", "Avenir Next Condensed Heavy", "Muna Bold", "Savoye LET Plain", "STIXNonUnicode-BoldItalic", "Palatino Bold", "Marker Felt Thin", "Courier Oblique", "Verdana Italic", "Lucida Blackletter", "Avenir Roman", "Constantia Bold", "Baghdad", "Hiragino Mincho Pro W3", "Heiti SC", "Hiragino Mincho Pro W6", "Gill Sans SemiBold", "Kohinoor Devanagari Light", "Sinhala MN", "Corbel Bold", "Geeza Pro Regular", "Devanagari Sangam MN", "Apple Color Emoji", "Krungthep", "Oriya MN Bold", "Beirut Regular", "System Font Thin", "Kohinoor Devanagari Bold", "Apple SD Gothic Neo Heavy", "Synchro LET", "Bookman Old Style Italic", "Helvetica Neue Light Italic", "Al Bayan", "Chalkboard SE Bold", "Weibei SC", "STIXSizeFourSym-Regular", "Al Tarikh", "STIXGeneral-Italic", "Mona Lisa Solid ITC TT", "Cambria Bold", "Brush Script MT Italic", "Apple LiGothic", "Bodoni 72 Oldstyle Bold", "ITF Devanagari Medium", "Kaiti TC Regular", "HeadLineA Regular", "Gujarati MT", "Myanmar Sangam MN", "Iowan Old Style Black", "Skia", "Al Tarikh Regular", "Avenir", "Kefa Bold", "Helvetica Neue UltraLight Italic", "Hannotate TC Bold", "Charcoal CY", "Hiragino Kaku Gothic StdN", "Phosphate Inline", "Hoefler Text Italic", "Myanmar MN Bold", "Century Gothic Bold", "Geneva", "Apple Braille Outline 6 Dot", "Braggadocio", "Trattatello", "HanziPen SC", "STIXIntegralsSm-Bold", "STIXIntegralsSm-Regular", "Snell Roundhand", "Times New Roman Bold Italic", "Superclarendon Light", "Palatino Bold Italic", "0", "Hiragino Maru Gothic ProN", "Perpetua Titling MT Light", "Times Italic", "HeadLineA", "Consolas Bold Italic", "Nadeem", "Bookman Old Style Bold", "ITF Devanagari Demi", "Apple LiSung", "Arial Narrow Bold Italic", "Apple SD Gothic Neo Light", "Farisi", "Yuppy TC Regular", "Avenir Next Medium", "Gurmukhi MN", "Gurmukhi MT", "STSong", "Heiti TC Light", "Monotype Sorts", "Skia Condensed", "Songti TC Regular", "Yuppy TC", "Garamond Italic", "Optima ExtraBlack", "YuGothic Medium", "HanziPen TC Bold", "Apple Braille Pinpoint 8 Dot", "Charter", "Avenir Next Condensed Bold Italic", "Oriya Sangam MN", "Gill Sans Bold Italic", "Songti TC Bold", "Seravek", "NanumGothic Bold", "YuGothic Bold", "GB18030 Bitmap", "Helvetica CY Bold", "Apple Braille", "Noteworthy Light", "Helvetica Neue Bold Italic", "AppleMyungjo Regular", "Garamond Bold", "YuGothic", "PT Sans Caption Bold", "Futura", "Tahoma Negreta", "Goudy Old Style Bold", "Desdemona", "Gill Sans MT Bold", "System Font Regular", "Charter Italic", "Seravek Bold", "Al Bayan Bold", "Baskerville Bold", "American Typewriter Condensed Bold", "Meiryo Bold Italic", "Nanum Gothic", "Kokonor", "Avenir Black", "Bodoni 72 Smallcaps", "System Font Light", "Lantinghei SC Heavy", "Shree Devanagari 714 Italic", "Yuanti SC Regular", "PT Serif Caption", "Helvetica Light Oblique", "Avenir Light", "STIXIntegralsUpD-Bold", "STIXNonUnicode-Italic", "Mishafi Gold Regular", "Kohinoor Devanagari Demi", "Damascus Medium", "Consolas Bold", "STIXSizeOneSym-Regular", "Heiti SC Light", "Times Roman", "Constantia Bold Italic", "Tamil Sangam MN Bold", "Candara Bold", "Avenir Next Ultra Light", "Hiragino Mincho ProN", "STIXIntegralsUp-Bold", "Lucida Sans Typewriter Regular", "Diwan Thuluth", "Oriya Sangam MN Bold", "Herculanum", "Baskerville Bold Italic", "Calibri Italic", "Kaiti TC", "Seravek Light", "Bodoni 72 Book Italic", "Al Bayan Plain", "Kefa Regular", "Cochin", "ITF Devanagari", "System Font Medium Italic P4", "Charter Black Italic", "Helvetica Neue Medium", "American Typewriter", "Gill Sans Light", "Trebuchet MS Bold Italic", "Lucida Sans Italic", "Avenir Next Italic", "Kozuka Gothic Pro", "New Peninim MT Inclined", "PT Serif Italic", "Sukhumvit Set", "Hiragino Kaku Gothic ProN", "Bell MT Bold", "Lucida Sans Regular", "Lucida Handwriting Italic", "Consolas Italic", "Marion", "Helvetica Neue Medium Italic", "Lao MN", "Microsoft Tai Le Bold", "Damascus Bold", "Athelas Italic", "Nanum Brush Script", "Seravek Medium Italic", "Sukhumvit Set Semi Bold", "Charter Roman", "PT Serif Bold Italic", "Gujarati Sangam MN", "Kokonor Regular", "InaiMathi", "Kozuka Mincho Pro", "Avenir Next", "Hoefler Text Black Italic", "Sathu", "Heiti SC Medium", "Cracked", "STIXNonUnicode-Regular", "DIN Condensed Bold", "Muna Regular", "Rockwell Bold", "Meiryo Bold", "Savoye LET", "Skia Bold", "Hiragino Kaku Gothic StdN W8", "Gurmukhi Sangam MN Bold", "HanziPen TC", "Abadi MT Condensed Extra Bold", "Goudy Old Style Italic", "Arial Hebrew Bold", "Times Bold Italic", "Damascus Semi Bold", "STKaiti", "Helvetica Neue Thin", "Charter Bold Italic", "Iowan Old Style Italic", "Muna", "Osaka", "Sukhumvit Set Thin", "Hiragino Maru Gothic Pro W4", "AppleGothic", "Apple SD Gothic Neo", "System Font Italic", "Calisto MT Bold", "Euphemia UCAS Italic", "Wawati TC Regular", "Avenir Next Ultra Light Italic", "Cambria Bold Italic", "Hei", "Bangla MN", "Euphemia UCAS", "Apple LiSung Light", "Hannotate SC Regular", "Century Schoolbook Bold", "PT Sans Bold", "Diwan Kufi Regular", "Kohinoor Devanagari", "American Typewriter Condensed", "Times New Roman Italic", "DIN Condensed", "Lithos Pro", "News Gothic MT Italic", "Optima Bold", "Kaiti SC Regular", "HanziPen SC Regular", "PT Sans Italic", "Meiryo Italic", "Menlo", "STIXSizeThreeSym-Regular", "Hei Regular", "Hiragino Maru Gothic ProN W4", "Gujarati MT Bold", "Perpetua Titling MT Bold", "Songti SC Regular", "PT Sans Narrow Bold", "Iowan Old Style Bold", "Tamil Sangam MN", "Rosewood Std", "Khmer MN", "Georgia Bold Italic", "Comic Sans MS Bold", "Avenir Next Condensed Ultra Light", "Monaco", "NanumMyeongjo ExtraBold", "Apple SD Gothic Neo Medium", "PortagoITC TT", "Bodoni 72 Bold", "Sukhumvit Set Bold", "Kefa", "Helvetica Neue", "Waseem Regular", "Avenir Book Oblique", "Damascus", "SchoolHouse Cursive B", "New Peninim MT Bold Inclined", "Yuanti SC Light", "American Typewriter Condensed Light", "NanumMyeongjo Bold", "1", "PT Serif Bold", "Lantinghei TC Extralight", "Iowan Old Style Bold Italic", "Apple SD GothicNeo ExtraBold", "STIXVariants-Bold", "Waseem Light", "Lao Sangam MN", "Gill Sans MT Bold Italic", "ITF Devanagari Book", "Arial Bold Italic", "Rockwell Italic", "STIXSizeFourSym-Bold", "Helvetica Neue Italic", "Franklin Gothic Medium Italic", "STIXSizeFiveSym-Regular", "Yuppy SC", "Hiragino Kaku Gothic Std", "Constantia Italic", "Zapfino", "Palatino Italic", "Hiragino Mincho Pro", "Farisi Regular", "Phosphate Solid", "Courier Bold", "Century Schoolbook Bold Italic", "Gujarati Sangam MN Bold", "Apple Symbols", "Malayalam MN Bold", "Menlo Italic", "Kino MT", "Weibei SC Bold", "Lucida Sans Demibold Italic", "Songti TC", "Perpetua Bold Italic", "Devanagari MT", "Lantinghei SC Extralight", "Copperplate Light", "Thonburi Light", "Sana", "Hoefler Text Black", "Avenir Next Condensed Heavy Italic", "Sinhala Sangam MN", "Skia Extended", "Seravek Light Italic", "KufiStandardGK", "Thonburi", "System Font Bold Italic", "Avenir Next Medium Italic", "Palatino Linotype Bold", "Arial Narrow Italic", "Mshtakan Oblique", "Mishafi Regular", "Helvetica CY Oblique", "Avenir Next Heavy Italic", "Papyrus Condensed", "Cochin Italic", "Skia Black Extended", "Baskerville Italic", "Iowan Old Style", "Chalkduster", "Waseem", "Farah", "Optima", "Hiragino Sans GB", "Avenir Medium", "Century Schoolbook Italic", "Iowan Old Style Black Italic", "PT Sans Caption", "Avenir Medium Oblique", "Calibri Bold Italic", "Lantinghei TC Heavy", "System Font Bold", "Shree Devanagari 714 Bold Italic", "Calisto MT Italic", "Courier Bold Oblique", "Gill Sans Italic", "Corsiva Hebrew Bold", "Arial Hebrew", "Malayalam Sangam MN", "Copperplate Bold", "Savoye LET Plain CC", "STXihei", "Charter Bold", "PCMyungjo", "Skia Regular", "HanziPen SC Bold", "Verdana Bold", "Superclarendon Bold", "STIXIntegralsUpSm-Bold", "Corsiva Hebrew"];
    	listFontsLinux = ["Khmer OS", "FreeSans", "Loma", "Utopia", "Bitstream Charter", "Ubuntu Light", "GNU", "Cantarell", "Sawasdee", "cmsy10", "Ubuntu", "Lohit Bengali", "TlwgMono", "gargi", "msbm10", "Nimbus Mono L", "Droid Sans Thai", "TlwgTypewriter", "Serif", "Monospace", "utkal", "KacstQurn", "Phetsarath OT", "LKLUG", "esint10", "Tlwg Typist", "Mukti Narrow", "URW Chancery L", "Purisa", "Ubuntu Medium", "Waree", "Droid Sans Hebrew", "Umpush", "KacstOffice", "Meera", "Droid Serif", "KacstDecorative", "TakaoPGothic", "wasy10", "FreeMono", "KacstTitleL", "KacstPen", "KacstDigital", "Tlwg Typo", "cmex10", "Saab", "cmr10", "Dingbats", "Padauk", "Droid Arabic Naskh", "KacstFarsi", "MathJax", "KacstNaskh", "rsfs10", "WenQuanYi Micro Hei Mono", "URW Gothic L", "Droid Sans Armenian", "Ubuntu Condensed", "Century Schoolbook L", "Courier 10 Pitch", "KacstArt", "Droid Sans Japanese", "mry", "Droid Sans Ethiopic", "KacstTitle", "msam10", "Rekha", "Lohit Devanagari", "eufm10", "Vemana2000", "FreeSerif", "Nimbus Roman No9 L", "WenQuanYi Micro Hei", "KacstBook", "NanumBarunGothic", "Droid Sans Fallback", "KacstPoster", "Rachana", "KacstScreen", "URW Palladio L", "URW Bookman L", "Lohit Gujarati", "Padauk Book", "KacstLetter", "Lohit Punjabi", "UnDotum", "Droid Sans", "Tibetan Machine Uni", "Abyssinica SIL", "Standard Symbols L", "Droid Sans Georgian", "Mallige", "Droid Sans Mono", "Khmer OS System", "Norasi", "Kedage", "Kinnari", "Garuda", "cmmi10", "Nimbus Sans L", "Sans", "Ubuntu Mono", "Pothana2000", "Lohit Tamil", "KacstOne"];

    	var results = [];
    	var d = new Detector();

    	counterWindows = 0;
    	for (i = 0; i < listFontsWindows.length; i++) {
            var result = d.detect(listFontsWindows[i]);
            if (result){
            	counterWindows++;
            }          
        }

        counterMac = 0;
    	for (i = 0; i < listFontsMac.length; i++) {
            var result = d.detect(listFontsMac[i]);
            if (result){
            	counterMac++;
            }          
        }

        counterLinux = 0;
    	for (i = 0; i < listFontsLinux.length; i++) {
            var result = d.detect(listFontsLinux[i]);
            if (result){
            	counterLinux++;
            }          
        }

        var percentageFontsNoFlashWindows = (counterWindows/listFontsWindows.length)*100;
        var percentageFontsNoFlashMac = (counterMac/listFontsMac.length)*100; 
        var percentageFontsNoFlashLinux = (counterLinux/listFontsLinux.length)*100;

        if(percentageFontsNoFlashWindows > percentageFontsNoFlashLinux && percentageFontsNoFlashWindows > percentageNoFontsFlashMac && percentageFontsNoFlashWindows > 45){
			var osFontsNoFlash = "Windows";
		}else if(percentageFontsNoFlashMac > percentageFontsNoFlashLinux && percentageFontsNoFlashMac > percentageFontsNoFlashWindows && percentageFontsNoFlashMac > 45){
			var osFontsNoFlash = "Mac";
		}else if(percentageFontsNoFlashLinux > percentageFontsNoFlashWindows && percentageFontsNoFlashLinux > percentageFontsNoFlashMac && percentageFontsNoFlashLinux > 45){
			var osFontsNoFlash ="Linux";
		}else{
			var osFontsNoFlash = "Other"
		}
	}

	//We define weight to choose the true os
	var weightNavUa = 1;
	var weightHttpUa = 1;
	var weightNavPlatform = 1;
	var weightNavOscpu = 2;
	var weightFlashFonts = 8;
	var weightNoFlashFonts = 5;

	var mapScores = new Object();
	mapScores["Windows"] = 0;
	mapScores["Mac"] = 0;
	mapScores["Linux"] =0;
	mapScores["Other"] =0;

	mapScores[osUaNav] += weightNavUa;
	mapScores[osHttp] += weightHttpUa;
	mapScores[osPlatform] += weightNavPlatform;
	if(oscpu != undefined){
		mapScores[osOscpu] += weightNavOscpu;
	}
	if(fontsFlash.length  > 0){
		mapScores[osFontsFlash] += weightFlashFonts;
	}else{
		mapScores[osFontsNoFlash] += weightNoFlashFonts;
	}

	var max = "Windows";
	for(var k in mapScores){
		if(mapScores[k] > mapScores[max]){
			max = k;
		}
	}
	mapScores["OS"] = max;
	console.log(mapScores);
}

try{
	var fl = document.getElementById("OSData");
	fontsFlash = fl.getFonts();
}catch(err){
	setTimeout(function(){
		var fontsFlash = getFlashFonts();
		console.log(guess_os(userAgentHttp,fontsFlash));
		console.log("check date : "+check_date());
		console.log("check os : "+check_os(userAgentHttp,[], ""))
		console.log("languages : "+check_languages(languagesHttp, ""));
		console.log("dimensions : "+check_dimensions(0, 0));
		console.log("width flash : "+getFlashWidth());
		console.log("height flash : "+getFlashHeight());
		console.log("language flash : "+getFlashLanguage());
		console.log("Platform flash : "+getFlashPlatform());
	},500);		
}
