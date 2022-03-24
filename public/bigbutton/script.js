import { getResponseData } from "/script/util.js";

(function () {
  const theBigButton = document.querySelector("#thebigbutton");
  const populateMeCaptain = document.querySelector("#populatemecaptain");
  const cardTemplate = document.querySelector("#cardtemplate");

  const getCardClone = () => cardTemplate.content.cloneNode(true);

  const addCard = (cardInfo) => {
    const { suit, name } = cardInfo;
    const newCard = getCardClone();
    const newCardImage = newCard.querySelector(".card-image");
    newCardImage.src = `/images/${name}_${suit}.png`;
    populateMeCaptain.appendChild(newCard);
  };

  const getNewDeck = async () => {
    const { data, response } = await getResponseData("/v1/deck");

    if (!response.ok) {
      console.log(response.status, data);
      return null;
    }

    return data.deck;
  };

  const renderNewDeck = async () => {
    const deck = await getNewDeck();
    if (deck === null) {
      alert("Error loading new deck! See console for more.");
      return;
    }

    populateMeCaptain.innerHTML = "";

    deck.forEach((card) => {
      addCard(card);
    });
  };

  theBigButton.addEventListener("click", async () => {
    theBigButton.disabled = true;
    await renderNewDeck();
    theBigButton.disabled = false;
  });

  theBigButton.disabled = true;
  await renderNewDeck();
  theBigButton.disabled = false;
})();
