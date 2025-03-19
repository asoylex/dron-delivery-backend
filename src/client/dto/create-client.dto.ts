export class CreateClientDto {
  name: string;
  username: string;
  phone: string;
  address?: string;
  lat?: number;
  long?: number;
  enable?: boolean;
  credits?: number;
  userId: number;
  email: any;
}
