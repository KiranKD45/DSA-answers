function checktree(preorder, s, inorder, s1, postorder, s2, len)
{


    if (len == 0)
        return true;

    if (len == 1)
        return ((preorder[s] == inorder[s1])
                && (inorder[s1] == postorder[s2]));

    let idx = -1;
    for (let i = s1; i < len; ++i)
        if (inorder[i] == preorder[s]) {
            idx = i;
            break;
        }

    if (idx == -1)
        return false;

    let ret1 = checktree(preorder, s + 1, inorder, s1,
                          postorder, s2, idx);

    let ret2 = checktree(
        preorder, s + idx + 1, inorder, s1 + idx + 1,
        postorder, s2 + idx, len - idx - 1);

    return (ret1 && ret2);
}

let inorder = [ 4, 2, 5, 1, 3 ];
let preorder = [ 1, 2, 4, 5, 3 ];
let postorder = [ 4, 5, 2, 3, 1 ];
let len1 = inorder.length;
let len2 = preorder.length;
let len3 = postorder.length;

if ((len1 == len2) && (len2 == len3)) {

  let res = checktree(preorder, 0, inorder, 0,
                       postorder, 0, len1);

  document.write(((res) ? "Yes" : "No"));
}
else
  document.write("No");