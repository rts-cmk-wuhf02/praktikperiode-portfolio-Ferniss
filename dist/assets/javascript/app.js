"use strict";

document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector('nav').style.padding = "5px";
      document.querySelector('.logo').style.fontSize = "30px";
      document.querySelector('nav').style.backgroundColor = "black";
      document.querySelector('.nav_wrapper').style.backgroundColor = "lightgrey";
    } else {
      document.querySelector('nav').style.padding = "25px";
      document.querySelector('.logo').style.fontSize = "25px";
      document.querySelector('nav').style.backgroundColor = "white";
      document.querySelector('.nav_wrapper').style.backgroundColor = "white";
    }
  }

  var search = document.querySelector('.search_icon');
  search.addEventListener('click', function () {
    var search_panel = document.querySelector('.search_panel');

    if (search_panel.classList.contains('hidden')) {
      search_panel.classList.replace('hidden', 'visible');
    } else if (search_panel.classList.contains('visible')) {
      search_panel.classList.replace('visible', 'hidden');
    }
  });
  var drobdown = document.querySelector('.dropdown');
  var subul = document.querySelector('.subul');
  drobdown.addEventListener('mouseover', function (event) {
    console.log(event.target);

    if (subul.classList.contains('ease_out')) {
      console.log('test');
      subul.classList.replace('ease_out', 'ease_in');
    } else {
      subul.classList.add('ease_in');
    }

    drobdown.addEventListener('mouseout', function (event) {
      subul.removeAttribute("style");
      subul.classList.replace('ease_in', 'ease_out');
    });
  });
});