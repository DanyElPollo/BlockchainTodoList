import { useState, useEffect } from 'react'
import { useConnection, useWaitForTransactionReceipt } from 'wagmi'

// Services
import {
    createTodoService,
    getAllTodosService,
    toggleCompletedService
} from '@/services/todoServices'

// Types
import type { Address, Hash } from 'viem'
import type { Todo } from '@/services/types'

export function useTodos() {

    const { address, isConnected } = useConnection();

    const [todos, setTodos] = useState<Todo[]>([])
    const [txHash, setTxHash] = useState<Hash | undefined>(undefined)

    const [isSigning, setIsSigning] = useState(false)
    const [isFetching, setIsFetching] = useState(false)

    const account = address as Address

    const {
        isLoading: isConfirming,
        isSuccess,
    } = useWaitForTransactionReceipt({
        hash: txHash,
    })

    // ---------- READ ----------
    async function fetchTodos(): Promise<void> {
        try {
            setIsFetching(true)

            const data = await getAllTodosService(account)
            setTodos(data as Todo[])

        } catch (error) {
            console.log("Error fetching todos: ", error)
        } finally {
            setIsFetching(false)
        }
    }

    // ---------- WRITE ----------
    async function createTodo(text: string): Promise<void> {
        try {
            setIsSigning(true)

            const hash = await createTodoService(account,text)
            setTxHash(hash)

        } finally {
            setIsSigning(false)
        }
    }

    // ---------- TOGGLE ----------
    async function toggleComplete(id: bigint): Promise<void> {
        try {
            setIsSigning(true)

            const hash = await toggleCompletedService(account, id)
            setTxHash(hash)

        } finally {
            setIsSigning(false)
        }
    }

    // refrescar cuando la tx se confirme
    useEffect(() => {
        if (isSuccess) {
            fetchTodos()
        }
    }, [isSuccess])

    useEffect(() => {
        if(isConnected){
            fetchTodos()
        }
    }, [isConnected])

    return {
        todos,
        createTodo,
        toggleComplete,
        isSigning,
        isConfirming,
        isFetching,
    }
}
