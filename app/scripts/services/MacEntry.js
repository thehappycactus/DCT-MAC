'use strict';

angular
	.module('dctMacApp')
	.factory('MacEntry', ['$resource', MacEntry]);

function MacEntry($resource) {
	return $resource(
		'http://api.digitalandcreativetalent.com/mac/entries',
		[],
		{ get: {
			method: 'GET',
			isArray: true,
			transformResponse: function(data, headersGetter) {
				var jsonData = JSON.parse(data);

				for (var i = 0; i < jsonData.length; i ++) {
					for (var j = 0; j < jsonData[i].seniority_levels.length; j++) {
						// "full_description" is a new property that converts each cv_description item 
						// into an HTML unorganized list
						jsonData[i].seniority_levels[j].full_description = 
							'<p><strong>Current Title: </strong>' + 
							'<span class="curTitle">' + jsonData[i].seniority_levels[j].title + '</span>' +
							'</p><ul>';

						for (var k = 0; k < jsonData[i].seniority_levels[j].cv_descriptions.length; k ++) {
							var value = jsonData[i].seniority_levels[j].cv_descriptions[k];

							jsonData[i].seniority_levels[j].full_description += '<li>' + value + '</li>';
							
						}

					jsonData[i].seniority_levels[j].full_description += 
						'</ul>' +
						'<p><strong>Fun Fact</strong>: ' + jsonData[i].seniority_levels[j].factoid + '</p>';
					
					}
				}

				return jsonData;
			}
		}});
}