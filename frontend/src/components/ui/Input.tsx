interface InputProps {
    name: string
    label: string
    value: string
    handleChange: (value: string) => void
}

export default function Input({ name, label, value, handleChange }: InputProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <label htmlFor={name} className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                {label}
            </label>
            <input
                id={name}
                name={name}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full text-zinc-100 bg-white/3 px-5 py-4 border border-white/[0.07] rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/30 transition-all duration-200 placeholder:text-zinc-700 hover:border-white/12 text-base"
                placeholder="Escribe tu tarea aqui..."
            />
        </div>
    )
}
