export class Film {
    id? : number;
    nom? : string;
    description? : string;
    descVisible?:boolean;

    constructor(args:Film={}){
        this.id = args.id;
        this.nom = args.nom;
        this.description = args.description;
        this.descVisible =args.descVisible;
    }
}


