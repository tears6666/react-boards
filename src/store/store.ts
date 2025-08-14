import { create } from 'zustand'
import type { IBoard, IBoardState } from '../app/@types/types'

export const useCatalogStore = create<IBoardState>()(set => ({
  boards: [],
  isLoading: false,
  fetchBoards: async () =>{
    const res = await fetch('http://localhost:3000/boards')
    const data = await (res.json()) as IBoard[]
    set({boards: data})
  }
}))