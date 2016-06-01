/// <reference path="../_all.ts" />

module quizzApp{


	/*Defining mainController class
	-----------------------------------*/
	export class mainController{

		static $inject = ['userService', '$mdSidenav', 'dataAccessService'];
				
				
		constructor(
			private userService: IUserService, 
			private $mdSidenav: angular.material.ISidenavService,
			private dataAccessService: quizzApp.common.DataAccessService,
			public allTests: any[],
			public allTestsTyped: quizzApp.domain.Test[],
			private testResource: quizzApp.common.IResourceCustomClass) {
			
			var self = this;
			self.testResource = this.dataAccessService.getTestResource();
			
				
			self.allTestsTyped = self.testResource.all(() => {
				
				self.allTestsTyped.forEach((test)=>{
					
					test.questions.forEach((question) => {
						var answers = self.testResource.answers({id: question.id}, () =>{
							
							question.answers = answers.answers;
							
						});
					});
				});
				
				console.log(self.allTestsTyped);
			});
			
			
			
			
			
			
			
			
			
			
/*			
			var data = testsResource.all(function(){
				
				self.allTests = data;
				
				self.allTests.forEach(function (test) {
                            test.questions.forEach(function (question) {
                            var answers: any = testsResource.answers({id: question.id}, function () {
                               question.answers = answers.answers;                                 
                         }); 
                    });
                    
                });
				
				
					
		});*/
			
			
			
		
			
			self.userService.loadAllUsers().then(
				(users: User[])=>{
					self.users = users;
					self.selected = users[0];
					/*console.log(self.users);*/
				}
			);
			
	
		}

		users: User[] = [];
		selected: User = null;
		
		
		toggleSideNav(who): void {
			
			who === "user" ? 
				this.$mdSidenav('left').toggle() :
				this.$mdSidenav('left_2').toggle();
		}
		
		selectUser(user: User): void {
			console.log('click');
			this.selected = user;
			
			var sidenav = this.$mdSidenav('left');
			if(sidenav.isOpen()) 
				sidenav.close();			
		}
		
		
		
		openSidebar(){
				this.$mdSidenav('left').open();
		}

		closeSidebar(){
				this.$mdSidenav('left').close();
		}

		
		
		
	}


    /*Registering mainController class in Angular module 'contactManagerApp'
    ----------------------------------------------------------------------------*/
	angular.module('quizzApp').controller('mainController', mainController);
	
	
    
    
}