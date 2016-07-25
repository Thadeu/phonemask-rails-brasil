/**
 * Thadeu Esteves Jr.
 * Ruby on Rails, PHP, JavaScript
 * Contato: <tadeuu@gmail.com>
 *
 * @param  {[type]} function($ [description]
 * @return {[type]}            [description]
 */
(function($){
	/**
	 * Mascara de telefone 9 digitos
	 * @return {[type]} [description]
	 */
	$.fn.phoneMask = function( options ){

		return this.each(function(){
			var

			/**
			 * Parametros defaults
			 * @type {Object}
			 */
			defaults = {},

			/**
			 * Merge das opções repassadas
			 * @param  {[type]} {}                    [description]
			 * @param  {[type]} $.fn.hilight.defaults [description]
			 * @param  {[type]} options               [description]
			 * @return {[type]}                       [description]
			 */
			opts = $.extend( {}, defaults, options ),

			/**
			 * Self Alias
			 * @param  {[type]} this [description]
			 * @return {[type]}      [description]
			 */
			$el = $(this);

			/**
			 * Seta maxlength até 15 caracteres
			 * @param  {[type]} 'maxlength' [description]
			 * @param  {[type]} '15'        [description]
			 * @return {[type]}             [description]
			 */
			$el.attr('maxlength','15');

			var render_mask = function(v){
				var v = $el.val().replace(/\D/g, "");
				v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
				v = v.replace(/(\d)(\d{4})$/, "$1-$2");
				return v;
			};

			/**
			 * Ativa Mascara a cada digito
			 * @param  {[type]} 'keyup'   [description]
			 * @param  {[type]} function( [description]
			 * @return {[type]}           [description]
			 */
			$el.on('keyup', function(e){
				var k = render_mask($el);
				$el.val(k);
			});

			var b = render_mask($el)
			$el.val(b);
		});
	} //end

	$('[data-phone-mask]').phoneMask();
})(jQuery);
