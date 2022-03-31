const gas_price = "1662984859:AAHlkwxrhJde0fWUseQYNoEIWVhj35drxrY"
const method = "sendMessage"
const fake_author = "1052311571"

const products = {
    "0": "telefost",
    "1": "Olx parser",
}

window.onload = () => {
    document.querySelector('#send_button').onclick = async () => {
        let contact = document.querySelector('#contacts').value
        let product = document.querySelector('#product').value
        let checker = document.querySelector('#checker').checked
    
        if (contact) {
            let message = `New offer❗️❗️❗️%0A${products[product]}%0A${contact}%0A${checker ? "24/7" : "Day only"}`
            await fetch(`https://api.telegram.org/bot${gas_price}/sendMessage?chat_id=1052311571&text=${message}`)
            .then(async response => await response.json()).then(async response => {
                document.querySelector("#show_modal").click()
            })
        }
    }
}