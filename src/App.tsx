import {
  Flex,
  Heading,
  Text,
  AspectRatio,
  Box,
  Carousel,
  Image,
  IconButton,
  Separator,
  Link,
  Accordion,
  Span,
  Button,
  DownloadTrigger,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { useState, useEffect } from "react";
import type { IconButtonProps } from "@chakra-ui/react";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { ColorModeButton } from "@/components/ui/color-mode";

// helpers
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

// Unexo
const unexoItems = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dgtcs3twg/image/upload/v1767798701/Unexo_2_diw2ge.svg",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dgtcs3twg/video/upload/v1767800691/0107_hm3gz1.mov",
  },
];

const unexo_acordeon = [
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
];

// Sentinel
const sentinelItems = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dgtcs3twg/image/upload/v1767798928/Sentinell_qifbmh.svg",
  },
];
const sentinel_acordeon = [
  {
    value: "dashboard-operativo",
    title: "Dashboard Operativo",
    text: "Panel principal con información crítica en tiempo real: estado general de los turnos, porcentaje de turnos confirmados y pendientes, objetivos con cobertura incompleta y tiempos límite para la generación de turnos semanales. Incluye accesos rápidos a las acciones más frecuentes y un calendario de reuniones operativas en modo control.",
  },
  {
    value: "guardias-gestion",
    title: "Gestión de Guardias",
    text: "Módulo centralizado para la administración del personal de seguridad. Permite registrar, editar y consultar información de los guardias, visualizar su estado laboral, datos de contacto y asignaciones actuales. Incluye búsqueda y filtros por estado, objetivo o supervisor, con acceso a fichas individuales detalladas.",
  },
  {
    value: "objetivos-turnos",
    title: "Gestión de Objetivos y Turnos",
    text: "Administración de objetivos (clientes o locaciones) con definición de turnos operativos por franja horaria. Configuración de horarios, cantidad de guardias requeridos y asignación de personal por turno. Visualización clara de turnos completos, incompletos o pendientes para una planificación eficiente.",
  },
  {
    value: "asignacion-planificacion",
    title: "Asignación y Planificación Semanal",
    text: "Herramientas específicas para la generación y asignación de turnos semanales. Permite detectar rápidamente faltantes de cobertura, reasignar guardias y mantener el control sobre la planificación operativa sin interferir con el dashboard de monitoreo.",
  },
  {
    value: "control-estado",
    title: "Control Operativo y Seguimiento",
    text: "Sistema de seguimiento del estado de los guardias y los objetivos. Permite identificar licencias, bajas, ausencias y situaciones operativas especiales. Facilita la toma de decisiones rápidas ante imprevistos y mejora la trazabilidad de la operación.",
  },
];

export default function App() {
  const [data, setData] = useState<Blob | null>(null);

  useEffect(() => {
    fetch("/fernandozarate_portfolio.pdf")
      .then((res) => res.blob())
      .then(setData);
  }, []);

  return (
    <Flex paddingBlock="12" paddingInline="4" m="auto" w="100%" maxW="800px" direction="column" gap="12">
      {/* nombre */}
      <Flex gap="4" justify="space-between">
        <Heading as="h1" size="lg">
          Fernando Aníbal del Valle Zárate
        </Heading>
        <ColorModeButton />
      </Flex>

      {/* Sobre mí */}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Full Stack Designer
        </Heading>
        <Text color="fg.muted">
          Desarrollador web full stack. Trabajo como freelancer y soy fundador de{" "}
          <Link fontWeight="bold" href="https://byprotolab.vercel.app/" target="_blank" rel="noopener noreferrer">
            Protolab
          </Link>
          , donde desarrollo aplicaciones web ocupándome del diseño, la interfaz de usuario y la programación tanto del
          frontend como del backend.
        </Text>
      </Flex>
      {/* Tecnologías y Herramientas de Desarrollo*/}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Tecnologías y Herramientas de Desarrollo
        </Heading>
        <Flex gap="32" color="fg.muted">
          <Flex as="ul" direction="column">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>C</li>
            <li>C++</li>
          </Flex>
          <Flex as="ul" direction="column">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
            <li>Docker</li>
            <li>WordPress</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Canvas</li>
            <li>Notion</li>
          </Flex>
        </Flex>
      </Flex>
      {/*Proyectos*/}
      <Flex direction="column" gap="8">
        <Heading as="h2" size="2xl">
          Proyectos
        </Heading>
        <Separator />
        {/* ======================================================== */}
        {/* proyectos-titulo */}
        <Heading as="h3" size="lg" textAlign="center">
          <Link href="https://www.unexoapp.com" target="_blank" rel="noopener noreferrer">
            Unexo
          </Link>
        </Heading>
        {/* proyectos-carousel */}
        <Carousel.Root
          slideCount={unexoItems.length}
          autoplay={{ delay: 4000 }}
          position="relative"
          border="1px solid"
          borderColor="gray.200"
          overflow="hidden">
          <Carousel.Control width="full" position="relative">
            {/* Prev */}
            <Carousel.PrevTrigger asChild>
              <ActionButton insetStart="4">
                <LuChevronLeft />
              </ActionButton>
            </Carousel.PrevTrigger>

            {/* Slides */}
            <Carousel.ItemGroup width="full">
              {unexoItems.map((item, index) => (
                <Carousel.Item key={item.src} index={index}>
                  <AspectRatio ratio={16 / 9} w="100%">
                    {item.type === "image" ? (
                      <Image src={item.src} alt={`Proyecto ${index + 1}`} objectFit="contain" loading="lazy" />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        loop
                        autoPlay
                        controls
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </AspectRatio>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            {/* Next */}
            <Carousel.NextTrigger asChild>
              <ActionButton insetEnd="4">
                <LuChevronRight />
              </ActionButton>
            </Carousel.NextTrigger>

            {/* Indicators */}
            <Box position="absolute" bottom="6" width="full">
              <Carousel.Indicators boxSize="2" opacity="0.5" _current={{ width: "10", opacity: 1 }} />
            </Box>
          </Carousel.Control>
        </Carousel.Root>
        {/* proyectos-descripción */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Descripción
          </Heading>
          <Text color="fg.muted">
            Unexo es una plataforma donde estudiantes de la Universidad Nacional de San Juan comparten y acceden a
            recursos académicos de manera gratuita, facilitando la organización y el aprendizaje colaborativo.
          </Text>
        </Flex>
        {/* proyectos-tecnologías */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Tecnologías
          </Heading>
          <Flex as="ul" color="fg.muted" gap="4" overflow="auto">
            <li>TypeScript</li>-<li>React</li>-<li>ChakraUI</li>-<li>Tailwind</li>-<li>Node.js</li>-<li>Express</li>-
            <li>PostgreSQL</li>-<li>Prisma</li>
          </Flex>
        </Flex>
        {/* proyectos-infraestructura */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Infraestructura
          </Heading>
          <Flex as="ul" color="fg.muted" gap="4" overflow="auto">
            <li>Vercel</li>-<li>Render</li>-<li>Supabase</li>-<li>Docker</li>-<li>Brevo</li>
          </Flex>
        </Flex>
        {/* proyectos-funcionalidades */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Funcionalidades
          </Heading>
          <Accordion.Root
            py="4"
            px="2"
            variant="subtle"
            collapsible
            defaultValue={["a"]}
            border="1px solid"
            borderColor="gray.200">
            {unexo_acordeon.map((item, index) => (
              <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger cursor="pointer">
                  <Span flex="1">{item.title}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Flex>
        {/* proyectos-estado */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Estado
          </Heading>
          <Text color="fg.muted">
            Actualmente en producción silenciosa.
            <br />
            El lanzamiento oficial es el 9 de febrero de 2026. Puedes visitar la plataforma en{" "}
            <Link fontWeight="bold" href="https://www.unexoapp.com" target="_blank" rel="noopener noreferrer">
              Unexo
              <HiMiniArrowTrendingUp />
            </Link>
          </Text>
        </Flex>
        {/* proyectos-links*/}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Links
          </Heading>

          <Flex gap="4" wrap="wrap">
            <Button size="xs" variant="outline">
              <Link
                fontWeight="bold"
                // href="https://www.linkedin.com/in/fernandozaratedev/"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none">
                Codigo Frontend
                <HiMiniArrowTrendingUp />
              </Link>
            </Button>
            <Button size="xs" variant="outline">
              <Link
                fontWeight="bold"
                // href="https://www.linkedin.com/in/fernandozaratedev/"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none">
                Codigo Backend
                <HiMiniArrowTrendingUp />
              </Link>
            </Button>
            <Button size="xs" variant="outline">
              <Link
                fontWeight="bold"
                // href="https://www.linkedin.com/in/fernandozaratedev/"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none">
                Proyecto en Figma
                <HiMiniArrowTrendingUp />
              </Link>
            </Button>
          </Flex>
          <Text color="fg.error" fontSize="xs">
            Por motivos de seguridad y privacidad del producto, no puedo compartir los repositorios originales.
            <br />
            Sin embargo, creé estos repositorios con lógica parcial para mostrar la arquitectura y la forma en que se
            desarrolló el proyecto.
          </Text>
        </Flex>
        <Separator />
        {/* ======================================================== */}
        {/* proyectos-titulo */}
        <Heading as="h3" size="lg" textAlign="center">
          <Link href="/" target="_blank" rel="noopener noreferrer">
            Sentinel
          </Link>
        </Heading>
        {/* proyectos-carousel */}
        <Carousel.Root
          slideCount={sentinelItems.length}
          autoplay={{ delay: 4000 }}
          position="relative"
          border="1px solid"
          borderColor="gray.200"
          overflow="hidden">
          <Carousel.Control width="full" position="relative">
            {/* Prev */}
            <Carousel.PrevTrigger asChild>
              <ActionButton insetStart="4">
                <LuChevronLeft />
              </ActionButton>
            </Carousel.PrevTrigger>

            {/* Slides */}
            <Carousel.ItemGroup width="full">
              {sentinelItems.map((item, index) => (
                <Carousel.Item key={item.src} index={index}>
                  <AspectRatio ratio={16 / 9} w="100%">
                    {item.type === "image" ? (
                      <Image src={item.src} alt={`Proyecto ${index + 1}`} objectFit="contain" loading="lazy" />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        loop
                        autoPlay
                        controls
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </AspectRatio>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            {/* Next */}
            <Carousel.NextTrigger asChild>
              <ActionButton insetEnd="4">
                <LuChevronRight />
              </ActionButton>
            </Carousel.NextTrigger>

            {/* Indicators */}
            <Box position="absolute" bottom="6" width="full">
              <Carousel.Indicators boxSize="2" opacity="0.5" _current={{ width: "10", opacity: 1 }} />
            </Box>
          </Carousel.Control>
        </Carousel.Root>
        {/* proyectos-descripción */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Descripción
          </Heading>
          <Text color="fg.muted">
            Sentinel es una plataforma de gestión operativa para empresas de seguridad privada, diseñada para
            centralizar la administración de guardias, objetivos y turnos. Permite asignar y controlar turnos de forma
            semanal, visualizar el estado operativo en tiempo real, gestionar datos de guardias y clientes, y detectar
            rápidamente faltantes o incidencias. El sistema ofrece un dashboard con métricas clave, herramientas de
            planificación y acceso rápido a la información crítica, optimizando la organización del personal y
            reduciendo errores operativos.
          </Text>
        </Flex>
        {/* proyectos-tecnologías */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Tecnologías
          </Heading>
          <Flex as="ul" color="fg.muted" gap="4" overflow="auto">
            <li>TypeScript</li>-<li>React</li>-<li>Next</li>-<li>ChakraUI</li>-<li>Tailwind</li>-<li>Node.js</li>-
            <li>Express</li>-<li>PostgreSQL</li>-<li>Prisma</li>
          </Flex>
        </Flex>
        {/* proyectos-infraestructura */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Infraestructura
          </Heading>
          <Flex as="ul" color="fg.muted" gap="4" overflow="auto">
            <li>Vercel</li>-<li>Render</li>-<li>Supabase</li>-<li>Docker</li>-<li>Brevo</li>
          </Flex>
        </Flex>
        {/* proyectos-funcionalidades */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Funcionalidades
          </Heading>
          <Accordion.Root
            py="4"
            px="2"
            variant="subtle"
            collapsible
            defaultValue={["a"]}
            borderRadius="sm"
            border="1px solid"
            borderColor="gray.200">
            {sentinel_acordeon.map((item, index) => (
              <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger cursor="pointer">
                  <Span flex="1">{item.title}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Flex>
        {/* proyectos-estado */}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Estado
          </Heading>
          <Text color="fg.muted">
            El proyecto se encuentra actualmente en desarrollo.
            <br />
            El lanzamiento estimado está previsto para junio de 2026.
            {/* <Link fontWeight="bold" href="" target="_blank" rel="noopener noreferrer">
              Sentinel
              <HiMiniArrowTrendingUp />
            </Link> */}
          </Text>
        </Flex>
        {/* proyectos-links*/}
        <Flex direction="column" gap="2">
          <Heading as="h3" size="lg">
            Links
          </Heading>

          <Flex gap="4" wrap="wrap">
            <Button disabled size="xs">
              {/* <Link color="fg.inverted"> */}
              Codigo Frontend
              <HiMiniArrowTrendingUp />
              {/* </Link> */}
            </Button>
            <Button disabled size="xs">
              {/* <Link color="fg.inverted"> */}
              Codigo Backend
              <HiMiniArrowTrendingUp />
              {/* </Link> */}
            </Button>
            <Button disabled size="xs">
              {/* <Link color="fg.inverted"> */}
              Proyecto en Figma
              <HiMiniArrowTrendingUp />
              {/* </Link> */}
            </Button>
          </Flex>
          <Text color="fg.error" fontSize="xs">
            Por motivos de seguridad y privacidad del producto, no puedo compartir los repositorios originales.
            <br />
            Sin embargo, creé estos repositorios con lógica parcial para mostrar la arquitectura y la forma en que se
            desarrolló el proyecto.
          </Text>
        </Flex>
      </Flex>
      {/* Experiencia*/}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Experiencia
        </Heading>
        <Flex direction="column" gap="2">
          <Flex justify="space-between" color="fg.muted" gap="8">
            <Text>Full Stack Developer</Text>
            <Text>2024 - 2025</Text>
          </Flex>
          <Flex justify="space-between" color="fg.muted" gap="8">
            <Text>Designer & Full Stack Developer en Protolab</Text>
            <Text>2025 - presente</Text>
          </Flex>
        </Flex>
      </Flex>
      {/*Estudios formales*/}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Estudios formales
        </Heading>
        <Flex direction="column" gap="2">
          <Flex justify="space-between" color="fg.muted" gap="8">
            <Text>Profesor de Música (ISSC) </Text>
            <Text>2016 - 2021</Text>
          </Flex>
          <Flex justify="space-between" color="fg.muted" gap="8">
            <Text>Técnico en Programción Web (Universidad Nacional de San Juan) </Text>
            <Text>2025 - pte.</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Contacto*/}
      <Flex direction="column" gap="4">
        <Heading as="h2" size="2xl">
          Contacto
        </Heading>
        <Flex direction="column" gap="2">
          <Text color="fg.muted">
            Escríbeme a{" "}
            <Link fontWeight="bold" href="mailto:zaratefernandoanibal@gmail.com">
              zaratefernandoanibal@gmail.com
            </Link>
          </Text>
          <Flex gap="4" wrap="wrap">
            <Button size="xs" variant="outline">
              <Link
                fontWeight="bold"
                href="https://github.com/FernandoAvZarate"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none">
                Github
                <HiMiniArrowTrendingUp />
              </Link>
            </Button>
            <Button size="xs" variant="outline">
              <Link
                fontWeight="bold"
                href="https://www.linkedin.com/in/fernandozaratedev/"
                target="_blank"
                rel="noopener noreferrer"
                textDecoration="none">
                Linkedin
                <HiMiniArrowTrendingUp />
              </Link>
            </Button>
          </Flex>
        </Flex>
        <Flex direction="column" gap="2">
          <Text color="fg.muted">¿Quieres más información?</Text>
          {data ? (
            <DownloadTrigger data={data} fileName="fernandozarate_portfolio.pdf" mimeType="application/pdf" asChild>
              <Button variant="outline" fontWeight="bold">
                Descargar CV
              </Button>
            </DownloadTrigger>
          ) : null}
        </Flex>
      </Flex>

      {/* fin del contenedor */}
    </Flex>
  );
}
