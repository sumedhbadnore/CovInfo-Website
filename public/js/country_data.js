const country_name = document.getElementById('country-name')
const cases = document.getElementById('cases')
const button = document.getElementById('submit')
const input = document.getElementById('input')
const iso3 = document.getElementById('iso3')
const img = document.getElementById('img')
const today_cases = document.getElementById('today-cases')
const total_cases = document.getElementById('total-cases')
const continent = document.getElementById('continent')
const iso2 = document.getElementById('iso2')
const total_recovered = document.getElementById('total-recovered')
const today_recovered = document.getElementById('today-recovered')
const today_deaths = document.getElementById('today-deaths')
const total_deaths = document.getElementById('total-deaths')
const critical = document.getElementById('critical')


const api = async()=>{
    try{
        const value = input.value
        const url =`https://corona.lmao.ninja/v2/countries/${value}?yesterday=true&strict&query%20`
        const fetch_data = await fetch(url)
        const obj_data = await fetch_data.json()
        //console.log(obj_data)
        const array_data = [obj_data]
        console.log(array_data)


        cases.innerText = array_data[0].active
        country_name.innerText = `Country: ${array_data[0].country}`
        iso3.innerText = ` | ${array_data[0].countryInfo.iso3}`
        const flag =array_data[0].countryInfo.flag
        today_cases.innerText = array_data[0].todayCases
        total_cases.innerText = array_data[0].cases
        continent.innerText = `Continent: ${array_data[0].continent}`
        iso2.innerText = ` | ${array_data[0].countryInfo.iso2}`
        total_recovered.innerText = array_data[0].recovered
        today_recovered.innerText = array_data[0].todayRecovered
        today_deaths.innerText = array_data[0].todayDeaths
        total_deaths.innerText = array_data[0].deaths
        critical.innerText = array_data[0].critical
        
        img.innerHTML =  `<img src='${flag}'>`
       
      
        
       
    
    }catch(err){
        console.log(err)
    }
  
}

button.addEventListener('click',api)
input.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            event.preventDefault
            document.getElementById("submit").click()
        
        }
}
)



