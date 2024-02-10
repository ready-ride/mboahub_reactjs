export const PROPERTIES_URL = '/properties'
export const getPropertiesUrl = (listingName, location, businessType) => {
  listingName = listingName ? `/${listingName}` : ''
  location = location ? `/${location}` : ''
  businessType = businessType ? `/${businessType}` : ''

  return `${PROPERTIES_URL}${listingName}${location}${businessType}`
}
