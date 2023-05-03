import { Metadata } from 'next';
// API
import { getClient } from "@/lib/apolloClient";
import { HOME_QUERY } from '@/queries/HomeQuery';
// Compoenent
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SkeletonComponent from "@/components/SkeletonStructure/SkeletonComponent";
import MembershipPerk from '@/components/MembershipPerk/MembershipPerk';
import Partner from '@/components/Partner/Partner';
import Testimonial from '@/components/Testimonial/Testimonial';
import Banner from '@/components/Banner/Banner';
// Styles
import styles from './home.module.scss'

export const metadata: Metadata = {
  title: 'Home - Leagumed',
};

async function getHomeData(query: any) {
  const client = getClient();
  const homeReponse = await client.query({ query });
  const result: any = { 
    homeData: homeReponse?.data?.getHomePageData?.homePage?.pageBuilder,
    navMenu: homeReponse?.data?.getHomePageData?.header?.pageBuilder
  }
  return result
}

export default async function HomePage () {
  const { homeData, navMenu }  = await getHomeData(HOME_QUERY);
  
  return (
    <>
      <Header headerPosition='absolute' navMenu={navMenu}/>
      <div className={styles.homePage}>
      {homeData ? (
            <div>
              {homeData.map((item: any, index: number) =>
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
