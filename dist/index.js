import { Sidebar as i } from "./sidebar.js";
import { ThemeSwitcher as t } from "./theme-switcher.js";
class m {
  static init() {
    i.init(), t.init();
  }
}
export {
  i as Sidebar,
  m as SidebarSkeleton,
  t as ThemeSwitcher
};
