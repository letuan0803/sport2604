<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click.prevent="navigation"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import router from "../../router/index"
@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, default: "" }) readonly caption!: string;
  @Prop({ type: String, default: "#" }) readonly componentName!: string;
  @Prop({ type: String, default: ""}) readonly icon!: string;

  navigation(): void {
    router.go(-1);
  }
}
</script>
