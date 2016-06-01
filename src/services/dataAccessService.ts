module quizzApp.common{
   
   export interface IDataAccessService{
/*      getQuestionsResource():ng.resource.IResourceClass<ITestsResource>;*/
        getQuestionsResource(): ng.resource.IResourceClass<ITestsResource>;
		getTestResource(): IResourceCustomClass;
   }
   
   export interface IResourceCustomClass extends ng.resource.IResourceClass<ITestsResource>{
	   all(func1?: Function, func2?: Function): quizzApp.domain.Test[];
	   answers(params?: Object, func?: Function): any;
	   picture(): ng.resource.IResourceMethod<ITestsResource>;
   }
   
   export interface ITestsResource extends ng.resource.IResource<quizzApp.domain.ITest>{
   }
   
   
   
   /*DATA ACCESS SERVICE*/
   /*service service: returns object with several resource access methods*/
   export class DataAccessService implements IDataAccessService{
       
       static $inject = ['$resource'];       
       
       constructor(private $resource: ng.resource.IResourceService,
                   private serverPath = 'http://itschool.ocr-service.net:1337'){
        }
        
        
        getQuestionsResource():ng.resource.IResourceClass<ITestsResource>{
            return this.$resource('http://itschool.ocr-service.net:1337/test');
        }

        getTestResource():IResourceCustomClass{
			var r = this.$resource('http://itschool.ocr-service.net:1337', {},
	        	{
	        		all: {
	        			method: 'GET',
	        			url: this.serverPath + '/test',
	        			isArray: true
	        		},				
	        		answers: {
	        			method: 'GET',
	        			url: this.serverPath + '/question/:id',
	        			isArray: false
	        		},
	        		picture: {
	        			method: 'GET',
	        			url: this.serverPath + 'question/picture/:id',
	        			isArray: false
	        		}					
		        });
				
			return (r as IResourceCustomClass);
		}

    }
    
    /*REGISTERING DataAccessService in commonServices module*/
    angular.module('commonServices').service('dataAccessService', DataAccessService);
   
 
}