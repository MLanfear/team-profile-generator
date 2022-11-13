// EMPLOYEE CONSTRUCTOR 
const Employee = require("./Employee");

// EXTENDING EMPLOYEE CONSTRUCTOR 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        
        super (name, id, email);

        this.github = github; 
    }

    // RETURN GITHUB 
    getGithub () {
        return this.github;
    }

     // OVERRIDE ROLE
    getRole () {
        return "Engineer";
    }
}

// EXPORTS 
module.exports = Engineer;