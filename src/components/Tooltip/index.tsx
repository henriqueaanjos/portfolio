import { ReactNode } from "react";

import styles from './styles.module.css'

type TooltipProps = {
    children: ReactNode;
    text: string;
}

export function Tooltip({children, text}: TooltipProps){
    return(
        <div className={styles.tooltipContainer}>
            <div className={styles.tooltipText}>
                {text}
            </div>
            {children}
        </div>
    )
}