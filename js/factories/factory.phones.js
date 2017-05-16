(function() {
'use strict';

    angular
        .module('EOI')
        .factory('PhonesFactory', PhonesFactory);

    PhonesFactory.inject = ['PhonesFactory'];
    function PhonesFactory() {

        if (localStorage.getItem("desired")) {
            var desired = JSON.parse(localStorage.getItem("desired"));
        } else {
            var desired = [];
        }

        console.log(desired);  

        /************************/

        return {
            getAll: getAll,
            get: get,
            setDesired: setDesired,
            unsetDesired: unsetDesired,
            getDesired: getDesired,
            isDesired: isDesired
        }

        function getAll() {
            return getAllFake();
        }

        function get(id) {
            var toReturn;
            getAll().forEach(function (element, position) {
                if (element.id == id) {
                    toReturn = element;
                }
            });
            return toReturn;
        }

        function setDesired(id) {
            getAll().forEach(function (element, position) {
                if (element.id == id) {
                    desired.push(id);
                    localStorage.setItem("desired", JSON.stringify(desired));
                }
            });
        }

        function unsetDesired(id) {
            desired.forEach(function (element, position) {
                if (id == element) {
                    desired.splice(position,1);
                    localStorage.setItem("desired", JSON.stringify(desired));
                }
            });
        }

        function getDesired() {
            var toReturn = [];

            getAll().forEach(function (element, position) {
                desired.forEach(function(elementDesired, positionDesired) {
                    if (element.id == elementDesired) {
                        toReturn.push(element);
                    }
                });
            });
            console.log(toReturn);
            return toReturn;

        }

        function isDesired(id) {
            var toReturn = true;

            desired.forEach(function(elementDesired, positionDesired) {
                if (id == elementDesired) {
                    toReturn = false;
                }
            });

            console.log(toReturn);
            return toReturn;
        }

        /********************************/

        function getAllFake() {
            return [{
                id: 0,
                name: 'Nexus 5X',
                brand: 'LG',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/06/thumb_5819_phone_front_big.jpeg',
                memory: '2GB',
                screen: '1920x1080',
                bluetooth: 'BLE',
                os: 'ANDROID'
            },
            {
                id: 1,
                name: 'Mi5',
                brand: 'Xiaomi',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/08/thumb_7459_phone_front_big.jpeg',
                memory: '4GB',
                screen: '1920x1080',
                bluetooth: '4B',
                os: 'ANDROID'
            },
            {
                id: 2,
                name: 'iPhone 6s',
                brand: 'Apple',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/06/thumb_5508_phone_front_big.jpeg',
                memory: '4GB',
                screen: '1334x750',
                bluetooth: 'BLE',
                os: 'Ios'
            },
            {
                id: 3,
                name: 'Samsung S8',
                brand: 'Samsung',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/61/thumb_60270_phone_front_big.jpeg',
                memory: '4GB',
                screen: '4220x2080',
                bluetooth: 'BLE',
                os: 'ANDROID'
            },
            {
                id: 4,
                name: 'Huawei P8',
                brand: 'Huawei',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/04/thumb_3900_phone_front_big.jpeg',
                memory: '2GB',
                screen: '720x680',
                bluetooth: 'BLE',
                os: 'ANDROID'
            },
            
            {
                id: 5,
                name: 'iPhone 7',
                brand: 'Apple',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/37/thumb_36250_phone_front_big.jpeg',
                memory: '2GB',
                screen: '1920x1080',
                bluetooth: 'BLE',
                os: 'ios'
            },
            {
                id: 6,
                name: 'LG G6',
                brand: 'LG',
                photo: 'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/60/thumb_59654_phone_front_big.jpeg',
                memory: '4GB',
                screen: '1920x1080',
                bluetooth: 'BLE',
                os: 'ANDROID'
            }];
        }

    }
})();