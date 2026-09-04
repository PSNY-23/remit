# State Updates are asynchronous,
means react doesn't immediately updates state. It schedules the update to happen during next render cycle.

React batches state updates into one re-render for optimization.

=> Concept of closures :-
```javascript
const [count, setCount] = useState(0)

const handleClick = () => {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
}
```
-> Actually `handleClick` is a **closure**.
-> Clone fn. remember the state in which it was created or had access to.
-> count is 0 (not halucinal) remember.
-> But when `handleClick` was declared it remembers count = 0. So when `handleClick` is called it only knows count = 0, it doesn't know whether count is updated or not.

Therefore, although each `setCount` is updating the outer `Count`, `setCount` = `useState(0)`, the inner `Count` will always be `(count=0)`.

---

```javascript
const [count, setCount] = useState(0)
const handleIncrease = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    console.log(count) // 0 -> This
}
```
The handle click has memory of `count=0` but we are not using handle click's memory.
Instead we are using `setCount`'s association with its own state to get its prev value & then update it.

=> React/Hooks Internal working called as **Queue**.
**All Hooks in react has a queue :-**
`Hook = { memoizedState: 0, queue: { pending: null }, next: null }` -> goes to actual var like `Count = hook.memoizedState`

`baseState: 0,`
`queue: { pending: null }`
`next: null`

```javascript
setCount(5) 
// action: 5 or ()=>prev+1
// next: null
```
hook queue pending = update or hook.queue.pending -> update1 -> update2 (Linked list)

Now react is scheduled to rendering as pending is not null.

---

When reading state it replays through the whole queue & gets the final value by looping over the whole (linked-list) type queue.

-> queue is like a linked list that is why we are able to do `setCount(prev => prev + 1)`. We know the concept of prev/next node from linked list.

After setting finally calculated **STATE**, it's assigns to both
`hook.memoizedState = newState`
`hook.baseState = newState`
`hook.queue.pending = null`

Now `count === newState` or `hook.memoizedState`.

---

# Hooks Classification
-> state
-> effect
-> cache
-> other

① **State hooks** (They trigger re-render)
-> has own state, + update queue internally
-> used by component
-> It is built on top of `useReducer`

**State hooks**
↳ **Own a State**
↳ **has an update queue**
↳ `useState` -> Built on top of `useReducer`. `const [count, setCount] = useState(0)`
↳ `useReducer` -> State & Reducer logic. `const [state, dispatch] = useReducer(reducer, initialState)`
↳ `useTransition` -> manage priority of state updates. `const [isPending, startTransition] = useTransition()`

② **Effect hooks**
↳ for side-effects
↳ do not manage state, or queue
↳ It manage effect cycle.

---

eg: ① `useEffect` -> Runs after paint
    ~ Async friendly
eg: ② `useLayoutEffect` -> Runs before paint
    -> Blocking
    ~ Used for layout measurements
③ `useInsertionEffect`
    ↳ Runs before DOM mutation
    ↳ mainly for CSS-in-JS libraries.

**Ref hooks:**
↳ Mutable containers
↳ don't cause re-render.
eg: ① `useRef`: Persists mutable object.
    -> value survives renders.
    eg: `const ref = useRef(null)`
② `useImperativeHandle`: customize what Parent ref expose.
    -> used with forwardRef.

**Memoization hooks:** -> Performance / caching (value, fn)
↳ No queue like in state hooks.
eg: ① `useMemo` -> memoizes a computed value -> **value**
    ② `useCallback` -> memoizes a fn -> **function**
    `[value, deps]` -> When dependency changes, value is recomputed.

---

⑤ **Context-hooks** (dependency injection)
↳ These hooks use external state, dont own it.

eg: ① `useContext`
    ↳ subscribe to context
    ↳ Triggers re-render when context value changes.
    ↳ No local state, queue.

⑥ **External - store hooks:** (subscription based)
↳ These hooks sync React with external state systems.

eg: ① `useSyncExternalStore`
    -> used in Redux, Zustand, Recoil etc.
    It's like React subscribes to the outer/External state.

⑦ `useId`, `useDebugValue`
    ↳ generates ID for SSR, Hydration
    ↳ for debugging hooks.

⑧ **Other Experimental**
    `useOptimistic`
    `useActionState` (Server action)
    `useFormStatus`
    `useFormState`

---

*hooks - colors/list -> `useState`, `useReducer`, `useEffect`, `useContext`, `useCallback`, `useMemo`, `useRef`*

① `useRef` :-

**Rules of hooks**
-> only at the top level
-> Never inside loops, conditions or nested.
-> Can't be called from normal fn. always FC or hook.

④ `useState` :-
**Object as initial value.**

```javascript
const [state, setState] = useState({ count: 0, FName: "Pankaj", LName: "Kumar" })

setState({ count: state.count + 1 })
// This work but when we are setting the state in react whole old object will be replaced by the new object.
// In new object we only have count property. FName, LName are not there.

Soln: setState({ ...state, count: state.count + 1 });
```

---

# How do spread operator works in Object/Array

① `const arr = [1, 2, 3]`
  `const arr2 = [...arr, 4, 5]`
  `// [1, 2, 3, 4, 5]`
  `...arr = 1, 2, 3` => Sign just removes the bracket, it does make them a string.

② `const obj = { name: "Pankaj", age: 25 }`
  `const newObj = { ...obj, city: "New York" }` -> Removes the `{}`
  `{ name: "Pankaj", age: 25, city: "New York" }`

③ `function sum(a, b, c) { return a + b + c }`
  `let number = [1, 2, 3] => ...number = 1, 2, 3`
  `sum(...number)`

---

# Other cool operators :

① Arithmetic => `+, -, *, /, %, **, ++, --`
② Assignment => `=`, `+=`, `-=`, `*=`, `/=`, `%=`
③ Comparison => `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
④ logical: `&&`, `||`, `!`
⑤ Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
⑥ Ternary: `Condition ? exp1 : exp2`
⑦ Type checking: `typeof`, `instanceof`
⑧ Other: `delete`, `in`, `void`, `new`, comma (`,`)

① `delete` -> use to delete some properties from an object / array.
  eg: `let Person = { name: 'Pankaj', age: 25 }`
  `delete Person.age`
  ↳ Now person will be `{ name: "Pankaj" }` only.

② `in`: To check if a property exists in an object.
  eg: `console.log("name" in Person) // true`

③ `void`: evaluates an expression but returns undefined.
  `void(2+3)` => calculates 5 but return undefined.

④ comma: -> evaluate multiple expression but return the value of last expression.
  eg: `let x = (1+7, 8-5, 2+3)`
  `console.log(x) => 5`

---

# useState :-

=> Sometimes the initial value in useState is not a static, but needs to be calculated.
eg: `const [state, setState] = useState(getCount())`
↳ This `getCount()` will run on each render to get the initial value.

But we can do a thing so that it gets computed only once. And on other renders it will persist.
Just wrap the thing in a fn.
Ah this time initial value is an object `{ count: getCount() }`
`() => { count: getCount() }`

=> Lazy Initialization :-
Means that the initial value won't be calculated on all the renders. But just once.
For this to work, wrap your initial value in a fn.

=> Never modify a state value directly, because it won't cause any rendering then.
eg: `[numbers, setNumber] = useState([1, 2, 3, 4, 5])`

**Wrong Way**
```javascript
numbers.push(6)
setNumber(numbers)
// This will change the local number:
// numbers = [1, 2, 3, 4, 5, 6]
// But it wont cause re-rendering
```

**Right Way**
```javascript
// (Left blank in notes, implies spreading or returning new array)
```
