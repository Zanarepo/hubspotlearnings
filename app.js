// app.js - Logic to inject data dynamically and handle navigation state

function loadHub(hubKey) {
    const data = hubData[hubKey];
    const mainContent = document.getElementById('main-content');
    
    // 1. Update active state on the sidebar navigation visually
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('active');
        // Reset roadmap exact styling active states
        if (el.id === 'nav-roadmap') {
            el.style.background = 'rgba(255,122,89,0.1)'; 
        }
    });
    
    let activeElem = document.getElementById(`nav-${hubKey}`);
    activeElem.classList.add('active');
    if (hubKey === 'roadmap') {
        activeElem.style.background = 'rgba(255,122,89,0.25)'; // Highlight Roadmap harder
    }

    // 2. Build the HTML content dynamically from data.js
    let htmlContent = `
        <h1 class="header-title" style="color: ${data.color}">${data.title}</h1>
        <p class="header-subtitle">${data.subtitle}</p>
        <div class="grid">
    `;

    // 3. Loop through sections to build each card
    data.sections.forEach(section => {
        
        // ---- NEW: Render Learning Roadmap Modules ----
        if (section.type === 'module') {
            htmlContent += `
                <div class="card" style="border-left: 4px solid #10b981;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <h3 style="color: #fff; margin-bottom: 0px; border: none; padding-bottom: 0;">${section.title}</h3>
                        <span class="tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">⏳ ${section.duration}</span>
                    </div>
                    
                    <ul class="steps" style="margin-bottom: 1.5rem;">
            `;
            section.items.forEach(item => {
                htmlContent += `<li>${item}</li>`;
            });
            htmlContent += `</ul>`;
            
            htmlContent += `
                    <div style="background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 0.75rem; border: 1px dashed rgba(16, 185, 129, 0.4);">
                        <p style="font-size: 0.85rem; color: #10b981; margin-bottom: 0.5rem; font-weight: 800; text-transform: uppercase;">
                            🎯 Module Challenge:
                        </p>
                        <p style="font-size: 0.85rem; color: #f8fafc; line-height: 1.5;">${section.practiceGuide}</p>
                    </div>
                </div>
            `;
        }
        
        // ---- Render Workflow Specific Component ----
        else if (section.type === 'workflow') {
            htmlContent += `
                <div class="card">
                    <div class="tag-group">
                        <span class="tag ${section.tag}">${section.tag}</span>
                    </div>
                    <h3 style="color: #fff; border-bottom: none; padding-bottom: 0;">${section.title}</h3>
                    
                    <p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
                        <strong>🎯 Goal:</strong> ${section.goal}
                    </p>
                    
                    <p style="font-size: 0.9rem; margin-bottom: 1rem; color: #cbd5e1;">
                        <strong>🧠 Use Case:</strong> ${section.useCase}
                    </p>
                    
                    <div style="background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 0.75rem; border: 1px dashed rgba(255,122,89,0.3); margin-bottom: 1.5rem;">
                        <p style="font-size: 0.85rem; color: #ff7a59; margin-bottom: 0.5rem; font-weight: 800; text-transform: uppercase;">
                            🛠️ Hands-on Practice in HubSpot:
                        </p>
                        <p style="font-size: 0.85rem; color: #f8fafc; line-height: 1.5;">${section.practiceGuide}</p>
                    </div>
                    
                    <ul class="step-list">
            `;
            
            section.steps.forEach(step => {
                if (step.type === 'delay') {
                    htmlContent += `<div class="step-delay">${step.text}</div>`;
                } else if (step.type === 'condition') {
                    let branchHTML = step.branches.map(b => `
                        <div class="branch-item">
                            <span class="branch-pill ${b.class}">${b.pill}</span> ${b.desc}
                        </div>
                    `).join('');
                    
                    htmlContent += `
                        <li class="step-item">
                            <div class="step-icon">${step.icon}</div>
                            <strong>Condition:</strong> ${step.text}
                            <div class="branch">${branchHTML}</div>
                        </li>
                    `;
                } else {
                    const triggerClass = step.type === 'trigger' ? 'step-icon-trigger' : '';
                    const boldPre = step.type === 'trigger' ? '<strong>Trigger:</strong> ' : '';
                    htmlContent += `
                        <li class="step-item">
                            <div class="step-icon ${triggerClass}">${step.icon}</div>
                            ${boldPre}${step.text}
                        </li>
                    `;
                }
            });
            
            htmlContent += `</ul></div>`;
            
        } 
        
        // ---- Render Default Hubs Components string list ----
        else {
            htmlContent += `<div class="card">
                <h3 style="color: ${data.color}">${section.title}</h3>`;
            
            // Add Hands on section if it exists!
            if (section.practiceGuide) {
                htmlContent += `
                    <div style="background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 0.75rem; border: 1px dashed rgba(255,122,89,0.3); margin-bottom: 1.5rem; margin-top: 0.5rem;">
                        <p style="font-size: 0.85rem; color: #ff7a59; margin-bottom: 0.5rem; font-weight: 800; text-transform: uppercase;">
                            🛠️ Hands-on Practice Exercise:
                        </p>
                        <p style="font-size: 0.85rem; color: #f8fafc; line-height: 1.5;">${section.practiceGuide}</p>
                    </div>
                `;
            }

            if (section.isList) {
                htmlContent += `<ul class="steps">`;
                section.items.forEach(item => {
                    htmlContent += `<li>${item}</li>`;
                });
                htmlContent += `</ul>`;
            } else {
                htmlContent += `<p>${section.content}</p>`;
            }
            
            htmlContent += `</div>`;
        }
    });

    htmlContent += `</div>`; // Close grid
    mainContent.innerHTML = htmlContent;
}

window.onload = () => {
    // We default to the Roadmap so the user can see their learning path!
    loadHub('roadmap'); 
};
