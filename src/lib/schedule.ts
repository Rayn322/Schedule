import { block1 } from './schedules/block1';
import { block2 } from './schedules/block2';
import { regular } from './schedules/regular';

export interface ScheduleList {
  regular: Schedule;
  block1: Schedule;
  block2: Schedule;
}

export type Schedule = Period[];

export interface Period {
  name: string;
  start: Time;
  end: Time;
}

export interface Time {
  hour: number;
  minute: number;
}

export enum Type {
  Regular,
  Block1,
  Block2
}

export const scheduleList: ScheduleList = {
  regular: regular,
  block1: block1,
  block2: block2
};
