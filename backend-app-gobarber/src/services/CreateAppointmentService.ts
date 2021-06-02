import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentRepository';
import AppError from '../errors/AppError';

interface Request {
  provider_id: string;
  date: Date;
}

export default class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointmentData = startOfHour(date);

    const fineAppointmentInSameDate = await appointmentRepository.findByDate(
      appointmentData,
    );

    if (fineAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointmet = appointmentRepository.create({
      provider_id,
      date: appointmentData,
    });

    await appointmentRepository.save(appointmet);

    return appointmet;
  }
}
