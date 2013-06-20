/*global define */
define(['jquery','underscore','backbone'], function () {
    'use strict';

	var trackEvent = function trackEvent(category,action,label,value){
		if(ga){
			ga('send', 'event', category, action, label, typeof(value)==="undefined"?0:value);
		}
	};
	
	return {
		trackEvent: trackEvent
	}
});