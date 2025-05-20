import { useTranslation } from "react-i18next";

const LanguageSelector = () => {

const languages = [
    {code: "en", lang: "English"},
    {code: "br", lang: "Português"}
    //see how to change this to the respective flags in the future
];

const changeLanguage = (lng : string) =>{
    i18n.changeLanguage(lng);
};

const { i18n } = useTranslation();

  return (
    <div className="btn-container">
        {
            languages.map((lng)=> {
                return (
                    <button 
                        key={lng.code} 
                        onClick={()=> changeLanguage(lng.code)}
                    >
                    {lng.lang}
                    </button>
                );
            })
        }
    </div>
  )
}

export default LanguageSelector