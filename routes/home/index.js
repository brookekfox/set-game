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
// import {namespaces} from '../../modules/constants-enumerate';

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
      // cards: {type: Number, attribute: false}
    };
  }

  /**
   *
   */
  mapStateProperties() {
    // const state = this.storeInstance.getState();
    // this.cards = state[namespaces.CARDS].cards;
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
