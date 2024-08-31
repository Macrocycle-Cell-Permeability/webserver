$(document).ready(function() {
  var table = $('#table').DataTable({
      initComplete: function () {
          // Apply the search
          this.api().columns().every(function () {
              var column = this;
              // Specify the columns to add dropdown filters
              if(column.index() === 2 || column.index() === 3 || column.index() === 7 || column.index() === 8) {
                  var select = $('<select><option value=""></option></select>')
                      .appendTo($(column.header()).append())
                      .on('change', function () {
                          var val = $.fn.dataTable.util.escapeRegex(
                              $(this).val()
                          );
                          column
                              .search(val ? '^'+val+'$' : '', true, false)
                              .draw();
                      });
                  column.data().unique().sort().each(function (d, j) {
                      select.append('<option value="'+d+'">'+d+'</option>')
                  });
              }
          });
      }
  });

  table.columns().every(function () {
      var column = this;
      if(column.index() !== 0 && column.index() !== 4 && column.index() !== 6) {
          column.orderable(false);
      }
  });
});
