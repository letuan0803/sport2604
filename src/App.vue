<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import IndexDBMixin from './mixins/indexdb';


@Component
export default class App extends Mixins(IndexDBMixin) {
  created() {
    this.defineDatabaseScheman();
  }
}
</script>
