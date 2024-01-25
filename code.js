function binarySearch(list, element) {
    let start = 0;
    let end = list.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (list[middle] === element) {
            return middle;
        } else if (list[middle] < element) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}
