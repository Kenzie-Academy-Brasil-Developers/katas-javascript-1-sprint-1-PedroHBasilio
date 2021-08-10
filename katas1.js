function oneThroughTwenty() {
    
    let arrUm = []
    for(let i = 1; i <= 20; i ++){
      arrUm.push(i)
    }
    return arrUm
}
console.log(oneThroughTwenty())
oneThroughTwenty()


function evensToTwenty() {
    
  let arrDois = []
  for(let i = 1; i <= 20; i ++){
    if(i % 2 === 0){
      arrDois.push(i)
    }
  }
  return arrDois
}
console.log(evensToTwenty())
evensToTwenty()


function oddsToTwenty() {
    
  let arrTres = []
  for(let i = 1; i <= 20; i ++){
    if(i % 2 !== 0){
      arrTres.push(i)
    }
  }
   return arrTres
}
console.log(oddsToTwenty())
oddsToTwenty()


function multiplesOfFive() {
    
  let arrQuatro = []
  for(let i = 1; i <= 100; i ++){
    if(i % 5 === 0){
      arrQuatro.push(i)
    }
  }
  return arrQuatro
}
console.log(multiplesOfFive())
multiplesOfFive()


function squareNumbers() {
    
  let arrCinco = []
  for(let i = 1; i <= 10; i++){
    arrCinco.push(i * i)
  }
  return arrCinco
}
console.log(squareNumbers())
squareNumbers()


function countingBackwards() {
    
  let arrSeis = []
    for(let i = 20; i >= 1; i --){
      arrSeis.push(i)
    }
    return arrSeis
}  
console.log(countingBackwards())
countingBackwards()


function evenNumbersBackwards() {

  let arrSete = []  
  for(let i = 20; i >= 1; i --){
    if(i % 2 === 0){
      arrSete.push(i)
    }
  }
  return arrSete
}
console.log(evenNumbersBackwards())
evenNumbersBackwards()


function oddNumbersBackwards() {
    
  let arrOito = []  
  for(let i = 20; i >= 1; i --){
    if(i % 2 !== 0){
      arrOito.push(i)
    }
  }
  return arrOito
}
console.log(oddNumbersBackwards())
oddNumbersBackwards()


function multiplesOfFiveBackwards() {
    
  let arrNove = []  
  for(let i = 100; i >= 1; i --){
    if(i % 5 === 0){
      arrNove.push(i)
    }
  }
  return arrNove
}
console.log(multiplesOfFiveBackwards())
multiplesOfFiveBackwards()


function squareNumbersBackwards() {
    
  let arrDez = []
  for(let i = 10; i >= 1; i--){
    arrDez.push(i * i)
  }
  return arrDez
}
console.log(squareNumbersBackwards())
squareNumbersBackwards()
