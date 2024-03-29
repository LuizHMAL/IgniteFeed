import { Header } from './components/Header';
import { Post } from './Post'

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Luiz Henrique"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcus "
            content="There is no post"
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}