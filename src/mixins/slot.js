export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The content being displayed.
     */
    content: {
      type: [String, Number],
      required: false,
    },
  },

  /**
   * The methods the mixin can use.
   */
  methods: {
    /**
     * Method used to check if the component has a slot with a specified name.
     *
     * @param {String} slotName The name of the slot.
     *
     * @returns {boolean} Whether the component has the slot.
     */
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
