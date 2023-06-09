function poweroftwo(n) {
    if (n<=0) {
        return false
    }
    if (n==1) {
        return true
    }
    if (n%2==0) {
        return poweroftwo(n/2)
    }
    else{
        return false;
    }
}
