function filterProjects() {
		var filterValue = document.getElementById("filter").value.toUpperCase();
		var projectList = document.getElementById("projectList");
		var projects = projectList.getElementsByTagName("li");
	
	for (var i = 0; i < projects.length; i++) {
		var projectText = projects[i].textContent || projects[i].innerText;
		if (projectText.toUpperCase().indexOf(filterValue) > -1) {
			projects[i].style.display = "";
		} else {
			projects[i].style.display = "none";
		}
	}
}
