

var hook = document.getElementById('app');

JPLoad.getView('templates/skeleton.html', function (response) {
	if (response) {
		hook.innerHTML = response;
		
		JPLoad.getView('templates/first.html', function (response) {
			JPLoad.loadView(response, 'first-div');
		});

		JPLoad.getView('templates/second.html', function (response) {
			JPLoad.loadView(response, 'second-div');
		});

		JPLoad.getView('templates/third.html', function (response) {
			// JPLoad.loadTemplate(response, 'third-div', {'method':'POST', 'whara':'this'});
			JPLoad.loadView(response, 'third-div');
		});

		JPLoad.getView('templates/fourth.html', function (response) {
			JPLoad.loadView(response, 'fourth-div');
		});
		JPLoad.getView('templates/node-ready.html', function (response) {
			JPLoad.loadView(response, 'node-ready');
		});
		JPLoad.getView('templates/fifth.html', function (response) {
			JPLoad.loadView(response, 'fifth-div');

			//Added listener for click on the documenation button
			document.getElementById('documentation').onclick = function () {
				JPLoad.getView('templates/documentation.html', function (response) {
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