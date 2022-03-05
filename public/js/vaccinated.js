
// const cors = require('cors')
const data = async()=>{
    try{
        const url = 'https://data.covid19india.org/v4/min/data.min.json'
        const fetch_data = await fetch(url)
        const obj_data = await fetch_data.json() 
        console.log(obj_data)
        const array_data = [obj_data]
        console.log(obj_data.AN.total.vaccinated1)
        console.log(obj_data.AN.total.vaccinated2)

        let states = ['Andaman-Nicobar','Gujarat','Maharashtra','Uttar-Pradesh','Karnataka',
        'Andhra-Pradesh','Chandigarh','Arunachal-Pradesh','Bihar','Himachal-Pradesh','Madhya-Pradesh','Goa',
         'Haryana','Jammu-Kashmir','Lakshadweep','Manipur','Assam','Chattisgarh','Tamil Nadu','Telangana',
        'Tripura','Meghalaya','Mizoram','Puducherry','Nagaland','Punjab','Uttarakhand','West-Bengal','Odisha','Sikkim','Jharkhand',
            'Kerala','Delhi']
        let dose1 = []
        let dose2 = []

        for(arr of array_data){
          //dose-1 array

          dose1.push(arr.AN.total.vaccinated1)
          dose1.push(arr.GJ.total.vaccinated1)
          dose1.push(arr.MH.total.vaccinated1)
          dose1.push(arr.UP.total.vaccinated1)
          dose1.push(arr.KA.total.vaccinated1)
          dose1.push(arr.AP.total.vaccinated1)
          dose1.push(arr.CH.total.vaccinated1)
          dose1.push(arr.AR.total.vaccinated1)
          dose1.push(arr.BR.total.vaccinated1)
          dose1.push(arr.HP.total.vaccinated1)
          dose1.push(arr.MP.total.vaccinated1)
          dose1.push(arr.GA.total.vaccinated1)
          dose1.push(arr.HR.total.vaccinated1)
          dose1.push(arr.JK.total.vaccinated1)
          dose1.push(arr.LD.total.vaccinated1)
          dose1.push(arr.MN.total.vaccinated1)
          dose1.push(arr.AS.total.vaccinated1)
          dose1.push(arr.CT.total.vaccinated1)
          dose1.push(arr.TN.total.vaccinated1)
          dose1.push(arr.TG.total.vaccinated1)
          dose1.push(arr.TR.total.vaccinated1)
          dose1.push(arr.ML.total.vaccinated1)
          dose1.push(arr.MZ.total.vaccinated1)
          dose1.push(arr.PY.total.vaccinated1)
          dose1.push(arr.NL.total.vaccinated1)
          dose1.push(arr.PB.total.vaccinated1)
          dose1.push(arr.UT.total.vaccinated1)
          dose1.push(arr.WB.total.vaccinated1)
          dose1.push(arr.OR.total.vaccinated1)
          dose1.push(arr.SK.total.vaccinated1)
          dose1.push(arr.JH.total.vaccinated1)
          dose1.push(arr.KL.total.vaccinated1)
          dose1.push(arr.DL.total.vaccinated1)
                  
          //dose-2 array
          dose2.push(arr.AN.total.vaccinated2)
          dose2.push(arr.GJ.total.vaccinated2)
          dose2.push(arr.MH.total.vaccinated2)
          dose2.push(arr.UP.total.vaccinated2)
          dose2.push(arr.KA.total.vaccinated2)
          dose2.push(arr.AP.total.vaccinated2)
          dose2.push(arr.CH.total.vaccinated2)
          dose2.push(arr.AR.total.vaccinated2)
          dose2.push(arr.BR.total.vaccinated2)
          dose2.push(arr.HP.total.vaccinated2)
          dose2.push(arr.MP.total.vaccinated2)
          dose2.push(arr.GA.total.vaccinated2)
          dose2.push(arr.HR.total.vaccinated2)
          dose2.push(arr.JK.total.vaccinated2)
          dose2.push(arr.LD.total.vaccinated2)
          dose2.push(arr.MN.total.vaccinated2)
          dose2.push(arr.AS.total.vaccinated2)
          dose2.push(arr.CT.total.vaccinated2)
          dose2.push(arr.TN.total.vaccinated2)
          dose2.push(arr.TG.total.vaccinated2)
          dose2.push(arr.TR.total.vaccinated2)
          dose2.push(arr.ML.total.vaccinated2)
          dose2.push(arr.MZ.total.vaccinated2)
          dose2.push(arr.PY.total.vaccinated2)
          dose2.push(arr.NL.total.vaccinated2)
          dose2.push(arr.PB.total.vaccinated2)
          dose2.push(arr.UT.total.vaccinated2)
          dose2.push(arr.WB.total.vaccinated2)
          dose2.push(arr.OR.total.vaccinated2)
          dose2.push(arr.SK.total.vaccinated2)
          dose2.push(arr.JH.total.vaccinated2)
          dose2.push(arr.KL.total.vaccinated2)
          dose2.push(arr.DL.total.vaccinated2)
   

        }
        console.log(states)
       
   
      
        var myChart = document.getElementById('myChart').getContext('2d');
        var chart = new Chart('myChart',{
            type:"bar",
             data:{
               labels:states,
               datasets:[
                
                {
                    label:'Dose-1',
                    data:dose1,
                    backgroundColor:'#916BBF',
                    hoverBackgroundColor:'#1C0C5B',
                    
                },
                {
                    label:'Dose-2',
                    data:dose2,
                    backgroundColor:'#3D2C8D', 
                    hoverBackgroundColor:'#1C0C5B',            
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
