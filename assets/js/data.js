/* Demo catalog data - course titles and lecturers taken from smartacademy.ge, prices/dates/durations are placeholders */
window.SA = window.SA || {};
SA.categories = [
  {id:"ai",name:"AI",sub:"ხელოვნური ინტელექტი",color:"#8B6CEF",bg:"#F1EDFE",icon:"spark"},
  {id:"it",name:"IT & Development",sub:"პროგრამირება, QA, Data",color:"#0592AB",bg:"#E6F6F9",icon:"code"},
  {id:"design",name:"დიზაინი",sub:"UX/UI, გრაფიკა, 3D",color:"#FF6B5B",bg:"#FFEEEC",icon:"pen"},
  {id:"management",name:"მენეჯმენტი",sub:"HR, პროექტები, ფინანსები",color:"#F4B23E",bg:"#FEF5E4",icon:"chart"},
  {id:"marketing",name:"მარკეტინგი",sub:"SMM, ციფრული, PR",color:"#3DBE6C",bg:"#E8F7EE",icon:"mega"},
  {id:"business",name:"ბიზნესისთვის",sub:"კორპორატიული სწავლება",color:"#4A78F0",bg:"#EAF0FE",icon:"brief"}
];
SA.courses = [
  {id:1,cat:"it",ka:"Front-End Development with React.js",en:"Front-End Development with React.js",lect:["ლუკა ბაბუნაძე"],format:"offline",weeks:16,start:"14 ოქტ",price:1450,level:"დამწყები",glyph:"</>",hot:true},
  {id:2,cat:"it",ka:"Front-End Development & SEO with React JS",en:"Front-End Development & SEO with React JS",lect:["ალინა ბრეგვაძე","რატი გველესიანი","ლუკა ბაბუნაძე"],format:"offline",weeks:20,start:"21 ოქტ",price:1790,level:"დამწყები",glyph:"SEO"},
  {id:3,cat:"it",ka:"Back-End Development with Python",en:"Back-End Development with Python",lect:["ცოტნე მაჭარაშვილი"],format:"online",weeks:16,start:"17 ოქტ",price:1390,level:"საშუალო",glyph:"Py"},
  {id:4,cat:"ai",ka:"AI - ხელოვნური ინტელექტის კურსი პრაქტიკაში",en:"AI - Artificial Intelligence Course in Practice",lect:["გიორგი ბასილაია"],format:"offline",weeks:6,start:"09 ოქტ",price:690,level:"ყველასთვის",glyph:"AI",hot:true},
  {id:5,cat:"ai",ka:"AI ასისტენტები, აგენტები და No-Code ავტომატიზაცია",en:"AI Assistants, Agents and No-Code Automation",lect:["გიორგი ბასილაია"],format:"online",weeks:5,start:"28 ოქტ",price:590,level:"საშუალო",glyph:"⚡",isNew:true},
  {id:6,cat:"design",ka:"UX/UI დიზაინის კურსი",en:"UX/UI Design Course",lect:["დავით კოხრეიძე"],format:"offline",weeks:12,start:"16 ოქტ",price:1290,level:"დამწყები",glyph:"UX",hot:true},
  {id:7,cat:"design",ka:"გრაფიკული დიზაინის კურსი",en:"Graphic Design - Photoshop, Illustrator, InDesign",lect:["სალი ძანაშვილი"],format:"offline",weeks:10,start:"12 ოქტ",price:990,level:"დამწყები",glyph:"Aa"},
  {id:8,cat:"design",ka:"არტ დაირექშენის კურსი",en:"Art Direction Course",lect:["ანნა გუგუტიშვილი"],format:"offline",weeks:8,start:"03 ნოე",price:1100,level:"საშუალო",glyph:"AD"},
  {id:9,cat:"design",ka:"3D გრაფიკა - Blender-ის კურსი",en:"3D Graphics - Blender Course",lect:["გელა პატარაია"],format:"offline",weeks:10,start:"20 ოქტ",price:1050,level:"დამწყები",glyph:"3D"},
  {id:10,cat:"design",ka:"Motion Design - After Effects",en:"Motion Design - After Effects",lect:["ლევან ზაზარაშვილი"],format:"online",weeks:8,start:"25 ოქტ",price:890,level:"საშუალო",glyph:"Ae"},
  {id:11,cat:"design",ka:"ინტერიერის დიზაინი და 3D ვიზუალიზაცია",en:"Interior Design and 3D Visualization",lect:["სოფიო შეწირული","დაჩი ხაზალია"],format:"offline",weeks:14,start:"06 ნოე",price:1490,level:"დამწყები",glyph:"◰"},
  {id:12,cat:"marketing",ka:"სოციალური მედია მარკეტინგის კურსი",en:"Social Media Marketing Course",lect:["ნათია ზარნაძე"],format:"offline",weeks:6,start:"08 ოქტ",price:650,level:"დამწყები",glyph:"SMM"},
  {id:13,cat:"marketing",ka:"ციფრული მარკეტინგის კურსი",en:"Digital Marketing - Google Ads, Analytics, Meta Ads",lect:["თიო ზარნაძე"],format:"online",weeks:8,start:"15 ოქტ",price:850,level:"საშუალო",glyph:"Ads"},
  {id:14,cat:"marketing",ka:"PR, Event Branding & Management",en:"PR, Event Branding & Management",lect:["ნინო წითლანაძე","გიორგი თაქთაქიშვილი"],format:"offline",weeks:6,start:"22 ოქტ",price:720,level:"ყველასთვის",glyph:"PR"},
  {id:15,cat:"marketing",ka:"მარკეტინგის მენეჯმენტი",en:"Marketing Management",lect:["ანა გელაშვილი"],format:"offline",weeks:8,start:"30 ოქტ",price:890,level:"გამოცდილი",glyph:"MM"},
  {id:16,cat:"it",ka:"პროგრამული უზრუნველყოფის ხარისხის ინჟინერია",en:"Software Quality Engineering - Manual & Automation",lect:["თაკო აბრამაშვილი"],format:"offline",weeks:14,start:"13 ოქტ",price:1250,level:"დამწყები",glyph:"QA"},
  {id:17,cat:"it",ka:"Data Analytics & BI Development",en:"Data Analytics & BI Development (SQL & Power BI)",lect:["გეგა ჯღარკავა"],format:"online",weeks:10,start:"19 ოქტ",price:1150,level:"საშუალო",glyph:"BI",isNew:true},
  {id:18,cat:"it",ka:"IT ბიზნეს ანალიზის კურსი",en:"IT Business Analysis",lect:["ციცი აბჟანდაძე"],format:"offline",weeks:8,start:"27 ოქტ",price:950,level:"დამწყები",glyph:"BA"},
  {id:19,cat:"management",ka:"HR მენეჯმენტი პრაქტიკაში",en:"HR Management in Practice",lect:["ლიკა კოვზირიძე","სოფიო კაჭარავა"],format:"offline",weeks:10,start:"10 ოქტ",price:980,level:"ყველასთვის",glyph:"HR"},
  {id:20,cat:"management",ka:"IT პროექტების მართვა და Agile ფასილიტაცია",en:"IT Project Management and Agile Team Facilitation",lect:["ნინო ძამაშვილი"],format:"online",weeks:8,start:"18 ოქტ",price:890,level:"საშუალო",glyph:"PM"},
  {id:21,cat:"management",ka:"პროექტების მართვა - PMP",en:"Project Management - PMP Exam Preparation",lect:["მერი ჯანგავაძე"],format:"online",weeks:8,start:"04 ნოე",price:990,level:"გამოცდილი",glyph:"PMP"},
  {id:22,cat:"management",ka:"Microsoft Excel: საბაზისოდან მონაცემთა ანალიზამდე",en:"Microsoft Excel: From Basics to Data Analysis",lect:["თეიმურაზ სულუაშვილი","სოფიო კაჭარავა"],format:"online",weeks:6,start:"11 ოქტ",price:450,level:"დამწყები",glyph:"XL"},
  {id:23,cat:"management",ka:"ფინანსების მენეჯმენტის კურსი",en:"Financial Management for SMEs",lect:["დავით ხაჩიძე"],format:"offline",weeks:8,start:"23 ოქტ",price:920,level:"საშუალო",glyph:"₾"},
  {id:24,cat:"business",ka:"გუნდის მართვის პრაქტიკული კურსი",en:"Practical Team Management for Mid-Level Managers",lect:["ლიკა კოვზირიძე","ოლგა ნებიერიძე"],format:"offline",weeks:6,start:"29 ოქტ",price:890,level:"გამოცდილი",glyph:"TM"},
  {id:25,cat:"business",ka:"კრიზისული კომუნიკაციების მართვა",en:"Practical Crisis Communications Management",lect:["გიორგი კალატოზიშვილი"],format:"offline",weeks:4,start:"05 ნოე",price:640,level:"გამოცდილი",glyph:"CC"},
  {id:26,cat:"business",ka:"L&D - ორგანიზაციული სწავლება და განვითარება",en:"L&D - Organizational Learning and Development",lect:["სოფო კიკუაშვილი"],format:"online",weeks:6,start:"12 ნოე",price:760,level:"საშუალო",glyph:"L&D",isNew:true}
];
SA.lecturers = [
  {name:"გიორგი ბასილაია",role:"AI სტრატეგი, ავტომატიზაციის ექსპერტი",tag:"AI",color:"#8B6CEF"},
  {name:"დავით კოხრეიძე",role:"Lead Product Designer",tag:"UX/UI",color:"#FF6B5B"},
  {name:"ლიკა კოვზირიძე",role:"HR დირექტორი, მენტორი",tag:"HR",color:"#F4B23E"},
  {name:"ლუკა ბაბუნაძე",role:"Senior Front-End Engineer",tag:"React",color:"#0592AB"}
];
