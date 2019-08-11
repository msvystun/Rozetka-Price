let message = document.querySelectorAll('.input');
let button = document.querySelector('.button');
let code = document.querySelector('.code');
let now = new Date();
let shortName = document.getElementById('name');
let date = document.getElementById('date');
date.textContent = '<yml_catalog date="' + now.toLocaleString() + '">';
let company = document.getElementById('company');
let url = document.getElementById('url');
let createText = document.getElementById('create-text');

var productList = {

  name: "",
  company: "",
  url: ""

};

for ( let i = 0; i < message.length; i++ ) {

  message[i].addEventListener("input", function(){
    productList.name = message[0].value;
    shortName.textContent = "<name> " + productList.name + " </name>";
    productList.company = message[1].value;
    company.textContent = "<company> " + productList.company + " </company>";
    productList.url = message[2].value;
    url.textContent = "<url> " + productList.url + " </url>";
  });
}

createText.addEventListener( 'click', function(){

  for ( let i = 0; i < message.length; i++ ) {

    if (message[i].value !== "" ) {
      message[i].classList.remove("error");

      var type = 'data:application/octet-stream;base64, ';
      var text = 
      `<?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE yml_catalog SYSTEM "shops.dtd">
      <yml_catalog date="${now.toLocaleString()}">
        <shop>
          <name> ${productList.name} </name>
          <company> ${productList.company} </company>
          <url> ${productList.url} </url>
      `;

      var base = btoa(text);
      var res = type + base;
      createText.href = res;
      createText.setAttribute("download", "price.xml");
    } else {
      message[i].classList.add("error");

    }
  }

});

createText.addEventListener( 'click', function() {

  

}); 
  


