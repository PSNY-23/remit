# TypeScript

① `let users: (string|number)[] => ["Max", 1, 2]` ✔, `true` ❌
   `let users: Array<string|number>` ✔

② Tuple: let's say we want an array that only stores (1, -1). Then how would we define that store.
   `let possibleResult = number[]` ❌ any number (4, 5, 10) can be there.
   `let possibleResult: [number, number]`
   ↳ It will have only two items in array & both number.

③ `let value: {} = 'some text'`
   ↳ It works & it's weird, how can you assign string when define type is object.
   ↳ `{}` is actually not an object but any value except (undefined, null)
   ↳ But then how will you define that a variable is of type object.
   `eg: let user: {}` ❌ This won't work because `{}` will be treated as any - (undefined, null)
   ↳ We have Record Type for this
   `eg: let user: Record<string, string|number>;`
   ↳ Record means it must be an object.

④ Literal Types & enums
   ```typescript
   enum Role {
       ADMIN,
       GUEST,
       USER
   }
   ```
   `UserRole: "Admin" | "Guest" | "User" = "Admin"`
   ↳ (Literal types)
   ↳ These are not values but types itself.

---

# Typescript specific keywords

① `any` => can be anything. (disable type checking)
② `as` => 
   ```typescript
   let value: unknown = "Hello";
   value.length // ❌
   (value as string).length // ✔
   ```
③ `asserts`
④ `declare` => Tells typescript a variable exists, but you don't define it here. (Defined somewhere)
   `eg: declare let globalVar: string;`
⑤ `get` => To define a getter in a class. (method)
⑥ `infer` => Infer types based on context/pattern.
   ↳ first let's understand conditional types:
   `eg: SomeType extends OtherType ? TrueType : FalseType` (Condition है)
   `eg: interface Animal { live(): void }` 
   `interface Dog extends Animal { woof(): void; }`
   `type Example1 = Dog extends Animal ? number : string`
   ↳ ये `number` होगा क्योंकि Dog Animal में आता है।

---

`instanceof` :- checking the types of object.
↳ checks whether an object is an instance of a specific class/constructor fn.
```typescript
eg: class Person {}
const user = new Person()
then -> console.log(user instanceof Person) => true.
```

`super` => To access parents fn/method in a class/child
`super.sayHello()` -> refers to parent class.

`yield` => used inside a generator fn. to pause and resume exe.
```typescript
eg: function* greet() {
    yield "HelloWorld";
    yield "How are you";
    yield "Goodbye";
}
const greeter = greet() => this will create the generator.

console.log(greeter.next().value): // HelloWorld
greeter.next().value => "How are you"
greeter.next().value => "Goodbye"
greeter.next().value => undefined.
```

---

# Keywords

① `break;` => Breaks the execution of the loop, but not the whole fn which return do.
`case:` => Used in switch statement. 
```typescript
let fruit = "apple";
switch(fruit) {
    case "apple":
        console.log("-");
        break;
}
```
`catch` => try/catch/finally
`continue` => skip one iteration & move on
```typescript
for(let i=0; i<5; i++) {
    if(i===2) continue;
    console.log(i)
}
// Prints = 0, 1, 3, 4
```

`debugger` => 
```typescript
function test() {
    let a = 1;
    debugger; // if dev tool or VS code debugger is open this will stop the code execution.
    a++
}
```
`default` => used with switch, case, default. used in export default
`delete` => To remove a property (key-value pair from an object (not array or let/const/var))
```typescript
eg: const user = { name: "pankaj", age: 24 }
delete user.age
user is now { name: "pankaj" }
```
`enum` => `enum size { small, medium, large }` `let mySize = size.medium`
`extends` => Inheriting features from something else. `Dog extends Animal.`
`in` => checking if something exists inside an object/arrays/etc.
```typescript
const user = { name: "pankaj", age: 24 }
console.log("name" in user); // true
console.log("job" in user); // false
const arr = ["a", "b", "c"] -> console.log(1 in arr) ✔ Checks if index 1 exists.
```

---

# Typescript :-

① `type count: number = 10` ✔
   `type count: string = 10` ❌

   `const arrNUM: number[] = [1, 2, 3, "pankaj"]` ❌ (at "pankaj")
   `const arrNUMSTRING: (number|string)[] = [1, 2, 3, "text", "pankaj"]` ✔

NOTE !: If we don't define the types of a variable, ts don't give error but waits for the values assigned, once value is assigned it infers the types from it.

**Objects :-**
```typescript
let obj = { name: "Pankaj", age: 25 } // automatically infers types.
obj.name = "Hina" ✔
obj.name = 20 ❌
obj.age = "old" ❌
```

**=> Data types in typescript :-**
`Primitive => string, number, boolean, null, undefined, symbol`
`Object => Object, Arrays`
   `let person: object = { name: "Pankaj", age: 25 }`
`Array => let numbers: number[] = [1, 2, 3, 4, 5, 6]`

`Tuples =>` fixed sized arrays, where each element can have diff types.
   `let tuple: [string, number] = ["apples", 5];`

`Enums =>` allows you to define a set of named constant.
```typescript
enum Direction { Up = 1, Down, Left, Right }
let direction: Direction = Direction.Up
```

---

`Any :-` If nothing is defined the variable will have any types.

`Unknown :-` Similar to any.
↳ but you must perform some kind of check before performing operation on it.
```typescript
let age: unknown = 10;
if (typeof age === "number") {
    let result = age * 2;
}
```

`Void =>` It is used in function, if it doesn't return anything.
```typescript
function logger(message: string): void {
    console.log(message);
}
```
अब ये fn कुछ return ही नहीं कर रहा So, type of return is `void`.

`Never :` Represents value that never occurs.
eg: A fn that always throw an error or never return.
```typescript
function throwError(message: string) {
    throw new Error(message)
}
// Now what should be the type of return?
// => never.
```

---

`type` => अगर type को extend नहीं करना है।
`interface` => अगर करना है।

**Type Aliases :-** vs **Interfaces :-**
creating custom types
```typescript
type Person = { name: string, age: number, address: string }
interface Person { name: string, age: number, address: string }
```

**Union types :- ( | )**
① `let id: number | string = 123`
   `id = "Pankaj"`
   ↳ It can hold both type of values now.

**Intersection types :- ( & )**
② combine multiple types into one using & operator.
```typescript
interface A { a: number }
interface B { b: string }

type C = A & B;
eg: let result: C = { a: 1, b: "Hello" }
```

**Literal types :-**
③ A specific value of certain things.
```typescript
let direction: "right" | "left" = "left";
// direction can only be "left" / "right" at a time.
```

---

# Generics :-

When we are creating types, we define a definite value to the variable.
eg: `age: number` (Both number & string are a fixed types)
    `user: string`
What if we want to define a placeholder variable for types (not value).
↳ Here comes GENERICS

```typescript
eg: function identity<T>(value: T) {
    console.log(value)
}
```
Here `<T>` ऐसा placeholder है जो एक type लेगा और सारे जगह use करेगा।

```typescript
identity<number>(10) => 10 ✔
identity<string>("hello") => hello ✔ // Both works
```

# React Props in typescript :-

①
```tsx
const PostCard = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
```
Now the problem with it is we are writing props. `props.title`, `props.description` but ts want to know की props में ये exist भी करता है कि नहीं.
So we need to define the type and tell की हाँ भाई props में title, description है.

`props: { title: string, description: string }`
