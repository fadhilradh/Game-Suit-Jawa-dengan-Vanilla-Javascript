function cariPilihanKomp()  {
    const pilihanKomp = Math.random();
	if (pilihanKomp < 0.34) return `gajah`;
	if (pilihanKomp >= 0.34 && pilihanKomp <= 0.67) return `semut`;
	return `orang`;
}

const dapatHasilSuit = (pilihanPlayer, pilihanKomp) => {
    if (pilihanPlayer == pilihanKomp) return 'HASILNYA SERI!'; 
    if (pilihanPlayer == 'gajah') return (pilihanKomp == 'orang') ? 'ANDA MENANG !!' : 'ANDA KALAH !!';
    if (pilihanPlayer == 'orang') return (pilihanKomp == 'gajah') ? 'ANDA KALAH !!' : 'ANDA MENANG !!'; 
    if (pilihanPlayer == 'semut') return (pilihanKomp == 'orang') ? 'ANDA KALAH !!' : 'ANDA MENANG !!';
}
    
const klikGajah = document.querySelector('.gajah');
const klikOrang = document.querySelector('.orang');
const klikSemut = document.querySelector('.semut');
const info = document.querySelector('.info');
const gambarKomputer = document.querySelector(".img-komputer");


const ambilSemuaGambarPlayer = document.querySelectorAll('li img');

const acakGambar = () => {
    const gambar = ['gajah', 'semut', 'orang'];
    const waktuMulai = new Date().getTime();
    let i = 0;
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1500) {
            clearInterval;
            return
        }
        gambarKomputer.setAttribute('src', 'img/' + gambar[i++] +'.png')
        if (i == gambar.length) i = 0;
    }, 100)
}

ambilSemuaGambarPlayer.forEach(function(klikGambarApa) {
    klikGambarApa.addEventListener('click', function() {
        const pilihanPlayer = klikGambarApa.className;
        const pilihanKomp = cariPilihanKomp();
        const hasil = dapatHasilSuit(pilihanPlayer, pilihanKomp);

        acakGambar();

        setTimeout(function() {
            info.innerText = hasil;
            gambarKomputer.setAttribute('src', `img/${pilihanKomp}.png`); 
        }, 1500);
        info.innerText = '';
        });
});


