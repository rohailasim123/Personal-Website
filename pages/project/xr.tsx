// pages/xr.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import { VRButton } from 'three/examples/jsm/webxr/VRButton';

const XRPage: NextPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    // mountRef.current.appendChild(VRButton.createButton(renderer));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create content panels
    const panelGroup = new THREE.Group();
    const panelData = [
      { 
        title: "Overview", 
        content: "The Multi-user Immersive Reality (MIR) landscape is evolving rapidly...",
        position: new THREE.Vector3(-1.5, 1.5, -3)
      },
      { 
        title: "Key Features", 
        content: "• Real-time AR/VR synchronization via WebXR\n• Delay-based congestion control...",
        position: new THREE.Vector3(1.5, 1.5, -3)
      },
      { 
        title: "Performance", 
        content: "• Up to 66% lower latency\n• 50% average bitrate improvement...",
        position: new THREE.Vector3(-1.5, -0.5, -3)
      },
      { 
        title: "Paper & Citation", 
        content: "Read the full paper...",
        position: new THREE.Vector3(1.5, -0.5, -3)
      }
    ];

    // Create interactive panels
    const panels: THREE.Mesh[] = [];
    const panelGeometry = new THREE.PlaneGeometry(2, 1.5);
    const panelMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });

    panelData.forEach(data => {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial.clone());
      panel.position.copy(data.position);
      panel.userData = { title: data.title, content: data.content };
      panelGroup.add(panel);
      panels.push(panel);
    });

    // Add text to panels
    const createPanelText = (text: string, size = 0.1) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 1024;
      canvas.height = 256;
      context.fillStyle = '#ffffff';
      context.font = 'bold 80px Arial';
      context.fillText(text, 10, 100);
      
      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.MeshStandardMaterial({ map: texture, transparent: true });
    };

    panels.forEach((panel, i) => {
      const titleMaterial = createPanelText(panelData[i].title);
      const title = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 0.2),
        titleMaterial
      );
      title.position.set(0, 0.5, 0.01);
      panel.add(title);
    });

    scene.add(panelGroup);

    // Add central Hera logo
    const logoGeometry = new THREE.IcosahedronGeometry(0.3, 2);
    const logoMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0066ff,
      wireframe: true,
      emissive: 0x0066ff,
      emissiveIntensity: 0.5
    });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 1.5, -2);
    scene.add(logo);

    // Add enter portal
    const portalGeometry = new THREE.RingGeometry(0.4, 0.5, 32);
    const portalMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff99,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    const portal = new THREE.Mesh(portalGeometry, portalMaterial);
    portal.position.set(0, -1, -2);
    portal.rotation.x = Math.PI / 2;
    scene.add(portal);

    // Positioning
    camera.position.set(0, 1.6, 0);
    const controller = renderer.xr.getController(0);
    scene.add(controller);

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const tempMatrix = new THREE.Matrix4();
    let activePanel: THREE.Mesh | null = null;

    // Handle controller events
    controller.addEventListener('selectstart', () => {
      raycaster.setFromXRController(controller);
      const intersects = raycaster.intersectObjects(panels);
      
      if (intersects.length > 0) {
        activePanel = intersects[0].object as THREE.Mesh;
        activePanel.scale.multiplyScalar(1.1);
      } else {
        // Check if portal is selected
        raycaster.setFromXRController(controller);
        const portalIntersect = raycaster.intersectObject(portal);
        if (portalIntersect.length > 0) {
          window.location.href = '/hera';
        }
      }
    });

    controller.addEventListener('selectend', () => {
      if (activePanel) {
        activePanel.scale.divideScalar(1.1);
        activePanel = null;
      }
    });

    // Animation and rendering
    const animate = () => {
      if (renderer.xr.isPresenting) {
        portal.rotation.z += 0.01;
        logo.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hera Project - WebXR Experience</title>
        <meta name="description" content="Immersive WebXR experience of the Hera project" />
      </Head>
      
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '10px 20px',
          borderRadius: '10px'
        }}>
          {/* <p>Use VR controllers to interact with panels</p> */}
          {/* <p>Point at the green portal to return to main page</p> */}
        </div>
      </div>
    </>
  );
};

export default XRPage;