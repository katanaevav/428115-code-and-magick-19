'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandom = function (maxValue) {
  return Math.floor(Math.random() * Math.floor(maxValue));
};

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_NAMES_COUNT = 7;

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COAT_COLORS_COUNT = 5;

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var EYES_COLORS_COUNT = 4;

var WIZARDS_COUNT = 4;

var generateName = function (namesList, surnamesList, namesCount) {
  return namesList[getRandom(namesCount)] + ' ' + surnamesList[getRandom(namesCount)];
};

var generateColor = function (colorsList, colorsCount) {
  return colorsList[getRandom(colorsCount)];
};

var getWizards = function (wizardsCount) {
  var wizardsArray = [];
  for (var i = 0; i < wizardsCount; i++) {
    wizardsArray[i] = {
      name: generateName(NAMES, SURNAMES, WIZARDS_NAMES_COUNT),
      coatColor: generateColor(COAT_COLORS, COAT_COLORS_COUNT),
      eyesColor: generateColor(EYES_COLORS, EYES_COLORS_COUNT)
    };
  }
  return wizardsArray;
};

var wizards = getWizards(WIZARDS_COUNT);

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var putWizards = function (wizardsList) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList[i]));
  }

  similarListElement.appendChild(fragment);
};

putWizards(wizards);

var setupSimilar = document.querySelector('.setup-similar');

setupSimilar.classList.remove('hidden');
