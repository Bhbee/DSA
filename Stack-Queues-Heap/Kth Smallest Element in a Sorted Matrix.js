/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let matrixLength = matrix.length;
    let left = matrix[0][0];
    let right = matrix[matrixLength-1][matrixLength-1];
    let mid;
    while(left < right){
        mid = Math.floor((left+right)/2);
        let lessOrEqualMid = 0;
        matrix.forEach(row => {
            row.forEach(num => {
                if(num<=mid) {
                    lessOrEqualMid++;
                }
            })
        })
        if(lessOrEqualMid>=k) right = mid;
        if(lessOrEqualMid<k) left = mid + 1;
    }
return left; 
};