

const activeLabel = document.getElementById('activecase')
const recoveredLabel = document.getElementById('recovered')
const confirmedLabel = document.getElementById('confirmed')
const deceasedLabel = document.getElementById('deceased')

const data = async()=>{
    try{
        const url = 'https://data.covid19india.org/v4/min/data.min.json'
        const fetch_data = await fetch(url)
        const obj_data = await fetch_data.json() 
        console.log(obj_data)
     
        const state = ['Andaman-Nicobar', 'Andhra Pradesh', 'Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Delhi','Dadra and Nagar Haveli','Goa','Gujarat','Himachal Pradesh','Haryana','Jharkhand','Jammu & Kashmir','Karnataka','Kerala','Ladakh',
        'Lakshadweep Islands','Maharashtra','Meghalaya','Manipur','Madhya Pradesh','Nagaland','Orrisa','Punjab','Pondicherry','Rajasthan','Sikkim',
        'Telangana','Tamilnadu','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']
        const confirmed = []

        const total_recovered = obj_data.TT.total.recovered
        const total_confirmed = obj_data.TT.total.confirmed
        const total_deceased = obj_data.TT.total.deceased
        const total_tested = obj_data.TT.total.tested

        confirmed.push(obj_data.AN.total.confirmed)
        confirmed.push(obj_data.AP.total.confirmed)
        confirmed.push(obj_data.AR.total.confirmed)
        confirmed.push(obj_data.AS.total.confirmed)
        confirmed.push(obj_data.BR.total.confirmed)
        confirmed.push(obj_data.CH.total.confirmed)
        confirmed.push(obj_data.CT.total.confirmed)
        confirmed.push(obj_data.DL.total.confirmed)
        confirmed.push(obj_data.DN.total.confirmed)
        confirmed.push(obj_data.GA.total.confirmed)
        confirmed.push(obj_data.GJ.total.confirmed)
        confirmed.push(obj_data.HP.total.confirmed)
        confirmed.push(obj_data.HR.total.confirmed)
        confirmed.push(obj_data.JH.total.confirmed)
        confirmed.push(obj_data.JK.total.confirmed)
        confirmed.push(obj_data.KA.total.confirmed)
        confirmed.push(obj_data.KL.total.confirmed)
        confirmed.push(obj_data.LA.total.confirmed)
        confirmed.push(obj_data.LD.total.confirmed)
        confirmed.push(obj_data.MH.total.confirmed)
        confirmed.push(obj_data.ML.total.confirmed)
        confirmed.push(obj_data.MN.total.confirmed)
        confirmed.push(obj_data.MP.total.confirmed)
        confirmed.push(obj_data.NL.total.confirmed)
        confirmed.push(obj_data.OR.total.confirmed)
        confirmed.push(obj_data.PB.total.confirmed)
        confirmed.push(obj_data.PY.total.confirmed)
        confirmed.push(obj_data.RJ.total.confirmed)
        confirmed.push(obj_data.SK.total.confirmed)
        confirmed.push(obj_data.TG.total.confirmed)
        confirmed.push(obj_data.TN.total.confirmed)
        confirmed.push(obj_data.TR.total.confirmed)
        confirmed.push(obj_data.UP.total.confirmed)
        confirmed.push(obj_data.UT.total.confirmed)
        confirmed.push(obj_data.WB.total.confirmed)

    
        const deceased = []
          
        deceased.push(obj_data.AN.total.deceased)
        deceased.push(obj_data.AP.total.deceased)
        deceased.push(obj_data.AR.total.deceased)
        deceased.push(obj_data.AS.total.deceased)
        deceased.push(obj_data.BR.total.deceased)
        deceased.push(obj_data.CH.total.deceased)
        deceased.push(obj_data.CT.total.deceased)
        deceased.push(obj_data.DL.total.deceased)
        deceased.push(obj_data.DN.total.deceased)
        deceased.push(obj_data.GA.total.deceased)
        deceased.push(obj_data.GJ.total.deceased)
        deceased.push(obj_data.HP.total.deceased)
        deceased.push(obj_data.HR.total.deceased)
        deceased.push(obj_data.JH.total.deceased)
        deceased.push(obj_data.JK.total.deceased)
        deceased.push(obj_data.KA.total.deceased)
        deceased.push(obj_data.KL.total.deceased)
        deceased.push(obj_data.LA.total.deceased)
        deceased.push(obj_data.LD.total.deceased)
        deceased.push(obj_data.MH.total.deceased)
        deceased.push(obj_data.ML.total.deceased)
        deceased.push(obj_data.MN.total.deceased)
        deceased.push(obj_data.MP.total.deceased)
        deceased.push(obj_data.NL.total.deceased)
        deceased.push(obj_data.OR.total.deceased)
        deceased.push(obj_data.PB.total.deceased)
        deceased.push(obj_data.PY.total.deceased)
        deceased.push(obj_data.RJ.total.deceased)
        deceased.push(obj_data.SK.total.deceased)
        deceased.push(obj_data.TG.total.deceased)
        deceased.push(obj_data.TN.total.deceased)
        deceased.push(obj_data.TR.total.deceased)
        deceased.push(obj_data.UP.total.deceased)
        deceased.push(obj_data.UT.total.deceased)
        deceased.push(obj_data.WB.total.deceased)



        const recovered = []

          
        recovered.push(obj_data.AN.total.recovered)
        recovered.push(obj_data.AP.total.recovered)
        recovered.push(obj_data.AR.total.recovered)
        recovered.push(obj_data.AS.total.recovered)
        recovered.push(obj_data.BR.total.recovered)
        recovered.push(obj_data.CH.total.recovered)
        recovered.push(obj_data.CT.total.recovered)
        recovered.push(obj_data.DL.total.recovered)
        recovered.push(obj_data.DN.total.recovered)
        recovered.push(obj_data.GA.total.recovered)
        recovered.push(obj_data.GJ.total.recovered)
        recovered.push(obj_data.HP.total.recovered)
        recovered.push(obj_data.HR.total.recovered)
        recovered.push(obj_data.JH.total.recovered)
        recovered.push(obj_data.JK.total.recovered)
        recovered.push(obj_data.KA.total.recovered)
        recovered.push(obj_data.KL.total.recovered)
        recovered.push(obj_data.LA.total.recovered)
        recovered.push(obj_data.LD.total.recovered)
        recovered.push(obj_data.MH.total.recovered)
        recovered.push(obj_data.ML.total.recovered)
        recovered.push(obj_data.MN.total.recovered)
        recovered.push(obj_data.MP.total.recovered)
        recovered.push(obj_data.NL.total.recovered)
        recovered.push(obj_data.OR.total.recovered)
        recovered.push(obj_data.PB.total.recovered)
        recovered.push(obj_data.PY.total.recovered)
        recovered.push(obj_data.RJ.total.recovered)
        recovered.push(obj_data.SK.total.recovered)
        recovered.push(obj_data.TG.total.recovered)
        recovered.push(obj_data.TN.total.recovered)
        recovered.push(obj_data.TR.total.recovered)
        recovered.push(obj_data.UP.total.recovered)
        recovered.push(obj_data.UT.total.recovered)
        recovered.push(obj_data.WB.total.recovered)

        const tested = []

        tested.push(obj_data.AN.total.tested)
        tested.push(obj_data.AP.total.tested)
        tested.push(obj_data.AR.total.tested)
        tested.push(obj_data.AS.total.tested)
        tested.push(obj_data.BR.total.tested)
        tested.push(obj_data.CH.total.tested)
        tested.push(obj_data.CT.total.tested)
        tested.push(obj_data.DL.total.tested)
        tested.push(obj_data.DN.total.tested)
        tested.push(obj_data.GA.total.tested)
        tested.push(obj_data.GJ.total.tested)
        tested.push(obj_data.HP.total.tested)
        tested.push(obj_data.HR.total.tested)
        tested.push(obj_data.JH.total.tested)
        tested.push(obj_data.JK.total.tested)
        tested.push(obj_data.KA.total.tested)
        tested.push(obj_data.KL.total.tested)
        tested.push(obj_data.LA.total.tested)
        tested.push(obj_data.LD.total.tested)
        tested.push(obj_data.MH.total.tested)
        tested.push(obj_data.ML.total.tested)
        tested.push(obj_data.MN.total.tested)
        tested.push(obj_data.MP.total.tested)
        tested.push(obj_data.NL.total.tested)
        tested.push(obj_data.OR.total.tested)
        tested.push(obj_data.PB.total.tested)
        tested.push(obj_data.PY.total.tested)
        tested.push(obj_data.RJ.total.tested)
        tested.push(obj_data.SK.total.tested)
        tested.push(obj_data.TG.total.tested)
        tested.push(obj_data.TN.total.tested)
        tested.push(obj_data.TR.total.tested)
        tested.push(obj_data.UP.total.tested)
        tested.push(obj_data.UT.total.tested)
        tested.push(obj_data.WB.total.tested)

        
        console.log(confirmed)
        console.log(deceased)
        console.log(recovered)
        console.log(tested)
     

        activeLabel.innerText = total_tested
        recoveredLabel.innerText = total_recovered
        deceasedLabel.innerText = total_deceased
        confirmedLabel.innerText = total_confirmed

   
 
      
        var myChart = document.getElementById('myChart').getContext('2d');
        var chart = new Chart('myChart',{
            type:"line",
             data:{
               labels:state,
               datasets:[
                
                {
                    label:'Tested',
                    data:tested,
                    backgroundColor:'#2E64FE',
                    hoverBackgroundColor:'#A9E2F3',
                    minBarLength:200
                },
                {
                    label:'Confirmed Cases',
                    data:confirmed,
                    backgroundColor:"#F4FA58",
                    hoverBackgroundColor:'#F7FE2E',
                    minBarLength:200
                },
                {
                    label:'Recovered Cases',
                    data:recovered,
                    backgroundColor:'#81F781',
                  
                },
                {
                    label:'Deceased Cases',
                    data: deceased,
                    backgroundColor:'#FF0000',
                   
                }
            ]
        }
      
             
        
        })
       
    }
    catch(e){
        console.log(e)
    }
    
}


data()
