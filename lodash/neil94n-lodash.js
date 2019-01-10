var neil94n = {
  chunk: function chunk(ary, size = 1) {
    let arr = []
    let count = 0
    let subArr = []
    for (let i = 0; i < ary.length; i++) {
        if (count < size) {
            subArr.push(ary[i])
            count++
        }
        if (count === size || i === ary.length - 1) {
            arr.push(subArr)
            subArr = []
            count = 0
        }

    }
    return arr
},

compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
}, 
