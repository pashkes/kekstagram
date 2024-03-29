'use strict';

(function () {
  var STEP_ZOOM = 25;
  var MIN_ZOOM = STEP_ZOOM;
  var MAX_ZOOM = 100;
  var PERCENT_SYMBOL = '%';
  var DECREMENT_CLASS = '.upload-resize-controls-button-dec';
  var INCREMENT_CLASS = '.upload-resize-controls-button-inc';
  var VALUE_CLASS = '.upload-resize-controls-value';
  var controls;
  var setZoomValue;

  var resizeHandler = function (evt) {
    var zoomOut = evt.target.closest(DECREMENT_CLASS);
    var zoomIn = evt.target.closest(INCREMENT_CLASS);
    var zoomValue = controls.querySelector(VALUE_CLASS);
    var currentValueZoom = parseInt(zoomValue.value, 10);
    if (zoomOut) {
      if (currentValueZoom <= MIN_ZOOM || currentValueZoom > MAX_ZOOM) {
        return;
      }
      currentValueZoom -= STEP_ZOOM;
    }
    if (zoomIn) {
      if (currentValueZoom < MIN_ZOOM || currentValueZoom >= MAX_ZOOM) {
        return;
      }
      currentValueZoom += STEP_ZOOM;
    }
    zoomValue.value = currentValueZoom + PERCENT_SYMBOL;
    setZoomValue(currentValueZoom);
  };

  window.initializeScale = function (zoomButtons, setZoomCallback) {
    controls = zoomButtons;
    setZoomValue = setZoomCallback;
    controls.addEventListener('click', resizeHandler);
  };

})();
