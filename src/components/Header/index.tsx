import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language-selector";
import styles from "./header.module.css";

const Header = () => {

const { t } = useTranslation();

//const description = t('description');

return (
    <>
            <header className={styles.header} aria-label="Header">
                <div className="localesFlags">
                    <LanguageSelector/>
                </div>
                <div className="headerTexts">
                    {/* put all of the others topics of the header in here*/}
                    {t('welcomeMessage', {count:1})}
                </div>
            </header>
        </>
    )
}
export default Header;