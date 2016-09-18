/*
create table user_table(
	id int primary key auto_increment
	, name varchar(24) not null
	, age int(2) not null
);

insert into user_table (name, age) values ('유명재', 12);
insert into user_table (name, age) values ('유명훈', 13);
insert into user_table (name, age) values ('유명남', 11);

*/
var app = angular.module('AppU4bi', []);
app.controller('U4biAppController', function($scope, $http) {

	$scope.trDTO =[
			'번호',
			'이름',
			'나이',
			'보기'
			];

	init();

	function init(){
		selects();
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
		if(bool){
			$scope.isSelect = true;
			$scope.isList = false;
		}else{
			$scope.isSelect = false;
			$scope.isList = true;
		}
	}
	
	
});
