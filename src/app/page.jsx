'use client'
import Image from "next/image";

export default function Home() {
  function handleChangeTheme() {
    let stylesFromRoot = getComputedStyle(document.documentElement)
    let fundoCorAntiga = stylesFromRoot.getPropertyValue('--background')
    // console.log(fundoCorAntiga)
    document.documentElement.style.setProperty('--background', stylesFromRoot.getPropertyValue('--foreground'))
    document.documentElement.style.setProperty('--foreground', fundoCorAntiga)
  }
  return (
    <div>
      <p>Imagem de gato abaixo!</p>
      <Image src="/vida-de-gato.jpg" width="300" height="190" alt="Imagem de um gato deitado num sofá"/>
      <br/>
      <button className="themeChangeButton" onClick={handleChangeTheme}>Clique em mim para mudar para o tema claro/escuro!</button>
    </div>
  );
}
