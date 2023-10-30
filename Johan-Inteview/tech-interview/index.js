
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
    lowerQtyThenSold(products);

}



function top3Sales(products) {
    const top3 = products.sort((a, b) => b.qtysold - a.qtysold).slice(0, 3);
    
    const displaySection = document.getElementById('displaySection');

    
    

    // Create the table to show the data
    const tableHeading = document.createElement('h2');
    tableHeading.textContent = 'Top 3 best sellers:';

    const table = document.createElement('table');
    const headings = ['SKU', 'Description', 'Qty Available', 'Qty Sold'];

    const headerRow = table.insertRow(0);
    headings.forEach((heading, index) => {
        const th = document.createElement('th');
        th.textContent = heading;
        headerRow.appendChild(th);
    });

    top3.forEach((product) => {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = product.sku;
        row.insertCell(1).textContent = product.description;
        row.insertCell(2).textContent = product.qtyavailable;
        row.insertCell(3).textContent = product.qtysold;
    });

    displaySection.appendChild(tableHeading);
    displaySection.appendChild(table);
}


function lowerQtyThenSold(products){
   const lowerQty = products.filter(products => products.qtyavailable < products.qtysold);
   const displaySection = document.getElementById('displaySection');


   // Create the table to show the data
   const tableHeading = document.createElement('h2');
   tableHeading.textContent = 'Available Qty is less then Qty Sold:';

   const table = document.createElement('table');
   const headings = ['SKU', 'Description', 'Qty Available', 'Qty Sold'];

   const headerRow = table.insertRow(0);
   headings.forEach((heading, index) => {
       const th = document.createElement('th');
       th.textContent = heading;
       headerRow.appendChild(th);
   });

   lowerQty.forEach((product) => {
       const row = table.insertRow(-1);
       row.insertCell(0).textContent = product.sku;
       row.insertCell(1).textContent = product.description;
       row.insertCell(2).textContent = product.qtyavailable;
       row.insertCell(3).textContent = product.qtysold;
   });

   displaySection.appendChild(tableHeading);
   displaySection.appendChild(table);
}



