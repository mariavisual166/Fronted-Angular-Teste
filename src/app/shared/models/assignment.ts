import {Group} from './group';
import {User} from './user';

export interface Assignment {
  id?: number;
  title: string;
  content: string;
  initialDate: Date;
  finalDate: Date;
  status?: number;
  grpId: number;
  group?: Group;
  usrId?: number;
  user?: User;
  usrCreator?: number;
  notification?: number;
}
