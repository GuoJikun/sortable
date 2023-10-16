<script setup>
const list = [
  {
    id: 1,
    name: "item 1",
  },
  {
    id: 2,
    name: "item 2",
  },
  {
    id: 3,
    name: "item 3",
  },
  {
    id: 4,
    name: "item 4",
  },
  {
    id: 5,
    name: "item 5",
  },
];
</script>

<template>
  <div>
    <h1>ivy-sortable 示例</h1>
    <p>ivy-sortable 是对 sortable.js 的封装，用于实现拖拽排序。</p>

    <div>
      <ivy-sortable v-model="list">
        <template #default="{ item, index }">
          <div>{{ item.name }}, index：{{ index }}</div>
        </template>
      </ivy-sortable>
    </div>
  </div>
</template>
