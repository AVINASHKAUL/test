function Tests(){
	
}
Tests.prototype.getTest = function () {
	console.log("testing");
};
var express = require('express');
var app = express();
app.listen(3000, function(){
	/*Tests ts = new Tests();
	ts.getTest();*/
	console.log("Testing");
});