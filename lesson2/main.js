class Human {
    constructor(name){
        this.name = name;
    }
    skinColor(color) {
        this.skin = color;
        return color;
    }
    language(data){
        this.language = data;
        return data;
    }
    canWalk(boolean){
        if (boolean == false) {
            this.walk = false;
            return false;
        } else if(boolean == true) {
            this.walk = true;
            return true;
        }
    }
    weightSize(numb) {
        this.weight = numb;
        return numb;
    }
    getGender(){
        if (this.gender){
            console.log(this.gender);
        }else {
            console.log('Choose gender');
        }
    }
}
class Man extends Human{
    constructor(name){
        super(name);
        this.gender = "Man";
    };
    work(){
        console.log('Man do some hand work.')
    }
    pumpUp(){
        console.log('After sports, the man looks more muscular')
    }
};
class Woman extends Human{
    constructor(name){
        super(name);
        this.gender = "Woman";
    }
    work(){

        console.log(`${this.name} do some brain work.`);

    }
    beautify() {
        console.log(`After hairbrushes ${this.name} looks more beautiful.`)
    }
};
class Librarian extends Woman{
    constructor(name){
        super(name);
    }
    bookWork(){
        console.log("Librarian will check, if you are in the list.")
    }
    work(){
        super.work();
        console.log(`As Librarian ${this.name} work with books and add every visitor to the visitor's list.`);
        this.bookWork();
    }
}
class Nurse extends Woman{
    constructor(name){
        super(name);
    }
    treatWork(){
        console.log(`${this.name} wash the wound and will provide rest to the everyone who get hurt.`)
    }
    work(){
        super.work();
        console.log(`As Nurse ${this.name} treats the wounded.`);
        this.treatWork();
    }
}
class Hunter extends Man {
    constructor(name){
        super(name);
    }
    huntingWork(){
        console.log(`${this.name} hunt some beast and catch it to the trap.`)
    }
    work(){
        super.work();
        console.log(`As hunter ${this.name} hunt on beast\'s.`);
        this.huntingWork();

    }
}
class Worker extends Man {
    constructor(name){
        super(name);
    }
    workerJob(){
        console.log(`${this.name} start build structure of new house and repair broken houses.`)
    }
    work(){
        super.work();
        console.log(`As worker ${this.name} build house\'s.`);
        this.workerJob();

    }
}

class Animal {
    constructor(kindOf){
        this.kindOf = kindOf;
    }
    skinColor(color) {
        this.skin = color;
        return color;
    }
    woolAvaloble(boolean){
        if (boolean == false) {
            this.haveWool = false;
            return false;
        } else if(boolean == true) {
            this.haveWool = true;
            return true;
        }
    }
    canWalk(boolean){
        if (boolean == false) {
            this.walk = false;
            return false;
        } else if(boolean == true) {
            this.walk = true;
            return true;
        }
    }
    canRun(boolean){
        if (boolean == false) {
            this.run = false;
            return false;
        } else if(boolean == true) {
            this.runv = true;
            return true;
        }
    }
    canFly(boolean){
        if (boolean == false) {
            this.fly = false;
            return false;
        } else if(boolean == true) {
            this.fly = true;
            return true;
        }
    }
    weightSize(numb) {
        this.weight = numb;
        return numb;
    }
    mainFood (data){
        this.mainFood = data;
        console.log(data)
    }
    simpleDay() {
        console.log(`Most time of day ${this.kindOf} eat ${this.mainFood}.`);
        console.log(`But if ${this.kindOf} detect any enemy animal - first of all beast will defend ${this.kindOf} child.`)
    }
}

class  Herbivorous extends Animal {
    constructor(kindOf){
        super(kindOf);
        this.mainFood = "grass, leafs, maybe some fruits or vegetables";
    }

    simpleDay (){
        console.log('This herbivorous mostly are peacefull for other animals.')
        super.simpleDay();
    }
}
class Deers extends Herbivorous {
    constructor(kindOf) {
        super(kindOf);
    };

    simpleDay() {
        console.log(`${this.kindOf} spend many time to travel around forest because of their love to runing`);
        super.simpleDay();
    }
}

class Orangutan extends Herbivorous{
    constructor(kindOf){
        super(kindOf);
    }
    simpleDay() {
        console.log(`${this.kindOf} spend many time to seat on top of trees because of their love to climb on trees`);
        super.simpleDay();
    }
}
class Predator extends Animal{
    constructor(kindOf){
        super(kindOf);
        this.mainFood = "mostly meat of other animals but not only meat - also fruits and vegetables";

    }
    simpleDay (){
        console.log('This predator spend many time to hunt on other animals.')
        super.simpleDay();
    }
}
class Lion extends Predator{
    constructor(kindOf){
        super(kindOf);

    }
    simpleDay(){
        console.log(`${this.kindOf} like to stay on open space when sated and keep an eye on other animals.`);
        super.simpleDay();
    }
}
class Bear extends Predator{
    constructor(kindOf){
        super(kindOf);
    }
    simpleDay(){
        console.log(`${this.kindOf} sleep at summer, if he don\'t sleep - he find some stuff to eat for example ants or salmon fish.`);
        super.simpleDay();
    }
}

class ZooService {
    beastLose(librarian, beastMaster, someBeast){
        this.librarian = librarian;
        this.beastMaster = beastMaster;
        this.someBeast = someBeast;
        console.log(`Oh no, ${this.someBeast.kindOf} is disappear from zoo! Our brave ${this.beastMaster.name} will find it somewhere.`)
        this.beastMaster.huntingWork();
        console.log(`Than our Librarian ${this.librarian.name} will add lost creature to the new list of animals`)
        this.librarian.bookWork();
    }
    disasterInZoo (nurse, worker, beast){
        this.nurse = nurse;
        this.worker = worker;
        this.someBeast = beast;
        console.log(`Oh no! There was weather disaster in zoo recently! Our ${this.someBeast.kindOf} get injured, so nurse ${this.nurse.name} will treat him right now.`)
        this.nurse.treatWork();
        console.log(`And our worker ${this.worker.name} will repiar and build some new houses to our beasts`)
        this.worker.workerJob();
    }
    getZooResidents(deer, monkey, lion, bear){

        this.deer = deer;
        this.monkey = monkey;
        this.lion = lion;
        this.bear = bear;

        console.log(`In zoo you can see ${this.monkey.kindOf}'s in special 'Monkey House'.`);
        this.monkey.simpleDay();
        console.log(`${this.lion.kindOf}'s and ${this.bear.kindOf}'s are located in aviaries for each other.`);
        this.bear.simpleDay();
        this.lion.simpleDay();
        console.log(`${this.deer.kindOf}'s live in special park zone in zoo, so sometimes ${this.deer.kindOf}'s hide from visitors.`)
        this.deer.simpleDay();

    }
    getZooWorker(librarian, doctor, workMaster, beastMaster){
        this.librarian = librarian;
        this.doctor = doctor;
        this.workMaster = workMaster;
        this.beastMaster = beastMaster;

        console.log(`${this.librarian.name} is librarian - she check all animals in one list. ${this.doctor.name} is nurse and she can treat injured or ill animals and peoples. ${this.workMaster.name} is worker and check if all constructions in zoo is fine. ${this.beastMaster.name} is help to catch animals, who escape form zoo.`)
    }

}

class ZooApp {
    constructor(librarian,doctor, workMaster,beastMaster,deer,monkey,lion,bear){
        this.librarian = new Librarian(librarian);
        this.doctor = new Nurse(doctor);
        this.workMaster = new Worker(workMaster);
        this.beastMaster = new Hunter(beastMaster );

        this.deer = new Deers(deer);
        this.monkey = new Orangutan(monkey);
        this.lion = new Lion(lion);
        this.bear = new Bear(bear);

        this.actions = new ZooService();

    }
    disaster(){
        this.actions.disasterInZoo(this.doctor, this.workMaster, this.deer);
    }
    lost(){
        this.actions.beastLose(this.librarian, this.beastMaster, this.bear);
    }
    introduceBeasts(){
        this.actions.getZooResidents(this.deer, this.monkey, this.lion, this.bear);
    }
    introduceWorker(){
        this.actions.getZooWorker(this.doctor, this.doctor, this.workMaster, this.beastMaster);
    }

}
const HappyZoo = new ZooApp('Sally', 'Marcie', 'Arnold', 'Rexar', 'Deer', 'Monkey', 'Lion', 'Bear');
HappyZoo.introduceBeasts();
HappyZoo.introduceWorker();
HappyZoo.disaster();
HappyZoo.lost();









