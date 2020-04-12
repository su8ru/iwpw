<template>
  <div id="home">
    <div class="box" id="pay">
      <carousel
        :per-page="1"
        :pagination-enabled="true"
        :navigation-enabled="false"
        class="pay-carousel"
      >
        <slide v-for="pay in pays.data" :key="pay.name">
          <div class="pay-logo" v-html="pay.logo" />
          <a :href="pay.link" class="pay-type-logo">
            <pay-type-logo :type="pay.type" />
          </a>
        </slide>
      </carousel>
    </div>
    <div>
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
  </div>
</template>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-rows: calc(100% - 190px) 190px;
  padding-bottom: 10px;
  height: 100%;
  .box {
    .toggle-buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    margin-bottom: 10px;
  }
  #bag,
  #cutlery {
    display: flex;
    align-items: center;
    width: 100vw;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import toggleButton from "@/components/toggleButton.vue";
import { Carousel, Slide } from "vue-carousel";
import { pays, payType } from "@/types/pays";
import payTypeLogo from "@/components/payTypeLogo.vue";

@Component({
  components: {
    toggleButton,
    Carousel,
    Slide,
    payTypeLogo
  }
})
export default class Home extends Vue {
  readonly pays: pays = require("@/assets/pays.json");
  readonly barcode = require("../assets/barcode.svg");

  isBarcode(type: payType) {
    return type === payType.barcode;
  }
  isFelica(type: payType) {
    return type === payType.felica;
  }
}
</script>
