/**
 * API client for communicating with the backend.
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

/**
 * Fetch all tools
 */
async function fetchTools() {
    try {
        const response = await fetch(`${API_BASE_URL}/tools`);
        if (!response.ok) {
            throw new Error("Failed to fetch tools");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching tools:", error);
        return [];
    }
}

/**
 * Fetch a single tool by ID
 */
async function fetchTool(toolId) {
    try {
        const response = await fetch(`${API_BASE_URL}/tools/${toolId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch tool");
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching tool ${toolId}:`, error);
        return null;
    }
}

/**
 * Create a new tool
 */
async function createTool(toolData) {
    try {
        const response = await fetch(`${API_BASE_URL}/tools`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toolData),
        });
        if (!response.ok) {
            throw new Error("Failed to create tool");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating tool:", error);
        return null;
    }
}

/**
 * Update a tool
 */
async function updateTool(toolId, toolData) {
    try {
        const response = await fetch(`${API_BASE_URL}/tools/${toolId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toolData),
        });
        if (!response.ok) {
            throw new Error("Failed to update tool");
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating tool ${toolId}:`, error);
        return null;
    }
}

/**
 * Delete a tool
 */
async function deleteTool(toolId) {
    try {
        const response = await fetch(`${API_BASE_URL}/tools/${toolId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete tool");
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting tool ${toolId}:`, error);
        return null;
    }
}

/**
 * Check health status of the API
 */
async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch (error) {
        console.error("API health check failed:", error);
        return false;
    }
}
