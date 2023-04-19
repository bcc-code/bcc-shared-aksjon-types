import {Item} from '@directus/shared/types';
import {DB_TIMESTAMP, ITEM_STATUS, UUID} from './types';

export interface News extends Item {
  id: number;
  title: string;
  summary: string;
  content: string;
  cover_image: UUID;

  date_published?: DB_TIMESTAMP;

  date_created: DB_TIMESTAMP;
  date_updated?: DB_TIMESTAMP;
  user_created: string;
  user_updated?: string;

  status: ITEM_STATUS;
}
