import { uid } from "quasar";
import { Run100Modal } from "src/model/record/run100m";
import { EditMode } from "./enumerate";
const baseMock01: Run100Modal = {
  AthletesID: uid(),
  AthletesName: "Lê Thanh Tuấn",
  AthletesNo: "VDV01",
  BX3B: 4,
  BXTC: 3,
  CreatedBy: "lttuan",
  CreatedDate: new Date(),
  EditMode: EditMode.None,
  MeasuringTime: new Date(),
  ModifyBy: "lttuan",
  ModifyDate: new Date(),
  RecordID: uid(),
  RecordNo: "RC01",
  SubjectID: uid(),
  SubjectNo: "MH1",
  SubjectName: "chay 100m",
  TDC30m: 4,
  XPC30m: 5,
  XPC60m: 6
};
const baseMock02 = Object.assign(baseMock01, {
  AthletesID: uid(),
  AthletesName: "Lê Thị Hằng",
  AthletesNo: "VDV02",
});
const baseMock03 = Object.assign(baseMock01, {
  AthletesID: uid(),
  AthletesName: "Lê Thanh Tâm",
  AthletesNo: "VDV03",
})
export const mockData: Run100Modal[] = [
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC01",
  }),  
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC02",
  }), 
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC03",
  }), 
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC04",
  }), 
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC05",
  }), 
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC06",
  }),
  Object.assign(baseMock01, {
    RecordID: uid(),
    RecordNo: "RC07",
  }),  
  Object.assign(baseMock02, {
    RecordID: uid(),
    RecordNo: "RC08",
  }), 
  Object.assign(baseMock02, {
    RecordID: uid(),
    RecordNo: "RC09",
  }), 
  Object.assign(baseMock02, {
    RecordID: uid(),
    RecordNo: "RC010",
  }), 
  Object.assign(baseMock02, {
    RecordID: uid(),
    RecordNo: "RC011",
  }), 
  Object.assign(baseMock02, {
    RecordID: uid(),
    RecordNo: "RC012",
  }),  
  Object.assign(baseMock03, {
    RecordID: uid(),
    RecordNo: "RC08",
  }), 
  Object.assign(baseMock03, {
    RecordID: uid(),
    RecordNo: "RC09",
  }), 
  Object.assign(baseMock03, {
    RecordID: uid(),
    RecordNo: "RC010",
  }), 
  Object.assign(baseMock03, {
    RecordID: uid(),
    RecordNo: "RC011",
  }), 
  Object.assign(baseMock03, {
    RecordID: uid(),
    RecordNo: "RC012",
  }),
];
