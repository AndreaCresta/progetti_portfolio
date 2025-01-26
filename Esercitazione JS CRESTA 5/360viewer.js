class BikeViewer {
    constructor(container) {
        this.container = container;
        this.images = [];
        this.currentFrame = 0;
        this.isLoaded = false;
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.totalFrames = 19;
        
        this.loadImages();
    }

    async loadImages() {
        const imagePromises = [];
        
        for (let i = 1; i <= this.totalFrames; i++) {
            const img = new Image();
            img.src = `360images/${i}.jpg`;
            img.classList.add('viewer-image');
            if (i === 1) {
                img.style.display = 'block';
                img.classList.add('active');
            }
            
            this.container.appendChild(img);
            this.images.push(img);
            
            imagePromises.push(new Promise((resolve) => {
                img.onload = () => {
                    img.dataset.loaded = 'true';
                    resolve();
                };
                img.onerror = resolve;
            }));
        }

        await Promise.all(imagePromises);
        this.isLoaded = true;
        this.setupEvents();
    }

    setupEvents() {
        this.container.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startDragging(e);
        });
        
        window.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.drag(e);
            }
        });
        
        window.addEventListener('mouseup', () => this.stopDragging());

        this.container.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startDragging(e);
        });
        
        window.addEventListener('touchmove', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.drag(e);
            }
        });
        
        window.addEventListener('touchend', () => this.stopDragging());
    }

    startDragging(e) {
        this.isDragging = true;
        this.startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        this.currentX = this.startX;
    }

    drag(e) {
        if (!this.isDragging || !this.isLoaded) return;
        
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = x - this.currentX;

        if (Math.abs(diff) > 5) {
            this.currentX = x;
            const direction = diff > 0 ? 1 : -1;
            this.updateFrame(direction);
        }
    }

    stopDragging() {
        this.isDragging = false;
    }

    updateFrame(direction) {
        // Calculate next frame before hiding current
        const nextFrame = (this.currentFrame - direction + this.totalFrames) % this.totalFrames;
        
        // Show next frame before hiding current
        this.images[nextFrame].style.display = 'block';
        this.images[nextFrame].classList.add('active');
        
        // Hide current frame
        this.images[this.currentFrame].style.display = 'none';
        this.images[this.currentFrame].classList.remove('active');
        
        // Update current frame
        this.currentFrame = nextFrame;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const viewerContainer = document.getElementById('bike-viewer');
    if (viewerContainer) {
        new BikeViewer(viewerContainer);
    }
}); 