# Próximos Pasos del Proyecto

*Última actualización: 8 de febrero 2026*

## Resumen de Estado Actual

### Completado ✅

| Área | Estado | Notas |
|------|--------|-------|
| **Documentación base** | ✅ | 8 módulos con 38+ documentos |
| **Web estática (SWA)** | ✅ | Desplegada en democraciareal.es |
| **Dominio personalizado** | ✅ | democraciareal.es (DNS en Cloudflare) |
| **Chatbot IA** | ✅ | Azure Function + Foundry Agent funcionando |
| **Indexación RAG** | ✅ | Documentos indexados en Azure AI Search |
| **i18n básico** | ✅ | ES, CA, EU, GL, EN (landing page) |
| **SEO básico** | ✅ | robots.txt, sitemap.xml, meta tags |
| **Documento pensiones** | ✅ | Diagnóstico + propuesta de reforma |
| **Chat expandible** | ✅ | Botón para pantalla completa |
| **Limpiar citas [source]** | ✅ | Regex elimina referencias del chat |
| **Esqueletos nuevos temas** | ✅ | Sanidad, educación, energía (con [PENDIENTE]) |
| **Gobernanza y consenso** | ✅ | Afiliados, donaciones, jerarquía vs plano, forks |
| **Sanidad ampliado** | ✅ | Preventiva, paciente dueño datos, fragmentación |
| **IA soberanía** | ✅ | No depender de EEUU/China |
| **ZBE** | ✅ | Criterio emisiones reales, no antigüedad |
| **Autónomos / funcionariado** | ✅ | Menos trabas, citas; motivación, no relajarse |
| **Prioridad gasto público** | ✅ | Barbacid vs Broncano, RTVE, salsa rosa |
| **Blockchain** | ✅ | Casos de uso definidos (trazabilidad, datos paciente) |

### Infraestructura Web: Hecha

- **DNS/SSL**: No volver a tocar salvo problema grave. Cloudflare + HTTPS forzado y redirecciones limpias están operativos.
- **robots.txt y sitemap.xml**: Ya configurados; Google puede rastrear los módulos al conectar el dominio (hecho).

---

## Siguiente Paso Inmediato

### 1. Dedicación prioritaria: contenido e investigación

A partir de aquí, el foco debe ser **contenido e investigación**, no más infraestructura. Luego revisar estructura de ideas y propuestas del partido, y después profundizar en los temas con datos reales.

Deep Research suele ser muy sistemático, y 5.2 + thinking ayuda a razonar y estructurar.

### 2. Comprobar nombre en Registro de Partidos (legal)

**Antes de constituir**: Verificar en el **Registro de Partidos Políticos del Ministerio del Interior** si el nombre "Democracia Real" (o la variante que vayas a usar) está ya registrado. Evita conflictos legales posteriores.

**Qué modelo usar**: **Gemini con Deep Research** o **ChatGPT 5.2 con Investigación avanzada** para que busque en fuentes oficiales y te indique cómo y dónde comprobarlo.

### 3. Headers de seguridad y SEO (hecho)

- **CSP**: Revisado y afinado (light pero correcto).
- **hreflang**: Añadido en la landing para ES/CA/EU/GL/EN.
- **Sitemap**: Comprobado que incluye las URLs relevantes.

---

## Siguiente Fase: Investigación Profunda

### Documentos con [PENDIENTE] para Rellenar

| Documento | Datos que faltan | Prioridad |
|-----------|------------------|-----------|
| `sanidad.md` | Listas espera, ratios, comparativa UE | Alta |
| `educacion.md` | Resultados PISA, abandono escolar, leyes | Alta |
| `energia.md` | Precios kWh, mix renovable, oligopolio | Alta |
| `corrupcion_e_impunidad.md` | Coste % PIB, casos recientes | Alta |
| `autonomos_y_emprendimiento.md` | Días/coste abrir empresa vs UE | Media |

### Preguntas de Investigación

| # | Pregunta | Fuentes sugeridas |
|---|----------|-------------------|
| 1 | ¿Cuál es el coste real de la corrupción en España (% PIB)? | Transparency Int., estudios académicos |
| 2 | ¿Cuántos días/euros cuesta abrir una empresa vs. media UE? | Doing Business, Eurostat |
| 3 | Resultados PISA España 2022/2024 y tendencia | OCDE |
| 4 | Listas de espera sanitarias por CCAA | Ministerio Sanidad, SNS |
| 5 | Mix energético actual y precios vs UE | REE, Eurostat, CNMC |
| 6 | ¿Qué experiencias de IA en administración pública existen? | Estonia, Singapur, UK |

### Pasos para Investigación y Mejora Continua (propuesta Gemini)

| Paso | Descripción |
|------|-------------|
| **Benchmarking** | e-Estonia (admin digital), vivienda Viena, gestión suelo Singapur. Modelos de eficiencia sin ideología. |
| **Sector real** | Hilos en 08_investigacion_abierta para que autónomos/emprendedores cuenten qué trámites les bloquean; usar datos reales para proponer eliminación de cuellos de botella. |
| **IA soberana** | Definir modelo de IA de código abierto en servidores nacionales/europeos; no depender de EE.UU./China para datos públicos. |
| **Simulacro de ahorro** | Calcular cuántos ministerios, secretarías y asesores podrían sustituirse por plataforma digital centralizada y cuánto se devolvería al ciudadano (menos impuestos o más servicios). |

### Ideas para la Web (hacer diferente)

| Idea | Descripción |
|------|-------------|
| **Contador de ineficiencia** | En la landing, contador (estimado) de dinero público perdido por segundo por burocracia y corrupción. |
| **Voto líquido** | Explicar en la web cómo un ciudadano podría delegar su voto en temas de salud en un experto (o IA con datos médicos) y mantener voto directo en educación u otros temas. |

---

## Estructura Expandida (nuevos documentos añadidos)

- **02**: vivienda_y_suelo, justicia_fiscal_autonomos, mapa_puertas_giratorias, auditoria_fondos_europeos, coste_politico_vitalicio; **compra_publica_producto_nacional**; energia.md con posición no-dependencia (solar, eólica, nuclear); sanidad con organizaciones de pacientes (ELA vs otras).
- **03**: ley_anti_decretos, reforma_funcionariado_eficiente, independencia_digital_justicia; **plantilla_redaccion_propuestas** (diagnóstico, objetivos, medidas, coste/viabilidad, indicadores).
- **05**: ia_supervisada_presupuestos, automatizacion_burocratica, etica_y_supervision_humana.
- **08**: **tematicas_emergentes_y_modelos_programaticos**; **mensaje_inclusivo_juventud** (hablar a todos los jóvenes, cambio con derechos, sin dictaduras).

---

## Comunicación y Contacto

### Canales Actuales

| Canal | Estado | URL |
|-------|--------|-----|
| **Web** | ✅ Activo | https://democraciareal.es |
| **GitHub** | ✅ Activo | https://github.com/democracia-real/web |
| **Chatbot** | ✅ Activo | Integrado en la web |

### Redes Sociales (Pendientes)

| Red | Público objetivo | Prioridad | Estado |
|-----|------------------|-----------|--------|
| X/Twitter | Debate político, periodistas | Alta | ⏳ Pendiente |
| Telegram | Comunidad activa, coordinación | Alta | ⏳ Pendiente |
| YouTube | Contenido explicativo | Media | ⏳ Pendiente |
| LinkedIn | Profesionales, técnicos | Media | ⏳ Pendiente |

---

## Fases Posteriores

### Fase 3: Expansión de Contenido (ACTUAL)
- ✅ Esqueletos creados (sanidad, educación, energía)
- ✅ Estructura expandida (vivienda/suelo, fiscal autónomos, puertas giratorias, auditoría fondos, coste político vitalicio; ley anti-decretos, reforma funcionariado, justicia digital; IA presupuestos, automatización burocrática, ética/supervisión)
- ⏳ Rellenar con datos reales (investigación)
- ⏳ Propuestas detalladas para cada área
- ⏳ Casos documentados con fuentes

### Fase 4: Comunicación
- Crear perfiles en redes sociales
- Primeros hilos explicativos
- Vídeos cortos divulgativos

### Fase 5: Constitución Legal
- Reunir 3 promotores mínimo
- Redactar estatutos definitivos
- Acta notarial
- Inscripción en Registro de Partidos

### Fase 6: Lanzamiento Público
- Campaña en redes sociales
- Afiliación abierta
- Expansión territorial

---

## Infraestructura Técnica

| Servicio | Recurso | Estado |
|----------|---------|--------|
| **Azure SWA** | witty-pebble... | ✅ Activo |
| **Azure Function** | democracia-chat-function | ✅ Activo |
| **Azure AI Foundry** | agentedemocracia | ✅ Activo |
| **Azure AI Search** | democracia-docs (39 docs) | ✅ Activo |
| **Cloudflare** | DNS democraciareal.es | ✅ Activo |
| **GitHub** | democracia-real/web | ✅ Activo |

---

## Comandos Útiles

### Re-indexar documentos (tras añadir/modificar .md)
```bash
cd scripts
/c/Users/javie/AppData/Local/Programs/Python/Python312/python.exe index_to_azure_search.py
```

### Desplegar Azure Function (tras modificar function-app/)
```bash
cd function-app
func azure functionapp publish democracia-chat-function
```

---

## Qué Modelo Usar para Cada Tarea

| Tarea | Modelo recomendado | Por qué |
|-------|--------------------|--------|
| **Investigación profunda** (datos reales, PISA, listas de espera, coste corrupción, fuentes oficiales) | **Gemini con Deep Research** o **ChatGPT 5.2 con Investigación avanzada** | Buscan en la web, contrastan fuentes y te dan datos actualizados. Deep Research suele ser muy exhaustivo; Investigación avanzada + thinking sirve para razonar y citar. |
| **Comprobar nombre en Registro de Partidos** | **Gemini Deep Research** o **ChatGPT 5.2 Investigación avanzada** | Necesitas búsqueda en fuentes oficiales y pasos concretos. |
| **Tareas técnicas** (headers, CSP, hreflang, código) | **Cursor** (este asistente) | Cambios en repo, configuración y estándares web sin necesidad de búsqueda externa. |
| **Estrategia y redacción** (textos, estructura de documentos) | Cualquiera; **ChatGPT 5.2 thinking** si quieres más razonamiento paso a paso. | |

**Resumen**: Para **datos y fuentes reales** → Gemini Deep Research o ChatGPT 5.2 Investigación avanzada. Para **código y configuración** → Cursor.

---

## Acciones Sugeridas para Próxima Sesión

1. **Legal** - Comprobar "Democracia Real" en Registro de Partidos (usar Gemini o ChatGPT con investigación).
2. **Investigación profunda** - Elegir un tema (sanidad/educación/energía/corrupción) y rellenar [PENDIENTE] con **Deep Research** o **Investigación avanzada**.
3. **Opcional técnico** - Afinar CSP, hreflang y sitemap (en Cursor).
4. **Comunicación** - Crear cuenta X/Twitter cuando el contenido esté más cerrado.
