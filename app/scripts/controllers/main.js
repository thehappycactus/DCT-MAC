'use strict';

/**
 * @ngdoc function
 * @name dctMacApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dctMacApp
 */
angular
	.module('dctMacApp')
	.controller('MainCtrl', ['$scope', 'MacEntry', 'Mail', MainCtrl]);

function MainCtrl($scope, MacEntry, Mail) {
	var vm = this;
	vm.entries = null;

	vm.message = {
		name: '',
		email: '',
		subject: '',
		phoneNumber: '',
		body: '',
	}

	vm.learnMore = learnMore;
	vm.sendMail = sendMail;

	MacEntry.get().$promise.then(
		function (data) {
			vm.entries = data;
			$scope.$broadcast('dataloaded');
		});

	// Called when the user clicks on a Candidate's "Request More Info" button
	// Hides the popover and displays the modal with the Candidate's name.
	function learnMore(name, curTitle) {
		$scope.$apply(function() {
			vm.message.body = "I'd like to learn more about " + name + " (" + curTitle + "), please.";
			vm.message.subject = 'Information Request: ' + name;	
		});

		$('.popover').popover('hide');
		$('#candidateLearnMore').modal('show');
	}

	// Called when the user clicks "Send" on the "Request More Info" modal.
	function sendMail() {

		Mail.post(message).$promise.then(
			function (data) {

			});
	}
};
