<template>
  <div class="sort-btn-wrap">
    <ElButton
      class="sort-btn-item"
      type="success"
      size="mini"
      @click="incomeSort"
      >Доходы</ElButton
    >
    <ElButton
      class="sort-btn-item"
      type="danger"
      size="mini"
      @click="outcomeSort"
      >Расходы</ElButton
    >
    <ElButton class="sort-btn-item" type="primary" size="mini" @click="fullList"
      >Показать все</ElButton
    >
  </div>
</template>

<script>
export default {
  name: 'SortBtn',
  methods: {
    incomeSort() {
      this.$emit('incomeSort');
    },

    outcomeSort() {
      this.$emit('outcomeSort');
    },

    fullList() {
      this.$emit('fullList');
    },
  },
};
</script>

<style scoped>
.sort-btn-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 0 auto;
  margin-bottom: 15px;
  max-width: 45%;
}

.sort-btn-item {
  width: 100px;
}
</style>
