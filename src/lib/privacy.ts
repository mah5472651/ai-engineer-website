/**
 * Contact display helpers — keep full values for hrefs, mask in UI when needed.
 */

/** Mask middle digits of a phone while keeping country code + last 2–3 digits. */
export function maskPhone(phone: string): string {
  const cleaned = phone.trim();
  const digits = cleaned.replace(/\D/g, "");
  if (digits.length < 6) return "••••••";

  const last = digits.slice(-3);
  // Keep a short country-code hint when present (+880 style)
  const hasPlus = cleaned.startsWith("+");
  const ccLen = digits.startsWith("880") ? 3 : digits.startsWith("1") ? 1 : 2;
  const cc = digits.slice(0, Math.min(ccLen, digits.length - 3));
  return `${hasPlus ? "+" : ""}${cc} •••• ${last}`;
}

/** Short label for WhatsApp CTA without exposing the number. */
export function whatsappCtaLabel(username?: string): string {
  if (username?.trim()) return `WhatsApp @${username.replace(/^@/, "")}`;
  return "Chat on WhatsApp";
}
