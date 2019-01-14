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
    }

  }