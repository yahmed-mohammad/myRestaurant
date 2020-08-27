(function() {
    'use strict';

    angular.module('public').controller('SignupController', SignupController);

    function SignupController() {

        this.submit = function() {
            this.completed = true;
        }
    }
})();