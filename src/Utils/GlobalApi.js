import { request, gql } from 'graphql-request'

const MAIN_URL =
  'https://api-ap-south-1.hygraph.com/v2//master'

const getSlider = async () => {
  const document = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `
  const result = await request(MAIN_URL, document)
  return result
}

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `
  const result = await request(MAIN_URL, query)
  return result
}

const getBusinessList = async () => {
  const query = gql`
    query GetBusinessList {
      businessLists {
        id
        title
        email
        contactPerson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `
  const result = await request(MAIN_URL, query)
  return result
}

const getBusinessListByCategory = async category => {
  const query =
    gql`
    query GetBusinessList {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        id
        title
        email
        contactPerson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `
  const result = await request(MAIN_URL, query)
  return result
}

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
}
