import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import styles from './styles.module.css';

const CommentCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.fullName}>Henrique Anjos</div>
                    <div className={styles.username}>@{`henriqueaanjos`}</div>
                </div>
                <FaTwitter
                    size={24}
                    color='#4585D1'
                />
            </div>
            <div className={styles.comment}>Beautiful site you have! ❤️</div>
        </div>
    );
}
export default CommentCard;