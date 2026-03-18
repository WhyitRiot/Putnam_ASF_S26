export interface Monster{
    firstName: string;
    age: number;
    lastName?: string;
    type: "Human" | "Blob" | "Undead";
    moreInfo: string;
}

export interface SuperMonster extends Monster{
    powerLevel: number;
}