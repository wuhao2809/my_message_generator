const sign = ["slogan", "indication", "signal", "symptom", "hint", "suggestion", "testimony", "promise"];
const adj = ["beautiful", "attractive", "bald", "chubby", "dazzling", "clean", "elegant", "flabby"];
const target = ["girl", "flower", "book", "tree", "food", "ball", "weather", "animal", "car"];


let signPick = sign[Math.floor(Math.random() * sign.length)];
let adjPick = adj[Math.floor(Math.random() * adj.length)];
let targetPick = target[Math.floor(Math.random() * target.length)];


let message = `Your ${signPick} today is ${adjPick + " " + targetPick}!`;

console.log(message);