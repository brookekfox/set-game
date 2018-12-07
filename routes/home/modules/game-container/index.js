import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {storeInstance} from '@aofl/store';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import '../../modules/cards-sdo';
import {namespaces} from '../../../../modules/constants-enumerate';

/**
 * @summary GameContainer
 * @class GameContainer
 * @extends {AoflElement}
 */
class GameContainer extends mapStatePropertiesMixin(AoflElement) {
  /**
   * Creates an instance of GameContainer.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    const state = this.storeInstance.getState();
    this.cards = state[namespaces.SET].cards;
    this.allCards = state[namespaces.SET].allCards;
  }

  /**
   *
   */
  static get properties() {
    return {
      cards: {type: Array, attribute: false},
      allCards: {type: Array, attribute: false}
    };
  }

  /**
   *
   */
  mapStateProperties() {
    const state = this.storeInstance.getState();
    this.cards = state[namespaces.SET].cards;
    this.allCards = state[namespaces.SET].allCards;
  }

  /**
   * @readonly
   */
  static get is() {
    return 'game-container';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(GameContainer.is, GameContainer);

export default GameContainer;
