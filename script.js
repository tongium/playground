var main = function() {
	var snow=0;
	var num = 77;
	var x = 0;
	var y = 0;
	var c = $('#canv');
	for (var i = 0;i < num; i++) {
		c.append('<div class="snow"></div>');
	}	
	
	$(document).mousemove(function(e){
		x = e.pageX;
		y = e.pageY;
	});
	
	$(document).on('touchmove', function(e) {
		x = e.pageX;
		y = e.pageY;
	})
	
	var fall = function (obj) {
		
		var size = ((Math.random() * 2)+0.2);
		var size_shadow = size/2;
		var directionX = ((Math.random() * 100)+1) - ((Math.random() * 100)+0);
		var directionY = ((Math.random() * 100)+1) - ((Math.random() * 100)+0);
		var speed = (size*1000);
		var toX = (((Math.random() * 100)+1) > 50 ? '-' : '+');
		var toY = (((Math.random() * 100)+1) > 50 ? '-' : '+');
		var r = Math.floor((Math.random() * 200)+100);
		var g = Math.floor((Math.random() * 200)+100);
		var b = Math.floor((Math.random() * 255)+200); 
		
		obj.css("top",y+"px");
		obj.css("left",x+"px");
		obj.css( "width", size + "em" );
		obj.css( "height", size + "em" );
		obj.css( "background", "rgb("+r+","+g+","+b+")" );
		obj.css( "box-shadow", 0+"em "+0+"em "+size_shadow+"em rgb("+r+","+g+","+b+")" );
		
		var size_out = ((Math.random() * 5)+0.1);
		var size_shadow_out = size/2;
		
			obj.animate ({
				left: toX+'='+directionX+'%',
				top: toY+'='+directionY+'%',
				opacity: Math.random()+0.3,
				width: size_out+"em",
				height: size_out+"em"
			}, speed, 'linear', 
				function()  {		
									obj.animate ({
									left: x+'px',
									top: y+'px',
									opacity: Math.random()+0.3,
									width: size+"em",
									height: size+"em"
								}, speed, 'linear', 
									function()  {	
											fall(obj);		
									});	

				});	
	};
			
	function loop() {
		$( ".snow" ).each(function( ) {
			fall($(this));
		});
    }
	
    loop();
}

main();
