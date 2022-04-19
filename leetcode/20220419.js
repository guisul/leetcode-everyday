/*
https://leetcode-cn.com/problems/removing-minimum-and-maximum-from-array/submissions/
给你一个下标从 0 开始的数组 nums ，数组由若干 互不相同 的整数组成。

nums 中有一个值最小的元素和一个值最大的元素。分别称为 最小值 和 最大值 。你的目标是从数组中移除这两个元素。

一次 删除 操作定义为从数组的 前面 移除一个元素或从数组的 后面 移除一个元素。

返回将数组中最小值和最大值 都 移除需要的最小删除次数。
输入：nums = [2,10,7,5,4,1,8,6]
输出：5
解释：
数组中的最小元素是 nums[5] ，值为 1 。
数组中的最大元素是 nums[1] ，值为 10 。
将最大值和最小值都移除需要从数组前面移除 2 个元素，从数组后面移除 3 个元素。
结果是 2 + 3 = 5 ，这是所有可能情况中的最小删除次数
*/


/*
    解题思路
    先从数组中找出最大值和最小值的位置

    最小删除次数3种情况
        1.删除在最小值和最大值的元素
        2.删除元素左边的值
        3.删除元素右边的值
    对三个值比较    
*/

function minimumDeletions(nums) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < nums.length ; i ++){
        if(nums[min] > nums[i] ){
            min = i;
        }
        if(nums[max] < nums[i]){
            max = i;
        }
    }
    let result = nums.length - Math.max(min,max) + Math.min(min,max) + 1;
    result = Math.min(result,nums.length - Math.min(min,max));
    result = Math.min(result,Math.max(min,max) +1)
    return result;
};

const r=  minimumDeletions([2,10,7,5,4,1,8,6])
console.log(r)
