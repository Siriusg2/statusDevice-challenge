import React from "react";
import style from './Table.module.css'

function DeviceTable() {
    return (
        <div>
            <table className={style.device}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Batería</th>
                        <th>Estado</th>
                        <th>SOS</th>
                        <th>Wi-Fi</th>
                        <th>Propietario</th>
                        <th>Contactos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dato 1</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                        <td>Dato 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DeviceTable;