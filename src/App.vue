<template>
  <div id="app">
    <header>
      <h1>
        <font-awesome-icon icon="comment-slash" class="fa-fw" />
        I Will Pay With
      </h1>
      <h2>
        #StopCovid19
      </h2>
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
  grid-template-rows: 70px calc(100% - 100px) 30px;
  grid-template-columns: 1fr;
  height: var(--vh);
  text-align: center;
  background: #fefefe;

  header {
    h1 {
      display: block;
      height: 45px;
      font-size: 2.2rem;
      font-weight: 900;
      margin: 0;
      color: #111;
      background: #efefef;
    }
    h2 {
      display: block;
      height: 25px;
      font-size: 1.2rem;
      font-style: italic;
      font-weight: 700;
      margin: 0;
      color: #fff;
      background: #d24040;
    }
  }
  footer {
    background: #555;
    color: #fff;
  }
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
