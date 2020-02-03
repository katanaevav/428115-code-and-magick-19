'use strict';

var WIZARDS_NAMES_COUNT = 7;
var COAT_COLORS_COUNT = 5;
var EYES_COLORS_COUNT = 4;
var WIZARDS_COUNT = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeUserDialog();
  }
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
  if (evt.key === ENTER_KEY) {
    openUserDialog();
  }
});

userDialogClose.addEventListener('click', function () {
  closeUserDialog();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeUserDialog();
  }
});

var getRandomValue = function (maxValue) {
  return Math.floor(Math.random() * Math.floor(maxValue));
};

var getRandomName = function (namesList, surnamesList, namesCount) {
  return namesList[getRandomValue(namesCount)] + ' ' + surnamesList[getRandomValue(namesCount)];
};

var getRandomColor = function (colorsList, colorsCount) {
  return colorsList[getRandomValue(colorsCount)];
};

var getWizards = function (count) {
  var wizardsArray = [];
  for (var i = 0; i < count; i++) {
    wizardsArray.push({
      name: getRandomName(names, surnames, WIZARDS_NAMES_COUNT),
      coatColor: getRandomColor(coatColors, COAT_COLORS_COUNT),
      eyesColor: getRandomColor(eyesColors, EYES_COLORS_COUNT)
    });
  }
  return wizardsArray;
};

var wizards = getWizards(WIZARDS_COUNT);

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

var setupSimilar = document.querySelector('.setup-similar');

setupSimilar.classList.remove('hidden');
