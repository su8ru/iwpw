<template>
  <div id="app">
    <header>
      <h1>I Will Pay With ...</h1>
    </header>
    <router-view></router-view>
    <footer>
      <small>
        &copy; su8ru, kichi2004, takeno-hito 2020
      </small>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: 2.5rem 1fr 30px;
  grid-template-columns: 1fr;
  height: var(--vh);
  text-align: center;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  height: number = 0;

  resize() {
    this.height = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${this.height}px`);
  }

  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
}
</script>
