import { NextResponse } from 'next/server';

// Google Apps Script Webアプリのエンドポイント
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvg7GeXLGknFjvAYbYIRCCun8H0HSEjVe_G6n2BBV3sc3MnXYZBg70QDl0DzTAGEei/exec';

/**
 * Contact APIルート（バックアップとして使用）
 * 通常はフォームから直接Google Apps Scriptに送信されますが、
 * もしそれが失敗した場合やバックエンドでの追加処理が必要な場合はこのAPIが使用できます。
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Log the form submission
    console.log('Form submission received (API route):', body);
    
    // Google Apps Scriptにデータを送信する
    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    
    try {
      // Google Apps ScriptのWebアプリにPOSTリクエストを送信
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // CORS問題を回避
      });
    } catch (gsError) {
      console.error('Error sending data to Google Script:', gsError);
      // Google Apps Scriptへの送信が失敗しても処理を続行
      // ここでバックアップとしてデータベースに保存したり、管理者にメール通知したりできます
    }
    
    return NextResponse.json({ 
      success: true, 
      message: '送信が完了しました。24時間以内に担当よりご連絡いたします。' 
    });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json(
      { success: false, message: 'エラーが発生しました。再度お試しください。' },
      { status: 500 }
    );
  }
}