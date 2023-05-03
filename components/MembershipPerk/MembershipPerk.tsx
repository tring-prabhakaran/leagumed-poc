'use client';

import Link from 'next/link';
import Image from "next/image";
import { frameImgUrl } from "@/utils/helper";
import styles from "./MembershipPerk.module.scss";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";

export default function MembershipPerk({Content}:any) {

const getmembershipdata = () =>{
    let data :any = {}
    data.image =  frameImgUrl(Content?.image?.asset?._ref);
    data.content = Content?.membership_content;
    data.title = Content?.title;
    data.subtitle = data?.content[0]?.children[0]?.text;
    data.secSubtitle = data?.content[0]?.children[1]?.text;
    return data;
  }

  const {data, error} = useSWR(Content?._id, getmembershipdata)

  return (
    <section className={`${styles.membershipSection}`}>
    <div className={`position-relative w-100 ${styles.membershipTopColor}`}></div>
    <div className={`position-relative d-flex align-items-center ${styles.membershipPerks}`}>
      <div style={{backgroundImage:`url(${data?.image})`}} className={`${styles.parentPerk}`}></div>
      <div>
        <div className={`d-flex flex-column ${styles.membershipCard}`}>
          <span className={`mb-2 ${styles.leaguemedBenefits}`}>{data?.title}</span>
          <span className={styles.memberPerk}>
            <span style={{ color: "#081439" }}>{data?.subtitle} </span>
            <span style={{ color: "#BE9A4F" }}>{data?.secSubtitle}</span>
          </span>
          <div>
            {data && data?.content?.map((data: any, index: any) => {
              return (
                <div key={index} className="mb-3">
                  {(index !== 0 && data._type !== 'image') ? 
                  <div className="d-flex">
                  <Image
                    src="/assets/icons/ic-unorder.svg"
                    alt="."
                    width={14}
                    height={28}
                  />
                  <div className={styles.perkSubdata}>
                  <PortableText value={data} />
                  </div>
                  </div> : <></>}
                </div>
              );
            })}
          </div>
          <Link href={'/register'} className={styles.joinTheLeague}>
          JOIN THE LEAGUE <Image src="assets/icons/ic-joinplus.svg" alt="" width={30} height={30}/>
          </Link>
        </div>
      </div>
      <div className={`position-absolute ${styles.bgPerk}`}>
        <Image src="/assets/icons/ic-lmlogofull.svg" alt="" width={371} height={448}/>
      </div>
    </div>
  
  </section>
  )
}
