const id3 = 'sdgfdg65fdvgf6';

fetch("https://628bc0147886bbbb37beab56.mockapi.io/appp/Tools/" + id3)
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

  // https://www.coingecko.com/api/documentations/v3