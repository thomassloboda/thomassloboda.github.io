import React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function ResponsiveContainer({ children, className, ...props }: ResponsiveContainerProps) {
    return (
        <div className={cn("w-full px-4 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl", className)} {...props}>
            {children}
        </div>
    )
}

