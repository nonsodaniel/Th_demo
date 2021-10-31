import styles from './giveFeedback.module.css'

const GiveFeedbackLoader = () => {

    return (
        <div className={styles.loader_wrap}>
            <div className={styles.header}></div>
            <table className={`${styles.loader_table}`}>
                <thead>
                    <tr className={styles.table_header}>
                        <th className={styles.left}></th>
                        <th className={styles.right}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.table_body}>
                        <td className={styles.left}>
                            <div className={styles.box}></div>
                        </td>
                        <td className={styles.right}>
                            <div className={`${styles.small} ${styles.box}`}></div>
                        </td>
                    </tr>
                    <tr className={styles.table_body}>
                        <td className={styles.left}>
                            <div className={styles.box}></div>
                        </td>
                        <td className={styles.right}>
                            <div className={`${styles.small} ${styles.box}`}></div>
                        </td>
                    </tr>
                    <tr className={styles.table_body}>
                        <td className={styles.left}>
                            <div className={styles.box}></div>
                        </td>
                        <td className={styles.right}>
                            <div className={`${styles.small} ${styles.box}`}></div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default GiveFeedbackLoader
