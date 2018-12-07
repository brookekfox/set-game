import '../../modules/card-display';

export default (ctrl, html) => html`
  <div class="u-layout horizontal center-center wrap game-container">
    ${
      ctrl.cards.map(
        (card, idx) =>
          html`
            <card-display idx="${idx}"></card-display>
          `
      )
    }
  </div>
`;
