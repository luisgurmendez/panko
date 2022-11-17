// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    events: Partial<VibraEvent>[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>

) {

    const events = [
        { title: "The Hu Fest", img: "https://redtickets.uy/s3/imagenes/8baf4066-99fa-418b-80c2-52b150e5a1de_Event_8726.jpg", date: "Viernes 18 de Noviembre", direction: "êmile", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "MEGA WONDER en CARPA GIGANTE EN LA RAMBLA", img: "https://redtickets.uy/s3/imagenes/1608768c-0493-4601-b19b-35baa829ebe3_Event_8933.jpg", date: "Viernes 18 de Noviembre", direction: "Rambla Club de Golf", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "GRAN BAILE DE MASCARAS EN EL CASTILLO PITTAMIGLIO", img: "https://redtickets.uy/s3/imagenes/27e5f9dc-5e27-4244-98e9-248da41a6dbd_Event_0.jpg", date: "Viernes 18 de Noviembre", direction: "Castillo Pittamiglio | castillo del alquimista UNIVERSO PITTAMIGLIO", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "PM · La última del año!", img: "https://redtickets.uy/s3/imagenes/685dc1d6-cb72-411b-8460-6b2b3f6747eb_Event_8906.jpg", date: "Viernes 18 de Noviembre", direction: "Sala del Museo del Carnaval", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "Inauguración L Club", img: "https://redtickets.uy/s3/imagenes/20320e26-7a19-4228-86f7-1e0f7460d36a_Event_8993.jpg", date: "Sábado 19 de Noviembre", direction: "Avenida Uruguay 1136", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
        { title: "EL CLUB DE LA CUMBIA  Fin  de Año", img: "https://redtickets.uy/s3/imagenes/b0a1bfd0-1812-43d7-a211-736ec65f0843_Event_8786.jpg", date: "Jueves 8 de Diciembre", direction: "Edificio Torres del Nuevo Mundo", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
    ]

    res.status(200).json({ events: events })
}

interface VibraEvent {
    category: string;
    title: string;
    location: string;
    description: string;
    date: string;
    img: string;
}