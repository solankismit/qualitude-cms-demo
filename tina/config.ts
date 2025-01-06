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
        name: "course",
        label: "Courses",
        path: "content/courses",
        format: "json",
        ui: {
          router: ({ document }) => {
            return `/technologies/courses/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "object",
            name: "careers",
            label: "Careers",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
            required: true,
          },
          {
            type: "string",
            name: "schedule",
            label: "Schedule",
            required: true,
          },
          {
            type: "string",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "object",
            name: "skills",
            label: "Skills",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item.skill,
              }),
            },
            fields: [
              {
                type: "string",
                name: "skill",
                label: "Skill",
              },
            ],
          },
          {
            type: "object",
            name: "highlights",
            label: "Course Highlights",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                required: true,
                options: ["Target", "Users", "Zap", "Award"],
              },
            ],
          },
          {
            type: "object",
            name: "curriculum",
            label: "Curriculum",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item.title,
              }),
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "object",
                name: "topics",
                label: "Topics",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item.topic,
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "topic",
                    label: "Topic",
                  },
                ],
              },
            ],
          },
          
          
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            return '/';
          }
        },
        fields: [
          {
            name: "title_1",
            label: "Title 1",
            type: "string"
          },
          {
            name: "description_1",
            label: "Description 1",
            type: "string"
          },
          {
            name: "title_2",
            label: "Title 2",
            type: "string"
          },
          {
            name: "description_2",
            label: "Description 2",
            type: "string"
          },
        ]
      },
    ],
  },
});

