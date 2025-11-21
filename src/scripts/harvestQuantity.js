import { cropTypes } from "./plan.js";


export const harvestQuantity = (harvest) => {
    const cropTypeList = cropTypes()
    let cropQuantity = [];

    // create single object for each crop
    for (const crop of cropTypeList) {
        cropQuantity.push({
            type: crop,
            quantity: 0
        })
    }

    // update the quantity in each crop object
    for (const obj of cropQuantity) {
        let quantity = 0
        for (const item of harvest) {
            if(obj.type === item.type) {
                quantity++
            }        
        }
        obj.quantity = quantity
    }

    return cropQuantity
}