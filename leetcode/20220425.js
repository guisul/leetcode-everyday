/**
 * 
 * 检查是否所有 A 都在 B 之前
 * https://leetcode-cn.com/problems/check-if-all-as-appears-before-all-bs/
 * 给你一个 仅 由字符 'a' 和 'b' 组成的字符串  s 。如果字符串中 每个 'a' 都出现在 每个 'b' 之前，返回 true ；否则，返回 false 。
 */

 function checkString(s) {

    let i = 0;
    while(i < s.length){
        if(s[i] === 'b'){
            break;
        }
        i++;
    }
    let str = s.slice(i);
    return str.includes('a') ? false :true
};