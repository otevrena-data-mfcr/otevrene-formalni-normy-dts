# TypeScriptové definice pro [opendata-mvcr/otevrene-formalni-normy](https://github.com/opendata-mvcr/otevrene-formalni-normy)

[![npm version](https://badge.fury.io/js/otevrene-formalni-normy-dts.svg)](https://www.npmjs.com/package/otevrene-formalni-normy-dts)

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

#### Typy entit
```ts
import { Katalog, DatovaSada } from "otevrene-formalni-normy-dts";

const catalog: Katalog = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/2021-01-11/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/lkod/mdcr/katalog",
  "typ": "Katalog",
  "název": {
    "cs": "Katalog otevřených dat Ministerstva dopravy",
    "en": "Open Data Catalog of the Ministry of Transport"
  },
  //...
};

const dataset: DatovaSada = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/2021-01-11/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/lkod/mdcr/datové-sady/vld",
  "typ": "Datová sada",
  "název": {
      "cs": "Jízdní řády veřejné linkové dopravy",
      "en": "Public transport timetables"
  },
  //...
}
```

#### Enum hodnoty

Některé časté hodnoty jsou uloženy jako enum typy. Jsou to:
  - Frequency
  - Theme
  - RuianStat
  - RuianKraj
  - PodminkyUzitiDilo
  - PodminkyUzitiDatabazeDilo
  - PodminkyUzitiDatabazeZvlastni
  - PodminkyUzitiOsobniUdaje

Použít je můžete přímo jako hodnoty, dosadí správné IRI:

```ts 
  "téma": [
    Theme.Economics, Theme.Government
  ],
```
