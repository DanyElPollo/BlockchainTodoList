import type { Todo } from "@/services/types"
import AddTodoForm from "./AddTodoForm"
import TodoItem from "./TodoItem"
import TodoEmpty from "./TodoEmpty"
import NotConnected from "./NotConnected"
import { useTodos } from "@/hooks/useTodos"
import Loader from "../ui/Loader"
import { useConnection } from "wagmi"

function TodoList() {
    const {
        todos,
        createTodo,
        toggleComplete,
        isFetching,
        isSigning,
        isConfirming,
    } = useTodos()

    const { isConnected } = useConnection()

    if (!isConnected) {
        return <NotConnected />
    }

    const completedCount = todos?.filter((todo: Todo) => todo.completed).length ?? 0
    const totalCount = todos?.length ?? 0
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

    return (
        <>
            <Loader isOpen={isFetching} message="Cargando datos"/>
            <div className="w-full flex flex-col gap-14">
                <AddTodoForm onAddTodo={createTodo} isConfirming={isConfirming} isSigning={isSigning} />

                <section>
                    {/* Section header */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-white mb-1.5">
                            Mis Tareas
                        </h2>
                        <p className="text-base text-zinc-500">
                            {totalCount === 0
                                ? "Aun no tienes tareas"
                                : `${completedCount} de ${totalCount} completadas`
                            }
                        </p>

                        {totalCount > 0 && (
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <div className="h-2.5 w-56 rounded-full bg-white/5 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 transition-all duration-700 ease-out"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono tabular-nums w-12 text-right">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Todo list or empty state */}
                    {!todos || todos.length === 0 ? (
                        <TodoEmpty />
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {todos.map((todo: Todo) => (
                                <TodoItem
                                    key={todo.id.toString()}
                                    todo={todo}
                                    onToggle={toggleComplete}
                                    isConfirming={isConfirming}
                                />
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </>
    )
}

export default TodoList
