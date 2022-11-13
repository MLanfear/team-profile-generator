// EMPLOYEE CONSTRUCTOR 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // RETURN NAME
    getName () {
        return this.name;
    }

    // RETURN ID
    getId () {
        return this.id;
    }   

    // RETURN EMAIL
    getEmail () {
        return this.email;
    }

    // RETURN EMPLOYEE TYPE 
    getRole () {
        return 'Employee'; 
    }
};

// EXPORTS 
module.exports = Employee;