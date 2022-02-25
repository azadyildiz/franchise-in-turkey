let map = document.getElementById("svg-turkey-map")
map.addEventListener("click", (data) => {
    if (data.target.localName == "path") {
        UIController.clearData()

        var temp = data.target.id.split("-")
        var plateNumber = temp[1]

        UIController.postDataUI(plateNumber)
    }
})