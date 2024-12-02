import { supabase } from '../utils/supabase';

// error message verwijdert. 
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
