import type { TargetAndTransition } from "framer-motion";

import { lightTextColor, lightBackgroundColor,
  darkBackgroundColor, darkTextColor
} from '../../constants';

export const lightToDark: TargetAndTransition = {
  backgroundColor: [darkBackgroundColor, lightBackgroundColor],
  color: [darkTextColor, lightTextColor]
};

export const darkToLight: TargetAndTransition = {
  backgroundColor: [darkBackgroundColor, lightBackgroundColor],
  color: [darkTextColor, lightTextColor]
};