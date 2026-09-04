# Redux Toolkit

## Page 1: Store Setup & Basic Slices
* **(1) create store & Provide it to the main APP.**
  * `-> Create a folder store in source.`
  * `src/store/` $\rightarrow$ `store.js` + `slice/`

  * **store.js**
    ```javascript
    import { configureStore } from "@reduxjs/toolkit";
    
    export const store = configureStore({
        reducer: {
            counter: counterSlice
        }
    })
    ```

  * **Provide to App:**
    ```javascript
    import { Provider } from "react-redux"
    
    <Provider store={store}>
        <App />
    </Provider>
    ```

* **(2) Create slices :-**
  * `src/store/slice/counterSlice.js`
  
  ```javascript
  import { createSlice } from "@reduxjs/toolkit";
  
  const counterSlice = createSlice({
      name: "Count",
      initialState: { count: 0 },
      reducers: {
          increment: (state) => { state.count += 1 }
      }
  })
  
  export const { increment } = counterSlice.actions;
  export default counterSlice.reducer;
  ```

* `=>` This works fine, but generally we don't set the initial state this is set by fetching data from backend and when the state changes how do we update the backend data as well.
* This is done using middlewares $\rightarrow$ **redux-thunk**

---

## Page 2: Integrating Backend with RTK (Thunks)
* **=> Integrating backend in RTK using thunks.**
  * `createAsyncThunk helps you create -> action -> API calls`
  
  * **Folder Structure:**
    * `store/`
      * `↳ Slices/`
        * `↳ counterSlice.js`
      * `↳ Services/`
        * `↳ counterService.js` `// For API calls`
      * `↳ Thunks/`
        * `↳ counterThunks.js` `// Async action using thunks`
      * `↳ middleware/`
      * `↳ Selectors/`
        * `↳ counterSelector.js` `// Selectors for accessing the state`

* **counterSlice.js**
  ```javascript
  import { createSlice } from "@reduxjs/toolkit";
  import { fetchCounter } from "../Thunks/counterThunks";
  
  const counterSlice = createSlice({
      name: 'counter',
      initialState: { countValue: 0, status: 'idle', error: null },
      reducers: { },
      extraReducers: (builder) => {
          builder.addCase(fetchCounter.pending, (state) => {
              state.status = "loading"
          })
          .addCase(fetchCounter.fulfilled, (state, action) => {
              state.status = "fulfilled";
              state.value = action.payload.value;
          })
          .addCase(fetchCounter.rejected, (state, action) => {
              state.status = "failed";
              state.error = action.error.message;
          })
      }
  })
  export default counterSlice;
  ```

---

## Page 3: Services, Thunks & Selectors
* **=> CounterService.js :-**
  ```javascript
  import axios from "axios";
  const API_URL = "http://localhost:3000/api/counter";
  
  export const fetchCounterFromAPI = async () => {
      const response = await axios.get(API_URL)
      return response.data
  }
  
  export const updateCounterOnAPI = async (val) => {
      const response = await axios.post(API_URL, {value})
      return response.data
  }
  ```

* **=> CounterThunks.js :-**
  ```javascript
  import { createAsyncThunk } from "@reduxjs/toolkit";
  import { fetchCounterFromAPI, updateCounterOnAPI } from "../Services/counterService.js";
  
  export const fetchCounter = createAsyncThunk('counter/fetchCounter', async () => {
      const counter = await fetchCounterFromAPI();
      return counter;
  });
  
  export const updateCounter = createAsyncThunk('counter/updateCounter', async (val) => {
      const updateCounter = await updateCounterOnAPI(val);
      return updateCounter;
  });
  ```

* **=> CounterSelector.js :- (`src/store/selectors/counterSelector.js`)**
  ```javascript
  export const selectCounterValue = (state) => state.counter.value;
  export const selectCounterStatus = (state) => state.counter.status;
  ```

---

## Page 4: React Components Integration
* **=> React Components Integration :-**
  * `src/components/counter.jsx :-`
  ```javascript
  import { useDispatch, useSelector } from "react-redux";
  import { fetchCounter, updateCounter } from "../Thunks/counterThunks.js"
  import { selectCounterValue, selectCounterStatus } from "../Selectors/counterSelector.js"
  
  const Counter = () => {
      const dispatch = useDispatch();
      const count = useSelector(selectCounterValue);
      const status = useSelector(selectCounterStatus);
      
      useEffect(() => {
          dispatch(fetchCounter());
      }, [dispatch]);
      
      return (
          <div>
              <h1>Counter: {count}</h1>
              {status === "loading" && <p>Loading...</p>}
              {status === "failed" && <p>Error fetching data or updating data</p>}
              
              <button onClick={() => dispatch(updateCounter(count + 1))}>
                  Increase
              </button>
          </div>
      )
  }
  ```
