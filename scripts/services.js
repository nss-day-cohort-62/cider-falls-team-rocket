import { getServices } from "./database.js";
import { getServiceLocations } from "./database.js";
import { getParkAreas } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("service")) {
            const [,servicePrimaryKey] = itemClicked.id.split("--")

            let matchingService = null

            for (const service of services) {
                if (service.id === parseInt(servicePrimaryKey)) {
                    matchingService = service
                }
            }

            let parkService = ''

            for (const serviceLocation of serviceLocations) {
                for (const parkArea of parkAreas) {
                    if (serviceLocation.serviceId === matchingService.id && serviceLocation.parkId === parkArea.id) {
                        parkService += `\n${parkArea.name}`
                    }
                }
          

            }
            window.alert(`This service is offered at these locations: ${parkService}`)
        }
    }   
)

const services = getServices()
const serviceLocations = getServiceLocations()
const parkAreas = getParkAreas()

export const serviceList = () => {
    let html = '<h3>Services We Provide:</h3>\n<ul>'

    for (const service of services) {
        html += `<li id="service--${service.id}"> ${service.name}</li>`
    }

    html += '</ul>'
    return html
}