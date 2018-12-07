import '../../modules/card-display';

export default (ctrl, html) => html`
  <div class="u-layout horizontal center-center wrap found-sets-container">
    ${
      ctrl.foundSets.map((set) =>
        html`
          <div class="found-set u-layout horizontal center-center u-inline-m u-stack-m">
            ${
              set.map((card) =>
                html`
                  <div class="found-set-card u-layout vertical center-center u-inline-xs ${ctrl.colors[card.color]}" id="card${card.id}">
                    ${card.count.map((num) => html`
                      <div class="pip u-stack-s
                        ${ctrl.colors[card.color]}
                        ${ctrl.patterns[card.pattern]}
                        ${ctrl.shapes[card.shape]}">
                      </div>
                    `)}
                  </div>
                `
              )}
          </div>
        `
      )}
  </div>
`;
