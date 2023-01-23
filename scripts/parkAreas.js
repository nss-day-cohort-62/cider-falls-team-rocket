import { getParkAreas } from "./database.js";
import { serviceLocationsList } from "./serviceLocations.js";
import { getGuests } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("park")) {
            const [,parkAreaPrimaryKey] = itemClicked.id.split("--")

            let numberOfGuests = 0

            let matchingPark = null

            for (const parkArea of parkAreas) {
                if (parkArea.id === parseInt(parkAreaPrimaryKey)) {
                    matchingPark = parkArea
                }
            }

            for (const guest of guests) {
                if (parseInt(parkAreaPrimaryKey) === guest.parkId) {
                    numberOfGuests++
                }
            }

            window.alert(`${matchingPark.name} has ${numberOfGuests} guests`)
        }
    }
)


const parkAreas = getParkAreas()
const guests = getGuests()

export const parkAreasGrid = () => {
    let html = ''

    for (const parkArea of parkAreas) {
        const parkServices = serviceLocationsList(parkArea)
        html += `<div class="grid grid--${parkArea.id}">
        <h3 id="park--${parkArea.id}">${parkArea.name}</h3>
        ${parkServices}
        </div>`
    }

    return html
}
