function getTxt (path) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", path, false);
	xmlhttp.send();
	if (xmlhttp.status == 200)
		return xmlhttp.responseText;
}

function testTxt () {
	alert("42");
}

function submitTxt (data) {
	
}