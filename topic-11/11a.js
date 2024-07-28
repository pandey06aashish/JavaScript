// Q11a.

// const nums=[10,20,30]
// nums[2]=99
// console.log(nums)

// Q11b.

// function getLastValue(array){
//     let last_index=array.length-1;
//     return array[last_index];
// }
// let array=[12,13,14,15,16];
// let last_value=getLastValue(array);
// console.log('the last element of array',+last_value);

// Q11c.

// function arraySwap(array){
//     let temp=array[0];
//     array[0]=array[array.length-1]
//     array[array.length-1]=temp;
//     return array;
// }
// let array=[1,2,3,4,5,6,7,8]
// let array2=['Aashish','Pandey','Amit'];
// let array_after_swap=arraySwap(array);
// let array2_after_swap=arraySwap(array2);
// console.log(array_after_swap);
// console.log(array2_after_swap)

// Q11d.

// let i=0;
// for(i=0;i<=10;i+=2){
//     console.log(i)
// }

// Q11e.

//  let i=5
//  for(i=5;i>=0;i--){
//     console.log(i)
//  }

// Q11f.

// let i=0;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }

// let i=5;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// Q11g.

// let array=[1,2,3,4,5,6];
// let array2=[];
// let i;
// for(i=0;i<=array.length-1;i++){
//     let increasased_array=array[i]+1;
//     array2.push(increasased_array);
// }
// console.log(array)
// console.log(array2);

// Q11h.
// function addOne(array){
//     for(let i=0;i<array.length;i++){
//         array[i]+=1
//     }
// }
// let array=[-1,2,3,-4,5,-6,7];
// addOne(array);
// console.log(array);

// Q11i.

// function addNum(array,num){
//     for(let i=0;i<array.length;i++){
//         array[i]+=num;
//     }
// }
// let array=[1,4,6,9,11,14,16,19];
// addNum(array,3);
// console.log(array);

// Q12j.

// function addArrays(array1,array2){
//     let result=[];
//     for(let i=0;i<array1.length;i++){
//         result[i]=array1[i]+array2[i];
//     }
//     return result;
// }
// let array1=[1,2,3,4,5,6,7];
// let array2=[1,2,3,4,5,6,7];
// let result_array=addArrays(array1,array2);
// console.log(result_array);

// Q11k.

// function countPositive(array){
//     let count=0;
//    for(let i=0;i<array.length;i++){
//     if(array[i]<0){
//         count=count+1;
//     }
//    }
//    return count;
// }

// let array=[1,-1,3,-5,-7,-8,9,10,-1,-1]
// let result=countPositive(array);
// console.log(result);

// Q11 l-m.

// function minmax(array){
    
//     let minmaxobj={
//         min:array[0],
//         max:array[0]
//     }
//     if(!array.length){
//          minmaxobj.max=null;
//          minmaxobj.min=null;
//     }
//     for(let i=0;i<array.length;i++){
//           if(array[i]<minmaxobj.min){
//             minmaxobj.min=array[i];
//           }
//            else if(minmaxobj.max<array[i]){
//             minmaxobj.max=array[i];
//           }
//     }
//     return minmaxobj
// }

// let array=[3];
// let result=minmax(array);
// console.log(result.min);
// console.log(result.max);


// Q11n.

function countWords(words) {
    let wordCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple'])); // { apple: 3, grape: 1 }
