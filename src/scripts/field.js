const plants = [];

export const addPlant = (plant) => {
    if (Array.isArray(plant)) {
        for (const item of plant) { 
            plants.push(item) 
        }
    } else {
        plants.push(plant)
    }
}

export const usePlants = () => {
    return structuredClone(plants)
}