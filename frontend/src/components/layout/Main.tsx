interface MainProps {
    children?: React.ReactNode
}

export default function Main({ children }: MainProps) {
    return (
        <main className="flex-1 w-full">
            <div className="w-full max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
                {children}
            </div>
        </main>
    )
}
