import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'
import DynamicOverflow from 'utils/DynamicOverflow'
import ButtonDotsWithOverflow from 'components/ui/Button/ButtonDotsWithOverflow';
import cx from 'classnames'
import { useEffect, useState } from 'react'
import MenuMobile from 'components/svg/MenuMobile'
import MenuMobileClose from 'components/svg/MenuMobileClose'
import { useRouter } from 'next/router'
import ContactUs from 'components/svg/ContactUs'

interface Props {}

export default function Header(props: Props) {

  const options = [{label: 'AboutUs', link: '#'},
  {label: 'Portfolio', link: '#'},
  {label: 'Services', link: '#'},
  {label: 'Reviews', link: '#'},
  {label: 'Team', link: '#'},
]

const [isScrolled, setIsScrolled] = useState(false)
const [isMenuMobileOpen, setMenuMobileOpen] = useState(false)

const router = useRouter()

console.log(router)

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    setIsScrolled(true)
  }
  else{
    setIsScrolled(false)
  }
}

const handleOpenMobileMenu = () => {
  if (process.browser) {
    document.body.classList.add('modal-open')
  }

  setMenuMobileOpen(true)
}

const handleCloseMobileMenu = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
  setMenuMobileOpen(false)
}

const handleClearBodyClass = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
})


  return (
    <>
    <div className={cx(styles.desktop, {[styles.notMain]: router.pathname !== '/'})}>
      <div className={styles.container}>
      <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>GLOBAL СOMMUNICATIONS</div>
        </div>
        </a>
        </Link>
        <div className={styles.list}>
            {options.map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          </div>
          <div className={styles.listMedium}>
            {options.slice(0, 4).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(4, 5).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listSmall}>
            {options.slice(0, 3).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(3, 5).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listExtraSmall}>
            {options.slice(0, 2).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(2, 5).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listTwoItems}>
            {options.slice(0, 1).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(1, 5).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
        <div className={styles.btns}>
          <Button size='small' color='fill'>CONTACT US</Button>
        </div>
      </div>
    </div>
    <div className={styles.headerMobile}>
        <div className={styles.container}>
          <Link href="/#main">
            <a onClick={isMenuMobileOpen && handleCloseMobileMenu}>
            <div className={styles.logo}>
              <Logo/>
            <div className={styles.title}>GLOBAL СOMMUNICATIONS</div>
            </div>
            </a>
          </Link>
          <div className={styles.right}>
          <div className={styles.btns}>
          <Button size='small' color='fill'>CONTACT US</Button>
          </div>
          <div className={styles.btnsMobile}>
          <Button size='extraSmall' color='fill'><ContactUs/></Button>
          </div>
        {!isMenuMobileOpen && (
          <div
            className={styles.menuOpen}
            onClick={handleOpenMobileMenu}
          >
            <MenuMobile/>
          </div>
        )}
        {isMenuMobileOpen && (
          <div className={styles.menuOpen} onClick={handleCloseMobileMenu}>
            <MenuMobileClose />
          </div>
        )}
        </div>
         {isMenuMobileOpen && (
        <div className={styles.dropdownMobile}>
            <div className={styles.list}>
              {options.map((item) => (
                <Link href={item.link}>
                  <a onClick={handleCloseMobileMenu} className={cx(styles.item, {[styles.active]: router.asPath === item.link})} href={item.link}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
        </div>
      )}
        </div>
        </div>
    </>
  )
}
