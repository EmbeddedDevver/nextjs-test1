import { supabase } from '../utils/supabase';

export async function getServerSideProps() {
    const { data: devices, error } = await supabase.from('devices').select('*');

    if (error) {
        console.error(error); // Log de fout naar de console
    }

    return { props: { devices: data || [] } };
}


export default function AdminPage({ devices }) {
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
        </div>
    );
}
