export default function TodoEmpty() {
    return (
        <div className="gradient-border">
            <div className="bg-[#0a0a12] text-center py-24 px-10">
                <div className="w-18 h-18 mx-auto mb-6 rounded-2xl bg-white/3 border border-white/6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <p className="text-zinc-400 font-semibold text-xl mb-2">No hay tareas todavia</p>
                <p className="text-base text-zinc-600">Crea tu primera tarea usando el formulario de arriba</p>
            </div>
        </div>
    )
}
