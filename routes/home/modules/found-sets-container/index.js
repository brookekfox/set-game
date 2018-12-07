import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {storeInstance} from '@aofl/store';
import {colors, patterns, shapes} from '../cards-sdo/cards-setup';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import '../../modules/cards-sdo';
import {namespaces} from '../../../../modules/constants-enumerate';

/**
 * @summary FoundSetsContainer
 * @class FoundSetsContainer
 * @extends {AoflElement}
 */
class FoundSetsContainer extends mapStatePropertiesMixin(AoflElement) {
  /**
   * Creates an instance of FoundSetsContainer.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    this.colors = colors;
    this.patterns = patterns;
    this.shapes = shapes;
    const state = this.storeInstance.getState();
    this.foundSets = state[namespaces.SET].foundSets;
  }

  /**
   *
   */
  static get properties() {
    return {
      foundSets: {type: Array, attribute: false}
    };
  }

  /**
   *
   */
  mapStateProperties() {
    const state = this.storeInstance.getState();
    this.foundSets = state[namespaces.SET].foundSets;
  }

  /**
   * @readonly
   */
  static get is() {
    return 'found-sets-container';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(FoundSetsContainer.is, FoundSetsContainer);

export default FoundSetsContainer;
