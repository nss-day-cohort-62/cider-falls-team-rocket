const database = {
    parkAreas: [{
        id: 1,
        name: 'Chamfort River',
    }, {
        id: 2,
        name: 'Lost Wolf Hiking Trail',
    }, {
        id: 3,
        name: 'Lodge',
    }, {
        id: 4,
        name: 'Gander River',
    }, {
        id: 5,
        name: 'Campgrounds',
    }, {
        id: 6,
        name: 'Pine Bluffs Trails',
    }],
    services: [{
        id: 1,
        name: 'hotel',
    }, {
        id: 2,
        name: 'restaurant',
    }, {
        id: 3,
        name: 'office park',
    }, {
        id: 4,
        name: 'childrens play area',
    }, {
        id: 5,
        name: 'food vendors',
    }, {
        id: 6,
        name: 'hiking'
    }, {
        id: 7,
        name: 'rafting'
    }, {
        id: 8,
        name: 'canoeing'
    }, {
        id: 9,
        name: 'fishing'
    }, {
        id: 10,
        name: 'picnicking'
    }, {
        id: 11,
        name: 'rock climbing'
    }, {
        id: 12,
        name: 'lodging'
    }, { 
        id: 13,
        name: 'parking'
    }, {
        id: 14,
        name: 'information'
    }, {
        id: 15,
        name: 'ziplines'
    }],
    serviceLocations: [{
        id: 1,
        parkId: 1,
        serviceId: 7
    }, {
        id: 2,
        parkId: 1,
        serviceId: 8
    }, {
        id: 3,
        parkId: 1,
        serviceId: 9
    }, {
        id: 4,
        parkId: 2,
        serviceId: 6
    }, {
        id: 5,
        parkId: 2,
        serviceId: 10
    }, {
        id: 6,
        parkId: 2,
        serviceId: 11
    }, {
        id: 7,
        parkId: 3,
        serviceId: 1
    }, {
        id: 8,
        parkId: 3,
        serviceId: 2
    }, {
        id: 9,
        parkId: 3,
        serviceId: 12
    }, {
        id: 10,
        parkId: 3,
        serviceId: 13
    }, {
        id: 11,
        parkId: 3,
        serviceId: 14
    }, {
        id: 12,
        parkId: 3,
        serviceId: 10
    }, {
        id: 13,
        parkId: 4,
        serviceId: 9
    }, {
        id: 14,
        parkId: 4,
        serviceId: 6
    }, {
        id: 15,
        parkId: 5,
        serviceId: 3
    }, {
        id: 16,
        parkId: 5,
        serviceId: 4
    }, {
        id: 17,
        parkId: 5,
        serviceId: 14
    }, {
        id: 18,
        parkId: 5,
        serviceId: 12
    }, {
        id: 19,
        parkId: 5,
        serviceId: 13
    }, {
        id: 20,
        parkId: 6,
        serviceId: 5
    }, {
        id: 21,
        parkId: 6,
        serviceId: 6
    }, {
        id: 22,
        parkId: 6,
        serviceId: 10
    }, {
        id: 23,
        parkId: 6,
        serviceId: 15
    }],
    guests: [{
        id: 1,
        name: 'Jackson Henderson',
        parkId: 1
    }, {
        id: 2,
        name: 'Joey Boloney',
        parkId: 2
    }, {
        id: 3,
        name: 'Braxton Smith',
        parkId: 3
    }, {
        id: 4,
        name: 'Caleb Johnson',
        parkId: 4
    }, {
        id: 5,
        name: 'Sam Ward',
        parkId: 5
    }, {
        id: 6,
        name: 'Kenadie Minton',
        parkId: 6
    }, {
        id: 7,
        name: 'Hannah Collins',
        parkId: 1,
    }, {
        id: 8,
        name: 'Triston Blaney',
        parkId: 2,
    }, {
        id: 9,
        name: 'Madeline Osterman',
        parkId: 3,
    }, {
        id: 10,
        name: 'Sara Barnes',
        parkId: 4,
    }, {
        id: 11,
        name: 'Anthony Rowan',
        parkId: 5,
    }, {
        id: 12,
        name: 'Michael Chambers',
        parkId: 6,
    }, {
        id: 13,
        name: "Vision Filler",
        parkId: 1,
    }, {
        id: 14,
        name: "Poppy Filler",
        parkId: 2,
    }, {
        id: 15,
        name: "Wesley Hughes",
        parkId: 3,
    }, {
        id: 16,
        name: "Liz Clement",
        parkId: 4,
    },  {
        id: 17,
        name: "Rebekah Johnson",
        parkId: 5,
    },  {
        id: 18,
        name: "Phi Filler",
        parkId: 6,
    }]
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServiceLocations = () => {
    return database.serviceLocations.map(serviceLocation => ({...serviceLocation}))
}