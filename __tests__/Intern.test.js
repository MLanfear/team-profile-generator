// TESTING INTERN CONSTRUCTOR 
const Intern = require('../lib/Intern');

// INTERN OBJECT CREATION  
test('creates an Intern object', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// GETS SCHOOL
test('gets employee school', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// ACQUIRE ROLE
test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 