<template>
  <v-app id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  private layoutDefault = 'default'

  private get layout (): string {
    return `${this.$route.meta.layout || this.layoutDefault}-layout`
  }
}
</script>
