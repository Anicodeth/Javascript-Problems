/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {


  let i = 0;
  let ans = []

  arr.forEach((num)=>{
    if(fn(num, i)){
       ans.push(num)
    }

    i++;
  });

  return ans;
    
};
