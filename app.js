// Skrypt wspólny dla wszystkich stron. Każdy blok sprawdza, czy jego elementy są na stronie.

// Bramka profesjonalisty: ustawa o wyrobach medycznych (art. 55 ust. 2 pkt 3) zakazuje reklamy
// wyrobów dla profesjonalistów kierowanej do publicznej wiadomości.
(function () {
  const bramka = document.getElementById('bramka');
  if (!bramka) return;
  const KLUCZ = 'kw-profesjonalista';
  let potwierdzone = false;
  try { potwierdzone = sessionStorage.getItem(KLUCZ) === 'tak'; } catch (e) { potwierdzone = false; }
  bramka.hidden = potwierdzone;
  if (!potwierdzone) document.getElementById('bramka-tak').focus();
  document.getElementById('bramka-tak').addEventListener('click', function () {
    try { sessionStorage.setItem(KLUCZ, 'tak'); } catch (e) { /* bez pamięci sesji bramka wróci po odświeżeniu */ }
    bramka.hidden = true;
  });
})();

// Kalkulator: koszt doby jak w wariancie „Doba”, żeby wynik był spójny z cennikiem
(function () {
  const dni = document.getElementById('dni');
  if (!dni) return;
  const KOSZT_DOBY = 990;
  const zl = new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 });
  const klientki = document.getElementById('klientki');
  const cena = document.getElementById('cena');
  const pisz = function (id, tekst) { document.getElementById(id).textContent = tekst; };
  function oblicz() {
    const d = +dni.value, k = +klientki.value, c = +cena.value;
    pisz('dni-wartosc', d); pisz('klientki-wartosc', k); pisz('cena-wartosc', zl.format(c) + ' zł');
    const obrot = d * k * c, koszt = d * KOSZT_DOBY, roznica = obrot - koszt;
    pisz('w-obrot', zl.format(obrot) + ' zł'); pisz('w-koszt', zl.format(koszt) + ' zł');
    pisz('w-roznica', (roznica >= 0 ? '+' : '') + zl.format(roznica) + ' zł');
    pisz('w-prog', 'Koszt doby pokrywa ' + Math.ceil(KOSZT_DOBY / c) + ' zabiegów dziennie.');
  }
  [dni, klientki, cena].forEach(function (el) { el.addEventListener('input', oblicz); });
  oblicz();
})();

// Formularz: otwiera pocztę z gotowym zapytaniem (strona statyczna, bez własnego serwera)
(function () {
  const form = document.getElementById('formularz-rezerwacji');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pole = function (id) { return document.getElementById(id).value.trim(); };
    const temat = encodeURIComponent('Rezerwacja lasera – ' + pole('salon') + ' (' + pole('miejscowosc') + ')');
    const cialo = encodeURIComponent(
      'Dzień dobry,\n\nChcę zarezerwować termin lasera Primelase Excellence.\n\n' +
      'Salon: ' + pole('salon') + '\nMiejscowość: ' + pole('miejscowosc') + '\nTelefon: ' + pole('telefon') +
      '\nPreferowany termin: ' + pole('termin') + '\nWariant: ' + pole('wariant') +
      (pole('wiadomosc') ? '\n\nWiadomość: ' + pole('wiadomosc') : '') + '\n\nPozdrawiam,\n' + pole('salon')
    );
    window.location.href = 'mailto:' + form.dataset.email + '?subject=' + temat + '&body=' + cialo;
  });
})();

// Menu mobilne
(function () {
  const p = document.querySelector('.menu-przycisk'), m = document.getElementById('menu-glowne');
  if (!p || !m) return;
  p.addEventListener('click', function () { const o = m.classList.toggle('otwarte'); p.setAttribute('aria-expanded', o); });
  m.addEventListener('click', function (e) { if (e.target.tagName === 'A') { m.classList.remove('otwarte'); p.setAttribute('aria-expanded', 'false'); } });
})();
