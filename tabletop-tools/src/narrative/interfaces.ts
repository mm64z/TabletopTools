export interface NarrativeBeat {
  id: string;
  title?: string;
  summary?: string;
  outcomes?: Array<NarrativeBeat>;
}
