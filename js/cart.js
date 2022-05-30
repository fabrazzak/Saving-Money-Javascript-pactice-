
// form input value to convert Number parseFloat  function 
function inputNumber(inputId){
    const formInput= document.getElementById(inputId);
    const inputValue= formInput.value;
    const inputNumber= parseFloat(inputValue);
   
   return inputNumber;

   
}
// erro maassage 
function erroMassage(inputValue , inputId){
    if(inputValue<0){
        document.getElementById(inputId).style.borderColor="red";
        document.getElementById('erro-massage').innerText = "Please type positive Number";
        document.getElementById('erro-massage').style.color="red"; 
        document.getElementById('calculate').disabled = true;
    }
    else  {
        document.getElementById(inputId).style.borderColor="black";
        document.getElementById('calculate').disabled = false;
        document.getElementById('erro-massage').innerText = "";
    }
}
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}
function erroMassageTwo(inputValue , inputId){
    if(isNaN(inputValue)){
        document.getElementById(inputId).style.borderColor="red";
        document.getElementById('erro-massage').innerText = "Please type positive Number";
        document.getElementById('erro-massage').style.color="red"; 
        document.getElementById('calculate').disabled = true;
    }
    
}

document.getElementById('income').addEventListener('keyup',function(){
    const incomeMoney = inputNumber('income'); 
    erroMassage(incomeMoney, 'income');  
    erroMassageTwo(incomeMoney, 'income');
})
document.getElementById('food').addEventListener('keyup',function(){
    const foodMoney = inputNumber('food');   
    erroMassage(foodMoney, 'food');
    erroMassageTwo(foodMoney, 'food');
})
document.getElementById('rent').addEventListener('keyup',function(){
    const rentMoney = inputNumber('rent');
    erroMassage(rentMoney, 'rent');   
    erroMassageTwo(rentMoney, 'rent');   
})
document.getElementById('clothes').addEventListener('keyup',function(){
    const clothesMoney = inputNumber('clothes');
        erroMassage(clothesMoney, 'clothes');
        erroMassageTwo(clothesMoney, 'clothes');
})
document.getElementById('save-input').addEventListener('keyup',function(){
    const saveMoney = inputNumber('save-input');
    erroMassage(saveMoney, 'save-input');  
    erroMassageTwo(saveMoney, 'save-input');  
})


// calculate add addEventListener 
document.getElementById('calculate').addEventListener('click', function(){

    const incomeMoney = inputNumber('income');
    const foodMoney = inputNumber('food');
    const rentMoney = inputNumber('rent');
    const clothesMoney = inputNumber('clothes');
    const saveMoney = inputNumber('save-input');
   
        //  Total cost 
    const totalCost = foodMoney + rentMoney + clothesMoney ;
    document.getElementById('total-expenses').innerText=totalCost;

        //  Total expenses  and Balance 
    const balance= incomeMoney - totalCost;
    if(incomeMoney < totalCost ){
        document.getElementById('total-expenses').innerText=totalCost +   " . Your total expenses high";
       const expensesErroe= document.getElementById('total-expenses');
       expensesErroe.style.color='red';
       document.getElementById('blance').innerText="";

    }
    else{
  document.getElementById('blance').innerText=balance;
  const expensesErroe= document.getElementById('total-expenses');
  expensesErroe.style.color='black';
    }
    
  

  
})
 //    Saving Amount and Remaining Balance 

document.getElementById('save-button').addEventListener('click',function(){
    const incomeMoney = inputNumber('income');
    const saveMoneyParcentice = inputNumber('save-input');

    const calculateSavingAmount= (saveMoneyParcentice * incomeMoney) / 100 ;
    

    document.getElementById('saving-amount').innerText=calculateSavingAmount;
    const previousBalance= document.getElementById('blance').innerText;
   
   
if(calculateSavingAmount<previousBalance){
    const remainingBalance= previousBalance-calculateSavingAmount;
    document.getElementById('remaining-blance').innerText=remainingBalance;
    document.getElementById('saving-erro').innerText='';
    

}else{

    document.getElementById('saving-erro').innerText='Your Balance is low.';
    document.getElementById('saving-erro').style.color='red';


}

document.getElementById('remaining-blance').innerText=remainingBalance;
   

  
    

}) 



