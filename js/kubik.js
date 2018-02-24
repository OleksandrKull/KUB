	
	 $(document).ready(function() 
	 {
	  	var kol = 1;
	  	$("#Play").one("click", function play()
	  	{ 
	  		var i = 0;
  			var sc = 0;
  			function kubikiRandom() 
  			{ 
	    		if (i%3 == 0)	
	    		{
	      		//Каждый раз мы генерируем новые координаты
				$("#kubik-1").attr({x:Math.random()*95+"%", y:Math.random()*550, fill:"red"});
				$("#kubik-2").attr({x:Math.random()*95+"%", y:Math.random()*550, fill:"green"});
				$("#kubik-3").attr({x:Math.random()*95+"%", y:Math.random()*550, fill:"yellow"});
	    		$("#kubik-1").show();
	    		$("#kubik-2").show();
	    		$("#kubik-3").show();
	    		}
	    	};
	    	kubikiRandom();
		  	// убивает кубики
		    $("#kubik-1").on("click", function()
		    {
			    $("#kubik-1").hide();
		      	// Добавим +1 к счетчику очков
		      	sc++;
		      	// с помощью переменной i мы знаем когда снова отобразить все кубики
		      	i++;
		    	$(".Score").html(sc);
		    	kubikiRandom();
	   		});
	    	$("#kubik-2").on("click", function()
	    	{
			 	$("#kubik-2").hide();
		      	sc++;
		      	i++;;
		    	$(".Score").html(sc);
		    	kubikiRandom();
	    	});
	   		$("#kubik-3").on("click", function()
	   		{
		      	$("#kubik-3").hide();
		      	sc++;
		     	i++;
		    	$(".Score").html(sc);
		    	kubikiRandom();
	    	});
		 	// Таймер	http://sergey-oganesyan.ru/javascript-s-primerami/kak_sozdat_taymer_obratnogo_otscheta_dlya_sayta.html
			function timer()
			{
			    var second = document.getElementById('second').innerHTML;
			    if( second > 0 )	
			    {
			    	 second--;
			    	 document.getElementById('second').innerHTML = second;

			    }	else 	
			    {
			    	clearInterval(intervalID);
			        var Name = prompt(" Score: "+sc+"\n\nYour Name:", '');
			        //Запись в таблицу	http://qaru.site/questions/458/add-table-row-in-jquery
			        $("#table").find('tbody')
				    	.append($('<tr>')
				            .append($('<th>')
				                .attr('scope', 'row')
				                .text(kol)
				            )
				            .append($('<td>')
				            	.text(Name)
				            )
				            .append($('<td>')
				            	.text(sc)
				            )
				        );
				    kol++;
				    $("#kubik-1").hide();
			        $("#kubik-2").hide();
			        $("#kubik-3").hide();
			        $("#Play").one("click", function()	{
			        	clearInterval(intervalID);
			        	sc = 0;
				    	$(".Score").html(sc);
				    	i = 0;
			        	document.getElementById('second').innerHTML = 60;
				    	play();
		        	});
			    }

			    //функция restart
			    $("#Restart").on("click", function()	{
			    	sc = 0;
			    	$(".Score").html(sc);
			    	i = 0;
			    	clearInterval(intervalID);
		        	document.getElementById('second').innerHTML = 60;
			    	play();
				});
			}
			window.intervalID = setInterval(timer, 1000);
	    }); 	
	});
	    