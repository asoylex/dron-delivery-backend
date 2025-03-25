export class CreateDroneDto {
  model: string;
  max_range_km: number;
  speed_kmh: number;
  stationId?: number;
}
