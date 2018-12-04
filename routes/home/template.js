import './modules/card-display';
import './modules/congrats-banner';

export const template = (ctrl, html) => html`
  <div class="u-layout horizontal center-center">
    <div class="messages-container u-layout vertical center-center">
      <div class="message">${ctrl.messageText}</div>
      <div class="sets-found">${ctrl.numberOfSetsFound} / ${ctrl.numberOfSetsToFind} Sets Found</div>
    </div>
    <card-display>
    </card-display>
    <congrats-banner class="${ctrl.$isComplete ? 'show' : 'hide'}"></congrats-banner>
  </div>
`;
