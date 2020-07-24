import { Entity } from "../base";

export declare interface Theme {
  iri: "http://publications.europa.eu/resource/authority/data-theme/AGRI" |
  "http://publications.europa.eu/resource/authority/data-theme/ECON" |
  "http://publications.europa.eu/resource/authority/data-theme/EDUC" |
  "http://publications.europa.eu/resource/authority/data-theme/ENER" |
  "http://publications.europa.eu/resource/authority/data-theme/ENVI" |
  "http://publications.europa.eu/resource/authority/data-theme/GOVE" |
  "http://publications.europa.eu/resource/authority/data-theme/HEAL" |
  "http://publications.europa.eu/resource/authority/data-theme/INTR" |
  "http://publications.europa.eu/resource/authority/data-theme/JUST" |
  "http://publications.europa.eu/resource/authority/data-theme/OP_DATPRO" |
  "http://publications.europa.eu/resource/authority/data-theme/REGI" |
  "http://publications.europa.eu/resource/authority/data-theme/SOCI" |
  "http://publications.europa.eu/resource/authority/data-theme/TECH" |
  "http://publications.europa.eu/resource/authority/data-theme/TRAN";
}

export declare interface Frequency {
  iri: "http://publications.europa.eu/resource/authority/frequency/OTHER" |
  "http://publications.europa.eu/resource/authority/frequency/ANNUAL" |
  "http://publications.europa.eu/resource/authority/frequency/ANNUAL_2" |
  "http://publications.europa.eu/resource/authority/frequency/ANNUAL_3" |
  "http://publications.europa.eu/resource/authority/frequency/BIENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/BIMONTHLY" |
  "http://publications.europa.eu/resource/authority/frequency/BIWEEKLY" |
  "http://publications.europa.eu/resource/authority/frequency/CONT" |
  "http://publications.europa.eu/resource/authority/frequency/DAILY" |
  "http://publications.europa.eu/resource/authority/frequency/DAILY_2" |
  "http://publications.europa.eu/resource/authority/frequency/IRREG" |
  "http://publications.europa.eu/resource/authority/frequency/MONTHLY" |
  "http://publications.europa.eu/resource/authority/frequency/MONTHLY_2" |
  "http://publications.europa.eu/resource/authority/frequency/MONTHLY_3" |
  "http://publications.europa.eu/resource/authority/frequency/NEVER" |
  "http://publications.europa.eu/resource/authority/frequency/OP_DATPRO" |
  "http://publications.europa.eu/resource/authority/frequency/QUARTERLY" |
  "http://publications.europa.eu/resource/authority/frequency/TRIENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/UNKNOWN" |
  "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT" |
  "http://publications.europa.eu/resource/authority/frequency/WEEKLY_2" |
  "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3" |
  "http://publications.europa.eu/resource/authority/frequency/QUINQUENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/DECENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/HOURLY" |
  "http://publications.europa.eu/resource/authority/frequency/QUADRENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/BIHOURLY" |
  "http://publications.europa.eu/resource/authority/frequency/TRIHOURLY" |
  "http://publications.europa.eu/resource/authority/frequency/BIDECENNIAL" |
  "http://publications.europa.eu/resource/authority/frequency/TRIDECENNIAL"
};

export declare interface Continent {
  iri:
  "http://publications.europa.eu/resource/authority/continent/AFRICA" |
  "http://publications.europa.eu/resource/authority/continent/AMERICA" |
  "http://publications.europa.eu/resource/authority/continent/ANTARCTICA" |
  "http://publications.europa.eu/resource/authority/continent/ASIA" |
  "http://publications.europa.eu/resource/authority/continent/EUROPE" |
  "http://publications.europa.eu/resource/authority/continent/OCEANIA" |
  "http://publications.europa.eu/resource/authority/continent/OP_DATPRO"
}

export declare interface RuianStat {
  iri: "https://linked.cuzk.cz/resource/ruian/stat/1"
};

export declare interface RuianKraj {
  iri: "https://linked.cuzk.cz/resource/ruian/vusc/19" |
  "https://linked.cuzk.cz/resource/ruian/vusc/35" |
  "https://linked.cuzk.cz/resource/ruian/vusc/116" |
  "https://linked.cuzk.cz/resource/ruian/vusc/51" |
  "https://linked.cuzk.cz/resource/ruian/vusc/108" |
  "https://linked.cuzk.cz/resource/ruian/vusc/86" |
  "https://linked.cuzk.cz/resource/ruian/vusc/78" |
  "https://linked.cuzk.cz/resource/ruian/vusc/132" |
  "https://linked.cuzk.cz/resource/ruian/vusc/124" |
  "https://linked.cuzk.cz/resource/ruian/vusc/94" |
  "https://linked.cuzk.cz/resource/ruian/vusc/43" |
  "https://linked.cuzk.cz/resource/ruian/vusc/27" |
  "https://linked.cuzk.cz/resource/ruian/vusc/60" |
  "https://linked.cuzk.cz/resource/ruian/vusc/141"
}

export declare interface EuroVoc extends Entity { }

export declare interface PodminkyUzitiDilo {
  iri: "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/" | "https://creativecommons.org/licenses/by/4.0/" | "https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/";
}
export declare interface PodminkyUzitiDatabazeDilo {
  iri: "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/" | "https://creativecommons.org/licenses/by/4.0/";
}
export declare interface PodminkyUzitiDatabazeZvlastni {
  iri: "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/" | "https://creativecommons.org/publicdomain/zero/1.0/";
}
export declare interface PodminkyUzitiOsobniUdaje {
  iri: "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/" | "https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/";
}

export declare interface MediaType extends Entity { }
export declare interface FileType extends Entity { }
