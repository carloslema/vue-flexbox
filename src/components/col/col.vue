<style lang="stylus" >
  @import '~@/assets/stylus/helpers/imports.styl'

  .col
    display: flex
    flex: 0 0 100%
    max-width: 100%
    padding: 1rem .5rem 0 .5rem

    +variant(no-gutters)
      padding: 0

  // Function to create the column.
  make-grid($breakpoint)
    create-column-helpers($breakpoint)
    .col--{$breakpoint}
      create-default-column()
      create-columns()
      create-offsets()

  // Function to create the helpers for the column.
  create-column-helpers($breakpoint)
    .col--{$breakpoint}-align-top
      align-self: flex-start
    .col--{$breakpoint}-align-center
      align-self: center
    .col--{$breakpoint}-align-bottom
      align-self: flex-end

    .col--{$breakpoint}-first
      order: -1
    .col--{$breakpoint}-reset
      order: 0
    .col--{$breakpoint}-last
      order: 1
    .col--{$breakpoint}-flex
      display: flex

    .col--{$breakpoint}-justify
      flex-direction: row
      justify-content: space-between

  // Function to create the default column.
  create-default-column()
    &
      flex-grow: 1
      flex-basis: 0
      max-width: 100%
      padding: 1rem .5rem 0 .5rem

  // Function to create the grid.
  create-columns()
    for $number in 1..$columns
      &{'-'}{$number}
        width: (100 / $columns * $number) %
        flex: none


  // Function to create the offsets.
  create-offsets()
    &-offset-0
      margin-left: 0
    for $number in 1..$columns
      &-offset-{$number}
        margin-left: (100 / $columns * $number) %

  for $breakpoint, $width in $breakpoints
    if $width == 0
      make-grid($breakpoint)
    else
      @media (min-width: $width)
        make-grid($breakpoint)
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'col',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
