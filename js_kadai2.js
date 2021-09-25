
let sum = "";


function add1(){
  add(1);
}

function add2(){
  add(2);
}

function add3(){
  add(3);
}

function add4(){
  add(4);
}

function add5(){
  add(5);
}

function add6(){
  add(6);
}

function add7(){
  add(7);
}

function add8(){
  add(8);
}

function add9(){
  add(9);
}

function add0(){
  add(0);
}

function add00(){
  document.result.calc.value = add(00) + "0";
}



//その他のキー(+)
function add_plus(){
  check_plus();
}

function check_plus(){
  let a = document.result.calc.value.slice(-1);
  if(a == "/"){
   return
 }else if(a == "-"){
   return
 }else if(a == "*"){
   return
 }else if(a == "."){
   return
 }else if(a != "+"){
   document.result.calc.value = sum + "+";
 }
 }




//その他のキー(-)
function add_minus(){
  check_minus();
}

function check_minus(){
  let a = document.result.calc.value.slice(-1);
  if(a == "/"){
   return
 }else if(a == "+"){
   return
 }else if(a == "*"){
   return
 }else if(a == "."){
   return
 }else if(a != "-"){
   document.result.calc.value = sum + "-";
 }
}



//その他のキー(*)
function add_times(){
  check_times();
}

function check_times(){
  let a = document.result.calc.value.slice(-1);
  if(a == "/"){
   return
 }else if(a == "+"){
   return
 }else if(a == "-"){
   return
 }else if(a == "."){
   return
 }else if(a != "*"){
   document.result.calc.value = sum + "*";
 }
}




//その他のキー(/)
function add_divide(){
  check_divide();
}

function check_divide(){
  let a = document.result.calc.value.slice(-1);
  if(a == "*"){
   return
 }else if(a == "+"){
   return
 }else if(a == "-"){
   return
 }else if(a == "."){
   return
 }else if(a != "/"){
   document.result.calc.value = sum + "/";
 }
}



//その他のキー(.)
function add_dot(){
  check_dot();
}

function check_dot(){
  let a = document.result.calc.value.slice(-1);
  if(a == "*"){
   return
 }else if(a == "+"){
   return
 }else if(a == "-"){
   return
 }else if(a == "/"){
   return
 }else if(a != "."){
   document.result.calc.value = sum + ".";
 }
}



//all clear
function add_AC(){
  document.result.calc.value = "";
  sum = "";
}


//演算
function add_EQ(){
  result.value = new Function("return " + sum)();
  sum = result.value;
  return document.result.calc.value = result.value;
}


//計算枠に数字・記号を追加
function add(num){
   sum  = document.result.calc.value + num;
  return  document.result.calc.value = sum;
}

