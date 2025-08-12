const Patient = require("../models/registerModel"); 
const Appointment = require("../models/appoinmentModel");

const totalShow = async (req, res) => {
  try {
    const todayStr = new Date().toISOString().split('T')[0]; // '2025-08-10'

    const todaysAppointmentsCount = await Appointment.countDocuments({
      date: todayStr
    });

    const totalPatientsCount = await Patient.countDocuments();

    const completedAppointmentsCount = await Appointment.countDocuments({
      status: 'Completed',
      date: todayStr
    });

    const cancellationsCount = await Appointment.countDocuments({
      status: 'Cancelled',
      date: todayStr
    });

    res.json({
      todaysAppointments: todaysAppointmentsCount,
      totalPatients: totalPatientsCount,
      completedAppointments: completedAppointmentsCount,
      cancellations: cancellationsCount
    });
  } catch (err) {
    console.error("Error in totalShow:", err);
    res.status(500).json({ message: 'Server error' });
  }
};


const upcomingShow = async (req, res) => {
  try {
    let dateParam = req.params.date;
    let todayDateStr = dateParam 
      ? new Date(dateParam).toISOString().split('T')[0] 
      : new Date().toISOString().split('T')[0];

    const upcomingAppointments = await Appointment.find({
      date: { $gte: todayDateStr },
      status: { $in: ['Pending', 'Confirmed'] }
    })
      .populate('userId', 'userName')
      .sort({ date: 1 })
      .limit(5);

    res.json(upcomingAppointments);
  } catch (err) {
    console.error("Error in upcomingShow:", err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { totalShow, upcomingShow };
