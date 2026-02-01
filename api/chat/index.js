// Azure Function - Proxy para el chatbot de Democracia Real
// Esta función protege la API Key del agente

module.exports = async function (context, req) {
    const AGENT_ENDPOINT = process.env.AGENT_ENDPOINT || 
        "https://democracia-resource.services.ai.azure.com/api/projects/democracia/applications/agentedemocracia/protocols/openai/responses";
    const API_KEY = process.env.AGENT_API_KEY;
    const API_VERSION = "2025-11-15-preview";

    // Validar que hay mensaje
    if (!req.body || !req.body.message) {
        context.res = {
            status: 400,
            body: { error: "Se requiere un mensaje" }
        };
        return;
    }

    const userMessage = req.body.message;
    const conversationId = req.body.conversationId || null;

    try {
        const response = await fetch(`${AGENT_ENDPOINT}?api-version=${API_VERSION}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": API_KEY
            },
            body: JSON.stringify({
                input: userMessage,
                ...(conversationId && { conversation_id: conversationId })
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            context.log.error("Error del agente:", response.status, errorText);
            context.res = {
                status: response.status,
                body: { error: "Error al procesar la consulta" }
            };
            return;
        }

        const data = await response.json();
        
        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                response: data.output || data.choices?.[0]?.message?.content || "Sin respuesta",
                conversationId: data.conversation_id || conversationId
            }
        };

    } catch (error) {
        context.log.error("Error:", error);
        context.res = {
            status: 500,
            body: { error: "Error interno del servidor" }
        };
    }
};
