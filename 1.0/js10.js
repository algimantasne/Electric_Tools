const id10 = '10fdfs54654g4h56g4n6g';

fetch("https://628bc0147886bbbb37beab56.mockapi.io/appp/Tools/" + id10)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const element = document.createElement("div");
    element.classList.add("child");
    element.innerHTML = data.toolName + ", " + data.toolPrice + " " + data.priceCurrency;
    element.style.backgroundImage = "url(" + data.toolPhoto + ")";
    element.style.backgroundSize = "cover"



    document.body.append(element);
  });