const bool = require('./lib/pure/bool');
const core = require('./lib/pure/core');
const cond = core.cond;
const nat = require('./lib/pure/nat');
const natJS = require('./lib/integration/nat');

// FizzBuzz
const fizzbuzz = fb => f => b => n => fb
const fizz     = fb => f => b => n => f
const buzz     = fb => f => b => n => b
const number   = number => fb => f => b => n => n(number)

const isDivisibleBy = divisor => number => nat.isZero(nat.mod(number)(divisor))

const isFizz = isDivisibleBy(nat.three)
const isBuzz = isDivisibleBy(nat.five)
const isFizzBuzz = n => bool.and(isFizz(n))(isBuzz(n))

const doFizzBuzz = n =>
    cond(isFizzBuzz(n))
        (_ => fizzbuzz)
        (_ => cond(isFizz(n))
                  (_ => fizz)
                  (_ => cond(isBuzz(n)
                            (_ => buzz)
                            (_ => number(n)))))

// RUNTIME
// I'm cheating a bit here and using strings because I haven't implemented them
// yet.

function fizzBuzzToString(fizzbuzz) {
    return fizzbuzz("fizzbuzz")("fizz")("buzz")(natJS.toJS)
}

function printFizzBuzz(number) {
    console.log(fizzBuzzToString(doFizzBuzz(number)))
}

printFizzBuzz(nat.zero)
printFizzBuzz(nat.one)
printFizzBuzz(nat.two)
printFizzBuzz(nat.three)
printFizzBuzz(nat.four)
printFizzBuzz(nat.five)
printFizzBuzz(nat.six)
printFizzBuzz(nat.seven)
printFizzBuzz(nat.eight)
printFizzBuzz(nat.nine)
printFizzBuzz(nat.ten)
printFizzBuzz(nat.eleven)
printFizzBuzz(nat.twelve)
printFizzBuzz(nat.thirteen)
printFizzBuzz(nat.fourteen)
printFizzBuzz(nat.fifteen)

// Testing
const assert = statement => cond(statement)
                                (_ => console.log("Success"))
                                (_ => console.log("---- FAILURE"))

const refute = statement => cond(statement)
                                (_ => console.log("---- FAILURE"))
                                (_ => console.log("Success"))

// Debug
function trace(message, x) {
    console.log(message)
    return x
}


/* TESTS

// Condition
console.log("Testing cond")
assert(cond(bool.true)(_ => bool.true)(_ => bool.false))
assert(cond(bool.false)(_ => bool.false)(_ => bool.true))
refute(cond(bool.true)(_ => bool.false)(_ => bool.true))
refute(cond(bool.false)(_ => bool.true)(_ => bool.false))

// Boolean
console.log("Testing bool.true")
assert(bool.true)

console.log("Testing bool.false")
refute(bool.false)

console.log("Testing not")
refute(not(bool.true))
assert(not(bool.false))

console.log("Testing and")
assert(and(bool.true)(bool.true))
refute(and(bool.false)(bool.true))
refute(and(bool.true)(bool.false))
refute(and(bool.false)(bool.false))

// Pair
console.log("Testing first")
assert(first(pair(bool.true)(bool.false)))
refute(first(pair(bool.false)(bool.true)))

console.log("Testing second")
refute(second(pair(bool.true)(bool.false)))
assert(second(pair(bool.false)(bool.true)))

// Nat
console.log("Testing isZero for 0")
assert(isZero(zero))

console.log("Testing isZero for 1")
refute(isZero(succ(zero)))

console.log("Testing numbers equal for 0");
assert(numbersEqual(zero)(zero))

console.log("Testing numbers equal for 1");
assert(numbersEqual(succ(zero))(succ(zero)))

console.log("Testing numbers equal for 1 and 0");
refute(numbersEqual(zero)(succ(zero)))
refute(numbersEqual(succ(zero))(zero))

console.log("Testing numbers equal for 1 and 1");
assert(numbersEqual(succ(zero))(succ(zero)))

console.log("Testing pred for 0")
assert(isZero(pred(succ(zero))))

console.log("Testing pred for 1")
refute(isZero(pred(succ(succ(zero)))))

console.log("Testing mod")
assert(numbersEqual(mod(zero)(three))(zero))
assert(numbersEqual(mod(two)(three))(two))
assert(numbersEqual(mod(three)(three))(zero))
assert(numbersEqual(mod(three)(two))(one))
assert(numbersEqual(mod(eight)(three))(two))
//*/

console.log("DONE !!!")