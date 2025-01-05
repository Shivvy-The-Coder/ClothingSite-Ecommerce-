import React from 'react'
import DarkButton from "/images/dark.png"
import LightButton from "/images/light.png"
const DarkMode = () => {

    {/* todo dark button */}
    const [theme,setTheme]=React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
    );

    // this is how i will fe
    const element = document.documentElement;
    React.useEffect(()=>
        {
            if(theme==="dark")
                {
                    element.classList.add("dark");
                    localStorage.setItem("theme","dark");
                }
            else
                {
                    element.classList.remove("dark");
                    localStorage.setItem("theme","light");
                }
        },[theme]);
  return (

    <div className='relative'>

        <img src={LightButton} alt="" 
        onClick={()=>setTheme(theme==="light"?"dark":"light")}
        className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgb(0,0,0,0.1)]
        transition-all duration-300 absolute right-0 z-10 ${theme==="dark"?"opacity-0":"opacity-100"}`}
        />
        <img src={DarkButton} alt="" 
        onClick={()=>setTheme(theme===""?"dark":"light")}
        className='w-12 cursor-pointer drop-shadow [1px_1px_1px_rgb(0,0,0,0.1)]
        transition-all duration-300 '
        />

    </div>
  )
}

export default DarkMode