
//深拷贝

const deepClone = ( obj, map = new Map() ) =>{

    if(typeof obj !== Object){
        return obj;
    }

    const isArray = Array.isArray(obj)
    let cloneObj = isArray ? [] : {};

    if(map.get(obj)){
        return map.get(obj);
    }
    map.set(obj,cloneObj);
    const keys = isArray ? undefined : Object.keys(obj);
    forEach(keys || obj,(e,key)=>{
        if(keys){
            key = e;
        }
        cloneObj[key] = deepClone(obj[key],map);
    });

    return cloneObj;

}

const clone = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};


const deepClone2 = (obj, map = new Map) =>{
    if(typeof obj !== Object){
        return obj;
    }

    const isArray = Array.isArray(obj);
    let cloneObj = isArray ? [] : {}

    if(map.get(obj)){
        return map.get(obj);
    }
    map.set(obj,cloneObj);
    const keys = isArray ? undefined : Object.keys(obj);

    forEach(keys || obj,(e,key)=>{

        if(keys){
            key = e;
        }
        obj[key] = deepClone2(obj(key),map)
    })
    
}


