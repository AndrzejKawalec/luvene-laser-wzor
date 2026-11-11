# Zasady pracy nad stroną kosmetycznywynajem.pl

Odpowiadaj po polsku. Właścicielka strony: LUVENE BEAUTY Karolina Sienkiewicz (marka Kosmetyczny Wynajem).

## Jak działa strona
- Strona statyczna: `index.html` (strona główna), `primelase-excellence.html` (podstrona lasera), `polityka-prywatnosci.html`, `404.html`, `styles.css` (wygląd), `app.js` (bramka, kalkulator, formularz, menu), zdjęcia w `img/`.
- Publikacja: GitHub Pages. Każdy `git push` na gałąź `main` publikuje stronę w ok. 1–2 minuty.
- Plik `CNAME` zawiera domenę `kosmetycznywynajem.pl`. Nie usuwaj go i nie zmieniaj.
- Po dodaniu nowej strony dopisz ją do `sitemap.xml`.

## Prawo — reklama wyrobu medycznego (obowiązkowe)
Laser Primelase Excellence jest wyrobem medycznym do użytku profesjonalnego (ustawa o wyrobach medycznych, Dz.U. 2022 poz. 974).
- Nie usuwaj bramki „jestem profesjonalistą” (`app.js`, klucz `kw-profesjonalista`) ani bloku informacji o wyrobie (nazwa, producent, CE 0051, rola podmiotów).
- Nie usuwaj ostrzeżenia „To jest wyrób medyczny…”.
- Nie pisz obietnic efektów, skuteczności ani bezpieczeństwa zabiegów (np. „trwała depilacja”, „bezbolesny”, „bez skutków ubocznych”). Wolno: dostępność, parametry techniczne z dokumentacji producenta, ceny najmu, terminy, co jest w cenie.
- Nie kieruj treści do klientek końcowych salonów; adresatem są salony i gabinety.
- Nie dodawaj zdjęć ani grafik bez pewności, że wolno ich użyć (zdjęcia producenta są podpisane; grafiki od Pamira sp. z o.o. — nie używać).
- Inne urządzenia (LPG Alliance, BTL X-Wave, Geneo): opis neutralny, producent i „zastosowanie według instrukcji producenta”.

## Treść i wygląd
- Ceny podawane są netto + 23% VAT. Zadatku i kaucji nie podajemy na stronie (są w umowie).
- Paleta i fonty są w `styles.css` (zmienne na początku pliku, fonty Playfair Display i Rubik). Nie wprowadzaj nowych kolorów spoza palety.
- Strona musi działać na telefonie (szerokość 375 px) — sprawdź po każdej zmianie wyglądu.

## Przed wysłaniem zmian (push)
1. Otwórz zmienione strony lokalnie w przeglądarce i sprawdź, czy wyglądają dobrze i nie ma błędów w konsoli.
2. Pokaż właścicielce listę zmian prostym językiem i poczekaj na jej zgodę.
3. Jeden temat = jeden commit z opisem po polsku.
