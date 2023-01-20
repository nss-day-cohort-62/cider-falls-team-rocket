import { getGuests } from "./database.js";

const guests = getGuests()

export const guestList = () => {
    let html = '<ul class="guests">'

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    html += '</ul>'
    return html
}