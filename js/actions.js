

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

		JPLoad.getTemplate('templates/fifth.html', function (response) {
			JPLoad.loadTemplate(response, 'fifth-div');

			//Added listener for click on the documenation button
			document.getElementById('documentation').onclick = function () {
				JPLoad.getTemplate('templates/documentation.html', function (response) {
					document.getElementById('skeleton').className += 'hidden';

					var docElement = document.getElementById('documentation-div');
					docElement.className = docElement.className.replace("hidden", "").trim();
					docElement.innerHTML = response;

					//As we add the template documentation, we also add a listener for the go back button
					document.getElementById('go-back').onclick = function () {
						document.getElementById('documentation-div').className += 'hidden';

						var skeletonElement = document.getElementById('skeleton');
						skeletonElement.className = skeletonElement.className.replace("hidden", "").trim();
					}; 		
				});
			}; 
		});
	}
});