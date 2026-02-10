import Header from "@/components/layout/Header"
import Main from "@/components/layout/Main"
import Footer from "@/components/layout/Footer"
import TodoList from "@/components/todo/TodoList"
import ConnectWalletButton from "@/components/web3/ConnectWalletButton"

export default function HomePage() {
    return (
        <>
            {/* Background effects */}
            <div className="bg-glow" />
            <div className="bg-dots" />

            <div className="w-full relative z-10 flex flex-col min-h-screen">
                <Header rightContent={<ConnectWalletButton />} />

                <Main>
                    <div className="text-center mb-16 sm:mb-20">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                            <span className="text-sm font-medium text-violet-300 tracking-wide uppercase">
                                On-Chain Todo DApp
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Tus tareas,{" "}
                            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent bg-size-[200%_auto] animate-[shimmer_3s_linear_infinite]">
                                on-chain
                            </span>
                        </h2>
                        <p className="text-zinc-500 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
                            Gestiona tus tareas de forma descentralizada
                            en la blockchain de Metis.
                        </p>
                    </div>

                    <TodoList />
                </Main>

                <Footer />
            </div>
        </>
    )
}
