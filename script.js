//Angular containers
(function() {
	var app = angular.module('questionnaire', []);

	app.controller('QuestionCtrl', function($scope)
	{
		$scope.questions = [
			{
				title: "Question 1",
				text: "Example text before responses",
				response1: "This is example text for question 1.",
				response2: "This is response text for question 1.",
				response3: "Do you feel lucky punk?.",
				response4: "Test response text 4."
			},
			{
				title: "Question 2",
				text: "How happy are you with the current inflight customer service?",
				response1: "Very Happy",
				response2: "Happy",
				response3: "Unhappy",
				response4: "Displeased"
			},
		];
	});

	app.directive("inflightQuestions", function()
	{
		return {
			restrict: "E",
			templateUrl: "inflight-questions.html"
		};
	});

	app.directive("inflightIntroduction", function()
	{
		return {
			restrict: "E",
			templateUrl: "inflight-introduction.html"
		};
	});
})();