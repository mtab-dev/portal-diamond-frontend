export interface IUploadVideo {
    title: string
    description: string
    url: string
    category: ECategory
    sector: ESector
    tag: ETags
    author: string
}

export interface IVideo {
    id: string
    title: string
    description: string
    url: string
    category: ECategory
    sector: ESector
    tag: ETags
    author: string

}


export enum ECategory {
    NINE = "9x9",
    FIVE = "5x5",
}

export enum ESector {
    OFF = "Ataque",
    DEF = "Defesa",
    SPC = "Special Teams",
}

export enum ETags {
    PLAYBOOK = "Playbook",
    SCOUT = "Scout",
    DRILLS = "Drills",
    TREINO = "Treino",	
}