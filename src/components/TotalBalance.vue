<template>
  <div class="total-value">
    Balance: <span :style="{ color: checkTotal }">{{ total }}</span>
  </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    colorAboveZero: '#67C23A',
    colorLessZero: '#F56C6C',
  }),

  computed: {
    checkTotal() {
      return this.total > -1 ? this.colorAboveZero : this.colorLessZero;
    },
  },
};
</script>

<style scoped>
.total-value {
  font-style: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
