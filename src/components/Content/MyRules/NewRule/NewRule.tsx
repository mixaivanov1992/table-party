import React from 'react';
import styles from '@css/NewRule.module.scss';
import NumberFormat from 'react-number-format';

const NewRule: React.FC = () => {
    return (
        <div className={styles.new_rule}>
            <div className={styles.game_name}>
                <label htmlFor="gameName">Название игры:</label>
                <input id="gameName" type="text" placeholder="Введите название"/>
            </div>
            <div className={styles.content}></div>
            <div className={styles.footer_panel}>
                <div>
                    <NumberFormat
                        className="some"
                        inputmode="numeric"
                        placeholder="Кол-во"
                    />
                    <button>Добавить строки(у)</button>
                </div>
                <div>
                    <button className={styles.save}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default NewRule;