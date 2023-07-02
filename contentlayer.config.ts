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
    createdDate: {
      name: 'Created time',
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
