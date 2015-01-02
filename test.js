function getTime(){
	dd = new Date();
		yy = dd.getYear();
		mm = dd.getMonth() + 1;
		DD = dd.getDate();
		Hh = dd.getHours();
		Mm = dd.getMinutes();
		Sc = dd.getSeconds();
		if (yy < 2000) { yy += 1900; }			
		if (mm < 10) { mm = "0" + mm; }
		if (DD < 10) { DD = "0" + DD; }
		if (Hh < 10) { Hh = "0" + Hh; }
		if (Mm < 10) { Mm = "0" + Mm; }
		if (Sc < 10) { Sc = "0" + Sc; }
	return "#"+yy + "/" + mm + "/" + DD +"_"+ Hh +":"+ Mm +":"+ Sc +"_";
}
google.load("visualization", "1", {packages:["corechart"]});

$(document).ready(function(){
var namearray = ['りんごサイダー','ミルクティー','キャラメル','いちごミルク','じんじゃえーる'];

	function getData(){
		if(window.localStorage){
		var a0 = localStorage.getItem("key1").split(namearray[0]).length-1;
		var a1 = localStorage.getItem("key1").split(namearray[1]).length-1;
		var a2 = localStorage.getItem("key1").split(namearray[2]).length-1;
		var a3 = localStorage.getItem("key1").split(namearray[3]).length-1;
		var a4 = localStorage.getItem("key1").split(namearray[4]).length-1;
			$('#history').text(localStorage.getItem("key1"));
			$('#a0').text(a0);
			$('#a1').text(a1);
			$('#a2').text(a2);
			$('#a3').text(a3);
			$('#a4').text(a4);
		var data = google.visualization.arrayToDataTable([
          ['種類', '個数'],
          ['りんごサイダー',	eval(a0)],
          ['ミルクティー',	eval(a1)],
          ['キャラメル',		eval(a2)],
          ['いちごミルク',	eval(a3)],
          ['じんじゃえーる',	eval(a4)]
        ]);

        var options = {
		  //is3D:true,
          title: ' '
        };
    
            var chart = new google.visualization.PieChart(document.getElementById('gct_sample_column2'));
            chart.draw(data, options);
		}
	}
	
	getData();
		
	$('.saveButton0').click(function(){
		var name = namearray[0];
		if(window.localStorage){
			var Time = getTime();
			var line = localStorage.getItem("key1")+Time+name+"\n";
			localStorage.setItem("key1", line);
			$('#a0').text(localStorage.getItem("key1").split(name).length-1);
		}
		getData();
	});
	
	$('.saveButton1').click(function(){
		var name = namearray[1];
		if(window.localStorage){
			var Time = getTime();
			var line = localStorage.getItem("key1")+Time+name+"\n";
			localStorage.setItem("key1", line);
			$('#a1').text(localStorage.getItem("key1").split(name).length-1);
		}
		getData();
	});
	
	$('.saveButton2').click(function(){
		var name = namearray[2];
		if(window.localStorage){
			var Time = getTime();
			var line = localStorage.getItem("key1")+Time+name+"\n";
			localStorage.setItem("key1", line);
			$('#a2').text(localStorage.getItem("key1").split(name).length-1);
		}
		getData();
	});
	
	$('.saveButton3').click(function(){
		var name = namearray[3];
		if(window.localStorage){
			var Time = getTime();
			var line = localStorage.getItem("key1")+Time+name+"\n";
			localStorage.setItem("key1", line);
			$('#a3').text(localStorage.getItem("key1").split(name).length-1);
		}
		getData();
	});
	
	$('.saveButton4').click(function(){
		var name = namearray[4];
		if(window.localStorage){
			var Time = getTime();
			var line = localStorage.getItem("key1")+Time+name+"\n";
			localStorage.setItem("key1", line);
			$('#a4').text(localStorage.getItem("key1").split(name).length-1);
		}
		getData();
	});
	
	$('.removeButton').click(function(){

		if(window.localStorage){
		var Storage = localStorage.getItem("key1").substring(0,localStorage.getItem("key1").lastIndexOf("\n#"))+"\n";
		localStorage.setItem("key1", Storage);
		}
		getData();
	});
	
	$('#resetButton').click(function(){
		if(window.localStorage){
		localStorage.setItem("key1","");
		$('#a0').text(localStorage.getItem("key1").split(namearray[0]).length-1);
		$('#a1').text(localStorage.getItem("key1").split(namearray[1]).length-1);
		$('#a2').text(localStorage.getItem("key1").split(namearray[2]).length-1);
		$('#a3').text(localStorage.getItem("key1").split(namearray[3]).length-1);
		$('#a4').text(localStorage.getItem("key1").split(namearray[4]).length-1);
		}
		getData();
	});
});