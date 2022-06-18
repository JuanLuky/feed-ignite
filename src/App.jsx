import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      cargo: "Sênior Web Dev & Instructor"
    },
    content: [
      {type: 'paraghaph', content: 'Fala galeraa 👋'},
      {type: 'paraghaph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-17 18:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/JuanLuky.png",
      name: "Juan Carlos",
      cargo: "Web Developer"
    },
    content: [
      {type: 'paraghaph', content: 'Fala galeraa 👋'},
      {type: 'paraghaph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-11 08:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      cargo: "CTO @Rocketseat"
    },
    content: [
      {type: 'paraghaph', content: 'Fala galeraa 👋'},
      {type: 'paraghaph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-12 08:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {
          posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
         }
        </main>
      </div>
    </div>
  );
}
