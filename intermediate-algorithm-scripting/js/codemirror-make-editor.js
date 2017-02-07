"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

CodeMirror.defaults.lineNumbers = true;
CodeMirror.defaults.matchBrackets = true;
var txtArea = document.querySelector("textarea.cm");
var cm = CodeMirror.fromTextArea(txtArea);

function getURL(url) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function () {
    if (req.status < 400) {
      var response = req.responseText;
      var cmInstance = cm;
      cmInstance.doc.setValue(response);
      var outputDiv = document.querySelector('.output-div');
      outputDiv.innerHTML = '';
      outputDiv.setAttribute('class', "output-div modal hide");
      outputDiv.setAttribute('style', 'z-index:99;');
      document.querySelector('.run-button').setAttribute('class', "run-button runcode card4 list-item");
    } else {
      document.querySelector('.output-div').innerHTML = new Error("Request failed: " + req.statusText);
    }
  });
  req.addEventListener("error", function () {
    document.querySelector('.output-div').innerHTML = new Error("Network error");
  });
  req.send(null);
}

var runButton = document.createElement("button");
runButton.textContent = ">_ run the code";
runButton.className = "run-button runcode card4 list-item hide";
runButton.cmInstance = cm;
runButton.onclick = runner;
document.querySelector(".butt").appendChild(runButton);

function init() {
  var outputHeight = txtArea.parentNode.dataset.outputHeight;
  var outputDiv = document.createElement("div");
  outputDiv.className = "output-div hide";
  outputDiv.id = 'outPut';
  outputDiv.cmInstance = cm;
  outputDiv.style.height = outputHeight;
  txtArea.parentNode.appendChild(outputDiv);
}

function closeXXX() {
  var xxx = document.querySelector('.output-div');
  xxx.style.display = 'none';
  xxx.innerHTML = "";
}

function runner() {
  var getElemStmt = 'var outputDiv = document.getElementById("hello").lastChild;\n\n';
  var code = getElemStmt + this.cmInstance.getValue();
  var scpt = document.createElement("script");
  scpt.textContent = code;
  document.body.appendChild(scpt);
  var closeX = document.createElement('span');
  closeX.className = "closebtn display-topright";
  closeX.innerHTML = '&nbsp;&times;&nbsp;';
  closeX.setAttribute('onclick', 'closeXXX();');
  closeX.setAttribute('style', 'z-index:9999;');
  document.querySelector('.output-div').appendChild(closeX);
}

function print(args) {
  if (outputDiv.classList.contains("hide")) {
    outputDiv.classList.remove("hide");
  }

  var para = [];

  for (var i = 0; i < args.length; i++) {
    console.trueLog('PARA', args[i]);
    para += format(args[i]);
    para += ' ';
  }

  var modalContent = document.createElement('div');
  modalContent.innerHTML = para;
  modalContent.className = "modal-content card-2";

  outputDiv.style.display = 'block';
  outputDiv.appendChild(modalContent);
}

function format(item) {
  if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
    if (item.length) {
      // item is an array or arraylike object
      var str = "[";
      for (var i = 0; i < item.length; i++) {
        str += format(item[i]);
        if (i < item.length - 1) {
          str += ", ";
        }
      }
      str += "]";
      return str;
    } else {
      // some other kind of object
      var str = "{";
      for (var prop in item) {
        str += prop + ": " + format(item[prop.toString()]) + ", ";
      }
      if (str.length > 2) {
        str = str.slice(0, str.length - 2);
        str += "}";
      }
      return str;
    }
  } else {
    return item;
  }
}

console.trueLog = console.log; // monkey-patch console.log()
console.log = function () {
  print(arguments);
  console.trueLog.apply(this, arguments);
};

init();