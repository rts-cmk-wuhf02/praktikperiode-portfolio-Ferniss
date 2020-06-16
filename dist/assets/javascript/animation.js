"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var text = document.querySelector('.text');
  var newDom = '';
  var animationDelay = 6;

  for (var i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for (var _i = 0; _i < length; _i++) {
    text.children[_i].style['animation-delay'] = animationDelay * _i + 'ms';
  }

  AOS.init({
    duration: 2000
  });
});