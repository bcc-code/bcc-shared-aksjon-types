import {Item} from '@directus/shared/types'

export interface Badge extends Item {
  id: number
  name: string
  image: string
  description: string
}
