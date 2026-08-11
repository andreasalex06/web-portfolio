import { cn } from '@/lib/utils'

export function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex flex-col gap-2 p-6', className)}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={cn('text-lg font-semibold leading-none', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-sm leading-6 text-muted-foreground', className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div data-slot="card-content" className={cn('p-6 pt-0', className)} {...props} />
  )
}
