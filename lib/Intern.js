// EMPLOYEE CONSTRUCTOR 
const Employee = require('./Employee');

// EMPLOYEE EXTENSION 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// EXPORTS 
module.exports = Intern;