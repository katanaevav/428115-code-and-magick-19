'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_X = 150;
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_X_GAP = 50 + BAR_WIDTH;
  var TEXT_GAP = 20;
  var TEXT_WIDTH = 16;
  var NAME_Y = CLOUD_HEIGHT - TEXT_GAP;
  var BAR_Y = NAME_Y - TEXT_GAP;
  var MAX_TIME_Y = CLOUD_HEIGHT + CLOUD_Y - BAR_Y + TEXT_GAP;

  var drawCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (elements) {
    var maxElement = elements[0];

    for (var i = 0; i < elements.length; i++) {
      if (elements[i] > maxElement) {
        maxElement = elements[i];
      }
    }

    return maxElement;
  };

  var generateColor = function () {
    return 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
  };

  window.renderStatistics = function (ctx, names, times) {
    drawCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    drawCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
    ctx.fillStyle = '#000000';
    ctx.font = '16px "PT Mono"';
    ctx.fillText('Ура вы победили!', BAR_X, CLOUD_Y + TEXT_GAP);
    ctx.fillText('Список результатов:', BAR_X, CLOUD_Y + TEXT_GAP + TEXT_WIDTH);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var time = Math.trunc(times[i]);
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], BAR_X + BAR_X_GAP * i, NAME_Y);
      ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : generateColor();
      ctx.fillRect(BAR_X + BAR_X_GAP * i, BAR_Y, BAR_WIDTH, (MAX_BAR_HEIGHT * time / maxTime) * -1);
      ctx.fillStyle = '#000000';
      ctx.fillText(time, BAR_X + BAR_X_GAP * i, MAX_TIME_Y + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * time / maxTime));
    }
  };
})();
