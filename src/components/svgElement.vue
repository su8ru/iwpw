<template>
  <component :is="svg" />
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SVGElement extends Vue {
  @Prop({ required: true })
  name!: string;

  get svg() {
    return require(`../assets/${this.name}.svg`);
  }
}
</script>
