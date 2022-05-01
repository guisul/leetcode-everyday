
/**
 * 
 * https://leetcode-cn.com/problems/smallest-index-with-equal-value/
 * 给你一个下标从 0 开始的整数数组 nums ，返回 nums 中满足 i mod 10 == nums[i] 的最小下标 i ；如果不存在这样的下标，返回 -1 。

x mod y 表示 x 除以 y 的 余数 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-index-with-equal-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function smallestEqual(nums) {

    let index = -1;
    for(let i = nums.length -1 ;i >= 0; i --){
        if(i % 10 === nums[i]){
            index = i
        }
    }
    return index;
};