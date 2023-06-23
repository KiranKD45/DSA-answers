function mysort(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
var findMinArrowShots = function(points) {
    if(points.length==0) return 0;
    points.sort(mysort);
    let rightEnd=points[0][1],ans=1;
    for(let i=1;i<points.length;i++)
    {
        if(points[i][0]>rightEnd)
        {
            rightEnd=points[i][1];
            ans++;
        }
        else
        {
            rightEnd=Math.min(rightEnd,points[i][1]);
        }
    }
    return ans;
};