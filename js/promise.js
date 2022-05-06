
class myPromise{

    static PENDING = '待定';
    static FULFLLED = '成功';
    static REJECT = '失败 '
    constructor(executor){
        this.status = myPromise.PENDING; 
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try {
            executor(this.resolve,this.reject) 
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (result)=>{
        setTimeout(()=>{
            if(this.status === myPromise.PENDING){
                this.status = myPromise.FULFLLED;
                this.result = result;
                this.resolveCallbacks.forEach(callbacks => {
                    callbacks(result);
                })
            }
        })
        
    }

    reject = (result) =>{
        setTimeout(()=>{
            if(this.status === myPromise.PENDING){
                this.status = myPromise.REJECT;
                this.result = result; 
                this.rejectCallbacks.forEach(callbacks => {
                    callbacks(result);  
                })
            }
        })
    }

    then = (onFULFLLED,onREJECT) =>{
        return new myPromise(() => {
            onFULFLLED = typeof onFULFLLED === 'function' ? onFULFLLED : () =>{};
            onREJECT = typeof onREJECT === 'function' ? onREJECT : () =>{}; 
    
            if(this.status === myPromise.PENDING){
                 this.resolveCallbacks.push(onFULFLLED);
                 this.rejectCallbacks.push(onREJECT)
            }
    
            if(this.status === myPromise.FULFLLED){
                setTimeout(()=>{
                    onFULFLLED(this.result);
                })
            }
             
            if(this.status === myPromise.REJECT){
                setTimeout(()=>{
                    onREJECT(this.result); 
                })
            } 
        })
       
    }
}

// let promise = new myPromise((resolve,reject) =>{
//     resolve('www')
// })
 
const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);

