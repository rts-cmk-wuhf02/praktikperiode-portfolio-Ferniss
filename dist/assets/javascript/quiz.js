"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var quizArticle = document.querySelector('.quiz-article');
  var quizstart = document.querySelector('.quizStart');
  quizstart.addEventListener('click', function () {
    quizArticle.innerHTML = "\n        <section>\n        <h2>Hvorn\xE5r startede 2 verdenskrig</h2>\n    </section>\n    <section>\n        <p>1930</p>\n        <p>1933</p>\n        <p>1939</p>\n        <p>1940</p>\n        </section>\n        <button>N\xE6ste sp\xF8rgsm\xE5l</button>\n        ";
  });
});