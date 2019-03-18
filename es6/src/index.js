import MyPromise from './MyPromise';

const promiseTest = () => {
    const foo = () => new MyPromise((r) => r('test'));
    foo().then((p) => {
        throw new Error(`error in then ${p}`);
    }).catch(console.log);

    const bar = () => new MyPromise((r, reject) => reject('test'));
    bar().catch(console.log);

    const fooBar = () => new Promise(r => r({a: 'obj test'}));
    fooBar().then(obj => obj.a).then(console.log);

    MyPromise.test([1, 2, 3, 4]);
};

const asyncTest = async () => {
    const foo = async () => {
        return "async test";
    };

    console.log(await foo());
};

// promiseTest();
// asyncTest();

