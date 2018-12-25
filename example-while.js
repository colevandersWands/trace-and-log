{ console.log('--- --- while example --- ---')

console.log('--- og code ---')  
{ // pytut link

  let acumul = 0;
  let stepper = 0;

  while (stepper < 3) {
    acumul += stepper * 2
    stepper++
  }

}


console.log('-- 1 & 1 --')

{ // pytut link
  let expected = 7;             const log = []
  let acumul = 1;             
  let stepper = 1;              log.push({acumul, stepper});
    
  while (stepper < 3) {         log.push({['stepper < 3']: stepper<3});
    acumul += stepper * 2;      log.push({['acu += st * 2']: acumul});
    stepper++;                  log.push({['stepper++']: stepper});
  }
                                log.push({acumul})
                                console.log(log)
  
  console.assert(acumul === expected, `\n expected: ${expected} \n actual: ${acumul}`)
}

console.log('-- 3 & 2 --')

{ // pytut link
  let expected = 7;                   const log = []
  let acumul = 3;             
  let stepper = 2;              log.push({acumul, stepper});
    
  while (stepper < 3) {         log.push({['stepper < 3']: stepper<3});
    acumul += stepper * 2;      log.push({['acu += st * 2']: acumul});
    stepper++;                  log.push({['stepper++']: stepper});
  }
                                log.push({acumul})
                                console.log(log)
  
  console.assert(acumul === expected, `\n expected: ${expected} \n actual: ${acumul}`)
}

console.log('-- 3 & -1 --')

{ // pytut link
  let expected = 7;                   const log = []
  let acumul = 3;             
  let stepper = -1;              log.push({acumul, stepper});
    
  while (stepper < 3) {         log.push({['stepper < 3']: stepper<3});
    acumul += stepper * 2;      log.push({['acu += st * 2']: acumul});
    stepper++;                  log.push({['stepper++']: stepper});
  }
                                log.push({acumul})
                                console.log(log)
  
  console.assert(acumul === expected, `\n expected: ${expected} \n actual: ${acumul}`)
}


console.log('-- 3 & -2 --')

{ // pytut link
  let expected = 3;                   const log = []
  let acumul = 3;             
  let stepper = -2;              log.push({acumul, stepper});
    
  while (stepper < 3) {         log.push({['stepper < 3']: stepper<3});
    acumul += stepper * 2;      log.push({['acu += st * 2']: acumul});
    stepper++;                  log.push({['stepper++']: stepper});
  }
                                log.push({acumul})
                                console.log(log)
  
  console.assert(acumul === expected, `\n expected: ${expected} \n actual: ${acumul}`)
}


}
