# Smart Academy - Website Redesign

A modern, responsive redesign concept for [smartacademy.ge](https://smartacademy.ge).

Plain HTML/CSS/JS with no build step, so it can be dropped into the Laravel app as Blade views later.

## Pages

- `index.html` - homepage: hero with course search, stats, partners, categories, filterable course grid, physical vs online formats, why us, career program, lecturers, testimonials, events, blog, B2B, lead form
- `courses.html` - catalog with filters (category, format, level, price), search, sorting and favorites (`?cat=`, `?format=`, `?q=`, `?fav=1`)
- `course.html?id=N` - course detail: sticky purchase card, learning outcomes, syllabus accordion, lecturer, schedule, registration, related courses

## Structure

- `assets/css/app.css` - design system (tokens on `:root`) and all components
- `assets/js/data.js` - demo catalog (course titles and lecturers taken from the live site; prices, dates and durations are placeholders)
- `assets/js/app.js` - shared header, mega menu, mobile drawer, footer, course card, generated cover art, favorites, scroll reveal
- `assets/img/logo-wt.svg`, `assets/img/logo-bl.svg` - official logos

## Design

- Brand: ink `#1B1E24`, teal `#0592AB` (from the current site), lime `#D4F26A` as the accent
- Type: Noto Sans Georgian for Georgian text, Inter Tight for display/Latin
- Breakpoints: 1180, 1024, 720px

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Laravel integration notes

- Header/footer markup in `app.js` (`header()` / `footer()`) maps to `layouts/app.blade.php` partials
- `SA.card()` maps to a `components/course-card.blade.php` component, fed from the courses table instead of `data.js`
- Lead and registration forms currently show a toast; point them to a POST route with `@csrf`
