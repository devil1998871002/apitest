


function select(){
    let x = document.getElementById('year').value;
    let m = document.getElementById('mon').value;
    console.log(x+"年"+m+"月");
    document.getElementById('show').innerHTML="你選擇的是"+x+"年"+m+"月的資料。";
       }


function getdata(){


    let x = document.getElementById('year').value;
    let m = document.getElementById('mon').value;


        fetch("https://data.kcg.gov.tw/dataset/6f29f6f4-2549-4473-aa90-bf60d10895dc/resource/30dfc2cf-17b5-4a40-8bb7-c511ea166bd3/download/lightrailtraffic.json")
        .then(function(response){
                console.log(response);
                return response.json();
        }).then(function(data){
            let res =document.querySelector('#res');
            res.innerHTML="";
            for(let i=0;i<data.length;i++){
                let product=data[i];
                console.log(product);
                    if(product.年==x & product.月 == m){
                        console.log("抓到");
                        res.innerHTML+="<div>"+"總運量:"+product.總運量+",日均運量:"+product.日均運量+",假日均運量:"+product.假日均運量+"。"+"</div>";
                    }
                    
            }

        })   

    }









