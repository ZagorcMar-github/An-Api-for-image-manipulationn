# An-Api-for-image-manipulationn
# predhodne zahteve
Najprej moramo namestiti nodejs (api trenutno dela na verziji node 18.12.1),na windows operacjskem sistemu

Če želite namestiti odvisnosti sledite naslednjim korakom:
najprej: npm install -g node-gyp

Odprite terminal ali ukazno vrstico.
Pojdite v imenik projekta, kjer se nahaja datoteka package.json.
Za namestitev odvisnosti zaženite naslednji ukaz:
npm install
# Dokumentacija API: Manipulacija slik

endpoint: /detectPeople

V primeru prevelike datoteke   > 5 MB
strežnikv vrne {status:false,
          "error": {
            "status": 413,
            "title": "Bad Request",
            "message": "img exceded maximum size."
          }}
v primeru da naložena datoteka ni v pravilnem formatu [.jpg,.png,.gif]
strežnik vrne:
{status:false,
         "error": {
            "status": 422,
            "title": "Bad Request",
            "message": "The provided image is not in the correct format. Please provide a valid image in JPEG or PNG format."
          }}

Opis: Vmesnik za detekcijo in štetje oseb: Ta končna točka se uporablja za zaznavanje ljudi na sliki.
Metoda HTTP: POST
headers:
api-key: Educational
Parametri/zahteve:
Slika: Slikovna datoteka, ki jo je treba naložiti za zaznavanje ljudi.
Odziv: 
Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: status: Boolean, ki označuje status uspešnosti.
data: predmet, ki vsebuje rezultat zaznavanja ljudi.
peopleCounter: Število zaznanih oseb.
dataUrl: URL podatkov slike .
Če pride do napake, bo odgovor vseboval sporočilo o napaki.

endpoint: /User/Manipulation/resize

Opis:  Ta končna točka se uporablja za spreminjanje velikosti slike na določene dimenzije.
Metoda HTTP: POST
Headers:
Api-key: Educational

Parametri/zahteve:
Slika: image: Slikovna datoteka, ki jo je treba naložiti za spreminjanje velikosti.
width: Želena širina slike s spremenjeno velikostjo.
height: Želena višina spremenjene velikosti slike.
Odziv:
Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: Boolean, ki označuje stanje uspešnosti.
data: Objekt, ki vsebuje rezultat spremembe velikosti slike.
dataUrl: URL podatkov spremenjene velikosti slike.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.


endpoint: /User/Manipulation/applyTint

Opis: Vmesnik za nastavitev barvnega filtra: Ta končna točka se uporablja za uporabo odtenka na sliki s prilagajanjem vrednosti RGB.
Metoda HTTP: POST

headers:
api-key: Educational 

Parametri/zahtevka:
Slika: Slikovna datoteka, ki jo je treba naložiti za uporabo barvnega filtra.
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

headers:
Api-key: Educational

Parametri zahtevka:
Slika: Slikovna datoteka, ki jo je treba naložiti za iskanje metapodatkov.

Če je odgovor uspešen, bo vseboval naslednje lastnosti:
status: status: Boolean, ki označuje status uspešnosti.
data: Objekt, ki vsebuje metapodatke slike.
metapodatki: Objekt metapodatkov, ki vsebuje različne lastnosti metapodatkov slike.
Če pride do napake, bo odgovor vseboval sporočilo o napaki.

Opomba: Vse končne točke pričakujejo zahtevo multipart/form-data z ustreznimi parametri.

Primer uporabe api sem dodal v mapo frontedTestZaDetection, gre za preprost html dkument z nekaj txt polji in gumbi

API ni primeren za štetje velikih gruč ljudi, dobro deluje z recimo:

![649-07238638en_Masterfile](https://github.com/Zahribc/An-Api-for-image-manipulationn/assets/115155991/a5e63b1c-fce7-4fbc-a035-da04b7eb565d)

