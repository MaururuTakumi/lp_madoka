/**
 * Google Apps Script for handling form submissions and saving to a Google Sheet
 * このコードをGoogle Apps Scriptのエディタにコピーしてください
 */

// スプレッドシートIDを設定してください
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const SHEET_NAME = 'フォーム送信データ';

/**
 * GET リクエストを処理 - テスト用
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ result: "success", message: "The script is running correctly" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * POST リクエストの処理
 */
function doPost(e) {
  try {
    // データを取得
    const data = e.parameter;
    
    // 現在の日時を取得
    const timestamp = new Date().toLocaleString('ja-JP');
    
    // スプレッドシートを開く
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // シートが存在しない場合は作成
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // ヘッダー行を設定
      sheet.appendRow([
        'タイムスタンプ',
        '会社名',
        'お名前',
        'メールアドレス',
        '電話番号',
        'お問い合わせ内容'
      ]);
    }
    
    // データを保存
    sheet.appendRow([
      timestamp,
      data.company || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    // 成功レスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // エラーレスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "error", 
      error: error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * スプレッドシートの行を初期化（必要な場合に使用）
 */
function clearSheetData() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (sheet) {
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.deleteRows(2, lastRow - 1);
    }
  }
} 