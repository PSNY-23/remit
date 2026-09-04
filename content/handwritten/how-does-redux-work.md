# How Redux-works: -

① TYPES :- (there are used in reduces to identify them).
```javascript
export const Increment = "Increment"
export const Decrement = "Decrement"
```

② actions :-> action Creator :
अब ऊपर से types को लेकर action creator बनाये जायेंगे जो action (object) return करेंगे.

```javascript
eg: const increment = () => {
    return {
        type: "Increment", // or Increment
        payload: data
    }
}
```
*   `Types`: Variable mapping.
*   `action-creator`: function that returns an object (action)
*   `action`: object `{ type: " ", payload: " " }`

③ Reducers :- how state should change in response to the dispatched action.
↳ They are functions itself.
↳ we define all the related actions to a slice/store & when action is dispatched from component or `store.dispatch`. These actions comes to reducer and checks which statement it matched with, and based on that the relevant operation is performed.

```javascript
const reducer = (initialState, action) => {
    switch (action.type) {
        case Increment:
            return { count: state.count + 1 };
        case Decrement:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
```

---

④ अब तक हमने देखा, we already have types, actions, reducer defined.
But how to use all of it in our application.

```javascript
store = createStore(reducer);
store.subscribe();
store.dispatch(increment)
store.dispatch(decrement)
```

NOTE: There can be multiple reducers and a lot of actions, so there is a better way to organise them.

(i) `const actions = bindActionCreators({ Increment, Decrement }, store.dispatch)`
अब हम action से सारे actions perform कर सकते हैं `don't need to do store.dispatch(Increment())`
`eg: actions.Increment()`
`actions.Decrement()`

(ii) `const combineReducers = redux.combineReducers`
```javascript
const rootReducers = combineReducers({
    cake: cakeReducers,
    counter: counterReducer
})

store = createStore(rootReducers)
```

NOTE: Now we know that to update the state inside reducer we do: -
`{ count: state.count + 1 }` ✔
`{ count: count + 1 }` ❌ (Because Immutable)
We can't directly update the state.
Here comes Immer.

---

Though for small cases, it doesn't matter much but what if state are big objects.

```javascript
order = {
    id: 1,
    username: "Pankaj",
    products: {
        productID: 1,
        color: "green",
        size: "XL"
    }
}
```

And now we need to update them, like color of second product.
`{ ...order, products: { ...order.products, color: "white" } }`
↳ This is so confusing 😩

here comes immer.
with immer you don't need to worry about anything and you can directly change/update the state now.
Eg: `order.products.color = "white"`

How to use immer:
① `npm i immer`
② `import { produce } from "immer"`
③ 
```javascript
case Increment:
    // return { count: state.count + 1 } =>
    return produce(state, (draft) => {
        draft.count = action.payload || 3
    })
```

---

⑤ Now, sometimes, we need to perform some actions before the Redux actions is executed.
eg: side-effects like data fetching (async task) etc.
attaching some middlewares.

ऐसा करने के लिए redux हमें एक function देता है `applyMiddleware`.
`eg: const applyMiddleware = redux.applyMiddleware;`

```javascript
const store = createStore(rootReducer, applyMiddleware(logger)) 
// any middleware that you want to execute.
// eg: logger to log the action.
```

Now, हम कहें data fetching / api calling के लिए middleware बना कर यहाँ put करेंगे, और api के response के basis पे state कैसे update होगा?

=> So middleware हमें redux workflow को intercept करके कुछ करने का मौका देता है। और अब हमें middleware में define करना है कि हमें क्या करना है।
Now we will make everything, types, actions, for that middleware actions.

**Types =>**
```javascript
eg: export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
```

**Actions =>**
```javascript
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST })
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data })
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error })
```

---

Now अब हम क्या करेंगे, कि api को call करेंगे but Not directly.
एक function define करेंगे और उसमें ऊपर वाले action को dispatch करेंगे based on the api responses.

```javascript
export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await fetch("http://...");
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    }
}
```

`fetchData` -> dispatches 3 actions during the lifetime of api call.
↳ It is called a action-creator but it doesn't return a plain object जैसा कि पहले के action creator करते थे।
↳ It returns an async function.
This returned async function has the access to the dispatch function via middleware & for this to work we need to do some modification in store configuration.

```javascript
eg: import thunk from "redux-thunk"
const store = createStore(rootReducer, applyMiddleware(thunk))
```

---

**Reducer =>** Now we would have a seperate state to store api data.

```javascript
const initialState = {
    data: null,
    loading: false,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
```

Now how to use fetchData function:

```javascript
const { data, loading, error } = useSelector(state => state.data)

useEffect(() => {
    dispatch(fetchData());
}, [dispatch]);

if (loading) return <div>Loading...</div>
if (error) return <div>Error: {error}</div>

return <div>{data.name}</div>
```

---

**Why Redux Toolkit :-**
↳ Redux requires too much boilerplate repetitive code.
(eg: types, actions, FETCH, SUCCESS, FAILURE etc).
↳ a lot of packages needs to be installed for redux to work.
Eg: redux-thunk
immer
Redux-devtools.

And so to solve this issue we have "REDUX TOOLKIT".

i) Changes in store configuration :-
```javascript
// const store = createStore(rootReducer, applyMiddleware(thunk))
// combineReducers({ counter: counterReducer, cake: cakeReducer });

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cake: cakeReducer
    }
});
```

ii) No need to write types & actions, it will be generated automatically.
`Types -> Action -> Reducer with switch statement`
Now we don't have to worry about any of this. We just define the slices.

```javascript
Slice
├── name (types का काम करेगी)
├── initialState
├── counterSlice.reducer (gives you all the reducers)
├── counterSlice.actions (gives you all the actions)
└── extraReducers (to define async operation using build)
```
