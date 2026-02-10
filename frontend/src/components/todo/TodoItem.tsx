import type { Todo } from "@/services/types"
import Button from "../ui/Button"

interface TodoItemProps {
    todo: Todo
    onToggle: (id: bigint) => void
    isConfirming: boolean
}

export default function TodoItem({ todo, onToggle, isConfirming }: TodoItemProps) {
    return (
        <li
            className={`
                group rounded-2xl transition-all duration-300 overflow-hidden
                ${todo.completed
                    ? "glass-card opacity-60"
                    : "glass-card hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/3"
                }
            `}
        >
            <div className="flex items-center gap-5 px-7 sm:px-8 py-6">
                {/* Checkbox */}
                <Button
                    onClick={() => onToggle(todo.id)}
                    disabled={isConfirming}
                    className={`
                        w-9 h-9 rounded-lg border-2 flex items-center justify-center shrink-0
                        transition-all duration-200 cursor-pointer
                        disabled:cursor-not-allowed disabled:opacity-40
                        ${todo.completed
                            ? "bg-violet-500 border-violet-500 shadow-md shadow-violet-500/25"
                            : "border-zinc-700/80 hover:border-violet-400/60 hover:bg-violet-500/5"
                        }
                    `}
                >
                    {todo.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </Button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p
                        className={`text-base leading-relaxed truncate ${
                            todo.completed
                                ? "line-through text-zinc-600"
                                : "text-zinc-200"
                        }`}
                    >
                        {todo.text}
                    </p>
                </div>

                {/* Status + action */}
                <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline-flex text-xs font-mono text-zinc-700 tracking-wider">
                        #{todo.id.toString().padStart(2, "0")}
                    </span>

                    {todo.completed ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400/80 bg-emerald-500/8 px-3 py-1.5 rounded-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Hecha
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400/80 bg-amber-500/8 px-3 py-1.5 rounded-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Pendiente
                        </span>
                    )}

                    <button
                        onClick={() => onToggle(todo.id)}
                        disabled={isConfirming}
                        className={`
                            px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer
                            disabled:opacity-40 disabled:cursor-not-allowed
                            ${todo.completed
                                ? "text-zinc-400 bg-white/4 hover:bg-white/[0.07] border border-white/6"
                                : "text-violet-300 bg-violet-500/10 hover:bg-violet-500/15 border border-violet-500/15"
                            }
                        `}
                    >
                        {isConfirming
                            ? "..."
                            : todo.completed
                                ? "Deshacer"
                                : "Completar"
                        }
                    </button>
                </div>
            </div>
        </li>
    )
}
