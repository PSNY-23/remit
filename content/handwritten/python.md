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


# 7) Tuples :-
`myTuple = ("apple", "banana", "cherry")`
↳ Tuples are used to store multiple value in a single var.
↳ ordered & Unchangeable, allows duplicates.

`myTuple[0] => "apple"` `[-1] => "cherry"`
`len(myTuple) => 3`
`myTuple[2:5] =>` from index 2 to index 5 (excluding 5)

`if "apple" in myTuple => True`

**modifying =>** you can't do it, but there are tricks.
change (`tuples -> list`) -> modify -> (`list -> Tuples`)

eg:
```python
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
# ("apple", "kiwi", "cherry")
```

`tuple3 = tuple1 + tuple2`

**unpacking Tuples :-**
(i) `fruits = ("apple", "banana", "cherry")`
    `(green, yellow, red) = fruits`
    ↳ `"apple"`, `"banana"`, `"cherry"`
(ii) `(green, yellow, *other) = fruits`
    ↳ `"apple"`, `"banana"`, `["...", "..."]`
    Asterix `(*)` can be on anywhere

# Loop Tuples :-
(1) `for x in myTuple:`
    `for i in range(len(myTuple)):`
(2) `i=0`
    `while i < len(myTuple):`
        `...`
        `i = i+1`

**Join Two Tuples :-**
`tuple1 = tuple2 + tuple3`

---

# 8) set
`mySet = {"apple", "banana", "cherry"}`
↳ unordered, unchangeable, unindexed, no duplicates.
↳ `True` & `1` are considered same value so can't be together (True & 1) (0 & false)

length of set -> `len(set)`
`set[0] => X` (unindexed)

**loop :-** `for x in mySet:`
          `if "banana" in mySet:`

**modify :-** you can't change items but add new items:
`mySet.add("orange")`
`set1.update(set2)`
`set.remove("banana")` -> cause error if banana doesnt exists
`set.discard("banana")` -> wont cause error

**Join sets :-**
(1) `union()`, `update()` -> Joins all the items from both sets.
(2) `intersection()` -> only the duplicates are eq-in
    `difference()` -> keeps items from the first set that are not in other set.
    `symmetric_difference()` -> keeps all items except duplicates.

**union**
`set3 = set1.union(set2, set3, set4)`
`= set1 | set2 | set3 | set4`

`set2 = set1.union(tuple1) =>` We can merge a Tuple & set also

**update ->** insert all items from one set to another
-> changes the original set, & doesn't return a new set.
eg: `set1.update(set2)`
Both union & update will exclude any duplicates.

**intersection ->** keeps only duplicates.
`set3 = set1.intersection(set2)`
`= set1 & set2`

---

# 9) Dict :- key value pairs.
↳ ordered, changeable, no duplicates.

`len(myDict) =>` length of dictionary.
`myDict = { "brand": "Ford", "model": "Mustang", "year": 1964 }`

`myDict["brand"] => "Ford"`
`myDict.get("brand") => ...`
`myDict.keys() => ...`
`myDict.values() => ...`
`myDict.items() => ...`
`myDict["year"] = 2020`

`if "model" in myDict => ...`

`myDict.update({"year": 2021})`
`myDict.pop("model")`
`myDict.popitem() =>` Remove last inserted item.

**loop =>**
`for x in myDict:`
`for x in myDict.values():`
`for x in myDict.keys():`
`for x,y in myDict.items():`

**copy =>**
`dict2 = dict1.copy()`
`dict2 = dict(dict1)`

**Nested dictionaries =>**
`myDict["language"]["java"]`

---

# 10) if-else :-
```python
if a > b:
elif a == b:
else:
```

Ternary operator => Conditional Expresin.
`print("A") if a > b else print("B")`
`print("A") if a > b else print("=") if a == b else print("B")`

`if a > b and c > a`
`if not a > b`

---

# 11) Match
It's just like switch in JS.

```python
match exprn:
    case x:
        ===
    case y:
        ---
```
eg:
```python
day = 4
match day:
    case 1:
        print("monday")
    case 2:
        print("tuesday")
    case _:
        print("wow")
        # if nothing matched above.
```

---

# 12) loops :-
`break =>` stop the loop
`continue =>` stop the current iteration of the loop (not the loop)

---

# 13) function :-
`def my_function():`

=> Normally जितने arguments function define करते वक़्त देते है उतने Call करते वक़्त पास करने होते है |
But अगर fn def करते वक़्त नहीं पता कि कितने arg आएंगे तो
`def myFunction(*kids):`
=> `**kwargs`
