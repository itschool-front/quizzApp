/// <reference path="_all.ts" />

module quizzApp {
 
  export class User {
    constructor(
      public name: string, 
      public avatar: string, 
      public bio: string, 
      public notes: Note[])  {      
    }
  }   
  
  export class Note {
    constructor(
      public title: string, 
      public date: Date) {      
    }
  }
  
}