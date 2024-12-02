import { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function AdminPage({ devices }) {
    const [serialNumber, setSerialNumber] = useState('');
    const [name, setName] = useState('');

    const handleAddDevice = async (e) => {
        e.preventDefault();
        const { error } = await supabase.from('devices').insert([
            { serial_number: serialNumber, name: name },
        ]);
        if (error) console.error('Error adding device:', error);
        else alert('Apparaat toegevoegd!');
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {devices.map((device) => (
                    <li key={device.id}>
                        {device.serial_number} - {device.name}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddDevice}>
                <input
                    type="text"
                    placeholder="Serienummer"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Naam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Voeg apparaat toe</button>
            </form>
        </div>
    );
}


export async function getServerSideProps() {
    const { data: devices, error } = await supabase.from('devices').select('*');

    console.log('Devices Error:', error); // Debugging
    console.log('Devices:', devices); // Debugging
    if (error) {
        console.error('Supabase error:', error);
    }

    return { props: { devices: devices || [] } };
}
