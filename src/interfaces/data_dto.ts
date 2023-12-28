export interface DataDto {
  client: string;
  tvl: number;
  img: string;
  loc: number;
  audits: Audit[];
  reports: number;
}

export interface Audit {
  private: boolean;
  audit_name: string;
  start_date: string;
  end_date: string;
  details: AuditDetails;
}

export interface AuditDetails {
  loc: number;
  critical_cnt: number;
  high_cnt: number;
  medium_cnt: number;
}
