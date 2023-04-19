import {Item} from '@directus/shared/types';
import {UUID} from './types';

export interface Organization extends Item {
  id: number;
  bcc_org_id: number;
  name: string;
  country_code: string;
  organisation_leader: string;
  organisation_leader_image: UUID;
  organisation_driver: string;
  organisation_driver_image: UUID;
  number_of_members: number;
  team_id: number;
}
