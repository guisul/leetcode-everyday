
/**
 * 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
 */

function debounce(fn,wait){
    let timer ;
    return function(){
        let _this = this;
        let args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          fn.apply(_this, args);
        }, wait);
    }
}