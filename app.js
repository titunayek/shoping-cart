// function updateCaseNumber(product,price, isIncreasing){
//     const caseInput = document.getElementById(product + '-number');
//     let caseNumber = caseInput.value ;
//     if(isIncreasing == true){
//         caseNumber = parseInt(caseNumber) +1;
//     }
//     else if(caseNumber > 0){
//         caseNumber = parseInt(caseNumber) -1;
//     }
//     caseInput.value = caseNumber;
//     // update case total
//     const caseTotal = document.getElementById(product + '-total');
//     caseTotal.innerText = caseNumber * price;
// }
// // phone increase decrease events
//     document.getElementById('phone-plus').addEventListener('click', function(){
//         updateCaseNumber('phone',1229, true); 
//     })
//     document.getElementById('phone-minus').addEventListener('click', function(){
//         updateCaseNumber('phone',1229, false);
//     })
// // handle case increase decrease events
// document.getElementById('case-plus').addEventListener('click', function(){
//     updateCaseNumber('case',59 ,true); 
// });
// document.getElementById('case-minus').addEventListener('click', function(){
//     updateCaseNumber('case',59 , false);
// });

function updatProductNumber(product,price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNamber = productInput.value ;
    if(isIncreasing == true){
        productNamber = parseInt(productNamber) +1;
    }
    else if(productNamber > 0){
        productNamber = parseInt(productNamber) -1;
    }
    productInput.value = productNamber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNamber * price;
    // calculate Total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
     const productNumber = parseInt(productInput.value);
     return productNumber;
}
 function calculateTotal(){
     const phoneTotal = getInputValue('phone') * 1219;
     const caseTotal = getInputValue('case') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalPrice = subTotal + tax ;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tex-amount').innerText = tax ;
    document.getElementById('total-price').innerText = totalPrice ;
 }

// phone increase decrease eventsd
    document.getElementById('phone-plus').addEventListener('click', function(){
        updatProductNumber('phone',1229, true); 
    })
    document.getElementById('phone-minus').addEventListener('click', function(){
        updatProductNumber('phone',1219, false);
    })
// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updatProductNumber('case',59 ,true); 
});
document.getElementById('case-minus').addEventListener('click', function(){
    updatProductNumber('case',59 , false);
});
