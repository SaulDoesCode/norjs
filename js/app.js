// adding a event to an element with an id
nor.event("#someId", ["click"], [clickFunction]);

// adding multiple functions with multiple triggers
nor.event("#someId", ["mouseenter", "click"], [someFunction, clickFunction]);

// it works also with ".classes"
nor.event(".button", ["mouseenter", "click"], [someFunction, clickFunction]);

// and HTML Elements
nor.event(document, ["DOMContentLoaded"], [init]);

// or with a Collection of HTML Elements  (anonymous functions work too)
var myInputs = document.getElementsByTagName("input");
nor.event(myInputs, ["focus", "input", "blur"], [focusFunction, inputFunction, function(e) {
  // do something when the input element loses focus
  console.log("focus loss");
}]);

function clickFunction() {
	console.log("click function triggerd");
}


function someFunction() {
	console.log("somefunction triggered");
}

function init() {
	console.log("init triggered");
}

function focusFunction() {
	console.log("focusFunction triggered");
}


function inputFunction() {
	console.log("inputFunction triggered");
}

var myBigTitle = nor.createObject("h1", {textContent: "An awesome title"});


var myContainer = nor.createObject("div", {id: "main-container", 
                                          class: "container flex", 
                                          'data-somedata':12,
                                          child: myBigTitle,
                                          parent: document.body
                                          }, "background-color:red;color:yellow");

var subTitle = nor.createObject("h2", {textContent: "A subtitle", parent: myContainer});

// this results in such a DOM =>

/*
* <div id="main-container" class="flex container" data-somedata="12" style="background-color:red;color:yellow">
*	<h1>An awesome title</h1>
*	<h2>A subtitle</h2>
* </div>
*/