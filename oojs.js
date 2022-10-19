// const name = ["AA", "BB", "cc"];
// names.length;
// names.sort();
// const name2= new String('ryu');

// const userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };

// console.log(userOne.name);
// userOne.login();

//dot notation//
// userOne.name = 'Yoshi';
//bracket notation//
// userOne['email'] = 'yoshi@ninjas.com';
// //variable//
// const prop = 'name';
// userOne[prop];

// //new property//
// userOne.age = 25;
// console.log(userOne);

// //classes//
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email,  'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// //steal//
// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(Elementinusers => {
//             return Elementinusers.email != user.email;
//         })
//     }
// }

//construction function to creat class//
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

//creat method in class//
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

//inhereting the class User//
function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

//inhereting the prototype//
Admin.prototype = Object.create(User.prototype);

//add new proto to Admin only//
Admin.prototype.deleteUser = function(u){
    users =users.filter(user => {
        return user.email != u.email;
    });
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('yoshi@ninjas.com', 'Yoshi');
const admin = new Admin('shaun@ninjas.com', 'shaun');

let users = [userOne, userTwo, admin]
// console.log(userOne);
// userTwo.login();
console.log(admin);
console.log(users);
admin.deleteUser(users[0]);
console.log(users);


// const admin = new Admin('shaun@ninjas.com', 'shaun');
// let users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);
// console.log(userOne);
// console.log(users);



// console.log(userOne);
// console.log(userTwo);

// userOne.login();
// userTwo.logout();

//method chainning//
// userOne.updateScore();
// userOne.updateScore();
// userOne.updateScore();
// return this in each method to chain//
// userOne.login().updateScore().updateScore().logout();













