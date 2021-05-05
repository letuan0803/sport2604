import { uid } from "quasar";
import { Run100Modal } from "src/model/record/run100m";
import { EditMode } from "./enumerate";
const maxRecord = 40;
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

const baseMock02 = Object.assign({}, baseMock01, {
  AthletesID: uid(),
  AthletesName: "Lê Thanh Tú",
  AthletesNo: "VDV02",
});

const baseMock03 = Object.assign({}, baseMock01, {
  AthletesID: uid(),
  AthletesName: "Lê Thanh Tâm",
  AthletesNo: "VDV03",
})

const genMockData = function (record = 1): Array<Run100Modal> {
  if (!record) record = 1;

  const listMockDatas: Array<Run100Modal> = [];

  for (let index = 0; index < record; index++) {
    let element: Run100Modal = baseMock01;

    const randomPerson = Math.floor(Math.random() * 3) + 1;

    switch (randomPerson) {
      case 1:
        element = baseMock01;
        break;

      case 2:
        element = baseMock02;
        break;

      case 3:
        element = baseMock03;
        break;

      default:
        element = baseMock01;
        break;
    }

    element = Object.assign({}, element,
      { RecordNo: "RC0" + String(index), },
      {
        BX3B: Math.floor(Math.random() * maxRecord),
        BXTC: Math.floor(Math.random() * maxRecord),
        TDC30m: Math.floor(Math.random() * maxRecord),
        XPC30m: Math.floor(Math.random() * maxRecord),
        XPC60m: Math.floor(Math.random() * maxRecord),
        RecordID: uid(),
      })

    listMockDatas.push(element);
  }
  return listMockDatas;
}

export const mockData: Run100Modal[] = genMockData(100);
