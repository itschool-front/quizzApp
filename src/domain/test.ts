/// <reference path="../_all.ts" />
module quizzApp.domain{
    
    export interface ITest{
        
        questions: IQuestion[];
        description: string;
        isPublic: boolean;
        startDate: string;
        endDate: string;
        isHidden: boolean;
        id: number;
        createdAt: string;
        updatedAt: string;        
        
        getAllQuestions(): IQuestion[];
        addQuestion(question: IQuestion): void;
    }
    
    export class Test implements ITest{
        
        constructor(       
            public questions: IQuestion[],
            public description: string,
            public isPublic: boolean,
            public startDate: string,
            public endDate: string,
            public isHidden: boolean,
            public id: number,
            public createdAt: string,
            public updatedAt: string
        ){}
        
        getAllQuestions(): IQuestion[]{
            return this.questions;    
        }
        
        addQuestion(question: IQuestion): void{
            this.questions.push(question);
        }
        
    }   
    
}