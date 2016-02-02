'use strict';

angular
	.module('dctMacApp')
	.directive('popoverInit', ['$timeout', '$compile', PopoverInit]);

function PopoverInit($timeout, $compile) {
	return {
		link: function($scope, element, attrs) {
			$scope.$on('dataloaded', function() {
				$timeout(function() {

					for (var i = 0; i < $scope.mc.entries.length; i++) {
						for (var j = 0; j < $scope.mc.entries[i].seniority_levels.length; j++) {
							var index = $scope.mc.entries[i].seniority_levels[j]
							var name = index.name;
							var curTitle = index.title;

							var selector = 'td[title=' + name + ']';	// "Title" in this case is the popover's title
							var options = {
								container: '#popoverContainer',
								html: true,
								placement: 'auto',
								content: '<div id="popover-content">' + 
											index.full_description +
											'<button class="btn btn-primary">' +
												'Request More Information!' + 
											'</button>' +
											'</div>'
							};

							$(selector).popover(options)
								.on('shown.bs.popover', function () {
									$('#popoverContainer button').on('click', function() {
										var curTitle = $('.curTitle').html();
										var name = $('.popover-title').html();
										$scope.mc.learnMore(name, curTitle)
									});
								});

						}
					}
				});
			});
		}
	}
}
