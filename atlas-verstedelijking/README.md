#Atlas der verstedelijking

Bron: Atlas der verstedelijking

Auteur: [Institute of the History of Art, Architecture and Urbanism (IHAAU)](http://bk.tudelft.nl/index.php?id=14929&L=0) van de faculteit Bouwkunde van de TU Delft (o.l.v. Reinout Rutte) en de [Rijksdienst voor het Cultureel Erfgoed](http://www.cultureelerfgoed.nl/) (o.l.v. Jaap Evert Abrahamse)

Website: [http://thoth.nl/Rubrieken/Architectuur---stedenbouw/Atlas-van-de-verstedelijking-in-nederland-1000-jaar-ruimtelijke-ontwikkeling]()

Licentie: Volgens Menne Kosian 'mag alles gebruikt worden'. Zou goed idee zijn hem nog even na te laten vragen welke CC licentie daar, voor wat betreft de geodata, dan opgeplakt zou kunnen worden.

Het gaat niet om het hele boek, maar de geometrieën van de 35 grootste steden uit verschillende jaren (van de middeleeuwen tot nu).


##Bewerking:
- De verkregen geometrieën zijn aan Geonames gekoppeld
- De geometrieen zijn verschillend getypeerd. De meeste records representeren buurten in steden (hg:Place), andere zijn gemeentes (hg:Municipality)
- geometrieën van de verschillende jaren van de 35 steden extraheren met behulp van onderstaande query:
 SELECT pg_catalog.concat(stedenperjaar.stad, '_', stedenperjaar.jaar) AS id, 
  stedenperjaar.stad, 
  stedenperjaar.jaar, 
  count("35steden".id) AS count, 
  st_multi(st_union(st_transform("35steden".the_geom, 4326))) AS the_geom
   FROM "35steden", 
    ( SELECT "35steden".stad, "35steden".jaar
           FROM "35steden"
          GROUP BY "35steden".stad, "35steden".jaar
          ORDER BY "35steden".stad, "35steden".jaar) stedenperjaar
  WHERE stedenperjaar.stad::text = "35steden".stad::text AND 
    stedenperjaar.jaar >= "35steden".jaar AND 
    st_isvalid("35steden".the_geom) = true
  GROUP BY stedenperjaar.stad, stedenperjaar.jaar
  ORDER BY stedenperjaar.stad, stedenperjaar.jaar;
Export naar GeoJSON met behulp van QGIS

TODO:
- Er zijn mappings gemaakt naar Geonames gemeentes die wellicht nog niet beschikbaar zijn in de Geonames-set in Histograph. Deze moeten dan nog geharvest worden en toegevoegd in de Geonames-set.

