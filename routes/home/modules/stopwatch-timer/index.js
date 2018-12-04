import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';
import {storeInstance} from '@aofl/store';
import {mapStatePropertiesMixin} from '@aofl/map-state-properties-mixin';
import '../../modules/cards-sdo';
// import {namespaces} from '../../../../modules/constants-enumerate';

/**
 * @summary StopwatchTimer
 * @class StopwatchTimer
 * @extends {AoflElement}
 */
class StopwatchTimer extends mapStatePropertiesMixin(AoflElement) {
  /**
   * Creates an instance of StopwatchTimer.
   */
  constructor() {
    super();
    this.storeInstance = storeInstance;
    this.timerStartTime = new Date();
    this.elapsedTime = 0;
    this.stopTimer = false;
    this.startTimer();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'stopwatch-timer';
  }

  /**
   *
   */
  startTimer() {
    setTimeout(() => {
      this.elapsedTime = Math.floor((Date.now() - this.timerStartTime) / 1000);
      if (!this.stopTimer) {
        this.startTimer();
      }
    }, 1000);
  }

  /**
   *
   */
  stopTimer() {
    this.stopTimer = true;
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(StopwatchTimer.is, StopwatchTimer);

export default StopwatchTimer;
