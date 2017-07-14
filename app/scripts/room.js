(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref();
    }
    //query a list of Rooms from Firebase
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
