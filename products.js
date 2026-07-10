// ===== Orion Medicament catalog data =====
// Edit prices (pr), packs (pk) or add products here — no other file needs changing.
// rx:1 means Schedule H (prescription required at checkout); rx:0 means OTC.

const CATS = [
  {id:'acne',   name:'Acne Control',        note:'Face washes, gels, isotretinoin', c:'var(--c-acne)'},
  {id:'hair',   name:'Hair & Scalp',        note:'Minoxidil, finasteride, nutrition', c:'var(--c-hair)'},
  {id:'fungal', name:'Anti-Fungal',         note:'Creams, tablets, shampoos', c:'var(--c-fungal)'},
  {id:'bright', name:'Brightening',         note:'Glutathione & pigmentation care', c:'var(--c-bright)'},
  {id:'serum',  name:'Serums',              note:'Niacinamide, retinol, Vit C', c:'var(--c-serum)'},
  {id:'sun',    name:'Sun Care',            note:'SPF 30+ / 50+ sunscreens', c:'var(--c-sun)'},
  {id:'moist',  name:'Moisture & Cleanse',  note:'Lotions, creams, cleansers', c:'var(--c-moist)'},
  {id:'treat',  name:'Skin Treatment',      note:'Eczema, psoriasis, scars', c:'var(--c-treat)'},
];
const P = [
 // ---- Lyra ----
 {n:'Zidoin-20 Capsules', b:'Lyra', cat:'acne', comp:'Isotretinoin 20 mg softgel', pk:'10×1×10', pr:485, rx:1},
 {n:'Clincure AD Gel', b:'Lyra', cat:'acne', comp:'Clindamycin 1% + Adapalene 0.1%', pk:'15 g', pr:198, rx:1},
 {n:'Lyrasol Facewash', b:'Lyra', cat:'acne', comp:'Benzoyl Peroxide 4% w/w', pk:'50 g', pr:225, rx:0},
 {n:'Lysalic Facewash', b:'Lyra', cat:'acne', comp:'Salicylic Acid IP 2% — clogged pores & blackheads', pk:'50 g', pr:240, rx:0},
 {n:'Seboshield Facewash', b:'Lyra', cat:'acne', comp:'Zinc PCA — sebum regulation', pk:'100 ml', pr:265, rx:0},
 {n:'Niacne Facewash', b:'Lyra', cat:'acne', comp:'Tea Tree Oil, Allantoin, Vitamin E, Jojoba', pk:'75 ml', pr:210, rx:0},
 {n:'Hairdil-5 Solution', b:'Lyra', cat:'hair', comp:'Minoxidil Topical Solution USP 5% w/v', pk:'60 ml', pr:520, rx:0},
 {n:'Hairdil-F Solution', b:'Lyra', cat:'hair', comp:'Minoxidil 5% + Finasteride 0.1% — male pattern baldness', pk:'60 ml', pr:640, rx:1},
 {n:'Finoric Tablets', b:'Lyra', cat:'hair', comp:'Finasteride 1 mg — alopecia / hair loss', pk:'10×10', pr:390, rx:1},
 {n:'Lyotin Forte Tablets', b:'Lyra', cat:'hair', comp:'Biotin, iron, zinc, amino-acid hair nutrition', pk:'3×10', pr:330, rx:0},
 {n:'Valotrix Shampoo', b:'Lyra', cat:'hair', comp:'Cressatine, wheat protein, Vit B5 & B3 — anti hair-fall', pk:'200 ml', pr:415, rx:0},
 {n:'Itzalen-100 Capsules', b:'Lyra', cat:'fungal', comp:'Itraconazole 100 mg — fungal skin infections', pk:'10×1×10', pr:560, rx:1},
 {n:'Acbro Cream', b:'Lyra', cat:'fungal', comp:'Terbinafine HCl 1% — ringworm & athlete\u2019s foot', pk:'30 g', pr:165, rx:0},
 {n:'Kitnor Shampoo', b:'Lyra', cat:'fungal', comp:'Ketoconazole 2% + ZPTO 1% — dandruff', pk:'100 ml', pr:345, rx:0},
 {n:'Lulidac Cream', b:'Lyra', cat:'fungal', comp:'Luliconazole 1% — tinea pedis / cruris / corporis', pk:'20 g', pr:255, rx:1},
 {n:'Kovite Facewash', b:'Lyra', cat:'bright', comp:'Glycolic acid, alpha-arbutin, liquorice', pk:'100 ml', pr:290, rx:0},
 {n:'Kovite Ultra Gel', b:'Lyra', cat:'bright', comp:'Butyl resorcinol, glutathione, tetrahydrocurcumin', pk:'20 g', pr:410, rx:0},
 {n:'Lyralite Cream', b:'Lyra', cat:'bright', comp:'Hydroquinone 2% + Tretinoin + Mometasone', pk:'20 g', pr:230, rx:1},
 {n:'Aloglow UV Gel SPF 50+', b:'Lyra', cat:'sun', comp:'Broad-spectrum UVA/UVB, water & sweat resistant', pk:'50 g', pr:475, rx:0},
 {n:'Acnevis UV Sunscreen', b:'Lyra', cat:'sun', comp:'Tinosorb M+S — for acne-prone & oily skin', pk:'50 ml', pr:520, rx:0},
 {n:'Kovite Sunscreen', b:'Lyra', cat:'sun', comp:'Ectoin + Tinosorb — pigmentation-prone skin', pk:'50 ml', pr:540, rx:0},
 {n:'Valomoist Lotion', b:'Lyra', cat:'moist', comp:'Aloe vera, glycerin, wheat germ & jojoba oil', pk:'200 ml', pr:360, rx:0},
 {n:'Cetogly Dry Skin Cleanser', b:'Lyra', cat:'moist', comp:'Dexpanthenol, oat beta-glucan — eczema-safe', pk:'100 ml', pr:315, rx:0},
 {n:'Fill-Foot Cream', b:'Lyra', cat:'moist', comp:'Urea 10% + Lactic Acid 10% — cracked heels', pk:'75 g', pr:245, rx:0},
 {n:'Allium Gel', b:'Lyra', cat:'treat', comp:'Onion bulb extract, hyaluronate — old & new scars', pk:'20 g', pr:330, rx:0},
 {n:'Ezosone Cream', b:'Lyra', cat:'treat', comp:'Mometasone Furoate 0.1% — atopic dermatitis', pk:'30 g', pr:190, rx:1},
 {n:'Taclus Ointment', b:'Lyra', cat:'treat', comp:'Tacrolimus 0.03% — atopic dermatitis', pk:'10 g', pr:410, rx:1},
 {n:'Lycalamine Lotion', b:'Lyra', cat:'treat', comp:'Calamine 8% + diphenhydramine — sunburn & rashes', pk:'100 ml', pr:175, rx:0},
 // ---- Biorome ----
 {n:'Seriq-B3 Serum', b:'Biorome', cat:'serum', comp:'Niacinamide 10% — sebum control, even tone', pk:'30 ml', pr:449, rx:0},
 {n:'Seriq-A Serum', b:'Biorome', cat:'serum', comp:'Retinol 1% — fine lines & radiance', pk:'30 ml', pr:549, rx:0},
 {n:'Seriq-B5 Serum', b:'Biorome', cat:'serum', comp:'Vitamin B5 3% + Hyaluronic Acid 2% — deep hydration', pk:'30 ml', pr:499, rx:0},
 {n:'C-Tone Serum', b:'Biorome', cat:'serum', comp:'Vitamin C 15% — brightening for ageing skin', pk:'30 ml', pr:525, rx:0},
 {n:'Evenxa Serum', b:'Biorome', cat:'serum', comp:'Tranexamic Acid 5% — hyperpigmentation & acne marks', pk:'30 ml', pr:575, rx:0},
 {n:'Glutanoor Serum', b:'Biorome', cat:'bright', comp:'Glutathione, tranexamic acid & aloe vera', pk:'30 ml', pr:595, rx:0},
 {n:'Glutanoor Face Wash', b:'Biorome', cat:'bright', comp:'Glutathione, tranexamic acid, Vit E', pk:'250 ml', pr:340, rx:0},
 {n:'Glutanoor Cream', b:'Biorome', cat:'bright', comp:'Glutathione with cocoa & shea butter', pk:'30 g', pr:385, rx:0},
 {n:'Vendase-F 5% Solution', b:'Biorome', cat:'hair', comp:'Minoxidil 5% + Finasteride 0.1% lipid solution', pk:'60 ml', pr:690, rx:1},
 {n:'Finezest-1 Tablets', b:'Biorome', cat:'hair', comp:'Finasteride 1 mg', pk:'5×2×10', pr:380, rx:1},
 {n:'Spexdime Shampoo', b:'Biorome', cat:'fungal', comp:'Ketoconazole shampoo with milk protein', pk:'100 ml', pr:310, rx:0},
 {n:'Candirome-SB 130', b:'Biorome', cat:'fungal', comp:'Itraconazole 130 mg supra-bioavailable capsules', pk:'10×10', pr:640, rx:1},
 {n:'Acnevent-EC Face Wash', b:'Biorome', cat:'acne', comp:'Hydrous Benzoyl Peroxide 2.5% exfoliating cleanser', pk:'200 ml', pr:295, rx:0},
 {n:'Sofvin Cream', b:'Biorome', cat:'moist', comp:'White soft paraffin, dimethicone, Vit E', pk:'60 g', pr:220, rx:0},
 {n:'Soferom Cream', b:'Biorome', cat:'moist', comp:'Emollient moisturizing cream — family pack', pk:'275 g', pr:390, rx:0},
 {n:'Biotrez-25 Capsules', b:'Biorome', cat:'treat', comp:'Acitretin 25 mg — severe psoriasis', pk:'5×1×10', pr:980, rx:1},
];
const WA = '919970158572';
let brand='all', otcOnly=false, cat='all', cart={};
