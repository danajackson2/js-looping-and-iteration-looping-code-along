function writeCards(arr, event){
    for (let i=0, i < arr.length, i++){
        console.log(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
}

function countDown(num){
    let i = num
    while (i > 0){
        console.log(num)
        i--
    }
}