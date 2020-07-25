import { Entity } from "../common/interfaces";
import { RuianKraj, RuianStat } from "../common/enums";
import { Frequency, Theme, PodminkyUzitiDilo, PodminkyUzitiDatabazeDilo, PodminkyUzitiDatabazeZvlastni, PodminkyUzitiOsobniUdaje } from "./enums";

export declare interface ThemeEntity extends Entity {
  iri: Theme | string;
}

export declare interface FrequencyEntity extends Entity {
  iri: Frequency | string;
};

export declare interface ContinentEntity extends Entity {
  iri:
  "http://publications.europa.eu/resource/authority/continent/AFRICA" |
  "http://publications.europa.eu/resource/authority/continent/AMERICA" |
  "http://publications.europa.eu/resource/authority/continent/ANTARCTICA" |
  "http://publications.europa.eu/resource/authority/continent/ASIA" |
  "http://publications.europa.eu/resource/authority/continent/EUROPE" |
  "http://publications.europa.eu/resource/authority/continent/OCEANIA" |
  "http://publications.europa.eu/resource/authority/continent/OP_DATPRO"
}

export declare interface RuianStatEntity extends Entity {
  iri: RuianStat | string;
};

export declare interface RuianKrajEntity extends Entity {
  iri: RuianKraj | string;
}

export declare interface RuianOstatniEntity extends Entity { iri: string };

export declare interface EuroVocEntity extends Entity { }

export declare interface PodminkyUzitiDiloEntity extends Entity {
  iri: PodminkyUzitiDilo | string;
}
export declare interface PodminkyUzitiDatabazeDiloEntity extends Entity {
  iri: PodminkyUzitiDatabazeDilo | string;
}
export declare interface PodminkyUzitiDatabazeZvlastniEntity extends Entity {
  iri: PodminkyUzitiDatabazeZvlastni | string;
}
export declare interface PodminkyUzitiOsobniUdajeEntity extends Entity {
  iri: PodminkyUzitiOsobniUdaje | string;
}

export declare interface MediaTypeEntity extends Entity { }
export declare interface FileTypeEntity extends Entity { }
