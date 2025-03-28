import styles from './styles.module.css';
import { FaStar } from 'react-icons/fa';

interface DifficultyRankingProps {
    difficulty: number;
}

const DifficultyRanking = ({difficulty}:DifficultyRankingProps) => {
    return(
        <div className={styles.container}>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop stopColor="#E6006E" offset="0%" />
                    <stop stopColor="#F4B628" offset="100%" />
                </linearGradient>
            </svg>
            {
                new Array(difficulty).fill(1).map((_, index) => 
                    <FaStar 
                        key={index}
                        size={32}
                        style={{fill: "url(#gradient)" }}
                    />
                )
            }
        </div>
    );
}
export default DifficultyRanking;