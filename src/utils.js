import { nanoid } from 'nanoid';
import axios from 'axios';

let productionUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:7000/api'
    : 'https://weldcentral.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const list = [
  {
    id: nanoid(),
    image: '/hero-img-1.jpg',
    name: 'Read more',
    title: 'Forge Your Future: Explore Precision Welding Tools',
    quote:
      'Emphasizes the idea of growth and advancement in welding skills through the use of high-quality, precise tools.',
    link1: '/about',
  },
  {
    id: nanoid(),
    image: '/hero-img-2.jpg',
    name: 'Read more',
    title:
      'Craftsmanship Redefined: Quality Welding Equipment at Your Fingertips',
    quote:
      'Highlights the focus on top-notch welding equipment that enhances craftsmanship and attention to detail.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-3.jpg',
    name: 'Read more',
    title: 'Spark Your Creativity: Discover Innovative Welding Solutions',
    quote:
      'Encourages creativity and innovation in welding projects by introducing new and inventive solutions.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-4.jpg',
    name: 'Read more',
    title: 'Ignite Your Skills: Unleash the Power of Precision Welding',
    quote:
      'Encourages users to enhance their welding skills by utilizing tools that provide precision and accuracy.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-5.jpg',
    name: 'Read more',
    title: 'Weld with Confidence: Trusted Tools for Every Project',
    quote:
      'Instills confidence in users by offering reliable and trusted tools suitable for a wide range of welding projects.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-6.jpg',
    name: 'Read more',
    title: 'Precision Meets Passion: Elevate Your Welding Experience',
    quote:
      'Combines the precision of tools with the passion for welding, promising an elevated and fulfilling welding experience.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-7.jpg',
    name: 'Read more',
    title: 'Explore, Weld, Create: Your Journey Starts Here',
    quote:
      'Invites users to embark on a journey of exploration, welding, and creation with the resources and tools available on the website.',
    link1: '/services',
  },
  {
    id: nanoid(),
    image: '/hero-img-9.jpg',
    name: 'Read more',
    title: 'Empower Your Craft: Quality Tools for Every Welding Task',
    quote:
      'Focuses on empowering users to excel in their craft by providing quality tools that cater to every welding task they may encounter.',
    link1: '/services',
  },
];

export const services = [
  {
    id: nanoid(),
    image: '/hero-img-1.jpg',
    title: 'Finishing and Coating',
    text: 'Applying protective coatings or paint to welded metal to prevent corrosion and enhance appearance.',
  },
  {
    id: nanoid(),
    image: '/hero-img-2.jpg',
    title: 'On-Site Services',
    text: "Providing welding services at the customer’s location, useful for large or heavy equipment that can't be moved.",
  },
  {
    id: nanoid(),
    image: '/hero-img-3.jpg',
    title: 'Consultation and Design',
    text: 'Offering expertise on welding techniques and materials for specific projects.',
  },
  {
    id: nanoid(),
    image: '/hero-img-4.jpg',
    title: 'Metal Fabrication',
    text: 'Designing and fabricating metal structures or components based on specific requirements.',
  },
  {
    id: nanoid(),
    image: '/hero-img-5.jpg',
    title: 'Welding Services',
    text: 'Including MIG (Metal Inert Gas) and TIG (Tungsten Inert Gas) welding for various metals.',
  },
  {
    id: nanoid(),
    image: '/hero-img-6.jpg',
    title: 'Repair and Maintenance',
    text: 'Fixing damaged metal structures such as beams, frames, and supports.',
  },
];

export const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'decoratives',
    price: 15.99,
    img: '/01.jpg',
    desc: `Artistic Welded Creations `,
    text: 'Elevate your space with our Artistic Welded Creations. This decorative category blends functionality with aesthetic appeal, offering custom-designed metalwork that transforms everyday items into unique art pieces. From intricate sculptures and decorative gates to bespoke furniture and striking wall art, our expert welders bring creativity and craftsmanship to every project. Whether you’re looking for a statement piece or elegant accents, our artistic welded creations add a touch of sophistication and individuality to any setting.',
    name: 'project-1',
  },
  {
    id: 2,
    title: 'diner double',
    category: 'facades',
    price: 13.99,
    img: '/02.jpg',
    desc: `Architectural Facades & Metal Cladding`,
    text: "Redefine your building's exterior with our Architectural Facades & Metal Cladding services. Specializing in custom metal solutions, we provide high-quality, aesthetically pleasing facades that enhance both the functionality and visual appeal of any structure. Our skilled welders design and install tailored metal cladding, panels, and decorative elements that offer durability, weather resistance, and a modern look. Whether for commercial or residential projects, our metal facades not only protect but also transform your building with a distinctive, polished finish. Elevate your architecture with our expertly crafted metal facades and cladding solutions.",
    name: 'project-2',
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'perforated',
    price: 6.99,
    img: '/03.jpg',
    desc: ` Precision Perforated Welding`,
    text: 'Discover the perfect blend of function and form with our precision perforated welding services. Ideal for applications ranging from ventilation systems to decorative elements, our perforated panels are meticulously crafted to meet your specific requirements. Using advanced techniques and high-quality materials, we create perforated solutions that enhance airflow, reduce noise, and add a distinct visual touch to your projects. Whether you need custom patterns for architectural features or robust perforations for industrial use, our skilled welders deliver exceptional results with attention to detail and durability.',
    name: 'project-3',
  },
  {
    id: 4,
    title: 'country delight',
    category: 'railings',
    price: 20.99,
    img: '/04.jpg',
    desc: `Custom Welding Railings: Strength and Style for Your Space`,
    text: "Elevate the safety and aesthetics of your property with our custom welding railings. Whether you're looking for elegant designs for your home’s balcony or robust solutions for commercial applications, our expert welders craft railings that blend durability with visual appeal. From intricate ornamental patterns to heavy-duty industrial styles, we ensure each project meets your specific needs and exceeds industry standards. Transform your space with railings that offer both functionality and flair, tailored perfectly to your design vision.",
    name: 'project-4',
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'decoratives',
    price: 22.99,
    img: '/05.jpg',
    desc: `Bespoke Metal Decor & Artistic Installations`,
    text: 'Unveil the potential of your space with our Bespoke Metal Decor & Artistic Installations. We specialize in crafting custom metalwork that transforms ordinary environments into extraordinary showcases of design. From striking indoor sculptures and elegant architectural elements to custom outdoor art and functional décor, our expert welders merge innovation with craftsmanship to deliver unique, tailored pieces that enhance any setting. Embrace the beauty and durability of personalized metal decor and make a bold statement with our artistic welding solutions.',
    name: 'project-5',
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'facades',
    price: 18.99,
    img: '/06.jpg',
    desc: `Custom Metal Facades & Architectural Enhancements`,
    text: "Transform your building's exterior with our Custom Metal Facades & Architectural Enhancements. We specialize in creating striking metal facades that combine durability with cutting-edge design. From sleek, modern cladding to intricate architectural details, our expert welders craft customized solutions that enhance the visual appeal and performance of your structure. Our metal facades offer not only superior protection against the elements but also a unique aesthetic that sets your building apart. Discover how our bespoke metalwork can elevate your architecture and make a lasting impression.",
    name: 'project-6',
  },
  {
    id: 7,
    title: 'oreo dream',
    category: 'perforated',
    price: 18.99,
    img: '/07.jpg',
    desc: `Bespoke Perforated Metal Solutions`,
    text: 'Unlock a world of design possibilities and practical benefits with our bespoke perforated metal welding services. Perfect for creating custom ventilation systems, eye-catching facades, or functional partitions, our perforated metal products are crafted to your exact specifications. Our expert welders utilize state-of-the-art technology to ensure precise perforation patterns that meet both aesthetic and performance standards. From enhancing airflow and light diffusion to adding unique visual elements to your space, our perforated metal solutions combine innovation with reliability, tailored to elevate any project.',
    name: 'project-6',
  },
  {
    id: 8,
    title: 'oreo dream',
    category: 'railings',
    price: 18.99,
    img: '/08.jpg',
    desc: `Elegant Metal Railings & Custom Fabrications`,
    text: 'Elevate your space with our Elegant Metal Railings & Custom Fabrications. We specialize in designing and crafting bespoke railings that merge functionality with refined artistry. Whether you’re looking for sleek contemporary designs, classic wrought iron patterns, or unique custom features, our expert welders create durable and stylish railings tailored to your specifications. Perfect for stairs, balconies, and outdoor spaces, our railings not only ensure safety but also enhance the aesthetic appeal of your environment with exceptional craftsmanship and attention to detail.',
    name: 'project-6',
  },
  {
    id: 9,
    title: 'oreo dream',
    category: 'decoratives',
    price: 18.99,
    img: '/09.jpg',
    desc: `Custom Metal Art & Ornamental Designs`,
    text: 'Discover the allure of our Custom Metal Art & Ornamental Designs, where creativity and craftsmanship come together. We offer personalized welding services that produce exquisite metal pieces to elevate any space. From elaborate wall art and bespoke garden features to intricate railings and unique furnishings, our expert welders transform raw metal into stunning works of art. Each project is tailored to your vision, ensuring that every piece not only complements your décor but also stands as a testament to exceptional design and durability.',
    name: 'project-6',
  },
  {
    id: 10,
    title: 'oreo dream',
    category: 'facades',
    price: 18.99,
    img: '/10.jpg',
    desc: `Premium Metal Facades & Architectural Panels`,
    text: 'Elevate your building’s exterior with our Premium Metal Facades & Architectural Panels. We specialize in delivering high-quality, custom-designed metal solutions that enhance both the style and functionality of your structure. Our experienced team offers a range of options, from sleek modern panels to ornate decorative facades, ensuring a perfect fit for any architectural vision. With an emphasis on durability and visual impact, our metal facades provide robust protection and a sophisticated finish. Transform your building with our expertly crafted metal panels and make a statement with every glance.',
    name: 'project-6',
  },
  {
    id: 11,
    title: 'oreo dream',
    category: 'perforated',
    price: 18.99,
    img: '/11.jpg',
    desc: 'Custom Perforated Metal Welding Services',
    text: 'Elevate your projects with our Custom Perforated Metal Welding Services, where precision meets innovation. Our skilled technicians specialize in creating perforated metal structures that combine both strength and style. We offer bespoke solutions for a variety of applications, from architectural facades to industrial components. With a focus on accuracy and durability, we use state-of-the-art equipment and techniques to ensure flawless results. Whether you need intricate designs or large-scale perforated panels, our team is dedicated to delivering exceptional quality and customized service to meet your unique needs.',
    name: 'project-6',
  },
  {
    id: 12,
    title: 'oreo dream',
    category: 'railings',
    price: 18.99,
    img: '/12.jpg',
    desc: `Custom Railings & Ornamental Designs`,
    text: 'Enhance your space with our Custom Railings & Ornamental Designs, where function meets elegance. We specialize in crafting high-quality, bespoke railings that combine safety with stunning design. From sleek modern balustrades and intricate wrought iron designs to custom stair railings and elegant balcony guards, our skilled welders tailor each piece to match your style and needs. Our railings not only provide essential support and security but also add a touch of sophistication and artistry to any interior or exterior setting. Discover the perfect blend of durability and aesthetic appeal with our custom railing solutions.',
    name: 'project-6',
  },
];

export const team = [
  {
    id: 1,
    name: 'Nicholas Putnam',
    title: 'controller',
    img: '/team1.jpg',
    text: 'A seasoned welder with over a decade of experience, combines technical skill with a passion for precision.',
    link: '/',
    profile: [
      {
        id: 'recAGJfiU4CeaV0HL',
        order: 3,
        title: 'Biography',
        dates: 'December 2015 - Present',
        duties: [
          'A seasoned welder with over a decade of experience, combines technical skill with a passion for precision.',
          "From high-rise construction projects to intricate metal art, Nicholas's expertise spans a diverse array of welding techniques and materials.",
          'Known for his meticulous attention to detail and unwavering commitment to safety, he consistently delivers exceptional results.',
          'His dedication to his craft and his ability to adapt to complex challenges make him a valued team member and a trusted professional in the field.',
          'When Nicholas isn’t welding, he’s often sharing his knowledge with aspiring welders or exploring new advancements in welding technology.',
        ],
        company: 'BIOGRAPHY',
      },
      {
        id: 'recIL6mJNfWObonls',
        order: 2,
        title: 'Skills',
        dates: 'May 2015 - December 2015',
        duties: [
          'Technical Proficiency: Understanding various welding techniques and processes such as MIG, TIG, Stick, and flux-cored welding.',
          'Metalworking Skills: Knowledge of different metals and their properties, including steel, aluminum, and stainless steel.',
          'Blueprint Reading: Ability to read and interpret blueprints, schematics, and technical drawings to understand project requirements.',
          'Precision and Accuracy: Skills to ensure welds are clean, accurate, and meet specified dimensions and standards.',
          'Safety Awareness: Knowledge of and adherence to safety protocols to prevent accidents and handle equipment safely.',
          'Equipment Maintenance: Ability to maintain and troubleshoot welding equipment to ensure optimal performance.',
          'Hand-Eye Coordination: Good coordination for controlling the welding torch or electrode and ensuring precise welds.',
          'Problem-Solving: Capability to identify issues and find solutions, whether in welding techniques or material handling.',
          'Physical Stamina: The job often involves standing for long periods, lifting heavy materials, and working in various positions.',
          'Attention to Detail: Focus on the quality of the work, ensuring that welds are strong and free from defects.',
        ],
        company: 'SKILLS',
      },
      {
        id: 'rec61x18GVY99hQq5',
        order: 1,
        title: 'Contact',
        dates: 'May 2014 - September 2015',
        duties: ['Email: nicholas@gmail.com', 'Phone: +1 3344 345 3455'],
        company: 'CONTACT',
      },
    ],
  },
  {
    id: 2,
    name: 'Richard Williams',
    title: 'Welder',
    img: '/team2.jpg',
    text: 'A dynamic welder with over eight years of hands-on experience in the field, renowned for her innovative approach and exceptional skill.',
    link: '/',
    profile: [
      {
        id: 'recAGJfiU4CeaV0HL',
        order: 3,
        title: 'Biography',
        dates: 'December 2015 - Present',
        duties: [
          'A dynamic welder with over eight years of hands-on experience in the field, renowned for his innovative approach and exceptional skill.',
          "Specializing in both MIG and TIG welding, Richard's excels in delivering flawless results on everything from automotive repairs to large-scale industrial projects.",
          'His meticulous craftsmanship and commitment to quality have earned him recognition as a reliable and creative problem-solver.',
          'Passionate about his trade, Richard constantly seeks to refine his techniques and embrace new technologies, making him a standout in the welding community and a crucial asset to any team he joins.',
        ],
        company: 'BIOGRAPHY',
      },
      {
        id: 'recIL6mJNfWObonls',
        order: 2,
        title: 'Skills',
        dates: 'May 2015 - December 2015',
        duties: [
          'Patience and Concentration: Patience to work on intricate tasks and concentration to avoid mistakes during the welding process.',
          'Adaptability: Flexibility to work on different types of projects and with varying materials and techniques.',
          'Communication Skills: Ability to communicate effectively with team members, supervisors, and clients regarding project specifications and issues.',
          'Mathematical Skills: Basic math skills for measuring, calculating angles, and determining material quantities.',
          'Attention to Detail: Focus on the quality of the work, ensuring that welds are strong and free from defects.',
        ],
        company: 'SKILLS',
      },
      {
        id: 'rec61x18GVY99hQq5',
        order: 1,
        title: 'Contact',
        dates: 'May 2014 - September 2015',
        duties: ['Email: richardwilliams@gmail.com', 'Phone: +1 345 345 3456'],
        company: 'CONTACT',
      },
    ],
  },
  {
    id: 3,
    name: 'David Blankenship',
    title: 'Locksmith',
    img: '/team3.jpg',
    text: 'A highly skilled welder with over 15 years of experience in the trade, known for his expertise in both structural and pipe welding.',
    link: '/',
    profile: [
      {
        id: 'recAGJfiU4CeaV0HL',
        order: 3,
        title: 'Biography',
        dates: 'December 2015 - Present',
        duties: [
          'A highly skilled welder with over 15 years of experience in the trade, known for his expertise in both structural and pipe welding.',
          'His hands-on approach and deep understanding of various welding processes make him adept at handling complex projects with precision.',
          "David's reputation for reliability and craftsmanship is matched by his dedication to safety and continuous improvement.",
          'Outside of work, he enjoys mentoring younger welders, sharing his extensive knowledge, and staying updated with the latest industry advancements, reflecting his passion for both the craft and the community.',
        ],
        company: 'BIOGRAPHY',
      },
      {
        id: 'recIL6mJNfWObonls',
        order: 2,
        title: 'Skills',
        dates: 'May 2015 - December 2015',
        duties: [
          'Heat Management: The ability to control and manage the heat generated during welding to avoid warping or damaging the materials being welded. This includes understanding heat settings and cooling methods to ensure high-quality welds and structural integrity.',
          'Mathematical Skills: Basic math skills for measuring, calculating angles, and determining material quantities.',
          'Communication Skills: Ability to communicate effectively with team members, supervisors, and clients regarding project specifications and issues.',
          'Adaptability: Flexibility to work on different types of projects and with varying materials and techniques.',
        ],
        company: 'SKILLS',
      },
      {
        id: 'rec61x18GVY99hQq5',
        order: 1,
        title: 'Contact',
        dates: 'May 2014 - September 2015',
        duties: ['Email: davidblankenship@gmail.com', 'Phone: +1 356 3556 366'],
        company: 'CONTACT',
      },
    ],
  },
];

export const blog = [
  {
    id: 1,
    featured: true,
    name: 'Richard Williams',
    category: 'Welding Techniques',
    title:
      'The Ultimate Guide to MIG vs. TIG Welding: Choosing the Right Technique for Your Project',
    img: '/blog1.jpg',
    text: 'Compare and contrast MIG and TIG welding, highlighting their unique benefits, applications, and when each technique is most effective.',
    desc: '<p>When selecting a welding technique, understanding the key differences between MIG (Metal Inert Gas) and TIG (Tungsten Inert Gas) welding is crucial for achieving the best results. MIG welding, also known as Gas Metal Arc Welding (GMAW), is celebrated for its ease of use and speed. It feeds a continuous wire electrode through a welding gun, making it ideal for larger, less intricate projects and various metals, including steel and aluminum. On the other hand, TIG welding, or Gas Tungsten Arc Welding (GTAW), offers unparalleled precision and control by using a non-consumable tungsten electrode and a separate filler rod. This method is perfect for delicate work and materials like stainless steel and aluminum. While MIG welding excels in speed and versatility, TIG welding stands out for its clean, high-quality welds. Choosing between them depends on your projects material, complexity, and required precision.</p>',
    link: '/',
  },
  {
    id: 2,
    name: 'Nicholas Putnam',
    featured: true,
    category: ' Safety Practices',
    title: 'Top 10 Essential Safety Tips Every Welder Should Know',
    img: '/blog2.jpg',
    text: 'Explore critical safety practices and precautions for welders, including proper gear, workspace management, and hazard awareness to prevent accidents and injuries.',
    desc: '<p>Welding, while rewarding, poses several safety risks that require vigilance. Here are the top 10 safety tips every welder should follow:</p><ol><li><strong>Wear Protective Gear:</strong> Always use a welding helmet, gloves, and appropriate clothing to shield against UV radiation and heat.</li><li><strong>Ensure Adequate Ventilation:</strong> Work in well-ventilated areas or use exhaust systems to prevent exposure to harmful fumes.</li><li><strong>Inspect Equipment:</strong> Regularly check your welding gear for any damage or wear to prevent malfunctions.</li><li><strong>Maintain a Clean Workspace:</strong> Keep your work area free from flammable materials and clutter to minimize fire risks.</li><li><strong>Use Proper Techniques:</strong> Follow the correct welding procedures for your materials to avoid accidents and ensure strong welds.</li><li><strong>Stay Hydrated and Rested:</strong> Adequate hydration and rest are essential for maintaining focus and avoiding fatigue.</li><li><strong>Know Emergency Procedures:</strong> Familiarize yourself with first aid and emergency procedures for welding-related injuries.</li><li><strong>Handle Gas Cylinders Safely:</strong> Store and handle gas cylinders correctly to prevent leaks and accidents.</li><li><strong>Avoid Working Alone:</strong> Work with a partner or ensure someone knows your whereabouts for safety.</li><li><strong>Engage in Regular Training:</strong> Keep up-to-date with safety practices through ongoing training and education.</li></ol><p>By adhering to these practices, you can significantly reduce the risk of accidents and ensure a safer welding environment.</p>',
    link: '/',
  },
  {
    id: 3,
    name: 'David Blankenship',
    featured: true,
    category: 'Equipment Reviews',
    title: 'The Best Welding Helmets of 2024: A Comprehensive Review',
    img: '/blog3.jpg',
    text: 'Review and compare the latest welding helmets on the market, focusing on features, comfort, and protection to help readers make informed purchasing decisions.',
    desc: '<p>Choosing the right welding helmet is crucial for safety and comfort. Here are some of the best welding helmets of 2024:</p><ol><li><strong>Lincoln Electric VIKING 3350:</strong> Known for its exceptional clarity and wide viewing area, this helmet offers True Color technology and adjustable settings for superior protection and visibility.</li><li><strong>Miller Electric Digital Infinity:</strong> Features a high-definition auto-darkening lens and customizable settings, making it suitable for various welding processes.</li><li><strong>3M Speedglas 9100XXi:</strong> Offers durability and comfort with its auto-darkening filter and adjustable headgear, providing a clear and distortion-free view.</li><li><strong>ESAB Sentinel A50:</strong> Combines a sleek design with advanced features, including a high-definition auto-darkening filter and grind mode for diverse welding tasks.</li><li><strong>Jackson Safety Insight:</strong> Balances affordability with performance, featuring a variable shade range and adjustable headgear for comfort and protection.</li></ol><p>These helmets provide essential features such as auto-darkening lenses, comfort, and durability, helping welders achieve optimal performance and safety.</p>',
    link: '/',
  },
];

export const profile = [
  {
    id: 'recAGJfiU4CeaV0HL',
    order: 3,
    title: 'Nicholas',
    dates: 'December 2015 - Present',
    duties: [
      "A seasoned welder with over a decade of experience, combines technical skill with a passion for precision. From high-rise construction projects to intricate metal art, Jake's expertise spans a diverse array of welding techniques and materials. Known for his meticulous attention to detail and unwavering commitment to safety, he consistently delivers exceptional results. His dedication to his craft and his ability to adapt to complex challenges make him a valued team member and a trusted professional in the field. When Jake isn’t welding, he’s often sharing his knowledge with aspiring welders or exploring new advancements in welding technology.",
    ],
    company: 'BIOGRAPHY',
  },
  {
    id: 'recIL6mJNfWObonls',
    order: 2,
    title: 'Consultant',
    dates: 'May 2015 - December 2015',
    duties: [
      'Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.',
      'Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
    ],
    company: 'SKILLS',
  },
  {
    id: 'rec61x18GVY99hQq5',
    order: 1,
    title: 'Engineering Intern',
    dates: 'May 2014 - September 2015',
    duties: [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      'YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.',
      'Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.',
    ],
    company: 'SEND',
  },
];
