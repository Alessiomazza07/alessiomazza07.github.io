// Codice sincrono
console.log('1. Inizio');
 
// Timer
setTimeout(() => {
    console.log('4. Timer 0ms');
}, 0);

// Immediate
setImmediate(() => {
    console.log('5. Immediate');
});

// Microtask: process.nextTick
process.nextTick(() => {
    console.log('2. Next Tick');
});

// Microtask: Promise
Promise.resolve().then(() => {
    console.log('3. Promise');
});

// Codice sincrono
console.log('1. Fine');

// Output:
// 1. Inizio
// 1. Fine
// 2. Next Tick 
// 3. Promise
// 4. Timer 0ms (o 5. Immediate, può variare)
// 5. Immediate (o 4. Timer 0ms, può variare)

