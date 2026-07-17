import { describe, expect, it } from "vitest";
import { maskPhone, whatsappCtaLabel } from "./privacy";

describe("maskPhone", () => {
  it("masks middle digits and keeps a country hint + last 3", () => {
    expect(maskPhone("+8801606587403")).toMatch(/^\+880 •••• 403$/);
  });

  it("handles short input safely", () => {
    expect(maskPhone("12")).toBe("••••••");
  });
});

describe("whatsappCtaLabel", () => {
  it("includes username when provided", () => {
    expect(whatsappCtaLabel("iammahmudhasan")).toBe("WhatsApp @iammahmudhasan");
    expect(whatsappCtaLabel("@iammahmudhasan")).toBe("WhatsApp @iammahmudhasan");
  });

  it("falls back without username", () => {
    expect(whatsappCtaLabel()).toBe("Chat on WhatsApp");
  });
});
