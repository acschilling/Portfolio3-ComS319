var myApp = angular.module('myApp', []);

var user = element(by.exactBinding('user'));
var userNameValid = element(by.binding('myForm.userName.$valid'));
var formValid = element(by.binding('myForm.$valid'));
var userNameInput = element(by.model('user.name'));

it('should initialize to model', function() {
  expect(user.getText()).toContain('{"name":"name"}');
  expect(userNameValid.getText()).toContain('true');
  expect(formValid.getText()).toContain('true');
});

it('should be invalid if empty when required', function() {
  userNameInput.clear();
  userNameInput.sendKeys('');

  expect(userNameValid.getText()).toContain('false');
  expect(formValid.getText()).toContain('false');
});

it('should be valid if empty when min length is set', function() {
  userLastInput.clear();
  userLastInput.sendKeys('');

  expect(user.getText()).toContain('{"name":"name"}');
  expect(formValid.getText()).toContain('true');
});

it('should be invalid if less than required min length', function() {
  userLastInput.clear();
  userLastInput.sendKeys('xx');

  expect(user.getText()).toContain('{"name":"name"}');
  expect(formValid.getText()).toContain('false');
});

// Simple service
myApp.service('helloWorldService', function() {
    this.welcome = function() {
        return "Welcome!"
    };
});


// Provider    
myApp.provider('helloWorld', function() {

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            welcome: function() {
                return "Welcome, " + name + "!"
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});

// Configure a provider            
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName(user.name);
});


// Example of an Injector
var test = 'exampleInjector';
var helloInjector = $injector.get('helloWorld');
helloInjector(test);

function MyCtrl($scope, helloWorldService, helloWorld) {
    
    $scope.hello = [
        helloWorld.welcome(),
        helloWorldFromService.welcome()];
}