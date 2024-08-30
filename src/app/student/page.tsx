import Image from "next/image";
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <Image
        src="/isme.jpg"
        alt="Profile Picture"
        width={350}
        height={320}
      />
      <p className={styles.info}>
        Name: Natnicha Prompik<br />
        Student ID: 653450284-3<br />
        Branch of study: Computer Science, 3rd year
      </p>
    </div>
  );
}
