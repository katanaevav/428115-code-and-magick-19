'use strict';

window.wizardSetupUtils = (function () {
  var MIN_NAME_LENGTH = 2;

  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomValue = function (maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
  };

  return {
    minNameLength: MIN_NAME_LENGTH,

    getCoatColor: function () {
      return coatColors[getRandomValue(coatColors.length)];
    },
    getEyesColor: function () {
      return eyesColors[getRandomValue(eyesColors.length)];
    },
    getFireballColor: function () {
      return fireballColors[getRandomValue(fireballColors.length)];
    }
  };
})();
