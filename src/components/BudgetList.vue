<template>
  <div class="budget-list-wrap">
    <El-card :header="header">
      <BudgetListItem v-if="isEmty" :list="list" @deleteItemList="deleteItem" />
      <ElAlert v-else type="info" :title="emtyTitle" :closable="false" />
    </El-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Список бюджета',
    emtyTitle: 'Список пуст',
  }),
  computed: {
    isEmty() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 50%;
  margin: auto;
}
</style>
