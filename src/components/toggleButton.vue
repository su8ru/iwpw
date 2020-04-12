<template>
  <div
    class="toggle-button"
    :class="isActive ? 'active' : 'inactive'"
    @click="isActive = !isActive"
  >
    <font-awesome-icon v-if="isActive" :icon="['far', 'circle']" size="4x" />
    <font-awesome-icon v-else icon="ban" size="4x" />
    <svg-element :name="name" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.toggle-button {
  width: 70px;
  height: 70px;
  border-radius: 5px;
  filter: drop-shadow(0 2px 2px rgba(#000, 0.3));
  border: 3px solid #ddd;

  &:active {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    filter: drop-shadow(0 0px 1px rgba(#000, 0.2));
  }

  .icon {
    filter: drop-shadow(1px 2px 1px rgba(#fff, 0.8));
  }

  .fa-circle,
  .fa-ban {
    position: absolute;
    z-index: 10;
  }
}
.active {
  background: #fafafa;
  color: #444;
  .fa-circle {
    color: rgba(#d33, 0.8);
  }
}
.inactive {
  background: #ddd;
  color: #777;
  .fa-ban {
    color: rgba(#008, 0.5);
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
