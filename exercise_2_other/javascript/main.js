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
    makeTeam("Udinese", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    makeTeam("Napoli", Math.floor(Math.random() * 60), Math.floor(Math.random() * 100)),
    
];
    console.log(teamList);
