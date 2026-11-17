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

translations.id = { ...translations.en, ...{
  'meta.title': 'Sistem Manajemen Hotel PE | Kelola hotel Anda dengan mudah',
  'meta.description': 'Kelola hotel Anda dengan lebih sedikit pekerjaan administratif. Sistem Manajemen Hotel PE menyatukan kamar, reservasi, folio tamu, pembayaran, dan laporan dalam aplikasi desktop Windows yang berjalan offline.',
  'meta.ogTitle': 'Sistem Manajemen Hotel PE | Operasional hotel yang lebih jelas',
  'meta.ogDescription': 'Sistem desktop Windows yang praktis untuk manajemen kamar, reservasi, folio tamu, pembayaran, dan operasional hotel harian. Berjalan offline.',
  'nav.features': 'Fitur',
  'nav.label': 'Navigasi utama',
  'nav.how': 'Cara kerja',
  'nav.pricing': 'Harga',
  'nav.founder': 'Pendiri',
  'nav.faq': 'FAQ',
  'nav.contact': 'Kontak',
  'nav.start': 'Mulai',
  'theme.dark': 'Mode gelap',
  'theme.light': 'Mode terang',
  'theme.switchDark': 'Alihkan ke mode gelap',
  'theme.switchLight': 'Alihkan ke mode terang',
  'language.label': 'Bahasa',
  'preferences.label': 'Preferensi tampilan',
  'menu.open': 'Buka menu navigasi',
  'menu.close': 'Tutup menu navigasi',
  'hero.eyebrow': 'Cara yang lebih tenang untuk mengelola hotel',
  'hero.title': 'Kelola hotel Anda<br><span>dengan lebih jelas.</span>',
  'hero.description': 'Jaga kamar, reservasi, masa inap tamu, dan pembayaran tetap teratur dalam satu aplikasi desktop yang praktis—dibuat untuk ritme hotel independen.',
  'hero.plans': 'Jelajahi paket lisensi',
  'hero.explore': 'Lihat apa yang dapat dikelola',
  'hero.windows': 'Perangkat lunak desktop Windows',
  'hero.offline': 'Operasional hotel berjalan offline setelah aktivasi.',
  'preview.title': 'Ikhtisar kamar',
  'preview.frontDesk': 'MEJA DEPAN',
  'preview.roomManagement': 'Manajemen Kamar',
  'preview.desktop': 'Aplikasi desktop',
  'preview.rooms': 'Kamar',
  'preview.guests': 'Tamu',
  'preview.reports': 'Laporan',
  'preview.tools': 'Alat',
  'preview.today': 'Hari ini',
  'preview.available': 'Tersedia',
  'preview.occupied': 'Terisi',
  'preview.reserved': 'Dipesan',
  'preview.status': 'Status kamar dalam satu tampilan',
  'preview.guestTitle': 'Ikhtisar tamu',
  'preview.guestKicker': 'TAMU HARI INI',
  'preview.guestCount': 'Aktivitas tamu hari ini',
  'preview.guestRoom101': 'Kamar 101 · Check-out hari ini',
  'preview.guestRoom204': 'Kamar 204 · 2 malam',
  'preview.guestRoomArrival': 'Kedatangan · Kamar 103',
  'preview.departing': 'Check-out',
  'preview.inHouse': 'Menginap',
  'preview.arriving': 'Akan tiba',
  'preview.guestStatus': 'Masa inap tamu dalam satu tampilan',
  'preview.reportTitle': 'Laporan harian',
  'preview.reportKicker': 'IKHTISAR HOTEL',
  'preview.occupancy': 'Tingkat hunian hari ini',
  'preview.occupancyNote': '12 dari 18 kamar terisi',
  'preview.arrivals': 'Kedatangan',
  'preview.departures': 'Keberangkatan',
  'preview.scheduled': 'Terjadwal hari ini',
  'preview.checkoutToday': 'Check-out hari ini',
  'preview.reportStatus': 'Ikhtisar aktivitas harian',
  'preview.toolsTitle': 'Alat hotel',
  'preview.toolsKicker': 'AKSES CEPAT',
  'preview.reservationsTool': 'Reservasi',
  'preview.reservationsNote': 'Kelola masa inap tamu yang akan datang',
  'preview.billingTool': 'Tagihan & folio',
  'preview.billingNote': 'Tinjau biaya dan pembayaran tamu',
  'preview.setupTool': 'Pengaturan hotel',
  'preview.setupNote': 'Kamar, tarif, dan akses staf',
  'preview.toolsNote': 'Alat yang tersedia di aplikasi desktop',
  'preview.toolsStatus': 'Operasional hotel dalam satu tempat',
  'preview.caption': 'Konsep antarmuka ilustratif, bukan tangkapan layar produk',
  'hero.audience': 'DIBUAT UNTUK HOSPITALITAS INDEPENDEN',
  'hero.capabilityRooms': 'Operasional kamar',
  'hero.capabilityGuests': 'Masa inap tamu',
  'hero.capabilityReports': 'Tagihan & laporan',
  'intro.label': 'Ringkasan produk',
  'intro.lead': 'Hal-hal penting yang disatukan dengan cermat.',
  'intro.description': 'Sistem Manajemen Hotel PE membantu tim hotel kecil melalui detail harian—mulai dari reservasi baru hingga folio tamu—tanpa bergantung pada platform hotel berbasis cloud.',
  'intro.explore': 'Jelajahi fitur',
  'features.eyebrow': 'Alat praktis untuk pekerjaan harian',
  'features.title': 'Pandangan yang lebih jelas<br><span>tentang hari ke hari.</span>',
  'features.description': 'Jaga semua bagian properti Anda di satu tempat dengan alat yang mendukung pekerjaan tim Anda.',
  'feature.rooms.title': 'Status & ketersediaan kamar',
  'feature.rooms.description': 'Lihat ketersediaan kamar, reservasi, kebersihan, dan status perawatan secara bersamaan. Filter daftar kamar dan tinjau riwayat kamar.',
  'feature.reservations.title': 'Reservasi & meja depan',
  'feature.reservations.description': 'Buat reservasi, tetapkan kamar, kelola kedatangan dan keberangkatan, serta tangani check-in, check-out, pembatalan, dan no-show.',
  'feature.guests.title': 'Catatan tamu & daftar masa inap',
  'feature.guests.description': 'Jaga profil tamu tetap terhubung dengan masa inap mereka. Cari catatan tamu dan tinjau daftar tamu yang menginap, akan tiba, check-out, dan reservasi.',
  'feature.folios.title': 'Folio tamu & pembayaran',
  'feature.folios.description': 'Catat biaya dan pembayaran di folio tamu, terapkan diskon, tinjau saldo, dan siapkan faktur untuk masa inap.',
  'feature.reports.title': 'Laporan & gambaran harian',
  'feature.reports.description': 'Tinjau hunian, reservasi, kedatangan dan keberangkatan, statistik tamu, pendapatan, dan aktivitas keuangan melalui laporan bawaan.',
  'feature.audit.title': 'Night audit & hari bisnis',
  'feature.audit.description': 'Kerjakan daftar checklist night audit, tinjau aktivitas harian, catat biaya kamar, dan tutup atau buka kembali hari bisnis.',
  'feature.ledger.title': 'Akun city ledger',
  'feature.ledger.description': 'Catat transfer akun perusahaan dan pembayaran, lalu tinjau saldo yang masih tertunggak dan laporan aktivitas akun.',
  'feature.staff.title': 'Akses staf & pengaturan',
  'feature.staff.description': 'Atur kamar, tarif, metode pembayaran, dan akun staf. Tetapkan peran dan izin untuk akses modul aplikasi.',
  'features.note': 'Fungsi yang berkaitan dengan housekeeping saat ini mencakup pelacakan kondisi kamar dan catatan barang hilang.',
  'local.eyebrow': 'Mengapa PE Hotel System',
  'local.title': 'Pekerjaan harian hotel Anda.<br><span>Di komputer Windows Anda.</span>',
  'local.description': 'Sistem Manajemen Hotel PE adalah aplikasi desktop Windows yang menyimpan data hotel secara lokal. Tim Anda dapat mengelola operasional harian tanpa bergantung pada koneksi internet atau sistem hotel berbasis cloud.',
  'local.link': 'Cara kerjanya',
  'local.windowsTitle': 'Dibuat untuk Windows',
  'local.windowsDescription': 'Alur kerja desktop yang familiar untuk staf hotel.',
  'local.offlineTitle': 'Bekerja offline',
  'local.offlineDescription': 'Operasi lokal dan validasi lisensi tidak memerlukan koneksi cloud.',
  'local.dataTitle': 'Data hotel disimpan lokal',
  'local.dataDescription': 'Catatan hotel disimpan dalam database di komputer Windows.',
  'steps.eyebrow': 'Mulai yang sederhana',
  'steps.title': 'Dari percakapan pertama<br>hingga <span>check-in pertama.</span>',
  'steps.description': 'Hubungi kami untuk memastikan detail lisensi dan cara yang tepat untuk menyiapkan aplikasi untuk hotel Anda.',
  'steps.chooseTitle': 'Pilih paket',
  'steps.chooseDescription': 'Bandingkan opsi lisensi bulanan, tahunan, dan seumur hidup.',
  'steps.talkTitle': 'Bicara dengan pengembang',
  'steps.talkDescription': 'Tanyakan tentang pembelian, aktivasi, dan syarat lisensi untuk pengaturan Anda.',
  'steps.activateTitle': 'Aktifkan lisensi Anda',
  'steps.activateDescription': 'Dapatkan kunci aktivasi dan panduan, lalu validasi lisensi di aplikasi.',
  'steps.installTitle': 'Instal dan mulai bekerja',
  'steps.installDescription': 'Siapkan hotel Anda di Windows dan kelola operasional harian secara offline.',
  'pricing.eyebrow': 'Pilihan lisensi yang jelas',
  'pricing.title': 'Pilih yang paling sesuai<br><span>untuk bisnis Anda.</span>',
  'pricing.description': 'Setiap paket melisensikan aplikasi desktop Windows. Harga bulanan dan tahunan adalah untuk lisensi perangkat lunak, bukan hosting cloud.',
  'pricing.monthly': 'BULANAN',
  'pricing.perMonth': '/ bulan',
  'pricing.monthlyDescription': 'Cara yang fleksibel untuk memulai.',
  'pricing.product': 'Sistem Manajemen Hotel PE',
  'pricing.subscription': 'Langganan lisensi',
  'pricing.offline': 'Aplikasi Windows offline',
  'pricing.askMonthly': 'Tanya tentang bulanan',
  'pricing.yearly': 'TAHUNAN',
  'pricing.perYear': '/ tahun',
  'pricing.yearlyDescription': 'Nilai lebih baik untuk penggunaan jangka panjang.',
  'pricing.annualSubscription': 'Langganan lisensi tahunan',
  'pricing.askYearly': 'Tanya tentang tahunan',
  'pricing.recommended': 'OPSI JANGKA PANJANG',
  'pricing.lifetime': 'SEUMUR HIDUP',
  'pricing.perLifetime': '/ seumur hidup',
  'pricing.lifetimeDescription': 'Satu pembayaran untuk lisensi seumur hidup.',
  'pricing.oneTime': 'Pembayaran lisensi satu kali',
  'pricing.noRecurring': 'Tidak ada pembayaran langganan berulang',
  'pricing.askLifetime': 'Tanya tentang seumur hidup',
  'pricing.footnote': 'Hubungi pengembang untuk mengonfirmasi aktivasi, perangkat, perpanjangan, pembaruan, dan syarat dukungan sebelum membeli. Tidak ada checkout online di situs ini.',
  'founder.eyebrow': 'Catatan dari pengembang',
  'founder.title': 'Teknologi harus membuat<br>pekerjaan terasa <span>lebih ringan.</span>',
  'founder.name': 'SEAVPEAV PECH',
  'founder.role': 'Pendiri & Pengembang',
  'founder.paragraph1': 'Saya mengembangkan Sistem Manajemen Hotel PE dengan tujuan sederhana: membuat manajemen hotel lebih teratur dan lebih mudah diakses bagi usaha hotel independen.',
  'founder.paragraph2': 'Hotel kecil berhak mendapatkan alat yang praktis tanpa harus memakai sistem perusahaan yang rumit. Aplikasi ini menyatukan tugas harian front desk dan operasional dalam pengalaman desktop Windows.',
  'faq.eyebrow': 'Yang perlu diketahui',
  'faq.title': 'Pertanyaan,<br><span>terjawab.</span>',
  'faq.description': 'Ada pertanyaan lain? Hubungi pengembang menggunakan detail kontak di bawah ini.',
  'faq.contactLink': 'Ke detail kontak',
  'faq.q1': 'Apa itu Sistem Manajemen Hotel PE?',
  'faq.a1': 'Ini adalah aplikasi desktop Windows untuk mengelola kamar, reservasi, catatan tamu, check-in dan check-out, folio, pembayaran, laporan, dan operasional hotel terkait.',
  'faq.q2': 'Apakah ini aplikasi web atau aplikasi desktop?',
  'faq.a2': 'Ini adalah aplikasi desktop Windows. Bukan platform manajemen hotel berbasis browser.',
  'faq.q3': 'Bisakah saya menggunakannya tanpa koneksi internet?',
  'faq.a3': 'Ya. Operasional hotel dan validasi lisensi berjalan secara lokal dan tidak memerlukan koneksi cloud. Anda perlu cara untuk menghubungi pengembang untuk mengatur lisensi dan menerima instruksi aktivasi.',
  'faq.q4': 'Apakah ini berfungsi di Windows?',
  'faq.a4': 'Ya. Sistem Manajemen Hotel PE adalah aplikasi desktop Windows. Hubungi pengembang jika Anda perlu memastikan kompatibilitas dengan komputer tertentu.',
  'faq.q5': 'Berapa biaya lisensi?',
  'faq.a5': 'Pilihan yang terdaftar adalah $5 per bulan, $50 per tahun, dan $240 untuk lisensi seumur hidup. Harga bulanan dan tahunan adalah langganan lisensi perangkat lunak, bukan biaya hosting cloud.',
  'faq.q6': 'Apa yang termasuk dalam lisensi seumur hidup?',
  'faq.a6': 'Opsi lisensi seumur hidup yang terdaftar adalah pembayaran lisensi satu kali tanpa pembayaran berlangganan berulang. Harap konfirmasi cakupan perangkat, pembaruan, dan syarat dukungan dengan pengembang sebelum membeli.',
  'faq.q7': 'Bagaimana cara membeli dan mengaktifkan perangkat lunak?',
  'faq.a7': 'Hubungi pengembang untuk membahas paket. Aplikasi ini menggunakan kunci aktivasi yang divalidasi secara lokal; pengembang dapat memberikan instruksi pembelian dan aktivasi saat ini.',
  'faq.q8': 'Bagaimana cara mendapatkan dukungan teknis?',
  'faq.a8': 'Gunakan salah satu saluran kontak pengembang di halaman ini untuk bertanya tentang dukungan. Harap konfirmasi pengaturan dukungan saat ini sebelum membeli.',
  'faq.q9': 'Apakah cocok untuk hotel kecil atau guesthouse?',
  'faq.a9': 'Sistem ini ditujukan untuk hotel independen dan bisnis perhotelan kecil. Hubungi pengembang untuk membahas apakah fitur saat ini sesuai dengan alur kerja properti Anda.',
  'contact.facebookLabel': 'Buka profil Facebook',
  'contact.portfolio': 'Portofolio',
  'contact.telegramButton': 'Tanya di Telegram',
  'contact.telegramButtonAria': 'Buka Telegram dengan pesan yang telah diisi tentang Sistem Manajemen Hotel PE',
  'contact.telegramMessage': "Hai! Saya tertarik dengan Sistem Manajemen Hotel PE untuk hotel saya. Bisakah Anda berbagi detail tentang fitur, opsi lisensi dan harga, serta proses pengaturan? Hotel saya memiliki [jumlah] kamar. Terima kasih!",
  'contact.whatsappMessage': "Halo! Saya tertarik dengan Sistem Manajemen Hotel PE. Saya sedang mencari sistem untuk mengelola kamar hotel, reservasi, masa inap tamu, dan pembayaran. Bisakah Anda berbagi informasi tentang fitur, paket lisensi dan harga, persyaratan sistem, dan langkah pemasangan?\n\nNama hotel: [nama hotel]\nJumlah kamar: [jumlah]\n\nTerima kasih!",
  'contact.emailSubject': 'Pertanyaan tentang Sistem Manajemen Hotel PE',
  'contact.emailMessage': "Halo,\n\nSaya tertarik dengan Sistem Manajemen Hotel PE untuk hotel saya. Bisakah Anda berbagi informasi tentang fitur, paket lisensi dan harga, persyaratan sistem, dan proses setup?\n\nNama hotel: [nama hotel]\nJumlah kamar: [jumlah]\n\nTerima kasih,\n[nama Anda]",
  'contact.note': 'Telegram, WhatsApp, dan email membuka template pertanyaan yang siap diedit.',
  'contact.eyebrow': 'Mulai percakapan',
  'contact.title': 'Siap mengelola<br>hotel Anda <span>lebih cerdas?</span>',
  'contact.description': 'Hubungi saya untuk mempelajari lebih lanjut tentang Sistem Manajemen Hotel PE dan membahas paket lisensi yang mungkin cocok untuk hotel Anda.',
  'contact.cardTitle': 'HUBUNGI KAMI',
  'footer.tagline': 'Operasional hotel yang praktis untuk hospitality independen.',
  'footer.backTop': 'Kembali ke atas',
  'footer.productType': 'Perangkat lunak desktop Windows · Operasi offline',
  'skip': 'Lewati ke konten',
  'brand.home': 'Beranda Sistem Manajemen Hotel PE',
  'brand.footer': 'Sistem Manajemen Hotel PE, kembali ke atas'
  } };

translations.ms = { ...translations.en, ...{
  'meta.title': 'Sistem Pengurusan Hotel PE | Urus hotel anda dengan lebih mudah',
  'meta.description': 'Urus hotel anda dengan kurang kerja kertas. Sistem Pengurusan Hotel PE menggabungkan bilik, tempahan, folio tetamu, bayaran dan laporan dalam aplikasi desktop Windows yang beroperasi secara luar talian.',
  'nav.features': 'Ciri-ciri',
  'nav.label': 'Navigasi utama',
  'nav.how': 'Cara ia berfungsi',
  'nav.pricing': 'Harga',
  'nav.founder': 'Pengasas',
  'nav.faq': 'Soalan Lazim',
  'nav.contact': 'Hubungi',
  'nav.start': 'Mulakan',
  'theme.dark': 'Mod gelap',
  'theme.light': 'Mod terang',
  'theme.switchDark': 'Tukar ke mod gelap',
  'theme.switchLight': 'Tukar ke mod terang',
  'language.label': 'Bahasa',
  'preferences.label': 'Pilihan paparan',
  'menu.open': 'Buka menu navigasi',
  'menu.close': 'Tutup menu navigasi',
  'hero.eyebrow': 'Cara yang lebih tenang untuk mengurus hotel',
  'hero.title': 'Urus hotel anda<br><span>dengan lebih jelas.</span>',
  'hero.description': 'Pastikan bilik, tempahan, penginapan tetamu, dan bayaran tersusun dalam satu aplikasi desktop yang praktikal—dibina untuk rentak hotel bebas.',
  'hero.plans': 'Lihat pelan lesen',
  'hero.explore': 'Lihat apa yang boleh anda urus',
  'hero.windows': 'Perisian desktop Windows',
  'hero.offline': 'Operasi hotel berfungsi secara luar talian selepas pengaktifan.',
  'preview.title': 'Gambaran keseluruhan bilik',
  'preview.frontDesk': 'MEJA DEPAN',
  'preview.roomManagement': 'Pengurusan Bilik',
  'preview.desktop': 'Aplikasi desktop',
  'preview.rooms': 'Bilik',
  'preview.guests': 'Tetamu',
  'preview.reports': 'Laporan',
  'preview.tools': 'Alat',
  'preview.today': 'Hari ini',
  'preview.available': 'Tersedia',
  'preview.occupied': 'Didiami',
  'preview.reserved': 'Dibooking',
  'preview.status': 'Status bilik dalam satu pandangan',
  'preview.guestTitle': 'Gambaran keseluruhan tetamu',
  'preview.guestKicker': 'TETAMU HARI INI',
  'preview.guestCount': 'Aktiviti tetamu hari ini',
  'preview.guestRoom101': 'Bilik 101 · Check-out hari ini',
  'preview.guestRoom204': 'Bilik 204 · 2 malam',
  'preview.guestRoomArrival': 'Ketibaan · Bilik 103',
  'preview.departing': 'Berlepas',
  'preview.inHouse': 'Dalam hotel',
  'preview.arriving': 'Akan tiba',
  'preview.guestStatus': 'Penginapan tetamu dalam satu pandangan',
  'preview.reportTitle': 'Laporan harian',
  'preview.reportKicker': 'IKTISAR HOTEL',
  'preview.occupancy': 'Penghunian hari ini',
  'preview.occupancyNote': '12 daripada 18 bilik didiami',
  'preview.arrivals': 'Ketibaan',
  'preview.departures': 'Keberangkatan',
  'preview.scheduled': 'Dijadualkan hari ini',
  'preview.checkoutToday': 'Check-out hari ini',
  'preview.reportStatus': 'Gambaran aktiviti harian',
  'preview.toolsTitle': 'Alat hotel',
  'preview.toolsKicker': 'CAPAIAN PANTAS',
  'preview.reservationsTool': 'Tempahan',
  'preview.reservationsNote': 'Urus penginapan tetamu yang akan datang',
  'preview.billingTool': 'Bil & folio',
  'preview.billingNote': 'Semak caj dan bayaran tetamu',
  'preview.setupTool': 'Persediaan hotel',
  'preview.setupNote': 'Bilik, kadar, dan akses staf',
  'preview.toolsNote': 'Alat yang tersedia dalam aplikasi desktop',
  'preview.toolsStatus': 'Operasi hotel di satu tempat',
  'preview.caption': 'Konsep antara muka ilustrasi, bukan tangkapan skrin produk',
  'hero.audience': 'DIBINA UNTUK HOSPITALITI INDEPENDEN',
  'hero.capabilityRooms': 'Operasi bilik',
  'hero.capabilityGuests': 'Penginapan tetamu',
  'hero.capabilityReports': 'Bil & laporan',
  'intro.label': 'Ringkasan produk',
  'intro.lead': 'Asas yang disatukan dengan teliti.',
  'intro.description': 'Sistem Pengurusan Hotel PE membantu pasukan hotel kecil melalui butiran harian—daripada tempahan baharu hingga folio tetamu—tanpa bergantung pada platform hotel berasaskan cloud.',
  'intro.explore': 'Jelajah ciri',
  'features.eyebrow': 'Alat praktikal untuk kerja harian',
  'features.title': 'Pandangan lebih jelas<br><span>tentang hari demi hari.</span>',
  'features.description': 'Kekalkan semua bahagian hartanah anda di satu tempat, dengan alat yang menyokong kerja pasukan anda.',
  'feature.rooms.title': 'Status & ketersediaan bilik',
  'feature.rooms.description': 'Lihat ketersediaan bilik, tempahan, kebersihan, dan status penyelenggaraan serentak. Tapis senarai bilik dan semak sejarah bilik.',
  'feature.reservations.title': 'Tempahan & meja depan',
  'feature.reservations.description': 'Cipta tempahan, tetapkan bilik, urus ketibaan dan keberangkatan, serta kendalikan daftar masuk, daftar keluar, pembatalan dan no-show.',
  'feature.guests.title': 'Rekod tetamu & senarai penginapan',
  'feature.guests.description': 'Pastikan profil tetamu terhubung dengan penginapan mereka. Cari rekod tetamu dan semak senarai tetamu dalam hotel, akan tiba, berlepas dan tempahan.',
  'feature.folios.title': 'Folio tetamu & bayaran',
  'feature.folios.description': 'Catat caj dan bayaran pada folio tetamu, gunakan diskaun, semak baki, dan sediakan invois untuk penginapan.',
  'feature.reports.title': 'Laporan & gambaran harian',
  'feature.reports.description': 'Semak penghunian, tempahan, ketibaan dan keberangkatan, statistik tetamu, pendapatan, dan aktiviti kewangan melalui laporan terbina dalam.',
  'feature.audit.title': 'Night audit & hari perniagaan',
  'feature.audit.description': 'Kerja melalui senarai semak night audit, semak aktiviti harian, catat caj bilik, dan tutup atau buka semula hari perniagaan.',
  'feature.ledger.title': 'Akaun city ledger',
  'feature.ledger.description': 'Catat pemindahan dan bayaran akaun syarikat, kemudian semak baki tertunggak dan laporan aktiviti akaun.',
  'feature.staff.title': 'Akses kakitangan & persediaan',
  'feature.staff.description': 'Konfigurasi bilik, kadar, kaedah bayaran dan akaun kakitangan. Tetapkan peranan dan kebenaran untuk capaian modul aplikasi.',
  'features.note': 'Fungsi berkaitan housekeeping pada masa ini termasuk penjejakan keadaan bilik dan rekod barang hilang.',
  'local.eyebrow': 'Kenapa PE Hotel System',
  'local.title': 'Kerja harian hotel anda.<br><span>Di komputer Windows anda.</span>',
  'local.description': 'Sistem Pengurusan Hotel PE ialah aplikasi desktop Windows yang menyimpan data hotel secara tempatan. Pasukan anda boleh mengurus operasi harian tanpa bergantung pada sambungan internet atau sistem hotel berasaskan cloud.',
  'local.link': 'Bagaimana ia berfungsi',
  'local.windowsTitle': 'Dibina untuk Windows',
  'local.windowsDescription': 'Aliran kerja desktop yang biasa untuk kakitangan hotel.',
  'local.offlineTitle': 'Berfungsi secara luar talian',
  'local.offlineDescription': 'Operasi tempatan dan pengesahan lesen tidak memerlukan sambungan cloud.',
  'local.dataTitle': 'Data hotel kekal setempat',
  'local.dataDescription': 'Rekod hotel disimpan dalam pangkalan data di komputer Windows.',
  'steps.eyebrow': 'Permulaan yang mudah',
  'steps.title': 'Daripada perbincangan pertama<br>hingga <span>check-in pertama.</span>',
  'steps.description': 'Hubungi kami untuk mengesahkan butiran lesen dan cara yang sesuai untuk menyediakan aplikasi untuk hotel anda.',
  'steps.chooseTitle': 'Pilih pelan',
  'steps.chooseDescription': 'Bandingkan pilihan lesen bulanan, tahunan, dan seumur hidup.',
  'steps.talkTitle': 'Bercakap dengan pembangun',
  'steps.talkDescription': 'Tanya mengenai pembelian, pengaktifan dan syarat lesen untuk persediaan anda.',
  'steps.activateTitle': 'Aktifkan lesen anda',
  'steps.activateDescription': 'Terima kunci pengaktifan dan arahan, kemudian sahkan lesen dalam aplikasi.',
  'steps.installTitle': 'Pasang dan mula bekerja',
  'steps.installDescription': 'Sediakan hotel anda di Windows dan urus operasi harian secara luar talian.',
  'pricing.eyebrow': 'Pilihan lesen yang jelas',
  'pricing.title': 'Pilih yang sesuai<br><span>untuk perniagaan anda.</span>',
  'pricing.description': 'Setiap pelan melesenkan aplikasi desktop Windows. Harga bulanan dan tahunan adalah untuk lesen perisian, bukan hosting cloud.',
  'pricing.monthly': 'BULANAN',
  'pricing.perMonth': '/ bulan',
  'pricing.monthlyDescription': 'Cara yang fleksibel untuk bermula.',
  'pricing.product': 'Sistem Pengurusan Hotel PE',
  'pricing.subscription': 'Langganan lesen',
  'pricing.offline': 'Aplikasi Windows luar talian',
  'pricing.askMonthly': 'Tanya tentang bulanan',
  'pricing.yearly': 'TAHUNAN',
  'pricing.perYear': '/ tahun',
  'pricing.yearlyDescription': 'Nilai yang lebih baik untuk penggunaan jangka panjang.',
  'pricing.annualSubscription': 'Langganan lesen tahunan',
  'pricing.askYearly': 'Tanya tentang tahunan',
  'pricing.recommended': 'PILIHAN JANGKA PANJANG',
  'pricing.lifetime': 'SEUMUR HIDUP',
  'pricing.perLifetime': '/ seumur hidup',
  'pricing.lifetimeDescription': 'Satu bayaran untuk lesen seumur hidup.',
  'pricing.oneTime': 'Bayaran lesen sekali bayar',
  'pricing.noRecurring': 'Tiada bayaran langganan berulang',
  'pricing.askLifetime': 'Tanya tentang seumur hidup',
  'pricing.footnote': 'Hubungi pembangun untuk mengesahkan pengaktifan, peranti, pembaharuan, kemas kini, dan syarat sokongan sebelum membeli. Tiada checkout dalam talian di laman web ini.',
  'founder.eyebrow': 'Catatan daripada pembangun',
  'founder.title': 'Teknologi sepatutnya membuat<br>kerja terasa <span>lebih ringan.</span>',
  'founder.name': 'SEAVPEAV PECH',
  'founder.role': 'Pengasas & Pembangun',
  'founder.paragraph1': 'Saya membangunkan Sistem Pengurusan Hotel PE dengan matlamat yang ringkas: menjadikan pengurusan hotel lebih teratur dan lebih mudah diakses untuk perniagaan hotel bebas.',
  'founder.paragraph2': 'Hotel kecil layak mendapat alat praktikal tanpa perlu mengendalikan sistem perusahaan yang rumit. Aplikasi ini menyatukan tugas harian meja depan dan operasi dalam pengalaman desktop Windows.',
  'faq.eyebrow': 'Perkara yang perlu tahu',
  'faq.title': 'Soalan,<br><span>terjawab.</span>',
  'faq.description': 'Ada soalan lain? Hubungi pembangun menggunakan butiran hubungan di bawah.',
  'faq.contactLink': 'Ke butiran hubungan',
  'faq.q1': 'Apakah Sistem Pengurusan Hotel PE itu?',
  'faq.a1': 'Ia adalah aplikasi desktop Windows untuk mengurus bilik, tempahan, rekod tetamu, daftar masuk dan daftar keluar, folio, bayaran, laporan serta operasi hotel yang berkaitan.',
  'faq.q2': 'Adakah ini aplikasi web atau aplikasi desktop?',
  'faq.a2': 'Ia adalah aplikasi desktop Windows. Bukan platform pengurusan hotel berasaskan pelayar.',
  'faq.q3': 'Bolehkah saya menggunakannya tanpa sambungan internet?',
  'faq.a3': 'Ya. Operasi hotel dan pengesahan lesen berjalan secara setempat dan tidak memerlukan sambungan cloud. Anda perlu cara untuk menghubungi pembangun untuk mengatur lesen dan menerima arahan pengaktifan.',
  'faq.q4': 'Adakah ia berfungsi pada Windows?',
  'faq.a4': 'Ya. Sistem Pengurusan Hotel PE adalah aplikasi desktop Windows. Hubungi pembangun jika anda perlu mengesahkan keserasian dengan komputer tertentu.',
  'faq.q5': 'Berapa kos lesen?',
  'faq.a5': 'Pilihan yang disenaraikan ialah $5 sebulan, $50 setahun, dan $240 untuk lesen seumur hidup. Harga bulanan dan tahunan ialah langganan lesen perisian, bukan bayaran hosting cloud.',
  'faq.q6': 'Apa yang termasuk dalam lesen seumur hidup?',
  'faq.a6': 'Pilihan seumur hidup yang disenaraikan ialah bayaran lesen sekali sahaja tanpa bayaran langganan berulang. Sila sahkan liputan peranti, kemas kini, dan terma sokongan dengan pembangun sebelum membeli.',
  'faq.q7': 'Bagaimanakah cara membeli dan mengaktifkan perisian?',
  'faq.a7': 'Hubungi pembangun untuk membincangkan pelan. Aplikasi ini menggunakan kunci pengaktifan yang disahkan secara setempat; pembangun boleh memberikan arahan pembelian dan pengaktifan semasa.',
  'faq.q8': 'Bagaimanakah cara mendapatkan sokongan teknikal?',
  'faq.a8': 'Gunakan salah satu saluran hubungan pembangun di halaman ini untuk bertanya tentang sokongan. Sila sahkan pengaturan sokongan semasa sebelum membeli.',
  'faq.q9': 'Adakah ia sesuai untuk hotel kecil atau guesthouse?',
  'faq.a9': 'Sistem ini ditujukan untuk hotel bebas dan perniagaan hospitaliti kecil. Hubungi pembangun untuk membincangkan sama ada ciri semasa sesuai dengan aliran kerja hartanah anda.',
  'contact.facebookLabel': 'Buka profil Facebook',
  'contact.portfolio': 'Portfolio',
  'contact.telegramButton': 'Tanya di Telegram',
  'contact.telegramButtonAria': 'Buka Telegram dengan mesej yang telah diisi tentang Sistem Pengurusan Hotel PE',
  'contact.telegramMessage': "Hai! Saya berminat dengan Sistem Pengurusan Hotel PE untuk hotel saya. Bolehkah anda berkongsi butiran tentang ciri, pilihan lesen dan harga, serta proses persediaan? Hotel saya mempunyai [bilangan] bilik. Terima kasih!",
  'contact.whatsappMessage': "Halo! Saya berminat dengan Sistem Pengurusan Hotel PE. Saya sedang mencari sistem untuk mengurus bilik hotel, tempahan, penginapan tetamu, dan bayaran. Bolehkah anda berkongsi maklumat tentang ciri, pelan lesen dan harga, keperluan sistem, serta langkah pemasangan?\n\nNama hotel: [nama hotel]\nBilangan bilik: [bilangan]\n\nTerima kasih!",
  'contact.emailSubject': 'Pertanyaan tentang Sistem Pengurusan Hotel PE',
  'contact.emailMessage': "Halo,\n\nSaya berminat dengan Sistem Pengurusan Hotel PE untuk hotel saya. Bolehkah anda berkongsi maklumat tentang ciri, pelan lesen dan harga, keperluan sistem, serta proses persediaan?\n\nNama hotel: [nama hotel]\nBilangan bilik: [bilangan]\n\nTerima kasih,\n[nama anda]",
  'contact.note': 'Telegram, WhatsApp, dan e-mel membuka templat pertanyaan sedia untuk diedit.',
  'contact.eyebrow': 'Mulakan perbincangan',
  'contact.title': 'Sedia mengurus<br>hotel anda <span>lebih bijak?</span>',
  'contact.description': 'Hubungi saya untuk mengetahui lanjut tentang Sistem Pengurusan Hotel PE dan membincangkan pelan lesen yang mungkin sesuai untuk hotel anda.',
  'contact.cardTitle': 'HUBUNGI KAMI',
  'footer.tagline': 'Operasi hotel praktikal untuk hospitaliti bebas.',
  'footer.backTop': 'Kembali ke atas',
  'footer.productType': 'Perisian desktop Windows · Operasi luar talian',
  'skip': 'Langkau ke kandungan',
  'brand.home': 'Laman utama Sistem Pengurusan Hotel PE',
  'brand.footer': 'Sistem Pengurusan Hotel PE, kembali ke atas'
  } };

translations.vi = { ...translations.en, ...{
  'meta.title': 'Hệ thống Quản lý Khách sạn PE | Quản lý khách sạn dễ dàng hơn',
  'meta.description': 'Quản lý khách sạn với ít công việc giấy tờ hơn. Hệ thống Quản lý Khách sạn PE kết hợp phòng, đặt phòng, folio khách, thanh toán và báo cáo trong ứng dụng máy tính để bàn Windows hoạt động ngoại tuyến.',
  'nav.features': 'Tính năng',
  'nav.label': 'Điều hướng chính',
  'nav.how': 'Cách hoạt động',
  'nav.pricing': 'Bảng giá',
  'nav.founder': 'Người sáng lập',
  'nav.faq': 'Câu hỏi thường gặp',
  'nav.contact': 'Liên hệ',
  'nav.start': 'Bắt đầu',
  'theme.dark': 'Chế độ tối',
  'theme.light': 'Chế độ sáng',
  'theme.switchDark': 'Chuyển sang chế độ tối',
  'theme.switchLight': 'Chuyển sang chế độ sáng',
  'language.label': 'Ngôn ngữ',
  'preferences.label': 'Tùy chọn hiển thị',
  'menu.open': 'Mở menu điều hướng',
  'menu.close': 'Đóng menu điều hướng',
  'hero.eyebrow': 'Cách dễ chịu hơn để vận hành khách sạn',
  'hero.title': 'Quản lý khách sạn<br><span>rõ ràng hơn.</span>',
  'hero.description': 'Giữ phòng, đặt phòng, lưu trú khách, và thanh toán luôn gọn gàng trong một ứng dụng máy tính để bàn thực tế—được xây dựng cho nhịp độ của các khách sạn độc lập.',
  'hero.plans': 'Khám phá gói giấy phép',
  'hero.explore': 'Xem bạn có thể quản lý gì',
  'hero.windows': 'Phần mềm máy tính để bàn Windows',
  'hero.offline': 'Hoạt động khách sạn làm việc ngoại tuyến sau khi kích hoạt.',
  'preview.title': 'Tổng quan phòng',
  'preview.frontDesk': 'QUẢN LÝ PHÒNG',
  'preview.roomManagement': 'Quản lý phòng',
  'preview.desktop': 'Ứng dụng máy tính',
  'preview.rooms': 'Phòng',
  'preview.guests': 'Khách',
  'preview.reports': 'Báo cáo',
  'preview.tools': 'Công cụ',
  'preview.today': 'Hôm nay',
  'preview.available': 'Còn trống',
  'preview.occupied': 'Đã có người',
  'preview.reserved': 'Đã đặt',
  'preview.status': 'Trạng thái phòng trong một cái nhìn',
  'preview.guestTitle': 'Tổng quan khách',
  'preview.guestKicker': 'KHÁCH HÔM NAY',
  'preview.guestCount': 'Hoạt động khách hôm nay',
  'preview.guestRoom101': 'Phòng 101 · Check-out hôm nay',
  'preview.guestRoom204': 'Phòng 204 · 2 đêm',
  'preview.guestRoomArrival': 'Khách đến · Phòng 103',
  'preview.departing': 'Rời đi',
  'preview.inHouse': 'Ở lại',
  'preview.arriving': 'Sắp đến',
  'preview.guestStatus': 'Lưu trú khách trong một cái nhìn',
  'preview.reportTitle': 'Báo cáo hàng ngày',
  'preview.reportKicker': 'TÓM TẮT KHÁCH SẠN',
  'preview.occupancy': 'Tỷ lệ lấp đầy hôm nay',
  'preview.occupancyNote': '12/18 phòng đang có người',
  'preview.arrivals': 'Khách đến',
  'preview.departures': 'Khách đi',
  'preview.scheduled': 'Lịch trình hôm nay',
  'preview.checkoutToday': 'Check-out hôm nay',
  'preview.reportStatus': 'Tổng quan hoạt động hàng ngày',
  'preview.toolsTitle': 'Công cụ khách sạn',
  'preview.toolsKicker': 'TRUY CẬP NHANH',
  'preview.reservationsTool': 'Đặt phòng',
  'preview.reservationsNote': 'Quản lý lưu trú sắp đến',
  'preview.billingTool': 'Hóa đơn & folio',
  'preview.billingNote': 'Xem chi phí và thanh toán của khách',
  'preview.setupTool': 'Thiết lập khách sạn',
  'preview.setupNote': 'Phòng, giá, và quyền truy cập nhân viên',
  'preview.toolsNote': 'Công cụ có trong ứng dụng máy tính',
  'preview.toolsStatus': 'Hoạt động khách sạn ở một nơi',
  'preview.caption': 'Khái niệm giao diện minh họa, không phải ảnh chụp sản phẩm',
  'hero.audience': 'DÀNH CHO KHÁCH SẠN ĐỘC LẬP',
  'hero.capabilityRooms': 'Vận hành phòng',
  'hero.capabilityGuests': 'Lưu trú khách',
  'hero.capabilityReports': 'Hóa đơn & báo cáo',
  'intro.label': 'Tóm tắt sản phẩm',
  'intro.lead': 'Những thứ cần thiết được gộp lại một cách hợp lý.',
  'intro.description': 'Hệ thống Quản lý Khách sạn PE giúp đội ngũ khách sạn nhỏ xử lý từng chi tiết hàng ngày—từ đặt phòng mới đến folio khách—mà không phụ thuộc vào nền tảng khách sạn trên đám mây.',
  'intro.explore': 'Khám phá tính năng',
  'features.eyebrow': 'Công cụ thực tế cho công việc hằng ngày',
  'features.title': 'Cái nhìn rõ hơn<br><span>về công việc hàng ngày.</span>',
  'features.description': 'Giữ mọi phần của tài sản ở một nơi, với các công cụ hỗ trợ công việc mà đội ngũ của bạn đã làm.',
  'feature.rooms.title': 'Trạng thái & khả dụng phòng',
  'feature.rooms.description': 'Xem tình trạng phòng trống, đặt phòng, dọn dẹp và bảo trì cùng lúc. Lọc danh sách phòng và xem lịch sử phòng.',
  'feature.reservations.title': 'Đặt phòng & quầy lễ tân',
  'feature.reservations.description': 'Tạo đặt phòng, gán phòng, quản lý khách đến và đi, đồng thời xử lý check-in, check-out, hủy đặt, và no-show.',
  'feature.guests.title': 'Hồ sơ khách & danh sách lưu trú',
  'feature.guests.description': 'Giữ hồ sơ khách luôn liên kết với thời gian lưu trú. Tìm kiếm hồ sơ khách và xem danh sách khách đang ở, sẽ đến, đã đi và đặt phòng.',
  'feature.folios.title': 'Folio khách & thanh toán',
  'feature.folios.description': 'Ghi chi phí và thanh toán vào folio khách, áp dụng giảm giá, xem số dư, và chuẩn bị hóa đơn cho lưu trú.',
  'feature.reports.title': 'Báo cáo & góc nhìn hàng ngày',
  'feature.reports.description': 'Xem tỷ lệ lấp đầy, đặt phòng, khách đến và đi, thống kê khách, doanh thu và hoạt động tài chính qua báo cáo tích hợp.',
  'feature.audit.title': 'Kiểm toán đêm & ngày kinh doanh',
  'feature.audit.description': 'Hoàn thiện checklist kiểm toán đêm, xem hoạt động hàng ngày, ghi phí phòng, và đóng hoặc mở lại ngày kinh doanh.',
  'feature.ledger.title': 'Tài khoản city ledger',
  'feature.ledger.description': 'Ghi các khoản chuyển và thanh toán của công ty, sau đó xem số dư còn nợ và báo cáo hoạt động tài khoản.',
  'feature.staff.title': 'Truy cập nhân viên & thiết lập',
  'feature.staff.description': 'Cấu hình phòng, mức giá, phương thức thanh toán và tài khoản nhân viên. Gán vai trò và quyền truy cập cho từng mô-đun.',
  'features.note': 'Chức năng liên quan đến housekeeping hiện bao gồm theo dõi tình trạng phòng và hồ sơ đồ vật thất lạc.',
  'local.eyebrow': 'Vì sao chọn PE Hotel System',
  'local.title': 'Công việc hàng ngày của khách sạn.<br><span>Trên máy tính Windows của bạn.</span>',
  'local.description': 'Hệ thống Quản lý Khách sạn PE là ứng dụng máy tính để bàn Windows lưu trữ dữ liệu khách sạn cục bộ. Nhóm của bạn có thể quản lý hoạt động hàng ngày mà không phụ thuộc vào kết nối internet hay hệ thống khách sạn trên đám mây.',
  'local.link': 'Cách hoạt động',
  'local.windowsTitle': 'Được xây dựng cho Windows',
  'local.windowsDescription': 'Luồng làm việc quen thuộc cho nhân viên khách sạn.',
  'local.offlineTitle': 'Hoạt động ngoại tuyến',
  'local.offlineDescription': 'Hoạt động cục bộ và xác thực giấy phép không cần kết nối cloud.',
  'local.dataTitle': 'Dữ liệu khách sạn lưu trữ cục bộ',
  'local.dataDescription': 'Hồ sơ khách sạn được lưu trong cơ sở dữ liệu trên máy tính Windows.',
  'steps.eyebrow': 'Bắt đầu đơn giản',
  'steps.title': 'Từ cuộc trò chuyện đầu tiên<br>đến <span>check-in đầu tiên.</span>',
  'steps.description': 'Hãy liên hệ để xác nhận chi tiết giấy phép và cách thiết lập ứng dụng phù hợp cho khách sạn của bạn.',
  'steps.chooseTitle': 'Chọn gói',
  'steps.chooseDescription': 'So sánh các tùy chọn giấy phép hàng tháng, hàng năm và trọn đời.',
  'steps.talkTitle': 'Nói chuyện với nhà phát triển',
  'steps.talkDescription': 'Hỏi về mua, kích hoạt và điều khoản giấy phép cho thiết lập của bạn.',
  'steps.activateTitle': 'Kích hoạt giấy phép',
  'steps.activateDescription': 'Nhận khóa kích hoạt và hướng dẫn, sau đó xác thực giấy phép trong ứng dụng.',
  'steps.installTitle': 'Cài đặt và bắt đầu làm việc',
  'steps.installDescription': 'Thiết lập khách sạn trên Windows và quản lý hoạt động hàng ngày ngoại tuyến.',
  'pricing.eyebrow': 'Tùy chọn giấy phép rõ ràng',
  'pricing.title': 'Chọn cái phù hợp<br><span>với doanh nghiệp của bạn.</span>',
  'pricing.description': 'Mỗi gói cấp phép cho ứng dụng máy tính để bàn Windows. Giá hàng tháng và năm là phí giấy phép phần mềm, không phải hosting trên đám mây.',
  'pricing.monthly': 'THÁNG',
  'pricing.perMonth': '/ tháng',
  'pricing.monthlyDescription': 'Cách linh hoạt để bắt đầu.',
  'pricing.product': 'Hệ thống Quản lý Khách sạn PE',
  'pricing.subscription': 'Gói đăng ký giấy phép',
  'pricing.offline': 'Ứng dụng Windows ngoại tuyến',
  'pricing.askMonthly': 'Hỏi về gói hàng tháng',
  'pricing.yearly': 'NĂM',
  'pricing.perYear': '/ năm',
  'pricing.yearlyDescription': 'Giá trị tốt hơn cho người dùng dài hạn.',
  'pricing.annualSubscription': 'Gói giấy phép hàng năm',
  'pricing.askYearly': 'Hỏi về gói hàng năm',
  'pricing.recommended': 'TÙY CHỌN DÀI HẠN',
  'pricing.lifetime': 'TRỌN ĐỜI',
  'pricing.perLifetime': '/ trọn đời',
  'pricing.lifetimeDescription': 'Một lần thanh toán cho giấy phép trọn đời.',
  'pricing.oneTime': 'Thanh toán giấy phép một lần',
  'pricing.noRecurring': 'Không có thanh toán đăng ký định kỳ',
  'pricing.askLifetime': 'Hỏi về gói trọn đời',
  'pricing.footnote': 'Liên hệ nhà phát triển để xác nhận kích hoạt, thiết bị, gia hạn, cập nhật và điều khoản hỗ trợ trước khi mua. Trang web này không cung cấp thanh toán trực tuyến.',
  'founder.eyebrow': 'Lời nhắn từ nhà phát triển',
  'founder.title': 'Công nghệ nên làm cho<br>công việc cảm giác <span>nhẹ hơn.</span>',
  'founder.name': 'SEAVPEAV PECH',
  'founder.role': 'Người sáng lập & Phát triển',
  'founder.paragraph1': 'Tôi phát triển Hệ thống Quản lý Khách sạn PE với một mục tiêu đơn giản: làm cho quản lý khách sạn có tổ chức hơn và dễ tiếp cận hơn cho các doanh nghiệp khách sạn độc lập.',
  'founder.paragraph2': 'Khách sạn nhỏ xứng đáng có công cụ thực tế mà không phải chịu một hệ thống doanh nghiệp phức tạp. Ứng dụng này mang các tác vụ mặt tiền và vận hành hàng ngày vào trải nghiệm desktop Windows.',
  'faq.eyebrow': 'Điều nên biết',
  'faq.title': 'Câu hỏi,<br><span>đã được trả lời.</span>',
  'faq.description': 'Bạn có câu hỏi khác? Hãy liên hệ với nhà phát triển qua thông tin liên hệ bên dưới.',
  'faq.contactLink': 'Đến thông tin liên hệ',
  'faq.q1': 'Hệ thống Quản lý Khách sạn PE là gì?',
  'faq.a1': 'Đây là ứng dụng máy tính để bàn Windows để quản lý phòng, đặt phòng, hồ sơ khách, check-in và check-out, folio, thanh toán, báo cáo và các hoạt động khách sạn liên quan.',
  'faq.q2': 'Đây là ứng dụng web hay ứng dụng máy tính?',
  'faq.a2': 'Đây là ứng dụng máy tính để bàn Windows. Không phải nền tảng quản lý khách sạn dựa trên trình duyệt.',
  'faq.q3': 'Tôi có thể sử dụng mà không cần kết nối internet không?',
  'faq.a3': 'Có. Hoạt động khách sạn và xác thực giấy phép chạy cục bộ và không yêu cầu kết nối cloud. Bạn sẽ cần một cách để liên hệ với nhà phát triển để sắp xếp giấy phép và nhận hướng dẫn kích hoạt.',
  'faq.q4': 'Nó có chạy trên Windows không?',
  'faq.a4': 'Có. Hệ thống Quản lý Khách sạn PE là ứng dụng máy tính để bàn Windows. Liên hệ với nhà phát triển nếu bạn cần xác nhận tính tương thích với máy tính cụ thể.',
  'faq.q5': 'Giấy phép có giá bao nhiêu?',
  'faq.a5': 'Các tùy chọn được liệt kê là $5 mỗi tháng, $50 mỗi năm và $240 cho giấy phép trọn đời. Giá hàng tháng và hàng năm là đăng ký giấy phép phần mềm, không phải phí hosting cloud.',
  'faq.q6': 'Giấy phép trọn đời bao gồm những gì?',
  'faq.a6': 'Tùy chọn trọn đời được liệt kê là thanh toán giấy phép một lần mà không có khoản thanh toán đăng ký định kỳ. Vui lòng xác nhận phạm vi thiết bị, cập nhật và điều khoản hỗ trợ với nhà phát triển trước khi mua.',
  'faq.q7': 'Làm thế nào để mua và kích hoạt phần mềm?',
  'faq.a7': 'Liên hệ với nhà phát triển để thảo luận về gói. Ứng dụng sử dụng khóa kích hoạt được xác thực cục bộ; nhà phát triển có thể cung cấp hướng dẫn mua và kích hoạt hiện tại.',
  'faq.q8': 'Làm thế nào để nhận hỗ trợ kỹ thuật?',
  'faq.a8': 'Sử dụng một trong các kênh liên hệ của nhà phát triển trên trang này để hỏi về hỗ trợ. Vui lòng xác nhận các điều khoản hỗ trợ hiện hành trước khi mua.',
  'faq.q9': 'Nó có phù hợp cho khách sạn nhỏ hoặc nhà nghỉ không?',
  'faq.a9': 'Hệ thống này nhằm phục vụ cho khách sạn độc lập và doanh nghiệp du lịch nhỏ. Liên hệ với nhà phát triển để thảo luận xem các tính năng hiện tại có phù hợp với quy trình của tài sản của bạn hay không.',
  'contact.facebookLabel': 'Mở hồ sơ Facebook',
  'contact.portfolio': 'Dự án',
  'contact.telegramButton': 'Hỏi trên Telegram',
  'contact.telegramButtonAria': 'Mở Telegram với tin nhắn đã điền sẵn về Hệ thống Quản lý Khách sạn PE',
  'contact.telegramMessage': "Xin chào! Tôi quan tâm đến Hệ thống Quản lý Khách sạn PE cho khách sạn của mình. Bạn có thể chia sẻ chi tiết về tính năng, tùy chọn giấy phép và giá cả, cũng như quy trình thiết lập không? Khách sạn của tôi có [số lượng] phòng. Cảm ơn bạn!",
  'contact.whatsappMessage': "Xin chào! Tôi quan tâm đến Hệ thống Quản lý Khách sạn PE. Tôi đang tìm một hệ thống để quản lý phòng khách sạn, đặt phòng, lưu trú khách và thanh toán. Bạn có thể chia sẻ thông tin về tính năng, gói giấy phép và giá, yêu cầu hệ thống và các bước thiết lập không?\n\nTên khách sạn: [tên khách sạn]\nSố lượng phòng: [số lượng]\n\nCảm ơn bạn!",
  'contact.emailSubject': 'Thắc mắc về Hệ thống Quản lý Khách sạn PE',
  'contact.emailMessage': "Xin chào,\n\nTôi quan tâm đến Hệ thống Quản lý Khách sạn PE cho khách sạn của mình. Bạn có thể chia sẻ thông tin về tính năng, gói giấy phép và giá, yêu cầu hệ thống và quy trình thiết lập không?\n\nTên khách sạn: [tên khách sạn]\nSố lượng phòng: [số lượng]\n\nCảm ơn bạn,\n[tên của bạn]",
  'contact.note': 'Telegram, WhatsApp và email mở sẵn mẫu yêu cầu cần chỉnh sửa.',
  'contact.eyebrow': 'Bắt đầu cuộc trò chuyện',
  'contact.title': 'Sẵn sàng quản lý<br>khách sạn của bạn <span>thông minh hơn?</span>',
  'contact.description': 'Liên hệ với tôi để tìm hiểu thêm về Hệ thống Quản lý Khách sạn PE và thảo luận về gói giấy phép phù hợp với khách sạn của bạn.',
  'contact.cardTitle': 'LIÊN HỆ',
  'footer.tagline': 'Vận hành khách sạn thực tế cho ngành lưu trú độc lập.',
  'footer.backTop': 'Quay lên đầu',
  'footer.productType': 'Phần mềm máy tính để bàn Windows · Hoạt động ngoại tuyến',
  'skip': 'Bỏ qua đến nội dung',
  'brand.home': 'Trang chủ Hệ thống Quản lý Khách sạn PE',
  'brand.footer': 'Hệ thống Quản lý Khách sạn PE, quay lên đầu'
  } };

translations.my = { ...translations.en, ...{
  'meta.title': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ် | သင့်ဟိုတယ်ကို အလွယ်တကူ စီမံခန့်ခွဲပါ',
  'meta.description': 'စာရွက်စာတမ်းနည်းနည်းနှင့် ဟိုတယ်ကို စီမံခန့်ခွဲပါ။ PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်သည် အခန်း၊ ထိုက်ခေါ်မှု၊ ဧည့်သည် folio၊ ငွေပေးချေမှုနှင့်အစီရင်ခံစာများကို Windows desktop app တစ်ခုထဲတွင် ပေါင်းစည်းပေးသည်။',
  'nav.features': 'အင်္ဂါရပ်များ',
  'nav.label': 'အဓိကသွားလာမှု',
  'nav.how': 'မည်သို့အလုပ်လုပ်သနည်း',
  'nav.pricing': 'စျေးနှုန်း',
  'nav.founder': 'တည်ထောင်သူ',
  'nav.faq': 'မေးလေ့ရှိသောမေးခွန်းများ',
  'nav.contact': 'ဆက်သွယ်ရန်',
  'nav.start': 'စတင်ပါ',
  'theme.dark': 'အမှောင်မုဒ်',
  'theme.light': 'အလင်းမုဒ်',
  'theme.switchDark': 'အမှောင်မုဒ်သို့ပြောင်းပါ',
  'theme.switchLight': 'အလင်းမုဒ်သို့ပြောင်းပါ',
  'language.label': 'ဘာသာစကား',
  'preferences.label': 'ပြသမှုရွေးချယ်မှု',
  'menu.open': 'သွားလာမှုမီနူးကိုဖွင့်ပါ',
  'menu.close': 'သွားလာမှုမီနူးကိုပိတ်ပါ',
  'hero.eyebrow': 'ဟိုတယ်ကို ပိုမယဉ်ကျေးစွာ စီမံခန့်ခွဲနိုင်မယ့် နည်းလမ်း',
  'hero.title': 'သင့်ဟိုတယ်ကို<br><span>ပိုမိုရှင်းလင်းစွာ စီမံခန့်ခွဲပါ။</span>',
  'hero.description': 'အခန်းများ၊ ကြိုတင်စာရင်း၊ ဧည့်သည်များ၏သက်တမ်း၊ နှင့် ငွေပေးချေမှုများကို တစ်နေရာတည်းတွင် စနစ်တကျထားပါ—လွတ်လပ်သောဟိုတယ်များအတွက် အဆင်ပြေစေမည့် desktop app ဖြစ်သည်။',
  'hero.plans': 'လိုင်စင်ပ package များကို ကြည့်ရှုပါ',
  'hero.explore': 'မည်သည့်အရာများကို စီမံခန့်ခွဲနိုင်သည်ကို ကြည့်ပါ',
  'hero.windows': 'Windows desktop software',
  'hero.offline': 'လိုင်စင်ဖွင့်လှစ်ပြီးနောက် ဟိုတယ်လုပ်ငန်းများကို အော့ဖ်လိုင်းဖြင့် လုပ်ဆောင်နိုင်သည်။',
  'preview.title': 'အခန်းအကျဉ်းချုပ်',
  'preview.frontDesk': 'FRONT DESK',
  'preview.roomManagement': 'အခန်းစီမံခန့်ခွဲမှု',
  'preview.desktop': 'Desktop app',
  'preview.rooms': 'အခန်းများ',
  'preview.guests': 'ဧည့်သည်များ',
  'preview.reports': 'အစီရင်ခံစာများ',
  'preview.tools': 'ကိရိယာများ',
  'preview.today': 'ယနေ့',
  'preview.available': 'လက်ရှိရနိုင်',
  'preview.occupied': 'ကျယ်လောင်ထား',
  'preview.reserved': 'ကြိုတင်စာရင်းသွင်းထား',
  'preview.status': 'တစ်ချက်ကြည့်၍ အခန်းအခြေအနေကို ကြည့်ရှုပါ',
  'preview.guestTitle': 'ဧည့်သည်အကျဉ်းချုပ်',
  'preview.guestKicker': 'ယနေ့ဧည့်သည်များ',
  'preview.guestCount': 'ယနေ့ဧည့်သည်လုပ်ဆောင်မှု',
  'preview.guestRoom101': 'အခန်း 101 · ယနေ့ check-out',
  'preview.guestRoom204': 'အခန်း 204 · ၂ည',
  'preview.guestRoomArrival': 'ရောက်ရှိလာမှု · အခန်း 103',
  'preview.departing': 'ထွက်ခွာမည်',
  'preview.inHouse': 'အတွင်းသို့',
  'preview.arriving': 'ရောက်ရှိမည်',
  'preview.guestStatus': 'ဧည့်သည်များ၏သက်တမ်းကို တစ်ချက်ကြည့်ပါ',
  'preview.reportTitle': 'နေ့စဉ်အစီရင်ခံစာ',
  'preview.reportKicker': 'ဟိုတယ်အကျဉ်းချုပ်',
  'preview.occupancy': 'ယနေ့အခန်းပြည့်လှုံ့',
  'preview.occupancyNote': 'အခန်း 18 မှ 12 ခု အလုပ်လုပ်နေ',
  'preview.arrivals': 'ရောက်ရှိမှု',
  'preview.departures': 'ထွက်ခွာမှု',
  'preview.scheduled': 'ယနေ့ စီစဉ်ထားသည်',
  'preview.checkoutToday': 'ယနေ့ check-out',
  'preview.reportStatus': 'နေ့စဉ်လုပ်ဆောင်မှုအကျဉ်းချုပ်',
  'preview.toolsTitle': 'ဟိုတယ်ကိရိယာများ',
  'preview.toolsKicker': 'အမြန်အသုံးပြုရန်',
  'preview.reservationsTool': 'ကြိုတင်ထားမှု',
  'preview.reservationsNote': 'လာမည့်ဧည့်သည်များ၏သက်တမ်းကို စီမံပါ',
  'preview.billingTool': 'ငွေပေးချေမှု & folio',
  'preview.billingNote': 'ဧည့်သည်ခေါ်ယူမှုများနှင့် ငွေပေးချေမှုများကို အသေးစိတ်ကြည့်ရှုပါ',
  'preview.setupTool': 'ဟိုတယ်တည်ထောင်မှု',
  'preview.setupNote': 'အခန်းများ၊ ဈေးနှုန်းများ နှင့် ဝန်ထမ်းအသုံးပြုခွင့်',
  'preview.toolsNote': 'Desktop app တွင် ရရှိနိုင်သောအင်္ဂါရပ်များ',
  'preview.toolsStatus': 'တစ်နေရာတည်းတွင် ဟိုတယ်လုပ်ငန်းများ',
  'preview.caption': 'အင်တာဖေ့စ်ပုံစံတစ်မျိုးအတွက် ပုံပြမိန်းမဟုတ်ပါ',
  'hero.audience': 'လွတ်လပ်သော ဟိုတယ်လုပ်ငန်းအတွက် တီထွင်ထားသည်',
  'hero.capabilityRooms': 'အခန်းလုပ်ငန်း',
  'hero.capabilityGuests': 'ဧည့်သည်သက်တမ်း',
  'hero.capabilityReports': 'ငွေပေးချေမှု & အစီရင်ခံစာ',
  'intro.label': 'ထုတ်ကုန်အကျဉ်းချုပ်',
  'intro.lead': 'အခြေခံအချက်အလက်များကို တစ်နေရာတည်းတွင် စုစည်းထားသည်။',
  'intro.description': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်သည် သေးငယ်သောဟိုတယ်အသင်းများအတွက် အလုပ်အတွက်အရေးကြီးသည့် အချက်အလက်များကို—ကြိုတင်နေရာချထားမှုမှ စတင်၍ ဧည့်သည် folio အထိ—cloud based ဟိုတယ် platform များမလိုအပ်ဘဲ စီမံခန့်ခွဲနိုင်စေပါသည်။',
  'intro.explore': 'အင်္ဂါရပ်များကို ကြည့်ရှုပါ',
  'features.eyebrow': 'နေ့စဉ်အလုပ်အတွက် အသုံးဝင်သောကိရိယာများ',
  'features.title': 'နေ့စဉ်အလုပ်ကို<br><span>ပိုမိုရှင်းလင်းစွာ မြင်နိုင်သည်။</span>',
  'features.description': 'သင့်ပိုင်ဆိုင်မှုအားလုံးကို တစ်နေရာတည်းတွင် ထားရှိပြီး သင့်အဖွဲ့၏လက်ရှိအလုပ်များကို ပံ့ပိုးပေးမည့်ကိရိယာများဖြင့် စီမံခန့်ခွဲပါ။',
  'feature.rooms.title': 'အခန်းအခြေအနေ & ရနိုင်မှု',
  'feature.rooms.description': 'အခန်းရနိုင်မှု၊ ကြိုတင်စာရင်း၊ သန့်ရှင်းမှု၊ ပြုပြင်ထိန်းသိမ်းမှုအခြေအနေများကို တစ်ပြိုင်တည်း ကြည့်ရှုပါ။ အခန်းစာရင်းကို filter လုပ်ပြီး အခန်းမှတ်တမ်းကိုလည်း စစ်ဆေးနိုင်သည်။',
  'feature.reservations.title': 'ကြိုတင်စာရင်း & front desk',
  'feature.reservations.description': 'ကြိုတင်စာရင်းဖန်တီး၊ အခန်းခန့်တာ၊ ရောက်ရှိမှုနှင့် ထွက်ခွာမှုကို စီမံပါ၊ ထို့အပြင် check-in၊ check-out၊ ပယ်ဖျက်မှုနှင့် no-show များကိုလည်း ကိုင်တွယ်ပါ။',
  'feature.guests.title': 'ဧည့်သည်မှတ်တမ်း & သက်တမ်းစာရင်း',
  'feature.guests.description': 'ဧည့်သည်သက်တမ်းနှင့် ဆက်စပ်မှုရှိစေရန် ဧည့်သည် profiles ကို ထိန်းထားပါ။ ဧည့်သည်မှတ်တမ်းများကို ရှာဖွေပြီး လက်ရှိအတွင်းရှိ၊ ရောက်ရှိမည့်၊ ထွက်ခွာမည့် နှင့် ကြိုတင်စာရင်းများကို ကြည့်ရှုပါ။',
  'feature.folios.title': 'ဧည့်သည် folio & ငွေပေးချေမှု',
  'feature.folios.description': 'ဧည့်သည် folio တွင် ကုန်ကျစရိတ်များနှင့် ငွေပေးချေမှုများကို မှတ်တမ်းတင်ပါ၊ လျှော့ချမှုအသုံးပြုပါ၊ လက်ကျန်များကို ကြည့်ရှုပါ၊ အိမ်အတွက် invoice များကို ပြင်ဆင်ပါ။',
  'feature.reports.title': 'အစီရင်ခံစာ & နေ့စဉ်အမြင်',
  'feature.reports.description': 'အခန်းပြည့်လှုံ့မှု၊ ကြိုတင်စာရင်း၊ ရောက်ရှိမှုနှင့် ထွက်ခွာမှု၊ ဧည့်သည်စာရင်း၊ ဝင်ငွေ နှင့် ငွေကြေးလုပ်ဆောင်မှုများကို တာတင်းတိမ်တွင်ပါဝင်သောအစီရင်ခံစာများမှ ကြည့်ရှုပါ။',
  'feature.audit.title': 'ညဘက် audit နှင့် လုပ်ငန်းနေ့',
  'feature.audit.description': 'ညဘက် audit checklist ကို အလုပ်လုပ်ပါ၊ နေ့စဉ်လုပ်ဆောင်မှုများကို ကြည့်ရှုပါ၊ အခန်းကြေးများကို မှတ်တမ်းတင်ပါ၊ ထို့နောက် လုပ်ငန်းနေ့ကို ပိတ်သိမ်းပါ သို့မဟုတ် ပြန်ဖွင့်ပါ။',
  'feature.ledger.title': 'City ledger အကောင့်များ',
  'feature.ledger.description': 'ကုမ္ပဏီအကောင့်လွဲပြောင်းမှုနှင့် ငွေပေးချေမှုများကို မှတ်တမ်းတင်ပြီး လက်ကျန်ငွေများနှင့် အကောင့်လုပ်ဆောင်မှုအစီရင်ခံစာများကို ကြည့်ရှုပါ။',
  'feature.staff.title': 'ဝန်ထမ်းအသုံးပြုခွင့် & setup',
  'feature.staff.description': 'အခန်းများ၊ ဈေးနှုန်းများ၊ ငွေပေးချေမှုနည်းလမ်းများနှင့် ဝန်ထမ်းအကောင့်များကို တည်ဆောက်ပါ။ app modules အတွက် role နှင့် permissions ကို သတ်မှတ်ပါ။',
  'features.note': 'Housekeeping နှင့်ဆက်စပ်သောလုပ်ဆောင်မှုများတွင် အခန်းအခြေအနေစောင့်ကြည့်ခြင်းနှင့် ပျောက်ဆုံးသောပစ္စည်းများအတွက်မှတ်တမ်းများ ပါဝင်သည်။',
  'local.eyebrow': 'PE Hotel System ကို ဘာကြောင့်ရွေးချယ်သနည်း',
  'local.title': 'သင့်ဟိုတယ်၏နေ့စဉ်အလုပ်များ။<br><span>သင့် Windows computer တွင်</span>',
  'local.description': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်သည် Windows desktop app တစ်ခုဖြစ်ပြီး ဟိုတယ်ဒေတာများကို Local တွင် သိမ်းဆည်းထားသည်။ သင့်အဖွဲ့သည် အင်တာနက်ဆက်သွယ်မှုမရှိသေးသော်လည်း၊ cloud based hotel system များမလိုအပ်ဘဲ နေ့စဉ်လုပ်ငန်းများကို စီမံခန့်ခွဲနိုင်သည်။',
  'local.link': 'မည်သို့အလုပ်လုပ်သနည်း',
  'local.windowsTitle': 'Windows အတွက် တည်ဆောက်ထားသည်',
  'local.windowsDescription': 'ဟိုတယ်ဝန်ထမ်းများအတွက် familiar desktop workflow တစ်ခုဖြစ်သည်။',
  'local.offlineTitle': 'အော့ဖ်လိုင်းဖြင့် အလုပ်လုပ်နိုင်သည်',
  'local.offlineDescription': 'Local operations နှင့် licence validation များသည် cloud connection မလိုအပ်ပါ။',
  'local.dataTitle': 'ဟိုတယ်ဒေတာများကို Local တွင် သိမ်းဆည်းသည်',
  'local.dataDescription': 'ဟိုတယ်မှတ်တမ်းများကို Windows computer ထဲရှိ database တွင် သိမ်းဆည်းထားသည်။',
  'steps.eyebrow': 'ရိုးရှင်းသောအစ',
  'steps.title': 'ပထမဆုံးစကားပြန်မှ<br>သို့ <span>ပထမဆုံး check-in အထိ။</span>',
  'steps.description': 'လိုင်စင်အချက်အလက်များနှင့် သင့်ဟိုတယ်အတွက် app ကို တည်ဆောက်မည့်နည်းလမ်းကို အတည်ပြုရန် ကျွန်ုပ်တို့နှင့်ဆက်သွယ်ပါ။',
  'steps.chooseTitle': 'ပလန်ရွေးချယ်ပါ',
  'steps.chooseDescription': 'လစဉ်၊ နှစ်စဉ်၊ နှင့် တစ်သက်တာလိုင်စင်ရွေးချယ်မှုများကို နှိုင်းယှဉ်ကြည့်ပါ။',
  'steps.talkTitle': 'Developer နှင့်စကားပြောပါ',
  'steps.talkDescription': 'ဝယ်ယူမှု၊ အသက်သွင်းခြင်းနှင့် သင့်စနစ်အတွက်လိုင်စင်စည်းမျဉ်းများကို မေးမြန်းပါ။',
  'steps.activateTitle': 'လိုင်စင်ကို အသက်သွင်းပါ',
  'steps.activateDescription': 'Activation key နှင့် လမ်းညွှန်ချက်များကို ရယူပြီး app တွင် licence ကို စစ်ဆေးပါ။',
  'steps.installTitle': 'တပ်ဆင်ပြီး အလုပ်လုပ်ပါ',
  'steps.installDescription': 'Windows တွင် သင့်ဟိုတယ်ကို တပ်ဆင်ပြီး နေ့စဉ်လုပ်ငန်းများကို အော့ဖ်လိုင်းဖြင့် စီမံပါ။',
  'pricing.eyebrow': 'ရှင်းလင်းသောလိုင်စင်ရွေးချယ်မှု',
  'pricing.title': 'သင့်လုပ်ငန်းအတွက်<br><span>မည်သည့်ပုံစံကို ရွေးချယ်မည်နည်း။</span>',
  'pricing.description': 'ပလန်တစ်ခုစီက Windows desktop application အတွက်လိုင်စင်ပေးသည်။ လစဉ်နှင့်နှစ်စဉ်စျေးနှုန်းများမှာ cloud hosting မဟုတ်ဘဲ software licence တစ်ခုသာ ဖြစ်သည်။',
  'pricing.monthly': 'လစဉ်',
  'pricing.perMonth': '/ လ',
  'pricing.monthlyDescription': 'စတင်ရန် လွယ်ကူသောနည်းလမ်း။',
  'pricing.product': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်',
  'pricing.subscription': 'လိုင်စင် subscription',
  'pricing.offline': 'အော့ဖ်လိုင်း Windows application',
  'pricing.askMonthly': 'လစဉ်အကြောင်း မေးပါ',
  'pricing.yearly': 'နှစ်စဉ်',
  'pricing.perYear': '/ နှစ်',
  'pricing.yearlyDescription': 'အရှည်ကြာအသုံးပြုမည့်သူများအတွက် ပိုကောင်းသောတန်ဖိုး။',
  'pricing.annualSubscription': 'နှစ်စဉ်လိုင်စင် subscription',
  'pricing.askYearly': 'နှစ်စဉ်အကြောင်း မေးပါ',
  'pricing.recommended': 'အရှည်ကြာရွေးချယ်မှု',
  'pricing.lifetime': 'တစ်သက်တာ',
  'pricing.perLifetime': '/ တစ်သက်တာ',
  'pricing.lifetimeDescription': 'တစ်သက်တာလိုင်စင်အတွက် တစ်ကြိမ်တည်းပေးချေမှု။',
  'pricing.oneTime': 'တစ်ကြိမ်ပေးချေသောလိုင်စင်',
  'pricing.noRecurring': 'ထပ်တလဲလဲ subscription မရှိ',
  'pricing.askLifetime': 'တစ်သက်တာအကြောင်း မေးပါ',
  'pricing.footnote': 'ဝယ်ယူမီ activation၊ device၊ renewal၊ update နှင့် support အတွက် developer နှင့် အတည်ပြုပါ။ ဤဝဘ်ဆိုက်တွင် online checkout မရှိပါ။',
  'founder.eyebrow': 'Developer မှ မှတ်ချက်',
  'founder.title': 'နည်းပညာသည်<br>အလုပ်ကို <span>ပိုလွယ်ကူစေရန်</span> ရည်ရွယ်သင့်သည်။',
  'founder.name': 'SEAVPEAV PECH',
  'founder.role': 'တည်ထောင်သူ & Developer',
  'founder.paragraph1': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်ကို ရိုးရှင်းသောပန်းတိုင်ဖြင့် ဖန်တီးခဲ့သည်—လွတ်လပ်သောဟိုတယ်လုပ်ငန်းများအတွက် ဟိုတယ်စီမံခန့်ခွဲမှုကို ပိုမိုစနစ်တကျနှင့် ပိုမိုမိတ်ဆက်နိုင်စေမည့်။',
  'founder.paragraph2': 'သေးငယ်သောဟိုတယ်များအတွက် ရိုးရှင်းသော tool များရှိသင့်ပြီး အလွန်ရှုပ်ထွေးသော enterprise system များနှင့် မထိမိသင့်ပါ။ ဤ application သည် front desk နှင့် daily operational tasks များကို Windows desktop experience တစ်ခုထဲတွင် ပေါင်းစည်းပေးသည်။',
  'faq.eyebrow': 'သိထားသင့်သောအချက်',
  'faq.title': 'မေးခွန်းများ၊<br><span>အဖြေများ။</span>',
  'faq.description': 'နောက်ထပ်မေးခွန်းရှိပါသလား? အောက်ပါဆက်သွယ်ရန်အချက်များမှ developer ကို ဆက်သွယ်ပါ။',
  'faq.contactLink': 'ဆက်သွယ်ရန်အချက်သို့ သွားပါ',
  'faq.q1': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ် ဆိုတာဘာလဲ?',
  'faq.a1': 'ဤသည်သည် Windows desktop application တစ်ခုဖြစ်ပြီး အခန်းများ၊ ကြိုတင်စာရင်း၊ ဧည့်သည်မှတ်တမ်းများ၊ check-in နှင့် check-out၊ folio၊ ငွေပေးချေမှု၊ အစီရင်ခံစာများနှင့် ဆက်စပ်သော ဟိုတယ်လုပ်ငန်းများကို စီမံခန့်ခွဲရန်အတွက် အသုံးပြုသည်။',
  'faq.q2': 'ဤသည် web app ဖြစ်သလား desktop app ဖြစ်သလား?',
  'faq.a2': 'ဤသည် Windows desktop application တစ်ခုဖြစ်ပြီး browser based hotel management platform မဟုတ်ပါ။',
  'faq.q3': 'အင်တာနက်မရှိဘဲ အသုံးပြုနိုင်မလား?',
  'faq.a3': 'ဖြစ်ပါတယ်။ ဟိုတယ်လုပ်ငန်းများနှင့် licence validation တို့ကို Local တွင်လုပ်ဆောင်၍ cloud connection မလိုအပ်ပါ။ လိုင်စင်စီမံခန့်ခွဲရန်နှင့် activation instructions များရယူရန် developer ကို ဆက်သွယ်ရန် လိုအပ်သည်။',
  'faq.q4': 'Windows တွင် အလုပ်လုပ်သလား?',
  'faq.a4': 'လုပ်ပါတယ်။ PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်သည် Windows desktop application တစ်ခုဖြစ်သည်။ အချို့ computer တွင် သင့်တော်မှုကို အတည်ပြုရန် developer ကို ဆက်သွယ်ပါ။',
  'faq.q5': 'လိုင်စင်ကျသင့်ငွေဘယ်လောက်လဲ?',
  'faq.a5': 'စာရင်းပြထားသော ရွေးချယ်မှုများမှာ လစဉ် $5၊ နှစ်စဉ် $50 နှင့် တစ်သက်တာလိုင်စင် $240 တို့ဖြစ်သည်။ လစဉ်နှင့် နှစ်စဉ်စျေးနှုန်းများသည် cloud hosting fees မဟုတ်ဘဲ software licence subscription များသာဖြစ်သည်။',
  'faq.q6': 'တစ်သက်တာလိုင်စင်တွင် ဘာတွေပါသလဲ?',
  'faq.a6': 'စာရင်းပြထားသော တစ်သက်တာရွေးချယ်မှုသည် တစ်ကြိမ်တည်းပေးချေသော licence payment ဖြစ်ပြီး recurring subscription payment မရှိပါ။ ဝယ်ယူမီ device coverage၊ updates နှင့် support terms များကို developer နှင့် အတည်ပြုပါ။',
  'faq.q7': 'software ကို ဘယ်လိုဝယ်ယူပြီး activate လုပ်မလဲ?',
  'faq.a7': 'ပလန်အကြောင်း developer နှင့်ဆွေးနွေးပါ။ အပလီကေးရှင်းသည် local တွင် အတည်ပြုသည့် activation key ကို အသုံးပြုပြီး developer က လက်ရှိ purchase နှင့် activation instructions များကို ပေးနိုင်သည်။',
  'faq.q8': 'technical support ကို ဘယ်လိုရမလဲ?',
  'faq.a8': 'ဤစာမျက်နှာရှိ developer contact channels တစ်ခုခုကို အသုံးပြုကာ support အကြောင်းမေးမြန်းပါ။ ဝယ်ယူမီ current support arrangements ကို အတည်ပြုပါ။',
  'faq.q9': 'သေးငယ်သောဟိုတယ် သို့မဟုတ် guesthouse အတွက် သင့်တော်မလား?',
  'faq.a9': 'ဤစနစ်ကို လွတ်လပ်သောဟိုတယ်များနှင့် သေးငယ်သော hospitality businesses များအတွက် ရည်ရွယ်ထားသည်။ သင့်ပိုင်ဆိုင်မှုလုပ်ငန်းစဉ်နှင့် ဤလက်ရှိ features များကို developer နှင့်ဆွေးနွေးပါ။',
  'contact.facebookLabel': 'Facebook ပရိုဖိုင်ကို ဖွင့်ပါ',
  'contact.portfolio': 'Portfolio',
  'contact.telegramButton': 'Telegram တွင်မေးပါ',
  'contact.telegramButtonAria': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်အကြောင်း prefilled မက်ဆေ့ချ်ဖြင့် Telegram ကိုဖွင့်ပါ',
  'contact.telegramMessage': "မင်္ဂလာပါ! ကျွန်ုပ်သည် ကျွန်ုပ်၏ဟိုတယ်အတွက် PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်ကို စိတ်ဝင်စားပါသည်။ အင်္ဂါရပ်များ၊ လိုင်စင်ရွေးချယ်မှုများနှင့် စျေးနှုန်းများ၊ setup process အကြောင်း အသေးစိတ်ပေးနိုင်ပါသလား? ကျွန်ုပ်၏ဟိုတယ်တွင် [အရေအတွက်] အခန်းများရှိသည်။ ကျေးဇူးတင်ပါသည်!",
  'contact.whatsappMessage': "မင်္ဂလာပါ! ကျွန်ုပ်သည် PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်ကို စိတ်ဝင်စားပါသည်။ ကျွန်ုပ်သည် ဟိုတယ်အခန်းများ၊ ကြိုတင်စာရင်း၊ ဧည့်သည်သက်တမ်းများနှင့် ငွေပေးချေမှုများကို စီမံခန့်ခွဲနိုင်သော စနစ်တစ်ခုကို ရှာနေပါသည်။ အင်္ဂါရပ်များ၊ လိုင်စင်ပလန်နှင့် စျေးနှုန်းများ၊ system requirements နှင့် setup steps များအကြောင်းအချက်အလက်ပေးနိုင်ပါသလား?\n\nဟိုတယ်အမည်: [ဟိုတယ်အမည်]\nအခန်းအရေအတွက်: [အရေအတွက်]\n\nကျေးဇူးတင်ပါသည်!",
  'contact.emailSubject': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်အကြောင်း စုံစမ်းမေးမြန်းချက်',
  'contact.emailMessage': "မင်္ဂလာပါ၊\n\nကျွန်ုပ်သည် ကျွန်ုပ်၏ဟိုတယ်အတွက် PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်ကို စိတ်ဝင်စားပါသည်။ အင်္ဂါရပ်များ၊ လိုင်စင်ပလန်နှင့် စျေးနှုန်းများ၊ system requirements နှင့် setup process အကြောင်းသတင်းပေးနိုင်ပါသလား?\n\nဟိုတယ်အမည်: [ဟိုတယ်အမည်]\nအခန်းအရေအတွက်: [အရေအတွက်]\n\nကျေးဇူးတင်ပါသည်၊\n[သင်၏အမည်]",
  'contact.note': 'Telegram၊ WhatsApp နှင့် email တို့သည် တည်းဖြတ်ရန်အဆင်ပြေသော inquiry template ကို ဖွင့်ပေးသည်။',
  'contact.eyebrow': 'စကားစမြည်စတင်ပါ',
  'contact.title': 'သင့်ဟိုတယ်ကို<br><span>ပိုမိုရှင်းလင်းစွာ</span> စီမံခန့်ခွဲမည်လား?',
  'contact.description': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်အကြောင်း ပိုမိုလေ့လာရန် နှင့် သင့်ဟိုတယ်အတွက် သင့်တော်မည့်လိုင်စင်ပလန်ကို ဆွေးနွေးရန် ကျွန်ုပ်နှင့် ဆက်သွယ်ပါ။',
  'contact.cardTitle': 'ဆက်သွယ်ပါ',
  'footer.tagline': 'လွတ်လပ်သော hospitality အတွက် အသုံးဝင်သော ဟိုတယ်လုပ်ငန်းများ။',
  'footer.backTop': 'ထိပ်သို့ ပြန်သွားသည်',
  'footer.productType': 'Windows desktop software · အော့ဖ်လိုင်းလုပ်ငန်း',
  'skip': 'အကြောင်းအရာသို့ ကျော်သွားပါ',
  'brand.home': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ် ပင်မစာမျက်နှာ',
  'brand.footer': 'PE ဟိုတယ်စီမံခန့်ခွဲမှုစနစ်၊ ထိပ်သို့ ပြန်သွားပါ'
  } };

const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const themeButton = document.querySelector('.theme-toggle');
const languageSelect = document.querySelector('.language-select');
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

const countryLanguageMap = {
  ID: 'id',
  MY: 'ms',
  VN: 'vi',
  MM: 'my',
  KH: 'km'
};

function getLanguageFromBrowser() {
  const browserLanguage = (navigator.language || navigator.languages?.[0] || '').toLowerCase();
  const preferredCode = browserLanguage.split('-')[0];
  if (preferredCode in translations) return preferredCode;
  return 'en';
}

async function detectLanguageFromCountry() {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
      return getLanguageFromBrowser();
    }

    const data = await response.json();
    const countryCode = data?.country_code ? String(data.country_code).toUpperCase() : '';
    if (countryCode && countryCode in countryLanguageMap) {
      return countryLanguageMap[countryCode];
    }

    return getLanguageFromBrowser();
  } catch {
    return getLanguageFromBrowser();
  }
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  const dictionary = translations[currentLanguage];
  root.lang = currentLanguage;
  root.classList.toggle('lang-km', currentLanguage === 'km');
  root.classList.toggle('lang-my', currentLanguage === 'my');
  root.classList.toggle('lang-vi', currentLanguage === 'vi');

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
  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.setAttribute('aria-label', dictionary['language.label']);
  }
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
let hasStoredLanguage = false;

try {
  const storedLanguage = localStorage.getItem('pe-hotel-language');
  if (storedLanguage && translations[storedLanguage]) {
    currentLanguage = storedLanguage;
    hasStoredLanguage = true;
  }
} catch {
  currentLanguage = 'en';
}

setLanguage(currentLanguage);

if (!hasStoredLanguage) {
  detectLanguageFromCountry().then((detectedLanguage) => {
    if (translations[detectedLanguage]) {
      setLanguage(detectedLanguage);
    }
  });
}

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

languageSelect?.addEventListener('change', () => setLanguage(languageSelect.value));

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
