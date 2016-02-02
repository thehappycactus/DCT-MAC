'use strict'

angular
	.module('dctMacApp')
	.factory('Mail', ['$resource', Mail]);

function Mail($resource) {
	return $resource(
		'http://api.digitalandcreativetalent.com/mac/entries',
		[],
		{ post: {
			method: 'POST',
			isArray: false
		}});
}