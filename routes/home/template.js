import './modules/card-display';

export const template = (ctrl, html) => html`
  <h1 class="message">${ctrl.messageText}</h1>
  <h1 class="sets-found">${ctrl.numberOfSetsFound} / ${ctrl.numberOfSetsToFind}</h1>
  <card-display
    cards="${ctrl.cards}"
    allCards="${ctrl.allCards}">
  </card-display>
`;
