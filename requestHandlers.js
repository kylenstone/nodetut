var querystring = require("querystring");

//var exec = require("child_process").exec;

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit Your Text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
 	response.write(body);
	response.end();
  }

    /* exec("find /", {
	timeout: 10000, maxBuffer: 20000*1024 },
	function (error, stdout, stderr) {
		response.writeHead(200);
		response.write(stdout);
		response.end();
	}); */

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plan"});
  response.write("Printing input: "+
  querystring.parse(postData).text);
  response.end();
  }

function contact(response) {
	console.log("Request handler 'contact' was called.");
	response.writeHead(200);
	response.write("We will get back to you shortly.");
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.contact = contact;
