// Cloudflare bindings helper
export type CloudflareEnv = {
  DB: D1Database;
  R2: R2Bucket;
};

export function getRequestContext() {
  // In production, this comes from Cloudflare Pages context
  return null;
}
