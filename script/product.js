var arrB = document.getElementsByClassName("brace");
var arrE = document.getElementsByClassName("earring");
var arrR = document.getElementsByClassName("ring");
var arrN = document.getElementsByClassName("necklace");

var el_b = document.getElementById("braces");
var el_e = document.getElementById("earrings");
var el_r = document.getElementById("rings");
var el_n = document.getElementById("necklaces");

el_b.addEventListener("click", boxCheck);
el_e.addEventListener("click", boxCheck);
el_r.addEventListener("click", boxCheck);
el_n.addEventListener("click", boxCheck);

function boxCheck() {
  if (
    (document.getElementById("braces").checked ||
      document.getElementById("necklaces").checked ||
      document.getElementById("rings").checked ||
      document.getElementById("earrings").checked) == true
  ) {
    if (!document.getElementById("braces").checked) {
      for (var i = 0; i < arrB.length; i++) {
        document.getElementsByClassName("brace")[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < arrB.length; i++) {
        document.getElementsByClassName("brace")[i].style.display = "flex";
      }
    }
    if (!document.getElementById("necklaces").checked) {
      for (var i = 0; i < arrN.length; i++) {
        document.getElementsByClassName("necklace")[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < arrN.length; i++) {
        document.getElementsByClassName("necklace")[i].style.display = "flex";
      }
    }
    if (!document.getElementById("rings").checked) {
      for (var i = 0; i < arrR.length; i++) {
        document.getElementsByClassName("ring")[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < arrR.length; i++) {
        document.getElementsByClassName("ring")[i].style.display = "flex";
      }
    }
    if (!document.getElementById("earrings").checked) {
      for (var i = 0; i < arrE.length; i++) {
        document.getElementsByClassName("earring")[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < arrE.length; i++) {
        document.getElementsByClassName("earring")[i].style.display = "flex";
      }
    }
  } else {
    for (var i = 0; i < arrB.length; i++) {
      document.getElementsByClassName("brace")[i].style.display = "flex";
    }
    for (var i = 0; i < arrN.length; i++) {
      document.getElementsByClassName("necklace")[i].style.display = "flex";
    }
    for (var i = 0; i < arrR.length; i++) {
      document.getElementsByClassName("ring")[i].style.display = "flex";
    }
    for (var i = 0; i < arrE.length; i++) {
      document.getElementsByClassName("earring")[i].style.display = "flex";
    }
  }
}
