import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import Loader from "../ui/Loader"

interface AddTodoFormProps {
    onAddTodo: (text: string) => void
    isConfirming?: boolean
    isSigning?: boolean
}

function AddTodoForm({ onAddTodo, isConfirming, isSigning }: AddTodoFormProps) {

    const [todo, setTodo] = useState("")
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        (document.activeElement as HTMLElement)?.blur()

        event.preventDefault()

        if (todo.trim() === "") {
            setError("Debes escribir una tarea")
            return
        }

        setError(null)

        await onAddTodo(todo)
        setTodo("")
    }

    const disabled = isSigning || isConfirming

    const label = isSigning
        ? "Esperando firma..."
        : isConfirming
            ? "Confirmando..."
            : "Agregar"

    return (
        <>
            <Loader isOpen={isSigning || isConfirming} message={isSigning ? "Esperando firma..." : "Confirmando transacción..."} ></Loader>

            <div className="gradient-border">
                <form
                    className="bg-[#0a0a12] p-8 sm:p-10"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-5">
                            <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-white">Nueva Tarea</h2>
                        <p className="text-sm text-zinc-600 mt-1.5">Se almacenara en el smart contract</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                        <div className="flex-1">
                            <Input
                                name="todo"
                                label="Descripcion"
                                value={todo}
                                handleChange={setTodo}
                            />
                        </div>

                        <Button
                            label={label}
                            type="submit"
                            disabled={disabled}
                        />
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm mt-2">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </>

    )
}

export default AddTodoForm
