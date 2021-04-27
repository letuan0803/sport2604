import Dexie from "dexie";
import { Vue, Component } from "vue-property-decorator";
interface IIndexDBMixin {
  /**định nghĩa cấu trúc bảng */
  defineDatabaseScheman(): void;

  /**hàm thêm dữ liệu vào bảng */
  addData(): void;

  /**xóa dữ liệu khỏi bảng */
  deleteData(): void;
}
@Component
export default class IndexDBMixin extends Vue implements IIndexDBMixin {
  test = "Hello, hello, hello";
  created() {
    console.log("tuan")
  }

  defineDatabaseScheman(): void {
    // Declare db instance
    const db = new Dexie("MyDatabase");

    // Define Database Schema
    db.version(1).stores({
      friends: "++id, name, age, isCloseFriend",
      notes: "++id, title, date, *items"
    });

    // Interact With Database
    db.transaction("rw", db.friends, db.notes, function*() {
      // Let's add some data to db:
      const friend1Id = yield db.friends.add({
        name: "Camilla",
        age: 25,
        isCloseFriend: 1
      });
      const friend2Id = yield db.friends.add({
        name: "Ban Ki-moon",
        age: 70,
        isCloseFriend: 0
      });

      const noteId = yield db.notes.add({
        title: "Shop tomorrow",
        date: new Date(),
        items: ["milk", "butter"]
      });

      // Let's query the db
      // const closeFriends = yield db.friends
      //   .where("isCloseFriend")
      //   .equals(1)
      //   .toArray();

      // console.log("Close friends:" + closeFriends.map(f => f.name));

      // const toShop = yield db.notes
      //   .where("title")
      //   .startsWithIgnoreCase("shop")
      //   .toArray();

      // console.log("Shopping list: " + toShop.map(note => note.items));
    }).catch(function(err: Error) {
      // Catch any error event or exception and log it:
      console.error(err.stack || err);
    });
  }
  addData(): void {
    throw new Error("Method not implemented.");
  }
  deleteData(): void {
    throw new Error("Method not implemented.");
  }
}
