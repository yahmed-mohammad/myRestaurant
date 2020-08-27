(function() {
    'use strict';

    angular.module('public').controller('SignupController', SignupController);

    //SignupController.$inject = ['complete'];
    function SignupController() {
        this.submit = function() {
            this.completed = true;
        }
    }
})();