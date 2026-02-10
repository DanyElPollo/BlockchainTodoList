import { useConnect, useConnection, useConnectors, useDisconnect } from "wagmi"

export default function ConnectWalletButton() {
    const { address, isConnected } = useConnection()
    const { connect } = useConnect()
    const { disconnect } = useDisconnect()
    const connectors = useConnectors()

    if (isConnected) {
        return (
            <button
                onClick={() => disconnect()}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/4 hover:bg-white/7 text-sm font-medium transition-all duration-200 cursor-pointer border border-white/7 hover:border-white/12 group"
            >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-300 font-mono text-sm">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <span className="text-zinc-700 group-hover:text-red-400/80 transition-colors text-sm ml-1">
                    Salir
                </span>
            </button>
        )
    }

    return (
        <button
            onClick={() => connect({ connector: connectors[0] })}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-base font-semibold transition-all duration-200 cursor-pointer shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-px active:translate-y-0"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            Conectar Wallet
        </button>
    )
}
