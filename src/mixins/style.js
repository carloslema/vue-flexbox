export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The variants of the component.
     */
    variants: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },

    /**
     * The variant of the component.
     */
    variant: {
      type: String,
      required: false,
    },
  },

  /**
   * The computed properties the mixin can use.
   */
  computed: {
    /**
     * Get the variants of the components.
     *
     * @returns {Array} The correct variants.
     */
    getVariants() {
      // Clone the array instead of referencing
      const variants = this.variants.slice(0);

      if (this.variant) {
        variants.push(this.variant);
      }

      return variants;
    },
  },

  methods: {
    /**
     * Method used to get the class name for the CSS module.
     *
     * @param {string} className The original CSS class name.
     *
     * @returns {string} The class name used as the CSS module.
     */
    getClass(className) {
      if (!this.$style) {
        return className;
      }

      return this.$style[className] || '';
    },
  },
};
