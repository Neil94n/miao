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
    }

  }