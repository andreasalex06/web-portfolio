import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
export function Breadcrumb({ className, ...props }) { return <nav aria-label="Breadcrumb" className={cn('block', className)} {...props} /> }
export function BreadcrumbList({ className, ...props }) { return <ol className={cn('m-0 flex list-none flex-wrap items-center gap-2 p-0 text-sm', className)} {...props} /> }
export function BreadcrumbItem({ className, ...props }) { return <li className={cn('inline-flex items-center gap-2', className)} {...props} /> }
export function BreadcrumbLink({ className, ...props }) { return <a className={cn('text-emerald-800 hover:underline', className)} {...props} /> }
export function BreadcrumbPage({ className, ...props }) { return <span aria-current="page" className={cn('font-semibold text-neutral-900', className)} {...props} /> }
export function BreadcrumbSeparator() { return <li className="inline-flex items-center" aria-hidden="true"><ChevronRight className="size-4 text-neutral-500" /></li> }
