function insert(nums){
    for(let i=1;i<nums.length;i++){
        let Num = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>Num){
            arr[j+1] = arr[j]
            j = j-1;
        }
        arr[j+1] = Num
    }return arr
}