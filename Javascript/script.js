document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const amountOutput = document.getElementById('amount-output');
    const durationInput = document.getElementById('duration');
    const durationOutput = document.getElementById('duration-output');
    const monthlyInput = document.getElementById('monthly');
    const monthlyOutput = document.getElementById('monthly-output');
    const fraisDossierOutput = document.getElementById('frais-dossier-output');

    function syncInputs(input, output) {
        input.addEventListener('input', function() {
            output.textContent = this.value;
            calculateMonthly();
            calculateFraisDossier();
        });
    }

    function calculateMonthly() {
        const K = parseFloat(amountInput.value); // capital emprunté
        const t = 0.12; // taux annuel (12% just an example)
        const n = parseFloat(durationInput.value); // nombre de mensualités

        const monthlyRate = t / 12;

        const m = (K * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

        monthlyInput.value = m.toFixed(2);
        monthlyOutput.textContent = m.toFixed(2);

        localStorage.setItem('monthly', m.toFixed(2));
    }

    const calculateFraisDossier = () => {
        const montant = parseFloat(amountInput.value);
        const pourcentageFraisDossier = 0.01;

        const fraisMin = 100;
        const fraisMax = 2000;
 
        let fraisDossier = montant * pourcentageFraisDossier;
 
        fraisDossier = Math.min(Math.max(fraisDossier, fraisMin), fraisMax);

        fraisDossierOutput.textContent = `${fraisDossier.toFixed(2)} DH`;

        localStorage.setItem('fraisDossier', fraisDossier.toFixed(2));
    };

    syncInputs(amountInput, amountOutput);
    syncInputs(durationInput, durationOutput);
    calculateMonthly();
    calculateFraisDossier();
 
    document.getElementById('loan-form').addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem('amount', amountInput.value);
        localStorage.setItem('duration', durationInput.value);
        
        
        alert('Values stored! Redirecting to next page...');
        window.location.href = 'coordinates.html';
    });
});