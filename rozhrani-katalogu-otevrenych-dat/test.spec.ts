import { DatovaSada, Katalog } from ".";
import { PodminkyUzitiDilo } from "./enums";

// Example JSON-LD files from https://ofn.gov.cz/rozhran%C3%AD-katalog%C5%AF-otev%C5%99en%C3%BDch-dat/draft/#polo%C5%BEky-katalog-n%C3%A1zev

const enumTest = PodminkyUzitiDilo.NeobsahujeAutorskaDila;

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

const dataset: DatovaSada =
{
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/lkod/mdcr/datové-sady/vld",
  "typ": "Datová sada",
  "název": {
    "cs": "Jízdní řády veřejné linkové dopravy",
    "en": "Public transport timetables"
  },
  "popis": {
    "cs": "Obsahem datové sady jsou schválené a aktuálně platné jízdní řády veřejné linkové dopravy postoupené do Celostátního informačního systému o jízdních řádech ve strojově zpracovatelném formátu.",
    "en": "This dataset contains approved timetables and timetables in effect for public transport entered into the state-wide timetable information system."
  },
  "poskytovatel": "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/66003008",
  "téma": [
    "http://publications.europa.eu/resource/authority/data-theme/TRAN"
  ],
  "periodicita_aktualizace": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3",
  "klíčové_slovo": {
    "cs": [
      "jízdní řády",
      "veřejná linková doprava",
      "autobus"
    ],
    "en": [
      "timetable",
      "public transport",
      "bus"
    ]
  },
  "geografické_území": [
    "http://publications.europa.eu/resource/authority/continent/EUROPE"
  ],
  "prvek_rúian": [
    "https://linked.cuzk.cz/resource/ruian/stat/1"
  ],
  "časové_pokrytí": {
    "typ": "Časový interval",
    "začátek": "2009-01-01",
    "konec": "2017-12-31"
  },
  "kontaktní_bod": {
    "typ": "Organizace",
    "jméno": {
      "cs": "Ministerstvo dopravy, Odbor veřejné dopravy",
      "en": "Ministry of Transport"
    },
    "e-mail": "mailto:sekretariat.190@mdcr.cz"
  },
  "dokumentace": "https://www.mdcr.cz/Dokumenty/Verejna-doprava/Jizdni-rady,-kalendare-pro-jizdni-rady,-metodi-(1)/Jizdni-rady-verejne-dopravy",
  "specifikace": "https://ofn.gov.cz/jízdní-řády/2020-05-01/",
  "koncept_euroVoc": [
    "http://eurovoc.europa.eu/4512"
  ],
  "prostorové_rozlišení_v_metrech": 12.0,
  "časové_rozlišení": "P1D",
  "distribuce": [{
    "iri": "https://data.gov.cz/lkod/mdcr/datové-sady/vld/distribuce/csv",
    "typ": "Distribuce",
    "podmínky_užití": {
      "typ": "Specifikace podmínek užití",
      "autorské_dílo": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/",
      "databáze_chráněná_zvláštními_právy": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
      "databáze_jako_autorské_dílo": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
      "osobní_údaje": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"
    },
    "přístupové_url": "https://portal.cisjr.cz/pub/draha/mestske/JDF.zip",
    "soubor_ke_stažení": "https://portal.cisjr.cz/pub/draha/mestske/JDF.zip",
    "formát": "http://publications.europa.eu/resource/authority/file-type/ZIP",
    "typ_média": "http://www.iana.org/assignments/media-types/application/json",
    "schéma": "https://portal.cisjr.cz/schemata/json-schema.json",
    "typ_média_komprese": "http://www.iana.org/assignments/media-types/application/zip",
    "typ_média_balíčku": "http://www.iana.org/assignments/media-types/application/zip",
    "název": {
      "en": "JSON distribution in ZIP file",
      "cs": "JSON distribuce v ZIP soubrou"
    }
  },
  {
    "iri": "https://data.gov.cz/lkod/mdcr/datové-sady/vld/distribuce/sparql",
    "typ": "Distribuce",
    "podmínky_užití": {
      "typ": "Specifikace podmínek užití",
      "autorské_dílo": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/",
      "databáze_chráněná_zvláštními_právy": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
      "databáze_jako_autorské_dílo": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
      "osobní_údaje": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"
    },
    "přístupové_url": "https://portal.cisjr.cz/sparql",
    "název": {
      "en": "SPARQL endpoint for timetables",
      "cs": "SPARQL endpoint pro jízdní řády"
    },
    "přístupová_služba": {
      "iri": "https://data.gov.cz/lkod/mdcr/datové-sady/vld/služba/sparql",
      "typ": "Datová služba",
      "název": {
        "cs": "SPARQL endpoint pro jízdní řády",
        "en": "SPARQL endpoint for timetables"
      },
      "přístupový_bod": "https://portal.cisjr.cz/sparql",
      "popis_přístupového_bodu": "https://portal.cisjr.cz/sparql"
    }
  }
  ]
}