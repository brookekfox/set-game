import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {colors, patterns, shapes} from '../cards-sdo/cards-setup';
import {storeInstance} from '@aofl/store';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import '../../modules/cards-sdo';
import {namespaces} from '../../../../modules/constants-enumerate';

/**
 * @summary CardDisplay
 * @class CardDisplay
 * @extends {AoflElement}
 */
class CardDisplay extends mapStatePropertiesMixin(AoflElement) {
  /**
   * Creates an instance of CardDisplay.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    this.colors = colors;
    this.patterns = patterns;
    this.shapes = shapes;
    this.selected = [];
  }

  /**
   *
   */
  static get properties() {
    return {
      cards: {type: Array, attribute: false},
      allCards: {type: Array, attribute: false},
      selected: {type: Array, attribute: false}
    };
  }

  /**
   *
   */
  mapStateProperties() {
    const state = this.storeInstance.getState();
    this.cards = state[namespaces.SET].cards;
    this.allCards = state[namespaces.SET].allCards;
    this.selected = state[namespaces.SET].selected;
    let idx = this.getAttribute('idx');
    if (idx) {
      this.card = this.cards[idx];
    }
  }

  /**
   * @readonly
   */
  static get is() {
    return 'card-display';
  }

  /**
   * @return {String}
   */
  notASet() {
    return 'That is not a valid set!';
  }

  /**
   * @return {String}
   */
  foundASet() {
    return 'You found a set!';
  }

  /**
   *
   * Finds unique entries of an array
   * @param {*} value
   * @param {Number} index
   * @param {Object} self
   * @return {Boolean}
   */
  uniqueEntries(value, index, self) {
    return self.indexOf(value) === index;
  }

  /**
   *
   * @param {String} aspect
   * @return {Boolean}
   */
  findNumberOfEachAspect(aspect) {
    let things = this.selected.map((c) => {
      return c[aspect];
    });
    return things.filter(this.uniqueEntries).length;
  }

  /**
   *
   * @return {Boolean}
   */
  checkIfSet() {
    const aspects = ['color', 'pattern', 'shape', 'count'];
    for (let i = 0; i < aspects.length; i++) {
      // if there are 1 or 3 (all the same or all different), keep going
      if (this.findNumberOfEachAspect(aspects[i]) === 2) {
        return false;
      }
    }
    return true;
  }

  /**
   *
   */
  replaceCardsInView() {
    let ids = this.selected.map((c) => {
      return c.id;
    });
    let remainingCards = this.cards.filter((c) => {
      return ids.indexOf(c.id) === -1;
    });
    let nextCards = this.allCards.slice(0, 3);
    let allCards = this.allCards.slice(3);
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'updateCards',
      payload: remainingCards.concat(nextCards)
    });
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'updateAllCards',
      payload: allCards
    });
  }

  /**
   *
   * @return {Boolean} isSelected
   */
  isSelected() {
    let selected = this.selected.filter((s) => {
      return s.id === this.card.id;
    });
    return selected.length > 0 ? 'selected' : '';
  }

  /**
   *
   */
  reset() {
    let isSet = this.checkIfSet();
    if (isSet) {
      storeInstance.commit({
        namespace: namespaces.SET,
        mutationId: 'findValidSet'
      });
      this.replaceCardsInView();
    } else {
      storeInstance.commit({
        namespace: namespaces.SET,
        mutationId: 'findInvalidSet'
      });
    }
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'emptySelectedCards'
    });
  }

  /**
   * Selects a card
   */
  select() {
    storeInstance.commit({
      namespace: namespaces.SET,
      mutationId: 'clearMessageText'
    });
    let idx;
    let selected = this.storeInstance.getState()[namespaces.SET].selected;
    selected.forEach((c, i) => {
      if (this.card.id === c.id) {
        idx = i;
      }
    });

    if (idx >= 0) {
      storeInstance.commit({
        namespace: namespaces.SET,
        mutationId: 'unselectCard',
        payload: this.card.id
      });
    } else {
      storeInstance.commit({
        namespace: namespaces.SET,
        mutationId: 'selectCard',
        payload: this.card
      });
    }
    if (this.storeInstance.getState()[namespaces.SET].selected.length === 3) {
      this.reset();
    }
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(CardDisplay.is, CardDisplay);

export default CardDisplay;
