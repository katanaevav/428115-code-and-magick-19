'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  setupSimilar.classList.remove('hidden');

  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  var clickOnWizardCoat = function () {
    var generatedColor = window.wizardSetupUtils.getCoatColor();
    var coatColorInput = userDialog.querySelector('.setup-coat-color');
    wizardCoat.style.fill = generatedColor;
    coatColorInput.value = generatedColor;
  };

  var clickOnWizardEyes = function () {
    var generatedColor = window.wizardSetupUtils.getEyesColor();
    var coatColorInput = userDialog.querySelector('.setup-eyes-color');
    wizardEyes.style.fill = generatedColor;
    coatColorInput.value = generatedColor;
  };

  var clickOnFireball = function () {
    var generatedColor = window.wizardSetupUtils.getFireballColor();
    var fireballColorInput = userDialog.querySelector('.setup-fireball-color');
    fireball.style.backgroundColor = generatedColor;
    fireballColorInput.value = generatedColor;
  };

  wizardCoat.addEventListener('click', function () {
    clickOnWizardCoat();
  });

  wizardEyes.addEventListener('click', function () {
    clickOnWizardEyes();
  });

  fireball.addEventListener('click', function () {
    clickOnFireball();
  });
})();
