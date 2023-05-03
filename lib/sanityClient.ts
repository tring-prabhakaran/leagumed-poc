// sanity.js
import { config } from './config';
import {createClient, type ClientConfig} from '@sanity/client';
import moment from 'moment';

const clientConfig: ClientConfig = {
  projectId: config.projectId,
  dataset: config.dataSet,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: moment(new Date()).format('YYYY-MM-DD'), // use current date (YYYY-MM-DD) to target the latest API version
}
const client = createClient(clientConfig)

export async function getSanityGropData(param: string) {
  const posts = await client.fetch(param)
  return posts
}
