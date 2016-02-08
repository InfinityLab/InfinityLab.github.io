(function(){
	angular.module("hrm_test",[])
	.controller("MainController",["$scope","$http",
		function($scope,$http){
    $scope.show_c = 0;
    $scope.show_q = 0;
		var Q = null
        $scope.mistake = []; // list of questions that is answered wroing


        $scope.chapters = [{ // chapter selected
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
        },{
          "id":10,
          "selected":false
        }];

        $scope.NextQuestion = function(){ // when Next Question Button is clicked
        	$scope.Answer = null
	        var len = $scope.chapters.length; 
	        checked = []// selected chapters
	        for(i = 0; i < len; i++){
	        	if($scope.chapters[i]["selected"] == true){
	        		checked.push($scope.chapters[i]["id"])
	        	}
	        }
	        chpt = checked[Math.floor(Math.random() * checked.length)]// random a chapter
          qst = Math.floor(Math.random() * Questions[chpt].length )// random a question number
      		Q = Questions[chpt][qst] // get question
      		$scope.Question = Q["Q"] 
      		$scope.A = Q["A"]
      		$scope.B = Q["B"]
      		$scope.C = Q["C"]
      		$scope.D = Q["D"]
      		$scope.E = Q["E"]
      		$scope.correct = Q["Ans"]
  		}

  		$scope.ans = function(answer){ // when a answer radio is selected
  			if (Q["Ans"] === answer){
  				$scope.feedback = "CORRECT"
  			}else{
  				$scope.feedback = "WRONG"
          var stored = false;
          for (var i = 0; i < $scope.mistake.length; i++) { // if answered wrong, add this question to mistake list
            if($scope.mistake[i]["chapter"] == chpt && $scope.mistake[i]["question"] == qst){ // check if it is already sotred in mistake list
              stored = true;
            }
          };

          if(!stored) $scope.mistake.push({"chapter":chpt, "question":qst, "text":$scope.Question})// add it to the list if not aleready stored
  			}
  		}

      $scope.show_qst = function (c,q){ //show question text when mouse hover
        console.log($scope.show_c+ " "+ c)
        console.log($scope.show_q+ " "+ q)
        $scope.show_c = c;
        $scope.show_q = q;
        console.log($scope.show_c+ " "+ c)
        console.log($scope.show_q+ " "+ q)
      }
      $scope.hide_qst = function (){ // hide text when mouse leave
        $scope.show_c = 0;
        $scope.show_q = 0;
      }
      $scope.show = function(c,q){ // check if the text should be showed or not
        console.log($scope.show_c+ " "+ c)
        return $scope.show_c === c && $scope.show_q === q;
      }

      $scope.ToQst = function(c,q){ // when questions in mistake list is clicked, jump to that question
          chpt = c;
          qst = q;
          Q = Questions[c][q]
          $scope.Question = Q["Q"]
          $scope.A = Q["A"]
          $scope.B = Q["B"]
          $scope.C = Q["C"]
          $scope.D = Q["D"]
          $scope.E = Q["E"]
          $scope.correct = Q["Ans"]
          $scope.Answer = null; // set answer to NULL;
      }
}])
}())