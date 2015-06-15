# Pleiades

Bron: Pleiades, Ancient Places, Names and Locations

Periode: 1814-1941

Auteur: Stadsarchief Amsterdam

Website: http://pleiades.stoa.org

Beschrijving: Pleiades gives scholars, students, and enthusiasts worldwide the ability to use, create, and share historical geographic information about the ancient world in digital form. At present, Pleiades has extensive coverage for the Greek and Roman world, and is expanding into Ancient Near Eastern, Byzantine, Celtic, and Early Medieval geography.

Licentie: CC-BY

## Bewerkingen
 
- Uit de gehele set zijn de Nederlandse "places" met verwijzingen naar "names" gehaald (door middel van een ruwe bounding box)
- De dataset bevat veelal Romeinse namen voor nederzettingen maar ook voor rivrieren en tempels bv. 
- De plaatsnamen zijn waar mogelijk gemapped naar geonames, via de naam in het geoContext veld EN de reprLat en reprLong waardes


## Beschrijving velden

De dataset is wat ingewikkelder met niet alleen verwijzingen aar geonames maar ook naar eigen concepten. De set bevat de volgende velden:

- **id**                    Uniek nummer
- **pid**                   Unieke numerieke identifier van pleiades Place
- **pleiades_place_id**     Uri van bovenstaand nummer
- **pleiades_id**           Uri / Unieke string van verwijzing van Place + Name concept
- **nameTransliterated**    Naam zoals in de bron (volgens vertaling van het Classical Atlas Project scheme)
- **geoContext**            Huidige naam in geografische context (ter referentie).
- **geonames**              Geonames uri
- **maxDate**               De laatste datum van vermelding (decimal CE year)
- **minDate**               De vroegste datum van vermelding (decimal CE year)
- **reprLat**               Lengtegraad
- **reprLong**              Lengtegraad
- **featureTypes**          Soort plaats / locatie
- **creators**              Samenstellers van de oorspronkelijke gegevens


De hier opgenomen namen hebben ook onderling verbanden naar elkaar (verschillende namen in dit bestand linken naar 1 place).
Zie bijvoorbeeld de verschillende verschijningsvormen door de tijd heen van het hedendaagse "Voorburg": ook wel pid 98918 

Meer over het datamodel van pleiades: http://pleiades.stoa.org/help/technical-intro-places

Bewerker: phpetra@xs4all.nl

Datum: 22-01-2015

Use: `node pleiades-histograph.js -f pleiades.csv`

