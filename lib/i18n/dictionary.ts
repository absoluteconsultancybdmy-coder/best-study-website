export type Lang = "bn" | "en";

type Entry = { bn: string; en: string };

const defs = {
  // Layout
  "layout.skipLink": { bn: "মূল কনটেন্টে যান", en: "Skip to main content" },
  "layout.nav": { bn: "প্রধান নেভিগেশন", en: "Main navigation" },
  "layout.nav.courses": { bn: "কোর্স", en: "Courses" },
  "layout.nav.teacher": { bn: "শিক্ষক", en: "Teacher" },
  "layout.nav.terms": { bn: "শর্তাবলি", en: "Terms" },
  "layout.contact.phone": { bn: "[ফোন নম্বর] PLACEHOLDER", en: "[Phone number] PLACEHOLDER" },
  "layout.cta.short": { bn: "ফ্রি ক্লাস", en: "Free class" },
  "layout.cta.full": { bn: "English ফ্রি ক্লাস বুক করো", en: "Book a free English class" },
  "layout.brand": { bn: "বেস্ট টিউটোরিয়াল হোম", en: "BEST TUTORIAL HOME" },
  "layout.footer.nav": { bn: "ফুটার নেভিগেশন", en: "Footer navigation" },
  "layout.footer.links": { bn: "প্রয়োজনীয় লিংক", en: "Useful links" },
  "layout.footer.privacy": { bn: "গোপনীয়তা", en: "Privacy" },
  "layout.footer.refund": { bn: "রিফান্ড নীতি", en: "Refund policy" },
  "layout.footer.contact": { bn: "যোগাযোগ", en: "Contact" },
  "layout.footer.phone": { bn: "[ফোন নম্বর] PLACEHOLDER", en: "[Phone number] PLACEHOLDER" },
  "layout.footer.email": { bn: "[ইমেইল] PLACEHOLDER", en: "[Email] PLACEHOLDER" },
  "layout.footer.payment": {
    bn: "ভবিষ্যৎ পেমেন্ট সহায়তা (এখনও সক্রিয় নয়): bKash · Nagad · Visa",
    en: "Future payment support (not active yet): bKash · Nagad · Visa",
  },
  "layout.footer.tagline": { bn: "English subject-only learning", en: "English subject-only learning" },
  "layout.footer.desc": {
    bn: "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary ও Board English শেখার প্ল্যাটফর্ম।",
    en: "A platform to learn English Grammar, Writing, Reading, Vocabulary and Board English for Bangla-medium students.",
  },

  // Toggle
  "toggle.label": { bn: "ভাষা পরিবর্তন", en: "Switch language" },

  // Hero
  "hero.eyebrow": { bn: "English subject-only · বাংলা মিডিয়ামের জন্য", en: "English subject-only · for Bangla medium" },
  "hero.title1": { bn: "ইংরেজি মুখস্থ না—", en: "Don't memorise English—" },
  "hero.title2": { bn: "বোঝে শেখো।", en: "learn by understanding." },
  "hero.lead": {
    bn: "Grammar, Writing, Reading, Vocabulary ও Board English—বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য পরিষ্কারভাবে সাজানো।",
    en: "Grammar, Writing, Reading, Vocabulary and Board English—clearly organised for Bangla-medium students.",
  },
  "hero.cta.primary": { bn: "English ফ্রি ক্লাস বুক করো", en: "Book a free English class" },
  "hero.cta.secondary": { bn: "English কোর্স দেখো", en: "Browse English courses" },
  "hero.teacher.note": { bn: "English শিক্ষক পরিচিতি পরে যোগ হবে", en: "English teacher intro coming soon" },
  "hero.teacher.name": { bn: "[শিক্ষকের নাম] PLACEHOLDER", en: "[Teacher name] PLACEHOLDER" },
  "hero.scroll": { bn: "স্ক্রল করো · English journey শুরু হোক", en: "Scroll · start your English journey" },
  "hero.book.caption": {
    bn: "English Grammar, Writing, Vocabulary, Reading ও Board Questions শেখার ক্ষেত্রসহ একটি উদাহরণমূলক খোলা বই।",
    en: "An example open book covering English Grammar, Writing, Vocabulary, Reading and Board Questions.",
  },
  "hero.book.areas": { bn: "English শেখার ক্ষেত্র", en: "English learning areas" },

  // Class selector
  "classselector.kicker": { bn: "Find your starting point", en: "Find your starting point" },
  "classselector.title": { bn: "তুমি কোন ক্লাসে পড়ো?", en: "Which class are you in?" },
  "classselector.lead": {
    bn: "তোমার class বা exam level বেছে English কোর্সের তালিকায় যাও। চূড়ান্ত কোর্স তথ্য অনুমোদনের পর যোগ হবে।",
    en: "Choose your class or exam level to browse English courses. Final course details will be added after approval.",
  },
  "classselector.nav": { bn: "ক্লাস অনুযায়ী English কোর্স", en: "English courses by class" },
  "classselector.group.class": { bn: "ক্লাস", en: "Class" },
  "classselector.group.exam": { bn: "পরীক্ষা", en: "Exams" },
  "classselector.helper.class": { bn: "ক্লাস", en: "Class" },
  "classselector.helper.examinee": { bn: "পরীক্ষার্থী", en: "Examinee" },
  "classselector.ssc": { bn: "এসএসসি", en: "SSC" },
  "classselector.hsc": { bn: "এইচএসসি", en: "HSC" },

  // Why best study
  "why.kicker": { bn: "A clearer way to learn English", en: "A clearer way to learn English" },
  "why.title1": { bn: "ইংরেজি শেখার পথে", en: "On the path of learning English" },
  "why.title2": { bn: "বাধা কমুক।", en: "let obstacles shrink." },
  "why.lead": { bn: "কঠিন মনে হওয়া English-কে ছোট, পরিষ্কার ধাপে ভাঙলে শেখা সহজ হয়।", en: "Breaking hard English into small, clear steps makes learning easy." },
  "why.beliefs.title1": { bn: "ভয় নয়", en: "No fear" },
  "why.beliefs.note1": { bn: "শুরু হবে সহজ ব্যাখ্যা থেকে।", en: "It starts with simple explanations." },
  "why.beliefs.title2": { bn: "মুখস্থ নয়", en: "No memorising" },
  "why.beliefs.note2": { bn: "নিয়ম বুঝে প্রয়োগ করতে শেখো।", en: "Learn to apply rules by understanding." },
  "why.beliefs.title3": { bn: "কনফিউশন নয়", en: "No confusion" },
  "why.beliefs.note3": { bn: "ধাপে ধাপে গুছিয়ে অনুশীলন করো।", en: "Practise step by step, organised." },
  "why.method.kicker": { bn: "Why BEST TUTORIAL HOME", en: "Why BEST TUTORIAL HOME" },
  "why.method.title": { bn: "বোঝা থেকে প্রয়োগ—একটি গুছানো পথ।", en: "From understanding to applying—one organised path." },

  // Learning journey
  "journey.kicker": { bn: "Your English journey", en: "Your English journey" },
  "journey.title1": { bn: "এক পৃষ্ঠা থেকে", en: "From one page" },
  "journey.title2": { bn: "পরের অধ্যায়।", en: "to the next chapter." },
  "journey.lead": {
    bn: "Grammar দিয়ে ভিত্তি। Writing-এ প্রয়োগ। Reading ও Vocabulary-তে গভীরতা। শেষে Board Questions-এর প্রস্তুতি।",
    en: "Foundation with Grammar. Application in Writing. Depth in Reading and Vocabulary. Finally, Board Questions preparation.",
  },
  "journey.book.english": { bn: "English", en: "English" },
  "journey.book.steps": { bn: "৫টি ধাপ", en: "5 steps" },
  "journey.step1.title": { bn: "ভিত্তি পরিষ্কার করো", en: "Clear the foundation" },
  "journey.step1.desc": { bn: "Sentence কীভাবে তৈরি হয়—নিয়ম মুখস্থ না করে গঠন বুঝে শুরু করো।", en: "See how a sentence is built—start by understanding structure, not memorising rules." },
  "journey.step2.title": { bn: "নিজের ভাষায় লেখো", en: "Write in your own words" },
  "journey.step2.desc": { bn: "Structure থেকে paragraph—ধাপে ধাপে ভাবনাকে English-এ সাজাও।", en: "From structure to paragraph—arrange your thoughts in English step by step." },
  "journey.step3.title": { bn: "পড়ে অর্থ ধরো", en: "Grasp meaning by reading" },
  "journey.step3.desc": { bn: "শুধু শব্দ নয়; passage-এর ভাব, clue ও প্রশ্ন বোঝার অভ্যাস তৈরি করো।", en: "Not just words; build the habit of understanding the passage's idea, clues and questions." },
  "journey.step4.title": { bn: "শব্দকে কাজে লাগাও", en: "Put words to work" },
  "journey.step4.desc": { bn: "নতুন শব্দকে sentence ও context-এর মধ্যে দেখে ব্যবহার শেখো।", en: "Learn to use new words by seeing them in sentences and context." },
  "journey.step5.title": { bn: "প্রশ্নের ধরন চিনে নাও", en: "Recognise question patterns" },
  "journey.step5.desc": { bn: "Board English প্রস্তুতির অনুমোদিত কাঠামো ও অনুশীলন পরে যোগ হবে।", en: "Approved structure and practice for Board English preparation will be added later." },

  // Featured courses
  "courses.kicker": { bn: "Choose your next chapter", en: "Choose your next chapter" },
  "courses.title1": { bn: "যে জায়গায় আটকে আছো,", en: "Wherever you're stuck," },
  "courses.title2": { bn: "সেখান থেকেই শুরু।", en: "start from there." },
  "courses.lead": {
    bn: "Grammar, Writing, Reading ও Vocabulary-এর উদাহরণমূলক কোর্স বিভাগ। অনুমোদিত batch, schedule ও মূল্য পরে যোগ হবে।",
    en: "Example course sections for Grammar, Writing, Reading and Vocabulary. Approved batches, schedules and prices will be added later.",
  },
  "courses.all": { bn: "সব English কোর্স দেখো", en: "See all English courses" },
  "coursecard.status": { bn: "উদাহরণমূলক কভার", en: "Example cover" },
  "coursecard.batch": { bn: "ব্যাচ শুরু", en: "Batch starts" },
  "coursecard.seats": { bn: "আসন", en: "Seats" },
  "coursecard.details": { bn: "বিস্তারিত দেখো", en: "View details" },

  // Teacher intro
  "teacher.kicker": { bn: "Meet the person behind BEST", en: "Meet the person behind BEST" },
  "teacher.ownerLabel": { bn: "BEST TUTORIAL HOME-এর Owner", en: "Owner of BEST TUTORIAL HOME" },
  "teacher.ownerIntro": {
    bn: "BEST TUTORIAL HOME-এর Owner-এর বিস্তারিত পরিচিতি এবং English learning role প্রতিষ্ঠাতার অনুমোদনের পর প্রকাশ করা হবে।",
    en: "The detailed introduction of the BEST TUTORIAL HOME owner and their English learning role will be published after the founder's approval.",
  },
  "teacher.list1": { bn: "[শিক্ষকের আসল ডিগ্রি / অভিজ্ঞতা যোগ হবে] PLACEHOLDER", en: "[Teacher's real degree / experience to be added] PLACEHOLDER" },
  "teacher.list2": { bn: "[Grammar, Writing, Reading ও Vocabulary পড়ানোর পদ্ধতির তথ্য] PLACEHOLDER", en: "[Details of how Grammar, Writing, Reading and Vocabulary are taught] PLACEHOLDER" },
  "teacher.cta": { bn: "Owner পরিচিতি দেখো", en: "See owner intro" },

  // Free resources
  "resources.title": { bn: "ফ্রি English রিসোর্স", en: "Free English resources" },
  "resources.lead": {
    bn: "Grammar, Writing, Reading ও Vocabulary resource-এর বাস্তব download link অনুমোদনের পর যোগ হবে।",
    en: "Real download links for Grammar, Writing, Reading and Vocabulary resources will be added after approval.",
  },

  // Parent section
  "parent.kicker": { bn: "অভিভাবকদের জন্য", en: "For parents" },
  "parent.title": { bn: "আপনার সন্তানের English শেখার অগ্রগতি জানার ব্যবস্থা", en: "A way to follow your child's English progress" },
  "parent.desc": { bn: "[English learning report ও অভিভাবক যোগাযোগ প্রক্রিয়ার বিস্তারিত] PLACEHOLDER", en: "[Details of English learning reports and parent communication process] PLACEHOLDER" },

  // Lead capture
  "lead.title": { bn: "English-এর একটা ফ্রি ক্লাস করে দেখো", en: "Try a free English class" },
  "lead.desc": {
    bn: "English শেখার class level বুঝতে নাম, মোবাইল নম্বর ও ক্লাসের তথ্য দেওয়ার ফর্মটি এখন কেবল UI হিসেবে প্রস্তুত। যোগাযোগ প্রক্রিয়া অনুমোদনের পর সংযুক্ত হবে।",
    en: "This form for sharing your name, mobile number and class info to understand your English level is currently UI-only. A contact process will be connected after approval.",
  },
  "lead.label.name": { bn: "তোমার নাম", en: "Your name" },
  "lead.placeholder.name": { bn: "তোমার নাম লিখো", en: "Type your name" },
  "lead.label.phone": { bn: "মোবাইল নম্বর", en: "Mobile number" },
  "lead.placeholder.phone": { bn: "[ফোন নম্বর] PLACEHOLDER", en: "[Phone number] PLACEHOLDER" },
  "lead.label.class": { bn: "ক্লাস", en: "Class" },
  "lead.placeholder.class": { bn: "ক্লাস বেছে নাও", en: "Choose a class" },
  "lead.class3": { bn: "ক্লাস ৩", en: "Class 3" },
  "lead.class4": { bn: "ক্লাস ৪", en: "Class 4" },
  "lead.class5": { bn: "ক্লাস ৫", en: "Class 5" },
  "lead.class6": { bn: "ক্লাস ৬", en: "Class 6" },
  "lead.class7": { bn: "ক্লাস ৭", en: "Class 7" },
  "lead.class8": { bn: "ক্লাস ৮", en: "Class 8" },
  "lead.class9": { bn: "ক্লাস ৯", en: "Class 9" },
  "lead.class10": { bn: "ক্লাস ১০", en: "Class 10" },
  "lead.ssc": { bn: "এসএসসি পরীক্ষার্থী", en: "SSC examinee" },
  "lead.hsc": { bn: "এইচএসসি পরীক্ষার্থী", en: "HSC examinee" },
  "lead.submit": { bn: "English ফ্রি ক্লাসের জন্য নাম দাও", en: "Register for a free English class" },
  "lead.status": { bn: "[ফর্ম সংযোগ] PLACEHOLDER — জমা দেওয়ার সুবিধা এখনো সক্রিয় নয়।", en: "[Form integration] PLACEHOLDER — submission is not active yet." },
  "lead.help": {
    bn: "নম্বর শুধু ক্লাস সম্পর্কে যোগাযোগের জন্য ব্যবহার করার নীতি প্রযোজ্য হবে। ফর্ম সংযোগের আগে গোপনীয়তা নীতি চূড়ান্ত করা হবে।",
    en: "A policy of using your number only for class-related contact will apply. The privacy policy will be finalised before the form is connected.",
  },

  // Courses page
  "coursespage.title": { bn: "English কোর্স", en: "English courses" },
  "coursespage.lead": {
    bn: "বাংলা মিডিয়ামের শিক্ষার্থীদের জন্য English Grammar, Writing, Reading, Vocabulary ও Board English প্রস্তুতির পরিকল্পনা। চূড়ান্ত কোর্স তালিকা ও মূল্য প্রতিষ্ঠাতার অনুমোদনের পর যোগ হবে।",
    en: "Plans for English Grammar, Writing, Reading, Vocabulary and Board English preparation for Bangla-medium students. The final course list and prices will be added after the founder's approval.",
  },
  "coursespage.filter.nav": { bn: "শ্রেণি ও পরীক্ষার ফিল্টার", en: "Class and exam filters" },
  "coursespage.filter.class": { bn: "ক্লাস", en: "Class" },
  "coursespage.filter.notactive": { bn: "(ফিল্টার W1 — এখনও কার্যকর নয়)", en: "(Filter W1 — not active yet)" },
  "coursespage.filter.exam": { bn: "পরীক্ষা", en: "Exam" },
  "coursespage.list.sr": { bn: "কোর্সের তালিকা", en: "Course list" },
  "coursespage.notice": {
    bn: "নিচের English কোর্স বিভাগগুলো উদাহরণমূলক — চূড়ান্ত class level, syllabus ও মূল্য প্রতিষ্ঠাতার অনুমোদনের পর নির্ধারিত হবে।",
    en: "The English course sections below are examples — the final class level, syllabus and prices will be decided after the founder's approval.",
  },
  "coursespage.bottom.text": { bn: "আগ্রহী? English-এর ফ্রি ক্লাসে যোগ দিয়ে শুরু করো।", en: "Interested? Start by joining a free English class." },
  "coursespage.bottom.cta": { bn: "English ফ্রি ক্লাস বুক করো", en: "Book a free English class" },

  // Course detail
  "coursedetail.crumb.home": { bn: "হোম", en: "Home" },
  "coursedetail.crumb.courses": { bn: "কোর্স", en: "Courses" },
  "coursedetail.crumb.nav": { bn: "ব্রেডক্রাম্ব", en: "Breadcrumb" },
  "coursedetail.aside.label": { bn: "কোর্সের তথ্য ও ভর্তি", en: "Course info and admission" },
  "coursedetail.cover.status": { bn: "উদাহরণমূলক কভার", en: "Example cover" },
  "coursedetail.price": { bn: "মূল্য", en: "Price" },
  "coursedetail.batch": { bn: "ব্যাচ শুরু", en: "Batch starts" },
  "coursedetail.seats": { bn: "আসন", en: "Seats" },
  "coursedetail.schedule": { bn: "শিডিউল", en: "Schedule" },
  "coursedetail.teacher": { bn: "শিক্ষক", en: "Teacher" },
  "coursedetail.cta": { bn: "English ফ্রি ক্লাস বুক করো", en: "Book a free English class" },
  "coursedetail.enroll.note": { bn: "ভর্তি ও পেমেন্ট তথ্য পরে যোগ হবে।", en: "Admission and payment details will be added later." },
  "coursedetail.who.title": { bn: "এই English কোর্সটি কাদের জন্য?", en: "Who is this English course for?" },
  "coursedetail.syllabus.title": { bn: "English syllabus ও module", en: "English syllabus and modules" },
  "coursedetail.faq.title": { bn: "সাধারণ প্রশ্ন", en: "Common questions" },
  "coursedetail.bottom.title": { bn: "আগ্রহী? English-এর ফ্রি ক্লাসে যোগ দাও", en: "Interested? Join a free English class" },
  "coursedetail.bottom.desc": { bn: "ভর্তি ও পেমেন্ট তথ্য প্রতিষ্ঠাতার অনুমোদনের পর যোগ হবে।", en: "Admission and payment details will be added after the founder's approval." },
  "coursedetail.back": { bn: "← সব কোর্স দেখো", en: "← See all courses" },

  // Teacher page
  "teacherpage.breadcrumb.nav": { bn: "ব্রেডক্রাম্ব", en: "Breadcrumb" },
  "teacherpage.breadcrumb.home": { bn: "হোম", en: "Home" },
  "teacherpage.breadcrumb.teacher": { bn: "শিক্ষক", en: "Teacher" },
  "teacherpage.ownerLabel": { bn: "BEST TUTORIAL HOME-এর Owner", en: "Owner of BEST TUTORIAL HOME" },
  "teacherpage.ownerName": { bn: "[শিক্ষকের নাম] PLACEHOLDER", en: "[Teacher name] PLACEHOLDER" },
  "teacherpage.ownerDesc": { bn: "[শিক্ষকের আসল পরিচিতি / পড়ানোর অভিজ্ঞতা যোগ হবে] PLACEHOLDER", en: "[Teacher's real intro / teaching experience to be added] PLACEHOLDER" },
  "teacherpage.ownerNote": { bn: "Owner-এর বিস্তারিত পরিচিতি ও English learning role অনুমোদনের পর যোগ হবে।", en: "The owner's detailed intro and English learning role will be added after approval." },
  "teacherpage.ownerCred": { bn: "[শিক্ষকের আসল ডিগ্রি / অভিজ্ঞতা যোগ হবে] PLACEHOLDER", en: "[Teacher's real degree / experience to be added] PLACEHOLDER" },
  "teacherpage.cta": { bn: "English ফ্রি ক্লাস বুক করো", en: "Book a free English class" },
  "teacherpage.philosophy.title": { bn: "English learning direction", en: "English learning direction" },
  "teacherpage.philosophy.placeholder": {
    bn: "[Grammar, Writing, Reading ও Vocabulary শেখানোর অনুমোদিত direction ও সহায়তা পদ্ধতি] PLACEHOLDER",
    en: "[Approved direction and support approach for teaching Grammar, Writing, Reading and Vocabulary] PLACEHOLDER",
  },
  "teacherpage.philosophy.note": { bn: "অনুমোদিত Owner পরিচয় ও বাস্তব বক্তব্য পাওয়ার পর এই অংশটি হালনাগাদ করা হবে।", en: "This section will be updated once the approved owner identity and real statements are available." },
  "teacherpage.help.title": { bn: "English শিখতে শিক্ষার্থীরা কীভাবে সহায়তা পাবে", en: "How students will get help learning English" },
  "teacherpage.help.note": { bn: "নিচের সেবাগুলোর চূড়ান্ত প্রক্রিয়া প্রতিষ্ঠাতার অনুমোদনের অপেক্ষায়।", en: "The final process of the services below awaits the founder's approval." },
  "teacherpage.help1.title": { bn: "Grammar ও Vocabulary সহায়তা", en: "Grammar and Vocabulary help" },
  "teacherpage.help1.desc": { bn: "[English প্রশ্ন পাঠানো ও উত্তর পাওয়ার পদ্ধতি] PLACEHOLDER", en: "[How to send English questions and get answers] PLACEHOLDER" },
  "teacherpage.help2.title": { bn: "Writing practice", en: "Writing practice" },
  "teacherpage.help2.desc": { bn: "[Writing practice ও feedback পাওয়ার পদ্ধতি] PLACEHOLDER", en: "[How to get writing practice and feedback] PLACEHOLDER" },
  "teacherpage.help3.title": { bn: "Reading ও Board English", en: "Reading and Board English" },
  "teacherpage.help3.desc": { bn: "[Reading ও Board English resource-এর প্রাপ্যতা] PLACEHOLDER", en: "[Availability of Reading and Board English resources] PLACEHOLDER" },
  "teacherpage.video.alt": { bn: "বাস্তব ভিডিও নয়—উদাহরণমূলক শিক্ষক পরিচিতি ভিডিও পোস্টার", en: "Not a real video—example teacher intro video poster" },
  "teacherpage.video.button": { bn: "ভিডিও পরে যোগ হবে", en: "Video coming soon" },
  "teacherpage.video.note": { bn: "উদাহরণমূলক পোস্টার—বাস্তব ভিডিও নিজে থেকে চালু হবে না।", en: "Example poster—a real video will not autoplay." },
  "teacherpage.video.title": { bn: "BEST TUTORIAL HOME-এর Owner-কে জানো", en: "Get to know the owner of BEST TUTORIAL HOME" },
  "teacherpage.video.placeholder": { bn: "[Owner-এর অনুমোদিত পরিচিতি ভিডিও ও ভিডিওর সারসংক্ষেপ] PLACEHOLDER", en: "[Owner's approved intro video and video summary] PLACEHOLDER" },
  "teacherpage.parent.kicker": { bn: "অভিভাবকদের জন্য", en: "For parents" },
  "teacherpage.parent.title": { bn: "English শেখার অগ্রগতি নিয়ে স্বচ্ছ যোগাযোগ", en: "Clear communication about English progress" },
  "teacherpage.parent.placeholder": { bn: "[অভিভাবক রিপোর্ট, যোগাযোগ ও সহায়তার চূড়ান্ত প্রক্রিয়া] PLACEHOLDER", en: "[Final process for parent reports, communication and support] PLACEHOLDER" },
  "teacherpage.parent.cta": { bn: "English ফ্রি ক্লাস সম্পর্কে জানুন", en: "Learn about free English classes" },

  // Legal
  "legal.draft.title": { bn: "এই পাতাটি খসড়া অবস্থায় রয়েছে।", en: "This page is in draft state." },
  "legal.draft.body": {
    bn: "চূড়ান্ত করার আগে প্রতিষ্ঠাতা ও আইনি পরামর্শকের অনুমোদন প্রয়োজন। এটি এখনও আইনগতভাবে কার্যকর নয় এবং শিগগিরই আপডেট হবে।",
    en: "Approval from the founder and a legal adviser is needed before finalising. It is not legally in effect yet and will be updated soon.",
  },
  "legal.badge": { bn: "আইনি নথি", en: "Legal document" },
  "legal.draft.tag": { bn: "খসড়া · প্রকাশের জন্য অনুমোদিত নয়", en: "Draft · not approved for publication" },

  // Privacy
  "privacy.title": { bn: "গোপনীয়তা নীতি", en: "Privacy policy" },
  "privacy.s1": { bn: "নীতির পরিচয়", en: "Identity of the policy" },
  "privacy.s1.p1": { bn: "[আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER", en: "[Legal name] PLACEHOLDER · [Domain] PLACEHOLDER" },
  "privacy.s1.p2": {
    bn: "এটি চূড়ান্ত গোপনীয়তা নীতি নয়। তথ্য নিয়ন্ত্রণকারী প্রতিষ্ঠানের পরিচয় ও কার্যকর হওয়ার তারিখ পরে যোগ হবে।",
    en: "This is not the final privacy policy. The identity of the data-controlling organisation and the effective date will be added later.",
  },
  "privacy.s2": { bn: "ভবিষ্যতে যে তথ্য সংগ্রহ হতে পারে", en: "Data that may be collected in the future" },
  "privacy.s2.p1": {
    bn: "English ফ্রি ক্লাসের লিড ফর্ম সক্রিয় হলে নাম, ফোন নম্বর ও ক্লাসের তথ্য সংগ্রহ করা হতে পারে। বর্তমান W1 ফর্মটি UI-only এবং জমা দেওয়া যায় না।",
    en: "When the English free-class lead form is active, name, phone number and class info may be collected. The current W1 form is UI-only and cannot be submitted.",
  },
  "privacy.s2.p2": { bn: "[ভবিষ্যৎ অথেন্টিকেশন, পেমেন্ট ও কারিগরি তথ্যের তালিকা] PLACEHOLDER", en: "[List of future authentication, payment and technical data] PLACEHOLDER" },
  "privacy.s3": { bn: "তথ্য কীভাবে ব্যবহার হতে পারে", en: "How data may be used" },
  "privacy.s3.p1": { bn: "[ক্লাস সম্পর্কে যোগাযোগ, সেবা প্রদান, নিরাপত্তা ও আইনি ব্যবহারের অনুমোদিত উদ্দেশ্য] PLACEHOLDER", en: "[Approved purposes: class-related contact, service delivery, security and legal use] PLACEHOLDER" },
  "privacy.s4": { bn: "তথ্য সংরক্ষণ ও শেয়ারিং", en: "Data storage and sharing" },
  "privacy.s4.p1": { bn: "[তথ্য সংরক্ষণের সময়, সেবা প্রদানকারী, আইনি শেয়ারিং ও নিরাপত্তা ব্যবস্থা] PLACEHOLDER", en: "[Retention period, service providers, legal sharing and security measures] PLACEHOLDER" },
  "privacy.s5": { bn: "ব্যবহারকারীর অনুরোধ ও অধিকার", en: "User requests and rights" },
  "privacy.s5.p1": { bn: "[তথ্য দেখা, সংশোধন, মুছে ফেলা ও অভিযোগের প্রক্রিয়া] PLACEHOLDER", en: "[Process for viewing, correcting, deleting data and complaints] PLACEHOLDER" },
  "privacy.s5.p2": { bn: "[প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER", en: "[Applicable law / jurisdiction] PLACEHOLDER" },
  "privacy.contact": { bn: "যোগাযোগ", en: "Contact" },
  "privacy.contact.p1": { bn: "[যোগাযোগের ইমেইল] PLACEHOLDER", en: "[Contact email] PLACEHOLDER" },

  // Terms
  "terms.title": { bn: "ব্যবহারের শর্তাবলি", en: "Terms of use" },
  "terms.s1": { bn: "পরিচয় ও প্রযোজ্যতা", en: "Identity and applicability" },
  "terms.s1.p1": { bn: "[আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER", en: "[Legal name] PLACEHOLDER · [Domain] PLACEHOLDER" },
  "terms.s1.p2": {
    bn: "চূড়ান্ত আইনি পরিচয়, ওয়েবসাইট মালিকানা এবং শর্ত কার্যকর হওয়ার তারিখ প্রতিষ্ঠাতা ও আইনি পরামর্শকের অনুমোদনের পর যোগ হবে।",
    en: "The final legal identity, website ownership and the effective date of these terms will be added after the founder and legal adviser approve.",
  },
  "terms.s2": { bn: "ওয়েবসাইট ব্যবহার", en: "Website use" },
  "terms.s2.p1": { bn: "[ওয়েবসাইটের অনুমোদিত ব্যবহার, সীমাবদ্ধতা ও ব্যবহারকারীর যোগ্যতা] PLACEHOLDER", en: "[Permitted website use, limitations and user eligibility] PLACEHOLDER" },
  "terms.s3": { bn: "English কোর্স ও ভর্তি সংক্রান্ত তথ্য", en: "English courses and admission info" },
  "terms.s3.p1": { bn: "[English কোর্সের প্রাপ্যতা, ভর্তি প্রক্রিয়া ও তথ্য পরিবর্তনের নিয়ম] PLACEHOLDER", en: "[Course availability, admission process and rules for changing info] PLACEHOLDER" },
  "terms.s3.p2": {
    bn: "বর্তমান কোর্স, সময়সূচি, মূল্য ও আসনের সব প্রদর্শিত স্থানধারক চূড়ান্ত অনুমোদনের আগে কোনো প্রতিশ্রুতি নয়।",
    en: "All displayed placeholders for courses, schedules, prices and seats are not commitments before final approval.",
  },
  "terms.s4": { bn: "পেমেন্ট শর্ত", en: "Payment terms" },
  "terms.s4.p1": { bn: "[পেমেন্ট পদ্ধতি, মূল্য, চালান ও লেনদেনের শর্ত] PLACEHOLDER", en: "[Payment methods, prices, invoices and transaction terms] PLACEHOLDER" },
  "terms.s4.p2": { bn: "W1-এ পেমেন্ট সক্রিয় নয়। এখানে কোনো পেমেন্ট নিয়ম বা আর্থিক অঙ্গীকার নির্ধারণ করা হয়নি।", en: "Payment is not active in W1. No payment rules or financial commitments are defined here." },
  "terms.s5": { bn: "ব্যবহারকারীর দায়িত্ব", en: "User responsibilities" },
  "terms.s5.p1": { bn: "[সঠিক তথ্য প্রদান, গ্রহণযোগ্য ব্যবহার ও অ্যাকাউন্ট দায়িত্ব] PLACEHOLDER", en: "[Providing accurate info, acceptable use and account responsibility] PLACEHOLDER" },
  "terms.s6": { bn: "সীমাবদ্ধতা ও দায়-অস্বীকার", en: "Limitations and disclaimers" },
  "terms.s6.p1": { bn: "[দায় সীমাবদ্ধতা ও আইনসম্মত দায়-অস্বীকার] PLACEHOLDER", en: "[Liability limits and legal disclaimers] PLACEHOLDER" },
  "terms.s6.p2": { bn: "[প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER", en: "[Applicable law / jurisdiction] PLACEHOLDER" },
  "terms.contact": { bn: "যোগাযোগ", en: "Contact" },
  "terms.contact.p1": { bn: "[যোগাযোগের ইমেইল] PLACEHOLDER", en: "[Contact email] PLACEHOLDER" },

  // Refund
  "refund.title": { bn: "রিফান্ড নীতি", en: "Refund policy" },
  "refund.s1": { bn: "নীতির বর্তমান অবস্থা", en: "Current status of the policy" },
  "refund.s1.p1": {
    bn: "রিফান্ড নীতি এখনো চূড়ান্ত নয়। W1-এ পেমেন্ট ও চেকআউট সক্রিয় নয়, তাই এই পাতাটি কোনো রিফান্ড অধিকার, সময়সীমা বা শর্ত তৈরি করে না।",
    en: "The refund policy is not final yet. Payment and checkout are not active in W1, so this page creates no refund rights, timelines or conditions.",
  },
  "refund.s1.p2": { bn: "[রিফান্ড নীতি] PLACEHOLDER", en: "[Refund policy] PLACEHOLDER" },
  "refund.s2": { bn: "লঞ্চের আগে যা প্রয়োজন", en: "What is needed before launch" },
  "refund.s2.p1": {
    bn: "পেমেন্ট গেটওয়ে অনুমোদন ও অর্থ গ্রহণের আগে প্রতিষ্ঠাতা/ক্লায়েন্টকে লিখিত চূড়ান্ত রিফান্ড নীতি দিতে হবে এবং তা আইনি পরামর্শকের মাধ্যমে পর্যালোচনা করাতে হবে।",
    en: "Before payment gateway approval and accepting money, the founder/client must provide a written final refund policy and have it reviewed by a legal adviser.",
  },
  "refund.s3": { bn: "ভবিষ্যৎ রিফান্ড শর্ত", en: "Future refund conditions" },
  "refund.s3.p1": { bn: "[যোগ্যতা, আবেদন পদ্ধতি, প্রমাণ, প্রক্রিয়াকরণ ও ব্যতিক্রম] PLACEHOLDER", en: "[Eligibility, application process, proof, processing and exceptions] PLACEHOLDER" },
  "refund.s3.p2": {
    bn: "কোনো দিনের সংখ্যা, বাতিলের শর্ত বা ফেরতের নিশ্চয়তা অনুমোদিত তথ্য ছাড়া এখানে যোগ করা হবে না।",
    en: "No day counts, cancellation conditions or refund guarantees will be added here without approved information.",
  },
  "refund.s4": { bn: "আইনি পরিচয়", en: "Legal identity" },
  "refund.s4.p1": { bn: "[আইনি নাম] PLACEHOLDER · [ডোমেইন] PLACEHOLDER", en: "[Legal name] PLACEHOLDER · [Domain] PLACEHOLDER" },
  "refund.s4.p2": { bn: "[প্রযোজ্য আইন/জুরিসডিকশন] PLACEHOLDER", en: "[Applicable law / jurisdiction] PLACEHOLDER" },
  "refund.contact": { bn: "যোগাযোগ", en: "Contact" },
  "refund.contact.p1": { bn: "[যোগাযোগের ইমেইল] PLACEHOLDER", en: "[Contact email] PLACEHOLDER" },
} as const satisfies Record<string, Entry>;

export type DictionaryKey = keyof typeof defs;

export const dictionary: Record<DictionaryKey, Entry> = defs;
