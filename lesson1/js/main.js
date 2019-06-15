//task 1

const User = (function () {
    var userName = "Mark";
    var userAge = "20";

    function Get() {
        return console.log(userName + ", age " + userAge);
    };

    function SetName(value) {
        userName = value;
    };

    return {
        get: Get,
        setName: SetName
    };
})();

console.log(User.get());
User.setName("Andrij");
console.log(User.get());


//task 2

const People = (function () {
    var people = ['Mark', 'Alyona', 'Yaroslav', 'Dima', 'Vova'];
    var self = this;

    this.cacheDom = function () {
        self.nameInput = $("#name");
        self.sendbutton = $("#sendValues");
        self.ul = $("#nameList");
        self.renderButton = $('#renderPage')

    }
    this.clearEl = function (el) {
        el.html("  ");
    }
    this.bindEvent = function () {
        self.sendbutton.on('click', addPerson);
        self.renderButton.on('click', this.render);
        self.ul.delegate('span.deleteB', 'click', deletePerson)
    }
    this.render = function () {

        var ulHtml = self.ul;

        self.clearEl(ulHtml);

        function mapFunc(value) {
            return value + "_local";
        }

        console.log(people);
        var mapedPeople = people.map(mapFunc);
        var localPeople = _.object(people, mapedPeople);
        localStorage.setItem('people', JSON.stringify(localPeople));
        people = Object.keys(JSON.parse(localStorage.getItem('people')));
        for (i = 0; i < people.length; i++) {
            self.ul.append("<li><span class='person'>" + people[i] + " </span><span class='deleteB' title='Щоб видалити натисніть Х'>X</span></li>");
        }
        ;

    }
    this.addPerson = function () {
        people.push(self.nameInput.val());
        self.render();
        self.nameInput.val('');
    }
    this.deletePerson = function (event) {
        var removeP = $(event.target).closest('li');
        var i = self.ul.find('li').index(removeP);
        people.splice(i, 1);
        self.render();
    }
    var init = function () {
        self.cacheDom();
        self.bindEvent();
        self.render();
    }
    return {
        init: init
    }

})();

People.init();

//task 3
$('.task3').hide('slow');
const HrestNol = (function () {

    var self = this;
    this.WinVar = [
        ["block1", "block2", "block3"],
        ["block4", "block5", "block6"],
        ["block7", "block8", "block9"],
        ["block1", "block4", "block7"],
        ["block2", "block5", "block8"],
        ["block3", "block6", "block9"],
        ["block1", "block5", "block9"],
        ["block3", "block5", "block7"]
    ];
    this.avalibleBlock = [
        "block1",
        "block2",
        "block3",
        "block4",
        "block5",
        "block6",
        "block7",
        "block8",
        "block9"
    ];

    this.player1 = [];

    this.player2 = [];

    this.blockSelect = function (elem) {
        elem.preventDefault();
        var block = elem.target;
        // debugger;m
        console.log(block.className);
        if (avalibleBlock.indexOf(block.className) !== -1) {
            avalibleBlock.splice(avalibleBlock.indexOf(block.className), 1);
            self.playerNote(block.className)
        } else if (avalibleBlock.length == 0) {
            alert ("Гру закінчено ^-^")
        } else {
            alert ("Цей блок вже вибрано!");
        }


    }
    this.playerNote = function (data) {

        if (self.player1.length <= self.player2.length) {
            $('.'+data).addClass('clasX');
            self.player1.push(data);
            $('.mainBlock').toggleClass('aft');
            $('.mainBlock').toggleClass('bef');

            if(arrayCompars(player1, WinVar) == true) {
                alert("Гравець Х ВИГРАВ!");
                console.log('Game over');
                avalibleBlock.length = 0;
                $('.mainBlock').toggleClass('aft');
                $('.mainBlock').toggleClass('aftV');
                $('.mainBlock').toggleClass('bef');
                return;
            };
            if (avalibleBlock.length == 0){
                alert ("Нічия!");
                $('.mainBlock').toggleClass('aft');
                $('.mainBlock').toggleClass('aftN');
                $('.mainBlock').toggleClass('befN');
            }
        }else if(self.player1.length > self.player2.length) {
            $('.'+data).addClass('classO');
            self.player2.push(data);
            $('.mainBlock').toggleClass('aft');
            $('.mainBlock').toggleClass('bef');

            if(arrayCompars(player2, WinVar) == true) {
                alert("Гравець О ВИГРАВ!");
                console.log('Game over');
                avalibleBlock.length = 0;
                $('.mainBlock').toggleClass('aft');
                $('.mainBlock').toggleClass('bef');
                $('.mainBlock').toggleClass('befV');
            };
        }
    }



    this.arrayCompars = function (player, winarray) {
        for (i = 0; i < winarray.length; i++) {
            var cache = winarray[i];
            var results = _.intersection(cache, player);
            if (results.length == cache.length) {
                return true;
            }
        }
    };

    this.Game = function () {

        $('.mainBlock').on('click', blockSelect);

    }

    this.Start = function () {

        $('#gamee').click(function () {
            $('.task3').show(500);
            if (player1.length !== 0) player1 = [];
            if (player2.length !== 0) player2 = [];
            if (avalibleBlock.length == 0 ){
                for (i=1; i<10; i++){
                    avalibleBlock.push('block'+i)
                }
                for (j=0; j<avalibleBlock.length; j++){
                    if ($('.'+avalibleBlock[j]).hasClass('classO')){
                        $('.'+avalibleBlock[j]).removeClass('classO');
                    } else if ( $('.'+avalibleBlock[j]).hasClass('clasX') ){
                        $('.'+avalibleBlock[j]).removeClass('clasX');
                    }
                }
                console.log(avalibleBlock)
            }

            if ($('.mainBlock').hasClass('aft')){
                $('.mainBlock').toggleClass('bef');
            } else {
                $('.mainBlock').toggleClass('aft');
            };
            if ($('.mainBlock').hasClass('aftV')) $('.mainBlock').removeClass('aftV');
            if ($('.mainBlock').hasClass('aftN')) $('.mainBlock').removeClass('aftN');
            if ($('.mainBlock').hasClass('befV')) $('.mainBlock').removeClass('befV');
            if ($('.mainBlock').hasClass('befN')) $('.mainBlock').removeClass('befN');
            self.Game();


        });
    }

    return {

        start: self.Start
    }
})
();

HrestNol.start();








