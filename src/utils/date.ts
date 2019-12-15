import moment from "moment";

export const dateFormatter = 'YYYY-MM-DD HH:mm:ssZZ';

export function dateNow() {
  return moment().format(dateFormatter);
}

export function tsDisplay(timestamp: number) {
  return moment(timestamp).format(dateFormatter);
}
