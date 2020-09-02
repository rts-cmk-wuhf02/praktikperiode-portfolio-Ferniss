"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Det her er her hvor jeg laver start knappen til at virke
  var quizArticle = document.querySelector('.quiz-article');
  var quizstart = document.querySelector('.quizStart');
  quizstart.addEventListener('click', function () {
    //her får det første spørgsmål frem når man trykker på start på knappen
    quizArticle.innerHTML = "\n        <section>\n        <h2>Hvorn\xE5r startede 2 verdenskrig</h2>\n    </section>\n    <section>\n        <button class=\"false\">1930</button>\n        <button class=\"false\">1933</button>\n        <button class=\"true\">1939</button>\n        <button class=\"false\">1940</button>\n        <button class=\"next1\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n        </section>\n        "; //Her får jeg det rigtige svar til at blive blot

    var sandt = document.querySelector('.true');
    var falsk = document.querySelectorAll('.false');
    sandt.addEventListener('click', function () {
      sandt.style.backgroundColor = "lightgreen";

      if (sandt.style.backgroundColor = "lightgreen") {
        falsk.forEach(function (elements) {
          elements.disabled = true;
        });
      }
    });
    falsk.forEach(function (element) {
      element.addEventListener('click', function () {
        element.style.backgroundColor = "red";

        if (element.style.backgroundColor = "red") {
          falsk.forEach(function (elements) {
            elements.disabled = true;
            sandt.disabled = true;
          });
        }
      });
    }); //Her starter det andet spørgsmål

    document.querySelector('.next1').addEventListener('click', function () {
      if (sandt.style.backgroundColor = "lightgreen") {
        quizArticle.innerHTML = "\n                <section>\n                <h2>Hvad er 5*5+5</h2>\n            </section>\n            <section>\n                <button class=\"false\">25</button>\n                <button class=\"false\">30</button>\n                <button class=\"false\">55</button>\n                <button class=\"true\">50</button>\n                <button class=\"next2\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                </section>\n                "; // her bliver det rigtige svar blåt

        var _sandt = document.querySelector('.true');

        _sandt.addEventListener('click', function () {
          _sandt.style.backgroundColor = "lightgreen";
        });
      } // Her starter spørgsemål nr 3


      document.querySelector('.next2').addEventListener('click', function () {
        if (sandt.style.backgroundColor = "lightgreen") {
          quizArticle.innerHTML = "\n                    <section>\n                    <h2>Hvad er h2o</h2>\n                </section>\n                <section>\n                    <button class=\"true\">vand</button>\n                    <button class=\"false\">ild</button>\n                    <button class=\"false\">jord</button>\n                    <button class=\"false\">luft</button>\n                    <button class=\"next2\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                    </section>\n                    "; // her bliver det rigtige svar blåt

          var _sandt2 = document.querySelector('.true');

          _sandt2.addEventListener('click', function () {
            _sandt2.style.backgroundColor = "lightgreen";
          });
        }
      });
    });
  });
});