export class PairInfo {
  date: Date;
  teams : {
    teamName : string,
    members  : string[],
    pairs    : string[][]
  }[];
}
