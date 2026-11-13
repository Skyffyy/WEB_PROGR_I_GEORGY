# Mani darbi: web-portfolio
 
Vārds, uzvārds: Georgy Kuchvalskiy
Grupa: UZRAKSTI_SAVU_GRUPU
GitHub lietotājvārds: Skyffyy
 
Vietne: https://skyffyy.github.io/WEB_PROGR_I_GEORGY/
 
## Kas ir mapē
 
- `index.html` - sākumlapa ar saitēm uz vizītkarti un profilu
- `vizitkarte/` - vizītkarte (N1)
- `profils/` - profila lapa (N2-N8): `index.html`, `style.css` un galerija ar attēliem
- `.gitignore` - Git neņem vērā `Thumbs.db`, `desktop.ini` un `melnraksti/`
## Komentāri (N9, Git)
 
1. Git versija un kur strādāju: git --version atbild ar UZRAKSTI_VERSIJU, strādāju PowerShell (vai Git Bash).
2. GitHub lietotājvārds: Skyffyy.
3. „Untracked files" nozīmē, ka fails mapē ir, bet Git par to vēl neko nezina un to neseko. Tas nonāks vēsturē tikai pēc git add un git commit.
4. Pirms .gitignore git status rādīja melnraksti/ kā untracked. Pēc .gitignore izveides šī mape sarakstā vairs neparādās, jo Git to ignorē.
5. Staging ir starpzona, kurā es izvēlos, kuras izmaiņas iekļaut nākamajā commitā. Add un commit ir divi soļi, lai varētu sakārtot commitus pa vienam darbam: pievienot tikai vajadzīgos failus un pārējos atstāt uz vēlāku.
6. git restore profils/style.css atcēla failā nesaglabātās izmaiņas un atgrieza to uz pēdējā commita versiju.
7. GitHub redzu UZRAKSTI_SKAITLI commitus, git log --oneline rāda tikpat.
## Komentāri (N10, GitHub Pages)
 
1. git status un commiti: UZRAKSTI_SKAITLI commitus redzu GitHub un tikpat git log --oneline.
2. Fails jāsauc tieši index.html, jo serveris to atver automātiski, kad adresē nav norādīts faila nosaukums. Citādi būtu jāraksta pilns ceļš līdz failam.
3. Mana adrese: https://skyffyy.github.io/WEB_PROGR_I_GEORGY/. Gaidīju UZRAKSTI_MINUTES minūtes.
4. Kas salūza un kāpēc: UZRAKSTI, ja kaut kas salūza (piemēram, 404 no lielajiem/mazajiem burtiem: Windows tos nešķiro, GitHub Pages šķiro). Ja viss strādāja, rakstu, ka kļūdu nebija.
5. Telefonā: UZRAKSTI, kas izskatās citādi nekā DevTools 390px (vai ka izskatās tāpat).
6. README.md satur vietnes saiti un šos komentārus.
7. Starp git push un jauno lapu GitHub palaiž darbu Actions cilnē: izveido vietni no repozitorija un publicē to serveros. Tas aizņem dažas minūtes, tāpēc jaunais datums parādās ar nelielu kavēšanos. Ja redzu veco versiju, pārlūks rāda kešatmiņu, palīdz Ctrl+F5.
## Papildu
 
- Saite /profils/index.html (ar slīpsvītru sākumā) ved uz domēna sakni (skyffyy.github.io/profils/index.html), nevis uz manu repozitoriju, jo ceļš ar sākuma slīpsvītru skaitās no servera saknes. Tāpēc tur ir 404.
- melnraksti/ tiešsaistē dod 404, jo mape ir .gitignore sarakstā, netika commitota un GitHubā to nav.