export const getCatalogHTML = (harvest) => {
    let catalogHTML = `<div class="container--crops">`

    for (const h of harvest) {
        catalogHTML += `
        <p class="crop">${h.type}</p>
        `
    }

    catalogHTML += `</div>`
    return catalogHTML;
}

export const getCropTotalsHTML = (cropTotals) => {
    console.log(cropTotals)
    let cropTotalsHTML = `<ul class="container--totals">
    <li class="container--totals-heading"><span class="heading--name">Food</span><span class="heading--quantity">Quantity</span></li>`

    for (const c of cropTotals) {
        cropTotalsHTML += `
        <li class="totals--crop"><span class="totals--crop-name">${c.type}</span><span class="totals--crop-name">${c.quantity}</span></li>`
    }
    cropTotalsHTML +=`</div>`
    return cropTotalsHTML;
}