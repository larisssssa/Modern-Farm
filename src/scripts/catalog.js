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
    let cropTotalsHTML = `<table class="crop-totals-table">
    <tr class="total-heading">
        <th class="totals-type">Food</th>
        <th class="totals-quantity">Quantity</th>
    </tr>`

    for (const c of cropTotals) {
        cropTotalsHTML += `
    <tr class="totals-item">
        <td class="totals-type">${c.type}</td>
        <td class="totals-quantity">${c.quantity}</td>
    </tr>`
    }
    cropTotalsHTML +=`</table>`
    return cropTotalsHTML;
}
