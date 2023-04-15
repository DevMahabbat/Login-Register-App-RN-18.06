const url = "https://northwind.netcore.io/orders.json"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.results.filter((order) => order.order.freight <= 1).forEach(element => {
            console.log(element)
      
        });
    })
console.log(data1);