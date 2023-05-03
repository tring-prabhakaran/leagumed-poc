'use client';

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./Header.module.scss";
import ThemeSwitch from '../ThemeSwitch';

const ButtonBlk = () => {
  return (
    <div
      className={`${styles.buttonBlk} w-100 h-100 d-flex align-items-center`}
    >
      <Link href='login' className={`${styles.loginBtn} btn`}>Login</Link>
      <Link href='/register' className={`${styles.joinBtn} btn`}>Join</Link>
    </div>
  );
};

const HamburerMenu = (props: any) => {
  const { subMenu, menuName, menuId, handleOpenHamburgerSubmenu, hamburgerSubmenu } =
    props;
  return (
    <>
      <li
        onClick={() => handleOpenHamburgerSubmenu(menuId)}
      >
        <div className={`${styles.navbarMenuItem} ${hamburgerSubmenu === menuId && styles.active} pointer h-100 px-2`}>
          {menuName}
          <Image
            className="pointer"
            src={
              hamburgerSubmenu === menuId
                ? "assets/icons/ic-up-arrow.svg"
                : "assets/icons/ic-down-arrow.svg"
            }
            alt="arrow"
            width={20}
            height={20}
          />
        </div>
      </li>
      {hamburgerSubmenu === menuId && (
        <ul className='navbarSubMenu pointer'>
          {subMenu && subMenu.map((sub: any) => (
            <li key={sub._key}>
              <Link
                href={`/[slug]?slug=${sub.slug.current}`}
                className={`${styles.navbarSubMenuItem} pointer h-100 px-4`}
              >
                  {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

interface HeaderProps {
  headerPosition: string | undefined;
  navMenu: any,
}

const Header: React.FC<HeaderProps> = ({ headerPosition, navMenu }) => {
  const [ headerSubMenu, setHeaderSubMenu ] = useState<any>([]);
  const [ activeMenu, setActiveMenu ] = useState<string | null>(null);
  const [ showSubMenu, setShowSubMenu ] = useState<boolean>(false);
  const [ showHamburgerMenu, setShowHamburgerMenu ] = useState<boolean>(false);
  const [ hamburgerSubmenu, setHamburgerSubmenu ] = useState<string | null>(null);

  const handleOpenHamburgerSubmenu = (menuId: string) => {
    if (hamburgerSubmenu === menuId) {
      setHamburgerSubmenu(null);
    } else {
      setHamburgerSubmenu(menuId);
    }
  };

  const handleOnMouseEnter = (subMenu: any, activeId: string | null) => {
    setShowSubMenu(true);
    if(activeId && subMenu) {
      setActiveMenu(activeId);
      setHeaderSubMenu(subMenu);
    }
  };

  const handleOnMouseLeave = (container: string) => {
    if(container === 'SM') {
      setActiveMenu(null);
    }
    setShowSubMenu(false);
  };

  const handleOpenHamburger = () => {
    setShowHamburgerMenu((prevState) => !prevState);
  };

  return (
    <>
      {!showHamburgerMenu && (
        <header className={`${styles.header} position-${headerPosition}`}>
          <div
            className={`${styles.headerContent} d-flex align-items-center justify-content-between w-100 h-100`}
          >
            <Link 
              href={{
                pathname: '/',
              }}
              className="h-100 d-flex align-items-center justify-content-center">
              <Image
                src="assets/images/legmed-logo.svg"
                alt="leagueMed logo"
                width={201}
                height={48}
              />
            </Link>
            <div className={`${styles.menuBlk} h-100`}>
              <ul className="d-flex align-items-center h-100 m-0 p-0">
                {navMenu && navMenu.map((item: any, index: number) => (
                  <li
                    key={item._id}
                    className={`${styles.menuItem} ${activeMenu === item._id && styles.active}`}
                    onMouseOver={() => handleOnMouseEnter(item.sub_items, item._id)}
                    onMouseLeave={() => handleOnMouseLeave('MM')}
                  >
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`${styles.rightSide} h-100 d-flex align-items-center`}
            >
              <Image
                className="pointer"
                src="assets/icons/ic-search.svg"
                alt="serach"
                width={20}
                height={20}
              />
              <ButtonBlk />
              <Image
                className={`${styles.hamburgerIcon} ms-3 pointer`}
                src="assets/icons/ic-humberger.svg"
                alt="hamburer"
                width={24}
                height={24}
                onClick={handleOpenHamburger}
              />
            </div>
          </div>
          {/* Submenu code commented */}
          {showSubMenu && (
            <div className={`${styles.subMenuContainer} w-100`}>
              <div
                className={`${styles.innerSubMenuContainer} d-flex h-100`}
                onMouseOver={() => handleOnMouseEnter(null, null)}
                onMouseLeave={() => handleOnMouseLeave('SM')}
              >
                <div
                  className={`${styles.leftSideSection} d-flex justify-content-end`}
                >
                  <ul className="m-0 p-0 w-100">
                    {headerSubMenu?.map((sub: any, index: number) => (
                      <li key={sub._ref}>
                        <Link
                          href={`/[slug]?slug=${sub.slug.current}`}
                        >
                          <div className={styles.item}>{sub.title}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.rightSideSection}>
                  <div
                    className={`${styles.recentContainer} d-flex justify-content-between`}
                  >
                    <div className={`${styles.recentCard}`}>
                      <div
                        className={`${styles.recentHeader} position-relative`}
                      >
                        <Image
                          className="h-100 w-100"
                          src="/assets/images/card.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                        <p className="position-absolute bottom-0 p-2 m-0">
                          PRACTICE MANAGEMENT
                        </p>
                      </div>
                      <div className={styles.recentBody}>
                        <p className={`${styles.recentTitle} m-0`}>
                          Teleflex launches another restructuring round to fund
                          new study test updated
                        </p>
                        <p className={`${styles.recentTimeStamp} mb-0 mt-2`}>
                          Updated Jan 26, 2023 by MedTech
                        </p>
                      </div>
                    </div>

                    <div className={`${styles.recentCard}`}>
                      <div
                        className={`${styles.recentHeader} position-relative`}
                      >
                        <Image
                          className="h-100 w-100"
                          src="/assets/images/card.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                        <p className="position-absolute bottom-0 p-2 m-0">
                          PRACTICE MANAGEMENT
                        </p>
                      </div>
                      <div className={styles.recentBody}>
                        <p className={`${styles.recentTitle} m-0`}>
                          Teleflex launches another restructuring round to fund
                          new study test updated
                        </p>
                        <p className={`${styles.recentTimeStamp} mb-0 mt-2`}>
                          Updated Jan 26, 2023 by MedTech
                        </p>
                      </div>
                    </div>

                    <div className={`${styles.recentCard}`}>
                      <div
                        className={`${styles.recentHeader} position-relative`}
                      >
                        <Image
                          className="h-100 w-100"
                          src="/assets/images/card.jpg"
                          alt="img"
                          width={100}
                          height={100}
                        />
                        <p className="position-absolute bottom-0 p-2 m-0">
                          PRACTICE MANAGEMENT
                        </p>
                      </div>
                      <div className={styles.recentBody}>
                        <p className={`${styles.recentTitle} m-0`}>
                          Teleflex launches another restructuring round to fund
                          new study test updated
                        </p>
                        <p className={`${styles.recentTimeStamp} mb-0 mt-2`}>
                          Updated Jan 26, 2023 by MedTech
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      {showHamburgerMenu && (
        <div className={`${styles.hamburgerBlk}`}>
          <div
            className={`d-flex justify-content-between align-items-center px-4 ${styles.headerContent}`}
          >
            <Image
              src="assets/images/legmed-logo.svg"
              alt="leagueMed logo"
              width={201}
              height={48}
            />
            <Image
              className="pointer"
              src="assets/icons/ic-humberger-close.svg"
              alt="serach"
              width={19}
              height={19}
              onClick={handleOpenHamburger}
            />
          </div>
          <div className={`${styles.headerMenuBlk}`}>
            <ul className='navbarMenu mx-3'>
              {navMenu && navMenu.map((item: any, index: number) => (
                <HamburerMenu
                  key={index}
                  subMenu={item.sub_items}
                  menuId={item._id}
                  menuName={item.name}
                  handleOpenHamburgerSubmenu={handleOpenHamburgerSubmenu}
                  hamburgerSubmenu={hamburgerSubmenu}
                />
              ))}
            </ul>
            <ButtonBlk />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
