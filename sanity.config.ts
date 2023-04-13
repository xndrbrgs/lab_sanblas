import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';

const projectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const datasetID = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'San_Blas_Content_Studio',
  title: 'San Blas Content Studio',

  projectId: projectID,
  dataset: datasetID,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme
})
 
