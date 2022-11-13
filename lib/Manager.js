// EMPLOYEE CONSTRUCTOR 
const Employee = require('./Employee');

// EXTENDING EMPLOYEE CONSTRUCTOR 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // ROLE OVERRIDE 
    getRole () {
        return "Manager";
    }
}

// EXPORTS 
module.exports = Manager;