import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/JuanLuky.png"
            alt="perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Juan Carlos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="1 de Junho às 08hrs" dateTime="2022-06-1 08:00:00">
          Publicado há 1hr
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p> <a href="#"> 👉 jane.design/doctorcare</a></p>

        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  );
}
