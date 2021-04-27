<template>
  <div class="q-pa-md">
    <q-table
      title="Bảng thành tích luyện tập"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
      :pagination="pagination"
    >
    </q-table>
    <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { mockData } from "../common/mockData";
@Component()
export default class RecordManagement extends Vue {
  selected = [];
  columns = [
    {
      name: "AthletesName",
      label: "Vận động viên",
      align: "left",
      field: "AthletesName",
      sortable: true,
    },
    {
      name: "birth",
      label: "Năm sinh",
      align: "center",
      field: "AthletesName",
      sortable: true,
    },
    {
      name: "unit",
      label: "Đơn vị",
      align: "center",
      field: "AthletesName",
      sortable: true,
    },
    { name: "XPC30m", label: "30m XPC (s)", align: "center", field: "XPC30m" },
    { name: "XPC60m", label: "60m XPC (s)", align: "center", field: "XPC60m" },
    { name: "TDC30m", label: "30m TDC (s)", align: "center", field: "TDC30m" },
    {
      name: "BXTC",
      label: "Bật xa tại chỗ (m)",
      align: "center",
      field: "BXTC",
    },
    { name: "BX3B", label: "Bật xa 3 m (m)", align: "center", field: "BX3B" },
    {
      name: "MeasuringTime",
      label: "Thời điểm ghi chép",
      align: "center",
      field: "MeasuringTime",
    },
  ];
  data = mockData;
  pagination = {
    sortBy: "desc",
    descending: false,
    page: 1,
    rowsPerPage: 10,
    // rowsNumber: xx if getting data from a server
  };

  getSelectedString() {
    return this.selected.length === 0
      ? ""
      : `${this.selected.length} record${
          this.selected.length > 1 ? "s" : ""
        } selected of ${this.data.length}`;
  }
}
</script>