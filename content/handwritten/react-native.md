# React Native Notes

## Page 1: Core Standard Components
* **Core Standard Components**
  * `<View>` -> non-scrolling (`<div>`)
  * `<Text>` -> (`<p>`)
  * `<Image>` -> (`<img>`)
  * `<ScrollView>` -> (`<div>`)
  * `<TextInput>` -> (`<input/>`)

* -> *When you start the project may give `flex-1` + `bg-white` to the root view container in APP.tsx.*

* **`<Image>`**
  * `source={{uri: 'http:pics.com'}}` -> link
  * `source={logoImagePath}` -> local file
  * `className='w-x h-30'`

* **`<ImageBackground>`**
  * -> `source`
  * -> The diff is that, Image is to render image but `<ImageBackground>` will render an image as background of something.
  * eg: `<ImageBackground> This will be bg of <Logo/> the logo </ImageBackground>`

* **`<ScrollView>`** -> if you don't use it screen won't be scrollable.

* **`<Button>`**
  * `title="Press/Signin"`
  * `onPress={()=>{}}`
  * `color`
  * `disabled`

* **`<Pressable>`** -> ये button की ही तरह है but button जैसा feel नही होता (It is like a button but doesn't feel like a button)
  * `onPress={()=>{}}`
  * `onLongPress` -> Not present in Button.
  * `onPressOut`

* **`<Modal>`** -> overlays app content (interruptive)
  * -> Prompt user to take decision
  * `const [isModalVisible, setIsModalVisible] = useState(false)`
  * `<Modal>`
    * `<View>`
      * `<Text> Modal Content </Text>`
      * `<Button title="close"/>`
    * `</View>`
  * `</Modal>`

---

## Page 2: Modal, StatusBar, Indicators & Custom Components

* **`<Modal>`** (continued)
  ```jsx
  <Modal
    visible={isModalVisible}
    onRequestClose={() => setIsModalVisible(false)} // if user press back button close modal
    animationType="slide" // or 'fade'
    presentationStyle="fullScreen" // or "formSheet" | "pageSheet"
  >
  </Modal>
  ```

* **`<StatusBar>`** -> top screen area (battery, wifi etc)
  * `backgroundColor="green"`
  * `barStyle="dark-content"`
  * `hidden`

* **`<ActivityIndicator>`** -> displays a loading indicator
  * `size="large"`
  * `color="color of spinner"`
  * `animating={true/false}`

* **`Alert`** -> alert dialog
  * `<Button title="Click me" onPress={() => Alert.alert("Invalid data", "Another description")}`

* **Custom Components :-**
  ```jsx
  const GreetCustom = ({name}) => {
      return (
          <View>
              <Text> Hello, {name} </Text>
          </View>
      )
  }
  
  // Usage:
  <GreetCustom name="Pankaj" /> // -> Hello Pankaj.
  ```

* **Styles:**
  * No Parent -> child style inheritance.
  * But Text parent -> Text children style inheritance होता है (happens).

---

## Page 3: Dynamic User Interface & Dimensions API

* **Dynamic User Interface :-**
  * -> All mobiles are not of same dimension.
  * -> Therefore our app must be dynamic to cover that area.
  * -> It can be Portrait / landscape mode.
  * => almost always there will be an outermost `<View>` component in root / APP.tsx.
  
  ```jsx
  <View className="flex-1 justify-center items-center">
  </View>
  ```
  * *`flex-1`* -> This will make the whole screen dynamic to cover all area.
  * *`justify-center items-center`* -> This will make the content come horizontally at center.

* **Dimension API**
  * -> To handle dynamic height/width of box (not container because उसमें तो flexbox है - because it has flexbox).
  * -> To handle fonts etc.
  * `import { Dimensions } from 'react-native';`
  * `const windowWidth = Dimensions.get("screen" | "window").width;`
  * `box { width: windowWidth > 500 ? "70%" : "90%" }`
  * `text { fontSize: windowWidth > 500 ? 50 : 24 }`
  
  * **Note:** Dimension Api doesn't work if screen is rotated. It's width/height is always constant.
  * To fix this => `app.json` => `orientation = "default"`.

---

## Page 4: useWindowDimensions, SafeAreaView & Platform API

* **Handling orientation change with Dimensions (Old way):**
  ```jsx
  const [dimensions, setDimensions] = useState({ window: Dimensions.get("window") });
  
  useEffect(() => {
      const subscription = Dimensions.addEventListener("change", ({window}) => {
          setDimensions({window});
      });
      return () => subscription?.remove();
  });
  
  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  ```
  *But this approach of getting the width & height & then defining the conditional styles based on this is not good. There is a better way.*

* **useWindowDimensions :-**
  * `import { useWindowDimensions } from 'react-native';`
  * `const windowWidth = useWindowDimensions().width;`

* **`<SafeAreaView>`** -> diff device has camera, etc at diff locati(ons)
  * -> if we render things as per one device the thing might be hiding behind on other.
  * -> Here comes `<SafeAreaView>`.
  * -> Just wrap your whole application with this component.
  * `<SafeAreaView className="flex-1 bg-(same as app color)"> ... </SafeAreaView>`

* **Platform API** -> Tells you about device type = android/ios
  * -> based on that you can apply styles.
  * `import { Platform } from 'react-native';`
  * `Platform.OS -> android | ios`

---

## Page 5: Rendering Lists (FlatList)

* **Rendering Lists :-**
  * -> Rendering lists like `listArr.map((list) => <View></View>)` is not good. Because it renders all the items of listArray at once.
  * -> `FlatList` => only renders the item that are needed in the view (screen). So better performance.

  ```jsx
  <FlatList 
      data={listArray}
      renderItem={({item}) => {
          return <View><Text>{item}</Text></View>
      }}
  />
  ```

* **Other Props:**
  * `horizontal` => will make the list item align horizontally in row.
  * `keyExtractor={...}` => like a key.
  * `ItemSeparatorComponent={() => <View></View>}` => to separate list item.
  * `ListEmptyComponent={<Text>No item found</Text>}`

* **Complete FlatList Example:**
  ```jsx
  <FlatList 
      data={listArray}
      renderItem={() => {}}
      horizontal
      keyExtractor={...} // like a key
      ItemSeparatorComponent={<View></View>}
      ListEmptyComponent={<Text> No item found </Text>}
      ListHeaderComponent={<Text> Pokemon List </Text>}
      ListFooterComponent={<Text> End of the list </Text>}
  />
  ```

---

## Page 6: SectionList & Inputs/Forms

* **Section List :-**
  * A performant component designed for rendering sectioned lists.
  ```jsx
  <SectionList 
      sections={groupListData} // e.g. [{type: string, data: string[]}]
      renderItem={({item}) => <View><Text>{item}</Text></View>}
      renderSectionHeader={({section}) => <Text>{section.type}</Text>}
      ItemSeparatorComponent={() => <View></View>}
      SectionSeparatorComponent={() => <View></View>}
  />
  ```

* **Inputs & Forms :-**
  * Web/HTML => `input`, `text area`, `dropdown menu`, `checkbox`, `radio groups`, etc.
  * React Native => `TextInput`, `Switch` } only TWO.
  
  ```jsx
  const [name, setName] = useState("");
  
  <TextInput 
      className=""
      value={name}
      onChangeText={setName}
      placeholder="Enter your name"
      secureTextEntry
      keyboardType="numeric" // "url" | "default" | etc.
      autoCorrect={false}
      autoCapitalize="none"
      multiline // -> अगर multiline input (like textarea use करना है तो styling में minHeight देना होगा textAlignVertical="top"
  />
  ```

---

## Page 7: Switch, KeyboardAvoidingView & Form Handling

* **`<Switch>`** => import from "react-native"
  ```jsx
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  <Switch 
      value={isDarkMode}
      onValueChange={() => setIsDarkMode(prev => !prev)}
      trackColor={{ false: "blue", true: "Red" }}
      thumbColor="Pink"
  />
  ```

* **Making form :-**
  * You can use `<TextInput>`, `<Text>`, `<Button>` and `useState` to make form.
  
* **`<KeyboardAvoidingView>`** -> This is a wrapper for the form so that keyboard doesn't cover form.
  * `behavior="padding"`
  * `keyboardVerticalOffset={100}` -> adjust this using Platform api to apply on ios only.

* **Form Validation :-**
  * -> you can use `react-hook-form`.

* **Form Submission :-**
  ```javascript
  const handleSubmit = () => {
      // validation check
      // reset the states to default
  }
  ```

---

## Page 8: Data Fetching, Pull to Refresh & Navigation

* **Data fetching from backend :-**
  * -> `Fetch(api)` => store in state => call the fetchData in `useEffect` like we did in react.
  * => you can use Tanstack Query as well.

* **Pull on refresh :-**
  ```jsx
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => { 
      setRefreshing(true); 
      fetchData(); 
      setRefreshing(false); 
  }
  
  <FlatList 
      refreshing={refreshing}
      onRefresh={handleRefresh}
  />
  ```

* **Navigation :- To move across diff screen**
  * -> React Navigation or Expo router (inbuilt)
  
  ```jsx
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  const Stack = createNativeStackNavigator();
  
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  ```

  * => React Navigation provides a variety of navigators like:
    * **Stack Navigator:** Provides a way for your application to transition between screens where each new screen is placed on top of a stack.
    * **Drawer Navigator:** Renders a navigation drawer on the side of screen which can be opened/closed via gestures.
    * **Tab Navigator:** Bottom of your screen to switch between diff routes.


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
