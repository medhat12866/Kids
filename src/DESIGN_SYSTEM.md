# Kids Educational Platform - Design System

## 🎨 Color Palette

### Primary Colors
- **Pink**: `#FF6B9D` - Primary actions, highlights
- **Purple**: `#9C6FFF` - Interactive elements, links
- **Blue**: `#4ECAFF` - Information, secondary actions
- **Green**: `#5FD08A` - Success, achievements
- **Yellow**: `#FFB84D` - Rewards, warnings
- **Orange**: `#FF8B67` - Energy, activities

### Gradients
```css
/* Hero Gradient */
from-[#FF6B9D] via-[#9C6FFF] to-[#4ECAFF]

/* Video Card */
from-[#9C6FFF]/20 to-[#4ECAFF]/20

/* Story Card */
from-[#FFB84D]/20 to-[#FF8B67]/20

/* Game Card */
from-[#4ECAFF] to-[#5FD08A]

/* Activity Card */
from-[#FFB84D] to-[#FF8B67]
```

### Neutral Colors
- **Background**: `#FEF9F5` - Soft warm white
- **Foreground**: `#2D2D3A` - Dark text
- **Muted**: `#ececf0` - Subtle backgrounds
- **Border**: `rgba(0, 0, 0, 0.1)` - Soft borders

## 📏 Typography

### Font Families
```css
font-family: 'Cairo', 'Noto Kufi Arabic', sans-serif;
```

### Font Sizes
- **Minimum**: 18px for children's content
- **Base**: 16px (1rem)
- **Headings**: Use default sizes from globals.css
  - h1: text-2xl
  - h2: text-xl
  - h3: text-lg
  - h4: text-base

### Font Weights
- **Normal**: 400
- **Medium**: 600
- **Bold**: 700

## 🔘 Components

### Buttons

#### Primary Button
```tsx
className="h-12 px-8 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90"
```

#### Secondary Button
```tsx
className="h-12 px-8 rounded-full bg-white text-[#9C6FFF] hover:bg-white/90"
```

#### Outline Button
```tsx
variant="outline" className="h-12 px-8 rounded-full border-2"
```

### Cards

#### Video Card (btn-video-card)
- Aspect ratio: 16:9
- Rounded corners: rounded-2xl
- Shadow: shadow-md hover:shadow-xl
- Border: border-0

#### Story Card (btn-story-card)
- Aspect ratio: 3:4
- Rounded corners: rounded-2xl
- Shadow: shadow-md hover:shadow-xl
- Border: border-0

#### Game Card (btn-game-card)
- Gradient header
- Progress bar
- XP reward display
- Rounded corners: rounded-2xl

#### Activity Card (btn-activity-card)
- Thumbnail image
- Difficulty badge
- Steps counter
- Printable indicator

### Badges

#### Age Badge
```tsx
<Badge variant="secondary" className="rounded-full">
  6-8 سنوات
</Badge>
```

#### Topic Badge
```tsx
<Badge variant="outline" className="rounded-full border-[#9C6FFF] text-[#9C6FFF]">
  القيم
</Badge>
```

#### Status Badge
```tsx
<Badge className="bg-[#5FD08A] text-white">
  مكتمل
</Badge>
```

### Avatar (avatar-lg, avatar-md, avatar-sm)
- Large: w-32 h-32 rounded-3xl
- Medium: w-16 h-16 rounded-2xl
- Small: w-12 h-12 rounded-2xl

### Progress Bar
```tsx
<Progress value={75} className="h-2" />
```

## 📐 Spacing & Layout

### Container Max Width
- Mobile: 360px (full width)
- Tablet: 768px
- Desktop: 1280px

### Padding
- Mobile: p-4 (16px)
- Tablet: p-6 (24px)
- Desktop: p-8 (32px)

### Gap Spacing
- Small: gap-2 (8px)
- Medium: gap-4 (16px)
- Large: gap-6 (24px)

### Border Radius
- Small: rounded-lg (8px)
- Medium: rounded-2xl (16px)
- Large: rounded-3xl (24px)
- Full: rounded-full

## 📱 Responsive Breakpoints

```css
/* Mobile First */
default: 360px

/* Tablet */
md: 768px

/* Desktop */
lg: 1280px
```

## 🎯 Touch Targets

### Minimum Size
- All interactive elements: **44x44px minimum**
- Buttons: h-11 (44px) or h-12 (48px)
- Icons in buttons: w-5 h-5 (20px)

## ♿ Accessibility

### Contrast Ratios
- Text on background: minimum 4.5:1
- Large text: minimum 3:1
- UI components: minimum 3:1

### Text Requirements
- Minimum font size: 18px for children
- Line height: 1.5
- Letter spacing: normal

### Captions
- All videos must have caption support
- Caption toggle button in video player

### RTL Support
```css
direction: rtl;
```

## 🎭 Animations

### Motion Presets
```tsx
// Hover lift
whileHover={{ y: -4 }}

// Tap scale
whileTap={{ scale: 0.95 }}

// Fade in
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Page transition
transition={{ duration: 0.3 }}
```

### No Flashing
- Avoid rapid flashing animations
- Use smooth, gentle transitions
- Duration: 200-500ms

## 🖼️ Icons

### Icon Library
- **lucide-react** for all icons
- Consistent stroke width: 2
- Sizes: w-4 h-4 (16px), w-5 h-5 (20px), w-6 h-6 (24px)

### Common Icons
- Home: Home
- Library: Library
- Games: Gamepad2
- Favorites: Heart
- Profile: User
- Play: Play
- Pause: Pause
- Volume: Volume2 / VolumeX
- Settings: Settings

## 📊 Charts & Graphs

### Library
- **recharts** for all charts

### Colors
- Use gradient fills matching brand colors
- Bar charts: gradient from purple to blue
- Pie charts: use category colors

## 🎨 Component Class Names (for Developer Handoff)

### Buttons
- `btn-primary` - Primary action button
- `btn-secondary` - Secondary action button
- `btn-outline` - Outline button
- `btn-ghost` - Ghost button

### Cards
- `card-video` - Video card component
- `card-story` - Story card component
- `card-game` - Game card component
- `card-activity` - Activity card component

### Badges
- `badge-age` - Age range badge
- `badge-topic` - Topic badge
- `badge-difficulty` - Difficulty badge
- `badge-status` - Status badge

### Avatars
- `avatar-sm` - Small avatar (48px)
- `avatar-md` - Medium avatar (64px)
- `avatar-lg` - Large avatar (128px)

### Progress
- `progress-bar` - Progress bar component

### Navigation
- `nav-bottom` - Bottom navigation (mobile)
- `nav-top` - Top navigation (desktop)

## 🌍 Bilingual Support

### Arabic
- Font: Cairo, Noto Kufi Arabic
- Direction: RTL
- Text alignment: right

### English
- Font: Inter, system fonts
- Direction: LTR
- Text alignment: left

## 📦 Component Variants

### Button Variants
- default, secondary, outline, ghost, destructive

### Badge Variants
- default, secondary, outline, destructive

### Card Variants
- default (no border, shadow)

### Alert Variants
- default, destructive

## 🎯 Design Tokens

```css
:root {
  --color-pink: #FF6B9D;
  --color-purple: #9C6FFF;
  --color-blue: #4ECAFF;
  --color-green: #5FD08A;
  --color-yellow: #FFB84D;
  --color-orange: #FF8B67;
  
  --radius: 1rem;
  --font-weight-medium: 600;
  --font-weight-normal: 400;
}
```

## 📄 Sample Content

### Videos
- "تعلم الصدق مع ياسر" (Learn Honesty with Yasser)
- "مغامرات الحروف الأبجدية" (Alphabet Adventures)
- "قصة النبي يوسف" (Prophet Yusuf's Story)

### Stories
- "الأرنب الشجاع" (The Brave Rabbit)
- "الأسد الطيب والفأر" (Kind Lion and the Mouse)

### Games
- "مهمة الرياضيات" (Math Quest)
- "مطابقة الكلمات" (Word Match)
- "خلط الألوان" (Color Mix)

### Activities
- "ارسم منزل أحلامك" (Draw your dream house)
- "تجربة قوس قزح" (Make a rainbow experiment)

---

This design system ensures consistency, accessibility, and a delightful user experience for children aged 6-10 years old.
