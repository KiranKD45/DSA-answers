var addStrings = function (num1, num2) {
    var output = []
    let carry = 0
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0) {
        let sum = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + carry
        output.unshift(sum % 10)
        carry = sum > 9 ? 1 : 0
        i--;
        j--; 
    }
    if (carry == 1) {
        output.unshift(1)
    }
    return output.join("")
};