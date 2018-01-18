(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click' , function(){
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '大吉';　// 5%
    } else if (n < 0.15) {
      this.textContent = '中吉';  // 10%
    } else if (n < 0.3) {
      this.textContent = '小吉'; // 15%
    } else if (n < 0.55) {
      this.textContent = '吉'; // 25%
    } else if (n < 0.75) {
      this.textContent = '末吉'; // 20%
    } else if (n < 0.9) {
      this.textContent = '凶'; // 15%
    } else {
      this.textContent = '大凶'; // 10%
    }
    /*var results = ['大吉 ', '中吉', '中吉',  '凶', '末吉', '末吉', '小吉', '小吉'];
    var n = Math.floor(Math.random() * results.length);
    this.textContent = results[n];*/

    // switch文
    /* switch (n) {
      case 0:
      this.textContent = '大吉';
      break;
      case 1:
      this.textContent = '中吉';
      break;
      case 2:
      this.textContent = '凶';
      break;
    } */

    // if文
  /*  if (n === 0){
      this.textContent = '大吉';
    } else if (n === 1){
      this.textContent = '中吉';
    } else  {
      this.textContent = '凶';
    } */
  });
  btn.addEventListener('mousedown' , function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup' , function(){
    this.className = ' ';
  });
})();
