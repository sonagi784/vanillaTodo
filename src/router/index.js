import home from '@/js/home'
import side from '@/js/side'
import page404 from '@/js/page404'

const pathname = location.pathname

export const useRouter = ($App) => {
  let $page
  if (pathname === '/') {
    $page = home()
  } else if (pathname === '/side') {
    $page = side()
  } else {
    $page = page404()
  }

  const render = () => {
    $page.render($App)
  }

  return {
    render,
  }
}
