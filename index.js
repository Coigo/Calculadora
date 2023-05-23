
var AllCaracteresFromNumber = []
var NumbersJoinned = undefined
var firstNumber 
var OperatorSelected
var HaveSeccondStarted = false
var seccondNumber 



document.getElementById('buttonGrid').addEventListener("click", () => {
const MainDisplay = document.getElementById('DownNumbers')  
MainDisplay.innerHTML = NumbersJoinned 
    
})

const OperatorBUTTONS = document.querySelectorAll(".buttonOp")
    for (let i = 0; i < OperatorBUTTONS.length; i++) {
        OperatorBUTTONS[i].addEventListener("click", () => {





            if ( NumbersJoinned !== undefined ) {
                const upperDisplay = document.getElementById('upperNumbersDisplay')
                upperDisplay.innerHTML = `${ firstNumber } ${ OperatorSelected }`


            
            }


        
        })
}
function DisplayResult() {
    const MainDisplay = document.getElementById('DownNumbers')  
    MainDisplay.innerHTML = CallOperationFunction()
}


function pushCaractereToArray(number) {
    AllCaracteresFromNumber.push(number)
    joinCaracteres()
}

function joinCaracteres() {
    NumbersJoinned = AllCaracteresFromNumber.join('')
    
}









function ChoseOperating() {
    
    if ( !OperatorSelected ) {
        firstNumber =  NumbersJoinned
    }
    if ( OperatorSelected !== false ) {

            if ( HaveSeccondStarted == false ) {

                AllCaracteresFromNumber = []
                NumbersJoinned = ''
                HaveSeccondStarted = true
                
            }

        seccondNumber =  NumbersJoinned
    }

}









function SelectOperator(Operator) {
    if ( NumbersJoinned == undefined ) {
        return
    }
    OperatorSelected = Operator
}



function CallOperationFunction() {
    if (OperatorSelected == '+') {
        return sum()
    }
    if (OperatorSelected == '-') {
        return minus()
    }
    if (OperatorSelected == '*') {
        return times()
    }
    if (OperatorSelected == '/') {
        return division()
    }
    
}



function sum() {
    NumbersJoinned = Number(firstNumber) + Number(seccondNumber)
} 

function minus() {
    NumbersJoinned = Number(firstNumber) - Number(seccondNumber)
    
}

function times() {
    NumbersJoinned = Number(firstNumber) * Number(seccondNumber)
}

function division() {
    NumbersJoinned = Number(firstNumber) / Number(seccondNumber)

}





function clearAll() {
    AllCaracteresFromNumber = []
    NumbersJoinned, seccondNumber, OperatorSelected, firstNumber = undefined
    HaveSeccondStarted = false
  

    const MainDisplay = document.getElementById('DownNumbers')

        MainDisplay.innerHTML = `0`
    
    const upperDisplay = document.getElementById('upperNumbersDisplay')
    upperDisplay.innerHTML = ``

}

function clearAfterConclude() {

    AllCaracteresFromNumber = []
    firstNumber  = NumbersJoinned
    OperatorSelected, seccondNumber = undefined
    HaveSeccondStarted = false
    

    const upperDisplay = document.getElementById('upperNumbersDisplay')
    upperDisplay.innerHTML = ``
}
    
    


