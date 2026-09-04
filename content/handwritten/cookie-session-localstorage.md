# Cookies & localstorage

## ① Cookies :-

-> automatically sent by the browser with each request (if they match the cookie domain & path)
-> can be set by both client/browser & server

=> **Setting cookies in browser :-**
```javascript
document.cookie = "cookieisthis"
```

=> **setting cookies from server in browser**
```javascript
res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
    sameSite: "strict"
})
```

=> **Accessing cookies in the browser :-**
```javascript
const cookies = document.cookie // (you will get all the cookie)
```
पर जिसमें `httpOnly` true है वो नहीं मिलेगा।

=> **Accessing cookie on serverside**
-> use `cookie-parser` middleware
```javascript
app.use(cookieParser());

app.get("/protected", (req, res) => {
    const token = req.cookies.token;
})
```

वैसे तो cookie automatically http request में आती है, But अगर manually config करके भेजना है then...
```javascript
axios.get("/...", {
    withCredentials: true
})
```

---

## ② local Storage :-

*   **To set data :-** `localStorage.setItem("token", token);`
*   **To access data :-** `localStorage.getItem("token");`
*   **To remove :-** `localStorage.removeItem("token");`
*   **To clear all storage :-** `localStorage.clear();`

-> `localStorage` is not sent automatically in http requests. you need to manually attach it in headers.

=> **Sending token from local storage in Browser to server**
```javascript
const token = localStorage.getItem("token")
axios.get("/api/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

=> **Accessing the token from header on server**
```javascript
const middleware = (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    
    if(!token) return res.json({ message: "Access denied" });
    
    jwt.verify(token, "jwt_secret")
    // if (!verification) show error
    
    req.userId = decoded;
    next()
}

app.get("/protected", middleware, (req, res) => {
    userId = req.userId.
});
```

---

# In next js

=> `localStorage` can't be accessed in SSR.

=> **setting the localStorage in the client after getting response from server**
```javascript
const response = await axios.post("/api/login", { email, password });
localStorage.setItem("token", response.data.token);
```

=> **Accessing on client :-**
```javascript
localStorage.getItem("token");
```

**Sending in http :-**
```javascript
axios.get("/api/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

### Accessing & setting cookies on the server

① **Accessing cookie :-**
```javascript
import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get('token');
```

② **setting cookies in server component / Route handler**
```javascript
import { cookies } from 'next/headers';

const cookieStore = cookies();
cookieStore.set('token', token, { httpOnly: true });
```

=> `cookie` api is only accessible on the server side.
=> In next js the handling cookies is similar to React.
