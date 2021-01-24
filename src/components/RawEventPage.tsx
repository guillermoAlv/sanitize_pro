// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicRawEventPage,
  DefaultRawEventPageProps
} from "./plasmic/sanitize/PlasmicRawEventPage";
import FieldContainer from "./FieldContainer"
import EventSelector from "./EventSelector"

import titleIconpng from "./plasmic/sanitize/images/titleIconpng.png";
import categoryIconpng from "./plasmic/sanitize/images/categoryIconpng.png"; 
import datesIconpng from "./plasmic/sanitize/images/datesIconpng.png"; 
import descriptionIconpng from "./plasmic/sanitize/images/descriptionIconpng.png";
import locationIconpng from "./plasmic/sanitize/images/locationIconpng.png";
import pricesIconpng from "./plasmic/sanitize/images/pricesIconpng.png";
import featuredImageIcon from "./plasmic/sanitize/images/image10Png.png";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface RawEventPageProps extends Omit<DefaultRawEventPageProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultRawEventPageProps altogether and have
// total control over the props for your component.
interface RawEventPageProps extends DefaultRawEventPageProps {
  backF: ()=>{}
  nextF: ()=>{}
  event: {
    nombre_actividad: string,
    descripcion_actividad: string,
    precio_max: number,
    precio_min: number,
    fecha_inicio: string,
    fecha_fin: string,
    formatted_address: string,
    imagen_destacada: string,
    url_fuente: string,
    categorias: string
  }
}

function RawEventPage({event, backF, nextF, ...props}: RawEventPageProps) {
  // Use PlasmicRawEventPage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicRawEventPage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all RawEventPageProps here, but feel free
  // to do whatever works for you.
  return <PlasmicRawEventPage 
    titleFieldContainer={<FieldContainer icon={titleIconpng} contenido={<h3> <a target="_blank" rel="noreferrer" href={event['url_fuente']}> {event['nombre_actividad']}</a></h3>}/>} 
    descriptionFieldContainer={<FieldContainer icon={descriptionIconpng} contenido={event['descripcion_actividad']}/>}
    categoriesFieldContainer={<FieldContainer icon={categoryIconpng} contenido={event['categorias']}/>}
    pricesFieldContainer={<FieldContainer icon={pricesIconpng} contenido={<div>Precio mínimo: {event['precio_max']/100} €<br/>Precio máximo: {event['precio_max']/100} €</div>}/>} 
    datesFieldContainer={<FieldContainer icon={datesIconpng} contenido={<div>Fecha inicio: {event['fecha_inicio']}<br/>Fecha fin: {event['fecha_fin']} </div>}/>}
    locationFieldContainer={<FieldContainer icon={locationIconpng} contenido={event['formatted_address']}/>}
    featuredImageFieldContainer={<FieldContainer icon={featuredImageIcon} contenido={<img alt='featured' style={{height: "100%"}} src={event['imagen_destacada']}/>}/>}
    buttonsFieldContainer={<EventSelector backFunc={backF}  forwardFunc={nextF}/>}
    {...props} />;
}

export default RawEventPage;