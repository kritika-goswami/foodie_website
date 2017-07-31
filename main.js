var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',//yha login.html wale page ka link hai or unke controoler
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',//yha main.html wale page ka link hai or unke contrroler
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',//yha resturant.html wale page ka link hai or unke controller
		controller: 'restaurantController'
	})
	.when('/fav', {
		templateUrl: 'pages/fav.html',//yha fav.html wale page ka link hai or unke controller
		controller: 'favController'
	})
})
<!--------------------------------------------------------main controller ka kam or detail of restaurants------------------------------------------------------------>	

foodieApp.controller('mainController',function($scope) {
	
    $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id:'1',
		bestDish: {
		name: 'biscuit dish',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
  {
	name: 'CCD',
	address: ' Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'coffe, Bar',
	vote: '5.2',
	cuisines: 'Modern Indian',
	cost: '2500',
	id:'2',
		bestDish: {
		name: 'tastty food',
		image: 'http://www.sjstudios.co.uk/food/images/salmon.jpg'
	},
	hours: '12 Noon to 4 AM (Mon-Sun)',
	image: 'http://www.sjstudios.co.uk/food/images/salmon.jpg'
},
{
	name: 'Rajesthani',
	address: 'baddi sai road, Inner Circle, Connaught Place',
	location: 'BADDI',
	category: ' Dining,fast' ,
	vote: '8.9',
	cuisines: 'Modern Indian',
	cost: '22000',
	id:'3',
		bestDish: {
		name: 'healthy food',
		image: 'http://i.huffpost.com/gen/697373/images/o-FOOD-TRUCK-SECRETS-facebook.jpg'
	},
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'http://i.huffpost.com/gen/697373/images/o-FOOD-TRUCK-SECRETS-facebook.jpg'
},
{
	name: 'Doon',
	address: 'rajputana place kangra, Inner Circle, Connaught Place',
	location: 'KANGRA',
	category: ' Dinner,fast,lunch' ,
	vote: '6.9',
	cuisines: 'Modern Indian',
	cost: '500',
	id:'4',
	bestDish: {
		name: 'indian food',
		image: 'https://blogs-images.forbes.com/nickpassmore/files/2015/08/tandori-credit-Getty-Images.jpg'
	},
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'http://blogs.uoregon.edu/houzhi/files/2014/04/2013-12-27-food12-q9m0rj.jpg'
},
{
	name: 'AFC',
	address: 'nalagrh , Inner Circle, Connaught Place',
	location: 'SOLAN',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '1000',
	id:'5',
	bestDish: {
		name: 'roler',
		image: 'https://www.bodybuilding.com/images/2015/December/is-mexican-food-healthy_05.jpg'
	},
	
	hours: '10 AM to 1 AM (Mon-Sun)',
	image: 'https://www.bodybuilding.com/images/2015/December/is-mexican-food-healthy_05.jpg'
}]

})                
    <!----------------------------------------------------------------------------main controler detail of res end----------------------------------------------------->                              
<!----------------------------------------favController ka kam or detail uski start-------------------------------------------------------------------------->
foodieApp.controller('favController',function($scope,$location,$http) {

                                  

	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{
							id: 1,
							bestDish: {
										name: 'Bean Salad',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
							image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
								},

            image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
										},

                image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
                    }]



						$scope.lists1 = [
						{'vl' : 'vegetable'},
						{'vl' : 'almond'},
						{'vl' : 'corn'},
						{'vl' : 'milk'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//
					$scope.lists2 = [
					{'vl' : 'meat'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'lettuce'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};


								$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key a83cf33d81ca4f71ae7f18345e7b8ab0',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})
<!---------------------favController end---------------------------------------------------------------------------------------------->
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')
	}
})
<!------------------------------restaurant controoler ka kam yha se start hota hai-------------------------------------------------->
   foodieApp.controller('restaurantController',function($scope,$location,$routeParams,$http) {
	                               $scope.gettofav = function(){
									   $location.url('fav')
									   console.log($location.url);
								   }

   	$scope.ingredients = [];
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id:'1',
		bestDish: {
		name: 'biscuit dish',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
  {
	name: 'CCD',
	address: ' Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'coffe, Bar',
	vote: '5.2',
	cuisines: 'Modern Indian',
	cost: '2500',
	id:'2',
		bestDish: {
		name: 'tastty food',
		image: 'http://www.sjstudios.co.uk/food/images/salmon.jpg'
	},
	hours: '12 Noon to 4 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Rajesthani',
	address: 'baddi sai road, Inner Circle, Connaught Place',
	location: 'BADDI',
	category: ' Dining,fast' ,
	vote: '8.9',
	cuisines: 'Modern Indian',
	cost: '22000',
	id:'3',
	bestDish: {
		name: 'healthy food',
		image: 'http://i.huffpost.com/gen/697373/images/o-FOOD-TRUCK-SECRETS-facebook.jpg'
	},
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'http://i.huffpost.com/gen/697373/images/o-FOOD-TRUCK-SECRETS-facebook.jpg'
},
{
	name: 'Doon',
	address: 'rajputana place kangra, Inner Circle, Connaught Place',
	location: 'KANGRA',
	category: ' Dinner,fast,lunch' ,
	vote: '6.9',
	cuisines: 'Modern Indian',
	cost: '500',
	id:'4',
	bestDish: {
		name: 'indian food',
		image: 'https://blogs-images.forbes.com/nickpassmore/files/2015/08/tandori-credit-Getty-Images.jpg'
	},
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'http://blogs.uoregon.edu/houzhi/files/2014/04/2013-12-27-food12-q9m0rj.jpg'
},
{
	name: 'AFC',
	address: 'nalagrh , Inner Circle, Connaught Place',
	location: 'SOLAN',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '1000',
	id:'5',
	bestDish: {
		name: 'roler',
		image: 'https://www.bodybuilding.com/images/2015/December/is-mexican-food-healthy_05.jpg'
	},
	hours: '10 AM to 1 AM (Mon-Sun)',
	image: 'https://www.bodybuilding.com/images/2015/December/is-mexican-food-healthy_05.jpg'
}]

	$scope.restaurant = restaurants[$routeParams.id - 1];
	
	$scope.getIngredients = function(url) {
											var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		                               $http({
				'method': 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
				'Authorization': 'Key eeab6be54c7d4136acf2cb0624a05010',
				'Content-Type': 'application/json'
				 },
                 'data': data,
				//success: function (response) {
					//var ingredients = response.outputs[0].data.concepts;
            //var list = '';
            //for (var i =0;i < ingredients.length;i++) {
                //list += '<div class="ingredient">' + ingredients[i].name + '</div>'
           // }
            //$('.ingredients').html(list);
				//},
				//error: function (xhr) {
					//console.log(xhr);
				//}
			}).then(function success(response) {
				 		var ingredients = response.data.outputs[0].data.concepts;
            var list = '';
						   for (var i =0;i < ingredients.length;i++) {
					$scope.ingredients.push(ingredients[i].name);
					}
				  }, function error(xhr) {
					console.log(xhr);
				  });	
											}
})
<!--------------------------restaurant controller ka kam khatm huya---------------------------------------->