import { Card } from '../../entities/Card/Card'
import styles from './Catalog.module.scss'

export default function Catalog(){
  return(
    <div className={styles.catalog}>
      <Card />
    </div>
  )
}