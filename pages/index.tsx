import type { NextPage } from 'next'
import CityBanner from '../components/Banner/CityBanner';
import CategorySlider from '../components/CategorySlider/CategorySlider';
import PageContainer from '../components/PageContainer';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <CityBanner />
      <CategorySlider events={events} category='Playa' />
      <CategorySlider events={events2} category='Noche' />
      <CategorySlider events={events3} category='Afuera' />
    </PageContainer>

  )
}

export default Home

const events = [
  { title: "The Hu Fest", img: "https://redtickets.uy/s3/imagenes/8baf4066-99fa-418b-80c2-52b150e5a1de_Event_8726.jpg", date: "Viernes 18 de Noviembre", direction: "êmile", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "MEGA WONDER en CARPA GIGANTE EN LA RAMBLA", img: "https://redtickets.uy/s3/imagenes/1608768c-0493-4601-b19b-35baa829ebe3_Event_8933.jpg", date: "Viernes 18 de Noviembre", direction: "Rambla Club de Golf", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "GRAN BAILE DE MASCARAS EN EL CASTILLO PITTAMIGLIO", img: "https://redtickets.uy/s3/imagenes/27e5f9dc-5e27-4244-98e9-248da41a6dbd_Event_0.jpg", date: "Viernes 18 de Noviembre", direction: "Castillo Pittamiglio | castillo del alquimista UNIVERSO PITTAMIGLIO", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "PM · La última del año!", img: "https://redtickets.uy/s3/imagenes/685dc1d6-cb72-411b-8460-6b2b3f6747eb_Event_8906.jpg", date: "Viernes 18 de Noviembre", direction: "Sala del Museo del Carnaval", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "Inauguración L Club", img: "https://redtickets.uy/s3/imagenes/20320e26-7a19-4228-86f7-1e0f7460d36a_Event_8993.jpg", date: "Sábado 19 de Noviembre", direction: "Avenida Uruguay 1136", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "LA FENIX: CAP. 4 - EL RENACIMIENTO", img: "https://redtickets.uy/s3/imagenes/f3a61bc7-dca8-4457-bbc6-173326c46d93_Event_8950.jpg", date: "Viernes 2 de Diciembre", direction: "COMPLEJO SALA SHOW", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "EL CLUB DE LA CUMBIA  Fin  de Año", img: "https://redtickets.uy/s3/imagenes/b0a1bfd0-1812-43d7-a211-736ec65f0843_Event_8786.jpg", date: "Jueves 8 de Diciembre", direction: "Edificio Torres del Nuevo Mundo", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },

]


const events2 = [
  { title: "Experiencia Savoy", img: "https://redtickets.uy/s3/imagenes/eb095355-46bc-4605-9914-10ebba7b460b_Event_8884.jpg", date: "Sábado 19 de Noviembre", direction: "El Chamuyo", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "#TaylorPartyUY: Midnights Edition", img: "https://redtickets.uy/s3/imagenes/dccb7f69-063b-4e31-9369-cb7d136dbe71_Event_0.jpg", date: "Domingo 20 de Noviembre", direction: "Sala del Museo del Carnaval", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "O Som da Rua - 10 años de samba!", img: "https://redtickets.uy/s3/imagenes/a9f27a50-c785-4ebf-9405-4f77fd090fcc_Event_0.jpg", date: "Viernes 25 de Noviembre", direction: "El Chamuyo", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "SUMMER23", img: "https://redtickets.uy/s3/imagenes/17d89026-fb58-4ce0-8994-d7c50da09291_Event_0.jpg", date: "Viernes 25 de Noviembre", direction: "Carrasco", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "Fiesta fin de curso Cluster Ciudad Universitaria", img: "https://redtickets.uy/s3/imagenes/cdbbfcea-fdd1-4c72-b4e1-a79550d04eab_Event_8853.jpg", date: "Viernes 25 de Noviembre", direction: "OVO Nightclub", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "BAKAN", img: "https://redtickets.uy/s3/imagenes/bb6f08c0-8669-4512-923b-c29642d401ae_Event_0.jpg", date: "Sábado 26 de Noviembre", direction: "Avenida Uruguay 1136", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "ELECTRIKA EDITION VIII", img: "https://redtickets.uy/s3/imagenes/bcb73157-ea7c-4e13-b7ef-91bb9a3909a0_Event_0.jpg", date: "Sábado 26 de Noviembre", direction: "Leyenda", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "ROCKET teens", img: "https://redtickets.uy/s3/imagenes/483dc0ea-dc2a-4b8f-a9f1-b2fa956c1a23_Event_8980.jpg", date: "Viernes 2 de Diciembre", direction: "Mandarine", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "Fiesta SAFA Universitario 2022", img: "https://redtickets.uy/s3/imagenes/48d4105c-9021-4c53-b93c-9c4f2e70a9d0_Event_8554.jpg", date: "Viernes 2 de Diciembre", direction: "Salón Colonial", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "ARDE FUSSION", img: "https://redtickets.uy/s3/imagenes/a55bc563-7baf-4679-ae52-0bb85e8c6b83_Event_8951.jpg", date: "Viernes 2 de Diciembre", direction: "PYG", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
]

const events3 = [
  { title: "Opening fest", img: "https://redtickets.uy/s3/imagenes/d98b7f67-4f21-4e01-af78-9d20eea92049_Event_0.jpg", date: "Viernes 9 de Diciembre", direction: "La Augusta Fiestas y Eventos", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "COMÚN FIESTÚN", img: "https://redtickets.uy/s3/imagenes/4e0720b8-5576-4b59-bd9d-296087c79478_Event_0.jpg", date: "Viernes 9 de Diciembre", direction: "El Imperio", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "BRESH", img: "https://redtickets.uy/s3/imagenes/f8b19017-0fd9-4657-84b2-f4e0f6eef5a2_Event_8932.jpg", date: "Viernes 9 de Diciembre", direction: "Edificio Torres del Nuevo Mundo", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "Hey Chopp 8 años", img: "https://redtickets.uy/s3/imagenes/00bbb691-e9a3-49fb-8dbc-f2fe1b2fa4ba_Event_0.jpg", date: "Sábado 10 de Diciembre", direction: "Hey Chopp", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
  { title: "GOCC 7", img: "https://redtickets.uy/s3/imagenes/731b19a8-68ef-4b5d-b050-26c3ed492de8_Event_8942.jpg", date: "Sábado 10 de Diciembre", direction: "Old Christians Club", link: "https://redtickets.uy/evento/The-Hu-Fest/8726" },
]