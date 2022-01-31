



//   object with the slot items
let items_object = {
    item1: 'feather',
    item2: 'black_bear',
    item3: 'hawk',
    item4: 'wolf',
    item5: 'wolf',
    item6: 'feather',
    item7: 'wolf',
    item8: 'bar',
    item9: 'bar',
    item10: 'crazy_bonus'

}

// make an array of slot items (better for forloops)
let nativeObjectArray = [items_object.item1, items_object.item2,
    items_object.item3, items_object.item4, items_object.item5,
    items_object.item6, items_object.item7, items_object.item8,
    items_object.item9, items_object.item10]


//  random numbers between 0 - 9 (10 numbers)


let rndOne = randomGen()
let rndTwo = randomGen()
let rndThree = randomGen()





function randomGen() {
    return Math.floor(Math.random() * 10)

}


console.log('rndOne ' + rndOne)
console.log('rndTwo ' + rndTwo)
console.log('rndThree ' + rndThree)



console.log('rndOne ' + nativeObjectArray[rndOne])
console.log('rndTwo ' + nativeObjectArray[rndTwo])
console.log('rndThree ' + nativeObjectArray[rndThree])

// logic




if ((nativeObjectArray[rndOne] === nativeObjectArray[rndTwo]) && (nativeObjectArray[rndTwo] === nativeObjectArray[rndThree])) {

    console.log('u win 10 dollars!')
    if (nativeObjectArray[rndTwo] !== 'wolf') {
        console.log('plus bonus of 15 dollars')
    }
    if (nativeObjectArray[rndTwo] === 'crazy_bonus') {
        console.log('crazy bonus of 100 dollars')
    }
}


// stage1
// stage1 next stage1 test

