class Solution {}
Solution.insert_at_bottom = (s, x) => {
  if (s.size() === 0) {
    s.add(x);
  } else {
    let y = s.peek();
    s.pop();
    this.insert_at_bottom(s, x);
    s.add(y);
  }
};
Solution.fun = (s) => {
  if (s.size() > 0) {
    let x = s.peek();
    s.pop();
    this.fun(s);
    this.insert_at_bottom(s, x);
  }
};
Solution.reverse = (s) => {
  this.fun(s);
};