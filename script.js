var chatMark = 0;

function chat() {
	setInterval(updateChat, 500);
}

function updateChat() {
	// the first line of the text is the mark. it helps sync the messages.
	var messageArray = getTxt("test.txt").split("\n");
	var dataMark = parseInt(messageArray[0]);
	messageArray.shift();
	
	var updateLines = [];
	var updateChatLog = "";
	if (dataMark != chatMark && (dataMark - chatMark) <= messageArray.length) {
		for (i = chatMark - 1; i <= dataMark - 1; i++)
		{
			updateLines.push(messageArray[i]);
		}
		updateChatLog = '\n' + updateLines.toString().replace(/,/g, '');
	}
	chatMark = dataMark;
	document.getElementById("box").innerHTML += updateChatLog;
}

function getTxt (path) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", path, false);
	xmlhttp.send();
	if (xmlhttp.status == 200)
		return xmlhttp.responseText;
}

function testTxt () {
	return "42";
}

function submitTxt () {
	var inputData = document.getElementById("input").value;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "test.txt", false);
	xmlhttp.send(inputData);
	
}
