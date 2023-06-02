# An-Api-for-image-manipulationn

Dokumentacija API: Manipulacija slik

endpoint: /detectPeople

V primeru prevelike datoteke   > 5 MB
strežnikv vrne 


Opis: Vmesnik za detekcijo in štetje oseb: Ta končna točka se uporablja za zaznavanje ljudi na sliki.
Metoda HTTP: POST
Naslovnice:
api-key: Educational
Parametri zahteve:
Slika: Učni podatki: Učni podatki: Učni podatki: Slikovna datoteka, ki jo je treba naložiti za zaznavanje ljudi.
Odziv: Parametri: Slika: Slika: Slika: Slika: Slika: Slika: Slika, ki je bila prikazana na sliki:
Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: status: Boolean, ki označuje status uspešnosti.
data: predmet, ki vsebuje rezultat zaznavanja ljudi.
peopleCounter: Število zaznanih oseb.
dataUrl: URL podatkov slike s prekrivanjem zaznavanja ljudi.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.
Končna točka: /User/Manipulation/resize

Opis: Spremeni se: Ta končna točka se uporablja za spreminjanje velikosti slike na določene dimenzije.
Metoda HTTP: POST
Naslovnice:
Api-key: 1Educational
Parametri zahteve:
Slika: Slika: Slikovna datoteka, ki jo je treba naložiti za spreminjanje velikosti.
width: Želena širina slike s spremenjeno velikostjo.
Višina: Želena višina spremenjene velikosti slike.
Odziv:
Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: Boolean, ki označuje stanje uspešnosti.
data: Objekt, ki vsebuje rezultat spremembe velikosti slike.
dataUrl: URL podatkov spremenjene velikosti slike.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.
Končna točka: /User/Manipulation/applyTint

Opis: Vmesnik za nastavitev barve: Ta končna točka se uporablja za uporabo odtenka na sliki s prilagajanjem vrednosti RGB.
Metoda HTTP: POST
Naslovnice:
Ključ api-: Educational
Parametri zahtevka:
Slika: Učni podatki: Učni podatki: Učni podatki: Slikovna datoteka, ki jo je treba naložiti za uporabo odtenka.
r: rdeča vrednost odtenka (0-255).
g: Vrednost zelenega odtenka (0-255).
b: Modra vrednost odtenka (0-255).
Odziv:
Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: Boolean, ki označuje stanje uspešnosti.
data: podatki: Predmet, ki vsebuje rezultat uporabe obarvanja.
dataUrl: URL podatkov obarvane slike.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.
Končna točka: /User/Manipulation/getMetadata

Opis: Podatkovna enota: Meteoposnetek: Meteoposnetek: Meteoposnetek: Ta končna točka se uporablja za pridobivanje informacij o metapodatkih slike.
Metoda HTTP: POST
Naslovnice:
Api-key: Educational
Parametri zahtevka:
Slika: Učni podatki: Učni podatki: Učni podatki: Slikovna datoteka, ki jo je treba naložiti za iskanje metapodatkov.

Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: status: Boolean, ki označuje status uspešnosti.
data: Objekt, ki vsebuje metapodatke slike.
metapodatki: Objekt metapodatkov, ki vsebuje različne lastnosti metapodatkov slike.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.
Opomba: Vse končne točke pričakujejo zahtevo multipart/form-data z ustreznimi parametri.

Primer uporabe:
