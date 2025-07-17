# 📘 JavaScript: `var`, `let`, and `const` Explained

This document explains the key differences between `var`, `let`, and `const` in JavaScript — including scope, hoisting, and best practices — with examples.

---

## 📌 1. Basic Differences

| Feature            | `var`                  | `let`                    | `const`                   |
| ------------------ | ---------------------- | ------------------------ | ------------------------- |
| **Scope**          | Function Scope         | Block Scope `{}`         | Block Scope `{}`          |
| **Hoisting**       | ✅ Hoisted (undefined) | ✅ Hoisted (but in TDZ)  | ✅ Hoisted (but in TDZ)   |
| **Re-declaration** | ✅ Allowed             | ❌ Not Allowed           | ❌ Not Allowed            |
| **Re-assignment**  | ✅ Allowed             | ✅ Allowed               | ❌ Not Allowed            |
| **Default Use**    | ❌ Old JavaScript      | ✅ When value may change | ✅ When value is constant |

---

## 🧱 2. Block Scope

> Variables declared with `let` and `const` are limited to the block `{}` in which they are defined.  
> `var` does **not** follow block scope — it's only function scoped.

### 🔍 Example:

```javascript
{
  let a = 10;
  const b = 20;
  var c = 30;

  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
  console.log(c); // ✅ 30
}

console.log(c); // ✅ 30 (accessible - var is function scoped)
// console.log(a); ❌ Error
// console.log(b); ❌ Error
```

## What is TDZ:
utna area  jitny mai javascript ko  pta to hai ky variable  exist karta h pr  wo apko value nai dy skta it mean when you  write this 

```javascript

console.log(a)

//line 47 sy 55 tk aik temporal dead zone hai 





let a = 10;
