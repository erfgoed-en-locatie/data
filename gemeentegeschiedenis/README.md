# gemeentegeschiedenis

Bron: Gemeentegeschiedenis

Periode: 1812-2014

Auteur: Ad van der Meer, Onno Boonstra

Website: [http://www.gemeentegeschiedenis.nl/](http://www.gemeentegeschiedenis.nl/)

Licentie: ?

Bewerkingen: geometrieën toegevoegd van jaren die afweken van vorige jaren.

Het bestand `gemeentes_nl.csv` bevat alle gemeentes, maar zonder geometrie. Voor de import is gebruik van het bestand `gg_geometries.csv` dus handiger, maar let daarbij wel op dat een gemeente dus voor elke keer dat de geometrie wijzigt een keer voorkomt.

* Velden startjaar en eindjaar slaan op bestaan gemeente, startjaar_geom en eindjaar_geom slaan op geldigheid van de geometrie
* In start- en eindjaar kan behalve een jaartal ook 'oudsher' of 'heden' gegeven worden.
* Eindjaar_geom kan als waarde '0' hebben, wat betekent dat er geen eindjaar is (omdat de geometrie nog steeds geldig is).
* Departement heeft alleen een waarde bij gemeentes die in 1812 bestonden, omdat alleen gemeentes die in de Franse tijd bestonden in een Frans departement hebben gelegen.

Bewerker: menno@denengelse.nl

Use: `node gemeentegeschiedenis-histograph.js -f gg_geometries.csv`
