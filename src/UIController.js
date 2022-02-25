const UIController = (function () {
    var dealersArea = document.getElementById("dealers")

    async function postDataUI(id) {
        var city = await DataController.getData(id)
        var htmlPage =
            `
            <h3>${city.name}</h3>
            <span>Number Plate: ${city.id}</span>
            <span>Population: ${city.population}</span>
            <span>Region: ${city.region}</span>
        `
        dealersArea.innerHTML += htmlPage
    }

    function clearData() {
        dealersArea.innerHTML = ""
    }

    return {
        postDataUI,
        clearData
    }
})()