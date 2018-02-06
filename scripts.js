var names = [];
var number = 1;
function getRandom(min, max) {
  return Math.floor( Math.random()  * (max-min + 1)) + min;
}
var colorNew1 ;
var colorNew2 ;
var colorNew3 ;
var myColor ;
var colorClassName;


$(function () {
  $( ".color-names" ).sortable();

  $(".adding_button").click(function () {
    var span = document.createElement("SPAN");
    var t = document.createTextNode(number);
      span.appendChild(t);
      document.body.appendChild(span);
    var inp = document.createElement("INPUT");
    var attInp = document.createAttribute("class");
      attInp.value = "inputNumber" + number;
      document.body.appendChild(inp);
      inp.setAttributeNode(attInp);
     var div = document.createElement("DIV");
      div.appendChild(span);
      div.appendChild(inp);
      document.body.appendChild(div);
      number = number + 1;

    if (number == 8 ) {
      var addBut = document.createElement("BUTTON");
      var t2 = document.createTextNode("DISPLAYING");
      var att = document.createAttribute("class");
      var att2 = document.createAttribute("disabled");
      att.value = "display_button";
      document.body.appendChild(addBut);
      addBut.appendChild(t2);
      addBut.setAttributeNode(att);
      addBut.setAttributeNode(att2);
      $(".display_button").appendTo($(".displaying"));
      $(".display_button").click(function () {
        for (var i = 0; i < number - 1; i++) {
          colorClassName = ".color" + i;
          colorNew1 =  getRandom(0,255);
          colorNew2 =  getRandom(0,255);
          colorNew3 =  getRandom(0,255);

          myColor = "rgb(" + colorNew1 + "," + colorNew2 + "," + colorNew3 + ")";

          var myP = document.createElement("P");
          var myPName = document.createTextNode(names[i]);
          var colorClass = document.createAttribute("class");
          
          colorClass.value = "username color" + i;
          myP.appendChild(myPName);
          myP.setAttributeNode(colorClass);
          $('.color-names').append(myP);
          $(colorClassName).css("color", myColor );
        }
      });
    }
  })

  $("body").change(function () {
    var classInput = ".inputNumber" + 1;
    for (var i = 0; i < number-1; i++) {
      names[i] = $(classInput).val();
      classInput = ".inputNumber" + (2 + i);
      if (names[i] == 0) {
        break;
      }
      else if (i == number - 2)  {
        $(".display_button").attr("disabled", false)
      }
    }
  });
});
