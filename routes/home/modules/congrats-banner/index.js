import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {storeInstance} from '@aofl/store';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import '../../modules/cards-sdo';
import {namespaces} from '../../../../modules/constants-enumerate';

/**
 * @summary CongratsBanner
 * @class CongratsBanner
 * @extends {AoflElement}
 */
class CongratsBanner extends mapStatePropertiesMixin(AoflElement) {
  /**
   * Creates an instance of CongratsBanner.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    const state = this.storeInstance.getState();
    this.numberOfSetsToFind = state[namespaces.SET].numberOfSetsToFind;
  }

  /**
   * @readonly
   */
  static get is() {
    return 'congrats-banner';
  }

  /**
   *
   */
  resetGame() {
    // storeInstance.commit({
    //   namespace: namespaces.SET,
    //   mutationId: 'reset'
    // });
    document.location.reload();
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(CongratsBanner.is, CongratsBanner);

export default CongratsBanner;
