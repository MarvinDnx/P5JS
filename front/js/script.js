let products = []
fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json()
    }
  })
  .then(function (value) {
    const items = (document.getElementById(
      "items"
    ).innerHTML = `<a href="./product.html?id=42"><article><img src="${value[0].imageUrl}" alt="image kanap O1"><h3 class="productName">${value[0].name}</h3><p class="productDescription">${value[0].description}</p></article></a>`)
    console.log(value)
  })
  const items = [8];
  var length = items.length;
  let i=0;
  
  while(i<length){
      console.log(items[i]);
      i++;
  }
 