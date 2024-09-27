document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const amountOutput = document.getElementById('amount-output');
    const durationInput = document.getElementById('duration');
    const durationOutput = document.getElementById('duration-output');
    const monthlyInput = document.getElementById('monthly');
    const monthlyOutput = document.getElementById('monthly-output');

    function syncInputs(input, output) {
        input.addEventListener('input', function() {
            output.textContent = this.value;
            calculateMonthly();
        });
    }

    function calculateMonthly() {
        const amount = parseFloat(amountInput.value);
        const duration = parseFloat(durationInput.value);
        const interestRate = 0.05; 
        const monthlyRate = interestRate / 12;

        const monthly = (amount * monthlyRate * Math.pow(1 + monthlyRate, duration)) / (Math.pow(1 + monthlyRate, duration) - 1);
        
        monthlyInput.value = monthly.toFixed(2);
        monthlyOutput.textContent = monthly.toFixed(2);
    }

    syncInputs(amountInput, amountOutput);
    syncInputs(durationInput, durationOutput);
    calculateMonthly();

    document.getElementById('loan-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! Montant: ' + amountInput.value + ' DH, Durée: ' + durationInput.value + ' mois, Mensualité: ' + monthlyInput.value + ' DH');
    });
});
