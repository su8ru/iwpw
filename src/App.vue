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
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: usage }">使い方</router-link>
          </li>
          <li>
            <router-link :to="{ name: policy }">
              プライバシーポリシー
            </router-link>
          </li>
        </ul>
      </nav>
      <small>
        &copy; su8ru, kichi2004, takeno-hito 2020
      </small>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: 70px calc(100% - 120px) 50px;
  grid-template-columns: 1fr;
  height: var(--vh);
  text-align: center;
  background: #fff;

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

    nav {
      ul {
        margin: 0;
        margin-top: 2px;
        padding: 0;
        li {
          list-style-type: none;
          display: inline;
          &:not(:last-of-type)::after {
            content: " ･ ";
          }
          a {
            color: #fff;
            text-decoration: underline;
          }
          a:visited {
            color: #eee;
            text-decoration: underline;
          }
        }
      }
    }
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
