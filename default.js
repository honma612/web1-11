var num = Math.floor(Math.random()*11);
var ans= parseInt(window.prompt('0~10の数字を入力'));
var mes;

while(ans != num){
  if(ans === num){
    mes = 'あたり';
  }
  else if(ans > num){
    ans = parseInt(window.prompt('もっと小さいです\n0~10の数字を入力'));
  }
  else if(ans < num){
    ans = parseInt(window.prompt('もっと大きいです\n0~10の数字を入力'));
  }
  else{
    ans = parseInt(window.prompt('数字を入力してください\n0~10の数字を入力'));
  }
}

document.getElementById('choice').textContent = mes;
