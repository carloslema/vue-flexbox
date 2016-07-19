import CSSUtil from '../utils/css';
import StyleMixin from './style';

export default {
  /**
   * The mixins
   */
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * Computed property which will output the
     * corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      return CSSUtil.blockClasses(this.block, this.variants);
    },
  },
};
