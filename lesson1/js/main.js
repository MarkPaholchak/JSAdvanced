//task 1

const User = (function () {
    var userName = "Mark";
    var userAge = "20";

    function Get() {
        return console.log(userName +", age " + userAge);
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
        self.delete = $("span[id^='deleteButton']")
        self.renderButton = $('#renderPage')

    }
    this.clearEl = function (el) {
        el.html("  ") ;
    }
    this.bindEvent  = function () {
        this.delete.click( this.deletePerson(this) )
        self.sendbutton.on('click', addPerson);
        this.renderButton.on('click', this.render);
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
        for(i=0; i<people.length; i++) {
            self.ul.append("<li>" + people[i] + " <span class='deleteB' id='deleteB"+[i]+ "' title='Щоб видалити натисніть Х'>X</span></li>");
        };

    }
    this.addPerson = function () {
        people.push(self.nameInput.val());
        self.render();
        self.nameInput.val('');
    }
    this.deletePerson = function (event) {
        // var removePeolpe = $(elem.currentTarget);
        debugger;
        console.log("work");
        // console.log(_.indexOf(self.peolpe, removePeolpe.innerText));
        // people.splice(_.indexOf(self.peolpe, removePeolpe.innerText), 1)
        // self.render();
        var $remove = $(event.target).closest('span');
        var i = self.ul.find('li').index($remove);
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









