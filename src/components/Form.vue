<template>
  <ElCard class="form-card" :header="header">
    <ElForm
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="top-left"
    >
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="Доходы" value="INCOME" />
          <ElOption label="Расходы" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Готово</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'FormList',
  data: () => ({
    header: 'Что нового?',
    formData: {
      type: '',
      comment: '',
      value: '',
    },
    rules: {
      // правила для формы
      type: [
        { required: true, message: 'Please select type', trigger: 'blur' },
      ],
      comment: [
        { required: true, message: 'Please input comment', trigger: 'blur' },
      ],
      value: [
        { required: true, message: 'Please input value', trigger: 'change' },
        {
          type: 'number',
          message: 'Value must be a number',
          trigger: 'change',
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      // $refs нужны для прямого связывания с html атрибутом через айди записаного в ref
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
          // передаем данные наружу
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 50%;
  margin: auto;
  margin-bottom: 25px;
}

.type-select {
  width: 100%;
}
</style>
