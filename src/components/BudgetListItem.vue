<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <i class="budget-icon" :class="item.icon"></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value" :style="{ color: item.color }">{{
        item.value
      }}</span>
      <ElButton type="danger" size="mini" @click="deleteItemList(item.id)"
        >Удалить</ElButton
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteItemList(id) {
      this.$emit('deleteItemList', id);
    },
  },
};
</script>

<style scoped>
.budget-icon {
  margin-right: 7px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 40px;
}
</style>
