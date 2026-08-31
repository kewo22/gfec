export type GetInTouchModel = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  preferredTime?: string;
  preferredDate?: Date | null;
  createdAt: Date;
};

export type GetInTouchResponse = {
  _id: string;
} & GetInTouchModel;
