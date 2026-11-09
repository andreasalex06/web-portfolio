import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CarouselContext = createContext(null)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) throw new Error('Carousel components must be used inside Carousel')
  return context
}

export function Carousel({ opts, setApi, className, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel(opts)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const onSelect = useCallback((instance) => {
    setCanScrollPrev(instance.canScrollPrev())
    setCanScrollNext(instance.canScrollNext())
  }, [])

  useEffect(() => { if (api && setApi) setApi(api) }, [api, setApi])
  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    return () => { api.off('select', onSelect); api.off('reInit', onSelect) }
  }, [api, onSelect])

  return <CarouselContext.Provider value={{ carouselRef, api, canScrollPrev, canScrollNext }}>
    <div role="region" aria-roledescription="carousel" className={cn('relative', className)} onKeyDownCapture={(event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        if (event.key === 'ArrowLeft') api?.scrollPrev()
        else api?.scrollNext()
      }
    }} {...props}>{children}</div>
  </CarouselContext.Provider>
}

export function CarouselContent({ className, autoHeight = false, ...props }) {
  const { carouselRef, api } = useCarousel()
  const [height, setHeight] = useState(null)
  useEffect(() => {
    if (!api || !autoHeight) return
    const update = () => setHeight(api.slideNodes()[api.selectedScrollSnap()]?.offsetHeight || null)
    const observer = new ResizeObserver(update)
    api.slideNodes().forEach(slide => observer.observe(slide))
    api.on('select', update)
    api.on('reInit', update)
    update()
    return () => { observer.disconnect(); api.off('select', update); api.off('reInit', update) }
  }, [api, autoHeight])
  return <div ref={carouselRef} className="overflow-hidden"><div className={cn('flex', autoHeight && 'items-start', className)} style={autoHeight && height ? { height } : undefined} {...props}/></div>
}

export function CarouselItem({ className, ...props }) {
  return <div role="group" aria-roledescription="slide" className={cn('min-w-0 shrink-0 grow-0 basis-full', className)} {...props}/>
}

export function CarouselPrevious({ label, ...props }) {
  const { api, canScrollPrev } = useCarousel()
  return <Button variant="secondary" size="icon" aria-label={label} title={label} disabled={!canScrollPrev} onClick={() => api?.scrollPrev()} {...props}><ArrowLeft size={18} aria-hidden="true"/></Button>
}

export function CarouselNext({ label, ...props }) {
  const { api, canScrollNext } = useCarousel()
  return <Button variant="secondary" size="icon" aria-label={label} title={label} disabled={!canScrollNext} onClick={() => api?.scrollNext()} {...props}><ArrowRight size={18} aria-hidden="true"/></Button>
}
