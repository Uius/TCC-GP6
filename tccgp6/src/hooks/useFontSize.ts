// ...existing code...
import { useEffect, useState } from 'react'

export type FontSizeKey = 'pequeno' | 'medio' | 'grande'

const FONT_MAP: Record<FontSizeKey, number> = {
  pequeno: 14,
  medio: 16,
  grande: 18,
}

export default function useFontSize() {
  const [size, setSize] = useState<FontSizeKey>(() => {
    try {
      const stored = localStorage.getItem('appFontSize') as FontSizeKey | null
      return stored ?? 'medio'
    } catch {
      return 'medio'
    }
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    const px = FONT_MAP[size] ?? FONT_MAP.medio
    // altera apenas o font-size raiz (rem/em passa a obedecer)
    document.documentElement.style.fontSize = `${px}px`

    try {
      localStorage.setItem('appFontSize', size)
    } catch {
      // ignore
    }
  }, [size])

  return { size, setSize }
}
// ...existing code...