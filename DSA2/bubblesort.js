function bubble(nums){
    let swap;
    do{
        swap = false;
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]){
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp;
                swap = true;
            }
        }
    }while(swap)
        return nums
}
let nums = [25,-6,3,2,9]
console.log(bubble(nums))