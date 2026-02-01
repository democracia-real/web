# Próximos Pasos del Proyecto

*Última actualización: 1 de febrero 2026*

## Resumen de Estado Actual

### Completado ✅

| Área | Estado | Notas |
|------|--------|-------|
| **Documentación base** | ✅ | 8 módulos con 33 documentos |
| **Web estática (SWA)** | ✅ | Desplegada en democraciareal.es |
| **Dominio personalizado** | ✅ | democraciareal.es (DNS en Cloudflare) |
| **Chatbot IA** | ✅ | Azure Function + Foundry Agent funcionando |
| **Indexación RAG** | ✅ | 33 documentos indexados en Azure AI Search |
| **i18n básico** | ✅ | ES, CA, EU, GL, EN (landing page) |
| **SEO básico** | ✅ | robots.txt, sitemap.xml, meta tags |
| **Documento pensiones** | ✅ | Diagnóstico + propuesta de reforma |
| **Chat expandible** | ✅ | Botón para pantalla completa |
| **Limpiar citas [source]** | ✅ | Regex elimina referencias del chat |
| **Esqueletos nuevos temas** | ✅ | Sanidad, educación, energía (con [PENDIENTE]) |

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
- ⏳ Rellenar con datos reales (investigación)
- ⏳ Propuestas para cada área
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
| **Azure AI Search** | democracia-docs (33 docs) | ✅ Activo |
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

## Acciones Sugeridas para Próxima Sesión

1. **Investigación profunda** - Elegir un tema (sanidad/educación/energía/corrupción)
2. **Buscar datos reales** - Rellenar los [PENDIENTE] con fuentes
3. **Crear cuenta X/Twitter** - Empezar presencia en redes
4. **Probar el chat** - Verificar que responde sobre pensiones
