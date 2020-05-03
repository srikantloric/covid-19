document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// $.ajax({
//  		url : "https://api.covid19api.com/summary",
 		
//  		dataType : "JSON",
//  		success : function(data){
//  			console.log(data);
//  			console.log(data.Global);

 			// $.each(data.Global, function(key,value){
 			// 	console.log(key +":"+value);
 			// 	$("#global-wise").append("<tr><td>" + key +"</td><td>"+ value +"</td></tr>")

 				
 			// });


//  		}


//  	})

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "8139f35ce2msh77383ede63b3bc4p1c38acjsn6203e6922ba8"
	}
}

$.ajax(settings).done(function (data) {
	console.log(data.world_total);
	console.log(data);
	
	 			
 				console.log(data.world_total.total_cases);
 				$("#active_cases").html("Active Cases :"+data.world_total.active_cases)
                 
                $("#new_cases").html("New Cases : "+data.world_total.new_cases)
                 
                $("#new_deaths").html("New Deaths: "+data.world_total.new_deaths)
                 
                $("#total_cases").html("<b>Total Cases :</b> "+data.world_total.total_cases)
                 
                $("#new_deaths").html("New Deaths : "+data.world_total.new_deaths)
                 
                $("#total_deaths").html("Total Deaths : "+data.world_total.total_deaths)
                 
                $("#total_recovered").html("Total Recovered : "+data.world_total.total_recovered)

                $("#btn_india").click(function(){
                	var data_india = data.countries_stat[15]
	                console.log(data_india);
                      

                $(".heading").html("INDIA")
                $("#active_cases").html("Active Cases : "+data_india.active_cases)
                 
                $("#new_cases").html("New Cases : "+data_india.new_cases)
                 
                $("#new_deaths").html("New Deaths: "+data_india.new_deaths)
                 
                $("#total_cases").html("<b>Total Cases : </b>"+data_india.cases)
                 
                $("#new_deaths").html("New Deaths : "+data_india.new_deaths)
                 
                $("#total_deaths").html("Total Deaths : "+data_india.deaths)
                 
                $("#total_recovered").html("Total Recovered : "+data_india.total_recovered)


                })





                $('#btn_world').click(function() {
                         location.reload();
                             });
                 });
