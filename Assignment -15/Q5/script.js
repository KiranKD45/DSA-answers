class Solution {
    reverse(str) {
        let ans = "";
        let s = [];
        for (let i = 0; i < str.length; i++) {
            s.push(str.charAt(i));
        }
        while (s.length !== 0) {
            ans += s.pop();
        }
        return ans;
    }
}