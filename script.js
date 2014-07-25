//Angular containers
(function() {
	var app = angular.module('questionnaire', []);

	app.controller('QuestionController', function()
	{
		this.questions = [
			{
				title: 'Question 1',
				text: 'Exmple text before responses',
				reponse:
				[
					'This is example text for question 1.',
					'This is example text for question 2 not question 1',
					'More typing for example data kill me plz'
				]
			},
			{
				title: 'Question 2',
				text: 'Example text before responses',
				response:
				[
					'Test data 1 for question 2 part 2'
				]
			},
		];
	});

	app.directive('inflightQuestions', function()
	{
		return {
			restrict: 'E',
			templateUrl: 'inflight-questions.html'
		};
	});

	app.directive('inflightIntroduction', function()
	{
		return {
			restrict: 'E',
			templateURL: 'inflight-introduction.html'
		};
	});
})();