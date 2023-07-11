type BusinessType = 'for_sale' | 'for_rent' | '';

export type SearchInputType = {
  listingName: string,
  location: string,
  businessType: BusinessType,
  street: string,
  city: string,
  country: string,
  homeType: string
}

export interface SearchInputContextProps {
  inputObj: SearchInputType | null,
  setInputObj: React.Dispatch<any>,
}