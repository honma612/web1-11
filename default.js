var num = Math.floor(Math.random()*11);
var ans;
var mes;

while(ans != num){
ans = parseInt(window.prompt('0~10の数字を入力'));
if(ans === num){
  mes = 'あたり';
}
else if(ans > num){
  mes = 'もっと小さいです';
}
else if(ans < num){
  mes = 'もっと大きいです';
}
else{
  mes = '数字を入力してください';
}
}

document.getElementById('choice').textContent = mes;
