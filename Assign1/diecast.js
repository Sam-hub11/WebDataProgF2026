const diecastForm = document.getElementById("diecastForm");

if (diecastForm) {
    diecastForm.addEventListener("submit", addDiecast);
}

function addDiecast(e) {
    e.preventDefault();

    const modelName = document.getElementById("modelName").value;
    const brand = document.getElementById("brand").value;
    const scale = document.getElementById("scale").value;
    const purchasePrice = document.getElementById("purchasePrice").value;

    const collectionItem = {
        modelName: modelName,
        brand: brand,
        scale: scale,
        purchasePrice: parseFloat(purchasePrice) || 0.00
    };

    console.log("--- New Diecast Item Added ---");
    console.log(collectionItem);

    diecastForm.reset();
}