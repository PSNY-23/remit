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
