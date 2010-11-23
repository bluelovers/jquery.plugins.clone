/*
 * jQuery Form Autotabindex 1.0.2
 *
 * e.g.
 * $(document).ready(function()
 * {
 *   $('#element_1').autotabindex();
 *   $('#element_2).autotabindex();
 *   $('#element_3').autotabindex();
 *   $('#element_4').autotabindex();
 * });
 *
 * Copyright (c) David Riley 2010 http://mavoric.net.

 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

 jQuery.fn.autotabindex = function (){
	var keypressed = null;
    jQuery(this).click(function(){
		$(this).select();
	});
	jQuery(this).keyup(function(e){
		if (window.event) keycode = window.event.keyCode;
		else if (e) keycode = e.which;
	   	keypressed = keycode;
		switch(keypressed){
			// ignore the following keys
			case 9: // tab
				return false;
			case 16: // shift
				return false;
			case 20: // capslock
				return false;
			default: // any other keyup actions will trigger
			alert(keypressed);
				var maxlength = jQuery(this).attr('maxlength'); // get maxlength value
				var inputlength = jQuery(this).val().length; // get the length of the text
				if ( inputlength >= maxlength ){ // if the text is equal of more than the max length
					next = parseInt($(this).attr("tabindex"))+1;
					end = next+5;
					for(next;next<end;next++)
					{

						if($("[tabindex='"+next+"']").is(':visible'))
						{
							$("[tabindex='"+next+"']").select();
							$("[tabindex='"+next+"']").focus();
							break
						}
					}
				}
		}
	});
}