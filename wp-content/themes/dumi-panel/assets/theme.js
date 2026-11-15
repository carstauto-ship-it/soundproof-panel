/* DUMI Panel: gallery thumb switching. */
(function () {
  var main = document.getElementById('dp-main-image');
  document.querySelectorAll('.dp-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (main && thumb.dataset.full) main.src = thumb.dataset.full;
    });
  });
})();
