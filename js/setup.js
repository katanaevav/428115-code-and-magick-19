'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandom = function (fromValue, toValue) {
  return Math.floor(fromValue + Math.random() * (toValue + 1 - fromValue));
};

var generateName = function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  return NAMES[getRandom(0, 7)] + ' ' + SURNAMES[getRandom(0, 7)];
};

var generateCoatColor = function () {
  var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return COLORS[getRandom(0, 5)];
};

var generatEeyesColor = function () {
  var COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  return COLORS[getRandom(0, 4)];
};

var wizards = [
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generatEeyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generatEeyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generatEeyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generatEeyesColor()
  }
];

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

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
