export type OrderAttributes = {
  id: string
  product: ProductAttributes
  quantity: string | number
  status: string
  date: number
  customer_address: string
  customer_phone: string
  customer_email: string
  customer_name: string
}

export type ProductAttributes = {
  id: string | number
  carouselImages?: { src: string }[]
  premium: boolean
  url?: string
  location: { city: string; country: string }
  name: string
  price: string
  description: string
  delivery: any
  store: any
  specifications: any
}
