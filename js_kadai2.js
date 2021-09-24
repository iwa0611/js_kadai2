let num = "";

function add1(){
  document.result.calc.value = add(1);
}

function add2(){
  document.result.calc.value = add(2);
}

function add3(){
  document.result.calc.value = add(3);
}

function add4(){
  document.result.calc.value = add(4);
}

function add5(){
  document.result.calc.value = add(5);
}

function add6(){
  document.result.calc.value = add(6);
}

function add7(){
  document.result.calc.value = add(7);
}

function add8(){
  document.result.calc.value = add(8);
}

function add9(){
  document.result.calc.value = add(9);
}

function add0(){
  document.result.calc.value = add(0);
}

function add00(){
  document.result.calc.value = add(00) + 0;
}



//その他のキー
function add_plus(){
  $(document).ready(function(){
   let a = $("#window").text(sum);
   console.log(a);
  });
  document.result.calc.value = add(num) + "+";
}

function add_minus(){
  document.result.calc.value = add(num) + "-";
}

function add_times(){
  document.result.calc.value = add(num) + "*";
}

function add_divide(){
  document.result.calc.value = add(num) + "/";
}

function add_dot(){
  document.getElementById(".").disabled = true;
  document.result.calc.value = add(num) + ".";
}

function add_AC(){
  document.result.calc.value = "";
}

function add_EQ(){
  result.value = new Function("return " + sum)();
  return document.result.calc.value = result.value;
}


//計算枠に数字・記号を追加
function add(num){
  return sum = document.result.calc.value + num;
}