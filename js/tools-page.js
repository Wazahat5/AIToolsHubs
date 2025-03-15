// Additional AI Tools Data
const additionalTools = {
    productivity: [
        {
            name: "Notion AI",
            description: "AI-powered workspace for notes, tasks, and collaboration",
            url: "https://www.notion.so",
            icon: "📝",
            category: "productivity"
        },
        {
            name: "Otter.ai",
            description: "AI transcription and note-taking assistant",
            url: "https://otter.ai",
            icon: "🎙️",
            category: "productivity"
        },
        {
            name: "Motion",
            description: "AI calendar and task management",
            url: "https://www.usemotion.com",
            icon: "📅",
            category: "productivity"
        }
    ],
    coding: [
        {
            name: "GitHub Copilot",
            description: "AI pair programmer for code suggestions",
            url: "https://github.com/features/copilot",
            icon: "👨‍💻",
            category: "coding"
        },
        {
            name: "Tabnine",
            description: "AI code completion assistant",
            url: "https://www.tabnine.com",
            icon: "⌨️",
            category: "coding"
        },
        {
            name: "CodeWhisperer",
            description: "Amazon's AI code suggestion tool",
            url: "https://aws.amazon.com/codewhisperer",
            icon: "💡",
            category: "coding"
        }
    ]
};

// Merge all tools
const allTools = {
    ...aiTools,
    ...additionalTools
};

// Create Tool Card with Animation
function createAnimatedToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card animate-fade-up';
    card.innerHTML = `
        <div class="tool-icon">${tool.icon}</div>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">Try Now</a>
    `;
    return card;
}

// Filter Tools
function filterTools(category) {
    const toolsGrid = document.querySelector('.all-tools-grid');
    toolsGrid.innerHTML = '';
    
    let filteredTools = [];
    if (category === 'all') {
        Object.values(allTools).forEach(categoryTools => {
            filteredTools = [...filteredTools, ...categoryTools];
        });
    } else {
        filteredTools = allTools[category] || [];
    }

    filteredTools.forEach(tool => {
        toolsGrid.appendChild(createAnimatedToolCard(tool));
    });
}

// Search Tools
function searchTools(query) {
    const toolsGrid = document.querySelector('.all-tools-grid');
    toolsGrid.innerHTML = '';
    
    const searchResults = [];
    Object.values(allTools).forEach(categoryTools => {
        const filtered = categoryTools.filter(tool => 
            tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase())
        );
        searchResults.push(...filtered);
    });

    searchResults.forEach(tool => {
        toolsGrid.appendChild(createAnimatedToolCard(tool));
    });
}

// Initialize Tools Page
document.addEventListener('DOMContentLoaded', () => {
    // Initial load of all tools
    filterTools('all');

    // Filter button click handlers
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter tools
            filterTools(button.dataset.category);
        });
    });

    // Search input handler
    const searchInput = document.getElementById('toolSearch');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchTools(e.target.value);
        }, 300);
    });

    // Category links in footer
    document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            // Update active filter button
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === category);
            });
            filterTools(category);
            // Scroll to tools section
            document.querySelector('.all-tools-grid').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Add CSS styles for tools page
const toolsPageStyles = document.createElement('style');
toolsPageStyles.textContent = `
    .tools-filter {
        margin: 2rem auto;
        text-align: center;
    }

    .search-box {
        margin-bottom: 1.5rem;
    }

    .search-input {
        width: 100%;
        max-width: 500px;
        padding: 1rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
    }

    .search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .category-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .filter-btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: var(--card-background);
        color: var(--text-color);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .filter-btn:hover {
        background-color: var(--primary-color);
        color: white;
    }

    .filter-btn.active {
        background-color: var(--primary-color);
        color: white;
    }

    .all-tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
    }

    @media (max-width: 768px) {
        .category-filters {
            flex-direction: column;
            align-items: stretch;
        }

        .filter-btn {
            width: 100%;
        }
    }
`;
document.head.appendChild(toolsPageStyles); 