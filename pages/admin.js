import { supabase } from '../utils/supabase'; // Zorg dat dit verwijst naar jouw Supabase-client

export async function getServerSideProps() {
    const { data: devices, error } = await supabase.from('devices').select('*');

    console.log('Devices:', devices); // Debugging
    if (error) {
        console.error('Supabase error:', error);
    }

    return { props: { devices: devices || [] } };
}


export default function AdminPage({ devices }) {
    return (
        <div>
            <h1>Admin Dashboard</h1>

            {/* Controleer of er apparaten zijn */}
            {devices.length === 0 ? (
                <p>Geen apparaten gevonden.</p>
            ) : (
                <ul>
                    {/* Gebruik map om apparaten weer te geven */}
                    {devices.map((device) => (
                        <li key={device.id}>
                            {device.serial_number || 'Geen serienummer'} - {device.name || 'Naam onbekend'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
