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
