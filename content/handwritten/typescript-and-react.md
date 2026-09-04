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


# TypeScript and React Notes (Part 2)

## Page 1: Component Props & Usage
* **NOTE:** अगर हमें return में सिर्फ `title`, `description` use करना है तो इसका मतलब ये नहीं की `props` में सिर्फ 2 होने चाहिए। इसका मतलब है ये दोनों तो होने ही चाहिए बाकी और भी हो सकते हैं।
  * **eg:**
    ```typescript
    props: {
        title: string,
        description: string,
        age: number,
        address: string
    }
    ```
* We can define the props in the functional component as we did above or define it separately and use it in functional component.
  * **eg:**
    ```typescript
    interface Proptypes {
        title: string,
        description: string
    }
    const PostCard = (props: Proptypes) => { ... }
    ```

* **Using/Calling the component :-**
  * `<PostCard />` ❌ $ightarrow$ ये error देगा की भाई props तो दिए ही नहीं और क्योंकी title और description props का use हो रहा है तो we need to pass it. (This will give an error because props weren't passed, and since title and description props are used, we need to pass them.)
  * `<PostCard title="Pankaj" description="it's my way" />` ✔

---

## Page 2: Children Props & useState with TypeScript
* `children: React.ReactNode`
* `e: React.MouseEvent<HTMLButtonElement>`
* `React.ChangeEvent<HTMLInputElement>`

* **useState :-**
  ```typescript
  const [user, setUser] = useState(null);
  ```
  * `setUser({ username: "Pankaj", age: 25 })` $ightarrow$ This will give you error, because initially the value was null & it doesn't know the types of User. So, whether the object `{ username: "Pankaj", age: 25 }` is assignable to user or not.
  * **Fix:**
    ```typescript
    type UserType = {
        username: string,
        age: number
    }
    const [user, setUser] = useState<UserType | null>(null);
    ```
  * **The above fix is good, but if we are rendering the user in JSX we would need to consider the case where user can be null.**
    ```typescript
    <h1>{user.username}</h1>
    <p>{user.age}</p>
    ```
    *(Marked as error because user may be null.)*
  * **Correct way:**
    ```typescript
    { user ? (
        <div>
            <h1>{user.username}</h1>
            <p>{user.age}</p>
        </div>
    ) : (
        <p>No User</p>
    ) }
    ```
    **OR**
    ```typescript
    <h1>{user?.username}</h1>
    <p>{user?.age}</p>
    ```

---

## Page 3: useReducer with TypeScript & Context API
* **useContext में Types :-**
  * $ightarrow$ Create a `ThemeContext.tsx`
  * $ightarrow$ `ThemeContext.ts` :
    ```typescript
    type StateType = {
        theme: string,
        fontSize: number
    }
    type ActionType = {
        type: "CHANGE_THEME" | "CHANGE_FONTSIZE",
        payload: number
    }
    const INITIAL_STATE = {
        theme: "dark",
        fontSize: 16
    }
    const reducer = (state: StateType, action: ActionType) => {
        switch (action.type) {
            case "CHANGE_THEME":
                return {
                    ...state,
                    theme: state.theme === "dark" ? "light" : "dark"
                };
            case "CHANGE_FONTSIZE":
                return {
                    ...state,
                    fontSize: action.payload
                };
            default:
                return state;
        }
    }
    export const ThemeContext = createContext<{
        state: StateType;
        dispatch: React.Dispatch<ActionType>;
    }>({
        state: INITIAL_STATE,
        dispatch: () => {}
    });
    ```

---

## Page 4: Theme Provider & Using Context State
* **ThemeProvider :-**
  ```typescript
  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
      const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
      return (
          <ThemeContext.Provider value={{ state, dispatch }}>
              {children}
          </ThemeContext.Provider>
      );
  }
  ```
* **Now wrap your application with this ThemeProvider :-**
  ```tsx
  <ThemeProvider>
      <App />
  </ThemeProvider>
  ```
* **Using/consuming state in a component :-**
  ```typescript
  const { state, dispatch } = useContext(ThemeContext);
  ```
  ```tsx
  <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
      Change Theme
  </button>
  ```

---

## Page 5: Combining & Excluding Types
* **useRef & Combining/Excluding Types :-**
  ```typescript
  type ShapeType = "cube" | "square" | "rectangle" | "triangle";
  type TwoShapeType = Exclude<ShapeType, "cube">;
  type ThemeType = "dark" | "light";
  type ColorType = "red" | "blue" | "yellow";

  type ItemProp = {
      color: `${ThemeType}-${ColorType}`
  }
  ```
  * So now color can be:
    * `dark-red`
    * `dark-blue`
    * `dark-yellow`
    *(and light variants)*

---

## Page 6: JSX Element Type & Literal Types (`as const`)
* **JSX.Element type :-**
  * When you write JSX like `<div>Hello World</div>`, React compiles it into `React.createElement()` calls.
  * $ightarrow$ This fn returns `(It actually manipulate dom)` type of JSX.Element.
  * `=>` All react component always return `JSX.Element`.

* **If you have defined a component which accepts 3 arguments/props. But you forgot about the names of prop accepted by that component while calling it.**
  * Press `Ctrl + Space-bar` inside the component tag `<Button />` $ightarrow$ कौन कौन सा prop pass करना है? (Which props need to be passed?)

* **Some people assign `T` for types and `I` for interfaces :-**
  * **eg:** `type TButtonProps = {}`, `interface IButtonProps = {}`

* **`as const`, `as string` :-**
  ```typescript
  let color = "blue"; // color is type string होगा (will be type string)
  let color2 = "blue" as const;
  ```
  * `->` Now this is not a general string. It's exact string value `"blue"`.
  * `->` This is called a **Literal Type**.
  * `->` Now this is **immutable, read only**.
  * `color2 = "green"` ❌ *(Error)*

---

## Page 7: Utility Type `Omit` & `Unknown`
* **Omit :-**
  ```typescript
  type User = {
      name: string,
      age: number,
      Address: string
  }
  type People = Omit<User, "Address">;
  ```
  * `->` Now the type of People will be:
    ```typescript
    {
        name: string,
        age: number
    }
    ```

* **Interesting "UNKNOWN" :-**
  * When we fetch some url data, we don't know the exact structure of the data returned. TypeScript interpets it as `any`.
  * `->` Now if we don't assign proper type to these data, it may crash our application.
  * `response = fetch("http://placeholder.in/user")` $ightarrow$ `any`
  * `->` So, to handle this scenario, we assign `unknown` to the response, which is similar to `any` but diff.
  * `->` इससे होता ये है कि unknown लगने के बाद, जब तक उसका type पता नहीं चल जाता कोई operation नहीं होगा। (This ensures that after setting it to unknown, no operations can be performed on it until its exact type is known.)
  * **eg:**
    ```typescript
    let user: { name: string, age: number };
    let user2: any = user;    // user.name works ✔
    let user3: any = user;    // user.name works ✔
    let user4: unknown = user; // user.name ❌ (Error)
    ```
