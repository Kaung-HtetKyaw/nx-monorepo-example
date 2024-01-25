import styles from './ci-ui.module.css';

/* eslint-disable-next-line */
export interface CiUiProps {}

export function CiUi(props: CiUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CiUi!</h1>
    </div>
  );
}

export default CiUi;
