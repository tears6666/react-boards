import { useEffect } from 'react'
import { useCatalogStore } from '../../store/store'
import styles from './Card.module.scss'

export const Card = () =>{
  const fetchBoards = useCatalogStore(state => state.fetchBoards)
  const isLoading = useCatalogStore(state => state.isLoading)
  const boards = useCatalogStore(state => state.boards)

  useEffect(() => {
    try {
      fetchBoards()
    } catch (error) {
      console.log('Fatal error', error)
    }
  }, [fetchBoards])
  
  if (isLoading) return <h1 className={styles.loading}>Loading...</h1>
  return(
    <div className={styles.card}>
      {boards.map((board) =>(
        <div key={board.id} className={styles.card__board}>
          <h2 className={styles.board__subtitle}>{board.title}</h2>
          <p className={styles.board__cost}>{board.cost}</p>
        </div>
      ))}
    </div>
  )
}