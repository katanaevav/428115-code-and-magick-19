'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  var coatColor = '#6589a4';
  var eyeColor = '#000000';

  setupSimilar.classList.remove('hidden');

  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    coatColor = window.wizardSetupUtils.getCoatColor();
    var coatColorInput = userDialog.querySelector('.setup-coat-color');
    wizardCoat.style.fill = coatColor;
    coatColorInput.value = coatColor;
    window.setupSimilar.updateSimilarWizards(eyeColor, coatColor);
  };

  var onWizardEyesClick = function () {
    eyeColor = window.wizardSetupUtils.getEyesColor();
    var eyeColorInput = userDialog.querySelector('.setup-eyes-color');
    wizardEyes.style.fill = eyeColor;
    eyeColorInput.value = eyeColor;
    window.setupSimilar.updateSimilarWizards(eyeColor, coatColor);
  };

  var onFireballClick = function () {
    var generatedColor = window.wizardSetupUtils.getFireballColor();
    var fireballColorInput = userDialog.querySelector('.setup-fireball-color');
    fireball.style.backgroundColor = generatedColor;
    fireballColorInput.value = generatedColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);

  wizardEyes.addEventListener('click', onWizardEyesClick);

  fireball.addEventListener('click', onFireballClick);

  window.designWizard = {
    coatColor: coatColor,
    eyeColor: eyeColor
  };
})();
