import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");

/** Active assets referenced by the site (covers + case-study screenshots) */
const sources = [
  "projects/barnabas-dental-clinic/cover.png",
  "projects/barnabas-dental-clinic/landing.png",
  "projects/barnabas-dental-clinic/services.png",
  "projects/barnabas-dental-clinic/about.png",
  "projects/barnabas-dental-clinic/login.png",
  "projects/barnabas-dental-clinic/register.png",
  "projects/barnabas-dental-clinic/patient-dashboard.png",
  "projects/barnabas-dental-clinic/receptionist-dashboard.png",
  "projects/barnabas-dental-clinic/dentist-dashboard.png",
  "projects/barnabas-dental-clinic/admin-dashboard.png",
  "projects/bible-app/cover-v3.png",
  "projects/bible-app/home.png",
  "projects/bible-app/books.png",
  "projects/bible-app/chapter.png",
  "projects/bible-app/plans.png",
  "projects/bible-app/devotionals.png",
  "projects/bible-app/prayer.png",
  "projects/bible-app/journey.png",
  "projects/cbc-church-management/cover.png",
  "projects/cbc-church-management/login.png",
  "projects/cbc-church-management/dashboard-admin.png",
  "projects/cbc-church-management/dashboard-volunteer.png",
  "projects/cbc-church-management/accounts.png",
  "projects/cbc-church-management/preview.png",
  "projects/cainta-baptist-church/cover-v3.png",
  "projects/cainta-baptist-church/preview.jpg",
  "blog/bible-cover-v3.png",
  "blog/barnabas-cover.png",
  "blog/cbc-cover.png",
  "blog/church-cover-v3.png",
  "og.png",
];

for (const relative of sources) {
  const input = path.join(root, relative);
  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  await mkdir(path.dirname(output), { recursive: true });
  const isCover = /cover|og\.png/i.test(relative);
  const width = isCover ? 1400 : 1600;
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: isCover ? 86 : 88 })
    .toFile(output);
  const before = (await sharp(input).metadata()).size;
  console.log(
    `${relative} → ${path.basename(output)} (${Math.round(info.size / 1024)}KB)`,
  );
}

console.log("Done.");
