import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {cards, colors, patterns, shapes} from '../cards-sdo/cards-setup';

/**
 * @summary CardDisplay
 * @class CardDisplay
 * @extends {AoflElement}
 */
class CardDisplay extends AoflElement {
  /**
   * Creates an instance of CardDisplay.
   */
  constructor() {
    super();
    this.allCards = this.shuffle(cards);
    this.cards = this.allCards.splice(0, 12);
    this.colors = colors;
    this.patterns = patterns;
    this.shapes = shapes;
  }

  /**
   * @readonly
   */
  static get is() {
    return 'card-display';
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   * @return {Array} shuffled
   */
  shuffle(a) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
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
