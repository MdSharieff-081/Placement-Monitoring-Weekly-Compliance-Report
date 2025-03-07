function doGet() {
  var template = HtmlService.createTemplateFromFile('Index');
  return template.evaluate().setTitle('TRAINING AND PLACEMENT SECTION');
}

function storeTableData(data) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var last_row = sheet.getLastRow();
  var last_column = sheet.getLastColumn();
  var range = sheet.getRange(last_row + 1, 1, data.length, data[0].length);
  range.setValues(data);
}
