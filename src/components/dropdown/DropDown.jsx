import React, { useState } from 'react'
import styles from './DropDown.module.css';
import { BsChevronDown, BsChevronUp, BsGlobe2 } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';



const DropDown = ({ selected, setSelected }) => {
    const [isActive, setActive] = useState(false)
    // const options = ['Thai', 'English', 'Spanish']
    const { t, i18n } = useTranslation();

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <div>
                <div className={styles.dropdown}>
                    <h1> Drop Down </h1>
                    <div className={styles.dropdown_btn}
                        onClick={(e) => setActive(!isActive)}>
                        <BsGlobe2 />
                        {
                            isActive ?
                                <div> <BsChevronUp /> </div>
                                :
                                <div> <BsChevronDown /> </div>
                        }
                    </div>
                    {
                        isActive && (
                            <div className={styles.dropdown_content}>
                                <nav className={styles.dropdown_items}>
                                    <button onClick={() => handleClick('en')}>
                                        English
                                    </button>
                                    <button onClick={() => handleClick('sp')}>
                                        Spanish
                                    </button>
                                    <button onClick={() => handleClick('th')}>
                                        Thai
                                    </button>
                                </nav>
                            </div>
                        )
                    }

                    <p>
                        <h1 className={styles.lang}>
                            {t("hello world language will change here")}
                            <br />
                            {t("sahil")}
                            <br />
                            {t("Global")}
                        </h1>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DropDown