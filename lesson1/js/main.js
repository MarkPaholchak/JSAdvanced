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

    function cacheDom() {
        self.nameInput = $("#name");
        self.sendbutton = $("#sendValues");
        self.ul = $("#nameList");
        self.renderButton = $('#renderPage')

    }

    function bindEvent() {
        // self.sendbutton.on('click', addPerson);
        self.renderButton.on('click', render());
    }
    function render() {
        function mapFunc(value) {
            return value + "_local";

        }
        for(i=0; i<people.length; i++){
            self.ul.append("<li>"+ people[i] +"</li>");
        }
        var localPeople = _.object(people, people.forEach(mapFunc));

        localStorage.setItem('people', JSON.stringify(localPeople));
        console.log(localPeople);
        document.location.reload();

    }
    var init = function () {
        this.cacheDom();
        this.bindEent();
        this.render();
    }
    return {
        init: init
    }
})();

People.init();











