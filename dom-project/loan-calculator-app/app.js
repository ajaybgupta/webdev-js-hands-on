// Listen for Submit

document.getElementById('loan-form').addEventListener('submit', function(event){
    
    clearError();

    // Hide Results
    const results = document.getElementById('results');
    results.style.display = 'none';

    // Show Loader
    const loader = document.getElementById('loading');
    loader.style.display = 'block';
    
    setTimeout(calculateResults, 2000);

    event.preventDefault();
});


function calculateResults(){
    console.log('Calculating...')
    // UI Vars
    const amountElement = document.getElementById('amount');
    const interestElement = document.getElementById('interest');
    const yearsElement = document.getElementById('years');

    const monthlyPaymentElement = document.getElementById('monthly-payment');
    const totalPaymentElement = document.getElementById('total-payment');
    const totalInterestElement = document.getElementById('total-interest');

    const principalAmount = parseFloat(amountElement.value);
    const calculatedInterest = (parseFloat(interestElement.value) / 100)/ 12;
    const calculatedPayment = parseFloat(yearsElement.value) * 12;

    // Monthly Payment
    const x = Math.pow(1+calculatedInterest, calculatedPayment);
    const monthly = (principalAmount * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){

        const results = document.getElementById('results');
        results.style.display = 'block';

        monthlyPaymentElement.value = monthly.toFixed(2);
        totalPaymentElement.value = (monthly * calculatedPayment).toFixed(2);
        totalInterestElement.value = ((monthly * calculatedPayment) - principalAmount).toFixed(2);
    }else{
        showError('Please check the numbers!');
    }

    const loader = document.getElementById('loading');
    loader.style.display = 'none';
}


function showError(error){

    // Clear Old Error
    clearError();

    // Get UI Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //create a div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    // Create text node node and append to div
    const errorTextNode = document.createTextNode(error);

    errorDiv.appendChild(errorTextNode);

    // Insert an element on top of child node
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    const errorElement = document.querySelector('.alert');
    if(errorElement !== null){
        errorElement.remove();
    }
}