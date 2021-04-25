<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
      :pagination="pagination"
    />

    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { mockData } from '../common/mockData';
@Component()
export default class RecordManagement extends Vue {
  selected = [];
  columns = [
    {
      name: 'desc',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: (row) => row.name,
      format: (val) => `${val}`,
      sortable: true,
    },
    {
      name: 'calories',
      align: 'center',
      label: 'Calories',
      field: 'calories',
      sortable: true,
    },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    {
      name: 'calcium',
      label: 'Calcium (%)',
      field: 'calcium',
      sortable: true,
      sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    },
    {
      name: 'iron',
      label: 'Iron (%)',
      field: 'iron',
      sortable: true,
      sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    },
  ];
  data = mockData;
  pagination = {
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    // rowsNumber: xx if getting data from a server
  };

  getSelectedString() {
    return this.selected.length === 0
      ? ''
      : `${this.selected.length} record${
          this.selected.length > 1 ? 's' : ''
        } selected of ${this.data.length}`;
  }
}
</script>