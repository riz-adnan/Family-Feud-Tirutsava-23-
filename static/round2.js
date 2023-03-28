const A = [11, 12, 13, 14, 15, 16, 17, 18]; // put your options here
const B = [21, 22, 23, 24, 25, 26, 27, 28];
const C = [31, 32, 33, 34, 35, 36, 37, 38];

let current = A;
let qdis = "Question 1";

let check1 = 0,
  check2 = 0,
  check3 = 0,
  check4 = 0,
  check5 = 0,
  check6 = 0,
  check7 = 0,
  check8 = 0;

function initialize() {
  document.getElementById("qdisplay").innerHTML = qdis;
  document.getElementById("text1").innerHTML = current[0];
  document.getElementById("text2").innerHTML = current[1];
  document.getElementById("text3").innerHTML = current[2];
  document.getElementById("text4").innerHTML = current[3];
  document.getElementById("text5").innerHTML = current[4];
  document.getElementById("text6").innerHTML = current[5];
  document.getElementById("text7").innerHTML = current[6];
  document.getElementById("text8").innerHTML = current[7];
}

initialize();

function change() {
  var e = document.getElementById("ques");
  var value = e.value;
  qdis = value;

  console.log(value);

  if (value == "Question 1") {
    current = A;
  }

  if (value == "Question 2") {
    current = B;
  }

  if (value == "Question 3") {
    current = C;
  }

  for(var i=0;i<8;i++) {
    id = "text" + (i+1);
    var a = document.getElementById(id);
    a.style.display = "none";
  }

  check1 = 0,
  check2 = 0,
  check3 = 0,
  check4 = 0,
  check5 = 0,
  check6 = 0,
  check7 = 0,
  check8 = 0;

  initialize();
}

function display_opt(id) {
  var a = document.getElementById(id);
  if (id == "text1" && check1 == 0) {
    a.style.display = "block";
    check1 = 1;
  } else if (id == "text1" && check1 == 1) {
    a.style.display = "none";
    check1 = 0;
  }
  if (id == "text2" && check2 == 0) {
    a.style.display = "block";
    check2 = 1;
  } else if (id == "text2" && check2 == 1) {
    a.style.display = "none";
    check2 = 0;
  }
  if (id == "text3" && check3 == 0) {
    a.style.display = "block";
    check3 = 1;
  } else if (id == "text3" && check3 == 1) {
    a.style.display = "none";
    check3 = 0;
  }
  if (id == "text4" && check4 == 0) {
    a.style.display = "block";
    check4 = 1;
  } else if (id == "text4" && check4 == 1) {
    a.style.display = "none";
    check4 = 0;
  }
  if (id == "text5" && check5 == 0) {
    a.style.display = "block";
    check5 = 1;
  } else if (id == "text5" && check5 == 1) {
    a.style.display = "none";
    check5 = 0;
  }
  if (id == "text6" && check6 == 0) {
    a.style.display = "block";
    check6 = 1;
  } else if (id == "text6" && check6 == 1) {
    a.style.display = "none";
    check6 = 0;
  }
  if (id == "text7" && check7 == 0) {
    a.style.display = "block";
    check7 = 1;
  } else if (id == "text7" && check7 == 1) {
    a.style.display = "none";
    check7 = 0;
  }
  if (id == "text8" && check8 == 0) {
    a.style.display = "block";
    check8 = 1;
  } else if (id == "text8" && check8 == 1) {
    a.style.display = "none";
    check8 = 0;
  }
}
