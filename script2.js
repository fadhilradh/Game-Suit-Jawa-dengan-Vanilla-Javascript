function cariPilihanKomp() {
    const pilihanKomp = Math.random();
    if (pilihanKomp < 0.34) return `batu`;
    if (pilihanKomp >= 0.34 && pilihanKomp <= 0.67) return `gunting`;
    return `kertas`;
}

const dapatHasilSuit = (pilihanPlayer, pilihanKomp) => {
    if (pilihanPlayer == pilihanKomp) return "HASILNYA SERI!";
    if (pilihanPlayer == "batu")
        return pilihanKomp == "gunting" ? "ANDA MENANG !!" : "ANDA KALAH !!";
    if (pilihanPlayer == "gunting")
        return pilihanKomp == "batu" ? "ANDA KALAH !!" : "ANDA MENANG !!";
    if (pilihanPlayer == "kertas")
        return pilihanKomp == "gunting" ? "ANDA KALAH !!" : "ANDA MENANG !!";
};

const klikBatu = document.querySelector(".batu");
const klikGunting = document.querySelector(".gunting");
const klikKertas = document.querySelector(".kertas");
const info = document.querySelector(".info");
const gambarKomputer = document.querySelector(".img-komputer");

const ambilSemuaGambarPlayer = document.querySelectorAll("li img");

const acakGambar = () => {
    const gambar = ["batu", "gunting", "kertas"];
    const waktuMulai = new Date().getTime();
    let i = 0;
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1500) {
            clearInterval;
            return;
        }
        gambarKomputer.setAttribute("src", "assets/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100);
};

ambilSemuaGambarPlayer.forEach(function (klikGambarApa) {
    klikGambarApa.addEventListener("click", function () {
        const pilihanPlayer = klikGambarApa.className;
        const pilihanKomp = cariPilihanKomp();
        const hasil = dapatHasilSuit(pilihanPlayer, pilihanKomp);

        acakGambar();

        setTimeout(function () {
            info.innerText = hasil;
            gambarKomputer.setAttribute("src", `assets/${pilihanKomp}.png`);
        }, 1500);
        info.innerText = "";
    });
});

//function expression

const luasPersegi = function luasPersegi(a, b) {
    return a * b;
};

console.log("Luas persegi adalah " + luasPersegi(5, 5));
