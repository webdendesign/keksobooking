'use strict';
(function () {
  var main = document.querySelector('main');
  var mapPinMain = main.querySelector('.map__pin--main');
  var adForm = main.querySelector('.ad-form');

  function getMainPinStartCoordinates() {
    var mainPinStartCoords = {
      x: parseInt(mapPinMain.style.left, 10) + mapPinMain.getBoundingClientRect().width / 2,
      y: parseInt(mapPinMain.style.top, 10) + mapPinMain.getBoundingClientRect().height / 2
    };

    adForm.address.value = mainPinStartCoords.x + ', ' + mainPinStartCoords.y;
  }

  function onPinMoveEventAddressField(evt) {
    adForm.address.value = evt.coords.x + ', ' + evt.coords.y;
  }

  document.addEventListener('pinMoveEvent', onPinMoveEventAddressField);

  window.formCoordinate = {
    getMainPinStartCoordinates: getMainPinStartCoordinates,
    onPinMoveEventAddressField: onPinMoveEventAddressField
  };
})();
