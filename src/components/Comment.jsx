import styles from './Comment.module.css/';
import { ThumbsUp } from '@phosphor-icons/react';
import { Trash } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }
    return(
        <div className={styles.comment}>
              <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/158317181?v=4,
              
              
              
              .png" alt="" />

            <div className = {styles.commentBox}>  

            <div className={styles.commentContent}>
                <header>

                    <div className={styles.authorAndTime}>
                    <strong>Luiz Henrique</strong>
                    <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>

                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size = {20}/>
                    </button>
                </header>

                <p>{content}</p>
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