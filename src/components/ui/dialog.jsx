import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description
export const DialogClose = DialogPrimitive.Close
export function DialogContent({ className, children, closeLabel = 'Close', ...props }) {
  return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/80" /><DialogPrimitive.Content className={cn('fixed top-1/2 left-1/2 z-[101] max-h-[92vh] w-[min(96vw,1200px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white p-4 text-neutral-900 shadow-xl outline-none', className)} {...props}><div className="max-h-[calc(92vh-2rem)] overflow-auto">{children}</div><DialogPrimitive.Close className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-md border-0 bg-white text-black focus-visible:outline-2 focus-visible:outline-blue-600" aria-label={closeLabel}><X className="size-5" /></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>
}
