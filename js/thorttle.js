function thorttle2(fn, wait) {
    let timer;
    return function () {
      let _this = this;
      let args = arguments;
  
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          fn.apply(_this, args);
        }, wait);
      }
    };
  }