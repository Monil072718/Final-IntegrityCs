export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: {
    name: string
    title: string
    image: string
  }
  category: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Innovations in Structural Engineering",
    excerpt:
      "Exploring cutting-edge techniques and materials revolutionizing structural engineering in modern construction.",
    content: `
      <p>Structural engineering has seen remarkable innovations in recent years, transforming how we design and construct buildings and infrastructure. This article explores some of the most significant advancements that are reshaping the field.</p>
      
      <h2>Advanced Computational Design</h2>
      <p>Computational design tools have revolutionized structural engineering, allowing for more complex and efficient structures than ever before. Parametric modeling and generative design algorithms can now optimize structures for multiple variables simultaneously, including material usage, load distribution, and construction feasibility.</p>
      
      <h2>High-Performance Materials</h2>
      <p>The development of ultra-high-performance concrete, carbon fiber composites, and engineered timber is expanding the possibilities for structural design. These materials offer superior strength-to-weight ratios, durability, and sustainability compared to traditional options.</p>
      
      <h2>Seismic Resilience</h2>
      <p>Innovations in seismic design include base isolation systems, tuned mass dampers, and self-centering structures that can withstand major earthquakes with minimal damage. These technologies are particularly important as urban development continues in seismically active regions.</p>
      
      <h2>3D Printing in Construction</h2>
      <p>Large-scale 3D printing is beginning to transform structural engineering, allowing for the creation of complex geometries that would be impossible or prohibitively expensive using traditional construction methods. This technology reduces material waste and can significantly speed up construction timelines.</p>
      
      <h2>Conclusion</h2>
      <p>The field of structural engineering continues to evolve rapidly, driven by technological advancements and the need for more sustainable, resilient structures. As these innovations mature and become more widely adopted, we can expect to see increasingly sophisticated and efficient buildings and infrastructure projects around the world.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "May 15, 2023",
    author: {
      name: "John Smith",
      title: "Senior Structural Engineer",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Structural Engineering",
    tags: ["Structural Engineering", "Innovation", "Construction Technology", "Materials Science"],
  },
  {
    id: 2,
    title: "Sustainable Infrastructure Development",
    excerpt: "How civil engineers are incorporating eco-friendly practices and materials in infrastructure projects.",
    content: `
      <p>Sustainable infrastructure development has become a critical focus in civil engineering as we face increasing environmental challenges. This article explores how engineers are incorporating eco-friendly practices and materials to create more sustainable infrastructure projects.</p>
      
      <h2>Green Materials and Construction Methods</h2>
      <p>Engineers are increasingly turning to sustainable materials such as recycled concrete, bamboo reinforcement, and low-carbon cement alternatives. These materials significantly reduce the environmental impact of construction while maintaining structural integrity and performance.</p>
      
      <h2>Water Management Systems</h2>
      <p>Sustainable infrastructure includes innovative water management solutions such as permeable pavements, bioswales, and rainwater harvesting systems. These approaches help manage stormwater runoff, reduce flooding, and replenish groundwater supplies.</p>
      
      <h2>Renewable Energy Integration</h2>
      <p>Modern infrastructure projects increasingly incorporate renewable energy generation, from solar panels on noise barriers along highways to piezoelectric systems that harvest energy from vibrations in bridges and roads. This integration helps power lighting, monitoring systems, and even feeds back into the grid.</p>
      
      <h2>Resilient Design</h2>
      <p>Sustainable infrastructure must also be resilient to climate change impacts. Engineers are designing structures that can withstand extreme weather events, rising sea levels, and temperature fluctuations, ensuring longer service life and reduced maintenance needs.</p>
      
      <h2>Conclusion</h2>
      <p>The shift toward sustainable infrastructure development represents a fundamental change in how we approach civil engineering projects. By prioritizing environmental considerations alongside traditional concerns like safety and efficiency, engineers are creating infrastructure that serves current needs while preserving resources for future generations.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "April 22, 2023",
    author: {
      name: "Sarah Johnson",
      title: "Environmental Engineering Specialist",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Sustainability",
    tags: ["Sustainability", "Infrastructure", "Green Building", "Environmental Engineering"],
  },
  {
    id: 3,
    title: "Advancements in Bridge Construction",
    excerpt:
      "New methodologies and technologies transforming bridge design and construction in challenging environments.",
    content: `
      <p>Bridge construction has evolved significantly in recent years, with new methodologies and technologies enabling engineers to overcome previously insurmountable challenges. This article explores the cutting-edge advancements that are transforming bridge design and construction.</p>
      
      <h2>Accelerated Bridge Construction (ABC)</h2>
      <p>ABC techniques have revolutionized how bridges are built, significantly reducing construction time and traffic disruption. Prefabricated bridge elements and systems (PBES) allow major components to be manufactured off-site and rapidly assembled on location, sometimes reducing construction time from months to days.</p>
      
      <h2>Advanced Materials</h2>
      <p>Ultra-high-performance concrete (UHPC), fiber-reinforced polymers (FRP), and high-strength steel are enabling longer spans, thinner structures, and greater durability. These materials offer superior strength, reduced weight, and enhanced resistance to environmental degradation.</p>
      
      <h2>Innovative Structural Systems</h2>
      <p>New structural systems like extradosed bridges (a hybrid between cable-stayed and girder bridges) and network arch bridges are providing economical solutions for medium to long spans. These designs optimize material usage while maintaining structural integrity and aesthetic appeal.</p>
      
      <h2>Digital Twin Technology</h2>
      <p>Digital twins—virtual replicas of physical bridges—are transforming how bridges are monitored and maintained. These models incorporate real-time sensor data to track structural health, predict maintenance needs, and simulate responses to various loading conditions.</p>
      
      <h2>Conclusion</h2>
      <p>The field of bridge engineering continues to advance rapidly, driven by innovations in materials, construction methods, and digital technologies. These advancements are enabling the creation of bridges that are not only structurally sound and efficient but also environmentally sustainable and visually striking.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "March 10, 2023",
    author: {
      name: "Michael Chen",
      title: "Bridge Engineering Specialist",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Infrastructure",
    tags: ["Bridge Construction", "Infrastructure", "Engineering Innovation", "Construction Technology"],
  },
  {
    id: 4,
    title: "The Future of Sustainable Construction",
    excerpt:
      "Exploring innovative materials and methods that are shaping the future of sustainable construction practices.",
    content: `
      <p>Sustainable construction is rapidly evolving as new technologies and materials emerge to address the growing environmental concerns in the building industry. This article explores the latest innovations and trends that are shaping the future of sustainable construction.</p>
      
      <h2>Innovative Materials</h2>
      <p>The development of new, eco-friendly building materials is at the forefront of sustainable construction. Materials such as cross-laminated timber (CLT), bamboo composites, and recycled steel are becoming increasingly popular alternatives to traditional materials.</p>
      <p>Cross-laminated timber, in particular, has gained significant attention for its strength, versatility, and carbon-sequestering properties. Buildings constructed with CLT can actually store carbon rather than emit it, making it an excellent choice for environmentally conscious projects.</p>
      
      <h2>Energy Efficiency</h2>
      <p>Energy-efficient design and construction methods are essential components of sustainable building practices. Passive house standards, which focus on creating buildings with minimal energy requirements for heating and cooling, are being adopted worldwide.</p>
      <p>Advanced insulation techniques, strategic window placement, and efficient HVAC systems all contribute to reducing a building's energy footprint. Additionally, the integration of renewable energy sources such as solar panels and wind turbines is becoming standard practice in sustainable construction.</p>
      
      <h2>Smart Building Technology</h2>
      <p>The integration of smart technology in buildings is revolutionizing how we monitor and control energy usage. Automated systems can adjust lighting, heating, and cooling based on occupancy and time of day, significantly reducing energy waste.</p>
      <p>Building Information Modeling (BIM) allows for precise planning and optimization of resources during the construction process, minimizing waste and improving efficiency. The future of sustainable construction will undoubtedly involve increasingly sophisticated smart building technologies.</p>
      
      <h2>Circular Economy Principles</h2>
      <p>The concept of a circular economy, where resources are kept in use for as long as possible, is gaining traction in the construction industry. This approach involves designing buildings for disassembly, using recyclable materials, and repurposing existing structures rather than demolishing them.</p>
      <p>By embracing circular economy principles, the construction industry can significantly reduce waste and resource consumption, contributing to a more sustainable future.</p>
      
      <h2>Conclusion</h2>
      <p>The future of sustainable construction is bright, with innovative materials, energy-efficient designs, smart technologies, and circular economy principles all contributing to a more environmentally friendly building industry. As these trends continue to evolve and gain wider adoption, we can look forward to a built environment that works in harmony with the natural world rather than against it.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "February 18, 2023",
    author: {
      name: "Emily Rodriguez",
      title: "Sustainability Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Sustainability",
    tags: ["Sustainable Construction", "Green Building", "Innovation", "Eco-friendly Materials"],
  },
  {
    id: 5,
    title: "Smart Cities: The Future of Urban Development",
    excerpt: "Exploring how smart technology is being integrated into urban planning and infrastructure development.",
    content: `
      <p>Smart cities represent the cutting edge of urban development, leveraging technology and data to create more efficient, sustainable, and livable urban environments. This article explores how smart technology is being integrated into urban planning and infrastructure development.</p>
      
      <h2>Integrated Infrastructure Systems</h2>
      <p>Smart cities feature interconnected infrastructure systems that communicate and share data in real-time. From traffic lights that adjust based on current traffic patterns to water systems that detect leaks automatically, these integrated networks optimize resource use and improve service delivery.</p>
      
      <h2>IoT and Sensor Networks</h2>
      <p>The Internet of Things (IoT) and extensive sensor networks form the backbone of smart city technology. These sensors collect data on everything from air quality and noise levels to pedestrian movement and energy consumption, providing valuable insights for urban planners and policymakers.</p>
      
      <h2>Data-Driven Decision Making</h2>
      <p>Smart cities leverage big data analytics to make informed decisions about urban development and resource allocation. By analyzing patterns and trends in city data, officials can identify areas for improvement, predict future needs, and measure the impact of various initiatives.</p>
      
      <h2>Citizen Engagement Platforms</h2>
      <p>Digital platforms that facilitate communication between citizens and government are a key component of smart cities. These platforms allow residents to report issues, provide feedback on city services, and participate in decision-making processes, fostering a more responsive and inclusive urban environment.</p>
      
      <h2>Conclusion</h2>
      <p>The development of smart cities represents a significant shift in how we approach urban planning and infrastructure development. By harnessing the power of technology and data, cities can address complex challenges like population growth, resource scarcity, and climate change while improving quality of life for their residents.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "January 25, 2023",
    author: {
      name: "Lisa Chang",
      title: "Urban Technology Specialist",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Technology",
    tags: ["Smart Cities", "Urban Planning", "IoT", "Infrastructure Technology"],
  },
  {
    id: 6,
    title: "The Impact of Climate Change on Infrastructure",
    excerpt: "How climate change is affecting infrastructure planning, design, and maintenance in different regions.",
    content: `
      <p>Climate change is having profound effects on infrastructure worldwide, necessitating new approaches to planning, design, and maintenance. This article examines the various impacts of climate change on infrastructure and how engineers are adapting to these challenges.</p>
      
      <h2>Extreme Weather Events</h2>
      <p>The increasing frequency and intensity of extreme weather events—such as hurricanes, floods, and heatwaves—are putting unprecedented stress on infrastructure systems. Bridges, roads, and buildings designed according to historical climate data may no longer be adequate to withstand these new conditions.</p>
      
      <h2>Rising Sea Levels</h2>
      <p>Coastal infrastructure is particularly vulnerable to rising sea levels, which threaten to inundate low-lying areas and increase the risk of storm surge damage. Engineers are developing innovative solutions such as floating structures, elevated buildings, and protective barriers to address these challenges.</p>
      
      <h2>Temperature Fluctuations</h2>
      <p>Extreme temperature fluctuations can cause materials to expand and contract, leading to accelerated deterioration of infrastructure. Engineers are exploring new materials and design approaches that can better withstand these temperature variations and extend the lifespan of structures.</p>
      
      <h2>Adaptation Strategies</h2>
      <p>Infrastructure adaptation strategies include incorporating climate projections into design standards, implementing redundant systems to ensure continuity of service during extreme events, and developing flexible designs that can be modified as conditions change.</p>
      
      <h2>Conclusion</h2>
      <p>As climate change continues to alter our environment, the field of civil engineering must evolve to meet these new challenges. By incorporating climate resilience into infrastructure planning and design, engineers can help ensure that our built environment remains safe, functional, and sustainable in the face of a changing climate.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "December 12, 2022",
    author: {
      name: "David Wilson",
      title: "Climate Resilience Engineer",
      image: "/placeholder.svg?height=200&width=200",
    },
    category: "Climate",
    tags: ["Climate Change", "Infrastructure", "Resilience", "Adaptation"],
  },
]

// Helper function to get related posts (excluding the current post)
export function getRelatedPosts(currentPostId: number, count = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random()) // Simple random sorting
    .slice(0, count)
}

// Helper function to get a post by ID
export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}
