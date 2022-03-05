$(document).ready(function(data)
{
    let url = 'https://api.covid19india.org/data.json'
    $.getJSON(url,(data)=>{
        console.log(data)

        let active_cases, confirmed_cases,recovered_cases, deceased_cases

        active_cases = data.statewise[0].active
        confirmed_cases = data.statewise[0].confirmed
        recovered_cases = data.statewise[0].recovered
        deceased_cases = data.statewise[0].deaths

        let state = []
        let confirmed = []
        let recovered = []
        let deceased = []
        let active = []

        $.each(data.statewise,(id,obj)=>{
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deceased.push(obj.deaths)
            active.push(obj.active)
        })

        state.shift()
        confirmed.shift()
        recovered.shift()
        deceased.shift()
        active.shift()

    var myChart = document.getElementById('myChart').getContext('2d');

    var chart = new Chart('myChart',{
        type:"line",
        data:{
            labels:state,
            datasets:[
                
                {
                    label:'Active Cases',
                    data:active,
                    backgroundColor:'#2E64FE',
                    hoverBackgroundColor:'#A9E2F3',
                    minBarLength:200
                },
                {
                    label:'Confirmed Cases',
                    data: confirmed,
                    backgroundColor:"#F4FA58",
                    hoverBackgroundColor:'#F7FE2E',
                    minBarLength:200
                },
                {
                    label:'Recovered Cases',
                    data:recovered,
                    backgroundColor:'#81F781',
                    minBarLength:200
                },
                {
                    label:'Deceased Cases',
                    data: deceased,
                    backgroundColor:'#FF0000',
                    minBarLength:200
                }
            ]
        }

    })

        
        
    
        $('#activecase').append(active_cases)
        $('#confirmed').append(confirmed_cases)
        $('#recovered').append(recovered_cases)
        $('#deceased').append(deceased_cases)
    })
})