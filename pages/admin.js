import { supabase } from '../utils/supabase'; // Zorg dat dit verwijst naar jouw Supabase-client

export async function getServerSideProps() {
    // Haal de apparaten op vanuit de 'devices'-tabel
    const { data: devices, error } = await supabase.from('devices').select('*');

    if (error) {
        console.error('Error fetching devices:', error); // Log eventuele fouten
    }

    // Retourneer altijd een array, zelfs als er geen data is
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
