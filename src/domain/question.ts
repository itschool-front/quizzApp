module quizzApp.domain{
    
    export interface IQuestion{
    
        answers: string[];
                
        description: string;
        answerType: string;
        isHidden: boolean;
        test: number;
        pictureFd: string;
        id: number;
        createdAt: string;
        updatedAt: string;
            
        getAllAnswers(): string[];
        addAnswer(answer: string): void;
        deleteAnswer(id: number): void;        
    }
    
    export class Question implements IQuestion{
        
        constructor(
            public description: string,
            public answerType: string,
            public isHidden: boolean,
            public test: number,
            public pictureFd: string,
            public id: number,
            public createdAt: string,
            public updatedAt: string,
            
            public answers: string[]
        ){}
        
        getAllAnswers(): string[]{
            return this.answers;
        }
        
        addAnswer(answer: string): void{
            this.answers.push(answer);
        }
        
        deleteAnswer(id: number): void{
            
        }
        
    }
    
}