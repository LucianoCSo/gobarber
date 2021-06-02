import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const appointmetRouts = Router();
appointmetRouts.use(ensureAuthenticated);

appointmetRouts.get('/', async (request, response) => {
  console.log(request.user);
  const appointmentRepository = getCustomRepository(AppointmentRepository);
  const appointment = await appointmentRepository.find();
  return response.json(appointment);
});

appointmetRouts.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const parsedate = parseISO(date);
  const createAppointment = new CreateAppointmentService();
  const appointment = await createAppointment.execute({
    date: parsedate,
    provider_id,
  });
  return response.json(appointment);
});
export default appointmetRouts;
