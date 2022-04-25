import styles from "../styles/styles.module.css";

function Invita() {
  const gigas = Math.floor(Math.random() * 11);
  return (
    <div className={styles.background}>
      <div className={styles.button}>
        <a
          href={`https://api.whatsapp.com/send?text=Recarga%20aca%20https://bit.ly/3DS9y8O%20y%20lleva%20gratis%20${gigas}GB🤩🎁🎁`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Invita ahora
        </a>
      </div>
    </div>
  );
}

export default Invita;
