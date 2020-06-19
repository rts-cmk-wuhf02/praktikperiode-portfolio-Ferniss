"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var checkValidity = function checkValidity(field) {
    console.log(field.validity);

    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {
      return;
    }

    ;
    var validity = field.validity;
    console.log(validity);

    if (validity.valid === true) {
      return;
    }

    if (validity.valueMissing) {
      return ' udfyld venligst feltet';
    }

    if (field.type === 'email') {
      return 'Indtast en korrekt email adresse.';
    }

    if (validity.patternMismatch) {
      if (field.hasAttribute('title')) {
        return field.getAttribute('title');
      } else {
        return 'Lav en rigtig mail';
      }
    }
  };

  document.addEventListener('blur', function (event) {
    if (!event.target.form.classList.contains('validate')) {
      return;
    }

    var isValid = checkValidity(event.target);
    console.log(isValid);

    if (isValid) {
      event.target.nextElementSibling.innerHTML = isValid;
    } else {
      event.target.nextElementSibling.innerHTML = "";
    }
  }, true);
});