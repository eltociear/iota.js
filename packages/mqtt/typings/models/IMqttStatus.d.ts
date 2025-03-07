/**
 * Status message for MQTT Clients.
 */
export interface IMqttStatus {
    /**
     * The type of message.
     */
    type: "connect" | "disconnect" | "error" | "subscription-add" | "subscription-remove";
    /**
     * Additional information about the status.
     */
    message: string;
    /**
     * The connection status.
     */
    state: "disconnected" | "connected" | "disconnecting" | "connecting";
    /**
     * Any errors.
     */
    error?: unknown;
}
