import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/JuanLuky.png" alt="peril" />

            <div className={styles.commentContent}>
                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.commentText}>
                            <strong>Juan Carlos</strong>
                            <time dateTime="2022-06-11 07:00:00">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                    
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}