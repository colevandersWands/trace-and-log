/*
  use tracing exercises in chromedev console
  pytut links should be the og code with correct variables
*/

{ console.log('--- --- if example --- ---')
  // can you reach every branch?

console.log('--- og code ---')  

{ // pytut link      

  const a = null;
  const b = null;
  const c = null;
  const d = null;
  let result = 0;            

  if (a == d) {              
    result += b;             
  } else if (b < c) {        
    result += a;             
  } else if (d === a) {      
    result += d * c;         
  } 
  if (c || a) {              
    result += d;             
  }


}
console.log('--- tracing exercises ---')

console.log('-- nulls --')  

{ // pytut link
  let expected = 0;        const log = [];

  const a = null;
  const b = null;
  const c = null;
  const d = null;
  let result = 0;             log.push({result, a, b, c, d});   

  if (a == d) {               log.push({['if (a == d)']: a == d});
    result += b;              log.push({['result += b']: result});
  } else if (b < c) {         log.push({['else if (b < c)']: b < c});
    result += a;              log.push({['result += a']: result});
  } else if (d === a) {       log.push({['else if (b < c)']: b < c});
    result += d * c;          log.push({['result += d * c']: result});
  } 
  if (c || a) {               log.push({['if (c || a)']: c || a});
    result += d;              log.push({['result += d']: result});
  }

                              log.push({result})
                              console.log(log)
  
  console.assert(result === expected, `\n expected: ${expected} \n actual: ${result}`)
}

console.log('-- 8, 7, "e", "8" --')  

{ // pytut link
  let expected = '78';        const log = [];

  const a = 8;
  const b = 7;
  const c = 'e';
  const d = '8';
  let result = 0;             log.push({result, a, b, c, d});

  if (a == d) {               log.push({['if (a == d)']: a == d});
    result += b;              log.push({['result += b']: result});
  } else if (b < c) {         log.push({['else if (b < c)']: b < c});
    result += a;              log.push({['result += a']: result});
  } else if (d === a) {       log.push({['else if (b < c)']: b < c});
    result += d * c;          log.push({['result += d * c']: result});
  } 
  if (c || a) {               log.push({['if (c || a)']: c || a});
    result += d;              log.push({['result += d']: result});
  }
                              log.push({result})
                              console.log(log)
  
  console.assert(result === expected, `\n expected: ${expected} \n actual: ${result}`)
}

console.log('-- 6, 7, 8, 9 --')  

{ // pytut link
  let expected = 15;        const log = [];

  const a = 6;
  const b = 7;
  const c = 8;
  const d = 9;
  let result = 0;             log.push({result, a, b, c, d});

  if (a == d) {               log.push({['if (a == d)']: a == d});
    result += b;              log.push({['result += b']: result});
  } else if (b < c) {         log.push({['else if (b < c)']: b < c});
    result += a;              log.push({['result += a']: result});
  } else if (d === a) {       log.push({['else if (b < c)']: b < c});
    result += d * c;          log.push({['result += d * c']: result});
  } 
  if (c || a) {               log.push({['if (c || a)']: c || a});
    result += d;              log.push({['result += d']: result});
  }
                              log.push({result})
                              console.log(log)
  
  console.assert(result === expected, `\n expected: ${expected} \n actual: ${result}`)
}

}