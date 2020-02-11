'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  };

  var openUserDialog = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeUserDialog = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openUserDialog();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, openUserDialog);
  });

  userDialogClose.addEventListener('click', function () {
    closeUserDialog();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  });

  var userNameInput = userDialog.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < window.wizardSetupUtils.minNameLength) {
      target.setCustomValidity(
          'Имя должно состоять минимум из ' +
          window.wizardSetupUtils.minNameLength +
          '-х символов'
      );
    } else {
      target.setCustomValidity('');
    }
  });

  var getWizards = function (count) {
    var wizardsArray = [];
    for (var i = 0; i < count; i++) {
      wizardsArray.push({
        name: window.wizardSetupUtils.getName(),
        coatColor: window.wizardSetupUtils.getCoatColor(),
        eyesColor: window.wizardSetupUtils.getEyesColor()
      });
    }
    return wizardsArray;
  };

  var wizards = getWizards(window.wizardSetupUtils.wizardsCount);

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsList.length; i++) {
      fragment.appendChild(createWizardElement(wizardsList[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards(wizards);
})();
