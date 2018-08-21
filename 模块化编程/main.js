define(function() {
	var add = function (x, y) {
		return x + y;
	};
	return {
		add: add
	};
});

require(['math'], function(math) {
	alert(math.add(1,1))
})