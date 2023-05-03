'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { frameImgUrl } from "@/utils/helper";
import styles from "./MembershipPerk.module.scss";

export default function MembershipPerk({Content}:any) {

  const [ MembershipResponseData, setMembershipResponseData ] = useState<any>([]);
 
  useEffect(() => {
    let data :any = {}
    data.image =  frameImgUrl(Content?.image?.asset?._ref);
    data.content = Content?.membership_content;
    data.title = Content?.title;
    data.subtitle = data.content[0]?.children[0]?.text
    data.secSubtitle = data.content[0]?.children[1]?.text
    setMembershipResponseData(data);
  },[Content]);

  return (
    <section className={`${styles.membershipSection}`}>
    <div className={`position-relative w-100 ${styles.membershipTopColor}`}></div>
    <div className={`position-relative d-flex align-items-center ${styles.membershipPerks}`}>
      <div style={{backgroundImage:`url(${MembershipResponseData?.image})`}} className={`${styles.parentPerk}`}></div>
      <div>
        <div className={`d-flex flex-column ${styles.membershipCard}`}>
          <span className={`mb-2 ${styles.leaguemedBenefits}`}>{MembershipResponseData?.title}</span>
          <span className={styles.memberPerk}>
            <span style={{ color: "#081439" }}>{MembershipResponseData?.subtitle} </span>
            <span style={{ color: "#BE9A4F" }}>{MembershipResponseData?.secSubtitle}</span>
          </span>
          <div>
            {MembershipResponseData?.content?.map((data: any, index: any) => {
              return (
                <div key={index} className="mb-3">
                  {index !== 0 ? 
                  <>
                  <Image
                    src="/assets/icons/ic-unorder.svg"
                    alt="."
                    width={14}
                    height={28}
                  />
                  <span className={styles.perkSubdata}>{data.children[0].text}</span>
                  </> : <></>}
                </div>
              );
            })}
          </div>
          <Link href={'/login'} className={styles.joinTheLeague}>
            Join The League <Image src="assets/icons/ic-joinplus.svg" alt="" width={30} height={30}/>
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
