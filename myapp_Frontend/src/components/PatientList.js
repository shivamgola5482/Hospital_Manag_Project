import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', gender: '', phone: '', address: '' });

  const fetchPatients = () => {
    axios.get('http://localhost:8080/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/api/patients/${id}`);
    fetchPatients();
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/patients', form)
      .then(() => {
        fetchPatients();
        setForm({ name: '', age: '', gender: '', phone: '', address: '' });
      });
  };

  return (
    <div id="patient" className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Patients</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
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
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
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
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Add Patient</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-lg py-4">
        {patients.map(patient => (
          <div
            key={patient.id}
            className="p-4 border rounded hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-blue-50"
          >
            <h3 className="font-semibold text-lg">{patient.name}</h3>
            <p className='text-blue-500'><strong>Patient Id:</strong> {patient.id}</p>
            <p className='text-blue-500'><strong>Age:</strong> {patient.age}</p>
            <p className='text-blue-500'><strong>Gender:</strong> {patient.gender}</p>
            <p className='text-blue-500'><strong>Phone:</strong> {patient.phone}</p>
            <p className='text-blue-500'><strong>Address:</strong> {patient.address}</p>
            <div className="mt-2">
              <button
                onClick={() => deletePatient(patient.id)}
                className="text-red-600 hover:shadow-sm hover:shadow-red-600 rounded border px-2 py-1 transition-all duration-300"
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

export default PatientList;
