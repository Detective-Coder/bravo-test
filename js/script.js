

const dataTable = $('#realtime').DataTable({
  data: dataSet,
  columns: [
    { title: 'Title' },
    { title: 'Year' },
    { title: 'Director' },
    { title: 'IMDB Rating' },
    { title: 'Rating' },
    { title: 'Genre' }
  ]
});

function buildForm() {
  return [
    $('#title').val(),
    $('#year').val(),
    $('#director').val(),
    $('#imdbRating').val(),
    $('#rating')
      .val()
      .replace(new RegExp('-', 'g'), '/'),
    `$${$('#genre').val()}`
  ];
}

function addRow(dataTable) {
  const formData = this.buildForm();
  const addedRow = dataTable.row.add(formData).draw();
  addedRow.show().draw(false);
  const addedRowNode = addedRow.node();
  console.log(addedRowNode);
  $(addedRowNode).addClass('highlight');
}

function selectRow(dataTable) {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    dataTable.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
}

$('#add').on('click', this.addRow.bind(this, dataTable));

function selectRow(dataTable) {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    dataTable.$('tr.selected').removeClass('selected');
    $(this).addClass('selected');
  }
}

function removeRow(dataTable) {
  dataTable.row('.selected').remove().draw( false );
}

const self = this;
$('#realtime tbody').on('click', 'tr', function(){
      self.selectRow.bind(this, dataTable)();
    });
$('#remove').on('click', this.removeRow.bind(this, dataTable));

