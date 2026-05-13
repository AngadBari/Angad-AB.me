import React from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        " max-w-2xl w-full mx-auto bg-white dark:bg-black p-4 md:p-10 selection:bg-cyan-400  ",
        className
      )}
    >
      {children}
    </div>
  )
}