// import mongodb from "mongodb"
// const ObjectId = mongodb.ObjectID
let listings

export default class ListingsDAO {
  static async injectDB(conn) {
    if (listings) {
      return
    }
    try {
      listings = await conn.db(process.env.AIR_NS).collection("listingsAndReviews")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in listingsDAO: ${e}`,
      )
    }
  }

  static async getListings({
    filters = null,
    page = 0,
    listingsPerPage = 20,
  } = {}) {
    let query
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }
      }
    }

    let cursor
    
    try {
      cursor = await listings
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { listingsList: [], totalNumListings: 0 }
    }

    const displayCursor = cursor.limit(listingsPerPage).skip(listingsPerPage * page)

    try {
      const listingsList = await displayCursor.toArray()
      const totalNumListings = await listings.countDocuments(query)

      return { listingsList, totalNumListings }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { listingsList: [], totalNumListings: 0 }
    }
  }
  
}