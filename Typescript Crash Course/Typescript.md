 
# 1. What is TypeScript

Typecript is an open source language and is a superset of Javascript 

- Offers additional features to Javascript including static types
- Using types is completely optional
- Compiles down to regular JS 
- Can be used for front-end JS as well as backend with Node.js
- Includes most features from ES6, ES7 (classes, arrow functions, ect)
- Types from 3rd party libraries can be added with type definitons 


# 2. Dynamic vs Static Typing

In dynamically typed languages, the types are associated with run-time 
values and not named explicitly in your code

In statically typed languages, you explicitly assign types to variables, 
function parameters, return values, etc


Ex:
Static -- Java, C, C++, Rust, Go
Dynamic -- Javascript, Python, Ruby, PHP


# 3. Pros & Cons

### Pros:
- More Robust
- Easily Spot Bugs
- Predictability
- Readability
- Popular


### Cons:
- More code to write
- More to learn
- Required compilation
- Not true satatic typing


# 4. Compiling Typescript

- Typescript uses .ts and tsx extensions
- TSC (Typescript compiler) is used to compile .ts files down to js
- Can watch files and report errors at compile time
- Many tools include TS compilation by defaut 
- Most IDEs have great support for TS 
- The tsconfig.json file is used to configure how Typescript works 