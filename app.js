// Application data from the provided JSON
const appData = {
    "platform_name": "Vidfly",
    "regular_videos": [
        {
            "id": 1,
            "title": "Building Modern Web Apps in 2025",
            "thumbnail": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
            "duration": "12:34",
            "channel": "TechGuru",
            "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40",
            "views": "2.1M views",
            "uploaded": "2 days ago",
            "verified": true,
            "category": "Technology"
        },
        {
            "id": 2,
            "title": "Amazing Travel Destinations 2025",
            "thumbnail": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            "duration": "8:45",
            "channel": "WanderWorld",
            "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b975?w=40",
            "views": "892K views",
            "uploaded": "1 week ago",
            "verified": true,
            "category": "Travel"
        },
        {
            "id": 3,
            "title": "Cooking Tips for Beginners",
            "thumbnail": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
            "duration": "15:22",
            "channel": "ChefMaster",
            "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40",
            "views": "1.5M views",
            "uploaded": "3 days ago",
            "verified": false,
            "category": "Cooking"
        },
        {
            "id": 4,
            "title": "Latest Gaming News & Reviews",
            "thumbnail": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
            "duration": "22:10",
            "channel": "GameZone",
            "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40",
            "views": "3.2M views",
            "uploaded": "5 hours ago",
            "verified": true,
            "category": "Gaming"
        },
        {
            "id": 5,
            "title": "Fitness Routine for Busy People",
            "thumbnail": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            "duration": "10:55",
            "channel": "FitLife",
            "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40",
            "views": "654K views",
            "uploaded": "1 day ago",
            "verified": false,
            "category": "Sports"
        },
        {
            "id": 6,
            "title": "Music Production Masterclass",
            "thumbnail": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
            "duration": "18:30",
            "channel": "BeatMakers",
            "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40",
            "views": "1.8M views",
            "uploaded": "4 days ago",
            "verified": true,
            "category": "Music"
        }
    ],
    "shorts_videos": [
        {
            "id": 101,
            "title": "Quick Coding Tip",
            "video_url": "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
            "thumbnail": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300",
            "channel": "CodeTips",
            "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=40",
            "likes": "12.5K",
            "comments": "234",
            "shares": "89",
            "views": "45.2K"
        },
        {
            "id": 102,
            "title": "Dance Challenge",
            "video_url": "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
            "thumbnail": "https://images.unsplash.com/photo-1547153760-18fc86324498?w=300",
            "channel": "DanceLife",
            "avatar": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=40",
            "likes": "8.7K",
            "comments": "156",
            "shares": "67",
            "views": "23.1K"
        },
        {
            "id": 103,
            "title": "Recipe in 60 Seconds",
            "video_url": "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
            "thumbnail": "https://images.unsplash.com/photo-1556909114-4f6e7ad7d3136?w=300",
            "channel": "QuickEats",
            "avatar": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40",
            "likes": "15.2K",
            "comments": "312",
            "shares": "145",
            "views": "67.8K"
        },
        {
            "id": 104,
            "title": "Amazing Life Hack",
            "video_url": "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
            "thumbnail": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
            "channel": "LifeHacks",
            "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40",
            "likes": "9.3K",
            "comments": "78",
            "shares": "34",
            "views": "31.5K"
        }
    ],
    "categories": ["All", "Gaming", "Music", "Sports", "Technology", "Cooking", "Travel", "Education", "Entertainment"],
    "trending_tags": ["#viral", "#shorts", "#trending", "#funny", "#music", "#gaming", "#cooking", "#travel", "#tech", "#fitness"]
};

class VidFly {
    constructor() {
        this.currentSection = 'home';
        this.currentShortIndex = 0;
        this.currentCategory = 'All';
        this.isSubscribed = {};
        this.likedVideos = {};
        this.filteredVideos = [...appData.regular_videos];
        this.shortsEventListeners = [];
        this.init();
    }

    init() {
        console.log('VidFly initializing...');
        this.bindEvents();
        this.renderVideos();
        this.renderShorts();
        this.updateActiveSection();
        console.log('VidFly initialized successfully');
    }

    bindEvents() {
        // Menu toggle
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', this.toggleSidebar.bind(this));
        }
        
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = e.currentTarget.dataset.section;
                console.log('Navigation clicked:', section);
                this.switchSection(section);
            });
        });

        // Category filter
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const category = e.target.dataset.category;
                console.log('Category clicked:', category);
                this.filterByCategory(category);
            });
        });

        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleSearch();
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearch();
                }
            });
        }

        // Modal controls
        const modalClose = document.getElementById('modalClose');
        const videoModal = document.getElementById('videoModal');
        
        if (modalClose) {
            modalClose.addEventListener('click', this.closeModal.bind(this));
        }
        
        if (videoModal) {
            videoModal.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    this.closeModal();
                }
            });
        }

        // Modal actions
        const modalLikeBtn = document.getElementById('modalLikeBtn');
        const modalSubscribeBtn = document.getElementById('modalSubscribeBtn');
        const modalShareBtn = document.getElementById('modalShareBtn');
        
        if (modalLikeBtn) {
            modalLikeBtn.addEventListener('click', this.handleLike.bind(this));
        }
        
        if (modalSubscribeBtn) {
            modalSubscribeBtn.addEventListener('click', this.handleSubscribe.bind(this));
        }
        
        if (modalShareBtn) {
            modalShareBtn.addEventListener('click', this.handleShare.bind(this));
        }

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboard.bind(this));

        // Responsive handling
        window.addEventListener('resize', this.handleResize.bind(this));

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('show');
        } else {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
    }

    switchSection(section) {
        console.log('Switching to section:', section);
        
        // Clear any existing shorts event listeners
        this.cleanupShortsEvents();
        
        // Update navigation active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeNavItem = document.querySelector(`[data-section="${section}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(contentSection => {
            contentSection.classList.remove('active');
            contentSection.style.display = 'none';
        });
        
        // Show the target section
        const targetSectionId = `${section}Section`;
        const activeSection = document.getElementById(targetSectionId);
        
        if (activeSection) {
            activeSection.classList.add('active');
            activeSection.style.display = 'block';
            console.log('Section activated:', section);
        } else {
            console.error('Section not found:', targetSectionId);
            return;
        }

        this.currentSection = section;

        // Handle section-specific logic
        if (section === 'shorts') {
            console.log('Initializing shorts section...');
            setTimeout(() => {
                this.initShorts();
            }, 100);
        } else if (section === 'trending') {
            this.renderTrendingVideos();
        } else if (section === 'home') {
            // Reset to all videos when returning to home
            this.filterByCategory('All');
        }

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.remove('show');
            }
        }

        this.updateActiveSection();
    }

    renderVideos(videos = null) {
        const videosToRender = videos || this.filteredVideos;
        const videoGrid = document.getElementById('videoGrid');
        
        if (!videoGrid) {
            console.error('Video grid not found');
            return;
        }
        
        console.log('Rendering', videosToRender.length, 'videos');
        
        const videoHTML = videosToRender.map(video => `
            <div class="video-card" data-video-id="${video.id}" style="cursor: pointer;">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+VmlkZW8gVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4='">
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <div class="video-meta">
                        <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2NjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzk5OSI+CjxwYXRoIGQ9Ik0xMiAyQzEzLjEgMiAxNCAyLjkgMTQgNEMxNCA1LjEgMTMuMSA2IDEyIDZDMTAuOSA2IDEwIDUuMSAxMCA0QzEwIDIuOSAxMC45IDIgMTIgMlpNMjEgOVYyMkgxOVYxNkgxM1YyMkg5VjlIMTVWN0g5VjlaMTUgMTZWMTFIMTVWOUgxOVYxNlYyMlYxNloiLz4KPC9zdmc+Cjwvc3ZnPgo='">
                        <div class="video-details">
                            <div class="video-title">${video.title}</div>
                            <div class="channel-name ${video.verified ? 'verified' : ''}">${video.channel}</div>
                            <div class="video-stats">${video.views} • ${video.uploaded}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        videoGrid.innerHTML = videoHTML;

        // Add click events to video cards with event delegation
        setTimeout(() => {
            videoGrid.querySelectorAll('.video-card').forEach((card, index) => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const videoId = parseInt(e.currentTarget.dataset.videoId);
                    console.log('Video card clicked, ID:', videoId, 'Index:', index);
                    this.openVideoModal(videoId);
                });
            });
        }, 100);
    }

    renderTrendingVideos() {
        const trendingGrid = document.getElementById('trendingGrid');
        if (!trendingGrid) {
            console.error('Trending grid not found');
            return;
        }
        
        // Shuffle videos for trending effect
        const shuffledVideos = [...appData.regular_videos].sort(() => Math.random() - 0.5);
        
        const videoHTML = shuffledVideos.map(video => `
            <div class="video-card" data-video-id="${video.id}" style="cursor: pointer;">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <div class="video-meta">
                        <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar">
                        <div class="video-details">
                            <div class="video-title">${video.title}</div>
                            <div class="channel-name ${video.verified ? 'verified' : ''}">${video.channel}</div>
                            <div class="video-stats">${video.views} • ${video.uploaded}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        trendingGrid.innerHTML = videoHTML;

        // Add click events
        setTimeout(() => {
            trendingGrid.querySelectorAll('.video-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const videoId = parseInt(e.currentTarget.dataset.videoId);
                    this.openVideoModal(videoId);
                });
            });
        }, 100);
    }

    renderShorts() {
        const shortsPlayer = document.getElementById('shortsPlayer');
        if (!shortsPlayer) {
            console.error('Shorts player not found');
            return;
        }
        
        const shortsHTML = appData.shorts_videos.map((short, index) => `
            <div class="short-video ${index === 0 ? 'active' : ''}" data-short-id="${short.id}" data-index="${index}">
                <video loop muted ${index === 0 ? 'autoplay' : ''} poster="${short.thumbnail}">
                    <source src="${short.video_url}" type="video/mp4">
                </video>
                <div class="shorts-controls">
                    <button class="shorts-btn like-btn" data-action="like" data-count="${short.likes}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                        </svg>
                        <span>${short.likes}</span>
                    </button>
                    <button class="shorts-btn comment-btn" data-action="comment" data-count="${short.comments}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.89 2 2 2h14l4 4-.01-18z"/>
                        </svg>
                        <span>${short.comments}</span>
                    </button>
                    <button class="shorts-btn share-btn" data-action="share" data-count="${short.shares}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                        </svg>
                        <span>${short.shares}</span>
                    </button>
                </div>
                <div class="shorts-info">
                    <div class="shorts-channel">
                        <img src="${short.avatar}" alt="${short.channel}">
                        <span class="shorts-channel-name">${short.channel}</span>
                        <button class="subscribe-btn" data-channel="${short.channel}">Subscribe</button>
                    </div>
                    <div class="shorts-title">${short.title}</div>
                </div>
            </div>
        `).join('');

        shortsPlayer.innerHTML = shortsHTML;
        console.log('Shorts rendered successfully');
    }

    cleanupShortsEvents() {
        // Clean up existing event listeners
        this.shortsEventListeners.forEach(({ element, event, handler }) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(event, handler);
            }
        });
        this.shortsEventListeners = [];
    }

    initShorts() {
        const shortsPlayer = document.getElementById('shortsPlayer');
        if (!shortsPlayer) {
            console.error('Shorts player not found for initialization');
            return;
        }

        console.log('Initializing shorts functionality...');

        // Clean up any existing event listeners first
        this.cleanupShortsEvents();

        // Reset to first short
        this.currentShortIndex = 0;
        
        // Add event listeners for shorts controls
        const shortsButtons = shortsPlayer.querySelectorAll('.shorts-btn');
        const subscribeButtons = shortsPlayer.querySelectorAll('.short-video .subscribe-btn');
        
        shortsButtons.forEach(btn => {
            const handler = this.handleShortsAction.bind(this);
            btn.addEventListener('click', handler);
            this.shortsEventListeners.push({ element: btn, event: 'click', handler });
        });

        subscribeButtons.forEach(btn => {
            const handler = (e) => {
                e.stopPropagation();
                this.handleSubscribe(e);
            };
            btn.addEventListener('click', handler);
            this.shortsEventListeners.push({ element: btn, event: 'click', handler });
        });
        
        // Touch/swipe support for mobile
        let startY = 0;
        let currentY = 0;

        const handleTouchStart = (e) => {
            startY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
            currentY = e.touches[0].clientY;
        };

        const handleTouchEnd = () => {
            const diffY = startY - currentY;
            if (Math.abs(diffY) > 50) {
                if (diffY > 0) {
                    this.nextShort();
                } else {
                    this.previousShort();
                }
            }
        };

        shortsPlayer.addEventListener('touchstart', handleTouchStart);
        shortsPlayer.addEventListener('touchmove', handleTouchMove);
        shortsPlayer.addEventListener('touchend', handleTouchEnd);

        this.shortsEventListeners.push(
            { element: shortsPlayer, event: 'touchstart', handler: handleTouchStart },
            { element: shortsPlayer, event: 'touchmove', handler: handleTouchMove },
            { element: shortsPlayer, event: 'touchend', handler: handleTouchEnd }
        );

        // Mouse wheel support for desktop
        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                this.nextShort();
            } else {
                this.previousShort();
            }
        };

        shortsPlayer.addEventListener('wheel', handleWheel);
        this.shortsEventListeners.push({ element: shortsPlayer, event: 'wheel', handler: handleWheel });

        // Start playing the first video
        setTimeout(() => {
            const firstVideo = shortsPlayer.querySelector('.short-video.active video');
            if (firstVideo) {
                firstVideo.play().catch(e => console.log('Autoplay prevented:', e));
                console.log('First short video started playing');
            }
        }, 500);

        console.log('Shorts initialization complete');
    }

    nextShort() {
        if (this.currentShortIndex < appData.shorts_videos.length - 1) {
            this.switchShort(this.currentShortIndex + 1);
        }
    }

    previousShort() {
        if (this.currentShortIndex > 0) {
            this.switchShort(this.currentShortIndex - 1);
        }
    }

    switchShort(index) {
        console.log('Switching to short:', index);
        
        const currentShort = document.querySelector('.short-video.active');
        const nextShort = document.querySelectorAll('.short-video')[index];

        if (currentShort) {
            const currentVideo = currentShort.querySelector('video');
            if (currentVideo) {
                currentVideo.pause();
                currentVideo.currentTime = 0;
            }
            currentShort.classList.remove('active');
        }

        if (nextShort) {
            const nextVideo = nextShort.querySelector('video');
            nextShort.classList.add('active');
            if (nextVideo) {
                nextVideo.play().catch(e => console.log('Video play failed:', e));
            }
            this.currentShortIndex = index;
        }
    }

    handleShortsAction(e) {
        e.stopPropagation();
        e.preventDefault();
        
        const action = e.currentTarget.dataset.action;
        const shortId = e.currentTarget.closest('.short-video').dataset.shortId;
        
        console.log('Shorts action:', action, 'Short ID:', shortId);
        
        switch (action) {
            case 'like':
                this.toggleShortsLike(e.currentTarget, shortId);
                break;
            case 'comment':
                this.showToast('Comments feature coming soon!');
                break;
            case 'share':
                this.handleShare();
                break;
        }
    }

    toggleShortsLike(button, shortId) {
        const isLiked = button.classList.contains('liked');
        const countSpan = button.querySelector('span');
        let countText = countSpan.textContent;
        let count = parseFloat(countText.replace(/[^\d.]/g, ''));
        
        // Handle K suffix
        if (countText.includes('K')) {
            count = count * 1000;
        }
        
        if (isLiked) {
            button.classList.remove('liked');
            count = Math.max(0, count - 1);
            button.style.color = '#ffffff';
        } else {
            button.classList.add('liked');
            count++;
            button.style.color = '#ff0000';
        }
        
        countSpan.textContent = this.formatCount(count);
        this.showToast(isLiked ? 'Removed like' : 'Liked!');
    }

    openVideoModal(videoId) {
        const video = appData.regular_videos.find(v => v.id === videoId);
        if (!video) {
            console.error('Video not found:', videoId);
            this.showToast('Video not found');
            return;
        }

        console.log('Opening modal for video:', video.title);

        const modalTitle = document.getElementById('modalVideoTitle');
        const modalChannelName = document.getElementById('modalChannelName');
        const modalVideoViews = document.getElementById('modalVideoViews');
        const modalChannelAvatar = document.getElementById('modalChannelAvatar');
        const videoModal = document.getElementById('videoModal');

        if (modalTitle) modalTitle.textContent = video.title;
        if (modalChannelName) modalChannelName.textContent = video.channel;
        if (modalVideoViews) modalVideoViews.textContent = `${video.views} • ${video.uploaded}`;
        if (modalChannelAvatar) modalChannelAvatar.src = video.avatar;

        // Set video source (using thumbnail as placeholder since we don't have actual video files)
        const videoPlayer = document.getElementById('modalVideoPlayer');
        if (videoPlayer) {
            videoPlayer.poster = video.thumbnail;
            // In a real app, you would set the actual video src here
            videoPlayer.src = 'data:video/mp4;base64,'; // Empty video to avoid errors
        }

        if (videoModal) {
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Video modal opened successfully');
        }
    }

    closeModal() {
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.classList.remove('active');
        }
        document.body.style.overflow = 'auto';
        
        // Pause video
        const videoPlayer = document.getElementById('modalVideoPlayer');
        if (videoPlayer) {
            videoPlayer.pause();
        }
        console.log('Video modal closed');
    }

    handleLike() {
        const likeBtn = document.getElementById('modalLikeBtn');
        if (likeBtn) {
            likeBtn.classList.toggle('liked');
            const isLiked = likeBtn.classList.contains('liked');
            if (isLiked) {
                likeBtn.style.color = '#ff0000';
            } else {
                likeBtn.style.color = '#ffffff';
            }
            this.showToast(isLiked ? 'Added to liked videos' : 'Removed from liked videos');
        }
    }

    handleSubscribe(e) {
        const subscribeBtn = e ? e.currentTarget : document.getElementById('modalSubscribeBtn');
        if (!subscribeBtn) return;
        
        const isSubscribed = subscribeBtn.classList.contains('subscribed');
        
        if (isSubscribed) {
            subscribeBtn.classList.remove('subscribed');
            subscribeBtn.textContent = 'Subscribe';
            subscribeBtn.style.backgroundColor = '#ff0000';
            this.showToast('Unsubscribed');
        } else {
            subscribeBtn.classList.add('subscribed');
            subscribeBtn.textContent = 'Subscribed';
            subscribeBtn.style.backgroundColor = '#606060';
            this.showToast('Subscribed!');
        }
    }

    handleShare() {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this video on Vidfly',
                url: window.location.href
            }).catch(e => console.log('Share failed:', e));
        } else {
            // Fallback: copy to clipboard
            const url = window.location.href;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(() => {
                    this.showToast('Link copied to clipboard!');
                }).catch(() => {
                    this.showToast('Unable to copy link');
                });
            } else {
                this.showToast('Share: ' + url);
            }
        }
    }

    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            this.showToast('Please enter a search term');
            return;
        }

        console.log('Searching for:', query);
        
        // Filter videos based on search query
        const searchResults = appData.regular_videos.filter(video => {
            return video.title.toLowerCase().includes(query) ||
                   video.channel.toLowerCase().includes(query) ||
                   (video.category && video.category.toLowerCase().includes(query));
        });

        this.filteredVideos = [...searchResults];
        
        // Ensure we're on the home section to show results
        if (this.currentSection !== 'home') {
            this.switchSection('home');
        }
        
        // Reset category filter
        this.currentCategory = 'All';
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-category="All"]')?.classList.add('active');
        
        this.renderVideos();
        
        if (searchResults.length === 0) {
            this.showToast(`No results found for "${query}"`);
        } else {
            this.showToast(`Found ${searchResults.length} results for "${query}"`);
        }
    }

    filterByCategory(category) {
        console.log('Filtering by category:', category);
        
        // Update active category button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-category="${category}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        this.currentCategory = category;
        
        // Filter videos
        if (category === 'All') {
            this.filteredVideos = [...appData.regular_videos];
        } else {
            this.filteredVideos = appData.regular_videos.filter(video => {
                return video.category === category || 
                       video.title.toLowerCase().includes(category.toLowerCase()) ||
                       video.channel.toLowerCase().includes(category.toLowerCase());
            });
        }
        
        // Ensure we're on home section for filtering
        if (this.currentSection !== 'home') {
            this.switchSection('home');
        }
        
        this.renderVideos();
        
        const resultCount = this.filteredVideos.length;
        this.showToast(`${resultCount} ${category === 'All' ? '' : category} videos`);
    }

    handleKeyboard(e) {
        if (this.currentSection === 'shorts') {
            switch (e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousShort();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.nextShort();
                    break;
            }
        }
    }

    handleResize() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth > 768) {
            if (sidebar) sidebar.classList.remove('show');
            if (mainContent && !sidebar?.classList.contains('collapsed')) {
                mainContent.classList.remove('expanded');
            }
        }
    }

    updateActiveSection() {
        document.body.setAttribute('data-section', this.currentSection);
    }

    formatCount(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    }

    showToast(message) {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 24px;
            z-index: 3000;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            max-width: 80%;
            text-align: center;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing VidFly...');
    window.vidflyApp = new VidFly();
});

// Add some additional CSS for interactive states
const additionalStyles = `
    .liked svg {
        fill: #ff0000 !important;
    }
    
    .subscribed {
        background-color: #606060 !important;
        color: #ffffff !important;
    }
    
    .toast {
        pointer-events: none;
    }
    
    .shorts-btn.liked {
        color: #ff0000 !important;
    }
    
    .shorts-btn.liked svg {
        fill: #ff0000 !important;
    }
    
    .content-section {
        display: none;
    }
    
    .content-section.active {
        display: block !important;
    }
    
    .video-card {
        cursor: pointer;
        user-select: none;
    }
    
    .video-card:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }
`;

const style = document.createElement('style');
style.textContent = additionalStyles;
document.head.appendChild(style);