
class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
}

class Solution 
{
    evaluatePostfix(S)
    {
        let st = new Stack();
        
 
        for (let i = 0; i<S.length; ++i)
        {
            if (S.charCodeAt(i)>=48 && S.charCodeAt(i)<58)
            {
                st.arr.push(parseInt(S.charCodeAt(i) - 48));
                st.top++;
            }
            else
            {
                let val1 = st.arr[st.top]; 
                st.arr.pop();
                st.top--;
                let val2 = st.arr[st.top]; 
                st.arr.pop();
                st.top--;
                if(S[i] == '+'){
                    st.arr.push(val2 + val1);
                    st.top++;
                }
                else if(S[i] == '-'){
                    st.arr.push(val2 - val1);
                    st.top++;
                }
                else if(S[i] == '*'){
                    st.arr.push(val2 * val1);
                    st.top++;
                }
                else if(S[i] == '/'){
                    st.arr.push(Math.floor(val2 / val1));
                    st.top++;
                }
            }
        }
        if(st.arr[st.top] == -0)
            return 0;
        return st.arr[st.top]; 
    }
}