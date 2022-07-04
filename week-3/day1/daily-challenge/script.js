let solarSystem = [
{name: "mercury", moons: 0, color: "orange", radius: 2439},
{name: "venus", moons: 0, color: "grey", radius: 6051},
{name: "earth", moons: 1, color: "blue", radius: 6378},
{name: "mars", moons: 2, color: "red", radius: 3396},
{name: "jupiter", moons: 79, color: "brown", radius: 71492},
{name: "saturn", moons: 82, color: "yellow", radius: 60268},
{name: "uranus", moons: 27, color: "lightblue", radius: 25559},
{name: "neptune", moons: 14, color: "darkblue", radius: 24764},
]

let root = document.getElementsByClassName("listPlanets")[0]

for (let i = 0; i < solarSystem.length; i++){
 let planet = document.createElement("div");
 planet.innerText = solarSystem[i].name;
 planet.classList.add("planet")
 planet.style.backgroundColor =solarSystem[i].color;
 root.appendChild(planet)
}