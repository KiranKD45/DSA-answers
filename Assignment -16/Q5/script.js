let st = [];
function push_digits(number)
{
    while (number != 0)
    {
        st.push(number % 10);
        number = Math.floor(number / 10);
    }
}
function reverse_number(number)
{

    push_digits(number);

    let reverse = 0;
    let i = 1;
    while (st.length != 0) {
        reverse = reverse + (st[st.length - 1] * i);
        st.pop();
        i = i * 10;
    }

    return reverse;
}