// Object destructing
const person = {
    firstName: 'Grant',
    lastName: 'Forsythe',
    age: 24
};

const printName = ({ firstName, lastName }) => {
    console.log(`Print name: ${firstName} ${lastName}`);
};

printName(person);

const { firstName, lastName } = person;
console.log(`Full name: ${firstName} ${lastName}`);

// Array destructing (similar to Python's unpacking)
const hobbies = ['Sports', 'Cooking', 'BJJ'];
const [hobby1, hobby2, hobby3] = hobbies;

console.log(hobby1, hobby2, hobby3);