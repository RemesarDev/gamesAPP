export interface Platform {
  id: number;
  name: string;
  logoUrl: string | null;
  generation?: number;
  slug?: string;
  summary?: string;
}