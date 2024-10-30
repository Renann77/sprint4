import React, { useState } from 'react';

interface DamageReportFormProps {
    onSubmit: (report: { vehicle: string; damageDescription: string }) => void;
}

const DamageReportForm: React.FC<DamageReportFormProps> = ({ onSubmit }) => {
    const [vehicle, setVehicle] = useState('');
    const [damageDescription, setDamageDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (vehicle && damageDescription) {
            onSubmit({ vehicle, damageDescription });
            setVehicle('');
            setDamageDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#061f2c] p-4 rounded shadow">
            <div className="mb-4">
                <label htmlFor="vehicle" className="block text-white">Veículo e Modelo:</label>
                <input
                    type="text"
                    id="vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    placeholder="Insira o nome do veículo"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="damageDescription" className="block text-white">Descrição de Danos:</label>
                <textarea
                    id="damageDescription"
                    value={damageDescription}
                    onChange={(e) => setDamageDescription(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    placeholder="Descrição de danos"
                />
            </div>
            <button type="submit" className="bg-[#C0A554] text-[#061f2c] p-2 rounded w-full">
                Reportar
            </button>
        </form>
    );
};

export default DamageReportForm;
