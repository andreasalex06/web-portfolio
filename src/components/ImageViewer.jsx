import { useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ImageViewer({ image, title, language, onClose, returnFocusRef }) {
  const [zoom, setZoom] = useState(1)
  const viewportRef = useRef(null)
  const dragRef = useRef(null)
  const t = (id, en) => language === 'en' ? en : id

  const startDrag = event => {
    if (zoom <= 1 || event.pointerType !== 'mouse' || event.button !== 0) return
    const viewport = viewportRef.current
    dragRef.current = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const moveDrag = event => {
    if (!dragRef.current) return
    const viewport = viewportRef.current
    viewport.scrollLeft = dragRef.current.left - (event.clientX - dragRef.current.x)
    viewport.scrollTop = dragRef.current.top - (event.clientY - dragRef.current.y)
  }

  return <Dialog.Root open onOpenChange={open => { if (!open) onClose() }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90" />
      <Dialog.Content className="fixed inset-0 z-[101] flex h-[100dvh] w-full flex-col bg-neutral-950 text-white outline-none" onCloseAutoFocus={event => { event.preventDefault(); returnFocusRef.current?.focus() }}>
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/15 px-4 py-3">
          <div className="min-w-0"><Dialog.Title asChild><span className="block truncate text-sm font-semibold">{title}</span></Dialog.Title><Dialog.Description className="sr-only">{t('Pratinjau gambar proyek','Project image preview')}</Dialog.Description></div>
          <div className="flex shrink-0 items-center gap-1">
            <Button variant="ghost" size="icon" className="h-11 w-11 text-white hover:bg-white/15 hover:text-white" aria-label={t('Perkecil','Zoom out')} title={t('Perkecil','Zoom out')} disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value - .5))}><Minus size={20} aria-hidden="true"/></Button>
            <span className="w-12 text-center text-xs tabular-nums" aria-live="polite">{Math.round(zoom * 100)}%</span>
            <Button variant="ghost" size="icon" className="h-11 w-11 text-white hover:bg-white/15 hover:text-white" aria-label={t('Perbesar','Zoom in')} title={t('Perbesar','Zoom in')} disabled={zoom >= 3} onClick={() => setZoom(value => Math.min(3, value + .5))}><Plus size={20} aria-hidden="true"/></Button>
            <Dialog.Close asChild><Button variant="ghost" size="icon" className="h-11 w-11 text-white hover:bg-white/15 hover:text-white" aria-label={t('Tutup','Close')} title={t('Tutup','Close')}><X size={20} aria-hidden="true"/></Button></Dialog.Close>
          </div>
        </div>
        <div ref={viewportRef} className="min-h-0 flex-1 overflow-auto overscroll-contain" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={() => { dragRef.current = null }} onPointerCancel={() => { dragRef.current = null }} style={{ cursor: zoom > 1 ? 'grab' : 'default' }}>
          <div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}>
            <img src={image} alt={title} draggable="false" className="block h-full w-full select-none object-contain" />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
