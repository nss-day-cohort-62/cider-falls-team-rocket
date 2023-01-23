

// const parkAreas = getParkAreas()

import { guestList } from "./guests.js"
import { parkAreasGrid } from "./parkAreas.js"
import { serviceList } from "./services.js"

// for (const parkArea of parkAreas) {
//     const test = serviceLocationsList(parkArea)
//     console.log(test)
// }

const mainContainer = document.querySelector(".container")

const applicationHTML = `


    <article class="serviceList">
        ${serviceList()}
    </article>
    <main class="content">
        <article class="details">
            ${parkAreasGrid()}
        </article>
        <aside class="guestList">
            <h2>Guest List</h2>
                ${guestList()}
        </aside>
    </main>
`




mainContainer.innerHTML = applicationHTML