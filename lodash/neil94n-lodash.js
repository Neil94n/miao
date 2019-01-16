var neil94n = {
   chunk: function chunk(array,size=1){
     let sum = [];
     for(let i=0; i<array.length; i+=size){
       sum.push(array.slice(i,i + size))
     }
     return sum
   },

   compact: function compact(array){
     let result = []
     for (let n of array){
       if (n){
         result.push(n)
       }
     }
     return result
    },

    concat: function concat(array,...values){
      let result = []
      for (let n of array){
        result.push(n)
      }
      for (let a of values){
        if(Array.isArray(a)){
          result.push(...a)
        }else{
          result.push(a)
        }
      }
      return result
    },
    difference: function difference(array, ...value){
      let map = {} // 申请一个对象
      let result = []
      for (let a of values) {//遍历参数
        if (Array.isArray(a)) {//判断参数是否为数组
          for (let s of a) {//遍历数组 放进对象
            if (!map[s]) {
              map[s] = 1
            }
          }
        } else if (!map[s]) { //遍历参数放进对象
          map[s] = 1
        }
      }
      for (let n of array) { //数组所给数组 返回对象中没有的属性
        if (!map[n]) {
          result.push(n)
        }
      }
      return result
    },
    drop:function drop(array,n=1){
      if(n>=array.length){
        return[]
      }
      for (let i = 0; i < n; i++){
        array.shift()
      }
      return array
    },
    dropRight: function dropRight(array, n=1){
      if(n>=array.length){
        return[]
      }
      for (let i = 0;i < n;i++){
         array.pop()
      }
      return array
    },
    fill: function fill(array,value,start=0,end=array.length){
      for (let i = start;i < end; i++){
        array[i] = value
      }
      return array
    }
  }