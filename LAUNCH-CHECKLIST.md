# Rao Butter Momos launch checklist

- Verify all prices and vegetarian/non-vegetarian classifications in `dist/menu.json`. Veg and paneer are green; chicken and egg are red. Confirm egg/batter composition for otherwise vegetarian sides with the owner.
- Confirm Chicken Tawa Gravy Momos at ₹140 before enabling that variant.
- Confirm all Chopsy names, Egg Moodles, Paneer Sehyziodles, Chicken Hita Noodles and the Paneer Singapuri Rice printed under Chowmein / Noodles. They remain visible but unavailable to order.
- Review other source spellings: Shezwan, Shizwan, Thuppa, Bhutani, Paneer Hakka, Mix Chicken. Source text is retained; no dish identities have been silently corrected.
- Verify +91 79820 22401 supports WhatsApp. Zomato lists a different public phone (+91 98102 49796); the supplied destination remains in use.
- Confirm weekly hours. Supplied closing is 11 pm; Justdial reports 10 pm and Zomato reports 11:45 pm. The site asks visitors to call.
- Confirm supplied address/landmark. Zomato supports the New Roshan Pura address; Justdial describes Plot 5, Gurgaon Road.
- Verify Swiggy and Zomato links on a customer device. Swiggy could not be extracted in this session. Third-party prices differ from supplied menu (e.g. Justdial Rumali Roti ₹10 vs supplied ₹20).
- Delivery remains disabled until availability, coverage and charges are confirmed.
- Confirm permission to reuse Justdial listing photos. They are labelled as listing photographs, not owner-supplied originals. Replace with owner photography as available.
- Connect the intended domain raobuttermomos.com after ownership/DNS verification; it is not claimed as registered or connected. Then add its canonical URL and update sitemap/robots URLs.
- Review privacy copy and public sharing before opening the private Site to customers.

## Editing

`dist/menu.json` holds stable IDs, categories, original transcription, variants, price, diet, protein, availability and butter eligibility. Toggle `available` or variant `enabled` only after review. `dist/app.js` renders the interactive menu. `dist/index.html` also contains a readable static menu for SEO/no-JavaScript; keep that fallback synchronized when editing the data.

## Sources

- https://www.justdial.com/Delhi/Rao-Butter-Momos-Najafgarh/011PXX11-XX11-210730113927-C7J2_BZDET
- https://www.zomato.com/ncr/rao-butter-momos-6-najafgarh-new-delhi
- https://www.swiggy.com/restaurants/delhi/najafgarh/rao-butter-momos-186692/dineout

Cart saves only item selections on the device. Customer details are not retained. A WhatsApp handoff is an order request, not a sale or confirmation.
