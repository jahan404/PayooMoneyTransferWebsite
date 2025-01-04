// console.log("home added")

document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault()
   const Amount = parseFloat(document.getElementById('cash-out-amount').value)

   const Pin = parseFloat(document.getElementById('cash-out-pass').value)
   // console.log(typeof(Amount),typeof(Pin))

   //FOR NUMBER/INT DATATYPE WE MUST NOT USE ''/"" IN THE IF/ELSE CONDITION
   if(Pin === 111 ){
       // console.log(typeof(Amount),typeof(Pin))
       const availableAmount =parseFloat(document.getElementById('available-balance').innerText)
       // console.log(availableAmount)
       const spentMoney = availableAmount-Amount

       
       document.getElementById('available-balance').innerText = spentMoney;
   }

   else{
    alert('Failed')
   }
})