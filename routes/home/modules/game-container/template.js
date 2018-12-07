export default (ctrl, html) => html`
  <div class="u-layout horizontal center-center wrap card-container">
    ${
      ctrl.cards.map(
        (card) =>
          html`
            <div class="card u-layout vertical center-center u-inline-m u-stack-m ${ctrl.colors[card.color]}" id="card${card.id}"
              @click="${(e) => ctrl.select(card)}">
              ${card.count.map((num) => html`
                <div class="pip u-stack-s
                  ${ctrl.colors[card.color]}
                  ${ctrl.patterns[card.pattern]}
                  ${ctrl.shapes[card.shape]}">
                </div>
              `)}
            </div>
          `
      )
    }
  </div>
`;
