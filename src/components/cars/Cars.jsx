import styles from './Cars.module.css';

const Cars = () => {
    return (
        <div className={styles.container}>
            <img src="initial-image.jpg" alt="Initial Image" className={styles.image} />
            <div className={styles.overlay}>
                <img src="overlay-image.jpg" alt="Overlay Image" className={styles.overlayImage} />
            </div>
        </div>
    );
};

export default Cars;
