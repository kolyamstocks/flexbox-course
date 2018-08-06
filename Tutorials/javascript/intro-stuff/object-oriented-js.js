class Instructor {
    constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role;
    }
    
    // Instance method
    renderDetails() {
        console.log(`${this.name}: ${this.role}`)
    }
    
    static helloWorld() {
        console.log('Hi there');
    }
    
    // good example of using a static method / helper method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

const jon = new Instructor({ name: 'Jon Snow' });
const brayden = new Instructor({ name: 'Brayden', role: 'classroom' });
jon.renderDetails();
brayden.renderDetails();

// can call static method directly
Instructor.helloWorld();

console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
    );
console.log(
    `${brayden.name} can teach: ${Instructor.canTeach(brayden)}`
    );