var update_attr = function (attr, value) {
  "use strict";

  attr = attr || "";
  var select = "input[name='attr[" + attr + "]']";
  $(select).val(value);
};

var update_sheet = function (character) {
  "use strict";

  var i, attrs;

  attrs = [
    "ST", "DX", "IQ", "HT",
    "HP", "FP", "will",
    "basicMove", "basicSpeed", "dodge",
    "perception",
    "vision", "hearing", "tasteSmell", "touch"
  ];

  for (i in attrs) {
    update_attr(attrs[i], character.getAttribute(attrs[i]));
  }
};

var add_listeners = function (character) {
  "use strict";

  $("#attributes").on("change", function (event) {
    var el, attrName, attr;

    event.stopPropagation();
    el = event.target || event.srcElement;
    attrName = el.getAttribute("name").split('[')[1].split(']')[0];

    attr = {};
    attr[attrName] = el.value;
    character.setAttribute(attr);
    update_sheet(character);
  });
};

$(function () {
  "use strict";

  var character, getAttribute, setAttribute;

  character = new GURPS.Character();

  update_sheet(character);
  add_listeners(character);
});
