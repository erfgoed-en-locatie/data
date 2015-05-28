# Verdwenen Dorpen

Bron: Verdwenen Dorpen in Nederland, 5 delen, 2012

Auteur: Bert Stulp, Eddie Poppe

Website: http://verdwenendorpen.nl

Licentie: CC-BY

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

In de vijf delen 'Verdwenen Dorpen in Nederland' beschrijft Bert Stulp meer dan vijfhonderd nederzettingen die door overstromingen, verstuivingen, oorlogsgeweld of andere oorzaken verloren zijn gegaan. 
Eddie Poppe maakte het databestand en zocht de coördinaten bij de verdwenen nederzettingen.

Bewerkingen: 
- Veld `histopo_uri` toegevoegd
- Velden `boek`, `hoofdstuk` en `pagina` vervangen door veld `bron`, waarin een bronvermelding met boek, boekdeel en pagina
- Velden `eindjaar_min` en `eindjaar_max` toegevoegd met louter jaartallen op basis van de velden `jaar_gebeurtenis` en `periode`

Bewerker: menno@denengelse.nl

Use: `node verdwenen-dorpen-histograph.js -f verdwenen-dorpen.csv`
