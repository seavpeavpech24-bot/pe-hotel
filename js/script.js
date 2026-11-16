document.documentElement.classList.add('js');

const translations = {
  en: {
    'meta.title': 'PE Hotel Management System | Manage your hotel, simply',
    'meta.description': 'Run your hotel with less paperwork. PE Hotel Management System brings rooms, reservations, guest folios, payments, and reporting together in an offline Windows desktop application.',
    'meta.ogTitle': 'PE Hotel Management System | Hotel operations, made clearer',
    'meta.ogDescription': 'A practical Windows desktop system for room management, reservations, guest folios, payments, and daily hotel operations. Works offline.',
    'nav.features': 'Features',
    'nav.label': 'Main navigation',
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.founder': 'Founder',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.start': 'Get started',
    'theme.dark': 'Dark mode',
    'theme.light': 'Light mode',
    'theme.switchDark': 'Switch to dark mode',
    'theme.switchLight': 'Switch to light mode',
    'language.label': 'Language',
    'preferences.label': 'Display preferences',
    'menu.open': 'Open navigation menu',
    'menu.close': 'Close navigation menu',
    'hero.preview': 'Interactive sample preview of the hotel management app',
    'hero.eyebrow': 'A calmer way to run your hotel',
    'hero.title': 'Run your hotel<br>with <span>more clarity.</span>',
    'hero.description': 'Keep rooms, reservations, guest stays, and payments organized in one practical desktop application—built for the rhythm of independent hotels.',
    'hero.plans': 'Explore license plans',
    'hero.explore': 'See what you can manage',
    'hero.windows': 'Windows desktop software',
    'hero.offline': 'Hotel operations work offline after activation.',
    'preview.title': 'Room overview',
    'preview.frontDesk': 'FRONT DESK',
    'preview.roomManagement': 'Room Management',
    'preview.desktop': 'Desktop app',
    'preview.sections': 'Preview sections',
    'preview.rooms': 'Rooms',
    'preview.guests': 'Guests',
    'preview.reports': 'Reports',
    'preview.tools': 'Tools',
    'preview.today': 'Today',
    'preview.label': 'ILLUSTRATIVE PREVIEW',
    'preview.available': 'Available',
    'preview.occupied': 'Occupied',
    'preview.reserved': 'Reserved',
    'preview.status': 'Room status at a glance',
    'preview.guestTitle': 'Guest overview',
    'preview.guestKicker': 'GUESTS TODAY',
    'preview.guestCount': 'Today’s guest activity',
    'preview.guestRoom101': 'Room 101 · Check-out today',
    'preview.guestRoom204': 'Room 204 · 2 nights',
    'preview.guestRoomArrival': 'Arrival · Room 103',
    'preview.departing': 'Departing',
    'preview.inHouse': 'In-house',
    'preview.arriving': 'Arriving',
    'preview.guestStatus': 'Guest stays at a glance',
    'preview.reportTitle': 'Daily report',
    'preview.reportKicker': 'HOTEL SNAPSHOT',
    'preview.occupancy': 'Occupancy today',
    'preview.occupancyNote': '12 of 18 rooms occupied',
    'preview.arrivals': 'Arrivals',
    'preview.departures': 'Departures',
    'preview.scheduled': 'Scheduled today',
    'preview.checkoutToday': 'Check-out today',
    'preview.reportStatus': 'Daily activity overview',
    'preview.toolsTitle': 'Hotel tools',
    'preview.toolsKicker': 'QUICK ACCESS',
    'preview.reservationsTool': 'Reservations',
    'preview.reservationsNote': 'Manage upcoming guest stays',
    'preview.billingTool': 'Billing & folios',
    'preview.billingNote': 'Review guest charges and payments',
    'preview.setupTool': 'Hotel setup',
    'preview.setupNote': 'Rooms, rates, and staff access',
    'preview.toolsNote': 'Tools available in the desktop app',
    'preview.toolsStatus': 'Hotel operations in one place',
    'preview.caption': 'Interactive sample preview—not a product screenshot or live hotel data',
    'hero.audience': 'MADE FOR INDEPENDENT HOSPITALITY',
    'hero.capabilityRooms': 'Room operations',
    'hero.capabilityGuests': 'Guest stays',
    'hero.capabilityReports': 'Billing & reports',
    'intro.label': 'Product summary',
    'intro.lead': 'The essentials, thoughtfully brought together.',
    'intro.description': 'PE Hotel Management System helps small hotel teams move through the daily details—from a new reservation to a guest’s folio—without relying on a cloud-based hotel platform.',
    'intro.exploreLabel': 'Explore the features',
    'intro.explore': 'Explore features',
    'features.eyebrow': 'Practical tools for daily work',
    'features.title': 'A clearer view of<br><span>the day-to-day.</span>',
    'features.description': 'Keep the moving parts of your property in one place, with tools that support the work your team already does.',
    'feature.rooms.title': 'Room status & availability',
    'feature.rooms.description': 'See room availability, reservations, cleanliness, and maintenance status together. Filter the room list and review room history.',
    'feature.reservations.title': 'Reservations & front desk',
    'feature.reservations.description': 'Create reservations, assign rooms, manage arrivals and departures, and handle check-ins, check-outs, cancellations, and no-shows.',
    'feature.guests.title': 'Guest records & stay lists',
    'feature.guests.description': 'Keep guest profiles connected to their stays. Search guest records and review in-house, arrival, departure, and reservation lists.',
    'feature.folios.title': 'Guest folios & payments',
    'feature.folios.description': 'Post charges and payments to guest folios, apply discounts, review balances, and prepare invoices for a stay.',
    'feature.reports.title': 'Reports & daily outlook',
    'feature.reports.description': 'Review occupancy, reservations, arrivals and departures, guest statistics, revenue, and financial activity through built-in reports.',
    'feature.audit.title': 'Night audit & business day',
    'feature.audit.description': 'Work through the night-audit checklist, review daily activity, post room charges, and close or reopen the business day.',
    'feature.ledger.title': 'City ledger accounts',
    'feature.ledger.description': 'Record company account transfers and payments, then review outstanding balances and account activity reports.',
    'feature.staff.title': 'Staff access & setup',
    'feature.staff.description': 'Configure rooms, rates, payment methods, and staff accounts. Assign roles and permissions for access to app modules.',
    'features.note': 'Housekeeping-related functionality currently includes room condition tracking and lost-and-found records.',
    'local.eyebrow': 'Why PE Hotel System',
    'local.title': 'Your hotel’s daily work.<br><span>On your Windows PC.</span>',
    'local.description': 'PE Hotel Management System is a Windows desktop application that stores hotel data locally. Your team can manage daily operations without depending on an internet connection or a cloud-hosted hotel system.',
    'local.link': 'How it works',
    'local.windowsTitle': 'Built for Windows',
    'local.windowsDescription': 'A familiar desktop workflow for hotel staff.',
    'local.offlineTitle': 'Works offline',
    'local.offlineDescription': 'Local operations and license validation do not require a cloud connection.',
    'local.dataTitle': 'Hotel data stays local',
    'local.dataDescription': 'Hotel records are kept in a database on the Windows computer.',
    'steps.eyebrow': 'A straightforward start',
    'steps.title': 'From first conversation<br>to your <span>first check-in.</span>',
    'steps.description': 'Get in touch to confirm the license details and the right way to set up the application for your hotel.',
    'steps.chooseTitle': 'Choose a plan',
    'steps.chooseDescription': 'Compare monthly, yearly, and lifetime license options.',
    'steps.talkTitle': 'Talk with the developer',
    'steps.talkDescription': 'Ask about purchase, activation, and the license terms for your setup.',
    'steps.activateTitle': 'Activate your license',
    'steps.activateDescription': 'Receive an activation key and instructions, then validate the license in the app.',
    'steps.installTitle': 'Install and get to work',
    'steps.installDescription': 'Set up your hotel on Windows and manage daily operations offline.',
    'pricing.eyebrow': 'Clear license options',
    'pricing.title': 'Choose what works<br><span>for your business.</span>',
    'pricing.description': 'Each plan licenses the Windows desktop application. Monthly and yearly pricing is for the software license—not cloud hosting.',
    'pricing.monthly': 'MONTHLY',
    'pricing.perMonth': '/ month',
    'pricing.monthlyDescription': 'A flexible way to get started.',
    'pricing.product': 'PE Hotel Management System',
    'pricing.subscription': 'License subscription',
    'pricing.offline': 'Offline Windows application',
    'pricing.askMonthly': 'Ask about monthly',
    'pricing.yearly': 'YEARLY',
    'pricing.perYear': '/ year',
    'pricing.yearlyDescription': 'Better value for long-term users.',
    'pricing.annualSubscription': 'Annual license subscription',
    'pricing.askYearly': 'Ask about yearly',
    'pricing.recommended': 'LONG-TERM OPTION',
    'pricing.lifetime': 'LIFETIME',
    'pricing.perLifetime': '/ lifetime',
    'pricing.lifetimeDescription': 'One payment for a lifetime license.',
    'pricing.oneTime': 'One-time license payment',
    'pricing.noRecurring': 'No recurring subscription payment',
    'pricing.askLifetime': 'Ask about lifetime',
    'pricing.footnote': 'Contact the developer to confirm activation, device, renewal, update, and support terms before purchase. No online checkout is provided on this website.',
    'founder.eyebrow': 'A note from the developer',
    'founder.title': 'Technology should make<br>the work <span>feel lighter.</span>',
    'founder.name': 'SEAVPEAV PECH',
    'founder.role': 'Founder & Developer',
    'founder.paragraph1': 'I developed PE Hotel Management System with a simple goal: make hotel management more organized and more approachable for independent hotel businesses.',
    'founder.paragraph2': 'Small hotels deserve practical tools without having to take on a complicated enterprise system. This application brings everyday front-desk and operational tasks together in a Windows desktop experience.',
    'faq.eyebrow': 'Good to know',
    'faq.title': 'Questions,<br><span>answered.</span>',
    'faq.description': 'Have another question? Reach out to the developer using the contact details below.',
    'faq.contactLink': 'Go to contact details',
    'faq.q1': 'What is PE Hotel Management System?',
    'faq.a1': 'It is a Windows desktop application for managing rooms, reservations, guest records, check-ins and check-outs, folios, payments, reports, and related hotel operations.',
    'faq.q2': 'Is it a web app or a desktop app?',
    'faq.a2': 'It is a Windows desktop application. It is not a browser-based hotel management platform.',
    'faq.q3': 'Can I use it without an internet connection?',
    'faq.a3': 'Yes. Hotel operations and license validation work locally and do not require a cloud connection. You will need a way to contact the developer to arrange a license and receive activation instructions.',
    'faq.q4': 'Does it work on Windows?',
    'faq.a4': 'Yes. PE Hotel Management System is a Windows desktop application. Contact the developer if you need to confirm compatibility with a specific computer.',
    'faq.q5': 'How much does a license cost?',
    'faq.a5': 'The listed options are $5 per month, $50 per year, and $240 for a lifetime license. Monthly and yearly prices are software license subscriptions, not cloud hosting fees.',
    'faq.q6': 'What is included in the lifetime license?',
    'faq.a6': 'The listed lifetime option is a one-time license payment with no recurring subscription payment. Please confirm device coverage, updates, and support terms with the developer before purchase.',
    'faq.q7': 'How do I purchase and activate the software?',
    'faq.a7': 'Contact the developer to discuss a plan. The application uses an activation key that is validated locally; the developer can provide the current purchase and activation instructions.',
    'faq.q8': 'How do I get technical support?',
    'faq.a8': 'Use one of the developer contact channels on this page to ask about support. Please confirm current support arrangements before purchasing.',
    'faq.q9': 'Is it suitable for a small hotel or guesthouse?',
    'faq.a9': 'The system is positioned for independent hotels and small hospitality businesses. Contact the developer to discuss whether its current features fit your property’s workflow.',
    'contact.eyebrow': 'Start a conversation',
    'contact.title': 'Ready to manage<br>your hotel <span>smarter?</span>',
    'contact.description': 'Contact me to learn more about PE Hotel Management System and discuss which license plan may suit your hotel.',
    'contact.cardTitle': 'GET IN TOUCH',
    'contact.facebookLabel': 'Open Facebook profile',
    'contact.portfolio': 'Portfolio',
    'contact.telegramButton': 'Ask on Telegram',
    'contact.telegramButtonAria': 'Open Telegram with a prefilled message about PE Hotel Management System',
    'contact.telegramMessage': "Hi! I'm interested in PE Hotel Management System for my hotel. Could you share details about its features, license options and pricing, and the setup process? My hotel has [number] rooms. Thank you!",
    'contact.whatsappMessage': "Hello! I'm interested in PE Hotel Management System. I'm looking for a system to manage my hotel's rooms, reservations, guest stays, and payments. Could you share information about the features, license plans and pricing, system requirements, and setup steps?\n\nHotel name: [hotel name]\nNumber of rooms: [number]\n\nThank you!",
    'contact.emailSubject': 'Inquiry about PE Hotel Management System',
    'contact.emailMessage': "Hello,\n\nI'm interested in PE Hotel Management System for my hotel. Could you please share information about its features, license plans and pricing, system requirements, and setup process?\n\nHotel name: [hotel name]\nNumber of rooms: [number]\n\nThank you,\n[your name]",
    'contact.note': 'Telegram, WhatsApp, and email open a ready-to-edit inquiry template.',
    'footer.tagline': 'Practical hotel operations for independent hospitality.',
    'footer.backTop': 'Back to top',
    'footer.productType': 'Windows desktop software · Offline operation',
    'skip': 'Skip to content',
    'brand.home': 'PE Hotel Management System home',
    'brand.name': 'Hotel System',
    'brand.name': 'Hotel System',
    'brand.footer': 'PE Hotel Management System, back to top'
  },
  km: {
    'meta.title': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE | គ្រប់គ្រងសណ្ឋាគារបានងាយស្រួល',
    'meta.description': 'គ្រប់គ្រងសណ្ឋាគារដោយកាត់បន្ថយការងារឯកសារ។ ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE រួមបញ្ចូលបន្ទប់ ការកក់ បញ្ជីចំណាយភ្ញៀវ ការទូទាត់ និងរបាយការណ៍ ក្នុងកម្មវិធី Windows ដែលដំណើរការក្រៅបណ្ដាញ។',
    'meta.ogTitle': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE | រៀបចំប្រតិបត្តិការសណ្ឋាគារឱ្យកាន់តែច្បាស់',
    'meta.ogDescription': 'ប្រព័ន្ធ Windows សម្រាប់គ្រប់គ្រងបន្ទប់ ការកក់ បញ្ជីចំណាយភ្ញៀវ ការទូទាត់ និងការងារសណ្ឋាគារប្រចាំថ្ងៃ។ អាចប្រើក្រៅបណ្ដាញ។',
    'nav.features': 'មុខងារ',
    'nav.label': 'ម៉ឺនុយចម្បង',
    'nav.how': 'របៀបប្រើប្រាស់',
    'nav.pricing': 'តម្លៃ',
    'nav.founder': 'អ្នកបង្កើត',
    'nav.faq': 'សំណួរ',
    'nav.contact': 'ទំនាក់ទំនង',
    'nav.start': 'ចាប់ផ្ដើម',
    'theme.dark': 'របៀបងងឹត',
    'theme.light': 'របៀបភ្លឺ',
    'theme.switchDark': 'ប្ដូរទៅរបៀបងងឹត',
    'theme.switchLight': 'ប្ដូរទៅរបៀបភ្លឺ',
    'language.label': 'ភាសា',
    'preferences.label': 'ការកំណត់បង្ហាញ',
    'menu.open': 'បើកម៉ឺនុយ',
    'menu.close': 'បិទម៉ឺនុយ',
    'hero.preview': 'ផ្ទាំងគំរូអន្តរកម្មនៃកម្មវិធីគ្រប់គ្រងសណ្ឋាគារ',
    'hero.eyebrow': 'វិធីគ្រប់គ្រងសណ្ឋាគារដែលងាយស្រួលជាងមុន',
    'hero.title': 'គ្រប់គ្រងសណ្ឋាគារ<br><span>បានច្បាស់លាស់ជាងមុន។</span>',
    'hero.description': 'រៀបចំបន្ទប់ ការកក់ ការស្នាក់នៅរបស់ភ្ញៀវ និងការទូទាត់ក្នុងកម្មវិធីកុំព្យូទ័រតែមួយ ដែលបង្កើតឡើងសម្រាប់សណ្ឋាគារឯករាជ្យ។',
    'hero.plans': 'មើលជម្រើសអាជ្ញាបណ្ណ',
    'hero.explore': 'មើលអ្វីដែលអាចគ្រប់គ្រងបាន',
    'hero.windows': 'កម្មវិធីកុំព្យូទ័រ Windows',
    'hero.offline': 'អាចគ្រប់គ្រងប្រតិបត្តិការសណ្ឋាគារក្រៅបណ្ដាញ បន្ទាប់ពីធ្វើឱ្យអាជ្ញាបណ្ណសកម្ម។',
    'preview.title': 'ទិដ្ឋភាពទូទៅបន្ទប់',
    'preview.frontDesk': 'ផ្នែកទទួលភ្ញៀវ',
    'preview.roomManagement': 'ការគ្រប់គ្រងបន្ទប់',
    'preview.desktop': 'កម្មវិធីកុំព្យូទ័រ',
    'preview.sections': 'ផ្នែកសាកល្បងកម្មវិធី',
    'preview.rooms': 'បន្ទប់',
    'preview.guests': 'ភ្ញៀវ',
    'preview.reports': 'របាយការណ៍',
    'preview.tools': 'ឧបករណ៍',
    'preview.today': 'ថ្ងៃនេះ',
    'preview.label': 'រូបភាពគំរូបង្ហាញ',
    'preview.available': 'ទំនេរ',
    'preview.occupied': 'មានភ្ញៀវស្នាក់នៅ',
    'preview.reserved': 'បានកក់',
    'preview.status': 'មើលស្ថានភាពបន្ទប់ភ្លាមៗ',
    'preview.guestTitle': 'ទិដ្ឋភាពទូទៅភ្ញៀវ',
    'preview.guestKicker': 'ភ្ញៀវថ្ងៃនេះ',
    'preview.guestCount': 'សកម្មភាពភ្ញៀវថ្ងៃនេះ',
    'preview.guestRoom101': 'បន្ទប់ ១០១ · ចាកចេញថ្ងៃនេះ',
    'preview.guestRoom204': 'បន្ទប់ ២០៤ · ២ យប់',
    'preview.guestRoomArrival': 'មកដល់ · បន្ទប់ ១០៣',
    'preview.departing': 'កំពុងចាកចេញ',
    'preview.inHouse': 'កំពុងស្នាក់នៅ',
    'preview.arriving': 'កំពុងមកដល់',
    'preview.guestStatus': 'ទិដ្ឋភាពសង្ខេបការស្នាក់នៅរបស់ភ្ញៀវ',
    'preview.reportTitle': 'របាយការណ៍ប្រចាំថ្ងៃ',
    'preview.reportKicker': 'សង្ខេបសណ្ឋាគារ',
    'preview.occupancy': 'អត្រាស្នាក់នៅថ្ងៃនេះ',
    'preview.occupancyNote': 'មានភ្ញៀវស្នាក់នៅ ១២ ក្នុងចំណោម ១៨ បន្ទប់',
    'preview.arrivals': 'ភ្ញៀវមកដល់',
    'preview.departures': 'ភ្ញៀវចាកចេញ',
    'preview.scheduled': 'គ្រោងមកដល់ថ្ងៃនេះ',
    'preview.checkoutToday': 'ចាកចេញថ្ងៃនេះ',
    'preview.reportStatus': 'ទិដ្ឋភាពសកម្មភាពប្រចាំថ្ងៃ',
    'preview.toolsTitle': 'ឧបករណ៍សណ្ឋាគារ',
    'preview.toolsKicker': 'ចូលប្រើរហ័ស',
    'preview.reservationsTool': 'ការកក់',
    'preview.reservationsNote': 'គ្រប់គ្រងការស្នាក់នៅរបស់ភ្ញៀវដែលជិតមកដល់',
    'preview.billingTool': 'វិក្កយបត្រ និងបញ្ជីចំណាយ',
    'preview.billingNote': 'ពិនិត្យចំណាយ និងការទូទាត់របស់ភ្ញៀវ',
    'preview.setupTool': 'ការកំណត់សណ្ឋាគារ',
    'preview.setupNote': 'បន្ទប់ តម្លៃ និងសិទ្ធិចូលប្រើរបស់បុគ្គលិក',
    'preview.toolsNote': 'ឧបករណ៍មាននៅក្នុងកម្មវិធីកុំព្យូទ័រ',
    'preview.toolsStatus': 'ប្រតិបត្តិការសណ្ឋាគារនៅកន្លែងតែមួយ',
    'preview.caption': 'ផ្ទាំងគំរូអន្តរកម្ម មិនមែនជារូបថតកម្មវិធី ឬទិន្នន័យសណ្ឋាគារពិតទេ',
    'hero.audience': 'បង្កើតសម្រាប់សណ្ឋាគារឯករាជ្យ',
    'hero.capabilityRooms': 'ប្រតិបត្តិការបន្ទប់',
    'hero.capabilityGuests': 'ការស្នាក់នៅរបស់ភ្ញៀវ',
    'hero.capabilityReports': 'វិក្កយបត្រ និងរបាយការណ៍',
    'intro.label': 'សេចក្ដីសង្ខេបផលិតផល',
    'intro.lead': 'មុខងារសំខាន់ៗ រួមបញ្ចូលគ្នាយ៉ាងមានរបៀប។',
    'intro.description': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ជួយក្រុមការងារសណ្ឋាគារខ្នាតតូចរៀបចំការងារប្រចាំថ្ងៃ ចាប់ពីការកក់ថ្មីរហូតដល់បញ្ជីចំណាយរបស់ភ្ញៀវ ដោយមិនចាំបាច់ប្រើប្រព័ន្ធសណ្ឋាគារលើ Cloud។',
    'intro.exploreLabel': 'ស្វែងយល់ពីមុខងារ',
    'intro.explore': 'ស្វែងយល់ពីមុខងារ',
    'features.eyebrow': 'ឧបករណ៍ជាក់ស្ដែងសម្រាប់ការងារប្រចាំថ្ងៃ',
    'features.title': 'មើលការងារប្រចាំថ្ងៃ<br><span>បានច្បាស់លាស់ជាងមុន។</span>',
    'features.description': 'គ្រប់គ្រងព័ត៌មានសំខាន់ៗរបស់សណ្ឋាគារនៅកន្លែងតែមួយ ដោយមានឧបករណ៍ជួយសម្រួលការងាររបស់ក្រុមអ្នក។',
    'feature.rooms.title': 'ស្ថានភាព និងភាពទំនេររបស់បន្ទប់',
    'feature.rooms.description': 'មើលភាពទំនេរ ការកក់ ភាពស្អាត និងស្ថានភាពជួសជុលរបស់បន្ទប់។ អាចត្រងបញ្ជី និងមើលប្រវត្តិបន្ទប់បាន។',
    'feature.reservations.title': 'ការកក់ និងការងារទទួលភ្ញៀវ',
    'feature.reservations.description': 'បង្កើតការកក់ ជ្រើសរើសបន្ទប់ គ្រប់គ្រងការមកដល់ និងចាកចេញ ព្រមទាំងការចូលស្នាក់នៅ ការចាកចេញ ការលុបការកក់ និងភ្ញៀវមិនបានមក។',
    'feature.guests.title': 'ព័ត៌មានភ្ញៀវ និងបញ្ជីការស្នាក់នៅ',
    'feature.guests.description': 'រក្សាព័ត៌មានភ្ញៀវភ្ជាប់ជាមួយការស្នាក់នៅ។ ស្វែងរកភ្ញៀវ និងមើលបញ្ជីភ្ញៀវកំពុងស្នាក់នៅ មកដល់ ចាកចេញ និងការកក់។',
    'feature.folios.title': 'បញ្ជីចំណាយ និងការទូទាត់របស់ភ្ញៀវ',
    'feature.folios.description': 'កត់ត្រាចំណាយ និងការទូទាត់ក្នុងបញ្ជីភ្ញៀវ អនុវត្តការបញ្ចុះតម្លៃ ពិនិត្យសមតុល្យ និងរៀបចំវិក្កយបត្រស្នាក់នៅ។',
    'feature.reports.title': 'របាយការណ៍ និងទិដ្ឋភាពប្រចាំថ្ងៃ',
    'feature.reports.description': 'ពិនិត្យអត្រាស្នាក់នៅ ការកក់ ការមកដល់ និងចាកចេញ ស្ថិតិភ្ញៀវ ចំណូល និងសកម្មភាពហិរញ្ញវត្ថុតាមរយៈរបាយការណ៍ក្នុងកម្មវិធី។',
    'feature.audit.title': 'ការបិទបញ្ជីយប់ និងថ្ងៃប្រតិបត្តិការ',
    'feature.audit.description': 'អនុវត្តតាមបញ្ជីត្រួតពិនិត្យប្រចាំយប់ ពិនិត្យសកម្មភាពប្រចាំថ្ងៃ កត់ត្រាថ្លៃបន្ទប់ និងបិទ ឬបើកថ្ងៃប្រតិបត្តិការឡើងវិញ។',
    'feature.ledger.title': 'គណនីឥណទានក្រុមហ៊ុន',
    'feature.ledger.description': 'កត់ត្រាការផ្ទេរប្រាក់ និងការទូទាត់តាមគណនីក្រុមហ៊ុន រួចពិនិត្យសមតុល្យនៅសល់ និងរបាយការណ៍សកម្មភាពគណនី។',
    'feature.staff.title': 'សិទ្ធិចូលប្រើ និងការកំណត់ប្រព័ន្ធ',
    'feature.staff.description': 'កំណត់បន្ទប់ តម្លៃ វិធីទូទាត់ និងគណនីបុគ្គលិក។ កំណត់តួនាទី និងសិទ្ធិប្រើប្រាស់ម៉ូឌុលនីមួយៗ។',
    'features.note': 'មុខងារដែលពាក់ព័ន្ធនឹងការងារថែទាំបន្ទប់ បច្ចុប្បន្នមានការតាមដានស្ថានភាពបន្ទប់ និងការកត់ត្រាវត្ថុបាត់ និងវត្ថុដែលរកឃើញ។',
    'local.eyebrow': 'ហេតុអ្វីជ្រើសរើស PE Hotel System',
    'local.title': 'ការងារប្រចាំថ្ងៃរបស់សណ្ឋាគារ។<br><span>នៅលើកុំព្យូទ័រ Windows របស់អ្នក។</span>',
    'local.description': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE គឺជាកម្មវិធី Windows ដែលរក្សាទុកទិន្នន័យសណ្ឋាគារនៅក្នុងកុំព្យូទ័រ។ ក្រុមការងារអាចគ្រប់គ្រងការងារប្រចាំថ្ងៃដោយមិនចាំបាច់ភ្ជាប់អ៊ីនធឺណិត ឬពឹងផ្អែកលើប្រព័ន្ធសណ្ឋាគារលើ Cloud។',
    'local.link': 'របៀបប្រើប្រាស់',
    'local.windowsTitle': 'បង្កើតសម្រាប់ Windows',
    'local.windowsDescription': 'ផ្ទាំងកម្មវិធីកុំព្យូទ័រដែលងាយស្រួលសម្រាប់បុគ្គលិកសណ្ឋាគារ។',
    'local.offlineTitle': 'ដំណើរការក្រៅបណ្ដាញ',
    'local.offlineDescription': 'ការងារក្នុងកម្មវិធី និងការផ្ទៀងផ្ទាត់អាជ្ញាបណ្ណ មិនត្រូវការការភ្ជាប់ Cloud ទេ។',
    'local.dataTitle': 'ទិន្នន័យសណ្ឋាគាររក្សាទុកក្នុងកុំព្យូទ័រ',
    'local.dataDescription': 'ព័ត៌មានសណ្ឋាគារត្រូវបានរក្សាទុកក្នុងមូលដ្ឋានទិន្នន័យនៅលើកុំព្យូទ័រ Windows។',
    'steps.eyebrow': 'ចាប់ផ្ដើមបានយ៉ាងសាមញ្ញ',
    'steps.title': 'ចាប់ពីការសាកសួរដំបូង<br>រហូតដល់ <span>ការចូលស្នាក់នៅដំបូង។</span>',
    'steps.description': 'ទាក់ទងមកយើង ដើម្បីបញ្ជាក់ព័ត៌មានអាជ្ញាបណ្ណ និងវិធីដំឡើងកម្មវិធីសម្រាប់សណ្ឋាគាររបស់អ្នក។',
    'steps.chooseTitle': 'ជ្រើសរើសគម្រោង',
    'steps.chooseDescription': 'ប្រៀបធៀបជម្រើសអាជ្ញាបណ្ណប្រចាំខែ ប្រចាំឆ្នាំ និងពេញមួយជីវិត។',
    'steps.talkTitle': 'ពិភាក្សាជាមួយអ្នកបង្កើត',
    'steps.talkDescription': 'សួរអំពីការទិញ ការធ្វើឱ្យសកម្ម និងលក្ខខណ្ឌអាជ្ញាបណ្ណសម្រាប់ការប្រើប្រាស់របស់អ្នក។',
    'steps.activateTitle': 'ធ្វើឱ្យអាជ្ញាបណ្ណសកម្ម',
    'steps.activateDescription': 'ទទួលបានលេខកូដ និងការណែនាំ រួចផ្ទៀងផ្ទាត់អាជ្ញាបណ្ណក្នុងកម្មវិធី។',
    'steps.installTitle': 'ដំឡើង និងចាប់ផ្ដើមប្រើប្រាស់',
    'steps.installDescription': 'ដំឡើងប្រព័ន្ធលើ Windows និងគ្រប់គ្រងការងារប្រចាំថ្ងៃក្រៅបណ្ដាញ។',
    'pricing.eyebrow': 'ជម្រើសអាជ្ញាបណ្ណច្បាស់លាស់',
    'pricing.title': 'ជ្រើសរើសជម្រើស<br><span>ដែលសមនឹងអាជីវកម្មអ្នក។</span>',
    'pricing.description': 'គម្រោងនីមួយៗផ្ដល់អាជ្ញាបណ្ណសម្រាប់កម្មវិធី Windows។ តម្លៃប្រចាំខែ និងឆ្នាំ គឺសម្រាប់អាជ្ញាបណ្ណកម្មវិធី មិនមែនសេវាបង្ហោះលើ Cloud ទេ។',
    'pricing.monthly': 'ប្រចាំខែ',
    'pricing.perMonth': '/ ខែ',
    'pricing.monthlyDescription': 'ជម្រើសបង់ប្រាក់ដែលមានភាពបត់បែន។',
    'pricing.product': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE',
    'pricing.subscription': 'ការជាវអាជ្ញាបណ្ណ',
    'pricing.offline': 'កម្មវិធី Windows ប្រើក្រៅបណ្ដាញ',
    'pricing.askMonthly': 'សាកសួរអំពីគម្រោងប្រចាំខែ',
    'pricing.yearly': 'ប្រចាំឆ្នាំ',
    'pricing.perYear': '/ ឆ្នាំ',
    'pricing.yearlyDescription': 'សន្សំសំចៃជាង សម្រាប់ការប្រើប្រាស់រយៈពេលវែង។',
    'pricing.annualSubscription': 'ការជាវអាជ្ញាបណ្ណប្រចាំឆ្នាំ',
    'pricing.askYearly': 'សាកសួរអំពីគម្រោងប្រចាំឆ្នាំ',
    'pricing.recommended': 'ជម្រើសរយៈពេលវែង',
    'pricing.lifetime': 'ពេញមួយជីវិត',
    'pricing.perLifetime': '/ ពេញមួយជីវិត',
    'pricing.lifetimeDescription': 'បង់ម្ដងសម្រាប់អាជ្ញាបណ្ណពេញមួយជីវិត។',
    'pricing.oneTime': 'បង់ថ្លៃអាជ្ញាបណ្ណតែមួយលើក',
    'pricing.noRecurring': 'មិនមានការបង់ថ្លៃជាវជាប្រចាំទេ',
    'pricing.askLifetime': 'សាកសួរអំពីគម្រោងពេញមួយជីវិត',
    'pricing.footnote': 'សូមទាក់ទងអ្នកបង្កើត ដើម្បីបញ្ជាក់ការធ្វើឱ្យសកម្ម ឧបករណ៍ ការបន្ត ការអាប់ដេត និងលក្ខខណ្ឌជំនួយ មុនពេលទិញ។ គេហទំព័រនេះមិនមានប្រព័ន្ធទូទាត់ប្រាក់តាមអ៊ីនធឺណិតទេ។',
    'founder.eyebrow': 'សារពីអ្នកបង្កើត',
    'founder.title': 'បច្ចេកវិទ្យាគួរជួយឱ្យ<br><span>ការងារកាន់តែងាយស្រួល។</span>',
    'founder.name': 'SEAVPEAV PECH',
    'founder.role': 'ស្ថាបនិក និងអ្នកអភិវឌ្ឍកម្មវិធី',
    'founder.paragraph1': 'ខ្ញុំបានបង្កើតប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ដោយមានគោលបំណងសាមញ្ញ៖ ធ្វើឱ្យការគ្រប់គ្រងសណ្ឋាគារមានរបៀបរៀបរយ និងងាយស្រួលប្រើសម្រាប់អាជីវកម្មសណ្ឋាគារឯករាជ្យ។',
    'founder.paragraph2': 'សណ្ឋាគារខ្នាតតូចគួរមានឧបករណ៍ជាក់ស្ដែង ដោយមិនចាំបាច់ប្រើប្រព័ន្ធសហគ្រាសស្មុគស្មាញ។ កម្មវិធីនេះរួមបញ្ចូលការងារទទួលភ្ញៀវ និងប្រតិបត្តិការប្រចាំថ្ងៃក្នុងកម្មវិធី Windows តែមួយ។',
    'faq.eyebrow': 'ព័ត៌មានគួរដឹង',
    'faq.title': 'សំណួរ<br><span>និងចម្លើយ។</span>',
    'faq.description': 'មានសំណួរផ្សេងទៀតមែនទេ? សូមទាក់ទងអ្នកបង្កើតតាមព័ត៌មានខាងក្រោម។',
    'faq.contactLink': 'ទៅកាន់ព័ត៌មានទំនាក់ទំនង',
    'faq.q1': 'តើប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ជាអ្វី?',
    'faq.a1': 'នេះជាកម្មវិធី Windows សម្រាប់គ្រប់គ្រងបន្ទប់ ការកក់ ព័ត៌មានភ្ញៀវ ការចូលស្នាក់នៅ និងចាកចេញ បញ្ជីចំណាយ ការទូទាត់ របាយការណ៍ និងប្រតិបត្តិការសណ្ឋាគារពាក់ព័ន្ធ។',
    'faq.q2': 'តើវាជាកម្មវិធីគេហទំព័រ ឬកម្មវិធីកុំព្យូទ័រ?',
    'faq.a2': 'វាជាកម្មវិធីកុំព្យូទ័រ Windows មិនមែនជាប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារដែលប្រើតាមកម្មវិធីរុករកគេហទំព័រទេ។',
    'faq.q3': 'តើអាចប្រើដោយគ្មានអ៊ីនធឺណិតបានទេ?',
    'faq.a3': 'បាន។ ប្រតិបត្តិការសណ្ឋាគារ និងការផ្ទៀងផ្ទាត់អាជ្ញាបណ្ណដំណើរការក្នុងកុំព្យូទ័រ ហើយមិនត្រូវការការភ្ជាប់ Cloud ទេ។ អ្នកត្រូវមានមធ្យោបាយទាក់ទងអ្នកបង្កើត ដើម្បីរៀបចំអាជ្ញាបណ្ណ និងទទួលការណែនាំធ្វើឱ្យសកម្ម។',
    'faq.q4': 'តើកម្មវិធីនេះដំណើរការលើ Windows ដែរឬទេ?',
    'faq.a4': 'ដំណើរការ។ ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ជាកម្មវិធីកុំព្យូទ័រ Windows។ សូមទាក់ទងអ្នកបង្កើត ដើម្បីបញ្ជាក់ភាពឆបគ្នាជាមួយកុំព្យូទ័រជាក់លាក់។',
    'faq.q5': 'តើអាជ្ញាបណ្ណមានតម្លៃប៉ុន្មាន?',
    'faq.a5': 'ជម្រើសដែលបានកំណត់មាន $5 ក្នុងមួយខែ $50 ក្នុងមួយឆ្នាំ និង $240 សម្រាប់អាជ្ញាបណ្ណពេញមួយជីវិត។ តម្លៃប្រចាំខែ និងឆ្នាំ គឺជាការជាវអាជ្ញាបណ្ណកម្មវិធី មិនមែនថ្លៃ Cloud ទេ។',
    'faq.q6': 'តើអាជ្ញាបណ្ណពេញមួយជីវិតរួមបញ្ចូលអ្វីខ្លះ?',
    'faq.a6': 'គម្រោងពេញមួយជីវិតគឺបង់ថ្លៃអាជ្ញាបណ្ណតែមួយលើក ដោយមិនមានការបង់ថ្លៃជាវជាប្រចាំ។ សូមបញ្ជាក់ចំនួនឧបករណ៍ ការអាប់ដេត និងលក្ខខណ្ឌជំនួយជាមួយអ្នកបង្កើត មុនពេលទិញ។',
    'faq.q7': 'តើធ្វើដូចម្តេចដើម្បីទិញ និងធ្វើឱ្យកម្មវិធីសកម្ម?',
    'faq.a7': 'ទាក់ទងអ្នកបង្កើត ដើម្បីពិភាក្សាអំពីគម្រោង។ កម្មវិធីប្រើលេខកូដធ្វើឱ្យសកម្ម ដែលផ្ទៀងផ្ទាត់ក្នុងកុំព្យូទ័រ ហើយអ្នកបង្កើតអាចផ្ដល់ព័ត៌មានទិញ និងការណែនាំបច្ចុប្បន្ន។',
    'faq.q8': 'តើខ្ញុំអាចទទួលបានជំនួយបច្ចេកទេសដោយរបៀបណា?',
    'faq.a8': 'ប្រើមធ្យោបាយទំនាក់ទំនងណាមួយនៅលើទំព័រនេះ ដើម្បីសាកសួរអំពីជំនួយ។ សូមបញ្ជាក់លក្ខខណ្ឌជំនួយបច្ចុប្បន្ន មុនពេលទិញ។',
    'faq.q9': 'តើសមស្របសម្រាប់សណ្ឋាគារខ្នាតតូច ឬផ្ទះសំណាក់ដែរឬទេ?',
    'faq.a9': 'ប្រព័ន្ធនេះបង្កើតឡើងសម្រាប់សណ្ឋាគារឯករាជ្យ និងអាជីវកម្មបដិសណ្ឋារកិច្ចខ្នាតតូច។ សូមទាក់ទងអ្នកបង្កើត ដើម្បីពិភាក្សាថាតើមុខងារបច្ចុប្បន្នសមនឹងការងាររបស់អ្នកដែរឬទេ។',
    'contact.eyebrow': 'ចាប់ផ្ដើមការសន្ទនា',
    'contact.title': 'ត្រៀមខ្លួនគ្រប់គ្រង<br>សណ្ឋាគាររបស់អ្នក<span>ឱ្យកាន់តែប្រសើរ?</span>',
    'contact.description': 'ទាក់ទងមកខ្ញុំ ដើម្បីស្វែងយល់បន្ថែមអំពីប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE និងពិភាក្សាជម្រើសអាជ្ញាបណ្ណដែលសមនឹងសណ្ឋាគាររបស់អ្នក។',
    'contact.cardTitle': 'ទាក់ទងមកយើង',
    'contact.facebookLabel': 'បើកគណនី Facebook',
    'contact.portfolio': 'ស្នាដៃ និងប្រវត្តិរូប',
    'contact.telegramButton': 'សាកសួរតាម Telegram',
    'contact.telegramButtonAria': 'បើក Telegram ជាមួយសារសាកសួរអំពីប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ដែលបានរៀបចំរួច',
    'contact.telegramMessage': 'សួស្តី! ខ្ញុំចាប់អារម្មណ៍លើប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE សម្រាប់សណ្ឋាគាររបស់ខ្ញុំ។ តើអាចផ្តល់ព័ត៌មានអំពីមុខងារ ជម្រើសអាជ្ញាបណ្ណ និងតម្លៃ ព្រមទាំងរបៀបដំឡើងប្រើប្រាស់បានទេ? សណ្ឋាគាររបស់ខ្ញុំមាន [ចំនួន] បន្ទប់។ សូមអរគុណ!',
    'contact.whatsappMessage': 'សួស្តី! ខ្ញុំចាប់អារម្មណ៍លើប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE។ ខ្ញុំកំពុងស្វែងរកប្រព័ន្ធសម្រាប់គ្រប់គ្រងបន្ទប់ ការកក់ ការស្នាក់នៅរបស់ភ្ញៀវ និងការទូទាត់។ តើអាចផ្តល់ព័ត៌មានអំពីមុខងារ ជម្រើសអាជ្ញាបណ្ណ និងតម្លៃ តម្រូវការប្រព័ន្ធ និងវិធីដំឡើងប្រើប្រាស់បានទេ?\n\nឈ្មោះសណ្ឋាគារ៖ [ឈ្មោះសណ្ឋាគារ]\nចំនួនបន្ទប់៖ [ចំនួន]\n\nសូមអរគុណ!',
    'contact.emailSubject': 'សាកសួរអំពីប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE',
    'contact.emailMessage': 'សួស្តី,\n\nខ្ញុំចាប់អារម្មណ៍លើប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE សម្រាប់សណ្ឋាគាររបស់ខ្ញុំ។ សូមផ្តល់ព័ត៌មានអំពីមុខងារ ជម្រើសអាជ្ញាបណ្ណ និងតម្លៃ តម្រូវការប្រព័ន្ធ និងវិធីដំឡើងប្រើប្រាស់។\n\nឈ្មោះសណ្ឋាគារ៖ [ឈ្មោះសណ្ឋាគារ]\nចំនួនបន្ទប់៖ [ចំនួន]\n\nសូមអរគុណ,\n[ឈ្មោះរបស់អ្នក]',
    'contact.note': 'Telegram WhatsApp និងអ៊ីមែល នឹងបើកសារសាកសួរដែលអាចកែសម្រួលមុនពេលផ្ញើ។',
    'footer.tagline': 'ប្រតិបត្តិការសណ្ឋាគារជាក់ស្ដែង សម្រាប់អាជីវកម្មឯករាជ្យ។',
    'footer.backTop': 'ត្រឡប់ទៅខាងលើ',
    'footer.productType': 'កម្មវិធីកុំព្យូទ័រ Windows · ដំណើរការក្រៅបណ្ដាញ',
    'skip': 'រំលងទៅមាតិកា',
    'brand.home': 'ទំព័រដើមប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE',
    'brand.name': 'ប្រព័ន្ធសណ្ឋាគារ',
    'brand.footer': 'ប្រព័ន្ធគ្រប់គ្រងសណ្ឋាគារ PE ត្រឡប់ទៅខាងលើ'
  }
};

const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('#theme-color');
const previewTablist = document.querySelector('.sidebar-tabs');
const floatingTelegram = document.querySelector('.floating-telegram');
const contactSection = document.querySelector('#contact');
const contactTelegram = document.querySelector('.contact-telegram');
const contactWhatsapp = document.querySelector('.contact-whatsapp');
const contactEmail = document.querySelector('.contact-email');

function updatePreviewTabOrientation() {
  if (!previewTablist) return;
  const isCompact = window.matchMedia('(max-width: 560px)').matches;
  previewTablist.setAttribute('aria-orientation', isCompact ? 'horizontal' : 'vertical');
}

updatePreviewTabOrientation();
window.addEventListener('resize', updatePreviewTabOrientation, { passive: true });

if (floatingTelegram && contactSection && 'IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver(([entry]) => {
    floatingTelegram.classList.toggle('is-hidden', entry.isIntersecting);
  }, { threshold: 0 });
  contactObserver.observe(contactSection);
}

function closeNavigation() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translations[currentLanguage]['menu.open']);
  navigation.classList.remove('is-open');
}

const previewTabContent = {
  rooms: { title: 'preview.title', kicker: 'preview.frontDesk', status: 'preview.status' },
  guests: { title: 'preview.guestTitle', kicker: 'preview.guestKicker', status: 'preview.guestStatus' },
  reports: { title: 'preview.reportTitle', kicker: 'preview.reportKicker', status: 'preview.reportStatus' },
  tools: { title: 'preview.toolsTitle', kicker: 'preview.toolsKicker', status: 'preview.toolsStatus' }
};

function selectPreviewTab(name, moveFocus = false) {
  const content = previewTabContent[name];
  if (!content) return;

  const dictionary = translations[currentLanguage];
  const tab = document.querySelector(`[data-preview-tab="${name}"]`);
  const appMain = document.querySelector('.app-main');
  if (!tab || !appMain) return;

  document.querySelectorAll('[data-preview-tab]').forEach((button) => {
    const active = button === tab;
    button.classList.toggle('selected', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  document.querySelectorAll('[data-preview-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.previewPanel !== name;
  });

  appMain.setAttribute('aria-labelledby', tab.id);
  appMain.querySelector('.app-kicker').textContent = dictionary[content.kicker];
  appMain.querySelector('.app-heading h2').textContent = dictionary[content.title];
  appMain.querySelector('.app-footnote > span:last-child').textContent = dictionary[content.status];
  if (moveFocus) tab.focus();
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  const dictionary = translations[currentLanguage];
  root.lang = currentLanguage === 'km' ? 'km' : 'en';
  root.classList.toggle('lang-km', currentLanguage === 'km');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value !== undefined) element.setAttribute('content', value);
  });

  const title = document.querySelector('[data-i18n-title]');
  if (title && dictionary[title.dataset.i18nTitle]) {
    document.title = dictionary[title.dataset.i18nTitle];
  }

  document.querySelector('.skip-link')?.replaceChildren(dictionary.skip);
  document.querySelector('.brand')?.setAttribute('aria-label', dictionary['brand.home']);
  document.querySelector('.footer-brand')?.setAttribute('aria-label', dictionary['brand.footer']);
  navigation?.setAttribute('aria-label', dictionary['nav.label']);
  document.querySelector('.nav-preferences')?.setAttribute('aria-label', dictionary['preferences.label']);
  document.querySelector('.language-switch')?.setAttribute('aria-label', dictionary['language.label']);
  const telegramMessageUrl = `https://t.me/Pe_av?text=${encodeURIComponent(dictionary['contact.telegramMessage'])}`;
  if (contactTelegram) contactTelegram.href = telegramMessageUrl;
  if (floatingTelegram) floatingTelegram.href = telegramMessageUrl;
  if (contactWhatsapp) {
    const whatsappUrl = contactWhatsapp.href.split('?')[0];
    contactWhatsapp.href = `${whatsappUrl}?text=${encodeURIComponent(dictionary['contact.whatsappMessage'])}`;
  }
  if (contactEmail) {
    const emailUrl = contactEmail.href.split('?')[0];
    const subject = encodeURIComponent(dictionary['contact.emailSubject']);
    const message = encodeURIComponent(dictionary['contact.emailMessage']);
    contactEmail.href = `${emailUrl}?subject=${subject}&body=${message}`;
  }
  if (menuButton) {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', dictionary[isOpen ? 'menu.close' : 'menu.open']);
  }
  const activePreviewTab = document.querySelector('[data-preview-tab][aria-selected="true"]');
  if (activePreviewTab) selectPreviewTab(activePreviewTab.dataset.previewTab);
  setTheme(root.dataset.theme || 'light', false);

  document.querySelectorAll('.language-option').forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem('pe-hotel-language', currentLanguage);
  } catch {
    // Language still works for the current page if browser storage is disabled.
  }
}

function setTheme(theme, persist = true) {
  const isDark = theme === 'dark';
  root.dataset.theme = isDark ? 'dark' : 'light';
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.setAttribute('aria-label', translations[currentLanguage][isDark ? 'theme.switchLight' : 'theme.switchDark']);
    const label = themeButton.querySelector('[data-i18n]');
    if (label) label.textContent = translations[currentLanguage][isDark ? 'theme.light' : 'theme.dark'];
  }
  if (themeColor) themeColor.setAttribute('content', isDark ? '#111b27' : '#ffffff');

  if (persist) {
    try {
      localStorage.setItem('pe-hotel-theme', isDark ? 'dark' : 'light');
    } catch {
      // Theme still works for the current page if browser storage is disabled.
    }
  }
}

let currentLanguage = 'en';
try {
  currentLanguage = localStorage.getItem('pe-hotel-language') || 'en';
} catch {
  currentLanguage = 'en';
}
setLanguage(currentLanguage);

let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('pe-hotel-theme') || 'light';
} catch {
  savedTheme = 'light';
}
setTheme(savedTheme, false);

document.querySelectorAll('[data-preview-tab]').forEach((button) => {
  button.addEventListener('click', () => selectPreviewTab(button.dataset.previewTab));
  button.addEventListener('keydown', (event) => {
    const tabs = [...document.querySelectorAll('[data-preview-tab]')];
    const index = tabs.indexOf(button);
    let nextIndex;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    selectPreviewTab(tabs[nextIndex].dataset.previewTab, true);
  });
});

document.querySelectorAll('.language-option').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

themeButton?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', translations[currentLanguage][isOpen ? 'menu.open' : 'menu.close']);
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
