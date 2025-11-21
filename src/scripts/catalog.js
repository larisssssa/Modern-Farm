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

export const getCropTotalsHTML = (harvest) => {
    let cropsSet = newSet(harvest);

    let cropTotals = `<div class="container--totals">`
    cropTotals +=`</div>`
}