class Atleta {
    
    constructor(nome, idade, peso, altura, notas){
        this.nome=nome;
        this.idade=idade;
        this.peso=peso;
        this.altura=altura;
        this.notas=notas;
    }

    calculaCategoria(idade){
       if(idade>=9 && idade<=11){
            return 'Infantil'
       } else if(idade>11 && idade<=13){
            return 'Juvenil'
       } else if(idade>13 && idade<=15){
            return 'Intermediário'
       } else if(idade>15 && idade<=30){
            return 'Adulto'
       } else {
            return 'Sem categoria'
       }
    }

    calculaIMC(peso, altura){
        let imc = peso/(altura ** 2)
        if(imc < 18.5){
            return `${imc} - Abaixo do peso`
        } else if(imc>18.5 && imc<25){
            return `${imc} - Peso ideal`
        } else if(imc>=25 && imc<30){
            return `${imc} - Sobrepeso`
        } else if(imc>=30 && imc<35){
            return `${imc} - Obesidade`
        } else if(imc>=35 && imc<40){
            return `${imc} - Obesidade severa`
        } else if(imc>=40){
            return `${imc} - Obesidade mórbida`
        }
    }
    
    calculaMediaValida(notas){
        let soma = 0
        notas.forEach(nota => {
            soma+=nota
        });
        let media = soma/notas.length
        return media
    }
    
    obtemNomeAtleta(){
        return atleta.nome
    }
    
    obtemIdadeAtleta(){
        return atleta.idade
    }
    
    obtemPesoAtleta(){
        return atleta.peso
    }

    obtemAlturaAtleta(){
        return atleta.altura
    }
    
    obtemNotasAtleta(){
        return atleta.notas
    }
    
    obtemCategoria(idade){
        return this.calculaCategoria(idade)
    }
    
    obtemIMC(peso, altura){
        return this.calculaIMC(peso, altura)
    }
    
    obtemMediaValida(notas){
        return this.calculaMediaValida(notas)
    }
}

const atleta = new Atleta("Ana Maria", 28, 68, 1.66, [4.5, 7.2, 8.4, 9.3, 6.7])

const dados_atleta = {
    Nome: atleta.obtemNomeAtleta(),
    Idade: atleta.obtemIdadeAtleta(),
    Peso: atleta.obtemPesoAtleta(),
    Altura: atleta.obtemAlturaAtleta(),
    Notas: atleta.notas,
    Categoria: atleta.obtemCategoria(atleta.idade),
    IMC: atleta.obtemIMC(atleta.peso, atleta.altura),
    Media_valida: atleta.obtemMediaValida(atleta.notas)
}

console.log(dados_atleta)
