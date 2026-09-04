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
