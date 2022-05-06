
function Person (){
    console.log(this.name)
}

var test = {
    name:'test'
}

Function.prototype.newCall = function(context){
    //判断调用对象
    if( typeof this !== 'function'){
        throw new Error("Type error");
    }
    //首先获取参数
    let args = [...arguments].slice(1);
    let result = null;

    // 判断 context 是否传入，如果没有传就设置为 window
    context = context || window;
    // 将被调用的方法设置为 context 的属性
    // this 即为我们要调用的方法
    context.fn = this;
    // 执行要被调用的方法
    result = context.fn(...args);
    // 删除手动增加的属性方法
    delete context.fn;
    // 将执行结果返回
    return result;

}

Person.newCall(test);