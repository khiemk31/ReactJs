import styles from "./Heading.module.scss";
function Heading() {
  return (
    <div style={{ padding: "0 32px" }}>
      <h1 className={styles.heading}>Sử dụng CSS</h1>
    </div>
  );
}

export default Heading;
