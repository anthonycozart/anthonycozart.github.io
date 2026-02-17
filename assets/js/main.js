(function () {
  var toc = document.getElementById("toc");
  if (!toc) return;

  var headings = document.querySelectorAll("article h2, article h3");
  if (headings.length === 0) return;

  var nav = document.createElement("nav");
  var ul = document.createElement("ul");

  headings.forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    var li = document.createElement("li");
    if (h.tagName === "H3") li.classList.add("toc-sub");

    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  toc.appendChild(nav);

  // Scroll spy
  var links = toc.querySelectorAll("a");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          var active = toc.querySelector('a[href="#' + entry.target.id + '"]');
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "0px 0px -70% 0px", threshold: 0 }
  );

  headings.forEach(function (h) { observer.observe(h); });
})();
