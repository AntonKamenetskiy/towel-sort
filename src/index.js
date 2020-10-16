
// You should implement your task here.

 module.exports = function towelSort (matrix) {
    if (!matrix || matrix === []) return [];
    let sortedArr = [];
    // console.log(matrix.length);
    for (let i = 0; i < matrix.length ; i++) {
        var innerLength = matrix[i].length;
        if (i % 2 !== 0) {
            for (let j = innerLength - 1; j >= 0 ; j--) {
                sortedArr.push(Number(matrix[i][j]));
            }
        }
        else {
            for (let j = 0; j < innerLength ; j++) {
                sortedArr.push(Number(matrix[i][j]));
            }
        }
    }
    return sortedArr;
}
