// Start of header creation ...
header = document.createElement("div");
header.style.backgroundColor = "white";
header.style.width = "95%";
header.style.height = "40px";
header.style.display = "flex";
header.style.padding = "15px 2.5%";
header.style.margin = "0 10px 0 0";
header.style.flexDirection = "row";
header.style.justifyContent = "space-between";
// End of header creation ...

// Create the header Children ...

// The first Child ...
headerChild1 = document.createElement("div");
headerChild1.appendChild(document.createTextNode("Elzero"));
headerChild1.style.color = "green";
headerChild1.style.fontSize = "30px";
headerChild1.style.fontWeight = "700";
header.appendChild(headerChild1);
// The Second Child ...
headerChild2 = document.createElement("div");
headerChild2.style.display = "flex";
headerChild2.style.flexDirection = "row";
headerChild2.style.justifyContent = "space-evenly";
headerChild2.style.color = "gray";
headerChild2.style.width = "30%";
headerChild2.style.fontSize = "30px";
headerChild2.style.fontWeight = "600";
// Home element ...
Home = document.createElement("div");
HomeText = document.createTextNode("Home");
Home.appendChild(HomeText);
Home.className = "SubChild";
headerChild2.appendChild(Home);
// About element ...
About = document.createElement("div");
AboutText = document.createTextNode("About");
About.appendChild(AboutText);
About.className = "SubChild";
headerChild2.appendChild(About);
// Service element ...
Service = document.createElement("div");
ServiceText = document.createTextNode("Service");
Service.appendChild(ServiceText);
Service.className = "SubChild";
headerChild2.appendChild(Service);
// Contact element ...
Contact = document.createElement("div");
ContactText = document.createTextNode("Contact");
Contact.appendChild(ContactText);
Contact.className = "SubChild";
headerChild2.appendChild(Contact);
header.appendChild(headerChild2);
// End of Header Creation ...

// Start of cards Creation ...
container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-evenly";
container.style.width = "100%";
container.style.marginTop = "10px";
container.style.height = "fi-content";
for (let i = 1; i < 16; i++) {
  // Card Creation ...
  card = document.createElement("div");
  card.style.width = "30%";
  card.style.margin = "5px 10px 10px";
  card.style.height = "fit-content";
  card.style.fontSize = "30px";
  card.style.textAlign = "center";
  card.style.color = "gray";
  card.style.padding = "10px 0";
  card.style.backgroundColor = "white";
  cardN = document.createElement("div");
  cardNumber = document.createTextNode(i);
  cardN.appendChild(cardNumber);
  cardN.style.fontSize = "40px";
  cardN.style.fontWeight = "800";
  cardN.style.color = "black";
  cardBr = document.createElement("br");
  cardText = document.createTextNode("card");
  card.appendChild(cardN);
  card.appendChild(cardText);
  container.appendChild(card);
}
// End of Cards Creation ...
footer = document.createElement("div");
footer.style.backgroundColor = "green";
footer.style.width = "100%";
footer.style.height = "43px";
footerText = document.createElement("div");
footerText.appendChild(document.createTextNode("CopyRight -- 2023"));
footerText.style.color = "white";
footerText.style.fontSize = "25px";
footerText.style.textAlign = "center";
footerText.style.paddingTop = "7px";
footerText.style.letterSpacing = "2px";
footerText.style.fontWeight = "600";
footer.appendChild(footerText);
// Start Footer creation ...

// End Footer Creation ...

// body container : ...
document.body.appendChild(header);
document.body.style.backgroundColor = "gray";
document.body.appendChild(container);
document.body.appendChild(footer);
