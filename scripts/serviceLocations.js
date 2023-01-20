import { getServices, getServiceLocations } from "./database.js";

const services = getServices()
const serviceLocations = getServiceLocations()


export const serviceLocationsList = (parkArea) => {
  let html = `<ul class="serviceLocations">`;

  for (const serviceLocation of serviceLocations) {
      for (const service of services) {
        if (serviceLocation.parkId === parkArea.id && serviceLocation.serviceId === service.id) {
            html += `<li>${service.name}</li>`
        }
    }
  }
  html += `</ul>`;

  return html;
}
