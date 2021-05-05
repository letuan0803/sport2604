<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import  {db} from "src/common/indexdb"

@Component
export default class App extends Vue {
  async created(): Promise<void> {
    await db.genMockData();
  }
}
</script>
