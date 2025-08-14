export interface IBoard{
  id: number
  title: string
  cost: number
}

export interface IBoardState{
  boards: IBoard[]
  isLoading: boolean
  fetchBoards: () => void
}