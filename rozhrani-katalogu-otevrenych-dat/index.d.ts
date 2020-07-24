import { Lang, Continent, RuianStat, RuianKraj, Theme, Frequency, EuroVoc } from "./enums";


export declare type PodminkyUzitiDilo = "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/" | "https://creativecommons.org/licenses/by/4.0/" | "https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/";
export declare type PodminkyUzitiDatabazeDilo = "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/" | "https://creativecommons.org/licenses/by/4.0/";
export declare type PodminkyUzitiDatabazeZvlastni = "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/" | "https://creativecommons.org/publicdomain/zero/1.0/";
export declare type PodminkyUzitiOsobniUdaje = "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/" | "https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/";

export declare type MediaType = "http://www.iana.org/assignments/media-types/application/json" | string;
export declare type FileType = "http://publications.europa.eu/resource/authority/file-type/ZIP" | string;


/* Structure types */
declare type IRI<E = string> = E;
declare type URL = string;
declare type Email = string;

declare type LangContainer<T> = { [lang in Lang]?: T };

declare type Location = Continent; // ready to add more location IRIs
declare type Ruian = RuianStat | RuianKraj; // ready to add more Ruian IRIs

/* MAIN DECLARATIONS */

export declare type Catalog = {
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

  iri: IRI;
  typ: "Katalog";

  název: LangContainer<string>;

  popis: LangContainer<string>;

  kontaktní_bod: {
    typ: string,
    jméno: LangContainer<string>,
    "e-mail": string
  };

  domovská_stránka: URL;
  poskytovatel: URL;

  /** Dataset IRI */
  datová_sada: IRI[]
}

export declare interface Dataset {
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

  iri: IRI;

  typ: "Datová sada";

  název: LangContainer<string>;

  popis: LangContainer<string>;

  poskytovatel: URL;
  téma: IRI<Theme>[];
  periodicita_aktualizace: IRI<Frequency>;
  klíčové_slovo: LangContainer<string[]>;
  geografické_území: IRI<Location>[];
  prvek_rúian: IRI<Ruian>[];

  časové_pokrytí: {
    typ: string,
    začátek: string,
    konec: string
  };

  kontaktní_bod: {
    typ: string,
    jméno: LangContainer<string>,
    "e-mail": string
  };

  dokumentace: URL;
  specifikace: URL;
  koncept_euroVoc: IRI<EuroVoc>[];
  prostorové_rozlišení_v_metrech: number;

  /** Duration in ISO 8601 format */
  časové_rozlišení: string;

  distribuce: Distribution[]

}

export declare interface Distribution {

  iri: IRI;

  typ: "Distribuce";

  název: LangContainer<string>;

  podmínky_užití: {
    typ: "Specifikace podmínek užití", // ???
    autorské_dílo: IRI<PodminkyUzitiDilo>,
    databáze_chráněná_zvláštními_právy: IRI<PodminkyUzitiDatabazeZvlastni>,
    databáze_jako_autorské_dílo: IRI<PodminkyUzitiDatabazeDilo>,
    osobní_údaje: IRI<PodminkyUzitiOsobniUdaje>
  };

  přístupové_url: URL;

  soubor_ke_stažení?: URL;
  formát?: IRI<FileType>;
  typ_média?: IRI<MediaType>;
  schéma?: URL;
  typ_média_komprese?: IRI<MediaType>;
  typ_média_balíčku?: IRI<MediaType>;

  přístupová_služba?: {
    iri: IRI,
    typ: "Datová služba",
    název: LangContainer<string>,
    přístupový_bod: URL,
    popis_přístupového_bodu: URL,
  }

}