(function () {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  }
  btn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", function () { if (innerWidth >= 640) setMenu(false); });

  /* Category filter (landing page only) */
  var chips = document.querySelectorAll(".chip");
  var items = document.querySelectorAll(".grid li");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var cat = chip.dataset.cat;
      chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip); });
      items.forEach(function (li) { li.hidden = !(cat === "All" || li.dataset.cat === cat); });
    });
  });
})();
