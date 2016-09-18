var app = angular.module('AppU4bi', []);
app.controller('U4biAppController', function($scope, $http) {

	$scope.trDTO =[
			'번호',
			'이름',
			'보기'
			];

	init();

	function init(){
		selects();
		alert("dd");
		OpenAngularSelectDivisionTag(false);
	}
	
	$scope.select = function (id){
		select(id);
		OpenAngularSelectDivisionTag(true);
	}

	$scope.exitSelect = function (){
		selects();
		OpenAngularSelectDivisionTag(false);
	}

//----------------------------------------------------------------------------------

	function selects(){
		$http.get("ajax/selects.php").success(function(data){
			$scope.players = data;
		});
	}

	function select(id){
		$http.get("ajax/select.php?p_id="+id).success(function(data){
			$scope.player = data;
		});
	}
	
	function OpenAngularSelectDivisionTag(bool){
		if(bool == true){
			$scope.isSelect = true;
			$scope.isList = false;
		}else{
			$scope.isSelect = false;
			$scope.isList = true;
		}
	}
	
	
});