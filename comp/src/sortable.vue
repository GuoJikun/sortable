<script setup>
import { onMounted, onUnmounted, shallowRef, ref } from "vue";
import Sortable from "sortablejs";
import conf from "./config.js";

defineOptions({
  name: "ivy-sortable",
});

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  modelValue: {
    type: Array,
    default: () => [],
    required: true,
  },
  itemKey: String,
  options: {
    type: Object,
    default: () => ({
      ...conf,
    }),
  },
});

const instance = shallowRef(null);

const el = ref(null);

onMounted(() => {
  instance.value = Sortable.create(el.value, props.options);
});

onUnmounted(() => {
  instance.value.destroy();
});
</script>

<template>
  <component :is="props.tag" class="ivy-sortable" ref="el">
    <template
      v-for="(item, index) in props.modelValue"
      :key="props.itemKey ? item[props.itemKey] : index"
    >
      <slot :item="item" :index="index"></slot>
    </template>
  </component>
</template>

<style lang="scss">
.ivy-sortable {
  & .is-choose {
    background-color: red;
  }
}
</style>
