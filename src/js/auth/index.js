import angular from 'angular';

// Create the module where our functionality can attach to
let authModule = angular.module('app.auth', []);

// Include our UI-Router config settings
import AuthConfig from './auth.config';
authModule.config(AuthConfig);


// Controllers

export default authModule;