export const renderCatalogToDOM = (catalogHTML) => {
    const container = document.getElementById('container')

    if (container) {
        container.innerHTML = catalogHTML;
    } else {
        console.error("Could not find element with id container")
    }
}

export const renderCropTotalsToDOM = (cropTotalsHTML) => {
    const cropDisplay = document.getElementById('cropTotalsDisplay')

    if (cropDisplay) {
        cropDisplay.innerHTML = cropTotalsHTML;
    } else {
        console.error("Could not find element with id cropTotalsDisplay")
    }
}