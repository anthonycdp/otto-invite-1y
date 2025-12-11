var DATA_SHEET_NAME = 'Respostas'; // altere se o nome da planilha de dados for outro
var SUMMARY_SHEET_NAME = 'Resumo';

function getDataSheet(ss) {
  var byName = ss.getSheetByName(DATA_SHEET_NAME);
  if (byName) return byName;

  var sheets = ss.getSheets();
  if (sheets.length === 0) {
    throw new Error('Nenhuma planilha encontrada no arquivo');
  }

  // Pega a primeira que não seja o resumo
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName() !== SUMMARY_SHEET_NAME) {
      return sheets[i];
    }
  }

  // fallback
  return sheets[0];
}

function sumColumnValues(sheet, colIndex) {
  var lastRow = sheet.getLastRow();
  if (lastRow === 0) return 0;

  var values = sheet.getRange(1, colIndex, lastRow, 1).getValues();
  var total = 0;

  for (var i = 0; i < values.length; i++) {
    var n = Number(values[i][0]);
    if (!isNaN(n)) {
      total += n;
    }
  }

  return total;
}

function updateSummary(ss, dataSheet) {
  var summary = ss.getSheetByName(SUMMARY_SHEET_NAME) || ss.insertSheet(SUMMARY_SHEET_NAME);

  var totalAdults = sumColumnValues(dataSheet, 3);   // coluna C (adultos)
  var totalChildren = sumColumnValues(dataSheet, 4); // coluna D (crianças)

  var rows = [
    ['Totais', ''],
    ['Adultos', totalAdults],
    ['Crianças', totalChildren],
    ['', ''],
    ['Última atualização', new Date()]
  ];

  summary.clearContents();
  summary.getRange(1, 1, rows.length, 2).setValues(rows);
  summary.autoResizeColumns(1, 2);
}

function doPost(e) {
  try {
    Logger.log('=== doPost chamado ===');
    if (!e) {
      throw new Error('Sem dados recebidos');
    }

    Logger.log('payload bruto: ' + JSON.stringify(e));

    var data = {};

    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
        Logger.log('Dados lidos como JSON');
      } catch (jsonError) {
        Logger.log('JSON invalido, tentando parametros. Erro: ' + jsonError);
      }
    }

    if ((!data || Object.keys(data).length === 0) && e.parameter) {
      data = e.parameter;
      Logger.log('Dados lidos como parametros de formulario');
    }

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Nenhum dado recebido no corpo da requisicao');
    }

    var adults = Number(data.adults || 0);
    var children = Number(data.children || 0);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var dataSheet = getDataSheet(ss);
    Logger.log('Planilha de dados: ' + dataSheet.getName());

    dataSheet.appendRow([
      new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      data.name || '',
      adults,
      children,
      data.message || ''
    ]);

    Logger.log('Linha adicionada com sucesso!');

    // Atualiza resumo (totais)
    updateSummary(ss, dataSheet);
    Logger.log('Resumo atualizado');

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Confirmado!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('ERRO: ' + error.toString());
    Logger.log('Stack: ' + error.stack);

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  if (e && e.parameter && e.parameter.refresh === '1') {
    var dataSheet = getDataSheet(ss);
    updateSummary(ss, dataSheet);
    return ContentService.createTextOutput(JSON.stringify({
      status: 'OK',
      message: 'Resumo recalculado'
    })).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({
    status: 'OK',
    message: 'Script funcionando!'
  })).setMimeType(ContentService.MimeType.JSON);
}
