// PURE LAMBDA CALCULUS

// Basics
const identity = x => x

// Boolean
const boolTrue  = t => f => t
const boolFalse = t => f => f

const cond = statement => t => f => statement(t)(f)(identity)

const not = b => t => f => b(f)(t)

const and = b1 => b2 => t => f => b1(b2(t)(f))(f)

// Pair
const pair = first => second => select => select(first)(second)

const first  = pair => pair(f => _ => f)
const second = pair => pair(_ => s => s)

// Nat
const zero = pair(boolTrue)(identity)

const succ = pair(boolFalse)
const pred = second

const isZero = first

const numbersEqual = x => y => cond(isZero(x))
                                   (_ => isZero(y))
                                   (_ => cond(isZero(y))
                                        (_ => boolFalse)
                                        (_ => numbersEqual(pred(x))(pred(y))))

const modLoop = number => modulator => result =>
    cond(isZero(number))
        (_ => result)
        (_ => cond(numbersEqual(modulator)(succ(result)))
                  (_ => modLoop(pred(number))(modulator)(zero))
                  (_ => modLoop(pred(number))(modulator)(succ(result))))

const mod = number => modulator => modLoop(number)(modulator)(zero)

const one      = succ(zero)
const two      = succ(one)
const three    = succ(two)
const four     = succ(three)
const five     = succ(four)
const six      = succ(five)
const seven    = succ(six)
const eight    = succ(seven)
const nine     = succ(eight)
const ten      = succ(nine)
const eleven   = succ(ten)
const twelve   = succ(eleven)
const thirteen = succ(twelve)
const fourteen = succ(thirteen)
const fifteen  = succ(fourteen)

// FizzBuzz
const fizzbuzz = fb => f => b => n => fb
const fizz     = fb => f => b => n => f
const buzz     = fb => f => b => n => b
const number   = number => fb => f => b => n => n(number)

const isDivisibleBy = divisor => number => isZero(mod(number)(divisor))

const isFizz = isDivisibleBy(three)
const isBuzz = isDivisibleBy(five)
const isFizzBuzz = n => and(isFizz(n))(isBuzz(n))

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
    return fizzbuzz("fizzbuzz")("fizz")("buzz")(natToJS)
}

function boolToJS(bool) {
    return bool(true)(false)
}

function natToJS(number) {
    let result = 0

    while (!boolToJS(isZero(number))) {
        result++
        number = pred(number)
    }

    return result
}

function printFizzBuzz(number) {
    console.log(fizzBuzzToString(doFizzBuzz(number)))
}

printFizzBuzz(zero)
printFizzBuzz(one)
printFizzBuzz(two)
printFizzBuzz(three)
printFizzBuzz(four)
printFizzBuzz(five)
printFizzBuzz(six)
printFizzBuzz(seven)
printFizzBuzz(eight)
printFizzBuzz(nine)
printFizzBuzz(ten)
printFizzBuzz(eleven)
printFizzBuzz(twelve)
printFizzBuzz(thirteen)
printFizzBuzz(fourteen)
printFizzBuzz(fifteen)

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
assert(cond(boolTrue)(_ => boolTrue)(_ => boolFalse))
assert(cond(boolFalse)(_ => boolFalse)(_ => boolTrue))
refute(cond(boolTrue)(_ => boolFalse)(_ => boolTrue))
refute(cond(boolFalse)(_ => boolTrue)(_ => boolFalse))

// Boolean
console.log("Testing boolTrue")
assert(boolTrue)

console.log("Testing boolFalse")
refute(boolFalse)

console.log("Testing not")
refute(not(boolTrue))
assert(not(boolFalse))

console.log("Testing and")
assert(and(boolTrue)(boolTrue))
refute(and(boolFalse)(boolTrue))
refute(and(boolTrue)(boolFalse))
refute(and(boolFalse)(boolFalse))

// Pair
console.log("Testing first")
assert(first(pair(boolTrue)(boolFalse)))
refute(first(pair(boolFalse)(boolTrue)))

console.log("Testing second")
refute(second(pair(boolTrue)(boolFalse)))
assert(second(pair(boolFalse)(boolTrue)))

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