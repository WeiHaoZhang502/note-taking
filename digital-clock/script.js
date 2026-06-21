// Timezone data with major cities
const TIMEZONES = {
    'America/New_York': { city: 'New York', region: 'USA', offset: -5 },
    'America/Los_Angeles': { city: 'Los Angeles', region: 'USA', offset: -8 },
    'America/Chicago': { city: 'Chicago', region: 'USA', offset: -6 },
    'America/Denver': { city: 'Denver', region: 'USA', offset: -7 },
    'America/Anchorage': { city: 'Anchorage', region: 'USA', offset: -9 },
    'Pacific/Honolulu': { city: 'Honolulu', region: 'USA', offset: -10 },
    'Europe/London': { city: 'London', region: 'UK', offset: 0 },
    'Europe/Paris': { city: 'Paris', region: 'France', offset: 1 },
    'Europe/Berlin': { city: 'Berlin', region: 'Germany', offset: 1 },
    'Europe/Moscow': { city: 'Moscow', region: 'Russia', offset: 3 },
    'Europe/Istanbul': { city: 'Istanbul', region: 'Turkey', offset: 3 },
    'Asia/Dubai': { city: 'Dubai', region: 'UAE', offset: 4 },
    'Asia/Kolkata': { city: 'Mumbai', region: 'India', offset: 5.5 },
    'Asia/Bangkok': { city: 'Bangkok', region: 'Thailand', offset: 7 },
    'Asia/Hong_Kong': { city: 'Hong Kong', region: 'China', offset: 8 },
    'Asia/Shanghai': { city: 'Shanghai', region: 'China', offset: 8 },
    'Asia/Tokyo': { city: 'Tokyo', region: 'Japan', offset: 9 },
    'Asia/Seoul': { city: 'Seoul', region: 'South Korea', offset: 9 },
    'Asia/Singapore': { city: 'Singapore', region: 'Singapore', offset: 8 },
    'Australia/Sydney': { city: 'Sydney', region: 'Australia', offset: 10 },
    'Australia/Melbourne': { city: 'Melbourne', region: 'Australia', offset: 10 },
    'Australia/Perth': { city: 'Perth', region: 'Australia', offset: 8 },
    'Pacific/Auckland': { city: 'Auckland', region: 'New Zealand', offset: 12 },
    'Pacific/Fiji': { city: 'Suva', region: 'Fiji', offset: 12 },
    'Africa/Cairo': { city: 'Cairo', region: 'Egypt', offset: 2 },
    'Africa/Johannesburg': { city: 'Johannesburg', region: 'South Africa', offset: 2 },
    'Africa/Lagos': { city: 'Lagos', region: 'Nigeria', offset: 1 },
    'America/Sao_Paulo': { city: 'São Paulo', region: 'Brazil', offset: -3 },
    'America/Mexico_City': { city: 'Mexico City', region: 'Mexico', offset: -6 },
    'America/Toronto': { city: 'Toronto', region: 'Canada', offset: -5 },
    'America/Vancouver': { city: 'Vancouver', region: 'Canada', offset: -8 },
};

class DigitalClock {
    constructor() {
        this.clocks = [];
        this.is24HourFormat = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadClocks();
        this.startClock();
    }

    setupEventListeners() {
        document.getElementById('addBtn').addEventListener('click', () => this.openModal());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetClocks());
        document.getElementById('toggleFormatBtn').addEventListener('click', () => this.toggleFormat());
        document.getElementById('closeModalBtn').addEventListener('click', () => this.closeModal());
        document.getElementById('searchInput').addEventListener('input', (e) => this.filterClocks(e.target.value));
        document.getElementById('modalSearchInput').addEventListener('input', (e) => this.filterTimezones(e.target.value));
        document.getElementById('timezoneModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('timezoneModal')) {
                this.closeModal();
            }
        });
    }

    loadClocks() {
        const saved = localStorage.getItem('selectedTimezones');
        if (saved) {
            this.clocks = JSON.parse(saved);
        } else {
            // Default clocks
            this.clocks = [
                'Asia/Shanghai',
                'Europe/London',
                'America/New_York',
                'Asia/Tokyo'
            ];
            this.saveClocks();
        }
        this.renderClocks();
    }

    saveClocks() {
        localStorage.setItem('selectedTimezones', JSON.stringify(this.clocks));
    }

    renderClocks() {
        const container = document.getElementById('clocksContainer');
        
        if (this.clocks.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-state-icon">🕐</div>
                    <div class="empty-state-text">还没有添加时区</div>
                    <p style="opacity: 0.7;">点击 "+ 添加时区" 按钮开始</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.clocks.map(tz => `
            <div class="clock-card" data-timezone="${tz}">
                <button class="remove-btn" onclick="clock.removeClock('${tz}')" title="移除">×</button>
                <div class="clock-timezone">${tz}</div>
                <div class="clock-city">${TIMEZONES[tz].city}</div>
                <div class="clock-time" data-tz="${tz}">--:--:--</div>
                <div class="clock-date" data-date="${tz}">-</div>
                <div class="clock-info">
                    <div class="info-item">
                        <div class="info-label">UTC 偏移</div>
                        <div class="info-value" data-offset="${tz}">+00:00</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">区域</div>
                        <div class="info-value">${TIMEZONES[tz].region}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateClocks() {
        this.clocks.forEach(tz => {
            const time = this.getTimeInTimezone(tz);
            this.updateClockDisplay(tz, time);
        });
    }

    getTimeInTimezone(timezone) {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const offset = TIMEZONES[timezone].offset;
        const time = new Date(utc + offset * 3600000);
        return time;
    }

    updateClockDisplay(timezone, time) {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        
        let displayHours = hours;
        if (!this.is24HourFormat) {
            const h = parseInt(hours);
            displayHours = String(h % 12 || 12).padStart(2, '0');
        }
        
        const timeStr = `${displayHours}:${minutes}:${seconds}`;
        const timeElement = document.querySelector(`[data-tz="${timezone}"]`);
        if (timeElement) {
            timeElement.textContent = timeStr;
        }

        // Update date
        const dateStr = time.toLocaleDateString('zh-CN', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        const dateElement = document.querySelector(`[data-date="${timezone}"]`);
        if (dateElement) {
            dateElement.textContent = dateStr;
        }

        // Update offset
        const offset = TIMEZONES[timezone].offset;
        const sign = offset >= 0 ? '+' : '';
        const offsetStr = `${sign}${String(offset).padStart(2, '0')}:00`;
        const offsetElement = document.querySelector(`[data-offset="${timezone}"]`);
        if (offsetElement) {
            offsetElement.textContent = offsetStr;
        }
    }

    startClock() {
        this.updateClocks();
        setInterval(() => this.updateClocks(), 1000);
    }

    removeClock(timezone) {
        this.clocks = this.clocks.filter(tz => tz !== timezone);
        this.saveClocks();
        this.renderClocks();
    }

    resetClocks() {
        if (confirm('确定要重置为默认时区吗?')) {
            this.clocks = [
                'Asia/Shanghai',
                'Europe/London',
                'America/New_York',
                'Asia/Tokyo'
            ];
            this.saveClocks();
            this.renderClocks();
        }
    }

    toggleFormat() {
        this.is24HourFormat = !this.is24HourFormat;
        this.updateClocks();
    }

    openModal() {
        const modal = document.getElementById('timezoneModal');
        modal.classList.add('show');
        this.renderTimezoneList();
    }

    closeModal() {
        const modal = document.getElementById('timezoneModal');
        modal.classList.remove('show');
    }

    renderTimezoneList(filter = '') {
        const list = document.getElementById('timezoneList');
        const filterLower = filter.toLowerCase();
        
        const filtered = Object.entries(TIMEZONES)
            .filter(([tz, data]) => {
                return tz.toLowerCase().includes(filterLower) ||
                       data.city.toLowerCase().includes(filterLower) ||
                       data.region.toLowerCase().includes(filterLower);
            })
            .filter(([tz]) => !this.clocks.includes(tz));

        list.innerHTML = filtered.map(([tz, data]) => `
            <div class="timezone-item" onclick="clock.addClock('${tz}')">
                <div class="timezone-item-city">${data.city}</div>
                <div class="timezone-item-tz">${tz}</div>
            </div>
        `).join('');

        if (filtered.length === 0) {
            list.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px; color: #999;">没有找到时区</div>';
        }
    }

    filterTimezones(value) {
        this.renderTimezoneList(value);
    }

    addClock(timezone) {
        if (!this.clocks.includes(timezone)) {
            this.clocks.push(timezone);
            this.saveClocks();
            this.renderClocks();
            this.closeModal();
        }
    }

    filterClocks(value) {
        const cards = document.querySelectorAll('.clock-card');
        const filterLower = value.toLowerCase();
        
        cards.forEach(card => {
            const timezone = card.getAttribute('data-timezone');
            const city = TIMEZONES[timezone].city.toLowerCase();
            const region = TIMEZONES[timezone].region.toLowerCase();
            
            if (city.includes(filterLower) || region.includes(filterLower) || timezone.toLowerCase().includes(filterLower)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Initialize the clock when DOM is ready
const clock = new DigitalClock();
