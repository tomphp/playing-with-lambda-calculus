const core = require('./core');
const cond = core.cond;
const pair = require('./pair');
const bool = require('./bool');

const nil = pair.new(bool.true)(core.identity);
const cons = car => cad => pair.new(bool.false)(pair.new(car)(cad));

const isNil = cell => pair.first(cell);

const unsafeHead = list => pair.first(pair.second(list));
const unsafeTail = list => pair.second(pair.second(list));

const foldl = fn => init => list =>
    cond(isNil(list))
        (_ => init)
        (_ => {
            const head = unsafeHead(list);
            const tail = unsafeTail(list);

            return foldl(fn)(fn(init)(head))(tail);
        });

const foldr = fn => init => list =>
    cond(isNil(list))
        (_ => init)
        (_ => {
            const head = unsafeHead(list);
            const tail = unsafeTail(list);

            const acc = foldr(fn)(init)(tail);

            return fn(acc)(head);
        });

module.exports = {cons, nil, isNil, foldr, foldl};