
// The Api url with data
const ApiUrl = 'https://4c9baa0f-7c69-4e96-9b24-4589c1231f12.mock.pstmn.io/inventoryfeed';

// Display element on front end
const displaySection = document.querySelector("displaySection");
// Array to store the products retrieved
let products = [];

async function getProductsData(){
    // Get data from Api URL
    const response = await fetch(ApiUrl);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";

    }
    else{
        
        products = await response.json();
        console.log(products);
        // error message in console
        if(products == null){
            console.log("Error: No data found");
        }
        else{
            displayTheData();
           
        }
       
    }

}
getProductsData();

//  Display all the data on the frontend 
function displayTheData(){
    
    top3Sales(products);

}



// function to display the top 3 products with the highest quantity sold
function top3Sales(products){
    const top3 = products.sort((a,b) => b.qtysold - a.qtysold).slice(0,3);
    console.log(top3);


    //Create table
    const tableHeading = document.createElement('h2');
    tableHeading.textContent = "Top # best sellers:";
    
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);
    
    const headings = ["SKU", "Description", "Qty Available", "Qty Sold"];
    
    for (const element of headings) {
        const th = document.createElement('th');
        th.textContent = element;
        headerRow.appendChild(th);
        break;
    }

    // Add data to table
    for (const product of products) {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = product.sku;
        row.insertCell(1).textContent = product.description;
        row.insertCell(2).textContent = product.qtyavailable;
        row.insertCell(3).textContent = product.qtysold;
        break;
    }
    
    // displaySection.innerHTML = " ";
    // displaySection.appendChild(tableHeading);
    // displaySection.appendChild(table);
    

}

// function lowerQtyThenSold(){
    
// }



