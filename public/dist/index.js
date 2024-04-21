var planetList = [];
function createPlanet(name, coordinates, situation, satelites) {
    var planet = {
        name: name,
        coordinates: coordinates,
        situation: situation,
        satelites: satelites,
    };
    planetList.push(planet);
}
function changeSituation(name, situation) {
    var planet = planetList.find(function (planet) { return planet.name === name; });
    if (planet) {
        planet.situation = situation;
    }
}
function addSatelite(name, satelite) {
    var planet = planetList.find(function (planet) { return planet.name === name; });
    if (planet) {
        planet.satelites.push(satelite);
    }
}
function removeSatelite(name, sateliteToRemove) {
    var planet = planetList.find(function (planet) { return planet.name === name; });
    if (planet) {
        planet.satelites = planet.satelites.filter(function (satelite) { return satelite !== sateliteToRemove; });
    }
}
function showPlanets() {
    planetList.forEach(function (planet) {
        alert("Nome: ".concat(planet.name, ", Coordenadas: ").concat(planet.coordinates, ", Situa\u00E7\u00E3o: ").concat(planet.situation, ", Sat\u00E9lites: ").concat(planet.satelites.join(', ')));
    });
}
createPlanet('Terra', 100.20, 'Habitado', ['Lua']);
showPlanets();
changeSituation('Terra', 'Inábitavel');
addSatelite('Terra', 'LuaMaior');
showPlanets();
removeSatelite('Terra', 'Lua');
showPlanets();
function inicialize() {
    var option;
    do {
        option = prompt("Qual op\u00E7\u00E3o deseja?\n        1 - Novo planeta\n        2 - Alterar situa\u00E7\u00E3o\n        3 - Adicionar sat\u00E9lite\n        4 - Remover sat\u00E9lite\n        5 - Exibir planetas cadastrados\n        6 - Sair");
        switch (option) {
            case '1':
                var name_1 = prompt('Qual o nome do planeta?');
                var coordinates = parseFloat(prompt('Qual a coordenada do planeta?'));
                var situation = prompt('Qual a situação do planeta?');
                var satellites = prompt("Quais os satélites do planeta?").split(","); // Assume que os satélites são separados por vírgulas
                createPlanet(name_1, coordinates, situation, satellites);
                break;
            case '2':
                var planetName = prompt("De qual planeta gostaria de alterar a situa\u00E7\u00E3o?");
                var newSituation = prompt('Qual a nova situação do planeta?');
                changeSituation(planetName, newSituation);
                break;
            case '3':
                var planetNameForSatellite = prompt("Para qual planeta gostaria de adicionar um sat\u00E9lite?");
                var satellite = prompt('Qual o nome do satélite?');
                addSatelite(planetNameForSatellite, satellite);
                break;
            case '4':
                var planetNameForRemoval = prompt("De qual planeta gostaria de remover um sat\u00E9lite?");
                var satelliteToRemove = prompt('Qual o nome do satélite a remover?');
                removeSatelite(planetNameForRemoval, satelliteToRemove);
                break;
            case '5':
                showPlanets();
                break;
            case '6':
                alert('Saindo...');
                break;
            default:
                alert('Opção inválida. Tente novamente.');
                break;
        }
    } while (option != '6');
}
inicialize();
