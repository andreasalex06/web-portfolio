import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close
export const SheetTitle = DialogPrimitive.Title
export const SheetDescription = DialogPrimitive.Description
export function SheetContent({ className, children, closeLabel = 'Close', ...props }) {
  return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/65" /><DialogPrimitive.Content className={cn('fixed inset-y-0 right-0 z-[101] w-[min(86vw,320px)] overflow-auto bg-white p-6 text-neutral-900 shadow-xl outline-none', className)} {...props}>{children}<DialogPrimitive.Close className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-md border-0 bg-white text-black focus-visible:outline-2 focus-visible:outline-blue-600" aria-label={closeLabel}><X className="size-5" /></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>
}
