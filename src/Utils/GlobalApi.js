import { request, gql } from 'graphql-request'

const MAIN_URL = 'https://api-ap-south-1.hygraph.com/v2//master'

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

const createBooking = async data => {
  try {
    const mutationQuery =
      gql`
    mutation createBooking {
      createBooking(
        data: {
          bookingStatus: Booked
          business: { connect: { id: "` +
      data.businessId +
      `" } }
          date: "` +
      data.date +
      `"
          time: "` +
      data.time +
      `"
          userEmail: "` +
      data.userEmail +
      `"
          userName: "` +
      data.userName +
      `"
        }
      ) {
        id
      }
        publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `
    const result = await request(MAIN_URL, mutationQuery)
    return result
  } catch (error) {
    console.log('Something Went wrong', error)
  }
}

const getUserBookings = async userEmail => {
  try {
    const query =
      gql`
      query GetUserBookings {
        bookings(orderBy: updatedAt_DESC, where: { userEmail: "` +
      userEmail +
      `" }) {
          time
          userEmail
          userName
          bookingStatus
          date
          id
          business {
            id
            images {
              url
            }
            title
            address
            contactPerson
            email
            about
          }
        }
      }
    `
    const result = await request(MAIN_URL, query)
    return result
  } catch (error) {
    console.error('Something went wrong', error)
  }
}

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings,
}
