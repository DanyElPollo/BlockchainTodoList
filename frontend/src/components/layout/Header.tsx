interface HeaderProps {
    rightContent?: React.ReactNode
}

export default function Header({ rightContent }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full justify-center items-center">
            <div className="w-full bg-[#06060b]/70 backdrop-blur-xl border-b border-white/4">
                <div className="w-full mx-auto flex items-center justify-between sm:px-10 h-18">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-base font-bold text-white tracking-wide">
                                Blockchain Todo
                            </h1>
                            <p className="text-xs text-zinc-600 font-medium">Metis Sepolia</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {rightContent}
                    </div>
                </div>
            </div>
        </header>
    )
}
