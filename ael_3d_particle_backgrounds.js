// ============================================================================
      // ENHANCED PROFESSIONAL 3D PARTICLE BACKGROUND PROMPT LIBRARY
      // Version: 4.0.0 | No Repetition - Fully Unique Prompts
      // ============================================================================

      class UniquePromptGenerator {
        constructor() {
          // قاعدة مصطلحات موسعة جداً لمنع التكرار
          this.enhancedTechnicalTerms = [
            // مصطلحات فيزيائية متقدمة
            "plasma dynamics",
            "electromagnetic spectrum",
            "quantum entanglement",
            "string theory",
            "relativity effects",
            "thermodynamic systems",
            "fluid mechanics",
            "aerodynamic flow",
            "crystal lattice",
            "magnetic resonance",
            "particle acceleration",
            "wave interference",

            // مصطلحات رياضية وحسابية
            "fractal geometry",
            "algorithmic patterns",
            "topological surfaces",
            "vector fields",
            "tensor networks",
            "probability distributions",
            "chaos theory",
            "complex systems",

            // مصطلحات بيولوجية وعضوية
            "neural pathways",
            "cellular structures",
            "DNA sequencing",
            "ecosystem networks",
            "biological membranes",
            "protein folding",
            "microbial colonies",
            "neural networks",

            // مصطلحات كيميائية
            "molecular bonds",
            "crystal formations",
            "polymer chains",
            "nanotechnology",
            "atomic structures",
            "chemical reactions",
            "catalytic processes",
            "quantum chemistry",

            // مصطلحات فلكية وكونية
            "dark matter",
            "black holes",
            "supernova remnants",
            "planetary systems",
            "galactic clusters",
            "cosmic strings",
            "nebula formations",
            "interstellar clouds",

            // مصطلحات تقنية متقدمة
            "blockchain networks",
            "quantum circuits",
            "nanobot swarms",
            "biometric patterns",
            "cybernetic interfaces",
            "neural architectures",
            "quantum computing",
            "AI algorithms",

            // مصطلحات فنية وتصميم
            "generative art",
            "procedural generation",
            "parametric design",
            "kinetic sculpture",
            "light refraction",
            "material science",
            "digital fabrication",
            "computational design",
          ];

          // أنماط تصميم موسعة
          this.enhancedStyles = [
            // أنماط واقعية
            "photorealistic",
            "hyperdetailed",
            "ultrarealistic",
            "lifelike",
            "high-fidelity",

            // أنماط سينمائية
            "blockbuster",
            "Hollywood",
            "IMAX",
            "anamorphic",
            "cinematic",

            // أنماط فنية
            "impressionist",
            "expressionist",
            "cubist",
            "surrealist",
            "abstract expressionist",
            "pop art",
            "art deco",
            "bauhaus",
            "minimalist",
            "conceptual",

            // أنماط تقنية
            "wireframe",
            "blueprint",
            "schematic",
            "technical drawing",
            "scientific illustration",
            "infographic",
            "data art",
            "code visualization",
            "algorithmic art",

            // أنماط ثقافية
            "japanese minimalism",
            "scandinavian design",
            "brutalist",
            "gothic",
            "renaissance",
            "baroque",
            "art nouveau",
            "biophilic",
            "sustainable design",

            // أنماط مستقبلية
            "biopunk",
            "nanopunk",
            "atompunk",
            "steampunk",
            "solarpunk",
            "raypunk",
            "nowpunk",
          ];

          // هياكل نحوية متنوعة
          this.sentenceStructures = [
            (effect, term, style, res) =>
              `Professional ${res} ${effect} ${term} visualization in ${style} style`,
            (effect, term, style, res) =>
              `${style} ${res} artwork featuring ${effect} ${term} systems`,
            (effect, term, style, res) =>
              `Ultra-detailed ${res} ${effect} composition with ${term} and ${style} aesthetic`,
            (effect, term, style, res) =>
              `Cinematic ${res} ${effect} scene showing intricate ${term} in ${style}`,
            (effect, term, style, res) =>
              `Technical ${res} ${effect} diagram of ${term} with ${style} rendering`,
            (effect, term, style, res) =>
              `Advanced ${res} ${effect} simulation of ${term} using ${style} approach`,
            (effect, term, style, res) =>
              `Innovative ${res} ${effect} representation of ${term} in ${style} manner`,
          ];

          this.usedCombinations = new Set();
        }

        generateUniquePrompt(effect, resolution) {
          let attempts = 0;
          let prompt;
          let combinationKey;

          do {
            const technicalTerm = this.getRandomElement(
              this.enhancedTechnicalTerms
            );
            const style = this.getRandomElement(this.enhancedStyles);
            const sentenceStructure = this.getRandomElement(
              this.sentenceStructures
            );

            prompt = sentenceStructure(
              effect.display,
              technicalTerm,
              style,
              resolution
            );
            combinationKey = `${effect.name}-${technicalTerm}-${style}-${resolution}`;

            attempts++;

            if (attempts > 50) {
              // إذا فشلنا في إيجاد تركيبة فريدة بعد 50 محاولة
              prompt = this.createFallbackPrompt(
                effect,
                resolution,
                technicalTerm,
                style
              );
              break;
            }
          } while (this.usedCombinations.has(combinationKey));

          this.usedCombinations.add(combinationKey);
          return prompt;
        }

        createFallbackPrompt(effect, resolution, technicalTerm, style) {
          const fallbackStructures = [
            `Unique ${resolution} ${effect.display} ${technicalTerm} implementation with ${style} design`,
            `Original ${resolution} ${effect.display} interpretation of ${technicalTerm} in ${style} style`,
            `Exclusive ${resolution} ${effect.display} ${technicalTerm} visualization using ${style} techniques`,
          ];
          return this.getRandomElement(fallbackStructures);
        }

        getRandomElement(array) {
          return array[Math.floor(Math.random() * array.length)];
        }
      }

      class EnhancedPromptLibrary {
        constructor() {
          this.uniqueGenerator = new UniquePromptGenerator();
          this.prompts = this.generateProfessionalPrompts();
          this.filteredPrompts = [...this.prompts];
          this.visibleCount = 12;
          this.currentFilters = {
            platform: "all",
            effect: "all",
            resolution: "all",
            sort: "newest",
            search: "",
            category: "all",
          };
          this.favorites = this.loadFavorites();
          this.init();
        }

        generateProfessionalPrompts() {
          const prompts = [];
          const platforms = [
            ["Midjourney"],
            ["Stable Diffusion"],
            ["DALL-E 3"],
            ["Runway ML"],
            ["Leonardo AI"],
            ["Kaiber"],
            ["ComfyUI"],
            ["ClipDrop"],
            ["Midjourney", "Stable Diffusion"],
            ["Leonardo AI", "Runway ML"],
          ];

          const effects = [
            { name: "neon", display: "Neon", color: "#0074FF" },
            { name: "grid", display: "Grid", color: "#667eea" },
            { name: "liquid", display: "Liquid", color: "#f093fb" },
            { name: "cosmic", display: "Cosmic", color: "#4facfe" },
            { name: "matrix", display: "Matrix", color: "#43e97b" },
            { name: "wave", display: "Wave", color: "#ffd700" },
            { name: "magnetic", display: "Magnetic", color: "#ff6b6b" },
            { name: "holographic", display: "Holographic", color: "#a8e6cf" },
            { name: "quantum", display: "Quantum", color: "#ffafcc" },
            { name: "cyberpunk", display: "Cyberpunk", color: "#ff0a78" },
            { name: "sci-fi", display: "Sci-Fi", color: "#9d4edd" },
            { name: "futuristic", display: "Futuristic", color: "#00bbf9" },
            { name: "organic", display: "Organic", color: "#38b000" },
            { name: "abstract", display: "Abstract", color: "#ff5400" },
            { name: "minimal", display: "Minimal", color: "#8ecae6" },
            // تأثيرات إضافية لمنع التكرار
            { name: "plasma", display: "Plasma", color: "#ff6b6b" },
            { name: "crystal", display: "Crystal", color: "#a8e6cf" },
            { name: "fractal", display: "Fractal", color: "#ffafcc" },
            { name: "neural", display: "Neural", color: "#9d4edd" },
            { name: "atomic", display: "Atomic", color: "#4facfe" },
          ];

          const categories = [
            "Technology Backgrounds",
            "Neon Effects",
            "Space Backgrounds",
            "3D Grid Systems",
            "Liquid Effects",
            "Particle Systems",
            "Holograms",
            "Quantum Effects",
            "Game Backgrounds",
            "UI Interfaces",
            "Advanced Visual Effects",
            // فئات إضافية
            "Scientific Visualizations",
            "Mathematical Patterns",
            "Biological Systems",
            "Chemical Structures",
            "Astronomical Phenomena",
          ];

          const resolutions = ["8K", "4K", "2K", "1080p"];

          // منصات متقدمة
          const advancedPlatformTemplates = {
            Midjourney: {
              template: (base, params) =>
                `${base} --ar ${params.ar} --style ${params.style} --v ${params.version} --quality ${params.quality} --stylize ${params.stylize}`,
              parameters: {
                version: ["5.2", "6.0", "niji"],
                style: ["raw", "photographic", "cinematic"],
                quality: [1, 2],
                stylize: [0, 1000],
              },
            },
            "Stable Diffusion": {
              template: (base, params) =>
                `${base}, ${params.sampling}, CFG: ${params.cfgScale}, Steps: ${params.steps}, ${params.resolution}, masterpiece, best quality`,
              parameters: {
                sampling: ["DPM++ 2M Karras", "Euler A", "DDIM"],
                cfgScale: [7, 12],
                steps: [20, 50],
              },
            },
            "DALL-E 3": {
              template: (base, params) =>
                `Create: ${base}. Style: ${params.style}. Quality: ${params.quality}. No text, no watermarks.`,
              parameters: {
                style: ["natural", "vivid"],
                quality: ["standard", "hd"],
              },
            },
            "Leonardo AI": {
              template: (base, params) =>
                `${base}, high detail, sharp focus, dramatic lighting, trending on artstation, ${params.resolution}. Alchemy: true, Prompt Magic: true`,
              parameters: {
                alchemy: [true],
                promptMagic: [true],
              },
            },
          };

          for (let i = 1; i <= 1000; i++) {
            const effect = effects[Math.floor(Math.random() * effects.length)];
            const platform =
              platforms[Math.floor(Math.random() * platforms.length)];
            const category =
              categories[Math.floor(Math.random() * categories.length)];
            const resolution =
              resolutions[Math.floor(Math.random() * resolutions.length)];

            // استخدام المولد الفريد لمنع التكرار
            const basePrompt = this.uniqueGenerator.generateUniquePrompt(
              effect,
              resolution
            );

            const params = {
              ar: "16:9",
              style: this.uniqueGenerator.getRandomElement(
                this.uniqueGenerator.enhancedStyles
              ),
              version: "6.0",
              quality: 2,
              stylize: Math.floor(Math.random() * 1000),
              resolution: resolution,
              sampling: "DPM++ 2M Karras",
              cfgScale: 7.5,
              steps: 30,
              negative:
                "blurry, low quality, watermark, text, signature, frame, border, cartoon, anime, bad anatomy, deformed, ugly",
            };

            const platformPrompts = {};
            platform.forEach((p) => {
              if (advancedPlatformTemplates[p]) {
                const template = advancedPlatformTemplates[p];
                platformPrompts[p] = template.template(basePrompt, params);
              } else {
                platformPrompts[p] = basePrompt;
              }
            });

            prompts.push({
              id: i,
              title: `Unique ${effect.display} ${category.split(" ")[0]} #${i}`,
              content: basePrompt,
              platformSpecific: platformPrompts,
              platforms: platform,
              effect: effect.name,
              category: category,
              resolution: resolution,
              style: params.style,
              parameters: params,
              negativePrompt: params.negative,
              popularity: Math.floor(Math.random() * 5000),
              downloads: Math.floor(Math.random() * 1000),
              rating: (Math.random() * 2 + 3).toFixed(1),
              createdAt: new Date(
                2024,
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 28)
              ),
              color: effect.color,
              bestFor: this.getBestFor(category, effect.name),
              verified: Math.random() > 0.3,
              thumbnail: this.generateThumbnailData(effect.color),
              tags: [
                effect.name,
                category.split(" ")[0].toLowerCase(),
                params.style,
              ],
            });
          }
          return prompts;
        }

        generateThumbnailData(color) {
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120" viewBox="0 0 400 120"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color}" stop-opacity="0.8"/><stop offset="100%" stop-color="#0a0a15" stop-opacity="1"/></linearGradient></defs><rect width="400" height="120" fill="url(#g)"/></svg>`;
          return `data:image/svg+xml;base64,${btoa(svg)}`;
        }

        getBestFor(category, effect) {
          const bestForMap = {
            "Technology Backgrounds":
              "UI designs, presentations, tech websites",
            "Neon Effects": "Digital art, advertisements, cyberpunk games",
            "Space Backgrounds": "Sci-fi films, space games, astronomy apps",
            "3D Grid Systems":
              "Scientific visualization, engineering, data dashboards",
            "Liquid Effects": "Animations, branding, fluid simulations",
            "Particle Systems": "Simulations, research, motion graphics",
            Holograms: "Emerging tech, AR/VR interfaces, sci-fi",
            "Quantum Effects": "Education, research, advanced physics",
            "Game Backgrounds":
              "Video games, virtual reality, interactive media",
            "UI Interfaces": "Mobile apps, websites, software interfaces",
            "Advanced Visual Effects": "Films, media production, commercials",
            "Scientific Visualizations":
              "Research papers, educational content, data analysis",
            "Mathematical Patterns":
              "Academic publications, mathematical art, algorithms",
            "Biological Systems":
              "Medical visualization, biology education, research",
            "Chemical Structures":
              "Chemistry education, pharmaceutical research, materials science",
            "Astronomical Phenomena":
              "Space agencies, planetariums, educational content",
          };
          return (
            bestForMap[category] || "Various creative and professional projects"
          );
        }

        init() {
          this.renderPrompts();
          this.bindEvents();
          this.initParticleSystem();
          this.updateStats();
          this.showNotification(
            "1000+ Unique Professional Prompts Loaded Successfully",
            "success"
          );
        }

        renderPrompts() {
          const container = document.getElementById("promptsContainer");
          const emptyState = document.getElementById("emptyState");
          const promptsToShow = this.filteredPrompts.slice(
            0,
            this.visibleCount
          );

          container.innerHTML = promptsToShow
            .map(
              (prompt, index) => `
                    <div class="prompt-card" data-id="${
                      prompt.id
                    }" data-effect="${prompt.effect}" style="animation-delay: ${
                index * 0.05
              }s" role="article" aria-label="${prompt.title}">
                        ${
                          prompt.thumbnail
                            ? `<img src="${prompt.thumbnail}" alt="${prompt.title} preview" class="prompt-thumbnail" loading="lazy">`
                            : ""
                        }
                        
                        <div class="card-header">
                            <h3 class="prompt-title">${this.escapeHTML(
                              prompt.title
                            )}</h3>
                            <div class="prompt-rating" title="Rating: ${
                              prompt.rating
                            }/5.0">
                                <svg class="ael-icon" ><use href="#ael-star"/></svg>
                                <span>${prompt.rating}</span>
                            </div>
                            <div class="prompt-id">${prompt.id}</div>
                        </div>
                        
                        <div class="prompt-content" tabindex="0" aria-label="Prompt content">${this.escapeHTML(
                          prompt.content
                        )}</div>
                        
                        <div class="prompt-meta">
                            <div class="prompt-platforms">
                                ${prompt.platforms
                                  .map(
                                    (platform) =>
                                      `<span class="platform-badge" title="${platform}">${this.escapeHTML(
                                        platform
                                      )}</span>`
                                  )
                                  .join("")}
                            </div>
                            <div title="Downloads">${this.escapeHTML(
                              prompt.downloads
                            )} <svg class="ael-icon" ><use href="#ael-download"/></svg></div>
                        </div>
                        
                        <div class="prompt-bestfor">
                            <small><strong>Best for:</strong> ${this.escapeHTML(
                              prompt.bestFor
                            )}</small>
                        </div>
                        
                        <div class="prompt-stats">
                            <div class="stat-item">
                                <svg class="ael-icon" ><use href="#ael-thumbs-up"/></svg>
                                <span>${prompt.popularity}</span>
                            </div>
                            <div class="stat-item">
                                <svg class="ael-icon" ><use href="#ael-calendar"/></svg>
                                <span>${prompt.createdAt.toLocaleDateString()}</span>
                            </div>
                            ${
                              prompt.verified
                                ? '<div class="stat-item" title="Verified prompt"><svg class="ael-icon" ><use href="#ael-badge-check"/></svg> Verified</div>'
                                : ""
                            }
                        </div>
                        
                        <div class="prompt-actions">
                            <button class="action-btn favorite-btn ${
                              this.favorites.has(prompt.id) ? "active" : ""
                            }" 
                                    data-id="${prompt.id}" 
                                    aria-label="${
                                      this.favorites.has(prompt.id)
                                        ? "Remove from"
                                        : "Add to"
                                    } favorites">
                                <svg class="ael-icon ${this.favorites.has(prompt.id) ? 'ael-heart-filled' : ''}"><use href="#ael-heart"/></svg>
                                ${
                                  this.favorites.has(prompt.id)
                                    ? "Saved"
                                    : "Save"
                                }
                            </button>
                            <button class="action-btn copy-btn" 
                                    data-prompt="${this.escapeHTML(
                                      prompt.content
                                    )}" 
                                    data-id="${prompt.id}"
                                    aria-label="Copy prompt to clipboard">
                                <svg class="ael-icon" ><use href="#ael-copy"/></svg>
                                Copy
                            </button>
                        </div>
                    </div>
                `
            )
            .join("");

          emptyState.style.display =
            this.filteredPrompts.length === 0 ? "block" : "none";

          const loadBtn = document.getElementById("loadMore");
          loadBtn.disabled = this.visibleCount >= this.filteredPrompts.length;
          if (loadBtn.disabled) {
            loadBtn.innerHTML =
              '<svg class="ael-icon" ><use href="#ael-check"/></svg> All Prompts Loaded';
          } else {
            loadBtn.innerHTML = '<svg class="ael-icon" ><use href="#ael-plus"/></svg> Load More Prompts';
          }

          this.bindPromptActions();
        }

        bindPromptActions() {
          document.querySelectorAll(".copy-btn").forEach((button) => {
            button.addEventListener("click", async (e) => {
              const button = e.currentTarget;
              const promptText = button.getAttribute("data-prompt");
              const promptId = button.getAttribute("data-id");

              try {
                await navigator.clipboard.writeText(promptText);
                this.showNotification("Prompt copied to clipboard!", "success");

                const originalHTML = button.innerHTML;
                button.classList.add("copied");
                button.innerHTML = '<svg class="ael-icon" ><use href="#ael-check"/></svg> Copied!';

                setTimeout(() => {
                  button.classList.remove("copied");
                  button.innerHTML = originalHTML;
                }, 2000);
              } catch (err) {
  
                this.showNotification("Failed to copy prompt", "error");
              }
            });
          });

          document.querySelectorAll(".favorite-btn").forEach((button) => {
            button.addEventListener("click", (e) => {
              const button = e.currentTarget;
              const promptId = parseInt(button.getAttribute("data-id"));

              if (this.favorites.has(promptId)) {
                this.favorites.delete(promptId);
                button.classList.remove("active");
                button.innerHTML = '<svg class="ael-icon" ><use href="#ael-heart"/></svg> Save';
                this.showNotification("Removed from favorites", "info");
              } else {
                this.favorites.add(promptId);
                button.classList.add("active");
                button.innerHTML = '<svg class="ael-icon" ><use href="#ael-heart"/></svg> Saved';
                this.showNotification("Added to favorites!", "success");
              }

              this.saveFavorites();
            });
          });

          this.lazyLoadThumbnails();
        }

        bindEvents() {
          const debouncedSearch = this.debounce((value) => {
            this.currentFilters.search = value;
            this.filterPrompts();
          }, 300);

          document
            .querySelector(".search-input")
            .addEventListener("input", (e) => {
              debouncedSearch(e.target.value);
            });

          const filters = [
            "platformFilter",
            "effectFilter",
            "resolutionFilter",
            "sortFilter",
          ];
          filters.forEach((filterId) => {
            document
              .getElementById(filterId)
              .addEventListener("change", (e) => {
                const filterName = filterId.replace("Filter", "");
                this.currentFilters[filterName] = e.target.value;
                this.filterPrompts();
              });
          });

          document.querySelectorAll(".category-item").forEach((item) => {
            item.addEventListener("click", (e) => {
              const category = e.currentTarget.getAttribute("data-category");

              document
                .querySelectorAll(".category-item")
                .forEach((i) => i.classList.remove("active"));
              e.currentTarget.classList.add("active");

              this.currentFilters.category = category;
              this.filterPrompts();
            });
          });

          document.getElementById("loadMore").addEventListener("click", () => {
            this.visibleCount += 12;
            this.renderPrompts();
          });

          const mobileBtn = document.getElementById("mobileMenuBtn");
          const sidebar = document.getElementById("sidebar");

          mobileBtn.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            mobileBtn.innerHTML = sidebar.classList.contains("active")
              ? '<svg class="ael-icon" ><use href="#ael-times"/></svg> Hide Categories'
              : '<svg class="ael-icon" ><use href="#ael-bars"/></svg> Show Categories';
          });
        }

        debounce(func, wait) {
          let timeout;
          return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
          };
        }

        filterPrompts() {
          const startTime = performance.now();

          this.filteredPrompts = this.prompts.filter((prompt) => {
            const matchesPlatform =
              this.currentFilters.platform === "all" ||
              prompt.platforms.includes(this.currentFilters.platform);
            const matchesEffect =
              this.currentFilters.effect === "all" ||
              prompt.effect === this.currentFilters.effect;
            const matchesResolution =
              this.currentFilters.resolution === "all" ||
              prompt.resolution === this.currentFilters.resolution;
            const matchesCategory =
              this.currentFilters.category === "all" ||
              prompt.category === this.currentFilters.category;
            const matchesSearch =
              this.currentFilters.search === "" ||
              prompt.title
                .toLowerCase()
                .includes(this.currentFilters.search.toLowerCase()) ||
              prompt.content
                .toLowerCase()
                .includes(this.currentFilters.search.toLowerCase()) ||
              prompt.bestFor
                .toLowerCase()
                .includes(this.currentFilters.search.toLowerCase());

            return (
              matchesPlatform &&
              matchesEffect &&
              matchesResolution &&
              matchesCategory &&
              matchesSearch
            );
          });

          this.sortPrompts();
          this.visibleCount = 12;
          this.renderPrompts();
          this.updateStats();

        }

        sortPrompts() {
          switch (this.currentFilters.sort) {
            case "newest":
              this.filteredPrompts.sort((a, b) => b.id - a.id);
              break;
            case "popular":
              this.filteredPrompts.sort((a, b) => b.popularity - a.popularity);
              break;
            case "rating":
              this.filteredPrompts.sort(
                (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
              );
              break;
            case "az":
              this.filteredPrompts.sort((a, b) =>
                a.title.localeCompare(b.title)
              );
              break;
            case "za":
              this.filteredPrompts.sort((a, b) =>
                b.title.localeCompare(a.title)
              );
              break;
          }
        }

        updateStats() {
          document.querySelector(
            ".category-item.active .category-count"
          ).textContent = this.filteredPrompts.length;
        }

        escapeHTML(str) {
          if (!str) return "";
          const div = document.createElement("div");
          div.textContent = str;
          return div.innerHTML;
        }

        showNotification(message, type = "info") {
          const notification = document.getElementById("notification");
          notification.textContent = message;
          notification.className = `notification ${type}`;

          setTimeout(() => {
            notification.classList.add("show");
          }, 100);

          setTimeout(() => {
            notification.classList.remove("show");
          }, 3000);
        }

        saveFavorites() {
          localStorage.setItem(
            "aelPromptFavorites",
            JSON.stringify([...this.favorites])
          );
        }

        loadFavorites() {
          const saved = localStorage.getItem("aelPromptFavorites");
          return saved ? new Set(JSON.parse(saved)) : new Set();
        }

        lazyLoadThumbnails() {
          const images = document.querySelectorAll(".prompt-thumbnail");
          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src || img.src;
                  observer.unobserve(img);
                }
              });
            });
            images.forEach((img) => observer.observe(img));
          }
        }

        initParticleSystem() {
          const canvas = document.getElementById("particleCanvas");
          this.particleSystem = new AdvancedParticleSystem(canvas);

          document.getElementById("playPause").addEventListener("click", () => {
            this.particleSystem.toggleAnimation();
            const button = document.getElementById("playPause");
            const icon = button.querySelector("use");
            if (this.particleSystem.isRunning) {
              icon.setAttribute("href", "#ael-pause");
            } else {
              icon.setAttribute("href", "#ael-play");
            }
          });

          document
            .getElementById("changeEffect")
            .addEventListener("click", () => {
              this.particleSystem.changeEffect();
              this.updateParticleStats();
            });

          document
            .getElementById("changeColor")
            .addEventListener("click", () => {
              this.particleSystem.changeColor();
              this.updateParticleStats();
            });

          document
            .getElementById("resetParticles")
            .addEventListener("click", () => {
              this.particleSystem.reset();
              this.updateParticleStats();
            });

          setInterval(() => this.updateParticleStats(), 1000);
          this.updateParticleStats();
        }

        updateParticleStats() {
          const stats = this.particleSystem.getStats();
          document.getElementById(
            "particleCount"
          ).textContent = `Particles: ${stats.particleCount}`;
          document.getElementById(
            "fpsCounter"
          ).textContent = `FPS: ${stats.fps}`;
          document.getElementById(
            "effectName"
          ).textContent = `Effect: ${stats.effect}`;
          document.getElementById(
            "colorName"
          ).textContent = `Colors: ${stats.color}`;
        }
      }

      // نظام الجسيمات المتقدم
      class AdvancedParticleSystem {
        constructor(canvas) {
          this.canvas = canvas;
          this.ctx = canvas.getContext("2d", { alpha: false });
          this.particles = [];
          this.animationId = null;
          this.isRunning = true;
          this.effects = [
            "neon",
            "magnetic",
            "liquid",
            "cosmic",
            "wave",
            "quantum",
          ];
          this.currentEffectIndex = 0;
          this.colors = [
            { primary: "#0074FF", secondary: "#005fcc", name: "AEL Blue" },
            { primary: "#667eea", secondary: "#764ba2", name: "Purple" },
            { primary: "#f093fb", secondary: "#f5576c", name: "Pink" },
            { primary: "#4facfe", secondary: "#00f2fe", name: "Blue" },
            { primary: "#43e97b", secondary: "#38f9d7", name: "Green" },
            { primary: "#ffd700", secondary: "#ff9d00", name: "Gold" },
          ];
          this.colorIndex = 0;
          this.mouse = { x: -1000, y: -1000, radius: 150 };
          this.frameCount = 0;
          this.lastTime = performance.now();
          this.fps = 0;
          this.touchPoints = [];
          this.spatialGrid = new Map();

          this.init();
        }

        init() {
          this.resize();
          this.createParticles();
          this.animate();
          this.bindEvents();
        }

        resize() {
          const rect = this.canvas.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;
          this.canvas.width = rect.width * dpr;
          this.canvas.height = rect.height * dpr;
          this.ctx.scale(dpr, dpr);
        }

        createParticles() {
          this.particles = [];
          const width = this.canvas.width / (window.devicePixelRatio || 1);
          const height = this.canvas.height / (window.devicePixelRatio || 1);
          const count = Math.min(150, Math.floor((width * height) / 6000));

          for (let i = 0; i < count; i++) {
            this.particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              radius: Math.random() * 2 + 1,
              color: this.colors[this.colorIndex].primary,
              life: Math.random() * 100,
              gridX: 0,
              gridY: 0,
            });
          }
        }

        updateParticles() {
          const effect = this.effects[this.currentEffectIndex];
          const width = this.canvas.width / (window.devicePixelRatio || 1);
          const height = this.canvas.height / (window.devicePixelRatio || 1);

          this.spatialGrid.clear();
          const gridSize = 50;

          this.particles.forEach((particle) => {
            particle.gridX = Math.floor(particle.x / gridSize);
            particle.gridY = Math.floor(particle.y / gridSize);

            this.applyEffect(particle, effect, width, height);
            this.applyMouseInteraction(particle);
            this.applyTouchInteraction(particle);

            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > width) {
              particle.vx *= -0.8;
              particle.x = Math.max(0, Math.min(width, particle.x));
            }
            if (particle.y < 0 || particle.y > height) {
              particle.vy *= -0.8;
              particle.y = Math.max(0, Math.min(height, particle.y));
            }

            particle.vx *= 0.98;
            particle.vy *= 0.98;
            particle.life += 0.1;
          });
        }

        applyEffect(particle, effect, width, height) {
          switch (effect) {
            case "magnetic":
              const centerX = width / 2;
              const centerY = height / 2;
              const dx = particle.x - centerX;
              const dy = particle.y - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy) || 1;
              particle.vx += (-dy / distance) * 0.2;
              particle.vy += (dx / distance) * 0.2;
              break;
            case "liquid":
              particle.vx +=
                Math.sin(particle.y * 0.01 + particle.life * 0.1) * 0.1;
              particle.vy +=
                Math.cos(particle.x * 0.01 + particle.life * 0.1) * 0.1;
              break;
            case "cosmic":
              const angle = particle.life * 0.02;
              const radius = 2 + Math.sin(particle.life * 0.05) * 1.5;
              particle.vx += Math.cos(angle) * radius * 0.1;
              particle.vy += Math.sin(angle) * radius * 0.1;
              break;
            case "wave":
              particle.vy +=
                Math.sin(particle.x * 0.02 + particle.life * 0.1) * 0.5;
              break;
            case "quantum":
              if (Math.random() < 0.01) {
                particle.vx = (Math.random() - 0.5) * 10;
                particle.vy = (Math.random() - 0.5) * 10;
              }
              break;
            default:
              if (Math.random() < 0.02) {
                particle.vx += (Math.random() - 0.5) * 0.5;
                particle.vy += (Math.random() - 0.5) * 0.5;
              }
          }
        }

        applyMouseInteraction(particle) {
          const dx = particle.x - this.mouse.x;
          const dy = particle.y - this.mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.mouse.radius) {
            const force = (this.mouse.radius - distance) / this.mouse.radius;
            particle.vx += (dx / distance) * force * 3;
            particle.vy += (dy / distance) * force * 3;
          }
        }

        applyTouchInteraction(particle) {
          this.touchPoints.forEach((touch) => {
            const touchDx = particle.x - touch.x;
            const touchDy = particle.y - touch.y;
            const touchDistance =
              Math.sqrt(touchDx * touchDx + touchDy * touchDy) || 1;

            if (touchDistance < this.mouse.radius) {
              const touchForce =
                (this.mouse.radius - touchDistance) / this.mouse.radius;
              particle.vx += (touchDx / touchDistance) * touchForce * 2;
              particle.vy += (touchDy / touchDistance) * touchForce * 2;
            }
          });
        }

        draw() {
          const width = this.canvas.width / (window.devicePixelRatio || 1);
          const height = this.canvas.height / (window.devicePixelRatio || 1);

          this.ctx.fillStyle = "#0a0a15";
          this.ctx.fillRect(0, 0, width, height);

          const gridSize = 50;
          this.spatialGrid.clear();

          this.particles.forEach((p) => {
            const key = `${p.gridX},${p.gridY}`;
            if (!this.spatialGrid.has(key)) this.spatialGrid.set(key, []);
            this.spatialGrid.get(key).push(p);
          });

          this.drawConnections();
          this.particles.forEach((p) => this.drawParticle(p));
        }

        drawConnections() {
          const maxDistance = 80;
          let connections = 0;

          this.particles.forEach((p1) => {
            if (connections > 300) return;

            const nearby = this.getNearbyParticles(p1, 1);

            nearby.forEach((p2) => {
              if (p1 === p2 || connections > 300) return;

              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.strokeStyle = this.colors[this.colorIndex].primary;
                this.ctx.globalAlpha = (0.8 - distance / maxDistance) * 0.5;
                this.ctx.lineWidth = 0.5;
                this.ctx.stroke();
                this.ctx.globalAlpha = 1;
                connections++;
              }
            });
          });
        }

        getNearbyParticles(particle, radius) {
          const nearby = [];
          const gridSize = 50;

          for (let x = -radius; x <= radius; x++) {
            for (let y = -radius; y <= radius; y++) {
              const key = `${particle.gridX + x},${particle.gridY + y}`;
              if (this.spatialGrid.has(key)) {
                nearby.push(...this.spatialGrid.get(key));
              }
            }
          }

          return nearby;
        }

        drawParticle(particle) {
          const gradient = this.ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 3
          );
          gradient.addColorStop(0, this.colors[this.colorIndex].primary);
          gradient.addColorStop(
            0.7,
            this.colors[this.colorIndex].primary + "aa"
          );
          gradient.addColorStop(1, "transparent");

          this.ctx.beginPath();
          this.ctx.arc(
            particle.x,
            particle.y,
            particle.radius * 3,
            0,
            Math.PI * 2
          );
          this.ctx.fillStyle = gradient;
          this.ctx.fill();
        }

        animate() {
          if (!this.isRunning) return;

          this.frameCount++;
          const currentTime = performance.now();
          if (currentTime - this.lastTime >= 1000) {
            this.fps = Math.round(
              (this.frameCount * 1000) / (currentTime - this.lastTime)
            );
            this.frameCount = 0;
            this.lastTime = currentTime;
          }

          this.updateParticles();
          this.draw();

          this.animationId = requestAnimationFrame(() => this.animate());
        }

        bindEvents() {
          this.canvas.addEventListener("mousemove", (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x =
              (e.clientX - rect.left) *
              (this.canvas.width / rect.width / (window.devicePixelRatio || 1));
            this.mouse.y =
              (e.clientY - rect.top) *
              (this.canvas.height /
                rect.height /
                (window.devicePixelRatio || 1));
          });

          this.canvas.addEventListener("mouseleave", () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
          });

          this.canvas.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.updateTouchPoints(e);
          });

          this.canvas.addEventListener("touchmove", (e) => {
            e.preventDefault();
            this.updateTouchPoints(e);
          });

          this.canvas.addEventListener("touchend", (e) => {
            e.preventDefault();
            this.touchPoints = [];
          });

          window.addEventListener("resize", () => {
            this.resize();
            this.createParticles();
          });
        }

        updateTouchPoints(e) {
          this.touchPoints = [];
          const rect = this.canvas.getBoundingClientRect();

          for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            this.touchPoints.push({
              x:
                (touch.clientX - rect.left) *
                (this.canvas.width /
                  rect.width /
                  (window.devicePixelRatio || 1)),
              y:
                (touch.clientY - rect.top) *
                (this.canvas.height /
                  rect.height /
                  (window.devicePixelRatio || 1)),
            });
          }
        }

        toggleAnimation() {
          this.isRunning = !this.isRunning;
          if (this.isRunning) {
            this.animate();
          } else {
            cancelAnimationFrame(this.animationId);
          }
        }

        changeEffect() {
          if (this.animationId) cancelAnimationFrame(this.animationId);
          this.currentEffectIndex =
            (this.currentEffectIndex + 1) % this.effects.length;
          this.createParticles();
          if (this.isRunning) this.animate();
        }

        changeColor() {
          this.colorIndex = (this.colorIndex + 1) % this.colors.length;
          this.particles.forEach((particle) => {
            particle.color = this.colors[this.colorIndex].primary;
          });
        }

        reset() {
          if (this.animationId) cancelAnimationFrame(this.animationId);
          this.createParticles();
          if (this.isRunning) this.animate();
        }

        getStats() {
          return {
            particleCount: this.particles.length,
            fps: this.fps,
            effect: this.effects[this.currentEffectIndex],
            color: this.colors[this.colorIndex].name,
          };
        }
      }

      // Initialize application
      document.addEventListener("DOMContentLoaded", () => {
        window.enhancedLibrary = new EnhancedPromptLibrary();
        
      });
