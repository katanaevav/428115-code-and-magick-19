'use strict';

window.backend = (function () {
  var QUERY_TIMEOUT = 10000;
  var StatusCode = {
    OK: 200
  };
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';

  return {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('При загрузке магов сервер ответил: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения при загрузке магов');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос магов не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = QUERY_TIMEOUT;

      xhr.open('GET', LOAD_URL);
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('При сохранении мага сервер ответил: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соеднинения при сохранении мага');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос сохранения мага не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = QUERY_TIMEOUT;

      xhr.open('POST', SAVE_URL);
      xhr.send(data);
    }
  };
})();
