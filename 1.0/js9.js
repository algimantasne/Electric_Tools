const id9 = '9dgf156165f4hg56f1b';

fetch("https://628bc0147886bbbb37beab56.mockapi.io/appp/Tools/" + id9)
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