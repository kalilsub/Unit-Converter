const metric = [3.281, 0.264, 2.204]
const [len, vol, mass] = metric

const btnEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lenEl = document.getElementById("len")
const volEl = document.getElementById("vol")
const massEl = document.getElementById("mass")


function convert(num) {
    let measurements = []
    for(let i=0; i<metric.length;i++) {
        let x = num*metric[i]
        measurements.push(x.toFixed(3))
    }
    
    for(let i=0; i<metric.length;i++) {
        let x = num/metric[i]
        measurements.push(x.toFixed(3))
    }
    
    return measurements
}


btnEl.addEventListener("click", () => {
    const [meter, litres, kilo, feet, gall, pounds] = convert(inputEl.value)
    
    
    lenEl.innerHTML = `${inputEl.value} meteres = ${meter} feet | 
                        ${inputEl.value} feet =  ${feet} meters`
                        
    volEl.innerHTML = `${inputEl.value} litres = ${litres} gallons | 
                        ${inputEl.value} gallons = ${gall} litres`
                        
    massEl.innerHTML = `${inputEl.value} kilos = ${kilo} pounds | 
                        ${inputEl.value} pounds = ${pounds} kilos`
})


