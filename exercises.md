> all exercises should be fully expanded & should all fit in a single pane of dev console

you can complete these exercises directly from your fork by inspecting this page and copy-pasting the snippets into devtools console. fill in your solutions by editing this page, writing in the actual values for each challenge

### The Challenges
* [variables](#variables)  
* [reference types](#reference-types)  
* [conditionals](#conditionals)  
* [iteration](#iteration)

---
---

## Variables 

**Variable Swap**  

the code:
```js
{ // pytut link -> https://goo.gl/27fPqs
  const expected = ;                const log = [{expected}];

  let a = ;                        
  let b = ;                        
  let temp = ;                      log.push({a,b,temp});
   
  temp = b;                         log.push({temp});
  b = a;                            log.push({b});
  a = temp;                         log.push({a});

  const actual = temp;              log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
a:1, b:2, temp:3            --> ?
a:'a', b:'b', temp:'temp'   --> ?
a:true, b:false, temp:null  --> ?
a:'', b:0, temp:undefined   --> ?
```
your notes:

---

**Block Scope 'let'**

the code:
```js
{ // pytut link -> https://goo.gl/Ym63eU
  const expected = ;              const log = [{expected}];

  let a = ;                        
  let b = ;  
  let c = ;                       log.push({a,b,c});

  {
    let a = b;                    log.push({a});
    {
       a = c;                     log.push({a});
    }
    a = a;                        log.push({a});
  }

  const actual = a;               log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
a:1, b:2, c:3         --> ?
a:'', b:0, c:false    --> ?
a:true, b:false, c:9  --> ?
```
your notes:  

---

**Block Scope 'var'**
(refresh the page each time before running this exercise)

the code:
```js
{ // pytut link -> https://goo.gl/rJaPQo
  const expected = ;              const log = [{expected}];
                       
  let b = ;  
  let c = ;                       log.push({a,b,c});

  {
    var a = b;                    log.push({a});
    {
       a = c;                     log.push({a});
    }
    a = a;                        log.push({a});
  }

  const actual = a;               log.push({actual});
  
  console.assert(actual === expected, log);
}
```
the values:
```js
b:2, c:3         --> ?
b:0, c:false     --> ?
b:false, c:9     --> ?
```
your notes:  

---
---

## Reference Types


**no copy**

the code:
```js
{ // pytut link -> https://goo.gl/bqsLKG
  const expected = [];            const log = [{expected}];
                       
  const a = [];                     
  const b = [];                      
  const x = ;
  const y = ;                     log.push({a:a.slice(),b:b.slice(),x,y});
  
  a.push(b);                      log.push(a.slice());
  b.push(x);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());
  b.push(y);                      log.push(b.slice());
  a.push(b);                      log.push(a.slice());

  const actual = a;               log.push({actual:actual.slice()});
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
b:2, c:3         --> ?
b:0, c:false     --> ?
b:false, c:9     --> ?
```
your notes:  

---



for these the most interesting part is the log. mess up on purpose and see how the logging works

**unhelpful log**

the code:
```js
{ // pytut link -> https://goo.gl/bqsLKG
  const expected = ;             const log = [{expected}];
                       
  const a = [];                     
  let b = ;
  let c = ;                        log.push({a,b,c});
  
  a.push(b);                       log.push(a);
  a.push(c);                       log.push(a);
  a.push(b+c);                     log.push(a);

  const actual = a;                log.push({actual});
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
b:2, c:3         --> ?
b:0, c:false     --> ?
b:false, c:9     --> ?
```
your notes:  

---


**helpful log**

the code:
```js
{ // pytut link -> https://goo.gl/bqsLKG
  const expected = ;             const log = [{expected}];
                       
  const a = [];                     
  let b = ;
  let c = ;                        log.push({a:a.slice() ,b,c});
  
  a.push(b);                       log.push(a.slice());
  a.push(c);                       log.push(a.slice());
  a.push(b+c);                     log.push(a.slice());

  const actual = a;                log.push({actual: actual.slice()});
  
  const assert_act = JSON.stringify(actual);
  const assert_exp = JSON.stringify(expected);
  console.assert(assert_act === assert_exp, log);
}
```
the values:
```js
b:2, c:3         --> ?
b:0, c:false     --> ?
b:false, c:9     --> ?
```
your notes:  

---

```js
{ // pytut link -> https://goo.gl/o1KP2E
  const expected = ;                      const log = [{expected}]

  let acumul = ;             
  let stepper = ;                        log.push({acumul, stepper});
    
  while (stepper < 3) {                   log.push({while_condition: stepper<3});
    const two_times_step = stepper * 2;   log.push({two_times_step})
    acumul += two_times_step;             log.push({acumul});
    stepper++;                            log.push({stepper});
  }

  const actual = acumul;                  log.push({actual})
  
  console.assert(actual === expected, log);
}
```
```
    acumul = 3, stepper = -1 --> ?
    acumul = 2, stepper = 0  --> ?
    acumul = 1, stepper = 1  --> ?
    acumul = 0, stepper = 2  --> ?
    acumul = -1, stepper = 3 --> ?
```
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
