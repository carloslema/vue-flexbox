import CSSUtil from './../utils/css';
import StyleMixin from './style';

export default {
  /**
   * The mixins
   */
  mixins: [
    StyleMixin,
  ],

  /**
   * The computed properties
   */
  computed: {
    /**
     * The block name from the parent
     *
     * @returns {string} The block
     */
    block() {
      return this.$parent.block;
    },

    /**
     * Computed property which will output
     * the corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      return CSSUtil.elementClasses(this.block, this.element, this.variants);
    },
  },
};
