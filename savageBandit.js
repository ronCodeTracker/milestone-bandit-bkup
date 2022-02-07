﻿
//  name:  Ronald Kiefer
//  Hebrew name:    ר ו נ  א ל ד 
//  date:  January 31, 2022  Monday
// description  js file for milestone proj 1
// description   savage bandit slot game


//   object with the slot items
let items_object = {
    item1: 'feather',
    item2: 'black_bear',
    item3: 'hawk',
    item4: 'wolf',
    item5: 'wolf',
    item6: 'feather',
    item7: 'wolf',
    item8: 'hawk',
    item9: 'bar',
    item10: 'crazy_bonus'

}

// make an array of slot items (better for forloops)
let nativeObjectArray = [items_object.item1, items_object.item2,
    items_object.item3, items_object.item4, items_object.item5,
    items_object.item6, items_object.item7, items_object.item8,
    items_object.item9, items_object.item10]

// declare global variables
let rndOne
let rndTwo
let rndThree
let headerLuck
var win
var total = 0

document.onload = main()

console.log('Welcome to Savage Bandit Game')

goodLuck()

function runGame() {

    

    //  random numbers between 0 - 9 (10 numbers)
    rndOne = randomGen()
    rndTwo = randomGen()
    rndThree = randomGen()





    function randomGen() {
        return Math.floor(Math.random() * 10)

    }

    /*
    console.log('rndOne ' + rndOne)
    console.log('rndTwo ' + rndTwo)
    console.log('rndThree ' + rndThree)
    */


    console.log('rndOne ' + nativeObjectArray[rndOne])
    let slotOne = document.querySelector('.slotOne')
    slotOne.textContent = nativeObjectArray[rndOne]

    console.log('rndTwo ' + nativeObjectArray[rndTwo])
    let slotTwo = document.querySelector('.slotTwo')
    slotTwo.textContent = nativeObjectArray[rndTwo]

    console.log('rndThree ' + nativeObjectArray[rndThree])
    let slotThree = document.querySelector('.slotThree')
    slotThree.textContent = nativeObjectArray[rndThree]

    // logic




    if ((nativeObjectArray[rndOne] === nativeObjectArray[rndTwo])
        && (nativeObjectArray[rndTwo] === nativeObjectArray[rndThree])) {

        console.log('u win 10 dollars!')
        let winElem = document.querySelector('.win')
        winElem.innerHTML = ' '
        win = 0
        win = 10
        winElem.textContent = '$ ' + win
        total += 10
        let totalElem  = document.querySelector('.total')
        totalElem.innerHTML = ' '
        totalElem.textContent = '$ ' + total

        if (nativeObjectArray[rndTwo] !== 'wolf') {
            console.log('plus bonus of 15 dollars')
            let winElem = document.querySelector('.win')
            winElem.innerHTML = ' '
            win += 15
            winElem.textContent = '$ ' + win
            total += 15
        }
        if (nativeObjectArray[rndTwo] === 'crazy_bonus') {
            console.log('crazy bonus of 100 dollars')
            let winElem = document.querySelector('.win')
            winElem.innerHTML = ' '
            win += 100
            winElem.textContent = '$ ' + win
            total += 100


        }
    }


}



function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


async function main() {
    await sleep(5000)
    console.log('Good Luck!')
    headerLuck.style.visibility = 'visible'
    game()
}

async function game() {
    await sleep(5000)
    let buttonPlay = document.querySelector('.play')
    buttonPlay.disabled = false
    
}




// ***************************** add good luck (after 5 seconds)  ******

function goodLuck() {
    let headerLuckSpt = document.querySelector('.header')
    headerLuck = document.createElement('div')
    headerLuck.textContent = 'Good Luck!'
    headerLuck.style.fontSize = '10vw'
    headerLuck.style.margin = '5%'
    headerLuck.style.visibility = 'hidden'

    headerLuckSpt.append(headerLuck)



}

