function findProduct(arr, size) {
    let result = 1;
    for(let i=0; i<size; i++) {
    result = result * arr[i];
    }
    return result;
   }
  let arr = [1,2,3,4]
  let size = arr.length;
  console.log(findProduct(arr,size));