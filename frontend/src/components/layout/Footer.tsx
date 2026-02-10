export default function Footer() {
    return (
        <footer className="w-full border-t border-white/4">
            <div className="max-w-4xl mx-auto flex items-center justify-center h-16 px-6">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-sm text-zinc-600 font-medium">
                        Conectado a Metis Sepolia Testnet
                    </p>
                </div>
            </div>
        </footer>
    )
}
