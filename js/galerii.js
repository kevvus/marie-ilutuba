// Vahetuvate piltidega galerii: pilt vahetub iga 4 sekundi järel,
// punktidele klõpsates saab pildi ise valida.
(function () {
  var galerii = document.querySelector(".galerii");
  if (!galerii) return;

  var pildid = galerii.querySelectorAll("img");
  var punktid = galerii.querySelector(".galerii-punktid");
  var praegune = 0;
  var taimer;

  pildid.forEach(function (pilt, i) {
    var nupp = document.createElement("button");
    nupp.type = "button";
    nupp.setAttribute("aria-label", "Pilt " + (i + 1));
    nupp.addEventListener("click", function () {
      naita(i);
      kaivita();
    });
    punktid.appendChild(nupp);
  });

  function naita(i) {
    pildid[praegune].classList.remove("nahtav");
    punktid.children[praegune].classList.remove("aktiivne");
    praegune = i;
    pildid[praegune].classList.add("nahtav");
    punktid.children[praegune].classList.add("aktiivne");
  }

  function kaivita() {
    clearInterval(taimer);
    taimer = setInterval(function () {
      naita((praegune + 1) % pildid.length);
    }, 4000);
  }

  naita(0);
  kaivita();
})();
