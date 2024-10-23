import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import GameDev from '../../assets/ImgAsma/GameDevIcon.png';
import EnvArt from '../../assets/ImgAsma/EnvIcon.png';
import ConceptArt from '../../assets/ImgAsma/ConceptIcon.png';
import DigitalArt from '../../assets/ImgAsma/DigitalArtIcon.png';
import Drawing from '../../assets/ImgAsma/DrawingIcon.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../../common/Modal';
//VR
import VR1 from '../../assets/ImgAsma/GameDev/VR8.png'
import VR2 from '../../assets/ImgAsma/GameDev/VR3.png'
import VR3 from '../../assets/ImgAsma/GameDev/VR5.png'
import VR4 from '../../assets/ImgAsma/GameDev/VR7.png'
import VR5 from '../../assets/ImgAsma/GameDev/VR12.png'
import VR6 from '../../assets/ImgAsma/GameDev/VRGG.png'
import VRvid from '../../assets/ImgAsma/GameDev/IndarVR.mp4'
//got
import got1 from '../../assets/ImgAsma/GameDev/got5.jpg'
import got2 from '../../assets/ImgAsma/GameDev/got1.jpg'
import got3 from '../../assets/ImgAsma/GameDev/got9.jpg'
import got4 from '../../assets/ImgAsma/GameDev/got4.jpg'
import got5 from '../../assets/ImgAsma/GameDev/got7.jpg'
//ARFur
import fur1 from '../../assets/ImgAsma/GameDev/fur1.jpg'
import fur2 from '../../assets/ImgAsma/GameDev/fur2.jpg'
import fur3 from '../../assets/ImgAsma/GameDev/fur5.jpg'
import fur4 from '../../assets/ImgAsma/GameDev/fur3.jpg'
//ENV
import env1 from '../../assets/ImgAsma/EnvArt/env1.png'
import env2 from '../../assets/ImgAsma/EnvArt/env2.png'
import env3 from '../../assets/ImgAsma/EnvArt/ROOM1.png'
import env4 from '../../assets/ImgAsma/EnvArt/ROOM2.png'
import env5 from '../../assets/ImgAsma/EnvArt/env3.png'
import env6 from '../../assets/ImgAsma/EnvArt/env4.png'
import env7 from '../../assets/ImgAsma/EnvArt/ROOM3.png'
import rpg1 from '../../assets/ImgAsma/EnvArt/rpg1.jpg'
import rpg2 from '../../assets/ImgAsma/EnvArt/rpg3.jpg'
import rpg3 from '../../assets/ImgAsma/EnvArt/rpg5.jpg'
import rpg4 from '../../assets/ImgAsma/EnvArt/rpg8.jpg'
import lava1 from '../../assets/ImgAsma/EnvArt/LAVATOWN.png'
import lava2 from '../../assets/ImgAsma/EnvArt/LAVATOWN2.png'
import lava3 from '../../assets/ImgAsma/EnvArt/LAVATOWN3.png'
import lava4 from '../../assets/ImgAsma/EnvArt/LAVATOWN4.png'
import ENVvid from '../../assets/ImgAsma/EnvArt/ENV2.mp4'
import ENVvid2 from '../../assets/ImgAsma/EnvArt/inv11.mp4'

//Concept
import con1 from '../../assets/ImgAsma/ConceptArt/Ak1.png'
import con2 from '../../assets/ImgAsma/ConceptArt/GLO1.png'
import con3 from '../../assets/ImgAsma/ConceptArt/GA1.png'
import con4 from '../../assets/ImgAsma/ConceptArt/D1.png'
import con5 from '../../assets/ImgAsma/ConceptArt/AK11.png'
import con6 from '../../assets/ImgAsma/ConceptArt/asmada2.png'

//DigitalArt
import da1 from '../../assets/ImgAsma/DigitalArt/asmada1.jpg'
import da2 from '../../assets/ImgAsma/DigitalArt/asma2.png'
import da3 from '../../assets/ImgAsma/DigitalArt/GOJU.jpg'
import da4 from '../../assets/ImgAsma/DigitalArt/watercolor.jpg'

//Drawings
import dd1 from '../../assets/ImgAsma/Drawings/Realistic2.jpg'
import dd2 from '../../assets/ImgAsma/Drawings/drawing4.jpg'
import dd4 from '../../assets/ImgAsma/Drawings/drawing5.jpg'
import dd5 from '../../assets/ImgAsma/Drawings/kkiki.jpg'
import dd6 from '../../assets/ImgAsma/Drawings/drawing10.jpg'
import dd7 from '../../assets/ImgAsma/Drawings/drawing11.jpg'
import dd8 from '../../assets/ImgAsma/Drawings/drawing12.jpg'
import dd9 from '../../assets/ImgAsma/Drawings/drawing1.jpg'
import dd10 from '../../assets/ImgAsma/Drawings/drawing6.jpg'
import dd11 from '../../assets/ImgAsma/Drawings/Realistic1.jpg'




function Projects() {
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

          ], images: [VR1, VR2, VR6, VR4, VR5,VR3],
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
          title: 'Counter Strike 2 Skin creation (Workshop)',
          description: ['Creation of unique skins for CS2 that reflects my passion for the game and its vibrant community',
            'UV editing', '3D design', 'Digital drawing', 'Texture mapping',
          ],
          images: [con1, con2, con3, con4, con5],
          videoSrc: null,
        },
        {
          title: 'Spectre Divide Character Design',
          description: ['Combining environment realism with anime battle character',
             'Digital drawing', 'shading',
          ],
          images: [con6],
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
          images: [da1, da2,da3,da4],
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
          images: [dd1, dd2,dd4,dd5,dd6,dd7,dd8,dd9,dd10,dd11],
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
