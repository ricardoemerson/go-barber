import * as Yup from 'yup';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(422).json({ error: `Validation fails: ${ err.message }` });
    }

    const { provider_id, date } = req.body;

    /**
     * Check if provider_id is a provider.
     */
    const isProvider = await User.findOne({ where: { id: provider_id, provider: true } });

    if (!isProvider) {
      return res.status(422).json({ error: 'You can only create appointments with providers.' });
    }

    /**
     * Create appointment.
     */
    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
