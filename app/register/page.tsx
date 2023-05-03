'use client';
import React, { useState } from "react";
import { getClient } from "@/lib/apolloClient";
import { CREATE_USER } from "../../queries/AuthQuery";
import { GET_ALL_PROFESSION } from "@/queries/RegisterQuery";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NAV_MENU } from '@/queries/HeaderQuery';
// styles
import styles from "./Register.module.scss";

async function getProfession(query: any) {
  const client = getClient();
  const { data } = await client.query({ query });
  const profession = data?.getAllProfessions.map(({ id, name }: any) => ({
    value: id,
    label: name,
  }));
  return profession
}

async function getHeaderMenu(query: any) {
  const client = getClient();
  const headerReponse = await client.query({ query });
  return headerReponse?.data?.getNavigationMenu?.pageBuilder;
};

export default async function Register () {
  const navMenu = await getHeaderMenu(NAV_MENU);
  const profession = await getProfession(GET_ALL_PROFESSION);

  return (
    <>
      <Header headerPosition='absolute' navMenu={navMenu}/>
      <h1>Register</h1>
      <Footer />
    </>
  );
};
