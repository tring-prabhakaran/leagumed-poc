import { Metadata } from 'next';
import { getClient } from "@/lib/apolloClient";
import { HOME_QUERY } from '@/queries/HomeQuery';
// Compoenent
import SkeletonComponent from "@/components/SkeletonStructure/SkeletonComponent";
import MembershipPerk from '@/components/MembershipPerk/MembershipPerk';
import Partner from '@/components/Partner/Partner';
import Testimonial from '@/components/Testimonial/Testimonial';
import Banner from '@/components/Banner/Banner';
// Styles
import styles from './home.module.scss'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NAV_MENU } from '@/queries/HeaderQuery';

export const metadata: Metadata = {
  title: 'Home - Leagumed',
};


async function getHomeData(query: any) {
  const client = getClient();
  const homeReponse = await client.query({ query });
  return homeReponse?.data?.getHomePageData?.homePage?.pageBuilder
}

async function getHeaderMenu(query: any) {
  const client = getClient();
  const headerReponse = await client.query({ query });
  return headerReponse?.data?.getNavigationMenu?.pageBuilder;
};


export default async function Home () {
  const HomePageData = await getHomeData(HOME_QUERY);
  const navMenu = await getHeaderMenu(NAV_MENU);
  
  return (
    <>
      <Header headerPosition='absolute' navMenu={navMenu}/>
      <div className={styles.homePage}>
      {HomePageData ? (
            <div>
              {HomePageData.map((item: any, index: number) =>
                item._type === "herosection" ? (
                  <Banner key={index} content={item?.pageBuilder[0]} />
                ) : item._type === "partnerlogo" ? (
                  <Partner key={index} content={item} />
                ) : item._type === "membership_benefits" ? (
                  <MembershipPerk Content={item} />
                ) : item._type === "testimonials" ? (
                  <Testimonial Content={item} />
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
              <SkeletonComponent />
          )}
      </div>
      <Footer />
    </>
  )
}
