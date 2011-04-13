/**
 * removeSpaces
 * @param string */

function removePontuaction(string) {
	var _string = string;
	return _string.replace(/[-. ]/g,"");
}

function removeAllButNumbers(string,decimal) {
	var regex = '[^';

	if (decimal){
		regex = regex + decimal;
	}

	regex = regex+ '\\d]';

	var re = new RegExp(regex, "g");
	return string.replace(re,"");
}

/**
 * formatarDecimal
 * @param arg1 */

function format(number,options) {

	var _number = removeAllButNumbers(number,options.decimal);
	var decimal_char = options.decimal;
	var grouping_char = options.grouping;
	var decimal;
	var integer;

	var position = _number.lastIndexOf(decimal_char);
	
	if (position >-1){
		decimal = _number.substr(position +1);
		integer = Number(_number.substr(0,position));
	}else{
		decimal = '';
		integer = Number(_number);
	}
	
	var times = options.fractional+1 - decimal.length;

	if (times <0){
		times = 0;
	}
	
	var completation = (new Array(times).join('0'));	
	decimal  = (decimal + completation);

	
	var _integer = '';
	var _array = (integer + '').split('');
	
	var count = 0;
	
	while(_array.length >0 ){
		count ++;
		if (count == 4){
			count = 1;
			_integer = _array.pop() + grouping_char + _integer;
		}else{
			_integer = _array.pop() + _integer;
		}
	}

	return _integer + decimal_char + decimal.substr(0,options.fractional) ;
}

(function(jQuery) {
    
    $.fn.formatNumber = function(options){
        var _options = {decimal:',', grouping:'.',fractional:6};
        if (options){
            _options = options;
        }
        
        var number = $(this).val();
        if (number){
            var result = format(number,_options);
            $(this).val(result);
        }
    };
          
 })(jQuery);
