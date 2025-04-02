let arr = [1,3,4,5,6,7,8,4,3]
let target = 10;
let found = false;
for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j] == target) {
            console.log(i,j)
            found = 1;
            break;
            
        }
    }
    if (found) break;
}

