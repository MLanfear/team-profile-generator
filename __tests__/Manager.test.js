// MANAGER CONSTRUCTOR
const Manager = require('../lib/Manager');

// CREATE MANAGER OBJECT  
test('creates an Manager object', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// ACQUIRE ROLE
test('gets role of employee', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 