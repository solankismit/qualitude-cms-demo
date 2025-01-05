import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name:"course",
        label:"Courses",
        path:"content/courses",
        format:"json",
        fields:[{
          name:"title_1",
          label:"Title 1",
          type:"string"
        }],
      },
      {
        name:"page",
        label:"Pages",
        path:"content/pages",
        format:"json",
        ui:{
          router:props=>{return '/'}
        },
        fields:[
          {
          name:"title_1",
          label:"Title 1",
          type:"string"
        },
          {
          name:"description_1",
          label:"Description 1",
          type:"string"
        },
          {
          name:"title_2",
          label:"Title 2",
          type:"string"
        },
          {
          name:"description_2",
          label:"Description 2",
          type:"string"
        },
      ]
      },
      
    ],
  },
});
