GeoJson in Qgis geladen

Problemen opgelost:
Oudega heeft amcode 10472 ipv 10742
Oosterwolde [FR] heeft amcode 10836 ipv 11061
Otterlo amcode 11389 ipv 11359
Oosterbeek amcode 10336 ipv 11325 (is van Renkum vanaf 1818) 
Avereest bij MY dep gedaan
Vlaardinger-Ambacht bij MM dep gedaan
Kerkrade bij NM dep gedaan

Problemen niet opgelost voor gemeente polygonen:
- gemeente Avereest bestaat pas vanaf 1818 daarvoor was het deel van Ommen. amcode 11190 levert dus geen departement op! 
- Vlaardinger-Ambacht ontstaan in 1817 daarvoor vlaardingen
- kerkrade mist amcode - departement link. klopt verders wel. Nedermaas

Buffer van 10 meter om de gemeente polygonen gemaakt om gaten tussen de grenzen te vullen.
Dissolve gedaan op departementen attribuut. 
Atributen bewerkt. Volledige naam toegevoegd.

export als geojson met WGS84 projectie