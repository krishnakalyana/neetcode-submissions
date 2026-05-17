class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let map = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (map[tokens[i]]) {
                let n1 = stack.pop();
                let n2 = stack.pop();
                let ans = map[tokens[i]](+n2, +n1);
                stack.push(ans);
            } else {
                stack.push(tokens[i]);
            }
        }
        return Number(stack[stack.length-1])
    }
}
