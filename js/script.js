
// //  create our buildForm() method
// buildForm() {
//   return [
//     $('#name').val(),
//     $('#position').val(),
//     $('#office').val(),
//     $('#extn').val(),
//     $('#startDate')
//       .val()
//       .replace(new RegExp('-', 'g'), '/'),
//     `$${$('#salary').val()}`
//   ];
// }

// // We create a method called addRow() to append whatever data buildForm() returns
// addRow(dataTable) {
//   const formData = this.buildForm();
//   const addedRow = dataTable.row.add(formData).draw();
//   addedRow.show().draw(false);
//   const addedRowNode = addedRow.node();
//   console.log(addedRowNode);
//   $(addedRowNode).addClass('highlight');
// }

// // We then take our addRow() method which we built and bind it to a button using jQuery’s .click() method
// $('#add').on('click', this.addRow.bind(this, dataTable));


// // create a method called selectRow() , its function is to select a row in our table
// selectRow(dataTable) {
//   if ($(this).hasClass('selected')) {
//     $(this).removeClass('selected');
//   } else {
//     dataTable.$('tr.selected').removeClass('selected');
//     $(this).addClass('selected');
//   }
// }

// // create a method called removeRow() , its function is to remove a row from our table
// removeRow(dataTable) {
//   dataTable.row('.selected').remove().draw( false );
// }

// // bind selectRow() and removeRow() to their respective event triggers using jQuery’s .click() method
// const self = this;
// $('#realtime tbody').on('click', 'tr', function(){
//       self.selectRow.bind(this, dataTable)();
//     });
// $('#remove').on('click', this.removeRow.bind(this, dataTable));

// const dataTable = $('#realtime').DataTable({
//   data: dataSet,
//   columns: [
//     { title: 'Name' },
//     { title: 'Position' },
//     { title: 'Office' },
//     { title: 'Extn.' },
//     { title: 'Start date' },
//     { title: 'Salary' }
//   ]
// });


$(document).ready( function () {
  $('#table_id').DataTable();
} );