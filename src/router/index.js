import home from '@/js/home';
import side from '@/js/side';
import page404 from '@/js/page404';

const { pathname } = location;

export const useRouter = (App) => {
  let $page;
  if (pathname === '/') {
    $page = new home();
  } else if (pathname === '/side') {
    $page = new side();
  } else {
    $page = new page404();
  }

  $page.render(App);
};
