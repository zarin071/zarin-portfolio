const AGENT_URL = process.env.NEXT_PUBLIC_ANALYTICS_URL
const PUBLIC_KEY = process.env.NEXT_PUBLIC_ANALYTICS_KEY

function getUserId(): string {
  if (typeof window === "undefined") return "server"
  try {
    let id = localStorage.getItem("_zp_uid")
    if (!id) {
      id = `anon_${Math.random().toString(36).slice(2)}_${Date.now()}`
      localStorage.setItem("_zp_uid", id)
    }
    return id
  } catch {
    return "anon_unknown"
  }
}

export function track(name: string, properties: Record<string, unknown> = {}) {
  if (!AGENT_URL || !PUBLIC_KEY || typeof window === "undefined") return

  const payload = JSON.stringify({
    events: [
      {
        name,
        userId: getUserId(),
        timestamp: new Date().toISOString(),
        properties: {
          ...properties,
          page: window.location.pathname,
          referrer: document.referrer || undefined,
          viewport_width: window.innerWidth,
          theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
        },
      },
    ],
  })

  fetch(`${AGENT_URL}/v1/track`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PUBLIC_KEY}`,
      "Content-Type": "application/json",
    },
    body: payload,
    keepalive: true,
  }).catch(() => {})
}
