//Задание 1: B) filter

//Задание 2

function exc2(){
    for(let i=1;i<=15;i+=2){
        console.log(i*i);
    }
}

function exc3(arr){
    if(arr.length===0){
        return;
    }
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i].score > max.score){
            max.score = arr[i].score;
            max.name = arr[i].name;
        }
    }
    console.log(max.name + " обладает самым большим количеством очков: " + max.score);
}

/*function exc4(arr){
    let superObj
    for(let i=1; i<arr.length; i++){
        superObj[arr[i]] =
    }
}*/

exc2()

obj1 = {name: 'Max', score: 25};
obj2 = {name: 'Will', score: 12};
obj3 = {name: 'Gregory', score: 28};
arr1 = [obj1, obj2, obj3];
exc3(arr1);

arr2 = [1, 13, 111, 1991, 3, -1]
exc4(arr2);