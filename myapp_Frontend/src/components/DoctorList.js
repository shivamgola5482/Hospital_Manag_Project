import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', speciality: '', phone: '' });

  const fetchDoctors = () => {
    axios.get('http://localhost:8080/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  };

  const deleteDoctors = async (id) => {
    await axios.delete(`http://localhost:8080/api/doctors/${id}`);
    fetchDoctors();
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/doctors', form)
      .then(() => {
        fetchDoctors();
        setForm({ name: '', email: '', speciality: '', phone: '' });
      });
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Doctors</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="speciality"
          value={form.speciality}
          onChange={handleChange}
          placeholder="Speciality"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Add Doctor
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-lg py-4">
        {doctors.map(doctor => (
          <div
            key={doctor.id}
            className="p-4 border rounded hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-blue-50"
          >
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p className='text-blue-500'><strong>Doctor Id:</strong> {doctor.id}</p>
            <p className='text-blue-500'><strong>Speciality:</strong> {doctor.speciality}</p>
            <p className='text-blue-500'><strong>Email:</strong> {doctor.email}</p>
            <p className='text-blue-500'><strong>Phone:</strong> {doctor.phone}</p>
            <div className="mt-2">
              <button
                onClick={() => deleteDoctors(doctor.id)}
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

export default DoctorList;
