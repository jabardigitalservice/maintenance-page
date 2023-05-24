/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TARGET: string
  readonly VITE_EMERGENCY_CONTACT: string
  readonly VITE_START_DATE: string
  readonly VITE_END_DATE: string
  readonly VITE_EMERGENCY_CONTACT_PLATFORM: string
  readonly VITE_EMERGENCY_CONTACT_CLICK_TO: string
  readonly VITE_FROM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}