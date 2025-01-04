// console.log("home added")

document.getElementById('add-money-button').addEventListener('click',function(event){
     event.preventDefault()
    const Amount = parseFloat(document.getElementById('add-money-amount').value)

    const Pin = parseFloat(document.getElementById('add-money-pass').value)
    // console.log(typeof(Amount),typeof(Pin))

    //FOR NUMBER/INT DATATYPE WE MUST NOT USE ''/"" IN THE IF/ELSE CONDITION
    if(Pin === 111 ){
        // console.log(typeof(Amount),typeof(Pin))
        const availableAmount =parseFloat(document.getElementById('available-balance').innerText)
        // console.log(availableAmount)
        const adding =Amount+availableAmount

        
        document.getElementById('available-balance').innerText=adding;
    }

    else{
        alert('Failed')
       }
})