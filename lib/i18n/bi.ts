import type { Lang } from "@/lib/i18n/dictionary";

export type Bi<T = string> = { bn: T; en: T };

export function pick<T>(lang: Lang, value: Bi<T>): T {
  return value[lang];
}
