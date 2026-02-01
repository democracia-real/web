# Próximos Pasos del Proyecto

## Resumen de Estado Actual

### Completado ✅

| Área | Estado | Notas |
|------|--------|-------|
| **Documentación base** | ✅ | 8 módulos con 27+ documentos |
| **Web estática (SWA)** | ✅ | Desplegada en democraciareal.es |
| **Dominio personalizado** | ✅ | democraciareal.es (DNS en Cloudflare) |
| **Chatbot IA** | ✅ | Azure Function + Foundry Agent funcionando |
| **Indexación RAG** | ✅ | Script local para Azure AI Search |
| **i18n básico** | ✅ | ES, CA, EU, GL, EN (landing page) |
| **SEO básico** | ✅ | robots.txt, sitemap.xml, meta tags |
| **Documento pensiones** | ✅ | Diagnóstico + propuesta de reforma |

### En Progreso 🔄

| Tarea | Estado | Siguiente acción |
|-------|--------|------------------|
| **Chat expandible** | 🔄 | Código listo, pendiente commit/push |
| **Limpiar citas [source]** | ⏳ | Decidir si limpiar o estilizar |
| **Re-indexar contenido** | ⏳ | Ejecutar script tras añadir pensiones |

---

## Pendiente Inmediato

### 1. Commit y Deploy Pendiente

Archivos modificados sin subir:
- `web/js/chat.js` - Scroll mejorado + botón expandir
- `web/css/styles.css` - Estilos chat expandible
- `.gitignore` - Excluir logs de Azure
- `02_problemas_estructurales/sistema_pensiones.md` - NUEVO
- `03_propuestas_institucionales/reforma_pensiones.md` - NUEVO
- READMEs actualizados

### 2. Re-indexar Documentos

Tras hacer push, ejecutar:
```bash
cd scripts
python index_to_azure_search.py
```

Esto actualizará el índice de Azure AI Search con los nuevos documentos de pensiones.

---

## Siguiente Fase: Contenido y Comunicación

### Prioridades

| # | Tarea | Impacto | Esfuerzo |
|---|-------|---------|----------|
| 1 | **Redes sociales** - Crear perfiles X, Telegram | Alto | Bajo |
| 2 | **Investigación profunda** - Datos reales para documentos | Alto | Alto |
| 3 | **Traducción completa** - i18n de docs, no solo landing | Medio | Alto |
| 4 | **Más propuestas** - Sanidad, educación, energía | Alto | Alto |
| 5 | **Vídeos explicativos** - YouTube/TikTok | Alto | Medio |

### Investigación Pendiente

| # | Pregunta | Impacto |
|---|----------|---------|
| 1 | ¿Cuál es el coste real de la corrupción en España (% PIB)? | Alto |
| 2 | ¿Cuántos días/euros cuesta abrir una empresa vs. media UE? | Alto |
| 3 | ¿Qué porcentaje de legislación se aprueba por decreto-ley? | Alto |
| 4 | Datos actualizados del sistema de pensiones | Alto |
| 5 | ¿Qué experiencias de IA en administración pública existen? | Alto |

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

### Fase 3: Expansión de Contenido
- Más documentos de diagnóstico (sanidad, educación, energía)
- Investigación con datos reales
- Casos documentados con fuentes

### Fase 4: Constitución Legal
- Reunir 3 promotores mínimo
- Redactar estatutos definitivos
- Acta notarial
- Inscripción en Registro de Partidos

### Fase 5: Lanzamiento Público
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
| **Azure AI Search** | Índice RAG | ✅ Activo |
| **Cloudflare** | DNS democraciareal.es | ✅ Activo |
| **GitHub** | democracia-real/web | ✅ Activo |

---

## Acciones Inmediatas Sugeridas

1. **Hacer commit/push** de los cambios pendientes
2. **Re-indexar** el contenido de pensiones
3. **Probar el chat** con preguntas sobre pensiones
4. **Crear cuenta X/Twitter** del proyecto
5. **Elegir siguiente tema** a desarrollar (sanidad, educación, energía, etc.)
