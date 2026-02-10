import { readContract, writeContract } from '@wagmi/core'
import { type ReadContractReturnType } from '@wagmi/core'
import { wagmiConfig } from '@/web3/wagmiConfig'
import { CONTRACT_ADDRESS, TODO_ABI } from '@/contracts/index'
import type { Address, Hash } from 'viem'


// Obtener todos los elementos encontrados en la blockchain que correspondan a la función getAllTodos del contrato inteligente
export async function getAllTodosService(account: Address): Promise<ReadContractReturnType> {
    try {
        const data = await readContract(wagmiConfig, {
            address: CONTRACT_ADDRESS,
            abi: TODO_ABI,
            functionName: 'getAllTodos',
            account
        })

        if (data) {
            return data
        }

    } catch (error) {
        console.log("Error present at getAllTodos: ", error)
    }
}

// Crear una entrada en la blockchain usando la funcion createTodo del smart contract
export async function createTodoService(account: Address,text: string): Promise<Hash | undefined> {
    try {
        const data = await writeContract(wagmiConfig, {
            address: CONTRACT_ADDRESS,
            abi: TODO_ABI,
            functionName: "createTodo",
            args: [text],
            account
        })

        return data
    } catch (error) {
        console.log("Error present at createTodoServices: ", error)
    }
}

// Modifica el valor del completed de false a true o viseversa
export async function toggleCompletedService(account: Address, id: bigint): Promise<Hash | undefined> {
    try {
        const data = await writeContract(wagmiConfig, {
            address: CONTRACT_ADDRESS,
            abi: TODO_ABI,
            functionName: "toggleCompleted",
            args: [id],
            account
        })

        return data
    } catch (error) {
        console.log("Error present at createTodoServices: ", error)
    }
}
