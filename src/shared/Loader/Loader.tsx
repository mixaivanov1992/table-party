import React from "react";
import styles from '@css/Loader.module.scss';

const Loader = () => {
    return(
        <div className={styles.loader}>
            <div>
                <div className={`${styles.dice} ${styles.panel_load}`}>
                    <div className={`${styles.face} ${styles.front}`}>
                        <div>
                            <div className={`${styles.point} ${styles.left_top}`}></div>
                            <div className={`${styles.point} ${styles.left_bottom}`}></div>
                            <div className={`${styles.point} ${styles.left_center}`}></div>
                            <div className={`${styles.point} ${styles.right_center}`}></div>
                            <div className={`${styles.point} ${styles.right_top}`}></div>
                            <div className={`${styles.point} ${styles.right_bottom}`}></div>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.back}`}>
                        <div>
                            <div className={styles.point}></div>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.left}`}>
                        <div>
                            <div className={`${styles.point} ${styles.left_top}`}></div>
                            <div className={`${styles.point} ${styles.left_bottom}`}></div>
                            <div className={`${styles.point} ${styles.right_top}`}></div>
                            <div className={`${styles.point} ${styles.right_bottom}`}></div>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.right}`}>
                        <div>
                            <div className={`${styles.point} ${styles.left_bottom}`}></div>
                            <div className={styles.point}></div>
                            <div className={`${styles.point} ${styles.right_top}`}></div>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.bottom}`}>
                        <div>
                            <div className={`${styles.point} ${styles.left_bottom}`}></div>
                            <div className={`${styles.point} ${styles.right_top}`}></div>
                        </div>
                    </div>
                    <div className={`${styles.face} ${styles.top}`}>
                        <div>
                            <div className={`${styles.point} ${styles.left_top}`}></div>
                            <div className={`${styles.point} ${styles.left_bottom}`}></div>
                            <div className={styles.point}></div>
                            <div className={`${styles.point} ${styles.right_top}`}></div>
                            <div className={`${styles.point} ${styles.right_bottom}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                <div className={`${styles.ball} ${styles.one}`}></div>
                <div className={`${styles.ball} ${styles.two}`}></div>
                <div className={`${styles.ball} ${styles.three}`}></div>
                <div>LOADING</div>
                <div className={`${styles.ball} ${styles.three}`}></div>
                <div className={`${styles.ball} ${styles.two}`}></div>
                <div className={`${styles.ball} ${styles.one}`}></div>
            </div>
        </div>
    );
}

export default Loader;