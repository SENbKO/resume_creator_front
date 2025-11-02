export class ModelExperience{
    companyName : string | null;
    position : string | null;
    description : string | null;

    constructor(companyName : string | null, position : string | null, description : string | null){
        this.companyName = companyName;
        this.position = position;
        this.description = description;
    }


}