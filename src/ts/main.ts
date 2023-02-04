import { cursor } from "./models/functions/cursor";
import { hidden } from "./models/functions/hidden";
import { about } from "./models/pages/about";
import { contact } from "./models/pages/contact";
import { navigation } from "./models/pages/navigation";
import { startpage } from "./models/pages/startpage";
import { work } from "./models/pages/work";

function init() {
  navigation();
  startpage();
  work();
  about();
  contact();
  hidden();
  cursor();
}

init();
