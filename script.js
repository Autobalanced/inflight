//Angular containers
(function() {
	var app = angular.module('questionnaire', []);

	app.controller('QuestionCtrl', function($scope)
	{
		$scope.questions = [
			{
				id: "0",
				title: "Question 1",
				text: "How many weeks a year do you spend on vacation?",
				response1: "None.",
				response2: "0-1",
				response3: "1-2",
				response4: "3 or more"
			},
			{
				id: "1",
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
			templateUrl: "inflight-questions.html",
			//tab enabled questions (Needs a limiter on number of tabs tied to questions.length)
			controller: function() {
				this.tab = 0;

				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};

				this.setTab = function(activeTab) {
					this.tab = activeTab;
				};

				this.upTab = function(tab) {
					this.tab++;
				};

				this.downTab = function(tab) {
					this.tab--;
				}
			},
			controllerAs: "tab"
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