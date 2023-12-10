import React from "react";

import Navbar from './app/components/Navbar/Navbar'
import { useTranslation } from "react-i18next";

const App = () => {

  const {  i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
      <Navbar/>
      )

}


export default App