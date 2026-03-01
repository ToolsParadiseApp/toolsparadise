/**
 * Main application logic.
 */

document.addEventListener("DOMContentLoaded", function() {
    // Initialize the app
    initializeApp();
    
    // Load tools on page load
    loadTools();
    
    // Setup event listeners
    setupEventListeners();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log("Initializing Tools Paradise application...");
    
    // Check API health
    checkHealth().then((isHealthy) => {
        if (isHealthy) {
            console.log("API is healthy");
        } else {
            console.warn("API health check failed");
            showNotification("Warning: Could not connect to the backend API", "warning");
        }
    });
}

/**
 * Load and display all tools
 */
async function loadTools() {
    const toolsList = document.getElementById("tools-list");
    toolsList.innerHTML = "<p>Loading tools...</p>";
    
    const tools = await fetchTools();
    
    if (tools.length === 0) {
        toolsList.innerHTML = "<p>No tools available yet. Add one to get started!</p>";
        return;
    }
    
    toolsList.innerHTML = "";
    tools.forEach((tool) => {
        const toolElement = createToolElement(tool);
        toolsList.appendChild(toolElement);
    });
}

/**
 * Create a tool element
 */
function createToolElement(tool) {
    const div = document.createElement("div");
    div.className = "tool-card";
    div.innerHTML = `
        <h3>${escapeHtml(tool.name)}</h3>
        <p>${escapeHtml(tool.description || "No description")}</p>
        ${tool.url ? `<a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener">Visit Tool</a>` : ""}
        <span class="category">${escapeHtml(tool.category || "Uncategorized")}</span>
        <div class="tool-actions">
            <button onclick="editTool(${tool.id})">Edit</button>
            <button onclick="deleteTool(${tool.id})">Delete</button>
        </div>
    `;
    return div;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    const form = document.getElementById("add-tool-form");
    if (form) {
        form.addEventListener("submit", handleAddTool);
    }
}

/**
 * Handle adding a new tool
 */
async function handleAddTool(event) {
    event.preventDefault();
    
    const name = document.getElementById("tool-name").value;
    const description = document.getElementById("tool-desc").value;
    const url = document.getElementById("tool-url").value;
    const category = document.getElementById("tool-category").value;
    
    const toolData = {
        name,
        description: description || null,
        url: url || null,
        category: category || null,
    };
    
    const newTool = await createTool(toolData);
    
    if (newTool) {
        showNotification("Tool added successfully!", "success");
        document.getElementById("add-tool-form").reset();
        loadTools();
    } else {
        showNotification("Failed to add tool", "error");
    }
}

/**
 * Edit a tool (placeholder)
 */
function editTool(toolId) {
    console.log(`Editing tool ${toolId}`);
    showNotification("Edit feature coming soon!", "info");
}

/**
 * Delete a tool
 */
async function deleteToolAction(toolId) {
    if (confirm("Are you sure you want to delete this tool?")) {
        const result = await deleteTool(toolId);
        if (result) {
            showNotification("Tool deleted successfully!", "success");
            loadTools();
        } else {
            showNotification("Failed to delete tool", "error");
        }
    }
}

/**
 * Show notification to user
 */
function showNotification(message, type = "info") {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Create a simple notification (can be enhanced with a proper UI)
    alert(message);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}
