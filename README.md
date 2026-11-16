# Seminar 9: merge konflikt + Marie ilutuba

## Ülesanne 1: merge konflikt

Täitsin mõlema tudengi rolli kahes eraldi kloonis.

1. Tudeng 1 lõi repositooriumi ja faili `conflict.md`, tegi commiti ja pushis selle.
2. Tudeng 2 kloonis repositooriumi.
3. Mõlemad tegid oma haru (`kevin` ja `tudeng2`) ja pushisid selle (`git push -u origin <haru>`).
4. Mõlemad muutsid failis `conflict.md` sama rida erinevalt, tegid commiti ja pushi.
5. Tudeng 1 läks `main` harule ja ühendas sinna oma haru (`git merge kevin`, `git push`). See läks probleemideta.
6. Tudeng 2 tegi sama (`git checkout main`, `git pull`, `git merge tudeng2`) ja sai konflikti.
7. Tudeng 2 avas faili, valis lõpliku sisu, eemaldas konfliktimärgid ning tegi `git add`, `git commit` ja `git push`.

Kuvatõmmis konfliktist:

<img width="1096" height="447" alt="image" src="https://github.com/user-attachments/assets/e23c8a99-c7ee-4225-adf3-d563df3e48fb" />


### Miks on oluline osata selliseid konflikte lahendada?

Kui mitu inimest töötab samas projektis, muudavad nad vahel sama faili sama rida. Git ei saa ise otsustada, kumb muudatus on õige, ja peatab ühendamise. Kui konflikti lahendada ei oska, võib kogemata kustutada kaaslase töö või jätta faili sisse konfliktimärgid (`<<<<<<<`, `=======`, `>>>>>>>`), mille tõttu kood ei tööta. Kui konflikte osatakse lahendada, saab iga meeskonnaliige teha tööd oma harus ja hiljem kõik muudatused turvaliselt kokku panna. Tarkvaraarenduses juhtub seda pidevalt.

## Ülesanne 2: Marie ilutuba veebileht

- `index.html`: avaleht kliendi visandi järgi. Vasakul logo, menüü ja vahetuvate piltidega galerii, paremal sotsiaalmeedia nupud (klikitav on ainult Tumblr), Google Maps kaart, aadress ning lahtiolekuajad.
- `hinnakiri.html`: hinnakirja mall näidisandmetega.
- `broneeri.html`: broneerimise leht, mis jääb kliendi soovil praegu tegemata.
- `css/style.css`: kõik stiilid. Taust on hele krobeline tapeedimuster, fondid Dancing Script ja Dosis (Google Fonts). Galerii pildid vahetuvad iga 4 sekundi järel CSS-animatsiooniga (`@keyframes`), JavaScripti lehel ei ole.

Fotod on Wikimedia Commonsist, autorid on märgitud avalehe jaluses.
