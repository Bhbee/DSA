var sortColors = function(nums) {
    var j = 0;
    var k = nums.length - 1;
    for (var i = 0; i <= k; i++) {
        if (nums[i] === 0) {
        swap(nums, i, j++);
        } else if (nums[i] === 2) {
        swap(nums, i--, k--);
        }
    }
};

var swap = function (arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
};