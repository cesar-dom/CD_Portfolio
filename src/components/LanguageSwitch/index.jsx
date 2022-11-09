import React, { useState } from "react"
import { useEffect } from "react"
import * as S from './style'


const LanguageSwitch = () => {
    const [language, setLanguage] = useState('en')

    const setCurrentLanguage = _language => {
        setLanguage(_language)
        localStorage.setItem('_language', _language)
      }

    return (
        <S.LangSelectorContainer>
              <S.LangSelector
                style={{ opacity: language !== 'en' ? 0.3 : 1 }}
                onClick={() => setCurrentLanguage('en')}
              >
                <button>EN</button>
              </S.LangSelector>

              <S.LangSelector
                style={{ opacity: language !== 'pt' ? 0.3 : 1 }}
                onClick={() => setCurrentLanguage('pt')}
                >
                <button>PT</button>
              </S.LangSelector>
            </S.LangSelectorContainer>
    )

}

export default LanguageSwitch