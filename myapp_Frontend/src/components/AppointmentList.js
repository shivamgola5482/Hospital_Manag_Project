import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    date: '',
    time: '',
    reason: '',
    patientId: '',
    doctorId: ''
  });

  const fetchAppointments = () => {
    axios.get('http://localhost:8080/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  };

  const fetchDoctors = () => {
    axios.get('http://localhost:8080/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  };

  const fetchPatients = () => {
    axios.get('http://localhost:8080/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  };

  const deleteApp = async (id) => {
    await axios.delete(`http://localhost:8080/api/appointments/${id}`);
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
    fetchPatients();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      date: form.date,
      time: form.time,
      reason: form.reason,
      patient: { id: form.patientId },
      doctor: { id: form.doctorId }
    };

    axios.post('http://localhost:8080/api/appointments', payload)
      .then(() => {
        fetchAppointments();
        setForm({ date: '', time: '', reason: '', patientId: '', doctorId: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Appointments</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Reason"
          className="border p-2 rounded w-full"
        />
        <select
          name="patientId"
          value={form.patientId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Patient</option>
          {patients.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <select
          name="doctorId"
          value={form.doctorId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Doctor</option>
          {doctors.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Add</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-lg py-4">
        {appointments.map(app => (
          <div key={app.id} className="p-4 border rounded hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-blue-50">
            <p className='text-blue-500'><strong>Appointment Id:</strong> {app.id}</p>
            <p className='text-blue-500'><strong>Date:</strong> {app.date}</p>
            <p className='text-blue-500'><strong>Time:</strong> {app.time}</p>
            <p className='text-blue-500'><strong>Reason:</strong> {app.reason}</p>
            <p className='text-blue-500'><strong>Patient:</strong> {app.patient?.name}</p>
            <p className='text-blue-500'><strong>Doctor:</strong> {app.doctor?.name}</p>
            <div className="mt-2">
              <button
                onClick={() => deleteApp(app.id)}
                className='text-red-600 hover:shadow-sm hover:shadow-red-600 rounded border px-2 py-1 transition-all duration-300'
              >
                <strong>Delete</strong>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
