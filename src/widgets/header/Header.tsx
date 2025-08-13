import { useState } from 'react';
import { BsBasketFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { MdOutlineKeyboard } from "react-icons/md";
import styles from './Header.module.scss';

export default function Header(){
  const[isActive, setIsActive] = useState(0)
  return(
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__list}>
          <MdOutlineKeyboard className={styles.list__logo}/>
          <GrCatalog  onClick={() => setIsActive(1)} className={isActive === 1 ? styles.list__item__active : styles.list__item}/>
          <BsBasketFill onClick={() => setIsActive(2)} className={isActive === 2 ? styles.list__item__active : styles.list__item}/>
        </ul>
      </nav>
      <div className={styles.header__under}>
        <FaUserCircle onClick={() => setIsActive(3)} className={isActive === 3 ? styles.under__media__active : styles.under__media}/>
        <IoSettings onClick={() => setIsActive(4)} className={isActive === 4 ? styles.under__media__active : styles.under__media}/>
      </div>

    </header>
  )
}