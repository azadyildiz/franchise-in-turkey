const DataController = (function () {
    const URL = "../data/cities_of_turkey.json"
    async function getData(id) {
        var cities = await fetch(URL).then(response => response.json()).then(response => response)
        return cities[id - 1]
    }
    return {
        getData
    }
})()