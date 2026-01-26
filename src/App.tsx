import {
  Flex,
  Heading,
  Text,
  AspectRatio,
  Box,
  Carousel,
  Image,
  IconButton,
  Link,
  Accordion,
  Span,
  Button,
  DownloadTrigger,
  Separator,
} from "@chakra-ui/react";
import { forwardRef, useState, useEffect } from "react";
import type { IconButtonProps } from "@chakra-ui/react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { ColorModeButton } from "@/components/ui/color-mode";

// --- Tipos ---
interface ProjectItem {
  type: string;
  src: string;
}

interface AccordionItem {
  value: string;
  title: string;
  text: string;
}

interface ProjectData {
  id: string;
  title: string;
  titleHref: string;
  items: ProjectItem[];
  description: string;
  technologies: string[];
  infrastructure: string[];
  features: AccordionItem[];
  statusText: React.ReactNode;
  links: { label: string; href?: string; disabled?: boolean }[];
}

// --- Helpers ---
const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(function ActionButton(props, ref) {
  return (
    <IconButton
      {...props}
      ref={ref}
      size="xs"
      variant="outline"
      rounded="full"
      position="absolute"
      zIndex="1"
      bg="bg"
    />
  );
});

// --- Componente de Proyecto Reutilizable ---
const ProjectSection = ({ project }: { project: ProjectData }) => {
  return (
    <Flex direction="column" gap="2">
      <Flex w="100%" justify="end">
        <Link fontWeight="bold" href={project.titleHref} target="_blank" rel="noopener noreferrer">
          Ir a la web
          <HiMiniArrowTrendingUp />
        </Link>
      </Flex>

      {/* Carousel */}
      <Carousel.Root
        slideCount={project.items.length}
        position="relative"
        borderRadius="sm"
        border="1px solid"
        borderColor="border"
        overflow="hidden">
        <Carousel.Control width="full" position="relative">
          <Carousel.PrevTrigger asChild>
            <ActionButton insetStart="4">
              <LuChevronLeft />
            </ActionButton>
          </Carousel.PrevTrigger>

          <Carousel.ItemGroup width="full">
            {project.items.map((item, index) => (
              <Carousel.Item key={`${project.id}-item-${index}`} index={index} bg="white">
                <AspectRatio ratio={16 / 9} w="100%">
                  {item.type === "image" ? (
                    <Image src={item.src} alt={`${project.title} ${index + 1}`} objectFit="contain" loading="lazy" />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      controls
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </AspectRatio>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.NextTrigger asChild>
            <ActionButton insetEnd="4">
              <LuChevronRight />
            </ActionButton>
          </Carousel.NextTrigger>

          <Box position="absolute" bottom="6" width="full">
            <Carousel.Indicators boxSize="2" opacity="0.5" _current={{ width: "10", opacity: 1 }} />
          </Box>
        </Carousel.Control>
      </Carousel.Root>

      {/* Descripción */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
        <Heading as="h3" size="lg">
          Descripción
        </Heading>
        <Text color="fg.muted">{project.description}</Text>
      </Flex>

      {/* Tecnologías */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
        <Heading as="h3" size="lg">
          Tecnologías
        </Heading>
        <Flex as="ul" color="fg.muted" gap="4" overflow="auto" listStyleType="none">
          {project.technologies.map((tech, i) => (
            <Flex as="li" key={tech} gap="1rem" align="center" whiteSpace="nowrap">
              {tech}
              {i < project.technologies.length - 1 && <span> · </span>}
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Infraestructura */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
        <Heading as="h3" size="lg">
          Infraestructura
        </Heading>
        <Flex as="ul" color="fg.muted" gap="4" overflow="auto" listStyleType="none">
          {project.infrastructure.map((infra, i) => (
            <Flex as="li" key={infra} gap="1rem" align="center" whiteSpace="nowrap">
              {infra}
              {i < project.infrastructure.length - 1 && <span> · </span>}
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Funcionalidades */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
        <Heading as="h3" size="lg">
          Funcionalidades
        </Heading>
        {/* Corrección: defaultValue apunta al primer elemento real o array vacío */}
        <Accordion.Root collapsible variant="enclosed" defaultValue={[project.features[0]?.value]}>
          {project.features.map((item, index) => (
            <Accordion.Item key={index} value={item.value}>
              <Accordion.ItemTrigger cursor="pointer">
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent bg="bg">
                <Accordion.ItemBody color="fg.muted">{item.text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>

      {/* Estado */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
        <Heading as="h3" size="lg">
          Estado
        </Heading>
        <Text color="fg.muted">{project.statusText}</Text>
      </Flex>

      {/* Links */}
      <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border" bg="bg">
        <Heading as="h3" size="lg">
          Links
        </Heading>
        <Flex gap="4" wrap="wrap">
          {project.links.map((link, i) => (
            // Corrección: Usamos asChild para evitar anidar <button> y <a>
            <Button key={i} size="xs" variant="outline" disabled={link.disabled} asChild={!link.disabled}>
              {link.disabled ? (
                <>
                  {link.label}
                  <HiMiniArrowTrendingUp />
                </>
              ) : (
                <Link
                  fontWeight="bold"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none">
                  {link.label}
                  <HiMiniArrowTrendingUp />
                </Link>
              )}
            </Button>
          ))}
        </Flex>
        <Separator />
        <Text color="fg.error" fontSize="2xs">
          Por motivos de seguridad y privacidad del producto, no puedo compartir los repositorios originales.
          <br />
          Sin embargo, creé estos repositorios con lógica parcial para mostrar la arquitectura y la forma en que se
          desarrolló el proyecto.
        </Text>
      </Flex>
    </Flex>
  );
};

// --- DATA ---
// tecnologías
type TechCategory = {
  id: string;
  title: string;
  items: string[];
};
const techStackData: TechCategory[] = [
  {
    id: "design",
    title: "Diseño UX UI y Experiencia Sonora",
    items: ["Figma", "Canva", "FL Studio", "Ableton Live"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "ChakraUI", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "Prisma", "MySQL", "PostgreSQL"],
  },
  {
    id: "infra",
    title: "Infraestructura & Services",
    items: ["Docker", "Git", "GitHub", "Supabase", "Render", "Vercel", "Railway", "Brevo"],
  },
  {
    id: "platforms",
    title: "CMS",
    items: ["WordPress"],
  },
  {
    id: "org",
    title: "Organización & Productividad",
    items: ["Notion", "ClickUp"],
  },
  {
    id: "others",
    title: "Otros Lenguajes",
    items: ["C", "C++"],
  },
];

const projectsData: ProjectData[] = [
  {
    id: "unexo",
    title: "Unexo",
    titleHref: "https://www.unexoapp.com",
    items: [
      { type: "image", src: "https://res.cloudinary.com/ducvmt3te/image/upload/v1769026903/1_kjtd5h.svg" },
      {
        type: "image",
        src: "https://res.cloudinary.com/ducvmt3te/image/upload/v1769287715/Captura_de_pantalla_2026-01-24_a_la_s_17.48.22_kzr1ku.png",
      },
    ],
    description:
      "Unexo es una plataforma donde estudiantes de la Universidad Nacional de San Juan comparten y acceden a recursos académicos de manera gratuita, facilitando la organización y el aprendizaje colaborativo.",
    technologies: ["TypeScript", "React", "ChakraUI", "Tailwind", "Node.js", "Express", "PostgreSQL", "Prisma"],
    infrastructure: ["Vercel", "Render", "Supabase", "Docker", "Brevo"],
    features: [
      {
        value: "auth-roles",
        title: "Autenticación y Gestión de Roles",
        text: "Sistema completo de autenticación con registro, inicio de sesión y recuperación de contraseña. Gestión de roles jerárquicos (usuario, admin y founder) con control de permisos y accesos. Protección de rutas y acciones sensibles mediante autorización basada en roles y manejo seguro de sesiones y tokens.",
      },
      {
        value: "interaction-content",
        title: "Interacción y Contenido",
        text: "Sistema de contribuciones para la publicación, edición y eliminación de recursos académicos. Interacciones entre usuarios mediante likes, guardado de recursos y comentarios. Sistema de reportes para contenido inapropiado, incorrecto o duplicado, con organización por categorías, materias y etiquetas.",
      },
      {
        value: "admin-moderation",
        title: "Administración y Moderación",
        text: "Panel de usuario para la gestión de perfil, contribuciones y actividad. Panel administrativo para la revisión, aprobación y moderación de contenido. Gestión de reportes, control de calidad del material publicado, sistema de logs para auditoría y visualización de estadísticas y métricas de uso.",
      },
      {
        value: "filters-search",
        title: "Filtros y Búsqueda",
        text: "Sistema de búsqueda avanzada con filtros en cascada. Filtros específicos para contribuciones, usuarios, logs del sistema y reportes, permitiendo una navegación optimizada y un descubrimiento eficiente de contenido relevante.",
      },
      {
        value: "notifications-ads",
        title: "Notificaciones y Publicidad",
        text: "Sistema de notificaciones internas para eventos relevantes dentro de la plataforma. Servicio automático de envío de correos electrónicos para registro, verificación de usuarios, recuperación de contraseña y notificaciones importantes. Gestión de anuncios y espacios publicitarios segmentados con control de visibilidad, duración y estado.",
      },
    ],
    statusText: (
      <>
        Actualmente en producción silenciosa.
        <br />
        El lanzamiento oficial es el 9 de febrero de 2026. Puedes visitar la plataforma en{" "}
        <Link fontWeight="bold" href="https://www.unexoapp.com" target="_blank" rel="noopener noreferrer">
          Unexo
          <HiMiniArrowTrendingUp />
        </Link>
      </>
    ),
    links: [
      // Corrección: Tildes agregadas a 'Código'
      { label: "Código Frontend", href: "https://github.com/FernandoAvZarate/unexo-showcase-frontend" },
      { label: "Código Backend", href: "https://github.com/FernandoAvZarate/unexo-showcase-backend" },
      {
        label: "Proyecto en Figma",
        href: "https://www.figma.com/design/scCTlRc3zS0l8M0e0S03LJ/Unexo?node-id=0-1&t=0DRiE42fu2Mo5GfJ-1",
      },
    ],
  },
  {
    id: "nodo",
    title: "Nodo",
    titleHref: "/",
    items: [
      {
        type: "image",
        src: "https://res.cloudinary.com/ducvmt3te/image/upload/v1769027844/N_4_ljxyo5.svg",
      },
    ],
    description:
      "Nodo es una plataforma de publicidad digital local diseñada para conectar comercios y marcas locales con sitios web y aplicaciones de su misma región. El sistema permite a los anunciantes promocionarse en medios digitales locales reales, mientras que los desarrolladores pueden monetizar sus proyectos sin depender de redes publicitarias globales. Nodo prioriza el contexto local, el contacto directo con los comercios y un modelo de monetización justo, incentivando la creación y sostenimiento de un ecosistema web local rentable.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind", "Node.js", "Nest", "PostgreSQL", "Prisma"],
    infrastructure: ["Vercel", "Render", "Supabase", "Docker"],
    features: [
      {
        value: "advertiser-module",
        title: "Módulo para Anunciantes",
        text: "Panel de gestión orientado a comercios y marcas locales. Permite visualizar en qué sitios web y aplicaciones se están mostrando sus anuncios, junto con métricas clave como impresiones, clics y rendimiento general de las campañas. El módulo prioriza la transparencia y el control, facilitando el seguimiento del impacto real de la publicidad en medios locales.",
      },
      {
        value: "developer-module",
        title: "Módulo para Desarrolladores",
        text: "Espacio dedicado a desarrolladores y propietarios de sitios web o aplicaciones. Permite visualizar la cantidad de anuncios disponibles, impresiones generadas, ingresos estimados y valor de pago por cada 1000 impresiones (CPM), diferenciados según el formato publicitario utilizado.",
      },
      {
        value: "ad-integration",
        title: "Integración de Anuncios mediante Librería",
        text: "Los anuncios se integran a los proyectos mediante la instalación de una librería y el uso de componentes específicos. Esta abstracción simplifica la implementación técnica, permite identificar automáticamente el tipo de anuncio renderizado y asegura una integración consistente en distintos entornos web y mobile.",
      },
      {
        value: "api-endpoints",
        title: "Endpoints y Claves de Integración",
        text: "Sistema de endpoints y claves de acceso para desarrolladores que permite importar anuncios, registrar impresiones y clics, y comunicar eventos relevantes a la plataforma. Este enfoque habilita una integración flexible y escalable, manteniendo control y seguridad en el intercambio de datos.",
      },
      {
        value: "format-aware-monetization",
        title: "Monetización Basada en Formatos",
        text: "Nodo identifica el formato publicitario que se está mostrando (Half Page, Billboard, banners y formatos mobile) y utiliza esta información para calcular métricas e ingresos de manera diferenciada, incentivando el uso de formatos de mayor valor e impacto.",
      },
    ],
    statusText: (
      <>
        El proyecto se encuentra actualmente en desarrollo activo.
        <br />
        Concebido como una iniciativa a largo plazo orientada al crecimiento del ecosistema digital local.
      </>
    ),
    links: [
      { label: "Código Frontend", disabled: true },
      { label: "Código Backend", disabled: true },
      { label: "Documentación Técnica", disabled: true },
    ],
  },

  // {
  //   id: "sentinel",
  //   title: "Sentinel",
  //   titleHref: "/",
  //   items: [
  //     { type: "image", src: "https://res.cloudinary.com/dgtcs3twg/image/upload/v1767798928/Sentinell_qifbmh.svg" },
  //   ],
  //   description:
  //     "Sentinel es una plataforma de gestión operativa para empresas de seguridad privada, diseñada para centralizar la administración de guardias, objetivos y turnos. Permite asignar y controlar turnos de forma semanal, visualizar el estado operativo en tiempo real, gestionar datos de guardias y clientes, y detectar rápidamente faltantes o incidencias. El sistema ofrece un dashboard con métricas clave, herramientas de planificación y acceso rápido a la información crítica, optimizando la organización del personal y reduciendo errores operativos.",
  //   technologies: ["TypeScript", "React", "Next", "ChakraUI", "Tailwind", "Node.js", "Express", "PostgreSQL", "Prisma"],
  //   infrastructure: ["Vercel", "Render", "Supabase", "Docker", "Brevo"],
  //   features: [
  //     {
  //       value: "dashboard-operativo",
  //       title: "Dashboard Operativo",
  //       text: "Panel principal con información crítica en tiempo real: estado general de los turnos, porcentaje de turnos confirmados y pendientes, objetivos con cobertura incompleta y tiempos límite para la generación de turnos semanales. Incluye accesos rápidos a las acciones más frecuentes y un calendario de reuniones operativas en modo control.",
  //     },
  //     {
  //       value: "guardias-gestion",
  //       title: "Gestión de Guardias",
  //       text: "Módulo centralizado para la administración del personal de seguridad. Permite registrar, editar y consultar información de los guardias, visualizar su estado laboral, datos de contacto y asignaciones actuales. Incluye búsqueda y filtros por estado, objetivo o supervisor, con acceso a fichas individuales detalladas.",
  //     },
  //     {
  //       value: "objetivos-turnos",
  //       title: "Gestión de Objetivos y Turnos",
  //       text: "Administración de objetivos (clientes o locaciones) con definición de turnos operativos por franja horaria. Configuración de horarios, cantidad de guardias requeridos y asignación de personal por turno. Visualización clara de turnos completos, incompletos o pendientes para una planificación eficiente.",
  //     },
  //     {
  //       value: "asignacion-planificacion",
  //       title: "Asignación y Planificación Semanal",
  //       text: "Herramientas específicas para la generación y asignación de turnos semanales. Permite detectar rápidamente faltantes de cobertura, reasignar guardias y mantener el control sobre la planificación operativa sin interferir con el dashboard de monitoreo.",
  //     },
  //     {
  //       value: "control-estado",
  //       title: "Control Operativo y Seguimiento",
  //       text: "Sistema de seguimiento del estado de los guardias y los objetivos. Permite identificar licencias, bajas, ausencias y situaciones operativas especiales. Facilita la toma de decisiones rápidas ante imprevistos y mejora la trazabilidad de la operación.",
  //     },
  //   ],
  //   statusText: (
  //     <>
  //       El proyecto se encuentra actualmente en desarrollo.
  //       <br />
  //       El lanzamiento estimado está previsto para junio de 2026.
  //     </>
  //   ),
  //   links: [
  //     { label: "Código Frontend", disabled: true },
  //     { label: "Código Backend", disabled: true },
  //     { label: "Proyecto en Figma", disabled: true },
  //   ],
  // },
];

// Experiencia
type ExperienceItem = {
  id: string;
  period: string;
  role: string;
};
const experienceData: ExperienceItem[] = [
  {
    id: "fs-2022",
    period: "2022 - 2024",
    role: "Profesor de Música (Establecimiento educativo público)",
  },
  {
    id: "fs-2024",
    period: "2024 - Presente",
    role: "Desarrollador Web Full Stack (Freelance)",
  },
];

// Estudios
type StudyItem = {
  id: string;
  period: string;
  title: string;
};
const studiesData: StudyItem[] = [
  {
    id: "music",
    period: "2016 - 2021",
    title: "Profesor de Música (ISSC)",
  },
  {
    id: "web",
    period: "2025 - Presente",
    title: "Técnico en Programación Web (Universidad Nacional de San Juan)",
  },
];

export default function App() {
  const [data, setData] = useState<Blob | null>(null);

  useEffect(() => {
    fetch("/cv_fernandozarate_2026ab.pdf")
      .then((res) => res.blob())
      .then(setData)
      .catch((err) => console.error("Error loading CV:", err));
  }, []);

  return (
    <Flex paddingBlock="8" paddingInline="4" m="auto" w="100%" maxW="800px" direction="column" gap="16">
      {/* nombre */}
      <Flex gap="4" justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Fernando Aníbal del Valle Zárate
        </Heading>
        <ColorModeButton />
      </Flex>

      {/* Sobre mí */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Desarrollador Web Full Stack
        </Heading>
        <Text color="fg.muted">
          Desarrollador Web Full Stack con capacidad para crear productos completos end-to-end, integrando diseño UX/UI,
          desarrollo Frontend y Backend, y asegurando arquitecturas robustas y lógica de negocio eficiente. Experiencia
          en despliegue y mantenimiento de aplicaciones, con visión de producto para transformar objetivos y necesidades
          del usuario en soluciones técnicas y funcionales.
        </Text>
      </Flex>

      {/* Tecnologías */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Tecnologías y herramientas
        </Heading>
        <Flex direction="column" gap="2">
          {techStackData.map((category) => (
            <Flex
              p="2"
              key={category.id}
              direction="column"
              gap="2"
              borderRadius="sm"
              border="1px solid"
              borderColor="border">
              <Heading as="h3" size="md">
                {category.title}
              </Heading>
              <Separator />
              <Flex as="ul" wrap="wrap" columnGap="4" rowGap="2" listStyleType="none" color="fg.muted" fontSize="sm">
                {category.items.map((tech, i) => (
                  <Flex as="li" key={tech} gap="1rem" align="center" whiteSpace="nowrap">
                    {tech}
                    {i < category.items.length - 1 && <span> · </span>}
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Proyectos */}
      <Flex direction="column" gap="8">
        <Heading as="h2" size="2xl">
          Proyectos Full Stack
        </Heading>
        {/* Accordion para proyectos */}
        <Accordion.Root p="2" collapsible variant="enclosed">
          {projectsData.map((project) => (
            <Accordion.Item key={project.id} value={project.id}>
              {/* Header */}
              <Accordion.ItemTrigger cursor="pointer" bg="bg">
                <Span flex="1">{project.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>

              {/* Contenido */}
              <Accordion.ItemContent bg="bg">
                <Accordion.ItemBody>
                  <ProjectSection project={project} />
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>

      {/* Experiencia */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Experiencia
        </Heading>
        <Flex direction="column" gap="2">
          {experienceData.map((exp) => (
            <Flex
              p="2"
              key={exp.id}
              minH="60px"
              gap="2"
              justify="space-between"
              align="center"
              borderRadius="sm"
              border="1px solid"
              borderColor="border">
              <Heading flex="1" as="h3" size="md">
                {exp.period}
              </Heading>
              <Flex
                flex="1"
                as="ul"
                justify="flex-end"
                gap="6"
                wrap="wrap"
                listStyleType="none"
                color="fg.muted"
                fontSize="sm">
                <Text>{exp.role}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Estudios */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Estudios formales
        </Heading>
        <Flex direction="column" gap="2">
          {studiesData.map((study) => (
            <Flex
              p="2"
              key={study.id}
              minH="60px"
              gap="2"
              justify="space-between"
              align="center"
              borderRadius="sm"
              border="1px solid"
              borderColor="border">
              <Heading flex="1" as="h3" size="md">
                {study.period}
              </Heading>
              <Flex
                flex="1"
                as="ul"
                justify="flex-end"
                gap="6"
                wrap="wrap"
                listStyleType="none"
                color="fg.muted"
                fontSize="sm">
                <Text>{study.title}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Contacto */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl" textAlign={{ base: "center", md: "left" }}>
          Contacto
        </Heading>
        <Flex direction="column" gap="2">
          <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
            <Text color="fg.muted" fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", md: "left" }}>
              Escríbeme a{" "}
              <Link fontWeight="bold" href="mailto:zaratefernandoanibal@gmail.com">
                zaratefernandoanibal@gmail.com
              </Link>
            </Text>
            <Flex gap="4" wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
              <Button size="xs" variant="outline" asChild>
                <Link
                  fontWeight="bold"
                  href="https://github.com/FernandoAvZarate"
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none">
                  Github <HiMiniArrowTrendingUp />
                </Link>
              </Button>
              <Button size="xs" variant="outline" asChild>
                <Link
                  fontWeight="bold"
                  href="https://www.linkedin.com/in/fernandozaratedev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none">
                  Linkedin <HiMiniArrowTrendingUp />
                </Link>
              </Button>
            </Flex>
          </Flex>
          <Flex p="2" direction="column" gap="2" borderRadius="sm" border="1px solid" borderColor="border">
            <Text color="fg.muted" fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", md: "left" }}>
              ¿Quieres más información?
            </Text>
            {data ? (
              <DownloadTrigger data={data} fileName="cv_fernandozarate_2026ab.pdf" mimeType="application/pdf" asChild>
                <Button variant="outline" fontWeight="bold">
                  Descargar CV
                </Button>
              </DownloadTrigger>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
