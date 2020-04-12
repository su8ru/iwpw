<template>
  <div>
    <div
      class="toggle-button"
      :class="isActive ? 'active' : 'inactive'"
      @click="isActive = !isActive"
    >
      <font-awesome-icon
        v-if="isActive"
        :icon="['far', 'circle']"
        size="4x"
        class="fa-fw"
      />
      <font-awesome-icon v-else icon="times" size="4x" class="fa-fw" />
      <svg-element :name="name" class="icon" />
    </div>
    <span
      class="button-name"
      :style="{
        color: isActive ? '#444' : '#777',
        textDecoration: isActive ? 'none' : 'line-through #222'
      }"
    >
      {{ name_ja }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.toggle-button {
  width: 70px;
  height: 70px;
  border-radius: 5px;
  filter: drop-shadow(0 2px 2px rgba(#000, 0.3));

  &:active {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    filter: drop-shadow(0 0px 1px rgba(#000, 0.2));
  }

  .icon {
    filter: drop-shadow(1px 2px 1px rgba(#fff, 0.8));
  }

  .fa-circle,
  .fa-times {
    position: absolute;
    z-index: 10;
    left: -5px;
    top: 3px;
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
  .fa-times {
    color: rgba(#008, 0.5);
  }
}
.button-name {
  font-size: 0.9rem;
  font-weight: 700;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import svgElement from "@/components/svgElement.vue";

@Component({ components: { svgElement } })
export default class ToggleButton extends Vue {
  @Prop({ required: true })
  readonly name!: string;
  @Prop({ required: true })
  readonly name_ja!: string;

  getSVG(name: string) {
    return require(`../assets/${name}.svg`);
  }

  isActive: boolean = false;
}
</script>
