'use strict';

(function () {
  var SIMILAR_WIZARDS_COUNT = 4;

  var loadedWizards = [];

  var similarList = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var createWizard = function (wizard) {
    var wizardTemplate = similarWizardTemplate.cloneNode(true);

    wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardTemplate;
  };

  var onSuccessLoad = function (wizards) {
    loadedWizards = wizards.map(function (item) {
      return item;
    });
    updateSimilarWizards(window.designWizard.eyeColor, window.designWizard.coatColor);
  };

  window.backend.load(onSuccessLoad, window.backend.error);

  var removeSimilarWizards = function () {
    var similarWizards = similarList.querySelectorAll('setup-similar-item');
    similarWizards.forEach(function (item) {
      item.remove();
    });
  };

  var renderWizards = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > SIMILAR_WIZARDS_COUNT ? SIMILAR_WIZARDS_COUNT : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(createWizard(data[i]));
    }
    similarList.appendChild(fragment);
  };

  var getRank = function (wizard, eyeColor, coatColor) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyeColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateSimilarWizards = window.debounce(function (eyeColor, coatColor) {
    removeSimilarWizards();

    renderWizards(loadedWizards.sort(function (left, right) {
      var rankDiff = getRank(right, eyeColor, coatColor) - getRank(left, eyeColor, coatColor);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  });

  window.setupSimilar = {
    updateSimilarWizards: updateSimilarWizards
  };
})();
