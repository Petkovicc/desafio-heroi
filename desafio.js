let heroiNome = "Hadesito"; 
let xp = [10000]; 
let nivel; 

nivel = xp < 1000  ? "Ferro" :
        xp <= 2000 ? "Bronze" :
        xp <= 5000 ? "Prata" :
        xp <= 7000 ? "Ouro" :
        xp <= 8000 ? "Platina" :
        xp <= 9000 ? "Ascendente" :
        xp <= 10000 ? "Imortal" :
        "Radiante";

console.log(`O Herói de nome ${heroiNome} está no nível de ${nivel}`);