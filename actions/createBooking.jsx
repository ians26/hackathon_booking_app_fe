"use server";

export const createBooking = async (FormData) => {
  const userId = FormData.get("userId");
  const seatId = FormData.get("seatId");
  const startDate = FormData.get("startDate");
  const endData = FormData.get("endDate");
  const startHour = FormData.get("startHour");
  const endHour = FormData.get("endHour");

  //todo call be to create booking

};
