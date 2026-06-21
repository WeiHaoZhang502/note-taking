# 🕐 多时区数字时钟 - Digital Clock

一个现代化、功能完整的多时区数字时钟应用，实时显示全球不同时区的当前时间。

## ✨ 功能特性

### 核心功能
- ✅ **实时时钟** - 精确显示秒级时间更新
- 🌍 **多���区支持** - 包含30+个全球主要城市和时区
- 📍 **灵活管理** - 可自由添加、删除时区
- 🔍 **搜索功能** - 快速查找和过滤时区
- 🎨 **美观界面** - 现代化设计和流畅动画
- 💾 **本地存储** - 自动保存用户选择的时区
- 🕰️ **时间格式** - 支持12小时制和24小时制切换
- 📱 **响应式设计** - 完美适配各种屏幕尺寸

### 时区信息显示
- 当前精确时间（时:分:秒）
- 日期（本地化显示）
- UTC偏移量
- 城市和地区信息

## 🌐 支持的时区

### 美洲
- 🗽 New York (America/New_York)
- 🌴 Los Angeles (America/Los_Angeles)
- 🏢 Chicago (America/Chicago)
- ⛰️ Denver (America/Denver)
- 🏔️ Anchorage (America/Anchorage)
- 🌺 Honolulu (Pacific/Honolulu)
- 🍁 Toronto (America/Toronto)
- 🍁 Vancouver (America/Vancouver)
- 🌮 Mexico City (America/Mexico_City)
- 🇧🇷 São Paulo (America/Sao_Paulo)

### 欧洲
- 🇬🇧 London (Europe/London)
- 🇫🇷 Paris (Europe/Paris)
- 🇩🇪 Berlin (Europe/Berlin)
- 🇷🇺 Moscow (Europe/Moscow)
- 🇹🇷 Istanbul (Europe/Istanbul)

### 亚洲
- 🇨🇳 Shanghai (Asia/Shanghai)
- 🇯🇵 Tokyo (Asia/Tokyo)
- 🇰🇷 Seoul (Asia/Seoul)
- 🇮🇳 Mumbai (Asia/Kolkata)
- 🇹🇭 Bangkok (Asia/Bangkok)
- 🇭🇰 Hong Kong (Asia/Hong_Kong)
- 🇸🇬 Singapore (Asia/Singapore)
- 🇦🇪 Dubai (Asia/Dubai)

### 大洋洲
- 🇦🇺 Sydney (Australia/Sydney)
- 🇦🇺 Melbourne (Australia/Melbourne)
- 🇦🇺 Perth (Australia/Perth)
- 🇳🇿 Auckland (Pacific/Auckland)
- 🇫🇯 Suva (Pacific/Fiji)

### 非洲
- 🇪🇬 Cairo (Africa/Cairo)
- 🇿🇦 Johannesburg (Africa/Johannesburg)
- 🇳🇬 Lagos (Africa/Lagos)

## 🚀 快速开始

### 方式1: 直接打开HTML文件
```bash
# 只需在浏览器中打开 index.html
open digital-clock/index.html
```

### 方式2: 使用本地服务器
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js (http-server)
npx http-server

# 访问
http://localhost:8000/digital-clock
```

## 💻 使用说明

### 基本操作
1. **添加时区** - 点击 "+ 添加时区" 按钮，搜索并选择想要的时区
2. **移除时区** - 点击时钟卡片右上角的 "×" 按钮
3. **搜索时区** - 使用顶部搜索框快速过滤显示的时区
4. **切换时间格式** - 点击 "12/24 小时" 按钮切换显示格式
5. **重置为默认** - 点击 "重置" 按钮恢复默认4个时区

### 功能说明
- **时钟卡片显示**：城市名、精确时间、日期、UTC偏移、地区信息
- **实时更新**：每秒自动更新所有时区的时间
- **本地存储**：您选择的时区组合会自动保存在浏览器本地存储中
- **响应式网格**：在不同设备上自动调整布局

## 🎨 技术实现

### 使用技术
- **HTML5** - 结构
- **CSS3** - 样式和动画
- **Vanilla JavaScript** - 逻辑和交互
- **LocalStorage API** - 数据持久化
- **Date API** - 时区转换计算

### 核心算法
```javascript
// 时区时间计算
const utc = now.getTime() + now.getTimezoneOffset() * 60000;
const time = new Date(utc + offset * 3600000);
```

## 📦 文件结构
```
digital-clock/
├── index.html      # HTML主文件
├── styles.css      # 样式文件 (~500行)
├── script.js       # JavaScript逻辑 (~400行)
└── README.md       # 本文件
```

## 🌟 功能详解

### 1. 时区管理
- 支持添加/删除任意数量的时区
- 所选时区列表自动保存到浏览器
- 默认包含4个主要时区

### 2. 时间显示
- 精确到秒的实时时间
- 支持12/24小时制切换
- 本地化日期显示
- UTC偏移量显示

### 3. 搜索和过滤
- 支持按城市名称搜索
- 支持按地区搜索
- 支持按时区代码搜索
- 实时过滤结果

### 4. 用户界面
- 现代化渐变背景
- 流畅的过渡动画
- 响应式网格布局
- 模态对话框选择器

## 🔧 自定义选项

### 修改默认时区
编辑 `script.js` 中的 `loadClocks()` 方法：
```javascript
this.clocks = [
    'Asia/Shanghai',      // 修改这里
    'Europe/London',
    'America/New_York',
    'Asia/Tokyo'
];
```

### 添加新时区
在 `TIMEZONES` 对象中添加：
```javascript
'Asia/Bangkok': { city: 'Bangkok', region: 'Thailand', offset: 7 }
```

### 修改样式
编辑 `styles.css` 中的颜色、字体、动画等

## 📱 浏览器兼容性
- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动浏览器

## 🎯 应用场景
- 💼 全球商务沟通中的时区查询
- ✈️ 国际旅行时间对照
- 👥 远程团队协作的时间管理
- 📺 国际直播活动的时间提醒
- 🎓 学习不同时区的概念

## 🚀 未来增强计划
- [ ] 闹钟功能
- [ ] 时区转换计算器
- [ ] 时间差显示
- [ ] 夏令时自动调整
- [ ] 多语言支持
- [ ] 天气信息集成
- [ ] PWA离线支持
- [ ] 主题定制

## 💡 Tips
- 使用搜索框快速找到需要的城市
- 点击时钟卡片了解UTC偏移信息
- 默认是24小时制，可以随时切换
- 刷新页面后选择的时区会自动恢复

## 📄 许可证
MIT License - 自由使用和修改

## 🤝 贡献
欢迎提交问题和改进建议！

---

**享受全球时间同步的便利！** ⏰🌍✨
