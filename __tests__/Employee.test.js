// EMPLOYEE CONSTRUCTOR 
const Employee = require('../lib/Employee');

// EMPLOYEE OBJECT CREATION 
test('creates an employee object', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// TEST GETID() NAME 
test('gets employee name', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// TEST GETID() ID 
test('gets employee ID', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// TEST GETEMAIL()
test('gets employee email', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// TEST GETROLE()
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});