<template>
  <component :is="svg" />
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { payType } from "@/types/pays";

@Component
export default class PayTypeLogo extends Vue {
  @Prop({ required: true })
  type!: payType;

  get svg() {
    return require(`../assets/${this.type}.svg`);
  }
}
</script>
