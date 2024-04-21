let planetList: any[] = [];

type Situation = 'Habitado' | 'Habitável' | 'Inábitavel' | 'Inexplorado';

function createPlanet(name: string, coordinates: number, situation: Situation, satelites: string[]) {
    let planet = {
        name,
        coordinates,
        situation,
        satelites,
    };
    planetList.push(planet);
}

function changeSituation(name: string, situation: Situation) {
    let planet = planetList.find((planet) => planet.name === name);
    if (planet) {
        planet.situation = situation;
    }else{
        alert(`O planeta escolhido não está cadastrado`)
    }
}

function addSatelite(name: string, satelite: string) {
    let planet = planetList.find((planet) => planet.name === name);
    if (planet) {
        planet.satelites.push(satelite);
    }else{
        alert(`O planeta escolhido não está cadastrado`)
    }
}

function removeSatelite(name: string, sateliteToRemove: string) {
    const planet = planetList.find((planet) => planet.name === name);
    if (planet) {
        planet.satelites = planet.satelites.filter((satelite: string) => satelite !== sateliteToRemove);
    }else{
        alert(`O planeta escolhido não está cadastrado`)
    }
}

function showPlanets() {
    planetList.forEach((planet) => {
        alert(`Nome: ${planet.name}, Coordenadas: ${planet.coordinates}, Situação: ${planet.situation}, Satélites: ${planet.satelites.join(', ')}`);
    });
}

createPlanet('Terra', 100.20, 'Habitado', ['Lua']);
showPlanets();
changeSituation('Terra', 'Inábitavel');
addSatelite('Terra', 'LuaMaior');
showPlanets();
removeSatelite('Terra', 'Lua');
showPlanets();

function inicialize(){
    let option: string;
    do {
        option = prompt(`Qual opção deseja?
        1 - Novo planeta
        2 - Alterar situação
        3 - Adicionar satélite
        4 - Remover satélite
        5 - Exibir planetas cadastrados
        6 - Sair`);

        switch (option) {
            case '1':
                let name = prompt('Qual o nome do planeta?');
                let coordinates = parseFloat(prompt('Qual a coordenada do planeta?'));
                let situation = prompt('Qual a situação do planeta?') as Situation;
                let satellites = prompt("Quais os satélites do planeta?").split(",");  // Assume que os satélites são separados por vírgulas
                createPlanet(name, coordinates, situation, satellites);
                break;
            case '2':
                let planetName = prompt(`De qual planeta gostaria de alterar a situação?`);
                let newSituation = prompt('Qual a nova situação do planeta?') as Situation;
                changeSituation(planetName, newSituation);
                break;
            case '3':
                let planetNameForSatellite = prompt(`Para qual planeta gostaria de adicionar um satélite?`);
                let satellite = prompt('Qual o nome do satélite?');
                addSatelite(planetNameForSatellite, satellite);
                break;
            case '4':
                let planetNameForRemoval = prompt(`De qual planeta gostaria de remover um satélite?`);
                let satelliteToRemove = prompt('Qual o nome do satélite a remover?');
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

inicialize()