"use client"
import { ReactNode, useState } from "react";
import styles from "./Tabs.module.css"

interface Props {
    content: Tab[]
}
interface Tab {
    title: string;
    content: ReactNode;
}
export default function Tabs ({content}: Props) {
    const [activeIndex, setActiveIndex] = useState(0)
    function chooseTab(index: number){
        return setActiveIndex(index);
    }
    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabTopsContainer}>
                <div className={styles.tabTop}> HI</div>
            </div>
            <div className={styles.tabTopsContainer}>
                <div className={styles.tabTop}> Hello There</div>
            </div>
            
        </div>
    )
}