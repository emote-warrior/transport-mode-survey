function calculateCO2() {
    const emissions = {
        car: 130,  // g CO2 per km
        bus: 32,
        auto: 21,
        cab: 68,
        bike: 36,
        walk: 0,
    };

    let selectedModes = document.querySelectorAll('input[name="mode"]:checked');
    let distance = document.getElementById('distance').value;

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance in km.");
        return;
    }

    let totalCO2 = 0;
    selectedModes.forEach(mode => {
        totalCO2 += emissions[mode.value] * distance;
    });

    document.getElementById('co2-output').textContent = totalCO2.toFixed(2);
}
