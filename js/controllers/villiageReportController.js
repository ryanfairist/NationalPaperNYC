app.controller('villiageReportController',['$scope', function($scope){
	$scope.articles=[
		//Dropdown a snip bit of the article  and click for full article..a link..-->
		{
		img: "img/doorFrontS.jpg",
		title: "Kid Builds 87th Street Apt with PayDough",
		author: "Greg Linkseronni"
       },
       {
        img:"img/kidsPlayS.jpg",
        title:"Man in Red or Child in Red",
        author: "Colin Taylor"
       },
       {
       	img:"img/dinoS.jpg",
       	title: "Dinos will Take Over Central Park",
       	author:"Garrett Stevens"
	   },
	   {
	   	img:"img/grandCentralS.jpg",
	   	title: "Clean Car Trains Do you have a ticket?",
	   	author: "Allie Levitas"
	   },
	   {
	   	img:"img/oneEuroS.jpg",
	   	title: "East Village Dollar or Euro",
	   	author: "Erin Middleton"
	   }

		]

		//$scope.today=new Date();
	}]);


