# The Speaking Studio — Website

A premium, multi-page website for **The Speaking Studio**, a youth-led educational organisation dedicated to developing confidence, communication, leadership, diplomacy, and life skills among students.

**Live URL:** [https://thespeakingstudio.netlify.app](https://thespeakingstudio.netlify.app) (production)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Navigate to the project directory (if needed) or run from repo root
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
The-Speaking-Studio/
├── public/                      # Static assets and team headshots
│   └── logo.png                 # Site logo
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── about/
│   │   ├── achievements/
│   │   ├── community/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── forms/
│   │   ├── gallery/
│   │   ├── join/
│   │   ├── mentorship/
│   │   ├── privacy/
│   │   ├── programs/
│   │   │   └── [slug]/          # Dynamic route for each program
│   │   ├── team/
│   │   ├── terms/
│   │   ├── testimonials/
│   │   ├── tssds/               # The Speaking Studio Diplomatic Summit (TSSDS 2027)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── CTASection.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── FormCard.tsx
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   └── TestimonialsCarousel.tsx
│   │   ├── tssds/
│   │   │   ├── CountdownTimer.tsx
│   │   │   ├── SummitAnnouncementBanner.tsx
│   │   │   └── SummitPopupModal.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── ScrollToTop.tsx
│   │       └── SectionHeading.tsx
│   ├── data/                    # All content data files
│   │   ├── achievements.ts
│   │   ├── faqs.ts
│   │   ├── forms.ts
│   │   ├── programs.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   └── tssds.ts
│   └── lib/
│       └── utils.ts
```

---

## 🎨 Brand Colors

| Color         | Hex       | Usage                    |
|---------------|-----------|--------------------------|
| Olive Green   | `#5C6B3A` | Primary brand color      |
| Bronze/Gold   | `#C49A6C` | Accent, highlights       |
| Dark Olive    | `#404B28` | Hover states, gradients  |
| Beige         | `#F5F0E8` | Section backgrounds      |
| Off-White     | `#FAFAF7` | Page background          |
| Charcoal      | `#1C1C1C` | Headings & body text     |
| Soft Brown    | `#8B6914` | Tertiary accent          |

---

## 📝 How to Update Content

### Adding/Updating Team Members
Edit `src/data/team.ts`. Add a new object to the `team` array:

```typescript
{
  id: 'member-unique-id',
  name: 'Member Name',
  position: 'Position Title',
  department: 'Department',
  bio: 'Short biography...',
  social: {
    instagram: 'https://instagram.com/handle',
    email: 'email@example.com',
  },
}
```

### Adding New Testimonials
Edit `src/data/testimonials.ts`. Add a new testimonial with category `'student'`, `'parent'`, or `'mentor'`.

### Updating Google Form Links & WhatsApp Community
Edit `src/data/forms.ts`. Update the form URLs or the `WHATSAPP_COMMUNITY_URL` export with current links.

### Updating TSSDS Summit Details
Edit `src/data/tssds.ts` to manage summit schedules, tracks, awards, FAQ items, and pre-registration links.

### Adding a New Program Page
Programs are dynamically generated from `src/data/programs.ts`. To add a new program:
1. Add a new program object to the `programs` array
2. The page at `/programs/your-slug` will be automatically created

---

## 🖼️ Replacing Placeholder Images

### Logo
The site logo is located at `public/logo.png`. It is used in:
- Navbar
- Footer  
- Browser favicon
- Homepage hero

### Gallery Photos
The gallery currently uses placeholder graphic tiles. To add real photos:
1. Place images in `public/gallery/`
2. Update `src/app/gallery/page.tsx` with actual image paths

---

## 🔗 Social Media & Community Links

| Platform           | URL                                                    |
|--------------------|--------------------------------------------------------|
| Instagram          | https://instagram.com/the.speaking.studio              |
| YouTube            | https://youtube.com/@the.speaking.studio               |
| Pinterest          | https://pin.it/3h3gVm4Uk                               |
| WhatsApp Community | https://chat.whatsapp.com/IL60UtWXLFED7ODU0eYtLz       |
| Email              | thespeakingstudio25@gmail.com                          |

---

## 📄 Pages & Routes

| Page            | Route              | Description |
|-----------------|--------------------|-------------|
| Home            | `/`                | Landing page with hero, statistics, programs, and testimonials |
| TSSDS 2027      | `/tssds`           | The Speaking Studio Diplomatic Summit page |
| About           | `/about`           | Mission, vision, core values, and community overview |
| Programs        | `/programs`        | Catalog of courses and bootcamps |
| Program Detail  | `/programs/[slug]` | Dedicated dynamic page for each specific program |
| Mentorship      | `/mentorship`      | 1-on-1 and group mentorship initiatives |
| Community       | `/community`       | Student network and engagement info |
| Forms           | `/forms`           | Central hub for all application and registration links |
| Join Us         | `/join`            | Team recruitment and community registration options |
| Team            | `/team`            | Executive and departmental leadership directory |
| Achievements    | `/achievements`    | Awards, competition wins, and student milestones |
| Testimonials    | `/testimonials`    | Reviews from students, parents, and educators |
| Gallery         | `/gallery`         | Event, workshop, and community moments |
| Contact         | `/contact`         | Inquiry form, email, and social connections |
| FAQ             | `/faq`             | Comprehensive answers to common questions |
| Privacy Policy  | `/privacy`         | Organization privacy disclosures |
| Terms           | `/terms`           | Terms of service and usage |
| 404             | `/not-found`       | Custom error page |

---

## 🚢 Deployment

The project is configured for deployment to **Netlify** using static export (`output: 'export'`) configured in `next.config.ts` and `netlify.toml`.

```bash
# Build for production (outputs static build to `out/`)
npm run build
```

When changes are pushed to GitHub:
- Netlify automatically builds and deploys updates to the live site at `https://thespeakingstudio.netlify.app`.

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Poppins (Google Fonts)

---

## 📞 Contact

**The Speaking Studio**  
Email: thespeakingstudio25@gmail.com  
Instagram: @the.speaking.studio
