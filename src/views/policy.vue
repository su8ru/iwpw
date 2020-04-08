<template>
  <article id="policy">
    <breadcrumb :text="page_title" />
    <h1>{{ page_title }}</h1>
    <p>
      I Will Pay With （以下当サイトとする）
      では、以下のポリシーのもとでサービスを提供しています。
    </p>
    <section>
      <h2>JavaScriptの実行について</h2>
      <p>
        当サイトでは、サービス提供のため、JavaScriptを使用しています。
      </p>
      <p>
        閲覧にあたり、閲覧者のデバイスを利用してサービス提供を目的とした処理を行います。
        JavaScriptの実行はブラウザの機能により停止できますが、その場合当サイトを正常に利用できなくなる可能性がございます。その為、JavaScriptの実行を停止することは推奨いたしません。
      </p>
    </section>
    <section>
      <h2>Google Analytics の使用について</h2>
      <p>
        当サイトでは、アクセス解析のため、Google Analytics を使用しています。
      </p>
      <p>
        Google Analytics
        によって情報が収集され使用される詳細は、Googleによる説明ページでご確認ください。
      </p>
      <ul>
        <li>
          <b-link
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
          >
            Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
          </b-link>
        </li>
        <li>
          <b-link
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >
            Google Analytics 利用規約
          </b-link>
        </li>
        <li>
          <b-link href="https://policies.google.com/privacy?hl=ja">
            Google Privacy Policy
          </b-link>
        </li>
      </ul>
    </section>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class Policy extends Vue {
  readonly page_title = "プライバシーポリシー";
}
</script>
