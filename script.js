//Angular containers
(function() {
	var app = angular.module('questionnaire', []);

	app.controller('QuestionCtrl', function($scope)
	{
		$scope.questions = [
			{
				id: "0",
				title: "Question 1",
				type: "radio",
				text: "How many weeks a year do you spend on vacation?",
				responses: ["None", "0-1", "0-2", "0-3", "4 or more"]
			},
			{
				id: "1",
				title: "Question 2",
				type: "radio",
				text: "How happy are you with the current inflight customer service?",
				responses: ["Very Happy", "Happy", "Unhappy", "Displeased"]
			},
			{
				id: "2",
				title: "Question 3",
				type: "textarea",
				text: "This is a test of the form functiton",
				responses: [""]
			}
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
				};
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

	//inflight-questions.html Directives
	app.directive("questionRadio", function()
	{
		return {
			restrict: "E",
			teamplateUrl: "question-radio.html"
		};
	});

	app.directive("questionTextArea", function()
	{
		return {
			restrict: "E",
			teamplateUrl: "question-text-area.html"
		};
	});
})();