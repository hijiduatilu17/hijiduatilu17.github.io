// Popunder + Tabunder Rotator v2026 (merged, single URL list, all random)
(function maulinator_2026(){

  // ==================== DAFTAR URL (dipakai popunder & tabunder) ====================
  const DAFTAR_URL = [
    "https://xselebgram.blogspot.com/",
    
"https://t.co/4Vh7moPkg7",
"https://t.co/3MO2jR8Rvc",
"https://t.co/v3RTN03Cyd",
"https://t.co/g2dtmJfUxu",
"https://t.co/S1rd5MUKwF",
"https://t.co/bxciGbSdee",
"https://t.co/vyCldrgrgy",
"https://t.co/jgoVWw4j07",
"https://t.co/SfamXNPOAs",
"https://t.co/oOhv8ZBmQ2",
"https://t.co/jEDkJQ0yvF",
"https://t.co/sLpJQkfMpt",
"https://t.co/q6h0dOYaAC",
"https://t.co/mRLsDJtdW3",
"https://t.co/bpvZBbt9cx",
"https://t.co/CdxSFZbEqr",
"https://t.co/vLMwLjjX6I",
"https://t.co/sAPrCH31Gz",
"https://t.co/daVwoQzl8Q",
"https://t.co/qFPyL3FVoY",
"https://t.co/iscZeyT8Yz",
"https://t.co/PHZDUvX4MB",
"https://t.co/V1wNA8kdMj",
"https://t.co/ErXWfnWDNf",
"https://t.co/E6nu2465kn",
"https://t.co/UEpflY0brc"
  ];

  // ==================== RANDOM HELPER ====================
  function CRRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  // ==================== TABUNDER ====================
  const JEDA_MINIMAL = 2000;
  var terakhirTrigger = 0;

  function bukaTabunder() {
    var sekarang = Date.now();

    if (sekarang - terakhirTrigger < JEDA_MINIMAL) {
      return;
    }

    terakhirTrigger = sekarang;

    var urlIklan = CRRandom(DAFTAR_URL);
    var tabBaru = window.open(urlIklan, "_blank");

    if (tabBaru) {
      setTimeout(function() {
        window.focus();
      }, 100);
    }
  }

  // ==================== HANDLER GABUNGAN ====================
  document.addEventListener("click", function(){

    // --- Popunder: tiap klik, URL random ---
    const url = CRRandom(DAFTAR_URL);
    const win = window.open(url, "_blank");

    if(win){
      win.blur();
      window.focus();
    }

    // --- Tabunder: jeda 2 detik, URL random ---
    bukaTabunder();

  }, true);

})();
