(function(){
	angular.module("hrm_test",[])
	.controller("MainController",["$scope","$http",
		function($scope,$http){
		var Q = null
        $scope.chapters = [{
            "id": 1,
            "selected":true
        },{
        	"id": 2,
        	"selected":false
        },{
          "id": 7,
          "selected":false
        },{
          "id":8,
          "selected":false
        },{
          "id":9,
          "selected":false
        }];

        $scope.NextQuestion = function(){
        	$scope.Answer = null
	        var len = $scope.chapters.length;
	        checked = []
	        for(i = 0; i < len; i++){
	        	if($scope.chapters[i]["selected"] == true){
	        		checked.push($scope.chapters[i]["id"])
	        	}
	        }
	        var chpt = checked[Math.floor(Math.random() * checked.length)]
      		Q = Questions[chpt][Math.floor(Math.random() * Questions[chpt].length )]
      		$scope.Question = Q["Q"]
      		$scope.A = Q["A"]
      		$scope.B = Q["B"]
      		$scope.C = Q["C"]
      		$scope.D = Q["D"]
      		$scope.E = Q["E"]
      		$scope.correct = Q["Ans"]
  		}

  		$scope.ans = function(answer){
  			if (Q["Ans"] === answer){
  				$scope.feedback = "CORRECT"
  			}else{
  				$scope.feedback = "WRONG"
  			}
  		}
}])
}())