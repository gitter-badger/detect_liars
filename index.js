/*
	TODO : add battery to know if the personn uses a desktop computer
	add a real support for opera
	add support for canva js and web gl
	add a light evercookie support (write on localstorage, session storage, cookies, indexdb)
	mime types supported 
*/

listFontsWindows = ["JasmineUPC", "Minion Pro Cond", "Bodoni MT", "Franklin Gothic Demi Cond", "LilyUPC", "Showcard Gothic", "Freestyle Script", "Traditional Arabic", "Microsoft JhengHei", "NSimSun", "Roman", "Iskoola Pota", "Eras Medium ITC", "Vani", "Cordia New", "Browallia New", "Tekton Pro Cond", "Poor Richard", "Felix Titling", "Agency FB", "Sakkal Majalla", "Linux Libertine G", "Khmer UI", "Times New Roman CYR", "MS Outlook", "Segoe UI Light", "Rage Italic", "Segoe UI Semilight", "Andalus", "Arabic Typesetting", "MS UI Gothic", "Dotum", "DokChampa", "DaunPenh", "Kokila", "Aharoni", "Ravie", "Euphemia", "Tw Cen MT Condensed Extra Bold", "Times New Roman TUR", "Harlow Solid Italic", "Nueva Std Cond", "Segoe UI Symbol", "Lao UI", "Microsoft YaHei UI", "Yu Mincho", "Kartika", "Rockwell Condensed", "Parchment", "Vivaldi", "Berlin Sans FB", "Microsoft PhagsPa", "Tempus Sans ITC", "Microsoft YaHei Light", "AngsanaUPC", "Eras Bold ITC", "Vrinda", "Viner Hand ITC", "Bodoni MT Black", "Sitka Display", "Yu Gothic Light", "Tw Cen MT Condensed", "CordiaUPC", "Gadugi", "Gisha", "Javanese Text", "Arial TUR", "Microsoft New Tai Lue", "Aparajita", "Microsoft JhengHei UI Light", "Miriam", "GulimChe", "IrisUPC", "Myanmar Text", "French Script MT", "Angsana New", "Magneto", "Gill Sans Ultra Bold Condensed", "Arial Greek", "Pristina", "Segoe UI", "Shonar Bangla", "Franklin Gothic Heavy", "Estrangelo Edessa", "Nirmala UI", "Informal Roman", "MV Boli", "Utsaah", "Courier New CYR", "Old English Text MT", "Arial Baltic", "Blackadder ITC", "Niagara Engraved", "Broadway", "Sylfaen", "Kunstler Script", "Sitka Text", "Bodoni MT Poster Compressed", "Microsoft YaHei UI Light", "Raavi", "Goudy Stout", "Courier New Greek", "Times New Roman Baltic", "Fixedsys", "Courier New CE", "Kalinga", "Sitka Heading", "Castellar", "Yu Gothic", "Small Fonts", "Maiandra GD", "Modern", "Leelawadee", "Arabic Transparent", "BrowalliaUPC", "Microsoft JhengHei UI", "KaiTi", "BatangChe", "DotumChe", "Microsoft Uighur", "Eras Demi ITC", "Miriam Fixed", "Snap ITC", "DilleniaUPC", "Minion Pro Med", "Malgun Gothic", "Gigi", "Lithos Pro Regular", "Rod", "High Tower Text", "Levenim MT", "Meiryo UI", "Franklin Gothic Medium Cond", "Chiller", "Jokerman", "Leelawadee UI Semilight", "DFKai-SB", "Bodoni MT Condensed", "Segoe Print", "Sitka Banner", "Minion Pro SmBd", "Segoe Script", "Elephant", "Courier New Baltic", "Vladimir Script", "Juice ITC", "Algerian", "Segoe UI Emoji", "Niagara Solid", "Vijaya", "Myriad Pro Light", "GungsuhChe", "Tekton Pro Ext", "Gill Sans MT Condensed", "EucrosiaUPC", "Times New Roman CE", "Tunga", "Arial CE", "OCR A Extended", "Mangal", "Franklin Gothic Demi", "Microsoft JhengHei Light", "Courier New TUR", "Ebrima", "Myriad Pro Cond", "Urdu Typesetting", "Arial CYR", "Aldhabi", "Bradley Hand ITC", "FrankRuehl", "Nyala", "MS Serif", "KodchiangUPC", "Terminal", "Sitka Subheading", "Segoe UI Semibold", "Yu Mincho Demibold", "Gautami", "Palace Script MT", "Yu Mincho Light", "FreesiaUPC", "Segoe UI Black", "Simplified Arabic", "System", "Narkisim", "Nirmala UI Semilight", "Californian FB", "FangSong", "Latha", "Kristen ITC", "David", "Eras Light ITC", "Berlin Sans FB Demi", "Leelawadee UI", "Sitka Small", "Gungsuh", "Centaur", "MS Sans Serif", "Forte", "Microsoft YaHei", "Times New Roman Greek", "Gill Sans MT Ext Condensed Bold", "Linux Biolinum G", "MoolBoran", "Shruti", "Simplified Arabic Fixed", "Script MT Bold"];
listFontsMac = ["Helvetica", "Yuppy SC Regular", "Arial Hebrew Scholar", "Calisto MT Bold Italic", "Xingkai SC Light", "Apple SD Gothic Neo Thin", "Yuanti SC Bold", "Songti SC Black", "Kannada MN Bold", "Tw Cen MT Italic", "Century Gothic Bold Italic", "Capitals", "Avenir Next Condensed Ultra Light Italic", "Didot Italic", "Copperplate", "Chalkboard Bold", "Osaka-Mono", "Athelas Regular", "Arial Hebrew Scholar Light", "AppleGothic Regular", "Apple LiGothic Medium", "Nanum Myeongjo", "Verdana Bold Italic", "Helvetica CY", "Bradley Hand Bold", "Telugu MN Bold", "Lucida Sans Typewriter Bold Oblique", "Kannada Sangam MN", "Apple Chancery", "Marion Italic", "System Font Heavy", "Snell Roundhand Black", "Avenir Heavy", "Times New Roman Bold", "Helvetica CY Plain", "Avenir Next Bold Italic", "Seravek Medium", "GungSeo", "Lucida Sans Typewriter Oblique", "Apple Braille Outline 8 Dot", "Lucida Bright Italic", "Kannada MN", "STIXIntegralsD-Regular", "Baoli SC Regular", "Superclarendon Black Italic", "Gill Sans SemiBold Italic", "Adobe Myungjo Std", "Avenir Next Condensed", "Corbel Bold Italic", "Eurostile Bold", "News Gothic MT", "Snell Roundhand Bold", "Wawati TC", "Hiragino Mincho ProN W6", "Hiragino Mincho ProN W3", "Malayalam Sangam MN Bold", "ITF Devanagari Bold", "Kannada Sangam MN Bold", "Sinhala Sangam MN Bold", "DecoType Naskh", "Didot", "Apple SD Gothic Neo SemiBold", "Sukhumvit Set Text", "Damascus Light", "Tamil MN", "Seravek ExtraLight Italic", "Zapf Dingbats", "Palatino", "Baskerville SemiBold", "Bangla Sangam MN", "Big Caslon", "Hiragino Kaku Gothic Std W8", "System Font Medium P4", "Lucida Fax Regular", "System Font UltraLight", "STIXGeneral-BoldItalic", "PT Mono Bold", "Luminari", "Skia Light Condensed", "Bodoni 72 Oldstyle Book", "STIXGeneral-Regular", "Shree Devanagari 714 Bold", "STIXIntegralsUpSm-Regular", "Sana Regular", "Trebuchet MS Italic", "STIXIntegralsD-Bold", "Athelas Bold Italic", "Iowan Old Style Roman", "Nanum Pen Script", "Book Antiqua Bold Italic", "Noteworthy", "Book Antiqua Bold", "Helvetica Oblique", "Chalkboard SE Regular", "Bodoni 72 Oldstyle", "Franklin Gothic Book Italic", "LiSong Pro", "Adobe Song Std", "KufiStandardGK Regular", "Sukhumvit Set Medium", "Baghdad Regular", "STIXSizeTwoSym-Regular", "STIXSizeThreeSym-Bold", "YuMincho Demibold", "Futura Condensed ExtraBold", "Didot Bold", "PT Mono", "STIXSizeOneSym-Bold", "Skia Black", "Arial Hebrew Scholar Bold", "Kaiti TC Bold", "Marker Felt Wide", "STIXGeneral-Bold", "Wawati SC", "Tamil MN Bold", "Times Bold", "Palatino Linotype Bold Italic", "Khmer MN Bold", "Menlo Regular", "Helvetica Neue Bold", "Rockwell Bold Italic", "Futura Condensed Medium", "Helvetica Bold", "Lucida Grande", "Book Antiqua Italic", "Libian SC", "Geeza Pro Bold", "PT Sans Bold Italic", "Gurmukhi MN Bold", "Tw Cen MT Bold Italic", "Apple Braille Pinpoint 6 Dot", "Telugu Sangam MN", "Trebuchet MS Bold", "Diwan Kufi", "STHeiti", "Geneva CY", "Corbel Italic", "Avenir Light Oblique", "Khmer Sangam MN", "Candara Bold Italic", "Courier New Bold Italic", "Athelas Bold", "Apple SD Gothic Neo Regular", "Calibri Bold", "Kailasa", "Bangla Sangam MN Bold", "Avenir Next Bold", "Cambria Italic", "Optima Italic", "Menlo Bold", "Euphemia UCAS Bold", "Superclarendon", "Mishafi Gold", "Bradley Hand", "Skia Light", "Superclarendon Regular", "Silom", "Yuanti SC", "Gurmukhi Sangam MN", "Times", "Sinhala MN Bold", "Damascus Regular", "Eurostile", "Helvetica Neue Condensed Bold", "Seravek Italic", "Telugu Sangam MN Bold", "Xingkai SC Bold", "Bookman Old Style Bold Italic", "Cochin Bold", "Hiragino Kaku Gothic Pro", "Heiti TC", "Kohinoor Devanagari Book", "Telugu MN", "Beirut", "Arial Hebrew Light", "STIXNonUnicode-Bold", "Seravek Bold Italic", "Songti TC Light", "YuMincho", "American Typewriter Light", "Gill Sans", "Perpetua Bold", "Weibei TC", "Optima Regular", "New Peninim MT Bold", "PT Sans Narrow", "Diwan Thuluth Regular", "Big Caslon Medium", "Libian SC Regular", "NanumGothic ExtraBold", "Helvetica Neue UltraLight", "STFangsong", "Al Nile Bold", "Heiti TC Medium", "ITF Devanagari Light", "Devanagari MT Bold", "Avenir Oblique", "Lucida Calligraphy Italic", "SchoolHouse Printed A", "Arial Narrow Bold", "Engravers MT Bold", "Raanana", "Kaiti SC Bold", "Hannotate SC Bold", "Marion Bold", "Avenir Book", "Adobe Ming Std", "Handwriting - Dakota", "Bodoni 72", "Avenir Next Demi Bold Italic", "Futura Medium", "Hiragino Maru Gothic Pro", "Mshtakan", "Myanmar MN", "Malayalam MN", "Athelas", "Wawati SC Regular", "PT Sans", "YuMincho Medium", "Hannotate TC", "Lucida Fax Italic", "Candara Italic", "STIXSizeTwoSym-Bold", "Chalkboard SE", "Mishafi", "Lao MN Bold", "Hoefler Text Ornaments", "Menlo Bold Italic", "Hiragino Kaku Gothic ProN W6", "Hiragino Kaku Gothic ProN W3", "Avenir Next Regular", "Hoefler Text", "Lantinghei SC", "Avenir Next Condensed Bold", "BlairMdITC TT Medium", "Songti SC Light", "GungSeo Regular", "BiauKai", "Courier New Italic", "Superclarendon Black", "Mshtakan BoldOblique", "Kai", "Gill Sans MT Italic", "Helvetica Bold Oblique", "Hiragino Kaku Gothic Pro W6", "Hiragino Kaku Gothic Pro W3", "Chalkboard", "Lucida Fax Demibold Italic", "Farah Regular", "Marion Regular", "Arial Bold", "Superclarendon Light Italic", "Lantinghei TC", "New Peninim MT", "STIXVariants-Regular", "Perpetua Italic", "DIN Alternate", "Avenir Next Condensed Demi Bold Italic", "SignPainter-HouseScript", "Optima Bold Italic", "Hannotate TC Regular", "Avenir Heavy Oblique", "PilGi", "Thonburi Bold", "Helvetica Neue Condensed Black", "Bell MT Italic", "Noteworthy Bold", "Devanagari Sangam MN Bold", "Al Nile", "Bodoni 72 Smallcaps Book", "Mshtakan Bold", "Skia Light Extended", "Songti SC", "American Typewriter Bold", "Bodoni 72 Book", "Kaiti SC", "AppleMyungjo", "Avenir Next Heavy", "Songti SC Bold", "Georgia Bold", "Raanana Bold", "Avenir Next Condensed Italic", "Tw Cen MT Bold", "Lantinghei SC Demibold", "Helvetica Neue Light", "Kai Regular", "Lucida Bright Demibold Italic", "Lucida Grande Bold", "STIXIntegralsUp-Regular", "Abadi MT Condensed Light", "LiHei Pro", "Chalkboard SE Light", "Gill Sans Light Italic", "Gill Sans UltraBold", "Helvetica Light", "Kailasa Regular", "Princetown LET", "Futura Medium Italic", "Bangla MN Bold", "DecoType Naskh Regular", "Sukhumvit Set Light", "Muna Black", "Lucida Fax Demibold", "Bordeaux Roman Bold LET Plain", "Gill Sans Bold", "Lantinghei TC Demibold", "Avenir Next Condensed Medium Italic", "Lucida Bright Demibold", "Kohinoor Devanagari Medium", "Georgia Italic", "Lucida Sans Typewriter Bold", "Bodoni Ornaments", "Avenir Next Condensed Regular", "DIN Alternate Bold", "Apple SD Gothic Neo Bold", "Avenir Next Demi Bold", "Seravek ExtraLight", "Palatino Linotype Italic", "Baskerville SemiBold Italic", "Avenir Next Condensed Demi Bold", "Geeza Pro", "Kaiti SC Black", "Cochin Bold Italic", "Baoli SC", "Shree Devanagari 714", "Bodoni 72 Oldstyle Book Italic", "Arial Italic", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Xingkai SC", "Phosphate", "Courier New Bold", "PilGi Regular", "Oriya MN", "Avenir Black Oblique", "Iowan Old Style Titling", "Weibei TC Bold", "Nadeem Regular", "Hannotate SC", "Baskerville", "Charter Black", "Superclarendon Bold Italic", "SignPainter", "Century Gothic Italic", "PCMyungjo Regular", "Helvetica CY BoldOblique", "Apple SD Gothic Neo UltraLight", "Helvetica Neue Thin Italic", "Avenir Next Condensed Medium", "STIXIntegralsUpD-Regular", "HanziPen TC Regular", "Superclarendon Italic", "Lucida Sans Demibold Roman", "Skia Black Condensed", "News Gothic MT Bold", "Ayuthaya", "Marker Felt", "PT Serif Caption Italic", "Avenir Next Condensed Heavy", "Muna Bold", "Savoye LET Plain", "STIXNonUnicode-BoldItalic", "Palatino Bold", "Marker Felt Thin", "Courier Oblique", "Verdana Italic", "Lucida Blackletter", "Avenir Roman", "Constantia Bold", "Baghdad", "Hiragino Mincho Pro W3", "Heiti SC", "Hiragino Mincho Pro W6", "Gill Sans SemiBold", "Kohinoor Devanagari Light", "Sinhala MN", "Corbel Bold", "Geeza Pro Regular", "Devanagari Sangam MN", "Apple Color Emoji", "Krungthep", "Oriya MN Bold", "Beirut Regular", "System Font Thin", "Kohinoor Devanagari Bold", "Apple SD Gothic Neo Heavy", "Synchro LET", "Bookman Old Style Italic", "Helvetica Neue Light Italic", "Al Bayan", "Chalkboard SE Bold", "Weibei SC", "STIXSizeFourSym-Regular", "Al Tarikh", "STIXGeneral-Italic", "Mona Lisa Solid ITC TT", "Cambria Bold", "Brush Script MT Italic", "Apple LiGothic", "Bodoni 72 Oldstyle Bold", "ITF Devanagari Medium", "Kaiti TC Regular", "HeadLineA Regular", "Gujarati MT", "Myanmar Sangam MN", "Iowan Old Style Black", "Skia", "Al Tarikh Regular", "Avenir", "Kefa Bold", "Helvetica Neue UltraLight Italic", "Hannotate TC Bold", "Charcoal CY", "Hiragino Kaku Gothic StdN", "Phosphate Inline", "Hoefler Text Italic", "Myanmar MN Bold", "Century Gothic Bold", "Geneva", "Apple Braille Outline 6 Dot", "Braggadocio", "Trattatello", "HanziPen SC", "STIXIntegralsSm-Bold", "STIXIntegralsSm-Regular", "Snell Roundhand", "Times New Roman Bold Italic", "Superclarendon Light", "Palatino Bold Italic", "0", "Hiragino Maru Gothic ProN", "Perpetua Titling MT Light", "Times Italic", "HeadLineA", "Consolas Bold Italic", "Nadeem", "Bookman Old Style Bold", "ITF Devanagari Demi", "Apple LiSung", "Arial Narrow Bold Italic", "Apple SD Gothic Neo Light", "Farisi", "Yuppy TC Regular", "Avenir Next Medium", "Gurmukhi MN", "Gurmukhi MT", "STSong", "Heiti TC Light", "Monotype Sorts", "Skia Condensed", "Songti TC Regular", "Yuppy TC", "Garamond Italic", "Optima ExtraBlack", "YuGothic Medium", "HanziPen TC Bold", "Apple Braille Pinpoint 8 Dot", "Charter", "Avenir Next Condensed Bold Italic", "Oriya Sangam MN", "Gill Sans Bold Italic", "Songti TC Bold", "Seravek", "NanumGothic Bold", "YuGothic Bold", "GB18030 Bitmap", "Helvetica CY Bold", "Apple Braille", "Noteworthy Light", "Helvetica Neue Bold Italic", "AppleMyungjo Regular", "Garamond Bold", "YuGothic", "PT Sans Caption Bold", "Futura", "Tahoma Negreta", "Goudy Old Style Bold", "Desdemona", "Gill Sans MT Bold", "System Font Regular", "Charter Italic", "Seravek Bold", "Al Bayan Bold", "Baskerville Bold", "American Typewriter Condensed Bold", "Meiryo Bold Italic", "Nanum Gothic", "Kokonor", "Avenir Black", "Bodoni 72 Smallcaps", "System Font Light", "Lantinghei SC Heavy", "Shree Devanagari 714 Italic", "Yuanti SC Regular", "PT Serif Caption", "Helvetica Light Oblique", "Avenir Light", "STIXIntegralsUpD-Bold", "STIXNonUnicode-Italic", "Mishafi Gold Regular", "Kohinoor Devanagari Demi", "Damascus Medium", "Consolas Bold", "STIXSizeOneSym-Regular", "Heiti SC Light", "Times Roman", "Constantia Bold Italic", "Tamil Sangam MN Bold", "Candara Bold", "Avenir Next Ultra Light", "Hiragino Mincho ProN", "STIXIntegralsUp-Bold", "Lucida Sans Typewriter Regular", "Diwan Thuluth", "Oriya Sangam MN Bold", "Herculanum", "Baskerville Bold Italic", "Calibri Italic", "Kaiti TC", "Seravek Light", "Bodoni 72 Book Italic", "Al Bayan Plain", "Kefa Regular", "Cochin", "ITF Devanagari", "System Font Medium Italic P4", "Charter Black Italic", "Helvetica Neue Medium", "American Typewriter", "Gill Sans Light", "Trebuchet MS Bold Italic", "Lucida Sans Italic", "Avenir Next Italic", "Kozuka Gothic Pro", "New Peninim MT Inclined", "PT Serif Italic", "Sukhumvit Set", "Hiragino Kaku Gothic ProN", "Bell MT Bold", "Lucida Sans Regular", "Lucida Handwriting Italic", "Consolas Italic", "Marion", "Helvetica Neue Medium Italic", "Lao MN", "Microsoft Tai Le Bold", "Damascus Bold", "Athelas Italic", "Nanum Brush Script", "Seravek Medium Italic", "Sukhumvit Set Semi Bold", "Charter Roman", "PT Serif Bold Italic", "Gujarati Sangam MN", "Kokonor Regular", "InaiMathi", "Kozuka Mincho Pro", "Avenir Next", "Hoefler Text Black Italic", "Sathu", "Heiti SC Medium", "Cracked", "STIXNonUnicode-Regular", "DIN Condensed Bold", "Muna Regular", "Rockwell Bold", "Meiryo Bold", "Savoye LET", "Skia Bold", "Hiragino Kaku Gothic StdN W8", "Gurmukhi Sangam MN Bold", "HanziPen TC", "Abadi MT Condensed Extra Bold", "Goudy Old Style Italic", "Arial Hebrew Bold", "Times Bold Italic", "Damascus Semi Bold", "STKaiti", "Helvetica Neue Thin", "Charter Bold Italic", "Iowan Old Style Italic", "Muna", "Osaka", "Sukhumvit Set Thin", "Hiragino Maru Gothic Pro W4", "AppleGothic", "Apple SD Gothic Neo", "System Font Italic", "Calisto MT Bold", "Euphemia UCAS Italic", "Wawati TC Regular", "Avenir Next Ultra Light Italic", "Cambria Bold Italic", "Hei", "Bangla MN", "Euphemia UCAS", "Apple LiSung Light", "Hannotate SC Regular", "Century Schoolbook Bold", "PT Sans Bold", "Diwan Kufi Regular", "Kohinoor Devanagari", "American Typewriter Condensed", "Times New Roman Italic", "DIN Condensed", "Lithos Pro", "News Gothic MT Italic", "Optima Bold", "Kaiti SC Regular", "HanziPen SC Regular", "PT Sans Italic", "Meiryo Italic", "Menlo", "STIXSizeThreeSym-Regular", "Hei Regular", "Hiragino Maru Gothic ProN W4", "Gujarati MT Bold", "Perpetua Titling MT Bold", "Songti SC Regular", "PT Sans Narrow Bold", "Iowan Old Style Bold", "Tamil Sangam MN", "Rosewood Std", "Khmer MN", "Georgia Bold Italic", "Comic Sans MS Bold", "Avenir Next Condensed Ultra Light", "Monaco", "NanumMyeongjo ExtraBold", "Apple SD Gothic Neo Medium", "PortagoITC TT", "Bodoni 72 Bold", "Sukhumvit Set Bold", "Kefa", "Helvetica Neue", "Waseem Regular", "Avenir Book Oblique", "Damascus", "SchoolHouse Cursive B", "New Peninim MT Bold Inclined", "Yuanti SC Light", "American Typewriter Condensed Light", "NanumMyeongjo Bold", "1", "PT Serif Bold", "Lantinghei TC Extralight", "Iowan Old Style Bold Italic", "Apple SD GothicNeo ExtraBold", "STIXVariants-Bold", "Waseem Light", "Lao Sangam MN", "Gill Sans MT Bold Italic", "ITF Devanagari Book", "Arial Bold Italic", "Rockwell Italic", "STIXSizeFourSym-Bold", "Helvetica Neue Italic", "Franklin Gothic Medium Italic", "STIXSizeFiveSym-Regular", "Yuppy SC", "Hiragino Kaku Gothic Std", "Constantia Italic", "Zapfino", "Palatino Italic", "Hiragino Mincho Pro", "Farisi Regular", "Phosphate Solid", "Courier Bold", "Century Schoolbook Bold Italic", "Gujarati Sangam MN Bold", "Apple Symbols", "Malayalam MN Bold", "Menlo Italic", "Kino MT", "Weibei SC Bold", "Lucida Sans Demibold Italic", "Songti TC", "Perpetua Bold Italic", "Devanagari MT", "Lantinghei SC Extralight", "Copperplate Light", "Thonburi Light", "Sana", "Hoefler Text Black", "Avenir Next Condensed Heavy Italic", "Sinhala Sangam MN", "Skia Extended", "Seravek Light Italic", "KufiStandardGK", "Thonburi", "System Font Bold Italic", "Avenir Next Medium Italic", "Palatino Linotype Bold", "Arial Narrow Italic", "Mshtakan Oblique", "Mishafi Regular", "Helvetica CY Oblique", "Avenir Next Heavy Italic", "Papyrus Condensed", "Cochin Italic", "Skia Black Extended", "Baskerville Italic", "Iowan Old Style", "Chalkduster", "Waseem", "Farah", "Optima", "Hiragino Sans GB", "Avenir Medium", "Century Schoolbook Italic", "Iowan Old Style Black Italic", "PT Sans Caption", "Avenir Medium Oblique", "Calibri Bold Italic", "Lantinghei TC Heavy", "System Font Bold", "Shree Devanagari 714 Bold Italic", "Calisto MT Italic", "Courier Bold Oblique", "Gill Sans Italic", "Corsiva Hebrew Bold", "Arial Hebrew", "Malayalam Sangam MN", "Copperplate Bold", "Savoye LET Plain CC", "STXihei", "Charter Bold", "PCMyungjo", "Skia Regular", "HanziPen SC Bold", "Verdana Bold", "Superclarendon Bold", "STIXIntegralsUpSm-Bold", "Corsiva Hebrew"];
listFontsLinux = ["Khmer OS", "FreeSans", "Loma", "Utopia", "Bitstream Charter", "Ubuntu Light", "GNU", "Cantarell", "Sawasdee", "cmsy10", "Ubuntu", "Lohit Bengali", "TlwgMono", "gargi", "msbm10", "Nimbus Mono L", "Droid Sans Thai", "TlwgTypewriter", "Serif", "Monospace", "utkal", "KacstQurn", "Phetsarath OT", "LKLUG", "esint10", "Tlwg Typist", "Mukti Narrow", "URW Chancery L", "Purisa", "Ubuntu Medium", "Waree", "Droid Sans Hebrew", "Umpush", "KacstOffice", "Meera", "Droid Serif", "KacstDecorative", "TakaoPGothic", "wasy10", "FreeMono", "KacstTitleL", "KacstPen", "KacstDigital", "Tlwg Typo", "cmex10", "Saab", "cmr10", "Dingbats", "Padauk", "Droid Arabic Naskh", "KacstFarsi", "MathJax", "KacstNaskh", "rsfs10", "WenQuanYi Micro Hei Mono", "URW Gothic L", "Droid Sans Armenian", "Ubuntu Condensed", "Century Schoolbook L", "Courier 10 Pitch", "KacstArt", "Droid Sans Japanese", "mry", "Droid Sans Ethiopic", "KacstTitle", "msam10", "Rekha", "Lohit Devanagari", "eufm10", "Vemana2000", "FreeSerif", "Nimbus Roman No9 L", "WenQuanYi Micro Hei", "KacstBook", "NanumBarunGothic", "Droid Sans Fallback", "KacstPoster", "Rachana", "KacstScreen", "URW Palladio L", "URW Bookman L", "Lohit Gujarati", "Padauk Book", "KacstLetter", "Lohit Punjabi", "UnDotum", "Droid Sans", "Tibetan Machine Uni", "Abyssinica SIL", "Standard Symbols L", "Droid Sans Georgian", "Mallige", "Droid Sans Mono", "Khmer OS System", "Norasi", "Kedage", "Kinnari", "Garuda", "cmmi10", "Nimbus Sans L", "Sans", "Ubuntu Mono", "Pothana2000", "Lohit Tamil", "KacstOne"];


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
    	try{
	        fontsFlash = fl.getFonts();

	        for(var i = 0; i < fontsFlash.length; i++){
	        	fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
	        }
	     }catch(err){
	     	throw new Exception();
	     }
    }
    return fontsFlash;
}

function getFlashWidth(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return 0;
    } else{
    	try{
    		return fl.getResolution()[0]; 
    	}catch(err){
    		throw new Exception();
    	}    
    }
}

function getFlashHeight(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return 0;
    } else{
    	try{
    		return fl.getResolution()[1];   
    	}catch(err){
    		throw new Exception();
    	}  
    }
}

function getFlashLanguage(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return "";
    } else{
    	try{
    		return fl.getLanguage();     
    	}catch(err){
    		throw new Exception();
    	}
    }
}

function getFlashPlatform(){
	var fl = document.getElementById("OSData");
    if(fl == null){
        return "";
    } else{
    	try{
    		return fl.getOS();     
    	}catch(err){
    		throw new Exception();
    	}
    }
}



function check_languages(languagesHttp, languageFlash){
	language = navigator.language.substr(0,2);
	languages = navigator.languages;	

	//We check if navigator.language is equal to the first language of accept language http
	try{
		firstLanguageHttp = languagesHttp.substr(0,2);
		if(firstLanguageHttp != language){
			console.log("test language 1");
			return false;
		}
	}catch(err){
		console.log("test language 2");
		return false;
	}

	//We check if navigator.language is equal to the first language of navigator.languages
	if(languages != undefined){
		try{
			firstLanguages = languages[0].substr(0,2);
			if(firstLanguages != language){
				console.log("test language 3");
				return false;
			}
		}catch(err){
			console.log("test language 4");
			return false;
		}

		//We check if navigator.languages is equal to accept languages Http
		var temp = languagesHttp;
		while((languagesHttpParsed = temp.replace(/;q=[0-9.]+/,"")) != temp){
			temp = languagesHttpParsed;
		}

		if(languagesHttpParsed != languages){
			console.log("test language 5");
			return false;
		}
	}

	if(languageFlash !== ""){
		if(languageFlash !== language){
			console.log("test language 6");
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
	if(userAgent.toLowerCase().indexOf("windows phone") >= 0){
		var os ="Windows Phone";
	}else if(userAgent.toLowerCase().indexOf("win") >= 0){
		var os = "Windows";
	}else if(userAgent.toLowerCase().indexOf("android") >= 0){
		var os = "Android";
	}else if(userAgent.toLowerCase().indexOf("linux") >= 0){
		var os ="Linux";
	}else if(userAgent.toLowerCase().indexOf("iPhone") >= 0 || userAgent.toLowerCase().indexOf("iPad") >=0 ){
		var os = "iOS";
	}else if(userAgent.toLowerCase().indexOf("mac") >= 0){
		var os ="Mac";
	}else{
		var os = "Other";
	}
	
	//We detect if the person uses a mobile device
	if (('ontouchstart' in window) ||
	     (navigator.maxTouchPoints > 0) ||
	     (navigator.msMaxTouchPoints > 0)) {
	      var mobileDevice = true;
	}else{
		var mobileDevice = false;
	}

	if(mobileDevice && os !== "Windows Phone" && os !=="Android" && os !=="iOS" && os !=="Other"){
		console.log("test os 1");
		return false;
	}


	//We compare oscpu with the os extracted from the ua
	if(oscpu != undefined){
		if(oscpu.toLowerCase().indexOf("win") >= 0 && os !=="Windows" && os !=="Windows Phone"){
			console.log("test os 2");
			return false;
		}else if(oscpu.toLowerCase().indexOf("linux") >= 0 && os !=="Linux" && os !=="Android"){
			console.log("test os 3");
			return false;
		}else if(oscpu.toLowerCase().indexOf("mac") >= 0 && os !=="Mac" && os !=="iOS"){
			console.log("test os 4");
			return false;
		}else if(oscpu.toLowerCase().indexOf("win") == 0 && oscpu.toLowerCase().indexOf("linux") == 0 && oscpu.toLowerCase().indexOf("mac") >= 0 && os != "other"){
			console.log("test os 5");
			return false;
		}
	}

	//We compare platform with the os extracted from the ua
	if(platform.toLowerCase().indexOf("win") >= 0 && os !=="Windows" && os !=="Windows Phone"){
		console.log("test os 6");
		return false;
	}else if((platform.toLowerCase().indexOf("linux") >= 0 || platform.toLowerCase().indexOf("android") >= 0 || platform.toLowerCase().indexOf("pike") >= 0) && os !=="Linux" && os !=="Android"){
		console.log("test os 7");
		return false;
	}else if((platform.toLowerCase().indexOf("mac") >= 0 ||  platform.toLowerCase().indexOf("ipad") >= 0 || platform.toLowerCase().indexOf("ipod") >= 0 || platform.toLowerCase().indexOf("iphone") >= 0) && os !=="Mac" && os !=="iOS"){
		console.log("test os 8");
		return false;
	}else if(platform.toLowerCase().indexOf("win") == 0 && platform.toLowerCase().indexOf("linux") == 0 && platform.toLowerCase().indexOf("mac") >= 0 && os != "other"){
		console.log("test os 9");
		return false;
	}

	//We compare flash platform with the os extracted from the ua
	if(platformFlash !==""){
		if(platformFlash.toLowerCase().indexOf("win") >= 0 && os !=="Windows" && os !=="Windows Phone"){
			console.log("test os 9");
			return false;
		}else if((platform.toLowerCase().indexOf("linux") >= 0 || platform.toLowerCase().indexOf("android") >= 0 || platform.toLowerCase().indexOf("pike") >= 0) && os !=="Linux" && os !=="Android"){
			console.log("test os 10");
			return false;
		}else if((platform.toLowerCase().indexOf("mac") >= 0 ||  platform.toLowerCase().indexOf("ipad") >= 0 || platform.toLowerCase().indexOf("ipod") >= 0 || platform.toLowerCase().indexOf("iphone") >= 0) && os !=="Mac" && os !=="iOS"){
			console.log("test os 11");
			return false;
		}else if(platformFlash.toLowerCase().indexOf("win") == 0 && platformFlash.toLowerCase().indexOf("linux") == 0 && platformFlash.toLowerCase().indexOf("mac") >= 0 && os != "other"){
			console.log("test os 12");
			return false;
		}
	}

	//We check the plugins
	if(navigator.plugins != undefined){
		var listPluginsWindows = ["microsoft office","adobe acrobat", "google update", "javatm platform se", "java deployment toolkit", "intel", "vlc web plugin", "nvidia", "google earth plugin"];
		var listPluginsLinux = ["icedTea-web plugin using icedtea-web","divx", "javatm plug-in","windows media player plug-in","skype buttons for kopete","windows media player plug-in","vlc multimedia plugin compatible videos", "gnome shell integration", "mplayerplug-in is now gecko-mediaplayer","vlc multimedia plugin compatible totem"] ; 
		var listPluginsMac = ["default browser helper", "java applet plug-in", "sharepoint browser plug-in", "adobe acrobat npapi plug-in version", "webex", "webkit built-in pdf", "flip", "iphotophotocast", "google earth plug-in","quickTime plug-in"];
		if(os === "Windows" || os === "Mac" || os=="Linux"){
			var testPlugins = false;
			for(var i =0; i < navigator.plugins.length; i++){
				if((os === "Windows" && listPluginsWindows.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0) || (os === "Mac" && listPluginsMac.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0) || (os === "Linux" && listPluginsLinux.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0)){
					testPlugins = true;
					break;
				}
			}
		}

		//We test if someone whose useragent is linux has no plugins from windows or mac
		if(os ==="Linux"){
			var counterPluginsNoLinux = 0;
			for(var i = 0; i < navigator.plugins.length; i++){
				if(listPluginsWindows.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0 || listPluginsMac.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0){
					counterPluginsNoLinux++;
				}
			}

			if(counterPluginsNoLinux >= 2){
				return false;
			}
		}

	}else{
		//We are are in the case where the person uses ie, therefore we can infer that it's windows
		if(os !== "Windows" && os !=="Windows Phone"){
			console.log("test os 13");
			return false;
		}
	}

	if(os === "Windows"){
		listFonts = listFontsWindows;
	}else if(os === "Mac"){
		listFonts = listFontsMac;
	}else if(os ==="Linux"){
		listFonts = listFontsLinux;
	}

	if(fontsFlash.length > 1 && os !=="Other"){
		var counter = 0;
		for(var i = 0; i < fontsFlash.length; i++){
			fontsFlash[i] = fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
			if(listFonts.indexOf(fontsFlash[i]) >= 0){
				counter++;
			}
		}
		var pctFontsFlash = (counter/listFonts.length)*100;

		if(os ==="Linux"){
			counterFontsNotLinux = 0;
			for(var i =0; i < fontsFlash.length; i++){
				if(listFontsWindows.indexOf(fontsFlash[i]) >= 0 || listFontsMac.indexOf(fontsFlash[i]) >= 0){
					counterFontsNotLinux++;
				}
			}

			var percentagesFontsNotLinux = (counterFontsNotLinux/(listFontsMac.length + listFontsWindows.length))*100;
		}

		if((os ==="Windows" || os ==="Mac") && !testPlugins && pctFontsFlash < 30){
			console.log("test os 14");
			return false;
		}else if(os ==="Linux" && !testPlugins && pctFontsFlash < 25 && percentagesFontsNotLinux > 30){
			console.log("test os 15");
			return false;
		}

	}else if(fontsFlash.length <= 2 && os !=="Other"){ //If flash wasn't avalaible
		var results = [];
    	var d = new Detector();

    	counter = 0;
    	for (i = 0; i < listFonts.length; i++) {
            var result = d.detect(listFonts[i]);
            if (result){
            	counter++;
            }          
        }

        var pctFontsNoFlash = (counter/listFonts.length)*100;

        if(os ==="Linux"){
			counterFontsNotLinux = 0;
			for (i = 0; i < listFontsWindows.length; i++) {
	            var result = d.detect(listFontsWindows[i]);
	            if (result){
	            	counterFontsNotLinux++;
	            }          
	        }

	        for (i = 0; i < listFontsMac.length; i++) {
	            var result = d.detect(listFontsMac[i]);
	            if (result){
	            	counterFontsNotLinux++;
	            }          
	        }

			var percentagesFontsNotLinux = (counterFontsNotLinux/(listFontsMac.length + listFontsWindows.length))*100;
		}

        console.log("test1 % fonts : "+pctFontsNoFlash);

        if((os ==="Windows" || os ==="Mac") && !testPlugins && pctFontsNoFlash < 20){
        	console.log("test os 16");
			return false;
		}else if(os ==="Linux" && pctFontsNoFlash < 15 && !testPlugins && percentagesFontsNotLinux > 25){
			console.log("test os 17");
			return false;
		}
	}


	return true;
}

function check_browser(userAgentHttp){
	userAgent = navigator.userAgent;
	productSub = navigator.productSub

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

	if((browser === "Chrome" || browser==="Safari" || browser ==="Opera") && productSub != "20030107"){
		console.log("test browser 1");
		return false;
	}

	//Sort navigator prototype and compare it with the prototype of the browser we have extracted from the ua
	navObjectProp = [];
	for (var property in navigator) {
		navObjectProp.push(property);
	}
	navObjectProp.sort();
	navObjectSorted = "";
	for(i=0; i<navObjectProp.length; i++){
		navObjectSorted += navObjectProp[i]+", ";
	}

	//Maybe problems with different version of browsers ?????? maybe do percentages ?
	var protoFirefox = "appCodeName, appName, appVersion, battery, buildID, cookieEnabled, doNotTrack, geolocation, getGamepads, javaEnabled, language, languages, mediaDevices, mimeTypes, mozApps, mozContacts, mozGetUserMedia, mozPay, mozTCPSocket, onLine, oscpu, platform, plugins, product, productSub, registerContentHandler, registerProtocolHandler, requestMediaKeySystemAccess, sendBeacon, taintEnabled, userAgent, vendor, vendorSub, vibrate, ";
	var protoChrOp = "appCodeName, appName, appVersion, cookieEnabled, doNotTrack, geolocation, getBattery, getGamepads, getStorageUpdates, hardwareConcurrency, javaEnabled, language, languages, maxTouchPoints, mimeTypes, onLine, permissions, platform, plugins, product, productSub, registerProtocolHandler, requestMIDIAccess, requestMediaKeySystemAccess, sendBeacon, serviceWorker, unregisterProtocolHandler, userAgent, vendor, vendorSub, vibrate, webkitGetUserMedia, webkitPersistentStorage, webkitTemporaryStorage, ";
	var protoIE = "appCodeName, appMinorVersion, appName, appVersion, browserLanguage, confirmSiteSpecificTrackingException, confirmWebWideTrackingException, cookieEnabled, cpuClass, geolocation, javaEnabled, language, maxTouchPoints, mimeTypes, msLaunchUri, msManipulationViewsEnabled, msMaxTouchPoints, msPointerEnabled, msSaveBlob, msSaveOrOpenBlob, onLine, platform, plugins, pointerEnabled, product, removeSiteSpecificTrackingException, removeWebWideTrackingException, storeSiteSpecificTrackingException, storeWebWideTrackingException, systemLanguage, taintEnabled, userAgent, userLanguage, vendor, webdriver, ";
	var protoSafari = "appCodeName, appName, appVersion, cookieEnabled, geolocation, getStorageUpdates, javaEnabled, language, mimeTypes, onLine, platform, plugins, product, productSub, userAgent, vendor, vendorSub, ";
	if(browser === "Firefox" && navObjectSorted !== protoFirefox){
		console.log("test browser 2");
		return false;
	}
	else if((browser === "Chrome" ||browser ==="Opera") && navObjectSorted !== protoChrOp){
		console.log("test browser 3");
		return false;
	}else if(browser ==="Internet Explorer" && navObjectSorted != protoIE){
		console.log("test browser 4");
		return false;
	}else if(browser ==="Safari" && navObjectSorted !==protoSafari){
		console.log("test browser 4.1");
		return false;
	}else if(browser ==="Other" && (navObjectSorted === protoFirefox || navObjectSorted === protoChrOp|| navObjectSorted === protoIE || navObjectSorted === protoSafari)){
		console.log("test browser 5");
		return false;
	}
	//Cases with opera etc ...


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

	if((browser ==="Firefox" && !errFirefox) || (browser === "Internet Explorer" && !testNamespace) || (browser === "Safari" && (errFirefox || testNamespace)) || (browser === "Chrome" && (errFirefox || testNamespace))) {
		console.log("test browser 6");
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
//if no platform flash give an empty string
function guess_os(userAgentHttp, fontsFlash, platformFlash){
	appVersion = navigator.appVersion;
	userAgent = navigator.userAgent;
	platform = navigator.platform;
	oscpu = navigator.oscpu;
	width = screen.width;
	height = screen.height;
	resolution = width+"x"+height;

	//Test 1 with userAgentHttp
	if(userAgentHttp.toLowerCase().indexOf("windows phone") >= 0){
		var osHttp ="Windows Phone";
	}else if(userAgentHttp.toLowerCase().indexOf("win") >= 0){
		var osHttp = "Windows";
	}else if(userAgentHttp.toLowerCase().indexOf("android") >= 0){
		var os = "Android";
	}else if(userAgentHttp.toLowerCase().indexOf("linux") >= 0){
		var osHttp ="Linux";
	}else if(userAgentHttp.toLowerCase().indexOf("iPhone") >= 0 || userAgent.toLowerCase().indexOf("iPad")){
		var os = "iOS";
	}else if(userAgentHttp.toLowerCase().indexOf("mac") >= 0){
		var osHttp ="Mac";
	}else{
		console.log("test other 1");
		var osHttp = "Other";
	}

	//test 2 with navigator.userAgent
	if(userAgent.toLowerCase().indexOf("windows phone") >= 0){
		var osUaNav ="Windows Phone";
	}else if(userAgent.toLowerCase().indexOf("win") >= 0){
		console.log("windows os !");
		var osUaNav = "Windows";
	}else if(userAgent.toLowerCase().indexOf("android") >= 0){
		var os = "Android";
	}else if(userAgent.toLowerCase().indexOf("linux") >= 0){
		var osUaNav ="Linux";
	}else if(userAgent.toLowerCase().indexOf("iPhone") >= 0 || userAgent.toLowerCase().indexOf("iPad")){
		var os = "iOS";
	}else if(userAgent.toLowerCase().indexOf("mac") >= 0){
		var osUaNav ="Mac";
	}else{
		console.log("test other 2");
		var osUaNav = "Other";
	}

	//test 3 with navigator platform	
	if(platform.toLowerCase().indexOf("win") >= 0){
		var osPlatform = "Windows";
	}else if(platform.toLowerCase().indexOf("linux") >= 0){
		var osPlatform = "Linux"
	}else if(platform.toLowerCase().indexOf("ipad") >= 0 || platform.toLowerCase().indexOf("ipod") >= 0 || platform.toLowerCase().indexOf("iphone") >= 0){
		var osPlatform = "iOS";
	}else if(platform.toLowerCase().indexOf("mac") >= 0){
		var osPlatform = "Mac";
	}else if(platform.toLowerCase().indexOf("android") >= 0 || platform.toLowerCase().indexOf("pike") >= 0){
		var osPlatform = "Android";
	}else{
		console.log("test other 3");
		var osPlatform ="Other";
	}

	//test 4 with flash platform
	if(platformFlash !== ""){
		if(platformFlash.toLowerCase().indexOf("win") >= 0){
			var osPlatformFlash = "Windows";
		}else if(platformFlash.toLowerCase().indexOf("linux") >= 0){
			var osPlatformFlash = "Linux"
		}else if(platform.toLowerCase().indexOf("ipad") >= 0 || platform.toLowerCase().indexOf("ipod") >= 0 || platform.toLowerCase().indexOf("iphone") >= 0){
			var osPlatform = "iOS";
		}else if(platformFlash.toLowerCase().indexOf("mac") >= 0){
			var osPlatformFlash = "Mac";
		}else if(platform.toLowerCase().indexOf("android") >= 0 || platform.toLowerCase().indexOf("pike") >= 0){
			var osPlatform = "Android";
		}else{
			console.log("flash platform : "+platformFlash);
			var osPlatformFlash ="Other";
		}
	}

	//We test with oscpu 
	//add the equivalent of oscpu for ie
	if(oscpu != undefined){
		if(oscpu.toLowerCase().indexOf("win") >= 0){
			var osOscpu = "Windows";
		}else if(oscpu.toLowerCase().indexOf("linux") >= 0){
			var osOscpu = "Linux";
		}else if(platform.toLowerCase().indexOf("ipad") >= 0 || platform.toLowerCase().indexOf("ipod") >= 0 || platform.toLowerCase().indexOf("iphone") >= 0){
			var osPlatform = "iOS";
		}else if(oscpu.toLowerCase().indexOf("mac") >= 0){
			var osOscpu ="Mac";
		}else if(platform.toLowerCase().indexOf("android") >= 0 || platform.toLowerCase().indexOf("pike") >= 0){
			var osPlatform = "Android";
		}else{
			console.log("test other 4");
			var osOscpu ="Other";
		}
	}
	//We try to guess the os with the fonts flash
	if(fontsFlash.length  > 0){
		
		var counterWindows = 0;
		var counterMac = 0;
		var counterLinux =0;

		for(var i = 0; i < fontsFlash.length; i++){
			fontsFlash[i] = fontsFlash[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
			if(listFontsWindows.indexOf(fontsFlash[i]) >= 0){
				counterWindows++;
			}else if(listFontsMac.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counterMac++;
			}else if(listFontsLinux.indexOf(fontsFlash[i].toLowerCase()) >= 0){
				counterLinux++;
			}
		}

		var percentageFontsFlashWindows = (counterWindows/listFontsWindows.length)*100;
		console.log("test fonts windows : "+percentageFontsFlashWindows);
		var percentageFontsFlashMac = (counterMac/listFontsMac.length)*100;
		console.log("test fonts mac : "+percentageFontsFlashMac);
		var percentageFontsFlashLinux = (counterLinux/listFontsLinux.length)*100;
		console.log("test fonts linux : "+percentageFontsFlashLinux);

		if(percentageFontsFlashLinux > 10 && (percentageFontsFlashWindows + percentageFontsFlashMac < 30)){
			var osFontsFlash = "Linux";
		}
		else if(percentageFontsFlashWindows > percentageFontsFlashLinux && percentageFontsFlashWindows > percentageFontsFlashMac && percentageFontsFlashWindows > 45){
			var osFontsFlash = "Windows";
		}else if(percentageFontsFlashMac > percentageFontsFlashLinux && percentageFontsFlashMac > percentageFontsFlashWindows && percentageFontsFlashMac > 45){
			var osFontsFlash = "Mac";
		}else if(percentageFontsFlashLinux > percentageFontsFlashWindows && percentageFontsFlashLinux > percentageFontsFlashMac && percentageFontsFlashLinux > 45){
			var osFontsFlash ="Linux";
		}else{
			console.log("test other 5");
			var osFontsFlash = "Other"
		}

	}else{
		//We try to guess the os using css + javascript detection of fonts
    	
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
        console.log("fonts windows : "+percentageFontsNoFlashWindows);
        var percentageFontsNoFlashMac = (counterMac/listFontsMac.length)*100; 
        console.log("fonts mac : "+percentageFontsNoFlashMac);
        var percentageFontsNoFlashLinux = (counterLinux/listFontsLinux.length)*100;
        console.log("fonts linux : "+percentageFontsNoFlashLinux);

        if(percentageFontsNoFlashLinux > 10 && (percentageFontsNoFlashWindows + percentageFontsNoFlashMac < 35)){
			var osFontsNoFlash = "Linux";
		}else if(percentageFontsNoFlashWindows > percentageFontsNoFlashLinux && percentageFontsNoFlashWindows > percentageFontsNoFlashMac && percentageFontsNoFlashWindows > 45){
			var osFontsNoFlash = "Windows";
		}else if(percentageFontsNoFlashMac > percentageFontsNoFlashLinux && percentageFontsNoFlashMac > percentageFontsNoFlashWindows && percentageFontsNoFlashMac > 45){
			var osFontsNoFlash = "Mac";
		}else if(percentageFontsNoFlashLinux > percentageFontsNoFlashWindows && percentageFontsNoFlashLinux > percentageFontsNoFlashMac && percentageFontsNoFlashLinux > 45){
			var osFontsNoFlash ="Linux";
		}else{
			console.log("test other 6");
			var osFontsNoFlash = "Other"
		}
	}

	//We detect if the person uses a mobile device
	if (('ontouchstart' in window) ||
	     (navigator.maxTouchPoints > 0) ||
	     (navigator.msMaxTouchPoints > 0)) {
	      var mobileDevice = true;
	}else{
		var mobileDevice = false;
	}

	//We define weight to choose the true os
	var weightNavUa = 1;
	var weightHttpUa = 1;
	var weightNavPlatform = 1;
	var weightPlatformFlash = 4;
	var weightNavOscpu = 2;
	var weightFlashFonts = 8;
	var weightNoFlashFonts = 5;

	var mapScores = new Object();
	mapScores["Windows"] = 0;
	mapScores["Windows Phone"] =0;
	mapScores["Mac"] = 0;
	mapScores["iOS"] = 0;
	mapScores["Linux"] =0;
	mapScores["Android"] = 0;
	mapScores["Other"] =0;

	mapScores[osUaNav] += weightNavUa;
	mapScores[osHttp] += weightHttpUa;
	mapScores[osPlatform] += weightNavPlatform;
	mapScores[osPlatformFlash] += weightPlatformFlash;
	if(oscpu != undefined){
		mapScores[osOscpu] += weightNavOscpu;
	}
	if(fontsFlash.length  > 0){
		mapScores[osFontsFlash] += weightFlashFonts;
	}else{
		mapScores[osFontsNoFlash] += weightNoFlashFonts;
	}
	
	delete mapScores[undefined];

	var max = "Windows";
	for(var k in mapScores){
		if(mapScores[k] > mapScores[max]){
			max = k;
		}
	}

	if(max === "Linux" && mobileDevice){
		mapScores["OS"] = "Android";
	}else if(max === "Mac" && mobileDevice){
		mapScores["OS"] = "iOS";
	}else if(max === "Windows" && mobileDevice){
		mapScores["OS"] = "Windows Phone";
	}else{
		mapScores["OS"] = max;
	}


	return mapScores;
}

function guess_browser(userAgentHttp){
	userAgent = navigator.userAgent;

	//We get the browser via navigator.userAgent
	if(userAgent.toLowerCase().indexOf("firefox") >= 0){
		var browserNavUa = "Firefox";
	}else if(userAgent.toLowerCase().indexOf("chrome") >= 0){
		var browserNavUa ="Chrome";
	}else if(userAgent.toLowerCase().indexOf("safari") >= 0){
		var browserNavUa ="Safari";
	}else if(userAgent.toLowerCase().indexOf("trident") >= 0){
		var browserNavUa = "Internet Explorer";
	}else if(userAgent.toLowerCase().indexOf("opera") >= 0){
		var browserNavUa ="Opera";
	}else{
		var browserNavUa = "Other";
	}

	//We get the browser via userAgent http
	if(userAgentHttp.toLowerCase().indexOf("firefox") >= 0){
		var browserHttpUa = "Firefox";
	}else if(userAgentHttp.toLowerCase().indexOf("chrome") >= 0){
		var browserHttpUa ="Chrome";
	}else if(userAgentHttp.toLowerCase().indexOf("safari") >= 0){
		var browserHttpUa ="Safari";
	}else if(userAgentHttp.toLowerCase().indexOf("trident") >= 0){
		var browserHttpUa = "Internet Explorer";
	}else if(userAgentHttp.toLowerCase().indexOf("opera") >= 0){
		var browserHttpUa ="Opera";
	}else{
		var browserHttpUa = "Other";
	}

	//We try to guess if the browser is chrome using navigator.appVersion
	if(navigator.productSub === "20030107"){
		var browserAppVersion = "Chrome"; 
	}else{
		var browserAppVersion = undefined;
	}

	navObjectProp = [];
	for (var property in navigator) {
		navObjectProp.push(property);
	}
	navObjectProp.sort();
	navObjectSorted = "";
	for(i=0; i<navObjectProp.length; i++){
		navObjectSorted += navObjectProp[i]+", ";
	}

	//We look at the prototype of navigator
	var protoFirefox = "appCodeName, appName, appVersion, battery, buildID, cookieEnabled, doNotTrack, geolocation, getGamepads, javaEnabled, language, languages, mediaDevices, mimeTypes, mozApps, mozContacts, mozGetUserMedia, mozPay, mozTCPSocket, onLine, oscpu, platform, plugins, product, productSub, registerContentHandler, registerProtocolHandler, requestMediaKeySystemAccess, sendBeacon, taintEnabled, userAgent, vendor, vendorSub, vibrate, ";
	var protoChrOp = "appCodeName, appName, appVersion, cookieEnabled, doNotTrack, geolocation, getBattery, getGamepads, getStorageUpdates, hardwareConcurrency, javaEnabled, language, languages, maxTouchPoints, mimeTypes, onLine, permissions, platform, plugins, product, productSub, registerProtocolHandler, requestMIDIAccess, requestMediaKeySystemAccess, sendBeacon, serviceWorker, unregisterProtocolHandler, userAgent, vendor, vendorSub, vibrate, webkitGetUserMedia, webkitPersistentStorage, webkitTemporaryStorage, ";
	var protoIE = "appCodeName, appMinorVersion, appName, appVersion, browserLanguage, confirmSiteSpecificTrackingException, confirmWebWideTrackingException, cookieEnabled, cpuClass, geolocation, javaEnabled, language, maxTouchPoints, mimeTypes, msLaunchUri, msManipulationViewsEnabled, msMaxTouchPoints, msPointerEnabled, msSaveBlob, msSaveOrOpenBlob, onLine, platform, plugins, pointerEnabled, product, removeSiteSpecificTrackingException, removeWebWideTrackingException, storeSiteSpecificTrackingException, storeWebWideTrackingException, systemLanguage, taintEnabled, userAgent, userLanguage, vendor, webdriver, ";
	var protoSafari = "appCodeName, appName, appVersion, cookieEnabled, geolocation, getStorageUpdates, javaEnabled, language, mimeTypes, onLine, platform, plugins, product, productSub, userAgent, vendor, vendorSub, ";

	if(navObjectSorted === protoFirefox){
		var browserPrototype = "Firefox";
	}
	else if(navObjectSorted === protoChrOp){
		//find a solution for opera
		var browserPrototype = "Chrome";
	}else if(navObjectSorted === protoIE){
		var browserPrototype = "Internet Explorer";
	}else if(navObjectSorted === protoSafari){
		console.log("test guess browser ");
		var browserPrototype = "Safari";
	}

	//We look at the plugins
	var listPluginsChrome = ["chrome pdf viewer", "native client", "widevine content decryption module", "chrome remote desktop viewer"];
	//we don't use plugins for safari and firefox because there are not plugins which caracterize safari/firefox AND which are used by a wide majority of people
	var listPluginsIE = ["flash", "windowsmediaplayer", "silverlight", "adobereader", "java", "shockwave", "quicktime"]; //Not used for the moment

	var counterChrome = 0;
	var counterIE = 0;
	for(var i =0; i < navigator.plugins.length; i++){
		if(listPluginsChrome.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0 ){
			counterChrome++;
		}else if(listPluginsIE.indexOf(navigator.plugins[i].name.toLowerCase()) >= 0){
			counterIE++;
		}
	}

	if(counterChrome >= 2){
		var browserPlugins = "Chrome";
	}else if(counterIE >= 2){
		var browserPlugins = "Internet Explorer";
	}

	if((counterChrome >= 2 && counterIE >=2) || (counterChrome < 2 && counterIE < 2)){
		var browserPlugins = undefined
	}


	//We test if err.toSource is defined
	try{
		dsfsdf;
	}catch(err){
		try{
			var v = err.toSource();
			var browserError = "Firefox";
		}catch(errOferr){
			var browserError = undefined;
		}
	}

	//we test if document.namespace exist (for ie)
	if(document.namespace != undefined){
		var browserNamespace = "Internet Explorer";
	}else{
		var browserNamespace = undefined;
	}

	try{
		navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
        	var browserPermissions = "Chrome";
    	});
	}catch(err){
		var browserPermissions = undefined;
	}


	var weightNavUa = 1;
	var weightHttpUa = 1;
	var weightBrowserAppVersion = 2;
	var weightPrototype = 6;
	var weightPlugins = 3;
	var weightError = 6;
	var weightNamespace = 3;
	var weightPermissions = 7;

	var mapScores = new Object();
	mapScores["Chrome"] = 0;
	mapScores["Firefox"] = 0;
	mapScores["Safari"] =0;
	mapScores["Internet Explorer"]=0;
	mapScores["Opera"] =0;
	mapScores["Other"] =0;	

	mapScores[browserNavUa] += weightNavUa;
	mapScores[browserHttpUa] += weightHttpUa;
	mapScores[browserAppVersion] += weightBrowserAppVersion;
	mapScores[browserPrototype] += weightPrototype;
	mapScores[browserPlugins] += weightPlugins;
	mapScores[browserError] += weightError;
	mapScores[browserNamespace] += weightNamespace;
	mapScores[browserPermissions] += weightPermissions;

	delete mapScores[undefined];


	var max = "Chrome";
	for(var k in mapScores){
		if(mapScores[k] > mapScores[max]){
			max = k;
		}
	}

	mapScores["browser"] = max;

	return mapScores;
}


function getOs(){
	userAgent = navigator.userAgent;
	if(userAgent.toLowerCase().indexOf("windows phone") >= 0){
		var osUaNav ="Windows Phone";
	}else if(userAgent.toLowerCase().indexOf("win") >= 0){
		var osUaNav = "Windows";
	}else if(userAgent.toLowerCase().indexOf("android") >= 0){
		var os = "Android";
	}else if(userAgent.toLowerCase().indexOf("linux") >= 0){
		var osUaNav ="Linux";
	}else if(userAgent.toLowerCase().indexOf("iPhone") >= 0 || userAgent.toLowerCase().indexOf("iPad")){
		var os = "iOS";
	}else if(userAgent.toLowerCase().indexOf("mac") >= 0){
		var osUaNav ="Mac";
	}else{
		var osUaNav = "Other";
	}

	return osUaNav;
}

function getBrowser(){
	userAgent = navigator.userAgent;

	//We get the browser via navigator.userAgent
	if(userAgent.toLowerCase().indexOf("firefox") >= 0){
		var browserNavUa = "Firefox";
	}else if(userAgent.toLowerCase().indexOf("chrome") >= 0){
		var browserNavUa ="Chrome";
	}else if(userAgent.toLowerCase().indexOf("safari") >= 0){
		var browserNavUa ="Safari";
	}else if(userAgent.toLowerCase().indexOf("trident") >= 0){
		var browserNavUa = "Internet Explorer";
	}else if(userAgent.toLowerCase().indexOf("opera") >= 0){
		var browserNavUa ="Opera";
	}else{
		var browserNavUa = "Other";
	}

	return browserNavUa;
}

function getPlugins(){
	var plugins = "";
	if(navigator.plugins == undefined){
	    var nbPlugins = 1;
	    var pluginsList = ["QuickTime", "Java", "DevalVR", "Flash", "Shockwave",
	        "WindowsMediaPlayer", "Silverlight", "VLC", "AdobeReader", "PDFReader",
	        "RealPlayer", "PDFjs"];
	    PluginDetect.getVersion(".");
	    for (i = 0; i < pluginsList.length; i++) {
	        var ver = PluginDetect.getVersion(pluginsList[i]);
	        if(ver != null){
	            plugins+="Plugin "+nbPlugins+": "+pluginsList[i]+" "+ver+"; ";
	            nbPlugins++;
	        }
	    }
	} else {
	    var np = window.navigator.plugins;
	    var plist = new Array();
	    for (var i = 0; i < np.length; i++) {
	        plist[i] = np[i].name + "; ";
	        plist[i] += np[i].description + "; ";
	        plist[i] += np[i].filename;
	        plist[i] += ". ";
	    }
	    plist.sort();
	    for (i = 0; i < np.length; i++)
	        plugins+= "Plugin "+i+": " + plist[i];
	}

	return plugins;
};

function testLocalStorage(){
	try { 
	    localStorage.fp = "test";
	} catch (ex) {}

	try {
	    if (localStorage.fp == "test") {
	       return true;
	    } else {
	       return false;
	    }
	} catch (ex) { 
		return false; 
	}
}

function testSessionStorage(){
	try {
	    if (sessionStorage.fp == "test") {
	       return true;
	    } else {
	       return false;
	    }
	} catch (ex) { 
		return false;
	}
}

function getFontsNoFlash(){
    var fontList = [
      "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter",
      "American Typewriter Condensed", "AmerType Md BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "Arial", "Arial Black", "Arial Hebrew",
      "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville",
      "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD",
      "Bitstream Vera Sans Mono", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Book Antiqua", "Bookman Old Style",
      "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Calibri", "Californian FB", "Calisto MT", "Calligrapher", "Cambria", "Cambria Math", "Candara",
      "CaslonOpnface BT", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer",
      "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold",
      "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Courier", "Courier New", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "Devanagari Sangam MN",
      "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC",
      "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "Franklin Gothic", "Franklin Gothic Book", "Franklin Gothic Demi",
      "Franklin Gothic Demi Cond", "Franklin Gothic Heavy", "Franklin Gothic Medium", "Franklin Gothic Medium Cond", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER",
      "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Garamond", "Gautami", "Geeza Pro", "Geneva", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "Georgia", "GeoSlab 703 Lt BT",
      "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD",
      "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Helvetica",
      "Helvetica Neue", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Impact", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT",
      "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN",
      "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island",
      "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic",
      "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le",
      "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Monaco", "Mongolian Baiti",
      "MONO", "Monotype Corsiva", "MoolBoran", "Mrs Eaves", "MS Gothic", "MS LineDraw", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "MYRIAD",
      "MYRIAD PRO", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN",
      "OSAKA", "OzHandicraft BT", "Palace Script MT", "Palatino", "Palatino Linotype", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB",
      "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla",
      "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood",
      "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket",
      "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tahoma", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC",
      "Terminal", "Thonburi", "Times", "Times New Roman", "Times New Roman PS", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Trebuchet MS", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold",
      "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Verdana", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "Wingdings",
      "Wingdings 2", "Wingdings 3", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];

    var fonts = "";
    var d = new Detector();

	for (i = 0; i < fontList.length; i++) {
        var result = d.detect(fontList[i]);
        if (result){
        	fonts += fontList[i].replace(" ","_");
        }          
    }

    return fonts;
}

function testMultipleMonitors(){
	if(screen.width > 1.78*screen.height){
		return true;
	}else{
		return false;
	}
}

function testMobileDevice(){
	console.log("test mobile device 1");
	if (('ontouchstart' in window) ||
	     (navigator.maxTouchPoints > 0) ||
	     (navigator.msMaxTouchPoints > 0)) {
	      var mobileDevice = true;
	}


	if(navigator.getBattery != undefined){
		console.log("test mobile device 2");
		navigator.getBattery().then(function(result) {
			var hasBattery = true;	
		});
	}else if(navigator.battery != undefined){
		var hasBattery = true;
	}

	if(mobileDevice && hasBattery){
		return true;
	}else{
		return false;
	}
}

//May return false on safari even though the device is a laptop
function testLaptop(){
	if (('ontouchstart' in window) ||
	     (navigator.maxTouchPoints > 0) ||
	     (navigator.msMaxTouchPoints > 0)) {
	      var mobileDevice = true;
	}

	if(navigator.getBattery != undefined){
		console.log("test mobile device 2");
		navigator.getBattery().then(function(result) {
			var hasBattery = true;	
		});
	}else if(navigator.battery != undefined && navigator.battery.level < 1){
		var hasBattery = true;
	}

	if(!mobileDevice && hasBattery){
		return true;
	}else{
		return false;
	}
}

function getCanvasJs(){
	try {
	    canvas = document.createElement("canvas");
	    canvas.height = 60;
	    canvas.width = 400;
	    canvasContext = canvas.getContext("2d");
	    canvas.style.display = "inline";
	    canvasContext.textBaseline = "alphabetic";
	    canvasContext.fillStyle = "#f60";
	    canvasContext.fillRect(125, 1, 62, 20);
	    canvasContext.fillStyle = "#069";
	    canvasContext.font = "11pt no-real-font-123";
	    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
	    canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
	    canvasContext.font = "18pt Arial";
	    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
	    canvasData = canvas.toDataURL();
	} catch(e){
	    canvasData = undefined;
	}

	return canvasData;
}

function testCanvasJs(){
	var elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
}

//This function has been taken from : https://github.com/Valve/fingerprintjs2/blob/master/fingerprint2.js
function getWebglCanvas(){
  var canvas = document.createElement("canvas");
  var gl = null;
  try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch(e) { /* squelch */ }
  if (!gl) { gl = null; }
  return gl;
}

function getWebGl(){
	var gl;
	var fa2s = function(fa) {
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	return "[" + fa[0] + ", " + fa[1] + "]";
	};
	var maxAnisotropy = function(gl) {
	var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
	return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
	};
	gl = this.getWebglCanvas();
	if(!gl) { return null; }
	var result = [];
	var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
	var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
	var vertexPosBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
	var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
	vertexPosBuffer.itemSize = 3;
	vertexPosBuffer.numItems = 3;
	var program = gl.createProgram(), vshader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vshader, vShaderTemplate);
	gl.compileShader(vshader);
	var fshader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fshader, fShaderTemplate);
	gl.compileShader(fshader);
	gl.attachShader(program, vshader);
	gl.attachShader(program, fshader);
	gl.linkProgram(program);
	gl.useProgram(program);
	program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
	program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
	gl.enableVertexAttribArray(program.vertexPosArray);
	gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
	gl.uniform2f(program.offsetUniform, 1, 1);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
	if (gl.canvas != null) { result.push(gl.canvas.toDataURL()); }
	result.push("extensions:" + gl.getSupportedExtensions().join(";"));
	result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
	result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
	result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
	result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
	result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
	result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
	result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
	result.push("webgl max anisotropy:" + maxAnisotropy(gl));
	result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
	result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
	result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
	result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
	result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
	result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
	result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
	result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
	result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
	result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
	result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
	result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
	result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
	result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
	result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
	result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
	result.push("webgl version:" + gl.getParameter(gl.VERSION));
	result.push("webgl vertex shader high float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision);
	result.push("webgl vertex shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMin);
	result.push("webgl vertex shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMax);
	result.push("webgl vertex shader medium float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision);
	result.push("webgl vertex shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
	result.push("webgl vertex shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
	result.push("webgl vertex shader low float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).precision);
	result.push("webgl vertex shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMin);
	result.push("webgl vertex shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMax);
	result.push("webgl fragment shader high float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision);
	result.push("webgl fragment shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMin);
	result.push("webgl fragment shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMax);
	result.push("webgl fragment shader medium float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision);
	result.push("webgl fragment shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
	result.push("webgl fragment shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
	result.push("webgl fragment shader low float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).precision);
	result.push("webgl fragment shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMin);
	result.push("webgl fragment shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMax);
	result.push("webgl vertex shader high int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).precision);
	result.push("webgl vertex shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMin);
	result.push("webgl vertex shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMax);
	result.push("webgl vertex shader medium int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).precision);
	result.push("webgl vertex shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMin);
	result.push("webgl vertex shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMax);
	result.push("webgl vertex shader low int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).precision);
	result.push("webgl vertex shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMin);
	result.push("webgl vertex shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMax);
	result.push("webgl fragment shader high int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).precision);
	result.push("webgl fragment shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMin);
	result.push("webgl fragment shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMax);
	result.push("webgl fragment shader medium int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).precision);
	result.push("webgl fragment shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMin);
	result.push("webgl fragment shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMax);
	result.push("webgl fragment shader low int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).precision);
	result.push("webgl fragment shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMin);
	result.push("webgl fragment shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMax);
	return result.join("§");
}

function testIndexedDB(){
	if(window.indexedDB != undefined){
		return true;
	}else{
		return false;
	}
}

function testAdBlock(){
	var ads = document.createElement("div");
    ads.setAttribute("id", "ads");
    document.body.appendChild(ads);
	return document.getElementById('ads')? 'no' : 'yes';
}

function Fingerprint (userAgentHttp, languagesHttp, acceptHttp, encodingHttp, connectionHttp, fontsFlash, platformFlash, widthFlash, heightFlash, languageFlash) {
	
	this._getTrueOs= function(){
    	if(this.hasLiedOs){
    		var os = guess_os(this.userAgentHttp, this.fontsFlash, this.platformFlash);
    		this.guessOs = os;
    		return os["OS"];
    	}else{
    		return getOs();
    	}
    };

    this._getTrueBrowser = function(){
    	if(this.hasLiedBrowser){
    		var browser = guess_browser(this.userAgentHttp);
    		this.guessBrowser = browser;
    		return browser["browser"];
    	}else{
    		return getBrowser();
    	}
    };

    this.hasLied = function(){
    	if(!this.hasLiedOs && !this.hasLiedBrowser && !this.hasLiedDimensions && !this.hasLiedLanguages && !this.hasLiedDate){
    		return false;
    	}else{
    		return true;
    	}
    }

    this._getFonts =function(){
    	if(this.fontsFlash.length ==0){
    		return getFontsNoFlash();
    	}else{
    		var fonts = "";
    		for(var i= 0; i < this.fontsFlash.length; i++){
    			fonts += this.fontsFlash[i].replace(" ","_");
    		}

    		return fonts;
    	}
    };

    this._getPrototypeNavigatorSorted = function(){
    	navObjectProp = [];
		for (var property in navigator) {
			navObjectProp.push(property);
		}
		navObjectProp.sort();
		navObjectSorted = "";
		for(i=0; i<navObjectProp.length; i++){
			navObjectSorted += navObjectProp[i]+", ";
		}

		return navObjectSorted;
    };

    this.isFirefox = function(){
    	return this.browser === "Firefox";
    };

    this.isChrome = function(){
    	return this.browser === "Chrome";
    };

    this.isSafari = function(){
    	return this.browser === "Safari";
    };

    this.isOpera = function(){
    	return this.browser === "Opera";
    };

    this.isIE = function(){
    	return this.browser ==="Internet Explorer";
    };

    this.isWindows = function(){
    	return this.os === "Windows";
    };

    this.isWindowsPhone = function(){
    	return this.os === "Windows Phone";
    }

    this.isLinux = function(){
    	return this.os === "Linux";
    };

    this.isAndroid = function(){
    	return this.os === "Android";
    };

    this.isMac = function(){
    	return this.os === "Mac";
    };

    this.isIOS = function(){
    	return this.os === "iOS";
    };

    this.userAgentHttp = userAgentHttp;
    this.languagesHttp = languagesHttp;
    this.acceptHttp = acceptHttp;
    this.encodingHttp = encodingHttp;
    this.connectionHttp = connectionHttp;

    this.fontsFlash = fontsFlash;
    this.platformFlash = platformFlash;
    this.widthFlash = widthFlash;
    this.heightFlash = heightFlash;
    this.languageFlash = languageFlash;
    this.resolutionFlash = this.widthFlash+"x"+this.heightFlash;

    this.hasLiedOs = !check_os(this.userAgentHttp, this.fontsFlash, this.platformFlash);
    this.hasLiedBrowser = !check_browser(this.userAgentHttp);
    this.hasLiedResolution = !check_dimensions(this.widthFlash, this.heightFlash);
    this.hasLiedLanguages = !check_languages(this.languagesHttp, this.languageFlash);
    this.hasLiedDate = !check_date();

    this.width = screen.width;
    this.height = screen.height;
    this.availWidth = screen.availWidth;
    this.availHeight = screen.availHeight;
    this.colorDepth = screen.colorDepth;
    this.pixelDepth = screen.pixelDepth;
    this.resolution = this.width+"x"+this.height+"x"+this.colorDepth;

    this.userAgent = navigator.userAgent;
    this.appName = navigator.appName;
    this.appVersion = navigator.appVersion;
    this.oscpu = navigator.oscpu;
    this.vendor= navigator.vendor;
    this.platform = navigator.platform;
    this.appCodeName = navigator.appCodeName;
    this.vendorSub = navigator.vendorSub;
    this.product = navigator.product;
    this.language = navigator.language;
    this.languages = navigator.languages.join("?");
    this.productSub = navigator.productSub;
    this.javaEnabled = navigator.javaEnabled;
    this.doNotTrack = navigator.doNotTrack;
    this.plugins = getPlugins();
    this.hasLocalStorage = testLocalStorage();
    this.hasSessionStorage = testSessionStorage();
    this.timezoneOffset = new Date().getTimezoneOffset();
    this.fonts = this._getFonts();
    this.hasCanvasJs = testCanvasJs();
    this.canvasJs = getCanvasJs();
    this.webgl = getWebGl();
    this.multipleMonitors = testMultipleMonitors();
    this.isMobileDevice = testMobileDevice();
    this.isLaptop = testLaptop();
    this.hasIndexedDb = testIndexedDB();
    this.cookie = navigator.cookieEnabled;
    this.adBlock = testAdBlock();
    this.prototypeNavigator = this._getPrototypeNavigatorSorted();

    this.guessOs = undefined;
    this.guessBrowser = undefined;

    this.os = this._getTrueOs();
    this.browser = this._getTrueBrowser();
}


