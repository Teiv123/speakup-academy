// Lọc ký tự vô hình (>255 / zero-width / BOM) khỏi URL & API key trước khi đưa vào
// Supabase client — tránh lỗi fetch "String contains non ISO-8859-1 code point"
// (header apikey / Authorization bắt buộc là ByteString 0-255).
export function cleanEnv(v: string | undefined | null): string {
  return (v ?? "").replace(/[^\x21-\x7E]/g, "");
}
