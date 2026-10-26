# Zixu Zhu — Portfolio

A static portfolio inspired by the ALLT STUDIO Works and artist profile layouts. The ZIXU ZHU wordmark on the Works page opens `profile.html`; the profile page uses the supplied portrait and bilingual introduction, followed by three CV project entries and a WORKS link back. It does not include ALLT STUDIO's logo or artwork.

## Preview

Open `index.html` in a modern browser. Click the upper-left ZIXU ZHU wordmark to open the profile. The pages have no build step. Project and profile images are local; Google Fonts are used for supporting text with system fallbacks.

The wordmark, WORKS heading, and project detail headings are embedded as transparent PNG images rendered from GT Ultra Median Light. The font file is not included in this public repository; the site owner confirms they hold a license that covers website use of the embedded glyph images.

## Page details

- Minimal fixed name at upper left, a left-aligned WORKS heading, and four-column desktop / two-column mobile project grid.
- Profile page with a two-column desktop / stacked mobile layout, the supplied portrait, Chinese and English introduction, a PROJECTS list adapted from the CV, and a WORKS return link.
- Project detail dialogs with Chinese and English descriptions for all four works, available PC controls for Escape March, BigTopQuiz, and Dumpling Samurai, an R4 sensitivity notice, and an official HistOracle site link.
- Animated WebGL grain using the WORKS page shader formula and desktop/mobile density settings. Browsers without WebGL use a static texture fallback.
- A brief black loading layer sits between the grain canvas and page content, then fades after page resources load.
- The four cards use promo art from `p1/HistOracle.png`, `r1/Cover.png`, `r3/BigTopQuiz.png`, and `r4/OverStuffed.png`, optimized as local WebP images. The profile uses `ZixuZhuPhoto.jpg`, optimized as a local WebP image. The wide Escape March cover is fitted without cropping its title.
- The page does not include ALLT STUDIO's logo, fonts, images, or the rest of its JavaScript bundle.

## Project source notes

- `HistOracle`: portfolio summary adapted from the [official project website](https://projects.etc.cmu.edu/historacle/); its dialog links directly to that site.
- `Escape March`: project and accessibility details came from the supplied `r1` files.
- `BigTopQuiz`: build name and PC controls came from the supplied `r3` files.
- `Dumpling Samurai`: build name and Jam-o-Drum controls came from the supplied `r4` files.
- The profile's three PROJECTS entries are adapted from `CV (1).pdf`; the bilingual introduction follows the user's supplied wording.

Only portfolio artwork is included; the compressed project builds and demo videos are not part of this site folder.
