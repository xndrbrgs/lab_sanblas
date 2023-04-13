import {defineCliConfig} from 'sanity/cli'

const projectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const datasetID = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineCliConfig({
  api: {
    projectId: projectID,
    dataset: datasetID
  }
})
