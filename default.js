var num = Math.floor(Math.random()*11);
var ans= parseInt(window.prompt('0~10の数字を入力'));

while(ans != num){
  if(ans > num){
    ans = parseInt(window.prompt('もっと小さいです\n0~10の数字を入力'));
  }
  else if(ans < num){
    ans = parseInt(window.prompt('もっと大きいです\n0~10の数字を入力'));
  }
  else{
    ans = parseInt(window.prompt('数字を入力してください\n0~10の数字を入力'));
  }
}

Click(){
  var target = docment.getElementById("out");  
  var select = docment.getElementById("sel");
  switch(select.selectedIndex){
    case 0:
      target.innerHTML = "ありがとう<br/>";
      break;
    case 1:
      target.innerHTML = "よかった<br/>";
      break;
    case 2:
      target.innerHTML = "うん<br/>";
      break;
    case 3:
      target.innerHTML = "ごめんね<br/>";
      break;
    case 4:
      target.innerHTML = "ゆるして<br/>";
      break;
                             }
}

var mes;
mes = 'あたり';

document.getElementById('choice').textContent = mes;
