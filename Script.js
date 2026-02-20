document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status-text');
    status.innerText = "SHREDDING MODE ACTIVE";
});

function calculatePlan() {
    const weight = document.getElementById('weight').value;
    const days = document.getElementById('days').value;
    
    if (weight > 0) {
        // Simple logic for Water loading (example: 0.08L per kg)
        const water = (weight * 0.08).toFixed(1);
        // High protein during prep (example: 2.2g per kg)
        const protein = (weight * 2.2).toFixed(0);

        document.getElementById('water-target').innerText = water;
        document.getElementById('protein-target').innerText = protein;
        document.getElementById('results').classList.remove('hidden');
    } else {
        alert("Please enter a valid weight.");
    }
}

