export interface Reading {
  title: string
  url: string
  krSlug?: string
}

export interface Assignment {
  title: string
  url?: string
  dueDate?: string
  description?: string
}

export interface AdditionalResource {
  title: string
  url: string
}

export interface Guest {
  name: string
  role: string
  company: string
  linkedIn?: string
  companyUrl?: string
}

export interface Lecture {
  day: string // "Mon 9/22" 또는 "Fri 9/26"
  title: string
  slidesUrl?: string
  krSlidesSlug?: string
  additionalResources?: AdditionalResource[]
  guest?: Guest
  coGuest?: Guest
}

export interface Week {
  number: number
  title: string
  titleKr: string
  topics: string[]
  readings: Reading[]
  assignments: Assignment[]
  lectures: Lecture[]
}

export interface FaqItem {
  question: string
  answer: string
}
