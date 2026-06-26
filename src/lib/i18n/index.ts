import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./en"
import zh from "./zh"

export const LANGUAGES = ["en", "zh"] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = "en"
export const LANGUAGE_STORAGE_KEY = "rad-lang"

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  zh: "中文",
}

function getInitialLanguage(): Language {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && (LANGUAGES as readonly string[]).includes(stored)) {
      return stored as Language
    }
  }
  return DEFAULT_LANGUAGE
}

function applyDocumentLang(lng: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng
  }
}

const initialLanguage = getInitialLanguage()

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
})

applyDocumentLang(initialLanguage)

i18n.on("languageChanged", (lng) => {
  applyDocumentLang(lng)
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng)
  }
})

export { i18n }
export default i18n
