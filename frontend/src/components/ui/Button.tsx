import type { ReactNode } from "react"

interface ButtonProps {
    label?: string
    children?: ReactNode
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export default function Button({
    label,
    children,
    className,
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) {

    const styleClass = className ? className : "px-8 py-4 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-base font-semibold transition-all duration-200 cursor-pointer shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-px active:translate-y-0 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-y-0"

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styleClass}
        >
            {children ?? label}
        </button>
    )
}