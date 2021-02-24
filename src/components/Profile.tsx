import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (

        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62686059?s=460&u=44f95eac3ce3ab86ac4a15a9b6171a11d04f49d9&v=4" alt="Felipe.img" className={styles.profileImg} />
            <div>
                <strong>Felipe Pasqua</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level 1
                </p>
            </div>
        </div>

    );
}