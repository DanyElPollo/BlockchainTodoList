import ConnectWalletButton from "../web3/ConnectWalletButton"

export default function NotConnected() {
    return (
        <div className="gradient-border">
            <div className="bg-[#0a0a12] text-center py-24 px-10">
                <div className="w-18 h-18 mx-auto mb-6 rounded-2xl bg-white/3 border border-white/6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                </div>
                <p className="text-zinc-400 font-semibold text-xl mb-2">Conecta tu wallet</p>
                <p className="text-base text-zinc-600 mb-8">Para gestionar tus tareas on-chain necesitas conectar tu wallet</p>
                <div className="flex justify-center">
                    <ConnectWalletButton />
                </div>
            </div>
        </div>
    )
}
