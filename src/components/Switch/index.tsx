import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.css';

interface SwitchProps{
    setValue: (value: "mobile" | "web") => void
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30.
}

const Switch = ({setValue}: SwitchProps) => {

    const [switchMode, setSwitchMode] = useState(false);

    function handleChangeSwitchMode(){
        setSwitchMode(old => !old);
        setValue(switchMode === false ? 'web' : 'mobile');
    }

    return(
        <div className={`${styles.container} ${switchMode ? 'justify-end': 'justify-starts'}`} onClick={handleChangeSwitchMode}>
            <motion.div layout transition={spring} className={styles.dot}/>
        </div>
    );
}
export default Switch;