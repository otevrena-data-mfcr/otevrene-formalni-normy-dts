# TypeScriptové definice pro [opendata-mvcr/otevrene-formalni-normy](https://github.com/opendata-mvcr/otevrene-formalni-normy)

JSON-LD TypeScript definice pro [opendata-mvcr/otevrene-formalni-normy](https://github/opendata-mvcr/otevrene-formalni-normy).

## Stav

V současnosti jsou definice vytvořené pouze pro následující normy:
 - rozhrani-katalogu-otevrenych-dat
 
## Instalace

Pro použití definice jednodušše nainstalujte balíček `otevrene-formalni-normy-dts` z NPM repozitáře:

```bash
    npm install otevrene-formalni-normy-dts
```

## Příklady

### rozhrani-katalogu-otevrenych-dat

```ts
import { Katalog, DatovaSada } from "otevrene-formalni-normy-dts";

const catalog: Katalog = {
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/lkod/mdcr/katalog",
  "typ": "Katalog",
  "název": {
    "cs": "Katalog otevřených dat Ministerstva dopravy",
    "en": "Open Data Catalog of the Ministry of Transport"
  },
  "popis": {
    "cs": "Otevřená data Ministerstva dopravy. Obsahuje datové sady o jízdních řádech a liniových vedeních veřejné dopravy.",
    "en": "Open data of the Ministry of Transport. It contains datasets regarding timetables of public transport."
  },
  "kontaktní_bod": {
    "typ": "Organizace",
    "jméno": {
      "cs": "Ministerstvo dopravy, Odbor veřejné dopravy",
      "en": "Ministry of Transport"
    },
    "e-mail": "mailto:sekretariat.190@mdcr.cz"
  },
  "domovská_stránka": "https://data.gov.cz/datové-sady?poskytovatel=Ministerstvo%20dopravy",
  "poskytovatel": "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/66003008",
  "datová_sada": [
    "https://data.gov.cz/lkod/mdcr/datové-sady/vld",
    "https://data.gov.cz/lkod/mdcr/datové-sady/seznam-zastavky",
    "https://data.gov.cz/lkod/mdcr/datové-sady/seznam-trate"
  ]
};
```
