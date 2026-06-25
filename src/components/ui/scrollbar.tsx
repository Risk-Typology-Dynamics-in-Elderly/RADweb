import { useRef, useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

const THUMB_MIN_HEIGHT = 32
const AUTO_HIDE_DELAY = 1200
const TRACK_WIDTH = 8
const THUMB_WIDTH = 5

interface ScrollbarProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  className?: string
}

export function Scrollbar({ containerRef, className }: ScrollbarProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [thumbHeight, setThumbHeight] = useState(0)
  const [thumbTop, setThumbTop] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dragging, setDragging] = useState(false)

  const hideTimer = useRef<ReturnType<typeof setTimeout>>(null)

  const showScrollbar = useCallback(() => {
    setVisible(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (!dragging) setVisible(false)
    }, AUTO_HIDE_DELAY)
  }, [dragging])

  const syncThumb = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    if (scrollHeight <= clientHeight) {
      setThumbHeight(0)
      return
    }
    const ratio = clientHeight / scrollHeight
    const h = Math.max(ratio * clientHeight, THUMB_MIN_HEIGHT)
    const maxTop = clientHeight - h
    const pos = scrollHeight > clientHeight
      ? (scrollTop / (scrollHeight - clientHeight)) * maxTop
      : 0
    setThumbHeight(h)
    setThumbTop(pos)
  }, [containerRef])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    syncThumb()

    const onScroll = () => {
      syncThumb()
      showScrollbar()
    }

    el.addEventListener("scroll", onScroll, { passive: true })

    const ro = new ResizeObserver(syncThumb)
    ro.observe(el)

    return () => {
      el.removeEventListener("scroll", onScroll)
      ro.disconnect()
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [containerRef, syncThumb, showScrollbar])

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    const track = trackRef.current
    if (!el || !track) return
    const rect = track.getBoundingClientRect()
    const clickY = e.clientY - rect.top
    const { scrollHeight, clientHeight } = el
    const targetScroll = (clickY / rect.height) * scrollHeight - clientHeight / 2
    el.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
    setVisible(true)

    const el = containerRef.current
    const track = trackRef.current
    if (!el || !track) return

    const startY = e.clientY
    const startScroll = el.scrollTop
    const { scrollHeight, clientHeight } = el
    const trackHeight = track.clientHeight
    const currentThumbH = Math.max((clientHeight / scrollHeight) * trackHeight, THUMB_MIN_HEIGHT)
    const maxThumbTop = trackHeight - currentThumbH
    const scrollRange = scrollHeight - clientHeight

    const onMouseMove = (ev: MouseEvent) => {
      const delta = ev.clientY - startY
      const scrollDelta = (delta / maxThumbTop) * scrollRange
      el.scrollTop = startScroll + scrollDelta
    }

    const onMouseUp = () => {
      setDragging(false)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
      if (hideTimer.current) clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setVisible(false), AUTO_HIDE_DELAY)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }

  if (thumbHeight === 0) return null

  return (
    <div
      ref={trackRef}
      className={cn(
        "absolute right-0 top-0 z-50",
        "transition-opacity duration-300",
        visible || dragging ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ width: TRACK_WIDTH, height: "100%" }}
      onClick={handleTrackClick}
      onMouseEnter={() => {
        showScrollbar()
      }}
    >
      <div
        className="absolute right-0 rounded-full bg-border transition-colors hover:bg-muted-foreground/40 cursor-pointer"
        style={{
          width: THUMB_WIDTH,
          height: thumbHeight,
          top: thumbTop,
          right: (TRACK_WIDTH - THUMB_WIDTH) / 2,
        }}
        onMouseDown={handleThumbMouseDown}
      />
    </div>
  )
}
