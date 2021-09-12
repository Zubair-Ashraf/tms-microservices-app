export interface CreateTicketDto {
  title: string;
  price: number;
  userId: string;
}
export interface UpdateTicketDto {
  title?: string;
  price?: number;
}
