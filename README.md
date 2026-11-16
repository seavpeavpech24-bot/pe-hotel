# PE Hotel Management System Website

A lightweight, responsive product website for PE Hotel Management System. The site uses semantic HTML, CSS, and vanilla JavaScript; it has no backend, checkout, or runtime package dependencies. Khmer text uses the Kantumruy Pro web font with system-font fallbacks.

The website includes English and Khmer language controls and a light/dark theme switch. Both preferences are saved in the visitor's browser and can be changed from the navigation menu.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. All site assets use relative paths.

## Before publishing

The contact section links to the developer's Telegram, email, Facebook, WhatsApp, portfolio, and GitHub. Telegram and WhatsApp open a prefilled inquiry; email opens a draft with a subject and message. Templates follow the visitor's selected language and can be edited before sending. The floating Telegram button uses the same Telegram template. Verify contact links and current license terms, including device coverage, updates, and support, before publishing.

The hero contains an interactive, illustrative app preview: select Rooms, Guests, Reports, or Tools to explore sample screens. The preview uses sample data and is not connected to the desktop app or a live hotel database. It is not a product screenshot. The website intentionally does not include a payment form or claim that the desktop app is cloud-based.

## Publish with GitHub Pages

This folder is configured to deploy automatically with GitHub Actions whenever you push to `main`.

1. Create an **empty** GitHub repository for the website. Do not initialize it with a README, license, or `.gitignore`.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. In a terminal, switch to this `PE-Hotel-Website` folder and run the following commands, replacing the remote URL with your repository's URL:

   ```powershell
   git init -b main
   git add .
   git commit -m "Prepare PE Hotel website for GitHub Pages"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

4. Open the **Actions** tab and wait for **Deploy website to GitHub Pages** to complete.
5. Open the Pages URL shown under **Settings → Pages**. Future pushes to `main` will deploy automatically; you can also start a deployment from the Actions tab.

The workflow publishes only `index.html`, `.nojekyll`, `assets/`, `css/`, and `js/`; it does not publish this README or workflow files as site content.

Because the site uses relative asset paths and no server-side features, it can also be hosted by other static website providers.

## Verified product positioning

- PE Hotel Management System is a Windows desktop application.
- Hotel records are stored in a local SQLite database. Day-to-day operations and license validation work offline.
- The application includes room status and availability, reservations, guest records, check-in/check-out, guest folios and payments, reports, night audit, city ledger, staff roles and permissions, and lost-and-found tracking.
- Listed license prices are $5 per month, $50 per year, and $240 for a lifetime license. Monthly and yearly prices are software license subscriptions, not cloud hosting.
- Contact and activation details should be confirmed directly with the developer. The website does not simulate checkout or payments.
