import Dexie, { BulkError } from "dexie";
import { Run100Modal } from "src/model/record/run100m";
import { mockData } from "src/common/mockData"

export class IndexDB extends Dexie {
  // friends: Dexie.Table<IFriends, number>; // number = type of the primkey
  // notes: Dexie.Table<INote, number>; // number = type of the primkey
  run100m: Dexie.Table<Run100Modal, number>;
  constructor() {
    super("MyDatabase");
    this.version(1).stores({
      run100m: "RecordID, XPC30m, XPC60m, TDC30m, BXTC, BX3B"
    });
    this.run100m = this.table("run100m");
    this.run100m.mapToClass(Run100Modal);
  }

  async genMockData(): Promise<void> {
    await this.run100m.bulkAdd(mockData).then(function () {
      console.log("added 100 records")
    }).catch(Dexie.BulkError, function (e: BulkError) {
      console.log("e", e)
      console.error(e.message);
    });
  }
}

export const db = new IndexDB();