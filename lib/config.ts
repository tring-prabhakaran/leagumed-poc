const PROJECT_ID: string | undefined = process.env.NEXT_PUBLIC_PROJECT_ID;
const DATASET: string | undefined = process.env.NEXT_PUBLIC_DATASET;
const REGION: string | undefined = process.env.NEXT_PUBLIC_REGION;
const IDENTIFY_POOL_ID: string | undefined =
  process.env.NEXT_PUBLIC_IDENTIFY_POOL_ID;
const USER_POOL_ID: string | undefined = process.env.NEXT_PUBLIC_USER_POOL_ID;
const CLIENT_ID: string | undefined = process.env.NEXT_PUBLIC_CLIENT_ID;
const BACKEND_URL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL;

export const config = {
  projectId: PROJECT_ID,
  dataSet: DATASET,
  backendUrl: BACKEND_URL,
  amplify: {
    aws_project_region: REGION,
    aws_cognito_identity_pool_id: IDENTIFY_POOL_ID,
    aws_cognito_region: REGION,
    aws_user_pools_id: USER_POOL_ID,
    aws_user_pools_web_client_id: CLIENT_ID,
    federationTarget: 'COGNITO_USER_POOLS',
  },
};
