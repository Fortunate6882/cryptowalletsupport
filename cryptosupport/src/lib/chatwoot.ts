declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: {
        websiteToken: string
        baseUrl: string
      }) => void
      toggle?: (state?: string) => void
      toggleBubbleVisibility?: (visibility: string) => void
    }
    $chatwoot?: {
      toggle: (state?: string) => void
      setUser: (identifier: string, user: object) => void
    }
  }
}

export function openChatwoot() {
  if (window.$chatwoot) {
    window.$chatwoot.toggle('open')
  }
}

