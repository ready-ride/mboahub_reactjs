export const PROPERTIES_URL = '/properties'
export const getPropertiesUrl = (listingName, location, businessType) => {
  listingName = listingName ? `/${listingName}` : ''
  location = location ? `/${location}` : ''
  businessType = businessType ? `/${businessType}` : ''

  return `${PROPERTIES_URL}${listingName}${location}${businessType}`
};

export const ADMIN_DASHBOARD_URL = '/dashboard';
export const HOME_URL = '/';
export const SIGNIN_PATH = '/signin';
export const HAMBURGER_MENU = '/hamburger_menu';