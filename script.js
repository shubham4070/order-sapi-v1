let searchBtn = document.getElementById("search-btn");
let orderInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let orderid = orderInp.value;
  let finalURL = `http://order-sapi-proxy-v2.us-e2.cloudhub.io/order/${orderid}`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].OrderID);
      console.log(data[0].CustomerId);
      console.log(data[0].Status);
      console.log(data[0].DateofOrder);
      console.log(data[0].Quantity );
      console.log(data[0].ProductId   );
      console.log(data[0].ProductName);
      console.log(data[0].UnitPrice);
      console.log(data[0].Total);
      
      result.innerHTML = ` 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNPQxt8ZLNHXp6jkHGmadRYrCKGE53w9ufg&usqp=CAU" class="flag-img">
       <h2> CustomerID:${data[0].CustomerId}</h2>
      <div class="wrapper">
            <div class="data-wrapper">
                <h4>OrderId:</h4>
                <span>${data[0].OrderID}</span>
            </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Status of the Order:</h4>
            <span>${data[0].Status}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>OrderId:</h4>
            <span>${data[0].DateofOrder}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Quantity:</h4>
            <span>${data[0].Quantity}</span>
        </div>
    </div>
 
       <div class="wrapper">
    <div class="data-wrapper">
        <h4>ProductId:</h4>
        <span>${data[0].ProductId }</span>
    </div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>ProductName:</h4>
    <span>${data[0].ProductName}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Unit Price:</h4>
    <span>${data[0].UnitPrice}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>Total Cost:</h4>
<span>${data[0].Total}</span>
</div>
</div>
      
      `

    })


  
});