			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1'});
				$(".group").colorbox({rel:'group2', slideshow:true, transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"fade", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".forgot-password").colorbox({iframe:true, innerWidth:425, innerHeight:290});
				$(".faculty-popup").colorbox({iframe:true, innerWidth:700, innerHeight:490});
				$(".faculty-popup2").colorbox({iframe:true, innerWidth:1000, innerHeight:600});
				$(".iframe").colorbox({iframe:true, width:"20%", height:"80%"});
				$(".director").colorbox({iframe:true, innerWidth:850, innerHeight:450});
				$(".sendenquiry").colorbox({iframe:true, width:"40%", height:"65%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});