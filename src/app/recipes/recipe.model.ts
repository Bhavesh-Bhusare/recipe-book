export class Recipe {
    public recipeName: string;
    public recipeDescription: string;
    public recipeImagepath: string;

    constructor(recipeName:string, recipeDescription:string, recipeImagepath:string){
        this.recipeName = recipeName;
        this.recipeDescription = recipeDescription;
        this.recipeImagepath = recipeImagepath;
    }
}