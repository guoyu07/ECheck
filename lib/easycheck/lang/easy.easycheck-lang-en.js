/**
 * jQuery EasyCheck Plugin
 * 
 * Version 4.0.0
 * 
 * http://easyproject.cn
 * https://github.com/ushelp/EasyCheck
 * 
 * Copyright 2014 Ray [ inthinkcolor@gmail.com ]
 * 
 * Dependencies: EasyCheck
 * 
 */
$(function(){
	if (EasyCheck) {
		/*
		 * I18N Resources
		 * */
		EasyCheck.msg = {
				required:"Is required",
			     email:"Invalid email",
			     url:"Invalid url",
			     number:"Invalid number",
			     integer:"Invalid integer",
			     equalto:"Didn't match input",
			     equallength:"length  has to be {0}",
			     lengthrange:"Please use between {0} and {1} characters",
			     minlength:"Use at least {0} characters",
			     maxlength:"Must have at most {0} characters",
			     numberrange:"Value is between{0}and{1}",
			     min:"The minimum value of {0}",
			     max:"The maximum value of {0}",
			     regexp:"Invalid value",
			     extension:"Invalid extension,only {0}",
			     vc:"Didn't match the word verification"
		};
	}
});