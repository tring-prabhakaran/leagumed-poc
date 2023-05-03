
import dynamic from 'next/dynamic'
import styles from './AuthLayout.module.scss';

const Header = dynamic(() => import('../../Header'));
const Footer = dynamic(() => import('../../Footer'));

export default function AuthLayout({ children }: any) {
  return (
    <>
      <Header headerPosition={'relative'} />
      <main id={styles.authLayout} className='w-100 h-100'>
        <div className={styles.headerBlk} />
        <div className={`${styles.contentContainer} w-100 h-100`}>
          <div className={styles.contentBlk}>
            {children}
          </div>
          
        </div>
         
      </main>
      <Footer />
    </>
  );
}