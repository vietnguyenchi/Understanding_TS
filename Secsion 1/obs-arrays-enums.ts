// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Chi Viet', 
//     age: 20,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR};

const person = {
    name: 'Chi Viet', 
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

let favoriteActivity: string[];
favoriteActivity = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}