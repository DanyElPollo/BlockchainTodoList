import { createPortal } from "react-dom"

interface LoaderProps {
    isOpen: boolean | undefined
    message?: string
}

export default function Loader({ isOpen, message }: LoaderProps) {
    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-[#0d0d14]/95 border border-white/6 px-12 py-10 shadow-2xl shadow-violet-600/5">
                <div className="size-10 rounded-full border-[3px] border-zinc-800 border-t-violet-500 animate-spin" />
                {message && (
                    <p className="text-sm text-zinc-400 font-medium">{message}</p>
                )}
            </div>
        </div>,
        document.body
    )
}
