# React Native Notes (Continued)

## Page 9: Stack Navigation & Passing Data
* **Stack =>**
  * -> each new screen is stacked on top of a stack (deck of card)
  * -> When you navigate back, the top card is removed, revealing Previous one.
  * -> It has two Navigator type
    1. **Stack Navigator**
       * -> JS based
       * -> highly customizable.
       * -> lower Performance.
    2. **Native Stack Navigator.**
       * -> better performance.
       * -> native transition / gesture only.
       * -> low customizable.

  ```jsx
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation();
  
  <Button onPress={() => navigation.navigate("About")}>
      Go To About Page
  </Button>
  ```
  *-> or you can use the navigation props that automatically comes in any ~~component~~ Screen.*
  *eg:* `const HomeScreen = ({navigation}) => { }`

* **Passing data between screens :-**
  ```jsx
  <Button title="Go to About"
      onPress={() => navigation.navigate("About", {
          name: 'Pankaj',
          age: 25
      })}
  />
  ```
  *(Arrow pointing to the object `{name: 'Pankaj', age: 25}`)*
  `=> Now we are passing the data here which can be used in About Screen.`
  
  ```jsx
  const AboutScreen = ({route}) => {
      const {name, age} = route.params;
  }
  ```

* **you can also pass default data to any screen from Navigators :-**
  ```jsx
  <Stack.Screen name="About"
      component={AboutScreen}
      initialParams={{name: "Pankaj", age: 25}} 
  />
  ```
  *(Arrow pointing to `initialParams`)*
  `-> This is like passing default initial data to a screen.`

---

## Page 10: Modifying Params & Stack Options
* `=>` you can also set the params Programatically from anywhere.
  ```javascript
  navigation.setParams({ name: "Jalaj", age: 5000 });
  ```

* `=>` you can also send back data from curr screen to Prev screen.
  ```jsx
  <Button title="Go Back To About Page"
      onPress={() => navigation.navigate("Home", {
          name: "Karthik",
          age: 403
      })}
  />
  ```
  ```jsx
  const AboutPageScreen = (~~{navigation, route}~~ {route}) => {
      const {name, age} = route.params
  }
  ```

* **Stack Navigation Options :-**
  * By default the top status Bar of any screen shows the screen title.
  * This can be customized.
  ```jsx
  <Stack.Screen name="Home"
      component={HomeScreen}
      options={{ title: "Welcome Home" }}
      // headerStyle: { backgroundColor: "#" }
      // headerTintColor: "#"
      // headerTitleStyle: { fontWeight: 'bold' }
      // headerRight: () => (<Component />)
      // contentStyle: { backgroundColor: "#" }
  />
  ```
  *(Bracket grouping the commented options)*
  `But these style will be only to that specific screen to apply to all screen add the option to the Parent`
  `<Stack.Navigator initialRouteName="Home" options={{}} >`

---

## Page 11: Dynamic Options & Drawer Navigation
* **Dynamic Stack Navigation Option:**
  ```jsx
  <Stack.Screen name="About"
      component={AboutScreen}
      initialParams={{ name: "Pankaj" }}
      options={({route}) => ({
          title: route.params.name
      })}
  />
  ```
  ```jsx
  <Button title="Go to About"
      onPress={() => navigation.navigate("About", { name: "Vishwas" })}
  />
  ```
  `-> on click of the button It takes you to the About screen the header title should have been About, but because we are setting the title of header dynamically in option so it will show Vishwas.`

* **Drawer Navigation :-**
  * `=> renders a hidden menu, sliding from either side of screen.`
  * `=> It's like sliding sidebar.`
  * `=> npm install @react-navigation/drawer`
  * `=> const Drawer = createDrawerNavigator();`
  ```jsx
  <NavigationContainer>
      <Drawer.Navigator>
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
  ```
  * `=> you can open/close drawer Programmatically.`
    * `navigation.toggleDrawer();`
    * `navigation.jumpTo("Setting");`

---

## Page 12: Drawer & Tab Navigation Options
* **Drawer Navigation option :-**
  ```jsx
  <Drawer.Screen name="Dashboard"
      component={DashboardScreen}
      options={{
          title: "My Dashboard",
          drawerLabel: "Dashboard Header Label",
          drawerActiveTintColor: "...",
          drawerActiveBackgroundColor: "...",
          drawerContentStyle: {
              backgroundColor: "..."
          }
      }}
  />
  ```

* **Tab Navigation :-**
  * `-> Bottom of screen Tabs`
  * `=> npm install @react-navigation/bottom-tabs`
  * `=> const Tabs = createBottomTabNavigator();`
  ```jsx
  <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
          <Tab.Screen name="..." component={{...}} />
          <Tab.Screen ... />
          <Tab.Screen ... />
      </Tab.Navigator>
  </NavigationContainer>
  ```
  *(Arrow from Tab.Screen pointing to `options`)*
  ```jsx
  options={{
      tabBarLabel: "Home",
      tabBarIcon: ...,
      tabBarBadge: ... // -> for Number of missing/emails etc
  }}
  ```
  ```jsx
  screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarShowLabel: true/false,
      tabBarActiveTintColor: "...",
      tabBarInactiveTintColor: "..."
  }}
  ```

---

## Page 13: Expo Router for Navigation
* **Expo Router for Navigation**
  * `-> Although you can use ReactNavigation But it's more like React Router`
    * `React Navigation => React Router`
    * `Expo Router => Nextjs (file based Routing)`
  * `-> Expo Router is made on top of React Router.`
    `Therefore it's more easy/intuitive to use.`
    `Less cumbersome, more manageable.`
  * `=> File base Routing Conventions :-`
    1. `All routes must be inside => [app folder]`
    2. `Any file having default exports => becomes a route.`
    3. `Each folder represent a segment of the URI Path.`
       `eg: app / profile / details / edit.tsx` *(arrows labeling `profile` and `details` as `folder`)*
    4. `index.tsx => represents the root of that segment.`
    5. `app`
       `|_ _layout.tsx`
       `|_ index.tsx => This is what will be shown at the root url/route`

  * **(1) => Example :-**
    `app`
    `|_ index.tsx => This will be accessible at localhost:8081`
    `|_ about.tsx => localhost:8081/about`
    `|_ profile`
        `|_ index.tsx => localhost:8081/profile/index.tsx`

  * **(2) `<Link href="/profile" />` => Just like Nextjs.**

  * **(3) Dynamic Routes :-**
    `app`
    `|_ products`
        `|_ index.tsx`
        `|_ [id].tsx or [id]`
            `|_ index.tsx`
    *(Arrow from `[id].tsx`)* `const { id } = useLocalSearchParams();`

  * **(4) catch all Route :- `[...rest].tsx` => This page will be shown at all other route that id.tsx**
    `const { rest } = useLocalSearchParams()`

---

## Page 14: Layouts, Route Groups, and Links
* **(5) Not-found Route :-**
  * `In Root of you project make a file`
  * `+not-found.tsx`
  * `This is global not-found handler.`
  * `But you can create scoped not-found handler => Just make a +not-found.tsx in any sub-directory.`

* **(6) Layouts :-**
  * `=> Share common UI across multiple pages/screens.`
  * `=> _layout.tsx`

* **(7) Route Groups :- organising Routes.**
  * `(auth)`
    * `|_ register.tsx`
    * `|_ login.tsx`
    * `|_ forgot-password.tsx`

* **(8) `<Link/>`**
  * `=> By default <Link> component looks like a link. which seems like a simple text.`
  * `But we can change it/style it like a button.`
  ```jsx
  <Link href="/products" asChild>
      <Pressable>
          <Text> Products </Text>
      </Pressable>
  </Link>
  ```
  *(Arrow from `asChild`)*
  `This means I am no more a <Link> component, I am what is inside me. But my children has all the property that a <Link> has.`

  * **Relative Routes :-** `Sometimes where we give href we don't want to write full path. So we can give relative path.`
    `<Link href="../" relativeToDirectory >` *(Note: `href="."` is crossed out and replaced with `href="../"`)*

  * **Programmatically Routing :-**
    `import { router } from 'expo-router'`
    `router.push("/profile");`
    `router.replace("/profile") => Won't add the screen to stack but replace last stack`

---

## Page 15: Redirects, Stack, Tab, and Drawer in Expo Router
* **Redirect: `import { Redirect } from "expo-router";`**
  ```jsx
  const ProfileScreen = () => {
      const isLoggedIn = false;
      if (!isLoggedIn) {
          return <Redirect href="/login" />
      }
      return ( <View>
          <Text>Profile</Text>
      </View> )
  }
  ```

* **(9) Stack Navigation => deck of cards.**
  * `=> each screen you navigate to = Placing a new card on top of stack.`
  * `When you go back = removing top card.`
  * `=> In your root _layout.tsx. import { Stack } from "expo-router"`
  ```jsx
  export default RootLayout = () => {
      return (
          <Stack>
              <Stack.Screen name="Home" options={{}} />
              <Stack.Screen name="About" options={{}} />
          </Stack>
      )
  }
  ```
  *(Arrow from `options={{}}` in Home screen)* 
  `options={{ title: "Home" }} This will make the title in Header of the screen as Home.`

* **(10) Tab Navigation :- Tabs at bottom of screen.**
  * `Tabs -> screenOptions.`
  ```jsx
  <Tabs>
      <Tabs.Screen name="Home" options={{}} />
      <Tabs.Screen name="Explore" options={{}} />
  </Tabs>
  ```

* **(11) Drawer Navigation: Side Bar**
  ```jsx
  <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
          <Drawer.Screen name="index" options={{}} />
          <Drawer.Screen name="dashboard" options={{}} />
      </Drawer>
  </GestureHandlerRootView>
  ```

---

## Page 16: Modals, Platform Specific Code, and API Routes
* **(12) Modals :-**
  * `-> modal.tsx`
    ```jsx
    export default const Modal = () => {
        return ( <View>
            <Text>Modal</Text>
        </View>)
    }
    ```
  * `-> _layout.tsx`
    `<Link href='/modal'> Open Modal </Link>`

* **(13) Platform specific code :-**
  * `-> make components like`
    * `about.ios.tsx`
    * `about.android.tsx`
    * `about.web.tsx`
  * `-> Then in the About screen/page use the component`
    ```jsx
    <View>
        <About />
    </View>
    ```
    *(Arrow from `<About />`)* `This will automatically identify which component to import based on the platform.`
  * `-> expo-router also gives you the way to identify which platform you are on.`
    `eg: import { Platform } from 'react-native'`
    `Platform.OS = "web" | "android" | "ios"`

* **(14) api routes :-**
  * `pages routes => renders UI components/screens`
  * `api routes => lets you build REST endpoints`
  * `-> all api route must live inside app folder`
  * `-> The name of each api route should be like`
    `name+api.ts`
  * `-> export async function GET() {`
    `return Response.json({ message: "Hello World" }) }`
