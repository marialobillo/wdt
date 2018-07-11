## Exercises

Submit answers to the following questions:

> Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?

A: For smaller arrays, quicksort should be faster, for larger arrays, radix sort. And for really small arrays insertionsort is faster than quicksort.  Because the complexity, using Big O notation (in http://bigocheatsheet.com/) we can see the worst scenario for quicksort is O(n^2) and for radix sort is O(nk), so for big sets of data radix is better in time.

> Why is Binary Search more efficient than Linear Search for most cases?

A: Binary search requires the input data to be sorted; linear search doesn't, if the data is sorted Binary Search can be more efficient, but if the amount of data is very small, maybe Linear Search is faster.

Because Binary Search when the data is sorted jump in the middle of the list and depend of the item jump again until find it and its complexity is O(log n), and Linear Search doesn't jump and its complexity is O(n), and is going to check every item. So for most of the cases Binary search is more efficient.


> Code an implementation of Bubble Sort and test it on an integer array of your choice.


let arr = [2, 3, 7, 5, 3, 6, 3 ,1 , 9, 11, 33];


```
function bubble(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(arr);
console.log(bubble(arr));
```
