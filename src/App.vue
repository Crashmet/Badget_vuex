<template>
  <div id="app">
    <FormList @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <SortBtn
      @incomeSort="incomeSort"
      @outcomeSort="outcomeSort"
      @fullList="fullList"
    />
    <BudgetList :list="sortList" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue';
import TotalBalance from './components/TotalBalance.vue';
import FormList from './components/Form.vue';
import SortBtn from './components/SortBtn.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    FormList,
    TotalBalance,
    BudgetList,
    SortBtn,
  },
  data: () => ({
    iconIncome: 'el-icon-top',
    colorIncome: '#67C23A',
    iconOutcome: 'el-icon-bottom',
    colorOutcome: '#F56C6C',

    mainList: {},
    sortList: {},
  }),
  created: function () {
    this.fullList();
  },

  computed: {
    totalBalance() {
      return Object.values(this.mainList).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    ...mapGetters('finance', ['financeList']),
    // с помощью оператора спред сразу выводим данные из usersList

    ...mapActions('finance', ['addNewFinanceItem']),
    // с помощью оператора спред сразу выводим данные из addNewUser

    fullList() {
      this.mainList = this.financeList();
      this.sortList = this.mainList;
    },

    incomeSort() {
      this.sortList = Object.values(this.mainList).reduce((acc, item) => {
        if (item.type === 'INCOME') {
          acc[item.id] = item;
        }
        return acc;
      }, {});
    },

    outcomeSort() {
      this.sortList = Object.values(this.mainList).reduce((acc, item) => {
        if (item.type === 'OUTCOME') {
          acc[item.id] = item;
        }
        return acc;
      }, {});
    },

    onDeleteItem(id) {
      const deleteQuestion = confirm('Хочешь удалить?');
      if (!deleteQuestion) {
        return;
      }

      this.$delete(this.mainList, id);
      this.fullList();
      //этот метод принимает обьект из которого нужно удалить, вторым свойство которое нужно удалить, и вызовет перерендеринг
    },
    onFormSubmit(data) {
      let { type, comment, value } = data;
      let icon = this.iconIncome;
      let color = this.colorIncome;

      if (type === 'OUTCOME') {
        icon = this.iconOutcome;
        color = this.colorOutcome;
        value = -value;
      }

      const newObj = {
        type,
        icon,
        color,
        comment,
        value,
        id: Object.keys(this.mainList).length + 1,
      };

      this.addNewFinanceItem(newObj);
      // передаем в  Actions данные

      this.fullList();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
