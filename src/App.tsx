import {
  Flex,
  Heading,
  Separator,
  Link,
  Image,
  Text,
  DownloadTrigger,
  Button,
  Accordion,
  Span,
} from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { useState, useEffect } from "react";

const unexoFeatures = [
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
const nodoFeatures = [
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
];

export default function App() {
  const { colorMode } = useColorMode();
  // imagenes
  const unexoSrc =
    colorMode === "light"
      ? "https://res.cloudinary.com/ducvmt3te/image/upload/v1769625957/10_bnrobq.svg"
      : "https://res.cloudinary.com/ducvmt3te/image/upload/v1769625959/9_jopyef.svg";
  const nodoSrc =
    colorMode === "light"
      ? "https://res.cloudinary.com/ducvmt3te/image/upload/v1769534508/N_4_ttacyr.svg"
      : "https://res.cloudinary.com/ducvmt3te/image/upload/v1769625349/3_rlslcy.svg";
  // cv
  const [data, setData] = useState<Blob | null>(null);

  useEffect(() => {
    fetch("/cv_fernandozarate_2026.pdf")
      .then((res) => res.blob())
      .then(setData)
      .catch((err) => console.error("Error loading CV:", err));
  }, []);

  return (
    <Flex paddingBlock={{ base: "4", md: "8" }} paddingInline="4" bg="bg.panel">
      <Flex
        paddingBlock="8"
        paddingInline={{ base: "4", md: "16" }}
        m="auto"
        w="100%"
        maxW="800px"
        direction="column"
        gap="8"
        bg="bg.muted"
        borderRadius="md">
        {/* color mode */}
        <ColorModeButton alignSelf="end" />
        {/* Sobre mí */}
        <Flex direction="column" gap="2">
          <Heading as="h1" size={{ base: "md", lg: "lg" }} textAlign="center">
            Fernando Aníbal del Valle Zárate
          </Heading>
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} color="blue.fg" textAlign="center">
            Desarrollador Web Full Stack
          </Heading>
          <Text fontSize={{ base: "2xs", md: "xs" }} fontWeight="bold" textAlign="center" color="fg.muted">
            JAVASCRIPT · TYPESCRIPT · REACT · NEXT.JS · NODE.JS (EXPRESS & NESTJS) · POSTGRESQL · PRISMA ORM
          </Text>
        </Flex>
        {/* Descargar CV */}
        <Flex justify="center">
          {data ? (
            <DownloadTrigger data={data} fileName="cv_fernandozarate_2026.pdf" mimeType="application/pdf" asChild>
              <Button colorPalette="blue" variant="subtle" size={{ base: "sm", md: "md" }}>
                Descargar CV
              </Button>
            </DownloadTrigger>
          ) : null}
        </Flex>
        <Separator />
        {/* Proyectos Destacados */}
        <Heading as="h3" size={{ base: "xl", md: "2xl" }} textAlign="center" color="blue.fg">
          Proyectos Destacados
        </Heading>
        <Separator />
        {/* Contenedor de proectos destacados */}
        <Flex direction="column" gap="4">
          {/* Unexo ==================================== */}
          <Flex direction="column" gap="4" align="center" justify="center">
            {/* titulo */}
            <Link
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              href="https://www.unexoapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              alignSelf="start">
              Unexo
            </Link>
            {/* Imagen */}

            <Image aspectRatio={16 / 6} width="100%" bg="blue.fg" rounded="md" src={unexoSrc} alt="Unexo" />
            {/* Descripcion */}
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Descripción
              </Heading>
              <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
                Unexo es la plataforma que conecta a estudiantes de la Universidad Nacional de San Juan, permitiéndoles
                compartir y acceder gratuitamente a recursos académicos. Facilita el aprendizaje colaborativo y la
                organización del estudio, potenciando la experiencia universitaria.
              </Text>
            </Flex>
            {/* Tecnologías */}
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Tecnologías
              </Heading>
              <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
                TypeScript · React · Next.js · ChakraUI · Tailwind · Node.js · Express · PostgreSQL · Prisma
              </Text>
            </Flex>
            {/* Infraestructura */}
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Infraestructura
              </Heading>
              <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
                Vercel · Render · Supabase · Docker · Brevo
              </Text>
            </Flex>
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Funcionalidades
              </Heading>
              {/* Corrección: defaultValue apunta al primer elemento real o array vacío */}
              <Accordion.Root collapsible>
                {unexoFeatures.map((item, index) => (
                  <Accordion.Item key={index} value={item.value}>
                    <Accordion.ItemTrigger cursor="pointer">
                      <Span flex="1" as="h4" fontSize={{ base: "xs", md: "sm" }}>
                        · {item.title}
                      </Span>
                      <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent bg="bg">
                      <Accordion.ItemBody marginLeft="4" color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
                        {item.text}
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Flex>
            {/* Estado */}
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Estado
              </Heading>
              <Text color="fg.error" fontSize={{ base: "2xs", md: "xs" }}>
                Actualmente en producción silenciosa.
                <br />
                El lanzamiento oficial es el 9 de febrero de 2026. Puedes visitar la plataforma en{" "}
                <Link
                  fontWeight="bold"
                  color="blue.fg"
                  href="https://www.unexoapp.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Unexo
                </Link>
              </Text>
            </Flex>
            {/* Links */}
            <Flex w="100%" direction="column" gap="2">
              <Heading as="h3" size={{ base: "sm", md: "md" }}>
                Links
              </Heading>
              <Flex gap="4" flexWrap="wrap">
                <Link
                  href="https://github.com/FernandoAvZarate/unexo-showcase-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.fg"
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="bold">
                  Código Frontend
                </Link>
                <Link
                  href="https://github.com/FernandoAvZarate/unexo-showcase-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.fg"
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="bold">
                  Código Backend
                </Link>
                <Link
                  href="https://github.com/FernandoAvZarate/unexo-showcase-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.fg"
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="bold">
                  Proyecto Figma
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Separator />
        {/* Nodo ==================================== */}
        <Flex direction="column" gap="4" align="center" justify="center">
          {/* titulo */}
          <Link
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            alignSelf="start">
            Nodo
          </Link>
          {/* Imagen */}
          <Image aspectRatio={16 / 6} width="100%" bg="blue.fg" rounded="md" src={nodoSrc} alt="Nodo" />
          {/* Descripcion */}
          <Flex w="100%" direction="column" gap="2">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>
              Descripción
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
              Nodo es una plataforma de publicidad digital local diseñada para conectar comercios y marcas locales con
              sitios web y aplicaciones de su misma región. El sistema permite a los anunciantes promocionarse en medios
              digitales locales reales, mientras que los desarrolladores pueden monetizar sus proyectos sin depender de
              redes publicitarias globales. Nodo prioriza el contexto local, el contacto directo con los comercios y un
              modelo de monetización justo, incentivando la creación y sostenimiento de un ecosistema web local
              rentable.
            </Text>
          </Flex>
          {/* Tecnologías */}
          <Flex w="100%" direction="column" gap="2">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>
              Tecnologías
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
              TypeScript · React · ChakraUI · Tailwind · Node.js · Express · PostgreSQL · Prisma
            </Text>
          </Flex>
          {/* Infraestructura */}
          <Flex w="100%" direction="column" gap="2">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>
              Infraestructura
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
              Vercel · Render · Supabase · Docker · Brevo
            </Text>
          </Flex>
          <Flex w="100%" direction="column" gap="2">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>
              Funcionalidades
            </Heading>
            {/* Corrección: defaultValue apunta al primer elemento real o array vacío */}
            <Accordion.Root collapsible>
              {nodoFeatures.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                  <Accordion.ItemTrigger cursor="pointer">
                    <Span flex="1" as="h4" fontSize={{ base: "xs", md: "sm" }}>
                      · {item.title}
                    </Span>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent bg="bg">
                    <Accordion.ItemBody marginLeft="4" color="fg.muted" fontSize={{ base: "xs", md: "sm" }}>
                      {item.text}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
          {/* Estado */}
          <Flex w="100%" direction="column" gap="2">
            <Heading as="h3" size={{ base: "sm", md: "md" }}>
              Estado
            </Heading>
            <Text color="fg.error" fontSize={{ base: "2xs", md: "xs" }}>
              El proyecto se encuentra actualmente en desarrollo activo.
              <br />
              Concebido como una iniciativa a largo plazo orientada al crecimiento del ecosistema digital local.{" "}
            </Text>
          </Flex>
        </Flex>
        <Separator />
        <Flex w="100%" justify="center" gap="4">
          <Link
            href="https://github.com/FernandoAvZarate"
            target="_blank"
            rel="noopener noreferrer"
            color="blue.fg"
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold">
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/fernandozaratedev/"
            target="_blank"
            rel="noopener noreferrer"
            color="blue.fg"
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold">
            Linkedin
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
