<template>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.type">
        <TypesVue :type="column.type" :value="record" />
      </template>
      <!-- <template v-else> {{ record.name }} </template> -->
    </template>
    <template #title>Header</template>
    <template #footer>Footer</template>
  </a-table>
</template>
<script setup>
import TypesVue from "./types.vue";
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    checked: true,
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
    checked: false,
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    type: "checkbox",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    type: "switch",
    disabled: false,
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
</script>

<style>
</style>