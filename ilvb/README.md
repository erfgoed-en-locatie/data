# Illustre Lieve Vrouwe Broederschap

Bron: Rekeningen Illustre Lieve Vrouwe Broederschap

Auteur: Brabants Historisch Informatie Centrum

Website: http://www.bhic.nl/onderzoeken/illustre-lieve-vrouwe-broederschap

Over de bron: http://nl.wikipedia.org/wiki/Illustre_Lieve_Vrouwe_Broederschap

Licentie: CC-BY

Bewerkingen: 
- De combinaties `plaatsnaam in de bron` en `huidige plaatsnaam` uniek gemaakt.
- Het aantal keer dat een combinatie voorkwam en het eerste en laatste jaar dat een combinatie voorkwam opgeslagen (in het originele bestand was het jaar steeds opgegeven als `1543/1544`, vandaar de uitsplitsing in `eerste_jaar_min` en `eerste_jaar_max`, etc.)
- In 689 records kwamen, komma-gescheiden, meerdere plaatsen voor. Deze zijn uit elkaar gehaald (op enige gevallen na waar het aantal kommagescheiden historische varianten niet overeenkwam met het aantal kommagescheiden plaatsnamen) en waar de individuele gevallen nog geen record hadden zijn deze ingeschoten. In alle gevallen zijn eerste en laatste jaar en aantal aangepast.
- De huidige plaatsnamen zijn tegen de bij GeoNames bekende Nederlandse populated places gehouden. Bij 1 treffer is de GeoNames URI opgenomen.
- De toen nog niet gevonden huidige plaatsnamen zijn tegen het Nederlandse deel van de TGN gehouden. Bij 1 treffer is de TGN URI opgenomen.
- De toen nog niet gevonden huidige plaatsnamen zijn tegen de GeoNames api aangehouden. Bij 1 treffer in Europa is de GeoNames URI opgenomen.
- De toen nog niet gevonden huidige plaatsnamen zijn handmatig bekeken. Daarbij zijn een aanzienlijk aantal plaatsen alsnog geïdentificeerd, meestal omdat de plaatsnaam op zichzelf weliswaar ambigu was (Zwolle, Kampen, Wesel in Duitsland), maar de betekenis voor de hand liggend (Zwolle in Gelderland telt 2 huizen). Soms gaf de naam uit de bron ook een bruikbare hint (Beers by Cuyck, Beers onder Breda).
- Er zijn nog 164 unieke huidige plaatsnamen die niet eenduidig geïdentificeerd zijn.
- In 57 unieke gevallen daarvan (samen 357 records) werden twee plaatsnamen genoemd (Den Haag of Princenhage, Haren of Haaren, Maastricht of Utrecht). Deze records waren niet te geocoderen. Ook als ze uit elkaar getrokken worden kan niet met enige zekerheid vastgesteld worden of het toponiem in een bepaald jaar voor de ene of de ander plaats gebruikt werd. Daar komt bij dat er in een aantal gevallen ook al eenduidige verwijzingen bestaan (Tricht = Maastricht, Tricht = Utrecht), wat het verlies draaglijk maakt.

Bewerker: menno@denengelse.nl

Use: `node ilvb-histograph.js -f ilvb.csv`
