// Factory Function per creare squadra
const makeTeam = (name, points, foulsWon) => ({
name, points, foulsWon
});

// creo array utilizzando la mia factory function e un numero random() per punti e falli considerando che i punti possono essere tra 0 e 59 e falli tra 0 e 99
const teamList = [
    makeTeam("Juventus", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Milan", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Inter", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Roma", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Lazio", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Torino", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Udinese", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Sassuolo", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Bologna", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Napoli", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    
];
    console.log(teamList);


// creo hard copy della lista squadre
let teamListNew = structuredClone(teamList);

// cancello nella copia la proprietá foulsWon, iterando nell'array con un for
for (let i = 0; i < teamListNew.length; i++) {
    delete teamListNew[i].foulsWon;
};



// ordino squadre secondo classifica
teamListNew.sort((TeamA, TeamB) => {
    if (TeamA.points === TeamB.points) { // a paritá di punti mostro in ordine alfabetico
        return TeamA.name.localeCompare(TeamB.name);
    } else {
        return TeamB.points - TeamA.points; // metodo sort con B - A -> ordine decrescente
    };
});

console.log(teamListNew);

// mostro risultato in pagina
const result = document.querySelector('.result-card');
result.classList.remove("hidden");

// creo tabella e mostro classifica
let html = "<table><tr> <th> Squadra </th> <th> Punti </th> <th> Posizione </th> </tr>"; // creo html con table opening tag e table header
 for (let i = 0; i < teamListNew.length; i++) { // itero sull'array per creare una riga con Squadra, Punti e Posizione per ogni elemento dell'array
    html += `
     <tr>
        <td> ${teamListNew[i].name} </td>
        <td> ${teamListNew[i].points} </td>
        <td> ${i + 1} </td>
    </tr>`
};

result.innerHTML = `${html} </table>` // mostro il risultato in pagina e aggiungo il closing tag </table>

