import { makeSource, defineDatabase } from 'contentlayer-source-notion'
import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_TOKEN })

export const Post = defineDatabase(() => ({
  name: 'Post',
  databaseId: '9b43a29a72bf4b9eb176ae80be451400',
  query: {
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
  },
  properties: {
    title: {
      name: 'Title',
      required: true,
    },
    status: {
      name: 'Status',
      required: true,
    },
    date: {
      name: 'Date',
      required: true,
    },
    createdDate: {
      name: 'Created time',
      required: true,
    },
    shortDescription: {
      name: 'Short description',
    },
    createdBy: {
      name: 'Created by',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._id}`,
    },
  },
}))

export default makeSource({
  client,
  databaseTypes: [Post],
})
