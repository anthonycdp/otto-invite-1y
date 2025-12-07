function doPost(e) {
  try {
    Logger.log('=== doPost chamado ===');

    if (!e) {
      Logger.log('ERRO: Parametro e nao encontrado');
      throw new Error('Sem dados recebidos');
    }

    Logger.log('e.parameter: ' + JSON.stringify(e.parameter));
    Logger.log('e.postData: ' + JSON.stringify(e.postData));

    var data;

    // Tentar obter dados de postData.contents (JSON)
    if (e.postData && e.postData.contents) {
      Logger.log('Recebido como postData.contents');
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        Logger.log('Nao e JSON, tentando como form data');
        data = e.parameter;
      }
    }
    // Fallback para parametros (FormData)
    else if (e.parameter) {
      Logger.log('Recebido como parametros de formulario');
      data = e.parameter;
    } else {
      throw new Error('Nenhum dado recebido');
    }

    Logger.log('Dados finais: ' + JSON.stringify(data));

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    Logger.log('Planilha: ' + sheet.getName());

    sheet.appendRow([
      new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      data.name || '',
      data.adults || 0,
      data.children || 0,
      data.message || ''
    ]);

    Logger.log('Linha adicionada com sucesso!');

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Confirmado!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('ERRO: ' + error.toString());
    Logger.log('Stack: ' + error.stack);

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Funcao para testar se o script esta acessivel
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'Script funcionando!' }))
    .setMimeType(ContentService.MimeType.JSON);
}