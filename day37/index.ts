

// 기본타입
let num :number = 1;
let num2 = 2;
let str :string = "hello";
let bool :boolean = true;
let nullVal :null = null;
let undefinedVal :undefined = undefined;
let symbol :symbol = Symbol("hello");
let bigint :bigint = BigInt(1);
let numOrString: number | string;
numOrString = 1;
numOrString = "hello";
// numOrString = true; // 'boolean' is not assignable to parameter of type 'number | string'

// 배열
let array: number[] = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];
// array2.push("hello"); // 'string' is not assignable to parameter of type 'number'
let array3: Array<number> = [1, 2, 3, 4, 5];
let mixed: (number | string)[] = [1, "hello", 2, "world"];
mixed.push(3);
mixed.push("world");
// mixed.push(true); // 'boolean' is not assignable to parameter of type 'number | string'
let mixed2: Array<number | string> = [1, "hello", 2, "world"];

// 튜플
let tuple: [number, string] = [1, "hello"];
tuple.push(2);
tuple.push("world");
// tuple.push(true); // 'boolean' is not assignable to parameter of type 'number | string'

// 함수
let useState: [unknown, (value: unknown) => void] = [1, (value) => {
    console.log(value);
}];
const [count, setCount] = useState;

// 객체
let user = {
    name: "John",
    age: 20,
    isStudent: true,
};
let user2: { name: string; age: number; isStudent: boolean } = {
    name: "John",
    age: 20,
    isStudent: true,
};
user2.name = "Jane";
user2.age = 21;
user2.isStudent = false;
// user2.name = 1; // 'string' is not assignable to parameter of type 'string'
// user2.age = "21"; // 'string' is not assignable to parameter of type 'number'
// user2.isStudent = "true"; // 'string' is not assignable to parameter of type 'boolean'




// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

let a = "1";
let str2 = "str";
// str = 3;

let numArr: number[] = [];
// numArr.push("3");
numArr.push(3);

const users = [];

// type UserType = {
//     name: string;
//     age: number;
//     isChecked: boolean;
// }
interface IUser {
    id: number;
    email: string;
    password: string; 
    name?: string;
    age?: number;
    profileImage?: string;
    isChecked?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const addUser = (user : IUser): boolean => {
    user.isChecked = true;
    users.push(user);
    return true;
}
const newUser: IUser = {
    id: 1,
    email: "taemin@gmail.com",
    password: "1234",
    name: "taemin",
    age: 33,
    isChecked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
} 
const isCompleted = addUser(newUser);

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  