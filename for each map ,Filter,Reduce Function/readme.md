

---

````markdown
# 🔁 JavaScript Loops: `for...in`, `for...of`, `.forEach()`

This repository demonstrates the difference and use-cases of three powerful JavaScript loop types:  
- `for...in`
- `for...of`
- `.forEach()`

---

## 📌 1. `for...in` Loop

### ✅ Used for:
- Iterating over **object properties**
- Can be used with arrays (returns index), but not recommended

### 🔍 Concept:
Iterates over **enumerable property names (keys)** of an object.

### 💡 Example:
```js
const person = {
  name: "Ali",
  age: 22,
  city: "Lahore"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}
````

🔸 Output:

```
name : Ali
age : 22
city : Lahore
```

---

## 📌 2. `for...of` Loop

### ✅ Used for:

* Iterating over **iterables**: Arrays, Strings, Sets, Maps, etc.
* ❌ Doesn't work directly on objects

### 🔍 Concept:

Iterates over **values** of an iterable.

### 💡 Example with Array:

```js
let numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}
```

🔸 Output:

```
10
20
30
```

### 💡 Example with String:

```js
let str = "Hi";

for (let char of str) {
  console.log(char);
}
```

🔸 Output:

```
H
i
```

---

## 📌 3. `.forEach()` Method

### ✅ Used for:

* Arrays only
* Executing a function on each element

### 🔍 Concept:

Runs a callback function for every item in the array.

### 💡 Example:

```js
let nums = [1, 2, 3];

nums.forEach(function(num, index) {
  console.log("Index:", index, "Value:", num);
});
```

🔸 Output:

```
Index: 0 Value: 1
Index: 1 Value: 2
Index: 2 Value: 3
```

---

## 📊 Summary Comparison

| Feature         | `for...in`        | `for...of`        | `.forEach()`           |
| --------------- | ----------------- | ----------------- | ---------------------- |
| Use on Object   | ✅ Yes             | ❌ No              | ❌ No                   |
| Use on Array    | ✅ (returns index) | ✅ (returns value) | ✅ (value + index)      |
| Return Value    | Key / Index       | Value             | None (callback)        |
| Can Break Loop? | ✅ Yes             | ✅ Yes             | ❌ No                   |
| Async Support   | ❌ Not ideal       | ✅ Can use `await` | ❌ No (`await` ignored) |

---

## 🧠 Real-World Use-Cases

* **`for...in`**: Useful for looping through object properties like API responses, settings, etc.
* **`for...of`**: Great for looping through data like user lists, form fields, etc.
* **`.forEach()`**: Best when you want to apply a function to each array element (e.g. rendering UI components).

# 🔄 JavaScript: `map()` vs `filter()`

This document explains the difference between `map()` and `filter()` methods in JavaScript, with special focus on **when you should use `map()`** and **when you shouldn't** — and what happens if you misuse it!

---

## 🧠 `map()` — What Is It?

### ✅ Purpose:
- To **transform each element** in an array
- Returns a **new array** of the **same length** with modified values

### 🛠️ How to Use:
```javascript
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
````

---

## 🧠 `filter()` — What Is It?

### ✅ Purpose:

* To **select/filter** elements based on a condition
* Returns a **new array** with **only matching elements**

### 🛠️ How to Use:

```javascript
let nums = [1, 2, 3, 4];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

## ❌ Misusing `map()` for Filtering

### 🔴 Problem:

Using `map()` for filtering creates **useless `undefined` or `null` entries**.

### 😵 Example:

```javascript
let words = ["hello", "world", "JavaScript"];

let wrongFilter = words.map(word => {
  if (word.length > 6) {
    return word;
  }
});

console.log(wrongFilter); // [undefined, undefined, "JavaScript"]
```

### 🧨 What Went Wrong?

* `map()` tries to transform **every** item
* If condition fails, no return — so result is `undefined`

---

## ✅ Correct Way: Use `filter()` for Filtering

```javascript
let filtered = words.filter(word => word.length > 6);
console.log(filtered); // ["JavaScript"]
```

---

## ✅ When to Use `map()`

| ✅ Use `map()` When...                        |
| -------------------------------------------- |
| You want to **modify/transform** each item   |
| You want to create a new version of an array |
| Output length will remain **same**           |

**Example:**

```javascript
let prices = [100, 200, 300];
let withTax = prices.map(price => price * 1.15);
```

---

## ❌ When NOT to Use `map()`

| ❌ Don’t Use `map()` When...                      |
| ------------------------------------------------ |
| You want to **remove/filter** certain items      |
| You’re only checking for a **condition (if)**    |
| You’re not returning anything from your callback |

---

## 🚫 If You Misuse `map()`, You Might Get:

| Issue              | Example                           | Result                      |
| ------------------ | --------------------------------- | --------------------------- |
| `undefined`s       | `map()` with no return            | `[undefined, ..., "value"]` |
| Extra cleanup work | Need to add `.filter()` afterward | More code complexity        |
| Performance cost   | Looping over unwanted elements    | Slower performance          |

---

## ✅ Best Practice Summary

| Task                         | Use This         |
| ---------------------------- | ---------------- |
| Transform all items          | `map()` jab apko aik naya array bannana h existing aray ky data ky base  pr          |
| Filter/select specific items | `filter()`yai bhi aik naya aray bnaata h likn wo value lata h jo condition ko fulfil kary        |
| Both transform + filter      | `filter().map()` |

---



## 🔗 Author

Made with 💻 by \[Muzamil Iqbal]


