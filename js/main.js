// AI Tools Data with Images
const aiTools = {
    writing: [
        {
            name: "ChatGPT",
            description: "Advanced AI language model for writing, analysis, and conversation",
            url: "https://chat.openai.com",
            icon: "🤖",
            image: "images/tools/chatgpt.webp",
            category: "writing",
            features: ["Content Generation", "Language Translation", "Code Writing", "Creative Writing"],
            pricing: "Free to $20/month"
        },
        {
            name: "Copy.ai",
            description: "AI-powered copywriting tool for marketing content",
            url: "https://www.copy.ai",
            icon: "✍️",
            image: "images/tools/copyai.webp",
            category: "writing",
            features: ["Blog Writing", "Ad Copy", "Social Media", "Email Marketing"],
            pricing: "Free to $35/month"
        },
        {
            name: "Jasper",
            description: "AI content generator for blogs, social media, and marketing",
            url: "https://www.jasper.ai",
            icon: "📝",
            image: "images/tools/jasper.webp",
            category: "writing",
            features: ["Long-form Content", "SEO Writing", "Marketing Copy", "Team Collaboration"],
            pricing: "Starts at $39/month"
        }
    ],
    image: [
        {
            name: "DALL·E",
            description: "AI image generation from textual descriptions",
            url: "https://labs.openai.com",
            icon: "🎨",
            image: "images/tools/dalle.webp",
            category: "image",
            features: ["Text to Image", "Image Editing", "Art Styles", "High Resolution"],
            pricing: "Pay per generation"
        },
        {
            name: "Midjourney",
            description: "Create stunning artwork using AI",
            url: "https://www.midjourney.com",
            icon: "🖼️",
            image: "images/tools/midjourney.webp",
            category: "image",
            features: ["Artistic Generation", "Custom Styles", "High Quality", "Discord Integration"],
            pricing: "Starts at $10/month"
        },
        {
            name: "Stable Diffusion",
            description: "Open-source AI image generation model",
            url: "https://stability.ai",
            icon: "🎭",
            image: "images/tools/stable-diffusion.webp",
            category: "image",
            features: ["Local Installation", "Custom Training", "Multiple Models", "Community Support"],
            pricing: "Free (Open Source)"
        }
    ],
    seo: [
        {
            name: "Surfer SEO",
            description: "AI-powered SEO optimization and content planning",
            url: "https://surferseo.com",
            icon: "🏄",
            image: "images/tools/surfer-seo.webp",
            category: "seo",
            features: ["Content Editor", "SERP Analyzer", "Keyword Research", "Content Planner"],
            pricing: "Starts at $59/month"
        },
        {
            name: "MarketMuse",
            description: "AI content planning and optimization platform",
            url: "https://www.marketmuse.com",
            icon: "📊",
            image: "images/tools/marketmuse.webp",
            category: "seo",
            features: ["Content Strategy", "Topic Research", "Content Briefs", "Competition Analysis"],
            pricing: "Custom pricing"
        },
        {
            name: "Frase",
            description: "AI-powered SEO content optimization and research",
            url: "https://www.frase.io",
            icon: "🔍",
            image: "images/tools/frase.webp",
            category: "seo",
            features: ["Content Optimization", "Answer Engine", "Research Assistant", "Content Briefs"],
            pricing: "Starts at $44.99/month"
        }
    ]
};

// Create Enhanced Tool Card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <div class="tool-image">
            <img src="${tool.image}" alt="${tool.name}" loading="lazy" width="280" height="160">
            <div class="tool-icon">${tool.icon}</div>
        </div>
        <div class="tool-content">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-features">
                ${tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="tool-pricing">
                <span class="pricing-label">Pricing:</span>
                <span class="pricing-value">${tool.pricing}</span>
            </div>
            <div class="tool-actions">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link primary-btn">Try Now</a>
                <a href="reviews.html#${tool.name.toLowerCase().replace(/\s+/g, '-')}" class="tool-link secondary-btn">Read Review</a>
            </div>
        </div>
    `;

    // Add hover animation
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });

    return card;
}

// Populate Tool Categories with Enhanced Animation
function populateToolCategories() {
    for (const category in aiTools) {
        const categoryContainer = document.querySelector(`.tool-category:has(h2:contains('${category.charAt(0).toUpperCase() + category.slice(1)}')) .tool-cards`);
        if (categoryContainer) {
            aiTools[category].forEach((tool, index) => {
                const card = createToolCard(tool);
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                categoryContainer.appendChild(card);

                // Staggered animation
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }
}

// Populate Featured Tools with Enhanced Animation
function populateFeaturedTools() {
    const featuredGrid = document.querySelector('.featured-grid');
    if (featuredGrid) {
        const allTools = [...aiTools.writing, ...aiTools.image, ...aiTools.seo];
        const featuredTools = allTools.sort(() => 0.5 - Math.random()).slice(0, 6);
        
        featuredTools.forEach((tool, index) => {
            const card = createToolCard(tool);
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            featuredGrid.appendChild(card);

            // Staggered animation
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}



// Initialize with Enhanced Animations
document.addEventListener('DOMContentLoaded', () => {
    populateToolCategories();
    populateFeaturedTools();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add Enhanced CSS styles for tool cards
const style = document.createElement('style');
style.textContent = `
    .tool-card {
        background-color: var(--card-background);
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .tool-image {
        position: relative;
        height: 160px;
        overflow: hidden;
    }

    .tool-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .tool-card:hover .tool-image img {
        transform: scale(1.1);
    }

    .tool-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: var(--background-color);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        box-shadow: 0 2px 4px var(--shadow-color);
    }

    .tool-content {
        padding: 1.5rem;
    }

    .tool-features {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .feature-tag {
        background-color: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.875rem;
    }

    .tool-pricing {
        margin: 1rem 0;
        font-size: 0.875rem;
    }

    .pricing-label {
        color: var(--text-color);
        opacity: 0.7;
    }

    .tool-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .primary-btn, .secondary-btn {
        flex: 1;
        padding: 0.75rem 1rem;
        text-align: center;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .primary-btn {
        background-color: var(--primary-color);
        color: white;
    }

    .secondary-btn {
        background-color: var(--card-background);
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }

    .primary-btn:hover, .secondary-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px var(--shadow-color);
    }
`;
document.head.appendChild(style); 