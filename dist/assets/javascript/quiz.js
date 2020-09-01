"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var quizArticle = document.querySelector('.quiz-article');
  var quizstart = document.querySelector('.quizStart');
  quizstart.addEventListener('click', function () {
    quizArticle.innerHTML = "\n        <section>\n        <h2>Hvorn\xE5r startede 2 verdenskrig</h2>\n    </section>\n    <section>\n        <button class=\"false\">1930</button>\n        <button class=\"false\">1933</button>\n        <button class=\"true\">1939</button>\n        <button class=\"false\">1940</button>\n        <button class=\"next\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n        </section>\n        ";
    var sandt = document.querySelector('.true');
    sandt.addEventListener('click', function () {
      sandt.style.backgroundColor = "lightgreen";
    });
    document.querySelector('.next').addEventListener('click', function () {
      if (sandt.style.backgroundColor = "lightgreen") {
        quizArticle.innerHTML = "\n                <section>\n                <h2>Hvad er 5*5+5</h2>\n            </section>\n            <section>\n                <button class=\"false\">25</button>\n                <button class=\"false\">30</button>\n                <button class=\"true\">50</button>\n                <button class=\"false\">55</button>\n                <button>N\xE6ste Sp\xF8rgsm\xE5l</button>\n                </section>\n                ";
      }
    });
  });
});