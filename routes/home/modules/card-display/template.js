export default (ctrl, html) => html`
  <div class="card u-layout vertical center-center u-inline-m u-stack-m ${ctrl.colors[ctrl.card.color]} ${ctrl.isSelected()}"
    id="card${ctrl.card.id}"
    @click="${(e) => ctrl.select()}">
    ${ctrl.card.count.map((num) => html`
      <div class="pip u-stack-s
        ${ctrl.colors[ctrl.card.color]}
        ${ctrl.patterns[ctrl.card.pattern]}
        ${ctrl.shapes[ctrl.card.shape]}">
      </div>
    `)}
  </div>
`;
