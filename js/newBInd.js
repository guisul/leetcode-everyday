
Function.prototype.newBind = function (context){
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new Error("Type error");
    }
    //获取参数
    const args = [...arguments].slice(1);
    const fn = this;
    return function Fn() {
        return fn.apply(
        this instanceof Fn ? this : context,
        // 当前的这个 arguments 是指 Fn 的参数
        args.concat(...arguments)
        );
    };
}