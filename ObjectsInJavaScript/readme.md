

````markdown

## 📦 Object Example

```js
let person2 = {
    name: "Ali",
    "personrole": "admin",
    "person hobbies": ["reading", "gaming", "coding"],
    age: 30
};
````

---

## ✅ Accessing Object Properties

### 🔹 Using Dot Notation

```js
console.log(person2.name);        // Output: "Ali"
console.log(person2.personrole); // Output: "admin"
```

✔️ Dot notation works when:

* Property names are single words
* They don’t contain spaces or special characters
* They start with a letter (not a number)

---

### 🔹 Using Bracket Notation

```js
console.log(person2["person hobbies"]); // Output: ["reading", "gaming", "coding"]
```

✔️ Bracket notation is required when:

* Property names contain spaces (`"person hobbies"`)
* Property names contain special characters (`"user-role"`)
* You access the property dynamically (e.g., using a variable)

---

## 📌 Summary: When to Use What?

| Situation                              | Dot Notation | Bracket Notation |
| -------------------------------------- | ------------ | ---------------- |
| Normal property name (`name`)          | ✅ Yes        | ✅ Yes            |
| Property with space (`person hobbies`) | ❌ No         | ✅ Yes            |
| Property with special char (`a-b`)     | ❌ No         | ✅ Yes            |
| Dynamic key stored in a variable       | ❌ No         | ✅ Yes            |

---

## 👀 Bonus Tip

When using bracket notation with a variable:

```js
let key = "age";
console.log(person2[key]); // Output: 30
```

---

## 🧪 Output of Full Example

```js
console.log(person2.name);                // "Ali"
console.log(person2.personrole);         // "admin"
console.log(person2["person hobbies"]);  // ["reading", "gaming", "coding"]
```

---

## 📚 Conclusion

Dot notation is cleaner and easier, but bracket notation gives you more flexibility. You’ll need both in real-world JavaScript projects, especially when dealing with dynamic data or user-generated keys.

```


