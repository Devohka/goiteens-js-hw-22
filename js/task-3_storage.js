// const storage = new Storage([
//     'Нанітоіди',
//     'Пролонгер',
//     'Залізні жупи',
//     'Антигравітатор',
//     ]);
//     const items = storage.getItems();
//     console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
//     storage.addItem('Дроїд');
//     console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//     storage.removeItem('Пролонгер');
//     console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// const Storage = function(item){
//     this.items = items;
//     {    getItems() {
//             return this.items;
//         }
    
//         addItem(item) {
//             this.items.push(item);
//             return this.items;
//         }
    
//         removeItem(item) {
//             const index = this.items.indexOf(item);
//             if (index !== -1) {
//                 this.items.splice(index, 1);
//             }
//         }};
//     }
    
//     const items = [
//         'Нанітоіди',
//         'Залізні жупи',
//         'Дроїд',
//     ];
    
//     const newStorage = new Storage(items);
//     newStorage.addItem("Lego castle");
//     newStorage.removeItem("Пролонгер");
//     newStorage.getItems();
//     console.log(newStorage);