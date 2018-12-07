import './modules/game-container';
import './modules/found-sets-container';
import './modules/congrats-banner';

export const template = (ctrl, html) => html`
  <div class="u-layout vertical center-center">
    <div class="messages-container u-layout horizontal center-center u-stack-m">
      <div class="sets-found">${ctrl.numberOfSetsFound} / ${ctrl.numberOfSetsToFind} Sets Found</div>
      <div class="message">${ctrl.messageText}</div>
    </div>
    <game-container></game-container>
    <found-sets-container></found-sets-container>
    <congrats-banner class="${ctrl.$isComplete ? 'show' : 'hide'}"></congrats-banner>
  </div>
`;
