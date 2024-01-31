function binarySearch(list, element) {
    if (list.length === 0) {
        return -1;
    }

    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (list[middle] === element) {
            // Since the test expects the first occurrence of the element,
            // we handle duplicates by moving left in the array.
            while (middle > 0 && list[middle - 1] === element) {
                middle--;
            }
            return middle;
        } else if (list[middle] < element) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}
