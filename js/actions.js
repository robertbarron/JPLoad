

var hook = document.getElementById('app');
JPLoad.getTemplate('templates/skeleton.html', function (response) {
	if (response) {
		hook.innerHTML = response;
		
		JPLoad.getTemplate('templates/first.html', function (response) {
			JPLoad.loadTemplate(response, 'first-div');
		});

		JPLoad.getTemplate('templates/second.html', function (response) {
			JPLoad.loadTemplate(response, 'second-div');
		});

		JPLoad.getTemplate('templates/third.html', function (response) {
			// JPLoad.loadTemplate(response, 'third-div', {'method':'POST', 'whara':'this'});
			JPLoad.loadTemplate(response, 'third-div');
		});

		JPLoad.getTemplate('templates/fourth.html', function (response) {
			JPLoad.loadTemplate(response, 'fourth-div');
		});
	}
});