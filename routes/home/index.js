/**
 * @route /
 * @title AofL::Home
 * @prerender false
 */
import {template} from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import styles from './template.css';
import {storeInstance} from '@aofl/store';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import './modules/cards-sdo';
import {namespaces} from '../../modules/constants-enumerate';
import {cards} from './modules/cards-sdo/cards-setup';

/**
 *
 * @extends {mapStatePropertiesMixin(AoflElement)}
 */
class HomePage extends mapStatePropertiesMixin(AoflElement) {
  /**
   *
   * Creates an instance of HomePage.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    let allCards = this.shuffle(cards);
    let currentCards = allCards.splice(0, 12);
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'updateAllCards',
      payload: allCards
    });
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'updateCards',
      payload: currentCards
    });
  }

  /**
   * Shuffles array in place.
   * @param {Array} items An array containing the items.
   * @return {Array} shuffled
   */
  shuffle(items) {
    let j;
    let x;
    let i;
    for (i = items.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = items[i];
      items[i] = items[j];
      items[j] = x;
    }
    return items;
  }

  /**
   *
   * @readonly
   */
  static get is() {
    return 'home-page';
  }

  /**
   *
   */
  static get properties() {
    return {
      cards: {type: Array, attribute: false},
      allCards: {type: Array, attribute: false},
      messageText: {type: String, attribute: false},
      numberOfSetsFound: {type: Number, attribute: false},
      numberOfSetsToFind: {type: Number, attribute: false},
      $isComplete: {type: Boolean, attribute: false}
    };
  }

  /**
   *
   */
  mapStateProperties() {
    const state = this.storeInstance.getState();
    this.cards = state[namespaces.SET].cards;
    this.messageText = state[namespaces.SET].messageText;
    this.numberOfSetsFound = state[namespaces.SET].numberOfSetsFound;
    this.numberOfSetsToFind = state[namespaces.SET].numberOfSetsToFind;
    this.$isComplete = state[namespaces.SET].$isComplete;
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
};

customElements.define(HomePage.is, HomePage);

export default HomePage;
