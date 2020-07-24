import { Lang } from "./enums";
import { Entity } from "../base";
import { Continent, RuianStat, RuianKraj, Theme, Frequency, EuroVoc, PodminkyUzitiDilo, PodminkyUzitiDatabazeZvlastni, PodminkyUzitiDatabazeDilo, PodminkyUzitiOsobniUdaje, FileType, MediaType } from "./interfaces";

export * from "./enums";

/* Structure types */
declare type IRI<E extends Entity> = E["iri"];

declare type LangContainer<T> = { [lang in Lang]?: T };

declare type Location = Continent; // ready to add more location IRIs
declare type Ruian = RuianStat | RuianKraj | RuianOstatni; // ready to add more Ruian IRIs
declare type RuianOstatni = { iri: string };

/* MAIN DECLARATIONS */

/**Konceptuální entita reprezentující datový katalog. */
export declare interface Katalog extends Entity {
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

  /**Hodnota @type */
  typ: "Katalog";

  /**Název
   * @description Tato vlastnost obsahuje název datového katalogu. */
  název: LangContainer<string>;

  /**Popis
   * @description Tato vlastnost obsahuje volný text s popisem datového katalogu. */
  popis: LangContainer<string>;

  /**Poskytovatel
   * @description Poskytovatel datového katalogu. Jedná se o Orgán veřejné moci (OVM).
   * @type IRI OVM z Registru práv a povinností (RPP).
   */
  poskytovatel: IRI<Entity>;

  /**Kontaktní bod - jméno a email
   * @description Tato vlastnost obsahuje kontaktní informace, které mohou být využity pro zasílání připomínek ke katalogu.
   * @type Entita podtypu vcard:Kind s vlastnostmi vcard:fn a vcard:hasEmail.
   */
  kontaktní_bod?: {
    typ: string,
    jméno: LangContainer<string>,
    "e-mail": string
  };

  /**Domovská stránka
   * @description Tato vlastnost odkazuje na domovskou stránku lokálního katalogu, kam mohou chodit uživatelé.
   * @type URL webové stránky.
   */
  domovská_stránka?: string;

  /**Vazba: Datová sada
   * @description Tato vlastnost odkazuje na datové sady v katalogu.
   * @type IRI datové sady.
   */
  datová_sada: IRI<DatovaSada>[]
}

/**Konceptuální entita reprezentující poskytovanou informaci. */
export declare interface DatovaSada extends Entity {
  "@context": "https://pod-test.mvcr.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

  /**Hodnota @id */
  iri: IRI<Entity>;
  /**Hodnota @type */
  typ: "Datová sada";

  /**Název
   * @description Tato vlastnost obsahuje název datové sady.
   */
  název: LangContainer<string>;

  /**Popis
   * @description Tato vlastnost obsahuje volný text s popisem datové sady.
   */
  popis: LangContainer<string>;

  /**Poskytovatel
   * @description Poskytovatel datové sady. Jedná se o Orgán veřejné moci (OVM).
   * @type IRI OVM z Registru práv a povinností (RPP).
   */
  poskytovatel: string;

  /**Téma
   * @description Tato vlastnost odkazuje na kategorii či téma datové sady. Datová sada může být popsána více tématy.
   * @type Několik IRI. Alespoň jedno téma musí být z evropského číselníku datových témat.
   */
  téma: [IRI<Theme>, ...Array<IRI<Entity>>];

  /**Periodicita aktualizace
   * @description Tato vlastnost odkazuje na frekvenci, se kterou je datová sada aktualizována.
   * @type IRI položky z evropského číselníku frekvencí
   */
  periodicita_aktualizace: IRI<Frequency>;

  /**Klíčová slova
   * @description Tato vlastnost obsahuje klíčové slovo nebo značku popisující datovou sadu.
   * @type Text, opakovaná vlastnost.
   */
  klíčové_slovo: LangContainer<string[]>;

  /**Související geografické území - prvek z RÚIAN
   * @description Tato vlastnost odkazuje na územní prvek RÚIAN pokrytý datovou sadou. Datová sada může pokrývat více územních prvků RÚIAN.
   * @type IRI územního prvku RÚIAN
   */
  prvek_rúian: IRI<Ruian>[];

  /**Související geografické území
   * Tato vlastnost odkazuje na geografickou oblast pokrytou datovou sadou. Datová sada může být popsána více geografickými oblastmi.
   * @type IRI položek z evropských číselníků zemí, kontinentů, míst nebo IRI objektu z Geonames.
   */
  geografické_území?: (IRI<Location> | IRI<Entity>)[];

  /**Časové pokrytí
   * @description Tato vlastnost odkazuje na časový úsek pokrytý datovou sadou.
   * @type Entita typu dct:PeriodOfTime s vlastnostmi dcat:startDate a dcat:endDate, které mají datový typ xsd:date.
   */
  časové_pokrytí?: {
    typ: string,
    začátek: string,
    konec: string
  };

  /**Kontaktní bod - jméno a email
   * @description Tato vlastnost obsahuje kontaktní informace, které mohou být využity pro zasílání připomínek k datové sadě.
   * @type Entita podtypu vcard:Kind s vlastnostmi vcard:fn a vcard:hasEmail.
   */
  kontaktní_bod?: {
    typ: string,
    jméno: LangContainer<string>,
    "e-mail": string
  };

  /**Odkaz na dokumentaci
   * @description Tato vlastnost odkazuje na stránku nebo dokument o datové sadě.
   * @type URL webové stránky dokumentace.
   */
  dokumentace?: string;

  /**Odkaz na specifikaci
   * @description Tato vlastnost odkazuje na specifikaci, jíž se datová sada řídí. Takovou specifikací jsou zejména Otevřené formální normy.
   * @type URL specifikace.
   */
  specifikace?: string;

  /**Klasifikace dle EuroVoc
   * @description Tato vlastnost odkazuje na kategorii či téma datové sady dle EuroVoc. Datová sada může být popsána více tématy.
   * @type IRI konceptu z evropského tezauru EuroVoc
   */
  koncept_euroVoc?: IRI<EuroVoc>[];

  /**Prostorové rozlišení v metrech
   * @description Tato vlastnost určuje prostorové rozlišení dat v datové sadě v metrech. Jedná se o nejmenší prostorový rozdíl v datové sadě.
   * @type Desetinné číslo
   */
  prostorové_rozlišení_v_metrech?: number;

  /**Časové rozlišení
   * @description Tato vlastnost určuje časové rozlišení dat v datové sadě. Jedná se o nejmenší časový rozdíl v datové sadě.
   * @type xsd:duration, doba dle ISO 8601
   */
  časové_rozlišení?: string;

  /**Vazba: Je součástí
   * @description Tato vlastnost odkazuje na zastřešující datovou sadu datové série, jejíž je tato datová sada součástí.
   * IRI zastřešující datové sady.
   */
  je_součástí?: IRI<DatovaSada>;

  /**Vazba: Distribuce datové sady
   * @description Tato vlastnost odkazuje z datové sady na její distribuci.
   * @type Entita typu distribuce datové sady.
   */
  distribuce: Distribuce[]

}

export declare type Distribuce = DistribuceSoubor | DistribuceSluzba;

declare interface DistribuceZaklad extends Entity {

  /**Hodnota @id */
  iri: IRI<Entity>;
  /**Hodnota @type */
  typ: "Distribuce";

  /**Specifikace podmínek užití
   * @description Tato vlastnost odkazuje na strukturovaný popis podmínek užití této distribuce datové sady. Hodnoty se řídí návodem na stanovení podmínek užití.
   * @type Entita typu pu:Specifikace s vlastnostmi pu:autorské-dílo, pu:databáze-jako-autorské-dílo, pu:databáze-chráněná-zvláštními-právy a pu:osobní-údaje.
   */
  podmínky_užití: {
    typ: "Specifikace podmínek užití", // ???
    autorské_dílo: IRI<PodminkyUzitiDilo>,
    databáze_chráněná_zvláštními_právy: IRI<PodminkyUzitiDatabazeZvlastni>,
    databáze_jako_autorské_dílo: IRI<PodminkyUzitiDatabazeDilo>,
    osobní_údaje: IRI<PodminkyUzitiOsobniUdaje>
  };

  /**Přístupové URL
   * @description Tato vlastnost obsahuje URL, pomocí kterého se lze dostat k distribuci datové sady. Pro účely katalogů otevřených dat v ČR je hodnota této vlastnosti buďto stejná jako odkaz na stažení souboru v případě distribuce reprezentující soubor ke stažení, nebo stejná jako přístupový bod v případě distribuce reprezentující datovou službu.
   * @type Přístupové URL distribuce datové sady.
   */
  přístupové_url: string;

}

export declare interface DistribuceSoubor extends DistribuceZaklad {

  /**Název distribuce datové sady
   * @description Tato vlastnost obsahuje název distribuce.
   */
  název?: LangContainer<string>;

  /**Odkaz na stažení souboru
   * @description Tato vlastnost obsahuje URL, které je přímým odkazem na stažitelný soubor v daném formátu.
   * @type URL souboru ke stažení.
   */
  soubor_ke_stažení: string;

  /**Formát souboru ke stažení
   * @description Tato vlastnost odkazuje na typ souboru s distribucí.
   * @type IRI položky z evropského číselníku typů souboru (https://op.europa.eu/cs/web/eu-vocabularies/at-dataset/-/resource/dataset/file-type)
   */
  formát: IRI<FileType>;

  /**Media type souboru ke stažení
   * @description Tato vlastnost odkazuje na typ média distribuce tak, jak je definováno v oficiálním rejstříku typů médií spravovaném IANA [IANA-MEDIA-TYPES].
   * @type IRI Media type z rejstříku IANA.
   */
  typ_média: IRI<MediaType>;

  /**Odkaz na strojově čitelné schéma souboru ke stažení
   * @description Tato vlastnost odkazuje na ustanovené schéma, jímž se popisovaná distribuce řídí.
   * @type URL schématu.
   */
  schéma?: string;

  /**Media type použitého kompresního formátu souboru ke stažení
   * @description Tato vlastnost odkazuje na media typ kompresního formátu souboru ke stažení tak, jak je definováno v oficiálním rejstříku typů médií spravovaném IANA [IANA-MEDIA-TYPES]. Kompresní formát určuje techniku použitou ke zmenšení velikosti jednoho souboru ke stažení.
   * @type IRI Media type z rejstříku IANA.
   */
  typ_média_komprese?: IRI<MediaType>;

  /**Media type použitého balíčkovacího formátu souboru ke stažení
   * @description Tato vlastnost odkazuje na media typ balíčkovacího formátu souboru ke stažení tak, jak je definováno v oficiálním rejstříku typů médií spravovaném IANA [IANA-MEDIA-TYPES]. Balíčkovací formát určuje techniku použitou k zabalení více souborů do jednoho.
   * @type IRI Media type z rejstříku IANA.
   */
  typ_média_balíčku?: IRI<MediaType>;
}

export declare interface DistribuceSluzba extends DistribuceZaklad {

  /**Název distribuce datové sady
   * @description Tato vlastnost obsahuje název distribuce.
   */
  název: LangContainer<string>;

  /**Vazba: Přístupová služba
   * @description Datová služba zpřístupňující distribuci datové sady.
   * @type Entita typu datová služba.
   */
  přístupová_služba: DatovaSluzba;

}

export declare interface DatovaSluzba extends Entity {

  /**Hodnota @type */
  typ: "Datová služba",

  /**Název
   * @description Tato vlastnost obsahuje název datové služby.
   */
  název: LangContainer<string>,

  /**Přístupový bod
   * @description Tato vlastnost obsahuje URL přístupového bodu datové služby.
   * @type URL
   */
  přístupový_bod: string,

  /**Popis přístupového bodu
   * @description Tato vlastnost obsahuje URL popisu přístupového bodu datové služby.
   * @type URL
   */
  popis_přístupového_bodu?: string,

}