var blocChat = angular.module("blocChat", [])
.controller('blocChat', [$scope, 'ui.router', 'firebase', function(firebase) {
    
}])



-------------------------

(function() {
    function Room(firebase) {
        var allRooms = function() { /* does something */ };
        return {
            all: allRooms
        }
    }
    
    angular.module('blocChat')
    .controller('blocChat', ['ui.router', 'firebase', blocChat])
})();

----------------------------