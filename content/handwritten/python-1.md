# Python Notes

## Page 1: Introduction & Variables
* `print("string")` or `print(5)`
* `python --version`
* `python index.py` (executes python file)

* **Indentation =>** Indentation refers to spaces at the beginning of a code line.
  * `=>` Other Programming language: Indention is just for readability but in Python it's very important. Logic uses Indention as to indicate a block of code.
  * No. of spaces is up to Programmer, but at least one space तो होना ही चाहिए। (there must be at least one space).
  * **eg:**
    ```python
    if 5 > 2:
        print("hello") # ✔
    ```
    ```python
    if 5 > 2:
    print("hello") # ❌ Error
    ```
  * Use same no. of spaces for same block of code otherwise there will be an error.

* **(2) Comments :-**
  * `#` or `""" """`

* **(3) Variables :-**
  * Python has no command for creating a variable like `let`, `const`, `var`.
  * **eg:** `x = 5`, `y = "John"`
  * or If you want to define type as well:
    ```python
    x = str(3)   # => "3"
    y = int(3)   # => 3
    z = float(3) # => 3.0
    ```
  * **getting type :** `print(type(x)) => <class 'str'>`

---

## Page 2: Naming Conventions & Scope
* **Variable Name :-**
  * `->` Must start with `(a,b,c)` or `(A,B,C)` or `(_)`
  * `->` Can't start with a number
  * `->` Can only contain `(A-z, 0-9, _)`
  * `->` Case sensitive
  * `->` can't be Python keyword
* **you can use:**
  * `=>` Camel Casing : `myVariableName = "John"`
  * `=>` Pascal Casing : `MyVariableName = "John"`
  * `=>` Snake Case : `my_variable_name = "John"`

* **Assigning multiple values :-**
  * `x, y, z = "Orange", "Banana", "Cherry"`
  * `x = y = z = "Orange"` => `x="Orange"`, `y="Orange"`, `z="Orange"`
  * `fruits = ["apple", "banana", "cherry"]`
    `x, y, z = fruits` => `x="apple"`, `y="banana"`, `z="cherry"`

* **Global variables :-**
  * `->` Can be accessed anywhere in code.
  * `->` Just like JS, we have global & local.
  * `global =>` This keyword can make any variable global even if it's inside a fn.
  * **eg:**
    ```python
    def myfunc():
        global x
        x = "fantastic"

    myfunc()
    print(x) # This variable will be accessible as it's global.
    ```

---

## Page 3: Data Types & Strings
* **(4) Data types :-**
  * `x = None` -> `NoneType`
  * `Numeric:` int, float, complex -> eg: `20`, `20.5`, `20j`
  * `Sequence Type:` list, tuple, range
  * `Mapping Type:` dict
  * `Set Type:` set, frozenset
  * `Binary Types:` bytes, bytearray, memoryview

  * `list : ["apple", "banana", "cherry"]`
  * `tuple : ("apple", "banana", "cherry")`
  * `range : range(6)`
  * `dict : {"name": "John", "age": 36}`
  * `set : {"apple", "banana", "cherry"}`
  * `frozenset: frozenset({"apple", "banana", "cherry"})`

* **(5) String :-**
  * `a = "Hello"`
  * `a[0] -> "H"`
  * `a[1] -> "e"`
  * **-> looping in string :-**
    ```python
    for x in "banana":
        print(x)
    ```
  * `->` `a = "Hello"` => `len(a) => 5`
  * **-> check substring in string:**
    * `txt = "The best thing in life is free!"`
    * `print("free" in txt) => True`
    * `-> if "free" in txt:`
    * `-> if "free" not in txt:`

  * **Slicing string:**
    * `b = "Hello, World!"`
    * `print(b[2:5]) => "llo"`
    * `print(b[:5]) => "Hello"`
    * `print(b[2:]) => "llo, World!"`
    * `print(b[-5:-2]) => "orl"`

  * **Modify string :-**
    * `str.upper() / str.lower()` -> to upper/lower
    * `str.strip()` -> remove white space
    * `str.replace("H", "J")` -> replace "H" in the str with "J"
    * `str.split(",")` -> divides in substrings

  * **Format string :-**
    * `age = 36`
    * `txt = "My name is John, I am " + age` ❌
    * `txt = f"My name is John, I am {age}"` ✔

---

## Page 4: Escape Characters, Booleans & Operators
* **Escape character :-**
  * `txt = "We are so called "VIKINGS" from the North."`
  * *ये String के अंदर string है "" के साथ conflict करेगा So, Error देगा।* (This is a string inside a string, it will conflict with "" and throw an Error.)
  * `fix : txt = "We are so called \"VIKINGS\" from the North."`
  * **other escape characters in Python:** `\'`, `\\`, `\n`, `\r`, etc.

* **String methods :-** (Section title noted)

* **Boolean :- True/False**
  * `print(10 > 9) => True`
  * `print(10 == 9) => False`
  * `bool("Hello") => True`
  * `bool(5) => True`
  * `bool() => False`
  * `bool(None) => False`
  * `bool("") => False`
  * `bool(0) => False`
  * `bool([]) => False`
  * `bool(()) => False`
  * `bool({}) => False` 
  * *(apply list, tuple, set, dict etc. empty => False)*

* **Operators =>** `+`, `-`, `*`, `/`, `%`, `**`, `//`
* **assignment operators =>**
  * `=`
  * `+=`
  * `-=`
  * `*=`
  * `/=`
  * `%=`
  * `//=`

---

## Page 5: Collections & Lists
* `and`, `or`, `not` :- (Section title noted)

* **(6) List (Array)**
  * `eg: ["apple", "banana", "cherry"]`
  * `length of list => len(list)`

* **Python collections (Arrays)**

  | Features | List | Tuple | Set | Dict |
  | :--- | :---: | :---: | :---: | :---: |
  | **Ordered** | ✔ | ✔ | ❌ | ✔ |
  | **Changeable** | ✔ | ❌ | ❌ | ✔ |
  | **Duplicate** | ✔ | ✔ | ❌ | ❌ |

* **methods on list :-**
  * `list[0] => access first element of list`
  * `len(list) => length of list`
  * `list[-1] => last element of list`
  * `list[2:5] => gives 2,3,4 th index of list`
  * `list[:5] or list[2:]`
  * `if "apple" in list => check if the list contains "apple".`
  * `list[1] = "black"`
  * `list[1:3] = ["black", "yellow"]`
  * `eg: list = ["apple", "banana", "cherry"]`
  * `list.insert(2, "watermelon") => ["apple", "banana", "watermelon", "cherry"]`
  * `list.append("orange") => add to list at last`
  * `list1.extend(list2) => add two list`
  * `list.remove("banana") => ["apple", "cherry"]` *(If multiple value then removes first occurrence)*
  * `list.pop(1) => Remove the element of index(1).`
  * `list.pop() => remove last item.`
  * `del list[0] => also removes index 0.`
  * `list.clear() => Removes complete list, empty list.`

---

## Page 6: Looping, Sorting & Joining Lists
* **loop list :-**
  * `=> for x in list:`
  * `=> for i in range(len(list)):`
  * `=> i = 0`
    ```python
    while i < len(list):
        # ...
        i += 1
    ```

* **List comprehension :-**
  * `newlist = [x for x in fruits if x != "apple"]`

* **Sorting list :-**
  * `list.sort() => Sort alphabetically/numerically`
  * `list.sort(reverse=True) => descending order sort`
  * `Custom sorting :-`
    * `list.sort(key = myfunction)`
  * `list.reverse()`

* **Copying list :-**
  * `list2 = list1` ❌
    * `=> Because list2 will be reference to list1. Changes made in list1 will be automatically made in list2.`
  * `list2 = list1.copy()` ✔ **OR**
  * `list2 = list(list1)` ✔ **OR**
  * `list2 = list1[:]` ✔

* **Joining Lists :-**
  * `(i) list3 = list1 + list2`
  * `(ii) for x in list2: list1.append(x)`
  * `(iii) list1.extend(list2)`
