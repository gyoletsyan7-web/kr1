function find_edit() {
    const name_node = document.getElementById("name")
    name_node.innerHTML = "Mane"

    const surname_node = document.getElementById("surname")
    surname_node.innerHTML = "Gyoletsyan"

    const lastname_node = document.getElementById("lastname")
    lastname_node.innerHTML = "Arturovna"

    const sex_node = document.getElementById("sex")
    sex_node.innerHTML = "female"

    const city_node = document.getElementById("city")
    city_node.innerHTML = "Moscow"
}
const node_for_click = document.getElementById("button")
node_for_click.addEventListener("click", find_edit)