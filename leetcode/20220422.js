/**
 * 
 * https://leetcode-cn.com/problems/contains-duplicate/submissions/
 * 217. 存在重复元素
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */

 function containsDuplicate(nums) {
    let map = new Map();
    for(let i = 0; i <nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i],i)
    }
    return false
};