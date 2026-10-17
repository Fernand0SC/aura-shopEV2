export const regiones = [
    {
        id: 'rm', nombre: 'Región Metropolitana de Santiago', comunas: [
            { id: 'santiago', nombre: 'Santiago' },
            { id: 'puente-alto', nombre: 'Puente Alto' },
            { id: 'maipu', nombre: 'Maipú' },
            { id: 'las-condes', nombre: 'Las Condes' },
            { id: 'la-florida', nombre: 'La Florida' },
            { id: 'providencia', nombre: 'Providencia' },
            { id: 'nunoa', nombre: 'Ñuñoa' },
        ],
    },
    {
        id: 'nuble', nombre: 'Región de Ñuble', comunas: [
            { id: 'chillan', nombre: 'Chillán' },
            { id: 'chillan-viejo', nombre: 'Chillán Viejo' },
            { id: 'san-carlos', nombre: 'San Carlos' },
        ],
    },
    {
        id: 'araucania', nombre: 'Región de la Araucanía', comunas: [
            { id: 'temuco', nombre: 'Temuco' },
            { id: 'padre-las-casas', nombre: 'Padre Las Casas' },
            { id: 'villarrica', nombre: 'Villarrica' },
        ],
    },
];

export const obtenerRegion = (id) => regiones.find((r) => r.id === id) || null;
export const nombreRegion = (id) => obtenerRegion(id)?.nombre || id || '';
export const nombreComuna = (regionId, comunaId) =>
    obtenerRegion(regionId)?.comunas.find((c) => c.id === comunaId)?.nombre || comunaId || '';