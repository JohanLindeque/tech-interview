
// The Api url with data
const ApiUrl = 'https://4c9baa0f-7c69-4e96-9b24-4589c1231f12.mock.pstmn.io/inventoryfeed';

// Display element on front end
const displaySection = document.querySelector("displaySection");


async function getProductsData(){
    // Get data from Api URL
    const response = await fetch(ApiUrl);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";

    }
    else{
        var data = await response.json();

        console.log(data);

        //dispalay data on page


        document.querySelector(".sku").innerHTML = data.name;
        document.querySelector(".description").innerHTML = Math.round(data.main.temp) + "&deg;c";
        document.querySelector(".qtyavailable").innerHTML = Math.round(data.main.temp_max) + "&deg;c  /";
        document.querySelector(".qtysold").innerHTML = Math.round(data.main.temp_min) + "&deg;c";
        

        

        document.querySelector(".error").style.display = "none";
    
    }

}


function top3Sales(){

}

function lowerQtyThenSold(){
    
}

