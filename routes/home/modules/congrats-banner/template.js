export default (ctrl, html) => html`
  <div class="u-layout horizontal center-center wrap congrats-banner-container">
    <div class="close-button u-layout horizontal center-center"
      @click="${(e) => ctrl.resetGame()}">
      x
    </div>
    <div>That's dope. You found all ${ctrl.numberOfSetsToFind} sets.</div>
  </div>
`;
