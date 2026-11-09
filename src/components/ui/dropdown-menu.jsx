import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export function DropdownMenuContent({ className, sideOffset = 5, ...props }) {
  return <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn('z-[100] min-w-28 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-900 shadow-md', className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
}

export function DropdownMenuRadioItem({ className, children, ...props }) {
  return <DropdownMenuPrimitive.RadioItem
    className={cn('relative flex min-h-10 cursor-default items-center rounded-sm py-2 pr-8 pl-3 text-sm outline-none data-[highlighted]:bg-neutral-100', className)}
    {...props}
  >
    {children}
    <DropdownMenuPrimitive.ItemIndicator className="absolute right-2">
      <Check className="size-4" />
    </DropdownMenuPrimitive.ItemIndicator>
  </DropdownMenuPrimitive.RadioItem>
}
