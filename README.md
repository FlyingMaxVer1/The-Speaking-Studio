# The Speaking Studio — Website

A premium, multi-page website for **The Speaking Studio**, a youth-led educational organisation dedicated to developing confidence, communication, leadership, diplomacy, and life skills among students.

**Live URL:** `www.thespeakingstudio.netlify.app` (development)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Navigate to the project directory
cd speaking-studio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
speaking-studio/
├── public/
│   └── logo.png                 # Site logo — replace with original
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── about/
│   │   ├── achievements/
│   │   ├── community/
│   │   ├── contact/
│   │   ├── events/
│   │   ├── faq/
│   │   ├── forms/
│   │   ├── gallery/
│   │   ├── join/
│   │   ├── mentorship/
│   │   ├── privacy/
│   │   ├── programs/
│   │   │   └── [slug]/          # Dynamic route for each program
│   │   ├── resources/
│   │   ├── team/
│   │   ├── terms/
│   │   ├── testimonials/
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
│   │   │   ├── EventCard.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── FormCard.tsx
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   └── TestimonialsCarousel.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       └── SectionHeading.tsx
│   ├── data/                    # All content data files
│   │   ├── achievements.ts
│   │   ├── events.ts
│   │   ├── faqs.ts
│   │   ├── forms.ts
│   │   ├── programs.ts
│   │   ├── resources.ts
│   │   ├── team.ts
│   │   └── testimonials.ts
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

### Adding New Events
Edit `src/data/events.ts`. Add a new event object with `status: 'upcoming'` or `'past'`.

### Adding New Testimonials
Edit `src/data/testimonials.ts`. Add a new testimonial with category `'student'`, `'parent'`, or `'mentor'`.

### Adding Resources
Edit `src/data/resources.ts`. Add a new resource and update `downloadUrl` when ready.

### Updating Google Form Links
Edit `src/data/forms.ts`. Update the `formUrl` field for each form with your actual Google Form URL.

### Adding a New Program Page
Programs are dynamically generated from `src/data/programs.ts`. To add a new program:
1. Add a new program object to the `programs` array
2. The page at `/programs/your-slug` will be automatically created

---

## 🖼️ Replacing Placeholder Images

### Logo
Replace `public/logo.png` with the original speaking studio logo. The logo is used in:
- Navbar
- Footer  
- Browser favicon
- Homepage hero

### Gallery Photos
The gallery currently uses placeholder color tiles. To add real photos:
1. Place images in `public/gallery/`
2. Update `src/app/gallery/page.tsx` with actual image paths

---

## 🔗 Social Media Links (already configured)

| Platform  | URL |
|-----------|-----|
| Instagram | https://instagram.com/the.speaking.studio |
| YouTube   | https://youtube.com/@the.speaking.studio  |
| Pinterest | https://pin.it/3h3gVm4Uk                  |
| Email     | thespeakingstudio25@gmail.com             |

---

## 📄 Pages

| Page            | Route              |
|-----------------|--------------------|
| Home            | `/`                |
| About           | `/about`           |
| Programs        | `/programs`        |
| Program Detail  | `/programs/[slug]` |
| Mentorship      | `/mentorship`      |
| Community       | `/community`       |
| Events          | `/events`          |
| Resources       | `/resources`       |
| Team            | `/team`            |
| Gallery         | `/gallery`         |
| Testimonials    | `/testimonials`    |
| Achievements    | `/achievements`    |
| Forms           | `/forms`           |
| Join Us         | `/join`            |
| Contact         | `/contact`         |
| FAQ             | `/faq`             |
| Privacy Policy  | `/privacy`         |
| Terms           | `/terms`           |
| 404             | `/not-found`       |

---

## 🚢 Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

Deploy to [Vercel](https://vercel.com) for the easiest deployment — simply connect your GitHub repository.

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
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
