<template>
  <div
    class="toggle-button"
    :class="isActive ? 'active' : 'inactive'"
    @click="isActive = !isActive"
  >
    <font-awesome-icon v-if="!isActive" icon="ban" size="4x" />
    <svg-element :name="name" />
  </div>
</template>

<style lang="scss" scoped>
.toggle-button {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  filter: drop-shadow(0 2px 2px rgba(#000, 0.3));

  &:active {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    filter: drop-shadow(0 0px 1px rgba(#000, 0.2));
  }
}
.active {
  border: 10px solid #d33;
  background: #fff;
  color: #333;
}
.inactive {
  background: #ddd;
  border: 10px solid #ddd;
  color: #777;
  .fa-ban {
    position: absolute;
    color: rgba(#338, 0.5);
    left: -2px;
    top: -1px;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgElement from "@/components/svgElement.vue";

@Component({ components: { svgElement } })
export default class ToggleButton extends Vue {
  @Prop({ required: true })
  readonly name!: string;

  getSVG(name: string) {
    return require(`../assets/${name}.svg`);
  }

  isActive: boolean = false;
}
</script>
