'use strict';

(function () {
  var overlay = document.querySelector('.gallery-overlay');
  var HIDDEN_CLASS = 'hidden';
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
  var bigPicture = overlay.querySelector('.gallery-overlay-image');
  var likes = overlay.querySelector('.likes-count');
  var commentsCount = overlay.querySelector('.comments-count');
  var getRangeRandomNumbers = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };
  var increasedImg = function (dataArray) {
    bigPicture.src = dataArray[0].url;
    likes.textContent = Math.round(getRangeRandomNumbers(15, 200)).toString();
    commentsCount.textContent = dataArray[0].commentsData.length.toString();
  };
  increasedImg(window.data.getPhotoData());

  var addHandlerForClosePicture = function () {
    var closeButton = document.querySelector('.gallery-overlay-close');
    closeButton.addEventListener('click', removeOverlayClass);
    document.addEventListener('keydown', checkKeyDown);
  };
  var showBigPictureWithOverlay = function (event) {
    event.preventDefault();
    var currentElement = event.target.closest('.picture');
    if (!currentElement) {
      return;
    }
    var srcPicture = currentElement.querySelector('img').src;
    var mainPicture = overlay.querySelector('.gallery-overlay-image');
    var likesCount = currentElement.querySelector('.picture-likes').textContent;
    var commentCount = currentElement.querySelectorAll('.picture-comments').length;
    overlay.querySelector('.likes-count').textContent = likesCount;
    mainPicture.src = srcPicture;
    overlay.querySelector('.comments-count').textContent = commentCount.toString();
    overlay.classList.remove(HIDDEN_CLASS);
    addHandlerForClosePicture();
  };
  var removeOverlayClass = function () {
    overlay.classList.add(HIDDEN_CLASS);
  };
  var checkKeyDown = function (event) {
    if ((event.keyCode === ESC_KEY) || (event.keyCode === ENTER_KEY)) {
      removeOverlayClass();
    }
  };
  var addHandlerForClickOnPicture = function () {
    var container = document.querySelector('.pictures');
    container.addEventListener('click', showBigPictureWithOverlay);
  };
  addHandlerForClickOnPicture();
})();