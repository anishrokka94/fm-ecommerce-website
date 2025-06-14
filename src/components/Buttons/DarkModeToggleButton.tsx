import { useContext } from "react";
import LightModeIcon from "../../assets/svg/LightModeIcon";
import DarkModeIcon from "../../assets/svg/DarkModeIcon";
import { ThemeContext } from "../../global-state/context/ThemeContext/ThemeContext";
import { ThemeActionType } from "../../global-state/action/ThemeActions/ThemeActions";

const DarkModeToggleButton = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    // Optional safety check to prevent runtime errors
    return null;
  }

  const { state, themeDispatch } = themeContext;

  console.log("state", state);

  return (
    <button
      onClick={() => themeDispatch({ type: ThemeActionType.TOGGLE_DARK_MODE })}
    >
      {state.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default DarkModeToggleButton;
