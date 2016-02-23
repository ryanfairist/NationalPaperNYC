app.controller('villiageReportController',['$scope', function($scope){
	$scope.articles=[
		//Dropdown a snip bit of the article  and click for full article..a link..-->
		{
		img: "img/doorFrontS.jpg",
		title: "Kid Builds 87th Street apt </br>with PayDough",
		author: "Greg Linkseronni"
       },
       {
        img:"img/kidsPlayS",
        title:"Man in Red or Child in Red",
        author: "Colin Taylor"
       },
       {
       	img:"img/dinoS.jpg",
       	title: "Dinos will Take Over </br> Central Park",
       	author:"Garrett Stevens"
	   },
	   {
	   	img:"img/grandCentralS.jpg",
	   	title: "Clean Car Trains</br> Do you have a ticket?",
	   	author: "Allie Levitas"
	   },
	   {
	   	img:"img/oneEuroS.jpg",
	   	title: "East Village Dollar or Euro",
	   	author: "Erin Middleton"
	   }

		]
	}]);

