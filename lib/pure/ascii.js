'use strict';

const nat = require('./nat');

const fortyEight = nat.multiply(nat.six)(nat.eight);
const sixtyFive = nat.multiply(nat.thirteen)(nat.five);

const newline = nat.ten;

const zero  = fortyEight;
const one   = nat.succ(zero);
const two   = nat.succ(one);
const three = nat.succ(two);
const four  = nat.succ(three);
const five  = nat.succ(four);
const six   = nat.succ(five);
const seven = nat.succ(six);
const eight = nat.succ(seven);
const nine  = nat.succ(eight);

const A = sixtyFive;
const B = nat.succ(A);
const C = nat.succ(B);
const D = nat.succ(C);
const E = nat.succ(D);
const F = nat.succ(E);
const G = nat.succ(F);
const H = nat.succ(G);
const I = nat.succ(H);
const J = nat.succ(I);
const K = nat.succ(J);
const L = nat.succ(K);
const M = nat.succ(L);
const N = nat.succ(M);
const O = nat.succ(N);
const P = nat.succ(O);
const Q = nat.succ(P);
const R = nat.succ(Q);
const S = nat.succ(R);
const T = nat.succ(S);
const U = nat.succ(T);
const V = nat.succ(U);
const W = nat.succ(V);
const X = nat.succ(W);
const Y = nat.succ(X);
const Z = nat.succ(Y);

module.exports = {
    newline,
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, V, X, Y, Z,
    zero, one, two, three, four, five, six, seven, eight, nine,
};