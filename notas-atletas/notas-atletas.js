function exibirAtletas(atletas){
    
    function calcularMediaNotas(notas){
        notas = notas.sort()
        let notasComputadas = notas.slice(1,4)
        let soma = 0
        
        notasComputadas.forEach(nota => {
            soma += nota
        });
        
        let media = soma / notasComputadas.length
        return media
    }
    
    for (let i=0; i<atletas.length; i++){
        console.log(`Atleta: ${atletas[i].nome}`)
        console.log(`Notas obtidas: ${atletas[i].notas}`)
        console.log(`Média válida: ${calcularMediaNotas(atletas[i].notas)}`)
        console.log()
    }   
}

let atletas = [
    {
        nome: "Marcos Felipe",
        notas: [8, 7, 5, 9, 6] 
    },
    {
        nome: "Théo Benício",
        notas: [8, 9.4, 6.7, 9.1, 6.9]
    },
    {
        nome: "Christiny Ferreira",
        notas: [7.6, 8.7, 9.3, 8.2, 8.7]
    },
    {
        nome: "Kelma Sofia",
        notas: [7.7, 6, 8.8, 9.2, 9.6]
    }
]

exibirAtletas(atletas)