function sortstack(input)
{
    let tmpStack = [];
    while (input.length > 0)
    {

        let tmp = input.pop();
        while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] < tmp)
        {
            input.push(tmpStack[tmpStack.length - 1]);
            tmpStack.pop()
        }

        tmpStack.push(tmp);
    }
    return tmpStack;
}
 
let input = [];
input.push(34);
input.push(3);
input.push(31);
input.push(98);
input.push(92);
input.push(23);
let tmpStack = sortstack(input);
document.write("Sorted numbers are:" + "</br>");

while (tmpStack.length > 0)
{
    document.write(tmpStack[tmpStack.length - 1] + " ");
    tmpStack.pop();
}