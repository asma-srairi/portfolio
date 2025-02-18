import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../../common/Modal';

function Projects() {
  const GameDev = '/assets/ImgAsma/GameDevIcon.png';
  const EnvArt = '/assets/ImgAsma/EnvIcon.png';
  const ConceptArt = '/assets/ImgAsma/ConceptIcon.png';
  const DigitalArt = '/assets/ImgAsma/DigitalArtIcon.png';
  const Drawing = '/assets/ImgAsma/DrawingIcon.png';
  const hipsster = '/assets/hipsster.png';
  const fitLift = '/assets/fitlift.png';

  //VR
  const VR1 = '/assets/ImgAsma/GameDev/VR8.png'
  const VR2 = '/assets/ImgAsma/GameDev/VR3.png'
  const VR3 = '/assets/ImgAsma/GameDev/VR5.png'
  const VR4 = '/assets/ImgAsma/GameDev/VR7.png'
  const VR5 = '/assets/ImgAsma/GameDev/VR12.png'
  const VR6 = '/assets/ImgAsma/GameDev/VRGG.png'
  const VRvid = '/assets/ImgAsma/GameDev/IndarVR.mp4'
  //got
  const got1 = '/assets/ImgAsma/GameDev/got5.jpg'
  const got2 = '/assets/ImgAsma/GameDev/got1.jpg'
  const got3 = '/assets/ImgAsma/GameDev/got9.jpg'
  const got4 = '/assets/ImgAsma/GameDev/got4.jpg'
  const got5 = '/assets/ImgAsma/GameDev/got7.jpg'
  //ARFur
  const fur1 = '/assets/ImgAsma/GameDev/fur1.jpg'
  const fur2 = '/assets/ImgAsma/GameDev/fur2.jpg'
  const fur3 = '/assets/ImgAsma/GameDev/fur5.jpg'
  const fur4 = '/assets/ImgAsma/GameDev/fur3.jpg'
  //ENV
  const env1 = '/assets/ImgAsma/EnvArt/env1.png'
  const env2 = '/assets/ImgAsma/EnvArt/env2.png'
  const env3 = '/assets/ImgAsma/EnvArt/ROOM1.png'
  const env4 = '/assets/ImgAsma/EnvArt/ROOM2.png'
  const env5 = '/assets/ImgAsma/EnvArt/env3.png'
  const env6 = '/assets/ImgAsma/EnvArt/env4.png'
  const env7 = '/assets/ImgAsma/EnvArt/ROOM3.png'
  const rpg1 = '/assets/ImgAsma/EnvArt/rpg1.jpg'
  const rpg2 = '/assets/ImgAsma/EnvArt/rpg3.jpg'
  const rpg3 = '/assets/ImgAsma/EnvArt/rpg5.jpg'
  const rpg4 = '/assets/ImgAsma/EnvArt/rpg8.jpg'
  const lava1 = '/assets/ImgAsma/EnvArt/LAVATOWN.png'
  const lava2 = '/assets/ImgAsma/EnvArt/LAVATOWN2.png'
  const lava3 = '/assets/ImgAsma/EnvArt/LAVATOWN3.png'
  const lava4 = '/assets/ImgAsma/EnvArt/LAVATOWN4.png'
  const ENVvid = '/assets/ImgAsma/EnvArt/ENV2.mp4'
  const ENVvid2 = '/assets/ImgAsma/EnvArt/inv11.mp4'
  const cs1 = '/assets/ImgAsma/EnvArt/CSMIRAGE.png'
  const cs2 = '/assets/ImgAsma/EnvArt/SITE.png'
  const cS3 = '/assets/ImgAsma/EnvArt/PALACE.png'
  const cs4 = '/assets/ImgAsma/EnvArt/RAMP.png'

  //Concept
  const con1 = '/assets/ImgAsma/ConceptArt/AK1.png'
  const con2 = '/assets/ImgAsma/ConceptArt/GLO1.png'
  const con3 = '/assets/ImgAsma/ConceptArt/GA1.png'
  const con4 = '/assets/ImgAsma/ConceptArt/D1.png'
  const con5 = '/assets/ImgAsma/ConceptArt/AK11.png'
  const con6 = '/assets/ImgAsma/ConceptArt/asmada2.png'
  const con7 = '/assets/ImgAsma/ConceptArt/charcter22.jpg'
  const con8 = '/assets/ImgAsma/ConceptArt/character designAstra3.jpg'
  const con9 = '/assets/ImgAsma/ConceptArt/sandBladeDesign1.jpg'
  const con10 = '/assets/ImgAsma/ConceptArt/stariumCapsuleHero.jpg'

  //DigitalArt
  const da1 = '/assets/ImgAsma/DigitalArt/asmada1.jpg'
  const da2 = '/assets/ImgAsma/DigitalArt/asma2.png'
  const da3 = '/assets/ImgAsma/DigitalArt/GOJU.jpg'
  const da4 = '/assets/ImgAsma/DigitalArt/watercolor.jpg'

  //Drawings
  const dd1 = '/assets/ImgAsma/Drawings/Realistic2.jpg'
  const dd2 = '/assets/ImgAsma/Drawings/drawing4.jpg'
  const dd4 = '/assets/ImgAsma/Drawings/drawing5.jpg'
  const dd5 = '/assets/ImgAsma/Drawings/kkiki.jpg'
  const dd6 = '/assets/ImgAsma/Drawings/drawing10.jpg'
  const dd7 = '/assets/ImgAsma/Drawings/drawing11.jpg'
  const dd8 = '/assets/ImgAsma/Drawings/drawing12.jpg'
  const dd9 = '/assets/ImgAsma/Drawings/drawing1.jpg'
  const dd10 = '/assets/ImgAsma/Drawings/drawing6.jpg'
  const dd11 = '/assets/ImgAsma/Drawings/Realistic1.jpg'
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalSections, setModalSections] = useState([]);

  const handleOpenModal = (projectSections) => {
    setModalSections(projectSections);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const projects = [
    {
      src: GameDev,
      h3: 'Game Development',
      p: (
        <>
          XR Apps,<br /> Desktop games
        </>
      ),
      sections: [
        {
          title: 'INDAR Virtual Reality furniture experience',
          description: [
            'Develop immersive VR experience for furniture suppliers and their customers',
            '3D Design (Blender)',
            'UI/UX design (Figma)',
            'Environment Design (UE5)',
            'Virtual Reality (VR) Development (UE5)',
            'Rendering Optimization (Real-Time Rendering, Lighting, Post-Processing Effects, Shading and Materials) (UE5)',
            'Backend Development (NodeJS, MongoDB)',
            'Deployment and Version Control(GitHub, Vercel)',

          ], images: [VR1, VR2, VR6, VR4, VR5, VR3],
          videoSrc: VRvid,
        },
        {
          title: 'AR (Augmented Reality) Game of thrones',
          description: ['Develop immersive AR experience of game of thrones board game',
            '3D Design (Blender)',
            'UI/UX design (Figma)',
            'Augmented Reality (AR) Development (UNITY(Vuforia))',
            'Backend Development (NodeJS, MongoDB)',
            'Deployment and Version Control(GitHub, Vercel)',],
          images: [got1, got2, got3, got4, got5],
          videoSrc: null,
        },
        {
          title: 'AR (Augmented Reality) Furniture experience',
          description: ['Develop immersive AR experience of home furniture visualisation',
            '3D Design (Blender)',
            'UI/UX design (Figma)',
            'Augmented Reality (AR) Development (UNITY(Vuforia))',
            'Backend Development (NodeJS, MongoDB)',
            'Deployment and Version Control(GitHub, Vercel)',],
          images: [fur1, fur2, fur3, fur4],
          videoSrc: null,
        },
      ],
    },
    {
      src: EnvArt,
      h3: 'Environment Art',
      p: (
        <>
          UE5 immersive,<br /> Environments
        </>
      ),
      sections: [
        {
          title: 'Tropical Riverside Environment',
          description: ['Unreal Engine 5 Environment design with vibrant tropical riverside landscape with lush greenery',
            'Post-Processing Effects',
            'Dynamic Lighting',
            'Wind Simulation',
            '3D Audio (Music and Sound Effects)',
            'High-Quality Textures',
            'Movie Rendering',
          ],
          images: [env1, env2, env3, env4, env5, env7, env6],
          videoSrc: ENVvid2,
        },
        {
          title: 'Apocalypse Road RGP Environment',
          description: ['Design of a desolate landscape filled with cracked asphalt roads and jagged remnants of civilization',
            'Post-Processing Effects',
            'Dynamic Lighting',
            'Wind Simulation',
            '3D Audio (Music and Sound Effects)',
            'High-Quality Textures',
            'Movie Rendering',
          ],
          images: [rpg1, rpg2, rpg3, rpg4],
          videoSrc: ENVvid,
        },
        {
          title: 'Stylized Counter Strike A site (Mirage Map)',
          description: ['Since I am a big fan of the game, I recreated the famous A site of the map Mirage in Stylized fun way!',
            'Post-Processing Effects',
            'Dynamic / Static Lighting',
            'High-Quality Lava Textures',
            'Stylized Assests'
          ],
          images: [cs1, cs2, cS3, cs4],
          videoSrc: null,
        },
        {
          title: 'Stylized Lava Town',
          description: ['Design of a vibrant lava town features whimsical architecture made of volcanic rock',
            'Post-Processing Effects',
            'Dynamic / Static Lighting',
            '3D Audio (Music and Sound Effects)',
            'High-Quality Lava Textures',
          ],
          images: [lava1, lava2, lava3, lava4],
          videoSrc: null,
        },
      ],
    },
    {
      src: ConceptArt,
      h3: 'Concept Art',
      p: (
        <>
          Sketches, Characters<br /> Skin Creations
        </>
      ),
      sections: [
        {
          title: 'Character Design (Combination Concept)',
          description: ['Desiging combined characters from animes, movies, TV Shows and video games, a personnal fun project! ',
             'Sketching','2D design', 'Digital drawing',
          ],
          images: [con7],
          videoSrc: null,
        },
        {
          title: 'Spectre Divide Character Design',
          description: ['Combining environment realism with anime battle character',
            'Digital drawing', 'shading', '2D Design',
          ],
          images: [con6],
          videoSrc: null,
        },
        {
          title: 'Character Design (Valorant Agent)',
          description: ['Desiging a Gen Z (more casual) version of my favorite valorant agent _Astra_ ',
             'Sketching','2D design', 'Digital drawing',
          ],
          images: [con8],
          videoSrc: null,
        },
        {
          title: 'Character Creation (New Valorant Agent)',
          description: ['Creating a brand new valorant agent bases on sand abilities !!  ',
             'Sketching','2D design', 'Digital drawing',
          ],
          images: [con9],
          videoSrc: null,
        },
        {
          title: 'Counter Strike 2 Skin creation (Workshop)',
          description: ['Creation of unique skins for CS2 that reflects my passion for the game and its vibrant community',
            'UV editing', '3D design', 'Digital drawing', 'Texture mapping',
          ],
          images: [con1, con2, con3, con4, con5],
          videoSrc: null,
        },
       
      ],
    },
    {
      src: DigitalArt,
      h3: 'Digital Art',
      p: (
        <>
          Anime, Portraits<br /> Watercolor painting
        </>
      ),
      sections: [
        {
          title: 'Digital Drawing',
          description: ['These series of my digital drawings/painting focusing on details portraits, shading, and realism',
          ],
          images: [da1, da2, da3, da4],
          videoSrc: null,
        },
      ],
    },
    {
      src: Drawing,
      h3: 'Drawings',
      p: (
        <>
          Anime, Abstract Art<br /> Realism, Line Art
        </>
      ),
      sections: [
        {
          title: 'Drawing',
          description: ['These series of my drawings from childhoom until now, showcasing my artistic masterpieces',
          ],
          images: [dd1, dd2, dd4, dd5, dd6, dd7, dd8, dd9, dd10, dd11],
          videoSrc: null,
        },
      ],
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            h3={project.h3}
            p={project.p}
            onClick={() => handleOpenModal(project.sections)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} sections={modalSections} />
    </section>
  );
}

export default Projects;
