import Vue from 'vue';
// Ипортируем вью для реактиных изменений в данных

const financeStore = {
  namespaced: true,
  // пространство имен
  state: {
    // набор данных для переиспользования
    list: {
      1: {
        type: 'INCOME',
        icon: 'el-icon-top',
        color: '#67C23A',
        value: 100,
        comment: 'Some income comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        icon: 'el-icon-bottom',
        color: '#F56C6C',
        value: -50,
        comment: 'Some outcome comment',
        id: 2,
      },
    },
  },
  getters: {
    // возвращает список всех пользователей в виде массива
    financeList: ({ list }) => list,
    // { list } = state.list
  },
  mutations: {
    // изменяет state
    ADD_FINANCE(state, financeItem) {
      // state.list[user.id] = user;
      Vue.set(state.list, financeItem.id, financeItem);
      // перезаписываем (реактивно) в state
    },
  },
  actions: {
    // принимаем данные из компонента App
    // в context(методы actions), есть методы и мы их сразу деструктурируем чтоб не писать context.commit
    addNewFinanceItem({ commit }, financeItem) {
      const newUser = { ...financeItem, id: financeItem.id };
      commit('ADD_FINANCE', newUser);
      // commit() - фунция которая передает в mutations данные, для их изменения в state
    },
  },
};

export default financeStore;
