import { useTheme } from "../../utils/hooks";
import { NightModeButton } from "./style";


function DarkMode(){
    const {toggleTheme, theme} = useTheme()

    return(
        <NightModeButton isDarkMode={theme === 'dark'} onClick={() => toggleTheme()}>
            {theme === 'dark' ? '☀️' : '🌙'}
        </NightModeButton>
    )
}

export default DarkMode