<template>
  <div id="home">
    <div class="box" id="pay"></div>
    <div class="box" id="bag">
      <div class="toggle-buttons">
        <toggle-button name="bag" />
        <toggle-button name="receipt" />
      </div>
    </div>
    <div class="box" id="cutlery">
      <div class="toggle-buttons">
        <toggle-button name="chopsticks" />
        <toggle-button name="fork" />
        <toggle-button name="knife" />
        <toggle-button name="spoon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  .box {
    width: 100%;
    .toggle-buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  #pay {
    height: 50%;
  }
  #bag,
  #cutlery {
    height: 25%;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import toggleButton from "@/components/toggleButton.vue";

@Component({ components: { toggleButton } })
export default class Home extends Vue {}
</script>
